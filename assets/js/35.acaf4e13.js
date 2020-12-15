(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{541:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[s._v("#")]),s._v(" 虚拟DOM")]),s._v(" "),a("h2",{attrs:{id:"一、-什么是虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-什么是虚拟dom"}},[s._v("#")]),s._v(" 一、 什么是虚拟DOM？")]),s._v(" "),a("p",[s._v("所谓虚拟DOM，就是用一个JS对象来描述一个DOM节点，像如下示例：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("我是内容"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 元素标签")]),s._v("\n  attrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 属性")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我是内容'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文本内容")]),s._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 子元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"二、-为什么要有虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、-为什么要有虚拟dom"}},[s._v("#")]),s._v(" 二、 为什么要有虚拟DOM？")]),s._v(" "),a("p",[s._v("Vue是数据驱动视图的，数据发生变化视图就要随之更新，在更新视图的时候难免要操作DOM,而操作真实DOM又是非常耗费性能的，这是因为浏览器的标准就把 DOM 设计的非常复杂，所以一个真正的 DOM 元素是非常庞大的")]),s._v(" "),a("p",[s._v("一个简单的空div标签，就打印出这么多东西，更不用说复杂的、深嵌套的DOM节点了。由此可见，直接操作真实DOM是非常消耗性能的。")]),s._v(" "),a("p",[s._v("我们可以用JS的计算性能来换取操作DOM所消耗的性能。")]),s._v(" "),a("p",[s._v("既然我们逃不掉操作DOM这道坎,但是我们可以尽可能少的操作DOM。那如何在更新视图的时候尽可能少的操作DOM呢？最直观的思路就是我们不要盲目的去更新视图，而是通过对比数据变化前后的状态，计算出视图中哪些地方需要更新，只更新需要更新的地方，而不需要更新的地方则不需关心，这样我们就可以尽可能少的操作DOM了。这也就是上面所说的用JS的计算性能来换取操作DOM的性能。")]),s._v(" "),a("p",[s._v("我们可以用JS模拟出一个DOM节点，称之为虚拟DOM节点。当数据发生变化时，我们对比变化前后的虚拟DOM节点，通过DOM-Diff算法计算出需要更新的地方，然后去更新需要更新的视图。")]),s._v(" "),a("p",[s._v("这就是虚拟DOM产生的原因以及最大的用途。")])])}),[],!1,null,null,null);t.default=r.exports}}]);