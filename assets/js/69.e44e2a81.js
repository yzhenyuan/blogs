(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{578:function(a,e,t){"use strict";t.r(e);var s=t(2),v=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"esbuild"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esbuild"}},[a._v("#")]),a._v(" esbuild")]),a._v(" "),t("h2",{attrs:{id:"esbuild-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esbuild-2"}},[a._v("#")]),a._v(" esbuild")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/wechat/images/36/36f0f7cd3e00dd92a86aa7aea0c85e8c.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"快的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快的原因"}},[a._v("#")]),a._v(" 快的原因")]),a._v(" "),t("ol",[t("li",[a._v("它是用 Go 语言编写的，该语言可以编译为原生代码；")]),a._v(" "),t("li",[a._v("解析，打印和源映射生成全部完全并行化；")]),a._v(" "),t("li",[a._v("无需昂贵的数据转换，只需很少的几步即可完成所有操作；")]),a._v(" "),t("li",[a._v("编写代码时处处注意速度表现，并尽量避免不必要的配置。")])]),a._v(" "),t("h3",{attrs:{id:"支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持"}},[a._v("#")]),a._v(" 支持")]),a._v(" "),t("p",[a._v("CommonJS 模块")]),a._v(" "),t("p",[a._v("ES6 模块")]),a._v(" "),t("p",[a._v("使用’–bundle’与 ES6 模块的静态绑定打包")]),a._v(" "),t("p",[a._v("使用’–minify’完全压缩（空格、标识符和修饰符）")]),a._v(" "),t("p",[a._v("启用’–sourcemap’时，完全支持源映射")]),a._v(" "),t("p",[a._v(".jsx 文件的 JSX 到 JavaScript 转换")]),a._v(" "),t("p",[a._v("通过’–define’进行编译时标识符替换")]),a._v(" "),t("p",[a._v("使用 package.json 中的’browser’字段进行路径替换")]),a._v(" "),t("p",[a._v("自动检测 tsconfig.json 中的’baseUrl’")]),a._v(" "),t("h2",{attrs:{id:"terser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terser"}},[a._v("#")]),a._v(" terser")]),a._v(" "),t("p",[a._v("作为js代码压缩工具")]),a._v(" "),t("h2",{attrs:{id:"vite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[a._v("#")]),a._v(" Vite")]),a._v(" "),t("h3",{attrs:{id:"webpack和vite的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack和vite的对比"}},[a._v("#")]),a._v(" webpack和vite的对比")]),a._v(" "),t("p",[a._v("当我们使用如webpack的打包工具时，经常会遇到遇到一小行代码，webpack常常需要耗时数秒甚至几秒钟进行重新打包。这是因为webpack需要将所有模块打包成一个一个或多个模块。")]),a._v(" "),t("blockquote",[t("p",[a._v("不可避免的，当我们修改模块中的一个子模块b.js，整个bundle.js都需要重新打包，随着项目规模的扩大，重新打包（热更新）的时间越来越长。我们常用如thread-loader，cache-loader，代码分片等方法进行优化。但通过项目规模的进一步扩大，热更新速度又将变慢，又将开始新一轮的优化。通过项目规模的不断扩大，基于bunder的项目优化也将达到一定的极限。")])]),a._v(" "),t("p",[a._v("Webpack之所以慢，是因为Webpack会使多个资源构成一个或多个捆绑")]),a._v(" "),t("h3",{attrs:{id:"vite原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite原理"}},[a._v("#")]),a._v(" vite原理")]),a._v(" "),t("h4",{attrs:{id:"请求拦截原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求拦截原理"}},[a._v("#")]),a._v(" 请求拦截原理")]),a._v(" "),t("p",[a._v("Vite的基本实现原理，就是启动一个koa服务器拦截浏览器请求ES模块的请求。通过路径查找目录下对应文件的文件做一定的处理最终以ES模块格式返回给客户端")]),a._v(" "),t("p",[a._v("Vite对js / ts的处理没有使用如gulp，rollup等传统打包工具，其他使用了esbuild")]),a._v(" "),t("p",[a._v("esbuild是一个全新的js打包工具，支持如babel，压缩等的功能，他的特点是快（比rollup等工具会快上几十倍）(go这样的静态语言会比动态语言快很多)")]),a._v(" "),t("h4",{attrs:{id:"node-modules模块的处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-modules模块的处理"}},[a._v("#")]),a._v(" node_modules模块的处理")]),a._v(" "),t("p",[a._v("首先说一下基于ES模块模块的局限性，在我们平时写代码时。怎么不是相对路径的引用，又直接引用一个node_modules模块时，我们都是以如下的格式进行引用。")]),a._v(" "),t("p",[a._v("如Webpack＆gulp等打包工具会帮我们找到模块的路径。但浏览器只能通过相对路径去寻找。为了解决这个问题，Vite采取了一些特殊处理")]),a._v(" "),t("h3",{attrs:{id:"热更新-hot-module-reload-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热更新-hot-module-reload-原理"}},[a._v("#")]),a._v(" 热更新（Hot Module Reload）原理")]),a._v(" "),t("p",[a._v("Vite的热加载原理，实际上就是在客户端与服务端建立了一个websocket链接，当代码被修改时，服务端发送消息通知客户端去请求修改模块的代码，完成热更新。")]),a._v(" "),t("h3",{attrs:{id:"服务端原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端原理"}},[a._v("#")]),a._v(" 服务端原理")]),a._v(" "),t("p",[a._v("服务端做的就是监听代码文件的更改，在适当的时机向客户端发送websocket信息通知客户端去请求新的模块代码。")])])}),[],!1,null,null,null);e.default=v.exports}}]);