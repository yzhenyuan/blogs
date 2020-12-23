# React Fiber


现在有 10000 个节点，每个节点计算耗时 1ms，如何保证 10000 个节点顺利执行完成，又能让用户感知不到卡顿？

#### 渲染10000个节点会遇到的问题：

页面会 "卡死" 10秒钟，期间用户的交互不会有任何反馈，而且页面不会有任何更新。只有这 10000 个节点执行完了，页面才会作出反馈。

#### 原因：

这是因为 JavaScript 是单线程的，上面的代码长期占据 JavaScript 线程，导致其他动作无法执行。

#### 那么如何解决呢？
1. 提升计算机的算力，但是我们的应用可能跑在千差万别的设备上，总会有很多设备硬件水平不是很高
2. 使用 `web worker`，让 diff 操作在另外一个线程中并行执行。这是个好思路，但是这可能会带来额外的开销，react 官方并没有采用这个策略
3. 将 diff 操作变成可中断的，只有当浏览器空闲时再做 diff。避免 diff 更新长时间占据浏览器线程。React Fiber 就是用的这个思路。

事实上，我们要解决的其实并不是性能问题，而是**调度问题**。用户的交互事件属于高优先级，需要尽快响应。而 diff 操作优先级相对没那么高，可以在几个时间段内分片执行。

## 一、 React Fiber 是什么？
为了解决 diff 时间过长导致的卡顿问题，React Fiber 用类似 `requestIdleCallback` 的机制来做异步 diff

>`requestIdleCallback` 方法将在浏览器的空闲时段内调用函数。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。

什么是空闲时段？当浏览器呈现一帧所需的时间少于屏幕刷新率时间(对于60Hz 的设备，帧间隔应小于16ms)，他们两之差就是空闲时间

但是由于原生提供的 `requestIdleCallback` 方法的 `timeRemaining()` 最大返回是 50ms，也就是 20fps，达不到页面流畅度的要求，并且该 API 兼容性也比较差。所以 React 团队没有直接使用原生的 requestIdleCallback，而是自己 [polyfill](https://github.com/facebook/react/blob/master/packages/scheduler/src/forks/SchedulerDOM.js) 了一个

+ 链表结构 - fiber
+ while循环代替递归——可中断
+ requestIdleCallback/requestAnimateFrame —— 可异步

## 二、 如何让 React 的 diff 可中断？
虚拟dom 是一个树状结构，diff 操作实际上就是递归遍历了一遍这颗树。

不同于前面一直递增到 10000 就结束的简单例子，在递归中中断以及恢复状态很麻烦。如果改成类似链表的结构那就好办很多，可以一直 next，知道 next 为 null 就知道遍历结束了。

也就是说，我们需要将递归操作变成遍历操作，Fiber 恰巧也是这么做的。


## 三、 总结
总结一下，为了解决 diff 时间过长导致的卡顿问题，React Fiber 用类似 requestIdleCallback 的机制来做异步 diff。但是之前的数据结构不支持这样的实现异步 diff，于是 React 实现了一个类似链表的数据结构，将原来的 递归diff 变成了现在的 遍历diff，这样就能方便的做中断和恢复了。


React16.6之后在任务调度中意图使用 requestIdleCallback 这个函数，但是它的兼容性并不好，Safari、安卓8.1以下、IE等都是重灾区，所以React做了一个Polyfill，它是怎么做的呢？这里简要介绍下 React16.13.1 中实现的步骤。

### React如何polyfill

React维护了两个小顶堆`taskQueue`和`timerQueue`，前者保存等待被调度的任务，后者保存调度中的任务，它们的排列依据分别是任务的超时时间和过期时间。到达超时时间的任务会从`timerQueue`移动到`taskQueue`中，而在过期时间之内`taskQueue`中的任务期望得到执行，React调度的核心主要是以下几点：
1. 何时把超时的任务从`timerQueue`转移到`taskQueue`；
2.  `taskQueue`中任务的执行时机，以及后续任务的衔接；
3.  何时暂停执行任务，把资源回交给浏览器。

使用 `unstable_scheduleCallback` 注册任务的时候可以提供两个参数，`delay`表示任务的超时时长，`timeout`表示任务的过期时长（如果没有指定，根据优先程度任务会被分配默认的timeout时长）。

如果没有提供`delay`，则任务被直接放到`taskQueue`中等待处理；
如果提供了`delay`，则任务被放置在`timerQueue`中，此时如果`taskQueue`为空，且当前任务在timerQueue的堆顶（当前任务的超时时间最近），则使用 `requestHostTimeout` 启动定时器（setTimeout），在到达当前任务的超时时间时执行 `handleTimeout` ，此函数调用 `advanceTimers` 将`timerQueue`中的任务转移到`taskQueue`中，此时如果`taskQueue`没有开启执行则调用 `requestHostCallback` 启动它，否则继续递归地执行 `handleTimeout` 处理下一个`timerQueue`中的任务。

