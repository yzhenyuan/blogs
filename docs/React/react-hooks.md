# hooks

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
