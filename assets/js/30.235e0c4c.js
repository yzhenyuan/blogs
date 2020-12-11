(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{513:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"虚拟dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[s._v("#")]),s._v(" 虚拟DOM")]),s._v(" "),t("h2",{attrs:{id:"一、-什么是虚拟dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、-什么是虚拟dom"}},[s._v("#")]),s._v(" 一、 什么是虚拟DOM？")]),s._v(" "),t("p",[s._v("所谓虚拟DOM，就是用一个JS对象来描述一个DOM节点，像如下示例：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<div class=\"a\" id=\"b\">我是内容</div>\n\n{\n  tag:'div',        // 元素标签\n  attrs:{           // 属性\n    class:'a',\n    id:'b'\n  },\n  text:'我是内容',  // 文本内容\n  children:[]       // 子元素\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"二、-为什么要有虚拟dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、-为什么要有虚拟dom"}},[s._v("#")]),s._v(" 二、 为什么要有虚拟DOM？")]),s._v(" "),t("p",[s._v("Vue是数据驱动视图的，数据发生变化视图就要随之更新，在更新视图的时候难免要操作DOM,而操作真实DOM又是非常耗费性能的，这是因为浏览器的标准就把 DOM 设计的非常复杂，所以一个真正的 DOM 元素是非常庞大的")]),s._v(" "),t("p",[s._v("一个简单的空div标签，就打印出这么多东西，更不用说复杂的、深嵌套的DOM节点了。由此可见，直接操作真实DOM是非常消耗性能的。")]),s._v(" "),t("p",[s._v("我们可以用JS的计算性能来换取操作DOM所消耗的性能。")]),s._v(" "),t("p",[s._v("既然我们逃不掉操作DOM这道坎,但是我们可以尽可能少的操作DOM。那如何在更新视图的时候尽可能少的操作DOM呢？最直观的思路就是我们不要盲目的去更新视图，而是通过对比数据变化前后的状态，计算出视图中哪些地方需要更新，只更新需要更新的地方，而不需要更新的地方则不需关心，这样我们就可以尽可能少的操作DOM了。这也就是上面所说的用JS的计算性能来换取操作DOM的性能。")]),s._v(" "),t("p",[s._v("我们可以用JS模拟出一个DOM节点，称之为虚拟DOM节点。当数据发生变化时，我们对比变化前后的虚拟DOM节点，通过DOM-Diff算法计算出需要更新的地方，然后去更新需要更新的视图。")]),s._v(" "),t("p",[s._v("这就是虚拟DOM产生的原因以及最大的用途。")])])}),[],!1,null,null,null);a.default=e.exports}}]);