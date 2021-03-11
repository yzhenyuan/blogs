# react 跟 vue 
## 一、 框架对比

### 1.1. 数据流

vue 支持数据双向绑定，react 是单向数据流 是状态机（状态发生变化，驱动 view 发生变化）

### 1.2. 虚拟 dom

- vue 可以快速的计算出虚拟 DOM 的差异，在渲染过程中，会跟踪组件的依赖关系，不需要重新渲染整个组件树
- react，每当应用的状态改变时整个子组件都会重新渲染，可以通过`pureComponent/shouldComponentUpdate`这个生命周期来进行控制

### 1.3. 组件化：模板的编写

- Vue 提倡使用常规 HTML 的模板
- react 推荐使用 js 语法扩展 jsx
- 具体来说：react 中 render 函数是支持闭包特性的，所以 import 的组件可以直接调用，但是 Vue 中由于模板中的数据都必须在 this 上进行一次中转，所以每次 import 之后还要在 components 中再声明一下

### 1.4. 监听数据变化的原理不同：

- Vue 通过 `getter/setter`以及一些函数的劫持，能精确制导数据的变化，本身具有很好的性能
- react 默认通过比较引用的方式进行的，如果不优化(`pureComponent/shouldComponentUpdate`)就会导致大量不必要的重新渲染
- 因为 Vue 使用的是可变数据，react 更强调数据的不可变

### 1.5. 高阶组件：

react可通过高阶组件（hoc）来扩展，Vue通过 `mixins` 来扩展

原因 高阶组件就是高阶函数，而react 的组件本事就是纯粹的函数，相反Vue 使用HTML模板来创建视图，这时模板还无法有效的编译，因此Vue不适用hoc来实现

## 二、Redux 和 Vuex区别
