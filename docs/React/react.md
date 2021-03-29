# React

vue 注重编译时优化，proxy 精确的找到变动的节点
react 针对运行时优化，考虑如何不阻塞用户交互之类的

## 一、版本对比

### 1.1 第 15 版

主要成分：

- reconciler 找到更新的组件
- renderer 渲染页面

- 🐔 优化：做了批量更新的优化
- 🐧 缺点：递归的，一个长任务，会阻塞 UI 渲染

### 1.2 第 16 版 fiber 架构

1. 主要分成
   - reconciler 找到更新的组件
   - renderer 渲染页面
   - Scheduler 调度优先级 new +
2. 优化部分：
   - 把调度任务放在宏任务中，保证不让用户失去响应
   - 对任务做了优先级的响应，高优先级可以先中断低优先级
3. 缺点：把优先级分为更详细的情况处理不了
   1. cpu 任务
   2. io 任务

#### fiber：fiber 和 fiber 之间以链表的形式连接

### 1.3 第 17 版 对优先级做了一个扩展

从指定的优先级 --> 到指定一个连续的优先级的区间

## 二、Scheduler 调度器

调度任务的优先级，高优先任务先进入 Reconciler

🦌 优先级是跟时间绑定的，随着时间的流逝优先级会往上升

### 2.1 优先级

1. 生命周期方法：同步任务
2. 受控的用户输入：比如输入框输入文字，同步
3. 交互事件：比如动画
4. 其他：比如数据请求，低优先级任务

### 2.2 流程：

调度逻辑：

1. fiberNode 通过 this.return、this.sibling 组建 fiberTree
2. 每次更新 执行 setState
3. 判断任务
   1. 同步任务，立刻调度，意味着优先级是最高的，没有任何任务可以打断他
   2. 异步任务，优先级不是很高的
      1. 进入 insureRootIsScheduler 方法做一些操作，
         1. 判断是否已经有一个 fiber 已经在运行中，如果是，判断是否是同一级别的优先级，是就做一个批处理的逻辑
         2. 主要进行一个新 fiber 和正在处理的中的 fiber 的判断，判断是要做一个新的更新还是要复用之前的更新
      2. 进入 unstable_schedulerCallback 方法，优先级开始发挥作用，判断有没有 delay(delay=0||delay>0)
         1. 有--> delay>0 -->添加到延时任务 time Queue
         2. 没有--> delay==0 -->添加到及时任务 task Queue
            1. 到宏任务中，执行一个发起更新的逻辑，宏任务中可以保证-->主线程会一直处于一直响应的状态
            2. 每执行一个就会清空 task Queue，清空之后通过 loop 一个个的清空
            3. 清空完之后会判断 time Queue 中的任务到没到时间，到了就加到 task Queue 中
   3. performSyncWorkOnRoot 方法最终把 diff render 操作更新到页面中

两个宏任务之间间隔了主线程的调用

## 三、 Reconciler 协调器

- 主要找到变化的组件
- diff
- 生成 dom 元素
- 并不会渲染到页面，为了打断优先级（例如 diff 就比较耗时）
- 先打一个标记

### 3，1 双缓存结构

- react 内部会同时存在两个 fiberTree
- 内部是双缓存

fiberNode 中 this.alternate 指向 workInProgress Fiber(上一次构建的 fiber 镜像)，找的比较快

- 屏幕上显示内容对应的 fiber 树：`current fiber`
- 正在内存中构建的 fiber 树：`workInProgress fiber` 比如更新
- 他们通过`alternate`属性链接，当 workInProgress fiber 构建完成后，通过 alternate 指向它，current fiber 就被丢弃

🐅 为什么要双缓存：快速找到 fiber、某些情况下直接复用 fiber

### 3.2 构建 fiber tree

#### Reconciler 代码

1. 从 `renderRootSync` 开始，从优先级更高的 fiber root 开始递归
2. 双层循环
3. `beginWork` 从上到下，创建 fiber root
4. `completeWork` 从下到上
   1. 向上递归
   2. 创建 DOM 节点
   3. 把子节点添加到父节点的链上
   4. 存在兄弟节点，就执行兄弟节点的 beginWork 过程
   5. 不存在兄弟节点，就返回父节点，执行父节点的 completeWork
5. next 存在，接着递归

### 3.3 diff

#### ① 预设规则

1. 只对同级别作比较
2. 节点变化，直接删除，然后重建
3. 是否存在 key 值，对比 key 值一样的节点

#### ② 单节点和多节点

- 单节点-->object、 number、string
- 多节点-->数组

多节点的**key 值**比单节点稍微繁琐一点

#### ③ 单节点 diff 逻辑

1. 判断存在对应节点，key 是否相同，节点类型一致，可以复用
2. key 值相同，**节点类型不一致**，删除
3. key 值不同，删除
4. 不存在对应节点，创建

#### ④ 多节点 diff 逻辑

1. 对比新旧 children 相同 index 的对象 key 是否相同，相同返回对象，不同返回 null
2. key 不同，节点不能复用，跳出
3. 判断节点是否存在移动，存在返回 新位置
4. 老数组多余新数组，删除
5. 存在新的节点，创建
6. 所有剩余没有匹配的节点，新的数组根据 key 从这个 map 林查找

## 四、renderer （commit 阶段）

- 将变化组件渲染到页面中
- 不能被打断

### 4.1 DOM 操作前

1. 处理 DOM 节点，
2. 调用 getSnapshotBeforeUpdate 钩子
3. 调用 useEffect

useEffect 是异步的/useLayoutEffect，在 DOM 操作后是同步的会堵塞线程

### 4.2 DOM 操作中

1. 遍历 finishedWork，执行 DOM 操作
2. 对删除的数组会执行 componentWillUnMount 生命周期

都是递归处理子节点

### 4.3 DOM 操作后

1. layout 阶段，也是遍历 effectList ,调用生命周期执行 useEffect
2. 赋值 ref
3. 处理回调

## react 库

matarial-ui、Storybook、gatsby、formik、react-hook-form、docusaurus、React TypeScript Cheatsheets、react-use、React-Query、Recoil、react-spring

- VFC 不带 children 的节点
- FC 函数无状态节点

```ts
import {VFC, FC} from "react"
const Home = VFC<{}> => ()
```
