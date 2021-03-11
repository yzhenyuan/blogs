(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{609:function(a,t,s){"use strict";s.r(t);var n=s(2),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"loader-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader-plugin"}},[a._v("#")]),a._v(" loader & plugin")]),a._v(" "),s("h2",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[a._v("#")]),a._v(" loader")]),a._v(" "),s("p",[s("strong",[a._v("作用")]),a._v("：loader 是文件加载器，用来对加载的文件进行处理，如：编译、压缩等")]),a._v(" "),s("p",[s("strong",[a._v("执行顺序")]),a._v("：loader 的执行顺序跟配置顺序是相反的，最后一个先执行")]),a._v(" "),s("blockquote",[s("p",[a._v("第一个执行的 loader 接收源文件内容作为参数，其他的 loader 接收前一个执行的 loader 的返回值作为参数，最后执行的 loader 会返回此模块的 js 源码")])]),a._v(" "),s("p",[s("strong",[a._v("原理")]),a._v("：一般 loader 就只有一个职能，如果需要多步转换，就需要使用多个 loader，使用多个 loader 的时候，每个 loader 都会链式的执行顺序，第一个拿源文件去处理，第二个拿第一个处理后的接着处理，最终的 loader 将结果返回给 webpack")]),a._v(" "),s("p",[s("strong",[a._v("loader 开发")]),a._v("：引入官方的 loader-utils，调用 loaderUtils.getOptions(this)拿到 webpack 的配置参数，然后进行自己的处理")]),a._v(" "),s("h2",{attrs:{id:"plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[a._v("#")]),a._v(" plugin")]),a._v(" "),s("p",[a._v("plugin 功能更加强大，从打包优化和压缩，到重新定义环境变量等，loader 不能做的都是它做")]),a._v(" "),s("p",[a._v("plugin 让 webpack 的机制更加灵活，它在编译过程中留下的一系列生命周期的钩子，通过这些钩子来实现在不同编译结果时对源模块进行处理")]),a._v(" "),s("p",[a._v("他的编译是基于事件流来编译的，通过"),s("code",[a._v("tapable")]),a._v("这个核心库来实现插件的绑定和执行的")]),a._v(" "),s("blockquote",[s("p",[a._v("tapable 主要基于发布订阅的插件架构，用来创建声明周期钩子的库")])]),a._v(" "),s("ol",[s("li",[a._v("调用 complier.hooks.run.tap 开始注册")]),a._v(" "),s("li",[a._v("创建 compilation ，基于配置创建 chunks")]),a._v(" "),s("li",[a._v("在通过 parser 解析 chunks")]),a._v(" "),s("li",[a._v("使用模块和依赖管理模块之间的依赖关系")]),a._v(" "),s("li",[a._v("最后使用 template 基于 compilation 数据生成结果代码")])]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BasicPlugin")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 在构造函数中获取用户给该插件传入的配置")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Webpack 会调用 BasicPlugin 实例的 apply 方法给插件实例传入 compiler 对象")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("compiler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    compiler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"compilation"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("compilation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 导出 Plugin")]),a._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" BasicPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h2",{attrs:{id:"loader-和-plugin-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader-和-plugin-的区别"}},[a._v("#")]),a._v(" loader 和 plugin 的区别")]),a._v(" "),s("h3",{attrs:{id:"功能上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能上"}},[a._v("#")]),a._v(" 功能上")]),a._v(" "),s("h4",{attrs:{id:"loader-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader-2"}},[a._v("#")]),a._v(" loader")]),a._v(" "),s("ol",[s("li",[a._v("loader 从字面的意思理解，是 加载 的意思")]),a._v(" "),s("li",[a._v("loader 虽然是扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域")]),a._v(" "),s("li",[a._v("loader 是运行在 NodeJS 中")])]),a._v(" "),s("h4",{attrs:{id:"plugin-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-2"}},[a._v("#")]),a._v(" plugin")]),a._v(" "),s("ol",[s("li",[a._v("plugin 也是为了扩展 webpack 的功能,但是 plugin 是作用于 webpack 本身上的")]),a._v(" "),s("li",[a._v("plugin 不仅只局限在打包，资源的加载上，从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务")])]),a._v(" "),s("h3",{attrs:{id:"从运行时机的角度区分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从运行时机的角度区分"}},[a._v("#")]),a._v(" 从运行时机的角度区分")]),a._v(" "),s("ol",[s("li",[a._v("loader 运行在打包文件之前（loader 为在模块加载时的预处理文件）")]),a._v(" "),s("li",[a._v("plugins 在整个编译周期都起作用。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);