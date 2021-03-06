# 前言

利用 Object.defineProperty() 对数据进行劫持，
设置一个监听器 Observer，用来监听所有属性，
如果属性上发上变化了，就需要告诉订阅者 Watcher 去更新数据，
最后指令解析器 Compile 解析对应的指令，进而会执行对应的更新函数，从而更新视图，实现了双向绑定

## 一、数据驱动视图

Vue 最大的特点之一就是 **数据驱动视图**，那么什么是数据驱动视图呢？在这里，我们可以把数据理解为状态，而视图就是用户可直观看到页面。页面不可能是一成不变的，它应该是动态变化的，而它的变化也不应该是无迹可寻的，它或者是由用户操作引起的，亦或者是由后端数据变化引起的，不管它是因为什么引起的，我们统称为它的状态变了，它由前一个状态变到了后一个状态，页面也就应该随之而变化

UI = render(state)

上述公式中：状态 state 是输入，页面 UI 输出，状态输入一旦变化了，页面输出也随之而变化。我们把这种特性称之为数据驱动视图。

我们可以把上述公式拆成三部分：state、render()以及 UI。我们知道 state 和 UI 都是用户定的，而不变的是这个 render()。所以 Vue 就扮演了 render()这个角色，当 Vue 发现 state 变化之后，经过一系列加工，最终将变化反应在 UI 上。

那么第一个问题来了，Vue 怎么知道 state 变化了呢？s

## 二、Vue 怎么知道 state 变化了？

Vue 怎么知道 state 变化了呢？ 答案是：**数据侦测**

变化侦测就是追踪状态，亦或者说是数据的变化，一旦发生了变化，就要去更新视图。

在 Angular 中是通过脏值检查流程来实现变化侦测；在 React 是通过对比虚拟 DOM 来实现变化侦测，而在 Vue 中也有自己的一套变化侦测实现机制。

[参考](https://vue-js.com/learn-vue/start/)

<!-- observe（）通过 Object.defineProperty 的 get 方法进行依赖收集，在set的时候触发 dep 的 notify来通知所有的Watcher对象更新视。

订阅者 dep（依赖管理器）
观察者 Watcher 在执行构造函数的时候将 ​Dep.target​ 指向自身，从而使得收集到了对应的 Watcher，在派发更新的时候取出对应的 Watcher ,然后执行 ​update​ 函数。 -->
