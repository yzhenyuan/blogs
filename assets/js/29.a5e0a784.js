(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{535:function(e,t,a){"use strict";a.r(t);var r=a(2),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"react-fiber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-fiber"}},[e._v("#")]),e._v(" React Fiber")]),e._v(" "),a("p",[e._v("现在有 10000 个节点，每个节点计算耗时 1ms，如何保证 10000 个节点顺利执行完成，又能让用户感知不到卡顿？")]),e._v(" "),a("h4",{attrs:{id:"渲染10000个节点会遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染10000个节点会遇到的问题"}},[e._v("#")]),e._v(" 渲染10000个节点会遇到的问题：")]),e._v(" "),a("p",[e._v('页面会 "卡死" 10秒钟，期间用户的交互不会有任何反馈，而且页面不会有任何更新。只有这 10000 个节点执行完了，页面才会作出反馈。')]),e._v(" "),a("h4",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[e._v("#")]),e._v(" 原因：")]),e._v(" "),a("p",[e._v("这是因为 JavaScript 是单线程的，上面的代码长期占据 JavaScript 线程，导致其他动作无法执行。")]),e._v(" "),a("h4",{attrs:{id:"那么如何解决呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那么如何解决呢"}},[e._v("#")]),e._v(" 那么如何解决呢？")]),e._v(" "),a("ol",[a("li",[e._v("提升计算机的算力，但是我们的应用可能跑在千差万别的设备上，总会有很多设备硬件水平不是很高")]),e._v(" "),a("li",[e._v("使用 "),a("code",[e._v("web worker")]),e._v("，让 diff 操作在另外一个线程中并行执行。这是个好思路，但是这可能会带来额外的开销，react 官方并没有采用这个策略")]),e._v(" "),a("li",[e._v("将 diff 操作变成可中断的，只有当浏览器空闲时再做 diff。避免 diff 更新长时间占据浏览器线程。React Fiber 就是用的这个思路。")])]),e._v(" "),a("p",[e._v("事实上，我们要解决的其实并不是性能问题，而是"),a("strong",[e._v("调度问题")]),e._v("。用户的交互事件属于高优先级，需要尽快响应。而 diff 操作优先级相对没那么高，可以在几个时间段内分片执行。")]),e._v(" "),a("h2",{attrs:{id:"一、-react-fiber-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-react-fiber-是什么"}},[e._v("#")]),e._v(" 一、 React Fiber 是什么？")]),e._v(" "),a("p",[e._v("为了解决 diff 时间过长导致的卡顿问题，React Fiber 用类似 "),a("code",[e._v("requestIdleCallback")]),e._v(" 的机制来做异步 diff")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("requestIdleCallback")]),e._v(" 方法将在浏览器的空闲时段内调用函数。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。")])]),e._v(" "),a("p",[e._v("什么是空闲时段？当浏览器呈现一帧所需的时间少于屏幕刷新率时间(对于60Hz 的设备，帧间隔应小于16ms)，他们两之差就是空闲时间")]),e._v(" "),a("p",[e._v("但是由于原生提供的 "),a("code",[e._v("requestIdleCallback")]),e._v(" 方法的 "),a("code",[e._v("timeRemaining()")]),e._v(" 最大返回是 50ms，也就是 20fps，达不到页面流畅度的要求，并且该 API 兼容性也比较差。所以 React 团队没有直接使用原生的 requestIdleCallback，而是自己 "),a("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/scheduler/src/forks/SchedulerDOM.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("polyfill"),a("OutboundLink")],1),e._v(" 了一个")]),e._v(" "),a("ul",[a("li",[e._v("链表结构 - fiber")]),e._v(" "),a("li",[e._v("while循环代替递归——可中断")]),e._v(" "),a("li",[e._v("requestIdleCallback/requestAnimateFrame —— 可异步")])]),e._v(" "),a("h2",{attrs:{id:"二、-如何让-react-的-diff-可中断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、-如何让-react-的-diff-可中断"}},[e._v("#")]),e._v(" 二、 如何让 React 的 diff 可中断？")]),e._v(" "),a("p",[e._v("虚拟dom 是一个树状结构，diff 操作实际上就是递归遍历了一遍这颗树。")]),e._v(" "),a("p",[e._v("不同于前面一直递增到 10000 就结束的简单例子，在递归中中断以及恢复状态很麻烦。如果改成类似链表的结构那就好办很多，可以一直 next，知道 next 为 null 就知道遍历结束了。")]),e._v(" "),a("p",[e._v("也就是说，我们需要将递归操作变成遍历操作，Fiber 恰巧也是这么做的。")]),e._v(" "),a("h2",{attrs:{id:"三、-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、-总结"}},[e._v("#")]),e._v(" 三、 总结")]),e._v(" "),a("p",[e._v("总结一下，为了解决 diff 时间过长导致的卡顿问题，React Fiber 用类似 requestIdleCallback 的机制来做异步 diff。但是之前的数据结构不支持这样的实现异步 diff，于是 React 实现了一个类似链表的数据结构，将原来的 递归diff 变成了现在的 遍历diff，这样就能方便的做中断和恢复了。")])])}),[],!1,null,null,null);t.default=v.exports}}]);