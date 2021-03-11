(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{550:function(v,_,t){"use strict";t.r(_);var e=t(2),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[v._v("#")]),v._v(" 事件循环")]),v._v(" "),t("h2",{attrs:{id:"一、宏任务和微任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、宏任务和微任务"}},[v._v("#")]),v._v(" 一、宏任务和微任务")]),v._v(" "),t("p",[v._v("🌶 为什么要区分微任务和宏任务？？➡️ 为了将异步队列划分优先级，")]),v._v(" "),t("p",[v._v("🍆 宏任务"),t("strong",[v._v("由事件触发线程维护")]),v._v("，微任务"),t("strong",[v._v("由 js 引擎线程维护")])]),v._v(" "),t("h3",{attrs:{id:"_1-1-微任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-微任务"}},[v._v("#")]),v._v(" 1.1 微任务")]),v._v(" "),t("ul",[t("li",[v._v("promise")]),v._v(" "),t("li",[v._v("mutationObserver")]),v._v(" "),t("li",[v._v("process.nextTick(nodejs)")])]),v._v(" "),t("h3",{attrs:{id:"_1-2-宏任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-宏任务"}},[v._v("#")]),v._v(" 1.2 宏任务")]),v._v(" "),t("ul",[t("li",[v._v("主代码块")]),v._v(" "),t("li",[v._v("setTimeout")]),v._v(" "),t("li",[v._v("setInterval")]),v._v(" "),t("li",[v._v("IO")]),v._v(" "),t("li",[v._v("UI 渲染")]),v._v(" "),t("li",[v._v("setImmediate(nodejs)")])]),v._v(" "),t("h3",{attrs:{id:"_1-3-事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-事件循环"}},[v._v("#")]),v._v(" 1.3 事件循环")]),v._v(" "),t("p",[v._v("js 是单线程的，单线程是指 js 引擎中 解析和执行代码只有一个主线程，每次只能做一件事")]),v._v(" "),t("p",[v._v("js 任务 分为 同步和异步，同步任务在 主线程 上依次执行，异步任务放到任务队列中，多个任务就在任务队列中排队等候，类似于缓冲区，任务下一步会被移动到调用栈，然后主线程执行调用栈的任务")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("调用栈")]),v._v("：调用栈是一个栈结构，函数调用会形成栈帧，帧中包含了参数和变量等函数的上下文信息，函数执行完后，从栈中弹出")])]),v._v(" "),t("p",[v._v("检查调用栈是否为空，以及将某个任务添加到调用栈的过程就是 event loop")]),v._v(" "),t("h2",{attrs:{id:"二、-浏览器中的-event-loop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、-浏览器中的-event-loop"}},[v._v("#")]),v._v(" 二、 浏览器中的 event loop")]),v._v(" "),t("p",[v._v("浏览器中event loop有两种 macro 和micro")]),v._v(" "),t("h3",{attrs:{id:"requestanimationframe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[v._v("#")]),v._v(" requestAnimationFrame")]),v._v(" "),t("p",[v._v("requestAnimationFrame也属于异步执行的方法，"),t("strong",[v._v("在GUI渲染之前，micro之后执行")])]),v._v(" "),t("p",[v._v("主要作用：传入一个回调，这个 回调函数 在浏览器下一次重绘之前执行")]),v._v(" "),t("h2",{attrs:{id:"三、-node-的-event-loop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、-node-的-event-loop"}},[v._v("#")]),v._v(" 三、 node 的 event loop")]),v._v(" "),t("p",[v._v("node IO处理使用了libuv （libuv是一个基于事件驱动的抽象层，封装了不同操作系统的一些底层特性，对外提供统一的API），里面包含了事件循环机制")]),v._v(" "),t("h3",{attrs:{id:"_3-1-node运行机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-node运行机制"}},[v._v("#")]),v._v(" 3.1 node运行机制")]),v._v(" "),t("ol",[t("li",[v._v("V8解析js脚本")]),v._v(" "),t("li",[v._v("解析后的代码，调用node API")]),v._v(" "),t("li",[v._v("libuv 负责node API的执行\n"),t("ol",[t("li",[v._v("它将不同的任务分配给不同的线程，形成事件循环")]),v._v(" "),t("li",[v._v("以异步的方式将任务的执行结果返回给V8引擎")])])]),v._v(" "),t("li",[v._v("V8引擎将结果返回给用户")])]),v._v(" "),t("h3",{attrs:{id:"_3-2-六大阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-六大阶段"}},[v._v("#")]),v._v(" 3.2 六大阶段")]),v._v(" "),t("p",[v._v("libuv 将事件循环分成6个阶段，他们按照顺序反复运行")]),v._v(" "),t("p",[v._v("每当进入某个阶段时，都会从对应的"),t("strong",[v._v("回调队列")]),v._v("中取出函数去执行")]),v._v(" "),t("p",[v._v("当队列为空时就会进入下一个阶段")]),v._v(" "),t("ol",[t("li",[v._v("update-time：获取系统时间，保证之后的timers 有个计时的指标")]),v._v(" "),t("li",[t("strong",[v._v("timers")]),v._v(":由 poll 控制，检查是否有到期的timer，执行 setTimeout、setInterval的回调")]),v._v(" "),t("li",[t("strong",[v._v("IO callbacks")]),v._v("：处理上一轮未执行的 IO callback")]),v._v(" "),t("li",[v._v("idle,prepare：node内部调用")]),v._v(" "),t("li",[v._v("IO poll：获取新的IO事件，适当情况下会堵塞在这")]),v._v(" "),t("li",[t("strong",[v._v("check")]),v._v("：执行 setImmediate的回调")]),v._v(" "),t("li",[t("strong",[v._v("close callbacks")]),v._v("：执行socket的close回调")])]),v._v(" "),t("p",[v._v("🐔 ①②⑤⑥都属于宏任务，在浏览器中宏任务可能只有一个，但在 node中，不同的macro会放置在不同的宏队列中")]),v._v(" "),t("p",[v._v("🐟 微任务队列有两个 :")]),v._v(" "),t("ul",[t("li",[v._v("nextTick Queue：主要放process.nextTick回调")]),v._v(" "),t("li",[v._v("other Micro Queue：放其他micro task,比如：promise")])]),v._v(" "),t("p",[v._v("同样不同的微任务放在不同的微队列中")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("观察者")]),v._v(" "),t("p",[v._v("libuv 主要有一个"),t("strong",[v._v("观察者")]),v._v("（负责将事件分类）来管理事件")]),v._v(" "),t("p",[t("strong",[v._v("事件驱动")]),v._v("的：异步IO、网络请求都是事件的生产者，为node 提供不同的事件类型")]),v._v(" "),t("p",[v._v("浏览器没有nextTick和setImmediate浏览器主要是 call stack")]),v._v(" "),t("ul",[t("li",[v._v("idle观察者")]),v._v(" "),t("li",[v._v("io观察者")]),v._v(" "),t("li",[v._v("check观察者")])]),v._v(" "),t("p",[v._v("不受默认的event loop去管理")]),v._v(" "),t("h2",{attrs:{id:"v8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v8"}},[v._v("#")]),v._v(" v8")]),v._v(" "),t("ul",[t("li",[v._v("JIT：即时编译，编译的结果直接是机器语言，而不是字节码，大大提高了执行效率")]),v._v(" "),t("li",[v._v("垃圾回收：借鉴了Java VM的垃圾回收管理")]),v._v(" "),t("li",[v._v("内联缓存：this.a没有内存缓存的时候每次a都会对哈希表进行一次寻址，加入v8之后能马上知道这个属性的偏移量")]),v._v(" "),t("li",[v._v("隐藏类：")])]),v._v(" "),t("h3",{attrs:{id:"编译器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译器"}},[v._v("#")]),v._v(" 编译器")]),v._v(" "),t("p",[v._v("DSL：针对某一个\nNLP\nAST")]),v._v(" "),t("h3",{attrs:{id:"类型检查和优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型检查和优化"}},[v._v("#")]),v._v(" 类型检查和优化")])])}),[],!1,null,null,null);_.default=a.exports}}]);