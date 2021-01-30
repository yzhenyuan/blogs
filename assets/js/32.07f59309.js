(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{538:function(t,a,r){"use strict";r.r(a);var s=r(2),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"浏览器的渲染机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染机制"}},[t._v("#")]),t._v(" 浏览器的渲染机制")]),t._v(" "),r("p",[t._v("在具体讨论原理之前，我们需要了解一下浏览器渲染流程的一些基本概念。浏览器渲染流程是个老生常谈的话题了，对于 “浏览器如何呈现一个页面的内容” 的这类问题，不少人都可以讲出一个相对完整的过程，从网络请求到浏览器解析，可以具体到很多的细节。除去网络资源获取的步骤，我们理解的 Web 页面的展示，一般可以分为 构建 DOM 树、构建渲染树、布局、绘制、渲染层合成 几个步骤。")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6"}},[t._v("浏览器的渲染机制")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E6%9E%84%E5%BB%BA-dom-%E6%A0%91"}},[t._v("构建 DOM 树")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E6%9E%84%E5%BB%BA%E6%B8%B2%E6%9F%93%E6%A0%91"}},[t._v("构建渲染树")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%B8%83%E5%B1%80layout"}},[t._v("布局（Layout）")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E7%BB%98%E5%88%B6paint"}},[t._v("绘制（Paint）")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E6%B8%B2%E6%9F%93%E5%B1%82%E5%90%88%E6%88%90composite"}},[t._v("渲染层合成（Composite）")])])])])]),t._v(" "),r("h2",{attrs:{id:"构建-dom-树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建-dom-树"}},[t._v("#")]),t._v(" 构建 DOM 树")]),t._v(" "),r("p",[t._v("浏览器将 HTML 解析成树形结构的 DOM 树，一般来说，这个过程发生在页面初次加载，或页面 JavaScript 修改了节点结构的时候。")]),t._v(" "),r("h2",{attrs:{id:"构建渲染树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建渲染树"}},[t._v("#")]),t._v(" 构建渲染树")]),t._v(" "),r("p",[t._v("浏览器将 CSS 解析成树形结构的 CSSOM 树，再和 DOM 树合并成渲染树。")]),t._v(" "),r("h2",{attrs:{id:"布局-layout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#布局-layout"}},[t._v("#")]),t._v(" 布局（Layout）")]),t._v(" "),r("p",[t._v("浏览器根据渲染树所体现的节点、各个节点的 CSS 定义以及它们的从属关系，计算出每个节点在屏幕中的位置。")]),t._v(" "),r("p",[t._v("Web 页面中元素的布局是相对的，在页面元素位置、大小发生变化，往往会导致其他节点联动，需要重新计算布局，这时候的布局过程一般被称为回流（Reflow）。")]),t._v(" "),r("h2",{attrs:{id:"绘制-paint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#绘制-paint"}},[t._v("#")]),t._v(" 绘制（Paint）")]),t._v(" "),r("p",[t._v("遍历渲染树，调用渲染器的 paint() 方法在屏幕上绘制出节点内容，本质上是一个像素填充的过程。")]),t._v(" "),r("p",[t._v("这个过程也出现于回流或一些不影响布局的 CSS 修改引起的屏幕局部重画，这时候它被称为重绘（Repaint）。")]),t._v(" "),r("p",[t._v("实际上，绘制过程是在多个层上完成的，这些层我们称为渲染层（RenderLayer）。")]),t._v(" "),r("h2",{attrs:{id:"渲染层合成-composite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染层合成-composite"}},[t._v("#")]),t._v(" 渲染层合成（Composite）")]),t._v(" "),r("p",[t._v("多个绘制后的渲染层按照恰当的重叠顺序进行合并，而后生成位图，最终通过显卡展示到屏幕上。")]),t._v(" "),r("p",[r("strong",[t._v("这是一个基本的浏览器从解析到绘制一个 Web 页面的过程，跟上边页面卡顿问题的解决方法相关的，主要是最后一个环节 —— 渲染层合成。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);