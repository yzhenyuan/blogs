# hooks
## 一、常用hooks
1. hooks只能在function component中使用
2. renderWithHooks 方法才会注入 hooks 上下文
3. useState 定义state
4. useEffect模拟生命周期--> didMount didUpdate willUnmount
5. useCallback 把函数缓存一下
6. useMemo 把值缓存一下
7. useContext+useReducer在function component中使用context

 hooks解决了什么问题❓
 - 符合solid原则
   - 单一职责原则（SRP）
   - 开放封闭原则（OCP）
   - 里氏替换原则（LSP）
   - 接口隔离原则（ISP）
   - 依赖倒置原则（DIP）
 - 代码简单化
 - 丰富了function component 功能

## useState 
分为3个阶段：
1. mountState ==> 初始化
   1. 
2. dispatchAction ==> setState
3. updateState ==> 更新


## useCallback 和 useMemo
### useCallback
当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。


```js
useCallback(fn, deps) 
相当于 
useMemo(() => fn, deps)

```
### useMemo
传入 useMemo 的函数会在 渲染期间 执行

主要区别是：
- useMemo 将调用 fn 函数并返回其结果
- useCallback 将返回 fn 函数而不调用它。

---

- React.memo： 对组件做一层props的浅比较，类似shouldComponentUpdate的逻辑
- useCallback： 缓存函数
- useMemo： 是hooks里对值的缓存，依赖变化的时候才会更新





## useEffect/useLayoutEffect
- useEffect是异步的
- useLayoutEffect，在DOM操作后是同步的会堵塞线程


immer.js