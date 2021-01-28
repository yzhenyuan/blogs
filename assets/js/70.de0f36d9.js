(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{579:function(e,t,s){"use strict";s.r(t);var a=s(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vite-vue3-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vite-vue3-的使用"}},[e._v("#")]),e._v(" Vite + Vue3 的使用")]),e._v(" "),s("h2",{attrs:{id:"一、vite-特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、vite-特点"}},[e._v("#")]),e._v(" 一、Vite 特点")]),e._v(" "),s("p",[e._v("一个基于浏览器原生 module sciprt 的开发服务器。利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念。对 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢。针对生产环境则可以把同一份代码用 rollup 打包")]),e._v(" "),s("ol",[s("li",[e._v("类似于 "),s("code",[e._v("webpack-dev-server")])]),e._v(" "),s("li",[e._v("基于 "),s("code",[e._v("module sciprt")])]),e._v(" "),s("li",[e._v("热更新使用 "),s("code",[e._v("WebSocket")]),e._v(" ，服务端使用 Koa 构建")]),e._v(" "),s("li",[e._v("按需编译，开发模式下不需要打包，只需要编译浏览器发出的 HTTP 请求对应的文件即可，所以热更新速度很快")]),e._v(" "),s("li",[e._v("打包使用 rollup")])]),e._v(" "),s("h3",{attrs:{id:"_1-1-基于-module-sciprt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基于-module-sciprt"}},[e._v("#")]),e._v(" 1.1 基于 "),s("code",[e._v("module sciprt")])]),e._v(" "),s("p",[e._v("开发模式下 拦截浏览器发出的 "),s("code",[e._v("module sciprt")]),e._v(" 请求并做相应处理，拦截后使用 "),s("code",[e._v("es-module-lexer")]),e._v("，来进行的语法分析获取 imports 数组，然后再做的替换")]),e._v(" "),s("p",[e._v("当声明一个 script 标签类型为 module 时，浏览器将对其内部的 import 引用发起 HTTP 请求获取模块内容")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script type"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"module"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./a.js'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-2-热更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-热更新"}},[e._v("#")]),e._v(" 1.2 热更新")]),e._v(" "),s("p",[e._v("要实现热更新，那么就需要浏览器和服务器建立某种通信机制，这样浏览器才能收到通知进行热更新")]),e._v(" "),s("h4",{attrs:{id:"_1-2-1-客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-客户端"}},[e._v("#")]),e._v(" 1.2.1 客户端")]),e._v(" "),s("p",[e._v("Vite 的是通过 "),s("code",[e._v("WebSocket")]),e._v(" 来实现的热更新通信，代码在 node_modules 的"),s("code",[e._v("src/client.ts")]),e._v(" 文件里")]),e._v(" "),s("ul",[s("li",[e._v("vue-reload: 修改了 "),s("code",[e._v("script")]),e._v("，组件重新加载")]),e._v(" "),s("li",[e._v("vue-rerender: 修改了"),s("code",[e._v("template")]),e._v(" ,组件重新加载")]),e._v(" "),s("li",[e._v("style-update: 样式更新")]),e._v(" "),s("li",[e._v("style-remove: 样式移除")]),e._v(" "),s("li",[e._v("js-update: js 文件更新")]),e._v(" "),s("li",[e._v("full-reload: fallback 机制，网页重刷新")])]),e._v(" "),s("h4",{attrs:{id:"_1-2-2-服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-服务端"}},[e._v("#")]),e._v(" 1.2.2 服务端")]),e._v(" "),s("p",[e._v("主要接卸 vue 文件然后解析，可以直接 运行 vue 文件，把原本一个 .vue 的文件拆成了三个请求（分别对应 script、style 和 template） ，浏览器会先收到包含 script 逻辑的 App.vue 的响应，然后解析到 template 和 style 的路径后，会再次发起 HTTP 请求来请求对应的资源，此时 Vite 对其拦截并再次处理后返回相应的内容")]),e._v(" "),s("p",[e._v("vue-loader 比较类似，借助 module script 处理文件依赖，然后通过拼接不同的 query.type 处理单页面文件解析后的各个资源文件，最后响应给浏览器进行渲染")]),e._v(" "),s("h5",{attrs:{id:"hmrplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hmrplugin"}},[e._v("#")]),e._v(" hmrPlugin")]),e._v(" "),s("p",[e._v("当文件发生变化时，服务端在 handleVueSFCReload 方法中会根据变化的类型推送不同的消息，当客户端接收到对应消息时，会结合 vue.HMRRuntime 进行处理或者重新加载新的资源")]),e._v(" "),s("h5",{attrs:{id:"serveplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serveplugin"}},[e._v("#")]),e._v(" servePlugin")]),e._v(" "),s("p",[e._v("用于实现一些 koa 请求和响应的配置")]),e._v(" "),s("ul",[s("li",[e._v("对于普通文件，直接查找服务器静态资源， 通过 servePlugin 中配置 koa-static 实现")]),e._v(" "),s("li",[e._v("对于 vue 文件，会重新拼接 http 请求，对于每个请求，包括 path 和 query，其中 path 用于确定组件文件，query.type 用于确定具体使用啥方法来返回响应内容")])]),e._v(" "),s("h2",{attrs:{id:"二、在-vue3-开发中的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、在-vue3-开发中的问题"}},[e._v("#")]),e._v(" 二、在 vue3 开发中的问题")]),e._v(" "),s("ol",[s("li",[e._v("压缩使用 terser，可以选择 esbuild(之前 Chrome80 以下有点问题)")]),e._v(" "),s("li",[e._v("类型别名 键必须以斜线开始和结束")]),e._v(" "),s("li",[e._v("环境变量暂时没有注入到项目中，使用 node 写入文件里")])]),e._v(" "),s("h2",{attrs:{id:"三、和-webpack-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、和-webpack-的区别"}},[e._v("#")]),e._v(" 三、和 webpack 的区别")]),e._v(" "),s("ol",[s("li",[e._v("本身没有打包功能")]),e._v(" "),s("li",[e._v("利用"),s("code",[e._v("module sciprt")]),e._v("按需编译，项目随起随用")]),e._v(" "),s("li",[e._v("不需要安装太多依赖")])])])}),[],!1,null,null,null);t.default=r.exports}}]);