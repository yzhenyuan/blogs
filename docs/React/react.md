# React


## 函数式组件

### 哪些事件要写道组件里？

如果这个事件一定要随这个组件复用，这个事件对 state 有操作

### useCallback()

```js
const todo = useCallback(() => {
  //....some
}, []);
// 证明 todo 只会执行一次（事件句柄 只会创建一次）
```

如果事件不是有什么特别特殊的情况下

## react 库

matarial-ui、Storybook、gatsby、formik、react-hook-form、docusaurus、React TypeScript Cheatsheets、react-use、React-Query、Recoil、react-spring

VFC 不带 children 的节点
FC 函数无状态节点

```ts
import {VFC, FC} from "react"
const Home = VFC<{}> => ()
```

**React query**
