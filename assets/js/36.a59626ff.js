(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{541:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),a("blockquote",[a("p",[t._v("模块化是一种思想, 是将大工程拆成小的模块分治的思想.")])]),t._v(" "),a("p",[t._v("历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。")]),t._v(" "),a("p",[t._v("其他语言都有这项功能，比如 Ruby 的 require、Python 的 import，甚至就连 CSS 都有@import，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。")]),t._v(" "),a("h2",{attrs:{id:"一、模块化的发展阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、模块化的发展阶段"}},[t._v("#")]),t._v(" 一、模块化的发展阶段")]),t._v(" "),a("h3",{attrs:{id:"_1-1-语法层面的约定封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-语法层面的约定封装"}},[t._v("#")]),t._v(" 1.1 语法层面的约定封装")]),t._v(" "),a("p",[t._v("大多利用 JavaScript 的语言特性和浏览器特性，使用 Script 标签、目录文件的组织、闭包、IIFE、对象模拟命名空间等方法。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-规范的制定和预编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-规范的制定和预编译"}},[t._v("#")]),t._v(" 1.2 规范的制定和预编译")]),t._v(" "),a("p",[t._v("这一阶段的发展，开始了对模块化规范的制定。")]),t._v(" "),a("p",[t._v("以 CommonJS 社区为触发点，发展出不同了规范如 CommonJS、AMD、CMD、UMD 等和不同的模块加载库如 RequireJS、Sea.js、Browserify 等")]),t._v(" "),a("p",[t._v("解决了浏览器端 JavaScript 依赖管理、执行顺序等在之前一个阶段未被解决的许多问题被有了一定程度的解决，随着 browserify 和 webpack 工具的出现，让写法上也可以完全和服务端 Node.js 的模块写法一样，"),a("strong",[t._v("通过 AST 转为在浏览器端可运行的代码，虽然多了一层预编译的过程")]),t._v("，但对开发来说是很友好的，预编译的过程完全可以由工具自动化。")]),t._v(" "),a("h3",{attrs:{id:"_1-3-原生语言层面模块化的支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-原生语言层面模块化的支持"}},[t._v("#")]),t._v(" 1.3 原生语言层面模块化的支持")]),t._v(" "),a("p",[t._v("ES Modules")]),t._v(" "),a("h2",{attrs:{id:"二、目前流行的-js-模块化规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目前流行的-js-模块化规范"}},[t._v("#")]),t._v(" 二、目前流行的 js 模块化规范")]),t._v(" "),a("p",[t._v("目前流行的 js 模块化规范有 AMD、CMD、CommonJS、UMD 以及 ES6 Module")]),t._v(" "),a("h2",{attrs:{id:"_2-1-amd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-amd"}},[t._v("#")]),t._v(" 2.1 AMD")]),t._v(" "),a("p",[t._v("异步加载模块，它是一个在浏览器端模块化开发的规范，使用AMD规范就需要对应的库 "),a("code",[t._v("require.js")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moduleName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ma"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" someValue\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ma"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** code **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("🍎 特点：")]),t._v(" "),a("ul",[a("li",[t._v("异步加载模块，模块加载不影响后面语句的执行")]),t._v(" "),a("li",[t._v("所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完后回调函数才会执行")]),t._v(" "),a("li",[a("strong",[t._v("依赖前置、提前执行")]),t._v("，在定义模块的时候就要声明其依赖的模块")])]),t._v(" "),a("h2",{attrs:{id:"_2-2-cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-cmd"}},[t._v("#")]),t._v(" 2.2 CMD")]),t._v(" "),a("p",[t._v("使用对应的库"),a("code",[t._v("SeaJS")])]),t._v(" "),a("p",[t._v("与AMD类似，不同点在于推崇就近延迟执行，只有在用到某个模块的时候再去require")]),t._v(" "),a("p",[t._v("🌶 AMD和CMD最大的区别 是"),a("strong",[t._v("对依赖模块的执行时机处理不同")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载模块")]),t._v("\nseajs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myModule.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("my")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"_2-3-umd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-umd"}},[t._v("#")]),t._v(" 2.3 UMD")]),t._v(" "),a("p",[t._v("UMD整合了CommonJS和AMD，希望能够解决跨平台的模块方案")]),t._v(" "),a("p",[t._v("🍎 运行原理：")]),t._v(" "),a("ol",[a("li",[t._v("先判断是否支持Nodejs的模块（exports）是否存在，存在就使用CommonJS")]),t._v(" "),a("li",[t._v("否则判断是否支持AMD（define）是否存在，存在则使用AMD")])]),t._v(" "),a("h2",{attrs:{id:"_2-4-commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-commonjs"}},[t._v("#")]),t._v(" 2.4 CommonJS")]),t._v(" "),a("p",[t._v("node使用的是commonjs")]),t._v(" "),a("p",[t._v("🍎 特点：")]),t._v(" "),a("ol",[a("li",[t._v("同步加载")]),t._v(" "),a("li",[t._v("一个文件就是一个模块，拥有单独的作用域")]),t._v(" "),a("li",[t._v("在服务端模块文件都存在本地磁盘，读取非常快，但在客户端限于网络问题，适合异步加载")])]),t._v(" "),a("p",[t._v("🍆 注意：")]),t._v(" "),a("ol",[a("li",[t._v("exports和module.exports同时存在时，后者覆盖前一个")]),t._v(" "),a("li",[t._v("模块内部全是exports时，等同于 module.exports")]),t._v(" "),a("li",[t._v("exports是module.exports的子集")]),t._v(" "),a("li",[t._v("模块加载顺序是同步的")]),t._v(" "),a("li",[t._v("模块可以多次加载，但只会在第一次加载时运行，后面的都被缓存了，是直接取结果")])]),t._v(" "),a("h2",{attrs:{id:"_2-5-es6-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-es6-module"}},[t._v("#")]),t._v(" 2.5 ES6 Module")]),t._v(" "),a("p",[t._v("跟CommonJS的区别：")]),t._v(" "),a("ol",[a("li",[t._v("CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。")]),t._v(" "),a("li",[t._v("CommonJS 模块是运行时加载，ES6 模块是编译时输出接口")]),t._v(" "),a("li",[t._v("CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);