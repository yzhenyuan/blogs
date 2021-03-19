# React Fiber

## 一、了解 Fiber

**Fiber 是什么？**---计算机有进程（Process）和线程（Thread）的概念，然后，还有个`Fiber`概念，意思是比线程(Thread)控制得更精密的并发处理机制。

react 在进行组件渲染时，从 setState 开始到渲染完成整个过程是**同步**的。如果需要渲染的组件比较庞大，js 执行会占据主线程时间较长，会导致页面响应度变差，因为 JavaScript 是单线程的，任何交互、布局、渲染都会停止，使得 react 在动画、手势等应用中效果比较差

### 那么如何解决呢？

1. 提升计算机的算力，但是我们的应用可能跑在千差万别的设备上，总会有很多设备硬件水平不是很高
2. `web worker`，让 diff 操作在另外一个线程中并行执行。这是个好思路，但是这可能会带来额外的开销，react 官方并没有采用这个策略
3. React Fiber：将 diff 操作变成可中断的，只有当浏览器空闲时再做 diff。避免 diff 更新长时间占据浏览器线程

事实上，我们要解决的其实并不是性能问题，而是 **调度问题**。用户的交互事件属于高优先级，需要尽快响应。而 diff 操作优先级相对没那么高，可以在几个时间段内分片执行。

## 二、什么是 React Fiber

为了解决 diff 时间过长导致的卡顿问题，React Fiber 用类似 `requestIdleCallback` 的机制来做异步 diff

### requestIdleCallback

`requestIdleCallback` 方法将在浏览器的空闲时段内调用函数。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。

什么是空闲时段？当浏览器呈现一帧所需的时间少于屏幕刷新率时间(对于 60Hz 的设备，帧间隔应小于 16ms)，他们两之差就是空闲时间

但是由于原生提供的 `requestIdleCallback` 方法的 `timeRemaining()` 最大返回是 50ms，也就是 20fps，达不到页面流畅度的要求，并且该 API 兼容性也比较差。所以 React 团队没有直接使用原生的 requestIdleCallback，而是自己 [polyfill](https://github.com/facebook/react/blob/master/packages/scheduler/src/forks/SchedulerDOM.js) 了一个

### fiber 特点

- 链表结构 - fiber
- 循环代替递归（深度优先遍历）——可中断（协程的概念来回交换执行权）
- requestIdleCallback/requestAnimateFrame —— 可异步（时间切片把 langtime 分成一段一段小任务）

## 三、 如何让 React 的 diff 可中断？

虚拟 dom 是一个树状结构，diff 操作实际上就是递归遍历了一遍这颗树。

不同于前面一直递增到 10000 就结束的简单例子，在递归中中断以及恢复状态很麻烦。如果改成类似链表的结构那就好办很多，可以一直 next，知道 next 为 null 就知道遍历结束了。

也就是说，我们需要将递归操作变成遍历操作，Fiber 恰巧也是这么做的。


总结一下，为了解决 diff 时间过长导致的卡顿问题，React Fiber 用类似 requestIdleCallback 的机制来做异步 diff。但是之前的数据结构不支持这样的实现异步 diff，于是 React 实现了一个类似链表的数据结构，将原来的 递归 diff 变成了现在的 遍历 diff，这样就能方便的做中断和恢复了。


## 四、 原理

旧版 react 通过 **递归** 的方式进行渲染，使用的是js引擎自身的函数调用栈，会一直执行到**栈空**为止

fiber 实现了自己的函数调用栈，以链表的形式遍历组件树，可以实现 暂停、继续、和丢弃执行的任务。实现方式是使用了浏览器 `requestIdleCallback`

### 4.1 react 内部运转

分为三层：
1. virtual DOM：描述页面长什么样
2. reconciler （调节器） ：负责调用组件生命周期方法，进行diff运算
3. renderer 层：渲染相应的页面

### 4.2 任务优先级

为了实现不卡顿，就需要有一个调度器来进行任务分配

优先级高的任务可以打断优先级低的任务的执行，从而更快的生效

任务的优先级有六种：
1. synchronous：同步任务
2. task：在next tick 之前执行
3. animation：下一帧之前执行
4. high：在不久的将来执行
5. low：稍微延迟执行也没关系
6. offscreen：下次 render 或scroll 执行

### 4.3 fiber 执行阶段
1. 生成fiber 树，得出需要更新的节点信息；这一步是渐进的过程，客户源被打断
2. 将需要更新的节点一次批量更新，过程不能被打断

### 4.4 fiber 树
fiber reconciler在阶段一进行diff的时候，会基于 vDOM树 生成一颗 fiber 树，本质是链表

## 五、fiber 跟之前的 stack 算法有什么区别
stack 