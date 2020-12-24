(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{546:function(_,v,t){"use strict";t.r(v);var a=t(2),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),t("h2",{attrs:{id:"一、什么是设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是设计模式"}},[_._v("#")]),_._v(" 一、什么是设计模式")]),_._v(" "),t("p",[_._v("一个模式就是一个可重用的方案，模式的另一种解释就是一个我们如何解决问题的模板")]),_._v(" "),t("p",[_._v("设计模式是代码设计经验的总结，为了可重用代码，保证代码的可靠性等。")]),_._v(" "),t("p",[_._v("设计模式有以下三点好处：")]),_._v(" "),t("ul",[t("li",[_._v("模式是行之有效的解决方法")]),_._v(" "),t("li",[_._v("模式可以很容易地重用")]),_._v(" "),t("li",[_._v("模式善于表达")])]),_._v(" "),t("h2",{attrs:{id:"二、反模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、反模式"}},[_._v("#")]),_._v(" 二、反模式")]),_._v(" "),t("p",[_._v("如果我们认为一种模式代表一种最佳实践，那么一种反模式就代表我们已经学到的教训")]),_._v(" "),t("p",[_._v("反模式这个术语是1995年由安德鲁·凯尼格在当年的11月C++报告中创造的，是受“四人组”所著《设计模式》一书的启发。在凯尼格的报告中，他提出反模式的两个概念：")]),_._v(" "),t("ul",[t("li",[_._v("描述对于一个特殊的问题，提出了一个糟糕的解决方案，最终导致一个坏结果发生")]),_._v(" "),t("li",[_._v("描述如何摆脱上述解决方案并能提出一个好的解决方案")])]),_._v(" "),t("h3",{attrs:{id:"_2-1-反模式的由来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-反模式的由来"}},[_._v("#")]),_._v(" 2.1 反模式的由来")]),_._v(" "),t("p",[_._v("每一个设计问题都是以在两个实体之间实现平衡为开始的，即：问题的形式和它的上下文。形式是解决问题的方案；上下文定义该问题。")]),_._v(" "),t("p",[_._v("虽然设计模式很重要，但是理解反模式也同样重要。创建应用程序时，一个项目的声明周期就会以此为起点；一旦完成了初始版本，就需要进行维护。最终方案的质量好坏取决于技能水平和团队投入时间。")]),_._v(" "),t("p",[_._v("当然这里的好坏是在上下文中考虑的，如果一个“完美的”设计模式应用于错误的上下文中，那么它也可能是一个反模式。应用程序在进入生产环境并即将进入维护模式时会面临更大的挑战。之前没有研究过该应用程序的开发人员，在这样的系统上工作，可能会将不良设计意外地引入到项目中，如果说将不良实践创建为反模式，则能让开发人员有办法提前识别这些反模式，这样可以避免常见错误的发生。")]),_._v(" "),t("h3",{attrs:{id:"_2-2-javascript中常见的反模式有很多-简单举几个例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-javascript中常见的反模式有很多-简单举几个例子"}},[_._v("#")]),_._v(" 2.2 Javascript中常见的反模式有很多，简单举几个例子：")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("ul",[t("li",[_._v("在全局上下文中定义大量的变量污染全局命名空间。")]),_._v(" "),t("li",[_._v("向setTimeout或setInterval传递字符串，无意中触发eval( )的内部使用。")]),_._v(" "),t("li",[_._v("修改Object类的原型（这是一个特别不良的反模式）")]),_._v(" "),t("li",[_._v("以内联形式使用Javascript，它是不可改变的。")]),_._v(" "),t("li",[_._v("在使用document.createElement等原生DOM方法更适合的情况下使用document.write。多年来document.write一直都在被滥用，并有相当多的缺点，包括：如果在页面加载完成后执行document.write，它实际上会重写我们的页面，而documet.createElement则不会。")])])]),_._v(" "),t("h2",{attrs:{id:"三、-设计模式的种类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、-设计模式的种类"}},[_._v("#")]),_._v(" 三、 设计模式的种类")]),_._v(" "),t("p",[_._v("设计模式主要分为三大类型，创建型模式，结构型模式和行为型模式")]),_._v(" "),t("h3",{attrs:{id:"_3-1-创建型模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建型模式"}},[_._v("#")]),_._v(" 3.1 创建型模式")]),_._v(" "),t("p",[_._v("创建型设计模式关注于对象创建的机制方法，通过该方法，对象以适应工作环境的方式被创建")]),_._v(" "),t("p",[_._v("基本的对象创建方法可能会给项目增加额外的复杂性，而这些模式的目的就是为了通过"),t("strong",[_._v("控制创建过程")]),_._v("解决这个问题，"),t("strong",[_._v("解决对象创建方法额外复杂性")])]),_._v(" "),t("p",[_._v("在该分类下的模式有：")]),_._v(" "),t("ol",[t("li",[_._v("构造器模式（Constructor）：被用来创建特殊类型的对象")]),_._v(" "),t("li",[_._v("工厂模式（Factory）：通过将数据和事件接口化来构建若干个子类")]),_._v(" "),t("li",[_._v("抽象工厂模式 （Abstract）：建立若干族类的一个实例，这个实例不需要具体类的细节信息。（抽象类）")]),_._v(" "),t("li",[_._v("原型模式 （Prototype）：一个完全初始化的实例，用于拷贝或者克隆")]),_._v(" "),t("li",[_._v("单例模式 （Singleton）：一个类只有唯一的一个实例，这个实例在整个程序中有一个全局的访问点")]),_._v(" "),t("li",[_._v("建造者模式（Builder）：将对象的构建方法和其表现形式分离开来，总是构建相同类型的对象")])]),_._v(" "),t("h3",{attrs:{id:"_3-2-结构设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-结构设计模式"}},[_._v("#")]),_._v(" 3.2 结构设计模式")]),_._v(" "),t("p",[_._v("结构模式关注于对象组成和通常识别的方式实现不同对象之间的关系。该模式有助于在系统的某一部分发生改变的时候，整个系统结构不需要改变。该模式同样有助于"),t("strong",[_._v("对系统中某部分没有达到某一目的的部分进行重组")]),_._v("。")]),_._v(" "),t("p",[_._v("在该分类下的模式有：")]),_._v(" "),t("ol",[t("li",[_._v("装饰模式（Decorator）：动态给对象增加一些可替换的处理流程。")]),_._v(" "),t("li",[_._v("外观模式（Facada）：一个类隐藏了内部子系统的复杂度，只暴露出一些简单的接口。")]),_._v(" "),t("li",[_._v("享元模式（Flyweight）：一个细粒度对象，用于将包含在其它地方的信息 在不同对象之间高效地共享。")]),_._v(" "),t("li",[_._v("适配器模式（Adapter）：将不同类的接口进行匹配，调整，这样尽管内部接口不兼容但是不同的类还是可以协同工作的。")]),_._v(" "),t("li",[_._v("代理模式（Proxy）：一个充当占位符的对象用来代表一个真实的对象")])]),_._v(" "),t("h3",{attrs:{id:"_3-3-行为设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-行为设计模式"}},[_._v("#")]),_._v(" 3.3 行为设计模式")]),_._v(" "),t("p",[_._v("行为模式关注改善或精简在系统中"),t("strong",[_._v("不同对象间通信")]),_._v("。")]),_._v(" "),t("p",[_._v("在该分类下的模式有：")]),_._v(" "),t("ol",[t("li",[_._v("迭代模式（Iterator）：在不需要直到集合内部工作原理的情况下，顺序访问一个集合里面的元素。")]),_._v(" "),t("li",[_._v("中介者模式（Mediator）：在类之间定义简化的通信方式，用于避免类之间显式的持有彼此的引用。")]),_._v(" "),t("li",[_._v("观察者模式（Observer）：用于将变化通知给多个类的方式，可以保证类之间的一致性。")]),_._v(" "),t("li",[_._v("访问者模式（Visitor）：为类增加新的操作而不改变类本身")])])])}),[],!1,null,null,null);v.default=r.exports}}]);