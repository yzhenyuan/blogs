# hooks

## 一、常用 hooks

1. hooks 只能在 function component 中使用
2. renderWithHooks 方法才会注入 hooks 上下文
3. useState 定义 state
4. useEffect 模拟生命周期--> didMount didUpdate willUnmount
5. useCallback 把函数缓存一下
6. useMemo 把值缓存一下
7. useContext+useReducer 在 function component 中使用 context

#### hooks 解决了什么问题 ❓

- 符合 solid 原则
  - 单一职责原则（SRP）
  - 开放封闭原则（OCP）
  - 里氏替换原则（LSP）
  - 接口隔离原则（ISP）
  - 依赖倒置原则（DIP）
- 代码简单化
- 丰富了 function component 功能

## useState

分为 3 个阶段：

1. mountState ==> 初始化
   1. 执行 mountState()
   2. 默认值是 function，执行 function，得到初始 state
   3. state 存放在 memoizedState 属性中
   4. 新建一个 quene
   5. 把 Quene 传给 dispatch
   6. 返回默认值和 dispatch
2. dispatchAction ==> setState
   1. 
3. updateState ==> 更新
## useEffect/useLayoutEffect

- useEffect 是异步的
- useLayoutEffect，在 DOM 操作后是同步的会堵塞线程

## useCallback 和 useMemo

### useCallback

当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。

```js
useCallback(fn, deps);
相当于;
useMemo(() => fn, deps);
```

### useMemo

传入 useMemo 的函数会在 渲染期间 执行

主要区别是：

- useMemo 将调用 fn 函数并返回其结果
- useCallback 将返回 fn 函数而不调用它。

---

- React.memo： 对组件做一层 props 的浅比较，类似 shouldComponentUpdate 的逻辑
- useCallback： 缓存函数
- useMemo： 是 hooks 里对值的缓存，依赖变化的时候才会更新


immer.js
