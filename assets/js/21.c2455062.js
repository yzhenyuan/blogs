(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{504:function(v,s,_){"use strict";_.r(s);var e=_(4),a=Object(e.a)({},(function(){var v=this,s=v.$createElement,_=v._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"node-基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#node-基础"}},[v._v("#")]),v._v(" node 基础")]),v._v(" "),_("h2",{attrs:{id:"首先要知道的是"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首先要知道的是"}},[v._v("#")]),v._v(" 首先要知道的是")]),v._v(" "),_("ol",[_("li",[v._v("Node.js 不是一门语言也不是框架，它只是基于 Google V8 引擎的 JavaScript 运行时环境")]),v._v(" "),_("li",[v._v("结合 Libuv 扩展了 JavaScript 功能，使得 JavaScript 能够同时具有 DOM 操作(浏览器)和 I/O、文件读写、操作数据库(服务器端)等能力")]),v._v(" "),_("li",[v._v("基于事件驱动、非阻塞 I/O模型")])]),v._v(" "),_("p",[v._v("Node.js 可用于多个领域的开发，例如：")]),v._v(" "),_("ul",[_("li",[v._v("客户端应用程序（nw.js/electron）")]),v._v(" "),_("li",[v._v("后端（webapi，网站等）")]),v._v(" "),_("li",[v._v("工具（gulp，webpack 等构架工具）")]),v._v(" "),_("li",[v._v("物联网，硬件（ruff）")])]),v._v(" "),_("p",[v._v("Node的应用场景：")]),v._v(" "),_("ol",[_("li",[v._v("充分利用操作系统提供的异步 I/O 进行多任务的执行，适合于 I/O 密集型的应用场景，")]),v._v(" "),_("li",[v._v("因为异步，程序无需阻塞等待结果返回，而是基于回调通知的机制，原本同步模式等待的时间，则可以用来处理其它任务")]),v._v(" "),_("li",[v._v("适合于"),_("strong",[v._v("高并发应用场景")])])]),v._v(" "),_("h2",{attrs:{id:"node-js-概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#node-js-概念"}},[v._v("#")]),v._v(" Node.js 概念")]),v._v(" "),_("p",[_("strong",[v._v("Node.js 是基于 Chrome V8 引擎构建的，由事件循环（Event Loop）分发 I/O 任务，最终工作线程（Work Thread）将任务丢到线程池（Thread Pool）里去执行，而事件循环只要等待执行结果就可以了。")])]),v._v(" "),_("p",[v._v("我们先来看一下 Node.js 早期的架构图。")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("Node.js Bindings 层")]),v._v(" 将 Chrome V8 等暴露的 C/C++ 接口转成 JavaScript Api，并且结合这些 Api 编写了 Node.js 标准库，所有这些 Api 统称为 Node.js SDK。")]),v._v(" "),_("li",[_("strong",[v._v("V8 层")]),v._v(" 是 Google 发布的开源 JavaScript 引擎，主要是将 JS 代码编译成原生机器码。")]),v._v(" "),_("li",[_("strong",[v._v("Thread Pool 层")]),v._v("：专门用来执行任务，执行完成后，将结果返回给 EventLoop 层。")]),v._v(" "),_("li",[_("strong",[v._v("EventLoop 层")]),v._v("：事件循环层，我们的代码在执行时，首先由 Event Loop 来接受处理，而真正执行操作的是具体的线程池（Thread Pool）里的 I/O 任务。之所以说 Node.js 是单线程，就是因为在接受任务的时候是单线程的，它无需进程/线程切换上下文的成本，非常高效，但它在执行具体任务的时候是多线程的。")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),_("p",[v._v("Event Loop 事件循环，Thread Pool 线程池都是由 Libuv 提供，Libuv 是整个 Node.js 运行的核心。是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的API，事件循环机制也是它里面的实现")])]),v._v(" "),_("h2",{attrs:{id:"异步编程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步编程"}},[v._v("#")]),v._v(" 异步编程")]),v._v(" "),_("p",[v._v("异步编程是 Node.js 的一大特色，掌握好 Node.js 的异步编程是每个 Node.js 开发者必备的技能。")]),v._v(" "),_("p",[v._v("1、异步 IO 的好处")]),v._v(" "),_("ul",[_("li",[v._v("前端通过异步 IO 可以消除阻塞。")]),v._v(" "),_("li",[v._v("请求耗时少，假如有两个请求 A 和 B，那么异步 IO 用时为：Max（A+B）。同步则为 A+B，请求越多差距越大。")]),v._v(" "),_("li",[v._v("IO 是昂贵的，分布式 IO 是更昂贵的。")]),v._v(" "),_("li",[v._v("Node.js 适用于 IO 密集型，而不适用于 CPU 密集型。")]),v._v(" "),_("li",[v._v("并不是所有都用异步任务好，遵循一个公式： s= (Ws+Wp)/(Ws+Wp/p) Ws 表示同步任务，Wp 表示异步任务，p 表示处理器的数量。")])]),v._v(" "),_("p",[v._v("2、Node.js 对异步 IO 的实现")]),v._v(" "),_("p",[v._v("我们来看一下 Node.js 异步 IO 实现图：")]),v._v(" "),_("p",[_("img",{attrs:{src:"library-node-async.png",alt:"异步IO"}})]),v._v(" "),_("ul",[_("li",[v._v("应用程序先将 JS 代码经 V8 转换为机器码。")]),v._v(" "),_("li",[v._v("通过 Node.js Bindings 层，向操作系统 Libuv 的事件队列中添加一个任务。")]),v._v(" "),_("li",[v._v("Libuv 将事件推送到线程池中执行。")]),v._v(" "),_("li",[v._v("线程池执行完事件，返回数据给 Libuv。")]),v._v(" "),_("li",[v._v("Libuv 将返回结果通过 Node.js Bindings 返回给 V8。")]),v._v(" "),_("li",[v._v("V8 再将结果返回给应用程序。")])]),v._v(" "),_("p",[v._v("应用程序 -> V8 -> 机器码 -> Bindings层 -> Libuv -> 线程池 -> Libuv -> Bindings -> V8 -> 应用程序")]),v._v(" "),_("p",[_("strong",[v._v("Libuv")]),v._v(" 实现了 Node.js 中的 Eventloop ，主要有以下几个阶段：")]),v._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[v._v("   ┌───────────────────────────┐\n┌─"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("│           timers          │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │     pending callbacks     │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │       idle"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" prepare       │\n│  └─────────────┬─────────────┘      ┌───────────────┐\n│  ┌─────────────┴─────────────┐      │   incoming"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v("   │\n│  │           poll            │"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("─────┤  connections"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" │\n│  └─────────────┬─────────────┘      │   data"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" etc"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("  │\n│  ┌─────────────┴─────────────┐      └───────────────┘」\n│  │           check           │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n└──┤      close callbacks      │\n   └───────────────────────────┘\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br"),_("span",{staticClass:"line-number"},[v._v("10")]),_("br"),_("span",{staticClass:"line-number"},[v._v("11")]),_("br"),_("span",{staticClass:"line-number"},[v._v("12")]),_("br"),_("span",{staticClass:"line-number"},[v._v("13")]),_("br"),_("span",{staticClass:"line-number"},[v._v("14")]),_("br"),_("span",{staticClass:"line-number"},[v._v("15")]),_("br"),_("span",{staticClass:"line-number"},[v._v("16")]),_("br"),_("span",{staticClass:"line-number"},[v._v("17")]),_("br"),_("span",{staticClass:"line-number"},[v._v("18")]),_("br")])]),_("p",[v._v("上图中每一个阶段都有一个先进先出的回调队列，只有当队列内的事件执行完成之后，才会进入下一个阶段。")]),v._v(" "),_("ul",[_("li",[v._v("timers：执行 "),_("code",[v._v("setTimeout")]),v._v(" 和 "),_("code",[v._v("setInterval")]),v._v(" 中到期的 callback。")]),v._v(" "),_("li",[v._v("pending callbacks：上一轮循环中有少数的 I/O callback 会被延迟到这一轮的这一阶段执行。\n"),_("ul",[_("li",[v._v("执行一些系统操作的回调，例如 tcp 连接发生错误。")])])]),v._v(" "),_("li",[v._v("idle, prepare：仅内部使用。")]),v._v(" "),_("li",[v._v("poll：最为重要的阶段，执行 I/O callback(node 异步 api 的回调，事件订阅回调等)，在适当的条件下会阻塞在这个阶段。\n"),_("ul",[_("li",[v._v("如果 poll 队列不为空，直接执行队列内的事件，直到队列清空。")]),v._v(" "),_("li",[v._v("如果 poll 队列为空。\n"),_("ul",[_("li",[v._v("如果有设置 setImmediate，则直接进入 check 阶段。")]),v._v(" "),_("li",[v._v("如果没有设置 setImmediate，则会检查是否有 timers 事件到期。\n"),_("ul",[_("li",[v._v("如果有 timers 事件到期，则执行 timers 阶段。")]),v._v(" "),_("li",[v._v("如果没有 timers 事件到期，则会阻塞在当前阶段，等待事件加入。")])])])])])])]),v._v(" "),_("li",[v._v("check：执行 "),_("code",[v._v("setImmediate")]),v._v(" 的 callback。")]),v._v(" "),_("li",[v._v('close callbacks：执行 close 事件的 callback，例如 socket.on("close",func)。')])]),v._v(" "),_("p",[_("strong",[v._v("除此之外，Node.js 提供了 process.nextTick(微任务，promise 也一样) 方法，在以上的任意阶段开始执行的时候都会触发。")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("小知识")]),v._v(" "),_("ul",[_("li",[v._v("Event Loop 是一个很重要的概念，指的是计算机系统的一种运行机制。")]),v._v(" "),_("li",[v._v("Libuv 在 Linux 下基于 Custom Threadpool 实现。")]),v._v(" "),_("li",[v._v("Libuv 在 Windows 下基于 IOCP 实现。")])])]),v._v(" "),_("p",[v._v("3、常用的异步 IO 使用方式")]),v._v(" "),_("ul",[_("li",[v._v("使用 step，q，async 等异步控制库。")]),v._v(" "),_("li",[v._v("使用 Promise 处理异步。")]),v._v(" "),_("li",[v._v("使用 EventEmitter，实现“发布/订阅”模式处理异步。")]),v._v(" "),_("li",[v._v("Node.js 暂不支持协程，可使用 Generator 代替。")]),v._v(" "),_("li",[v._v("终极解决方案：async、await。")])]),v._v(" "),_("h2",{attrs:{id:"node-js-内存管理与优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#node-js-内存管理与优化"}},[v._v("#")]),v._v(" Node.js 内存管理与优化")]),v._v(" "),_("p",[v._v("Node.js 是单线程的，所以必须保证这个线程持续稳定，最容易导致 Node.js 应用程序挂掉的因素是内存泄漏。常见的内存泄漏：")]),v._v(" "),_("ul",[_("li",[v._v("无限增长的数组。")]),v._v(" "),_("li",[v._v("无限制设置对象的属性和值。")]),v._v(" "),_("li",[v._v("任何模块的私有变量都是永驻的。")]),v._v(" "),_("li",[v._v("大循环，无 GC 机会。")]),v._v(" "),_("li",[v._v("队列消费不及时。")]),v._v(" "),_("li",[v._v("全局变量太多。")])]),v._v(" "),_("p",[v._v("Node.js 采用 V8 的 分代式垃圾回收策略，将内存分为"),_("strong",[v._v("新生代内存")]),v._v("和"),_("strong",[v._v("老生代内存")]),v._v("。")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("新生代内存")]),v._v("通过 Scavenge 算法，将内存分为 From 空间 和 To 空间，初始时 From 空间存放所有对象，To 空间空闲。在一次垃圾回收时，清除 From 空间中没有使用的对象，然后将 To 空间和 From 交换。")]),v._v(" "),_("li",[_("strong",[v._v("老生代内存")]),v._v("通过 Mark-Sweep 和 Mark-compact，标记清除和移动清除。标记没有使用的内存空间，标记完毕后进行统一清除，清除后为了避免内存空间不连续，会将已使用的内存连在一起，放在队列的一端，然后清除另一端的所有内存空间。")])]),v._v(" "),_("h2",{attrs:{id:"node-js-调试与部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#node-js-调试与部署"}},[v._v("#")]),v._v(" Node.js 调试与部署")]),v._v(" "),_("p",[v._v("由于 Node.js 单线层的原因，所以 Node.js 的调试和部署特别重要，因为一旦出错，整个应用程序就挂了。")]),v._v(" "),_("h4",{attrs:{id:"node-js-调试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#node-js-调试"}},[v._v("#")]),v._v(" Node.js 调试")]),v._v(" "),_("ul",[_("li",[v._v("node --inspect app.js\n"),_("ul",[_("li",[v._v("打开浏览器进行调试：chrome://inspect/#devices")])])]),v._v(" "),_("li",[v._v("使用 vscode 自带的调试。")])]),v._v(" "),_("h4",{attrs:{id:"node-js-部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#node-js-部署"}},[v._v("#")]),v._v(" Node.js 部署")]),v._v(" "),_("p",[v._v("Node.js 端一般不会直接当成项目后端来使用，而是当成一个 BFF 层来使用。具体要怎么架构呢？")]),v._v(" "),_("p",[v._v("这是一个 Node.js 项目架构。")]),v._v(" "),_("p",[_("img",{attrs:{src:"library-node-backend.png",alt:"node后端"}})]),v._v(" "),_("ul",[_("li",[v._v("用户请求 Node.js 服务器。")]),v._v(" "),_("li",[v._v("经过 LVS 传输层负载均衡。")]),v._v(" "),_("li",[v._v("经过 Nginx 服务器，反向代理，负载均衡到多个 PM2 运行的机器上。\n"),_("ul",[_("li",[v._v("PM2 守护进程，保证 Node.js 进程永远都活着, Node.js 挂掉后自动 0 秒的重载。")])])]),v._v(" "),_("li",[v._v("配置 Varnish、Squid，实现服务器 HTTP 缓存。")]),v._v(" "),_("li",[v._v("Node.js 作为 Web 服务器层，会将请求转发给 Java 服务器。\n"),_("ul",[_("li",[v._v("配置心跳检测 Heartbeats，检测 Java 端是否挂掉。")])])]),v._v(" "),_("li",[v._v("Java 服务器根据请求，进行相应的处理，可能会对数据库进行读写操作。")]),v._v(" "),_("li",[v._v("读取或写入 Database。\n"),_("ul",[_("li",[v._v("只读数据库。")]),v._v(" "),_("li",[v._v("只写数据库。")])])]),v._v(" "),_("li",[v._v("Java 服务器将数据库访问结果返回给 Node.js 层。")]),v._v(" "),_("li",[v._v("Node.js 层将结果返回给用户。")])]),v._v(" "),_("p",[v._v("Node.js Web 端应用程序部署流程")]),v._v(" "),_("ul",[_("li",[v._v("单元测试。")]),v._v(" "),_("li",[v._v("压力测试，性能分析工具找 Bug。\n"),_("ul",[_("li",[v._v("提前发现内存泄漏问题。")]),v._v(" "),_("li",[v._v("根据压力测试，准确计算 QPS ，推算出服务器性能。")])])]),v._v(" "),_("li",[v._v("静态资源上传到 CDN。")]),v._v(" "),_("li",[v._v("配置 Nginx 实现负载均衡和反向代理。")]),v._v(" "),_("li",[v._v("开启 PM2 守护进程，小流量灰度上线。")])]),v._v(" "),_("p",[v._v("剩下的工作交给运维和后端去完成，例如：配置 Web 服务器缓存 Varnish，心跳检测等。")])])}),[],!1,null,null,null);s.default=a.exports}}]);