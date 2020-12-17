(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{548:function(t,e,r){"use strict";r.r(e);var a=r(2),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("h2",{attrs:{id:"一、数据驱动视图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、数据驱动视图"}},[t._v("#")]),t._v(" 一、数据驱动视图")]),t._v(" "),r("p",[t._v("Vue最大的特点之一就是 "),r("strong",[t._v("数据驱动视图")]),t._v("，那么什么是数据驱动视图呢？在这里，我们可以把数据理解为状态，而视图就是用户可直观看到页面。页面不可能是一成不变的，它应该是动态变化的，而它的变化也不应该是无迹可寻的，它或者是由用户操作引起的，亦或者是由后端数据变化引起的，不管它是因为什么引起的，我们统称为它的状态变了，它由前一个状态变到了后一个状态，页面也就应该随之而变化")]),t._v(" "),r("p",[t._v("UI = render(state)")]),t._v(" "),r("p",[t._v("上述公式中：状态state是输入，页面UI输出，状态输入一旦变化了，页面输出也随之而变化。我们把这种特性称之为数据驱动视图。")]),t._v(" "),r("p",[t._v("我们可以把上述公式拆成三部分：state、render()以及UI。我们知道state和UI都是用户定的，而不变的是这个render()。所以Vue就扮演了render()这个角色，当Vue发现state变化之后，经过一系列加工，最终将变化反应在UI上。")]),t._v(" "),r("p",[t._v("那么第一个问题来了，Vue怎么知道state变化了呢？")]),t._v(" "),r("h2",{attrs:{id:"二、vue怎么知道state变化了"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、vue怎么知道state变化了"}},[t._v("#")]),t._v(" 二、Vue怎么知道state变化了？")]),t._v(" "),r("p",[t._v("Vue怎么知道state变化了呢？ 答案是："),r("strong",[t._v("数据侦测")])]),t._v(" "),r("p",[t._v("变化侦测就是追踪状态，亦或者说是数据的变化，一旦发生了变化，就要去更新视图。")]),t._v(" "),r("p",[t._v("在Angular中是通过脏值检查流程来实现变化侦测；在React是通过对比虚拟DOM来实现变化侦测，而在Vue中也有自己的一套变化侦测实现机制。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vue-js.com/learn-vue/start/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);