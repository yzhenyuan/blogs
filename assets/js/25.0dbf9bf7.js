(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{531:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"了解koa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解koa"}},[s._v("#")]),s._v(" 了解Koa")]),s._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[s._v("#")]),s._v(" 一、前言")]),s._v(" "),a("p",[s._v("Koa是Express之后，node的又一主流web框架，相比Express，Koa只保留了核心的中间件处理逻辑，去掉了路由、模板以及其他的一些功能是一个基于node实现的web框架")]),s._v(" "),a("blockquote",[a("p",[s._v("特点是：优雅、简洁、健壮、体积小、表现力强，他的所有功能通过插件想形式来表现")])]),s._v(" "),a("h2",{attrs:{id:"二、koa2原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、koa2原理"}},[s._v("#")]),s._v(" 二、Koa2原理")]),s._v(" "),a("p",[s._v("Koa2通过封装原生的 node http 模块\nkoa的 "),a("code",[s._v("context")]),s._v(" 把 node 的 "),a("code",[s._v("request")]),s._v(" 对象和 "),a("code",[s._v("response")]),s._v(" 对象封装到单个对象中，并暴露给中间件等回调函数")]),s._v(" "),a("p",[s._v("最主要的是 "),a("strong",[s._v("中间件机制洋葱模型")])]),s._v(" "),a("p",[s._v("流程：")]),s._v(" "),a("ol",[a("li",[s._v("通过"),a("code",[s._v("use()")]),s._v("注册多个中间件放入数组中")]),s._v(" "),a("li",[s._v("从外层开始向内执行")]),s._v(" "),a("li",[s._v("遇到"),a("code",[s._v("next()")]),s._v("后进入下一个中间件")]),s._v(" "),a("li",[s._v("当所有中间件执行完后，开始返回")]),s._v(" "),a("li",[s._v("依次执行中间件中未执行的部分，整体流程就是递归处理")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("middleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 先执行第一个函数")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" middleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//如果不存在直接返回 Promise")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//step1: 返回一个promise，因此单纯变成一个promise 且立即执行")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//step2: 向当前中间件 传入一个 next 方法，当这个中间件有执行next 的时候才执行下一个中间件")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fnction "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行下一个中间件")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dispach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("核心代码是\n"),a("code",[s._v("Promise.resolve(fn(context, dispach.bind(null, i+1)))")]),s._v("\n，递归遍历，直到遍历完所有的中间件 next ,生成一个多层嵌套的 promise 函数")]),s._v(" "),a("p",[s._v("分析：")]),s._v(" "),a("blockquote",[a("p",[s._v("中间件的执行 是通过递归的方式来执行，\n调用 dispach 函数，从第一个开始执行，\n当有 next 方法时，创建一个promise，\n等到下一个中间件执行结果后，再执行next，\n当第二个中间件也有 next 方法时，依然会创建一个新的 promise 等待下一个中间件的执行结果，这就是中间件next的执行原理")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("app.use()")]),s._v(" 将中间件 push 到中间件数组中，然后在 listen 方法中通过调用 compose 方法进行集中处理")])]),s._v(" "),a("h2",{attrs:{id:"三、koa的基本组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、koa的基本组成"}},[s._v("#")]),s._v(" 三、Koa的基本组成")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("application.js")]),s._v(":负责管理中间件，以及处理请求")]),s._v(" "),a("li",[a("code",[s._v("context.js")]),s._v(":用来维护请求的的上下文环境")]),s._v(" "),a("li",[a("code",[s._v("request.js")]),s._v(":封装和抽象req")]),s._v(" "),a("li",[a("code",[s._v("response.js")]),s._v(":封装和抽象res")])]),s._v(" "),a("h2",{attrs:{id:"四、koa-body原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、koa-body原理"}},[s._v("#")]),s._v(" 四、Koa-body原理")]),s._v(" "),a("p",[s._v("Koa-body中间件作用是将 post 请求的请求体携带的数据解析到ctx.request.body中。")]),s._v(" "),a("p",[s._v("基本原理是：")]),s._v(" "),a("ol",[a("li",[s._v("先用"),a("code",[s._v("type-is")]),s._v("这个包（ctx.is函数，根据请求的content-type）判断出请求的数据类型")]),s._v(" "),a("li",[s._v("然后根据不同类型的co-body（请求体解析）和formidable（数据类型是multipart，文件上传解析）来解析")]),s._v(" "),a("li",[s._v("拿到解析结果放到ctx.request.body或 ctx.request.files里面")])]),s._v(" "),a("h2",{attrs:{id:"五、koa与express区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、koa与express区别"}},[s._v("#")]),s._v(" 五、Koa与Express区别")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("集成方面")]),s._v("："),a("code",[s._v("Express")]),s._v(" 自身集成了路由、视图等处理功能；"),a("code",[s._v("Koa")]),s._v("本身不集成任何中间件")]),s._v(" "),a("li",[a("strong",[s._v("异步流程控制")]),s._v("：Express使用"),a("code",[s._v("callback来处理异步")]),s._v("；Koa v1使用"),a("code",[s._v("generator")]),s._v("，v2使用"),a("code",[s._v("async/await")]),s._v("，async/await使用同步写法处理异步明显要优于其他")]),s._v(" "),a("li",[a("strong",[s._v("错误处理")]),s._v("： "),a("code",[s._v("Express")]),s._v(" 使用 callback 捕获异常，深层次的捕获不了；"),a("code",[s._v("Koa")]),s._v("使用 try/catch 能够更好的捕获异常")]),s._v(" "),a("li",[a("strong",[s._v("中间件模型")]),s._v("："),a("code",[s._v("Express")]),s._v("基于context中间件，线性模型；"),a("code",[s._v("Koa")]),s._v("使用洋葱模型，所有的请求在经过中间件的时候回执行两次，能够方便的执行一些后置处理逻辑")]),s._v(" "),a("li",[a("strong",[s._v("context")]),s._v("："),a("code",[s._v("Express")]),s._v("只有request和response两个对象；"),a("code",[s._v("Koa")]),s._v("增加了一个"),a("code",[s._v("context")]),s._v("作为这次请求的上下文对象（koa1中为中间件的this，v2中作为中间件的第一个参数传入）")])])])}),[],!1,null,null,null);t.default=e.exports}}]);