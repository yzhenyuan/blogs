(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{580:function(e,t,a){"use strict";a.r(t);var r=a(2),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"react-跟-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-跟-vue"}},[e._v("#")]),e._v(" react 跟 vue")]),e._v(" "),a("h2",{attrs:{id:"一、-框架对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-框架对比"}},[e._v("#")]),e._v(" 一、 框架对比")]),e._v(" "),a("h3",{attrs:{id:"_1-1-数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数据流"}},[e._v("#")]),e._v(" 1.1. 数据流")]),e._v(" "),a("p",[e._v("vue 支持数据双向绑定，react 是单向数据流 是状态机（状态发生变化，驱动 view 发生变化）")]),e._v(" "),a("h3",{attrs:{id:"_1-2-虚拟-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-虚拟-dom"}},[e._v("#")]),e._v(" 1.2. 虚拟 dom")]),e._v(" "),a("ul",[a("li",[e._v("vue 可以快速的计算出虚拟 DOM 的差异，在渲染过程中，会跟踪组件的依赖关系，不需要重新渲染整个组件树")]),e._v(" "),a("li",[e._v("react，每当应用的状态改变时整个子组件都会重新渲染，可以通过"),a("code",[e._v("pureComponent/shouldComponentUpdate")]),e._v("这个生命周期来进行控制")])]),e._v(" "),a("h3",{attrs:{id:"_1-3-组件化-模板的编写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-组件化-模板的编写"}},[e._v("#")]),e._v(" 1.3. 组件化：模板的编写")]),e._v(" "),a("ul",[a("li",[e._v("Vue 提倡使用常规 HTML 的模板")]),e._v(" "),a("li",[e._v("react 推荐使用 js 语法扩展 jsx")]),e._v(" "),a("li",[e._v("具体来说：react 中 render 函数是支持闭包特性的，所以 import 的组件可以直接调用，但是 Vue 中由于模板中的数据都必须在 this 上进行一次中转，所以每次 import 之后还要在 components 中再声明一下")])]),e._v(" "),a("h3",{attrs:{id:"_1-4-监听数据变化的原理不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-监听数据变化的原理不同"}},[e._v("#")]),e._v(" 1.4. 监听数据变化的原理不同")]),e._v(" "),a("ul",[a("li",[e._v("Vue 通过 "),a("code",[e._v("getter/setter")]),e._v("以及一些函数的劫持，能精确制导数据的变化，本身具有很好的性能")]),e._v(" "),a("li",[e._v("react 默认通过比较引用的方式进行的，如果不优化("),a("code",[e._v("pureComponent/shouldComponentUpdate")]),e._v(")就会导致大量不必要的重新渲染")]),e._v(" "),a("li",[e._v("因为 Vue 使用的是可变数据，react 更强调数据的不可变")])]),e._v(" "),a("h3",{attrs:{id:"_1-5-高阶组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-高阶组件"}},[e._v("#")]),e._v(" 1.5. 高阶组件")]),e._v(" "),a("p",[e._v("react 可通过高阶组件（hoc）来扩展，Vue 通过 "),a("code",[e._v("mixins")]),e._v(" 来扩展")]),e._v(" "),a("p",[e._v("原因 高阶组件就是高阶函数，而 react 的组件本事就是纯粹的函数，相反 Vue 使用 HTML 模板来创建视图，这时模板还无法有效的编译，因此 Vue 不适用 hoc 来实现")]),e._v(" "),a("h3",{attrs:{id:"_1-6-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-diff"}},[e._v("#")]),e._v(" 1.6 diff")]),e._v(" "),a("p",[e._v("vue 和 react 的 diff 算法，都是忽略跨级比较，只做同级比较。vue diff 时调动 patch 函数，参数是 vnode 和 oldVnode，分别代表新旧节点。")]),e._v(" "),a("ol",[a("li",[e._v("vue 对比节点。当节点元素相同，但是 classname 不同，认为是不同类型的元素，删除重建，而 react 认为是同类型节点，只是修改节点属性。")]),e._v(" "),a("li",[e._v("vue 的列表对比，采用的是两端到中间比对的方式，而 react 采用的是从左到右依次对比的方式。当一个集合只是把最后一个节点移到了第一个，react 会把前面的节点依次移动，而 vue 只会把最后一个节点移到第一个。总体上，vue 的方式比较高效。")])]),e._v(" "),a("h2",{attrs:{id:"二、redux-和-vuex-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、redux-和-vuex-区别"}},[e._v("#")]),e._v(" 二、Redux 和 Vuex 区别")])])}),[],!1,null,null,null);t.default=v.exports}}]);