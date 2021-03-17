(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{617:function(a,e,r){"use strict";r.r(e);var t=r(2),l=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"babel-的工作流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#babel-的工作流程"}},[a._v("#")]),a._v(" babel 的工作流程")]),a._v(" "),r("p",[a._v("babel 本质上是个"),r("strong",[a._v("编译器")])]),a._v(" "),r("h2",{attrs:{id:"一、转换-ast"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、转换-ast"}},[a._v("#")]),a._v(" 一、转换 AST")]),a._v(" "),r("p",[a._v("通过解析器将原始代码转换成抽象语法树（AST），编译器在这一步一般会做两件事："),r("strong",[a._v("语法分析和语义分析")]),a._v("。")]),a._v(" "),r("p",[a._v("语法分析是定义原始代码中的内容是否被认为一个单位，语义分析是判断这些单位组合后是否为语法，")]),a._v(" "),r("h2",{attrs:{id:"二、遍历-ast"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、遍历-ast"}},[a._v("#")]),a._v(" 二、遍历 AST")]),a._v(" "),r("p",[a._v("babel 会按照顺序访问每个 AST 上的节点，并调用插件对应的函数，这一步才是插件要做的，在遍历时 babel 会为每个节点简历一个名为 Path 的对象，这个对象会包含这个节点的信息，也可以让你访问他的父节点或者子节点，同时在这个对象上也会有各种方法让你来修改节点的内容和结构，从而替换掉一个节点")]),a._v(" "),r("h2",{attrs:{id:"三、-产生代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、-产生代码"}},[a._v("#")]),a._v(" 三、 产生代码")]),a._v(" "),r("p",[a._v("最后 babel 把修改过的 AST 再转回代码")]),a._v(" "),r("p",[a._v("剩下的工作就是写入文件或者在进一步处理，其实转换回代码后 babel 的工作就结束了")]),a._v(" "),r("h2",{attrs:{id:"file-loader和url-loader的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-loader和url-loader的区别"}},[a._v("#")]),a._v(" file-loader和url-loader的区别")]),a._v(" "),r("p",[a._v("url-loader封装了file-loader。")]),a._v(" "),r("p",[a._v("url-loader 可以识别图片的大小，然后把图片转换成base64，从而减少代码的体积，如果图片超过设定的现在，就还是用 file-loader来处理")]),a._v(" "),r("p",[a._v("给图片配了 url-loader 在配置里面就不要再给图片配 file-loader 了 ，因为 url-loader 默认会使用 file-loader 来处理图片的路径关系的，只是加了个当图片太大把路径转成了base64的功能")])])}),[],!1,null,null,null);e.default=l.exports}}]);