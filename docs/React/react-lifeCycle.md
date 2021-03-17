# 生命周期

react 16 版本 生命周期 一共分为四个阶段

1. 初始化
2. 运行中
3. 销毁
4. 错误处理（16 版之后新增）：componentDidCatch(error, info)

## 一、初始化

- constructor() 用来做一些组件的初始化工作，如定义 this.state 的初始内容
- super(props)用来调用基类的构造方法( constructor() ), 也将父组件的 props 注入给子组件（组件中 props 只读不可变，state 可变）

```js
class Test extends Component {
  constructor(props) {
    super(props);
  }
}
```

## 二、挂载阶段

这个阶段分三个时期

1. componentWillMount
2. render
3. componentDidMount

### 2.1 componentWillMount

- 在组件挂载到 DOM 前调用，且只会被调用一次
- 在这边调用 this.setState 不会引起组件重新渲染，也可以把写在这边的内容提前到 constructor()中，所以项目中很少用

### 2.2 render

- 根据组件的 `props` 和 `state` ，返回一个 react 元素，用于描述组件的 UI
- 并不负责组件的实际渲染工作，真正的渲染 DOM 的工作，由 react 自身根据此元素去负责
- `render` 是纯函数，不能在里面执行 `this.setState`，会有改变组件状态的副作用
- shouldComponentUpdate 返回 false，render 不会被调用

### 2.3 componentDidMount

- 组件挂载到 DOM 后调用，且只会被调用一次

## 三、更新阶段

这个阶段会**根据条件**触发下面几个钩子

1. componentWillReceiveProps
2. shouldComponentUpdate
3. componentWillUpdate
4. render 这边只是**重新调用**
5. componentDidUpdate

### 3.1 componentWillReceiveProps(nextProps)

- `props`的更新会触发这个钩子
- 参数`nextProps`是父组件传给当前组件的新`props`

### 3.2 shouldComponentUpdate(nextProps, nextState)

- 通过比较 nextProps，nextState 及当前组件的 this.props，this.state
- 返回 true 时当前组件将继续执行更新过程，返回 false 则当前组件更新停止，
- 以此可用来减少组件的不必要渲染，优化组件性能。

### 3.3 componentWillUpdate(nextProps, nextState)

此方法在调用 render 方法前执行，在这边可执行一些组件更新发生前的工作

### 3.4 render

只是**重新调用**

### 3.5 componentDidUpdate(prevProps, prevState)

- 此方法在组件更新后被调用，可以操作组件更新的 DOM
- prevProps 和 prevState 这两个参数指的是组件更新前的 props 和 state

## 四、错误处理阶段

### componentDidCatch(error, info)

组件抛出错误后被调用

- error：错误信息
- info：包含有关组件引发错误的栈信息

## 五、新的的生命周期

### 5.1 修改的哪些？

新增：

- `static getDerivedStateFromProps`
- `getSnapshotBeforeUpdate`

废弃：

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

### 5.2 改变生命周期的原因

1. `fiber` 的出现会因为高优先级任务的出现导致它们会执行多次
2. 为了约束开发者

#### ① componentWillMount

完全可以用 DidMount 和 constructor 来代替

#### ② componentWillReceiveProps

- 会破坏数据的单一数据源
- 增加组件的重绘次数

#### ③ ReceiveProps 跟 getDerivedStateFromProps 的对比

getDerivedStateFromProps 的特点：

1. 是一个纯函数，不能写副作用
2. 只能通过 prevState 来做对比，不需要处理第一次 prevProps 为空的情况
3. 将状态变化跟操作分开

#### ④ componentWillUpdate

跟 componentWillReceiveProps 类似

#### ⑤ getSnapshotBeforeUpdate

会在最终确定 render 执行之前 执行 ，也就是能确保获取到的元素 跟 DidUpdate 中拿到的元素状态相同
