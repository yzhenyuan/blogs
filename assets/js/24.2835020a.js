(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{530:function(t,v,_){"use strict";_.r(v);var e=_(2),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"chrome-performance"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#chrome-performance"}},[t._v("#")]),t._v(" Chrome Performance")]),t._v(" "),_("p",[t._v("Performance 面板同样有个前身，叫 Timeline。该面板用于记录和分析运行时性能，运行时性能是页面运行时（而不是加载）的性能。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/front-end-performance-analyze_5.jpg",alt:""}})]),t._v(" "),_("p",[t._v("我们每一次的UI的变化，都要经历以下步骤：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/bddfc2fe-4510-4dc0-9f19-228c40e58540.png",alt:"像素管道五步"}})]),t._v(" "),_("p",[t._v("人的眼睛大约每秒可以看到 60 帧，那么就代表我们每 16.7ms 就要看到 1 帧，一帧就要经历上图的 5 步，说明我们的每一个任务（task） 不宜过长，这样就会导致用户对于界面感知的不友好性")]),t._v(" "),_("h2",{attrs:{id:"一、-fps-cpu-net"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、-fps-cpu-net"}},[t._v("#")]),t._v(" 一、 FPS;CPU;NET")]),t._v(" "),_("h3",{attrs:{id:"_1-1-analyze-frames-per-second-帧率-fps"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-analyze-frames-per-second-帧率-fps"}},[t._v("#")]),t._v(" 1.1 (Analyze frames per second)帧率,FPS")]),t._v(" "),_("p",[t._v("FPS（frames per second）是用来分析动画的一个主要性能指标。能保持在60的FPS的话，那么用户体验就是不错的。")]),t._v(" "),_("p",[t._v("红色横条表示帧率过低已经影响了用户体验，通常情况下绿条越高,帧率越高,体验越好.当帧率不影响使用的时候横条是不会出现的。")]),t._v(" "),_("h3",{attrs:{id:"_1-2-cpu"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-cpu"}},[t._v("#")]),t._v(" 1.2 CPU")]),t._v(" "),_("p",[t._v("在CPU图表中的各种颜色与Summary面板里的颜色是相互对应的，Summary面板就在Performance面板的下方。CPU图表中的各种颜色代表着在这个时间段内，CPU在各种处理上所花费的时间。如果你看到了某个处理占用了大量的时间，那么这可能就是一个可以找到性能瓶颈的线索。")]),t._v(" "),_("h3",{attrs:{id:"_1-3-net"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-net"}},[t._v("#")]),t._v(" 1.3 NET")]),t._v(" "),_("p",[t._v("每条彩色横杠表示一种资源。横杠越长，检索资源所需的时间越长。 每个横杠的浅色部分表示等待时间（从请求资源到第一个字节下载完成的时间）")]),t._v(" "),_("h2",{attrs:{id:"二、-火焰图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、-火焰图"}},[t._v("#")]),t._v(" 二、 火焰图")]),t._v(" "),_("p",[t._v("在火焰图上看到一到三条垂直的虚线。蓝线代表 DOMContentLoaded 事件。 绿线代表首次绘制的时间。 红线代表 load 事件")]),t._v(" "),_("p",[t._v("在火焰图中选择事件时，Details 窗格会显示与事件相关的其他信息")]),t._v(" "),_("h3",{attrs:{id:"_2-1-frames"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-frames"}},[t._v("#")]),t._v(" 2.1 Frames")]),t._v(" "),_("p",[t._v("在Frames图表中，把鼠标移动到绿色条状图上，Devtools会展示这个帧的FPS。每个帧可能都在60以下，都没有达到60的标准。\n"),_("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-5e4f0fbcaca27f49ebb20c4fc16549e5_1440w.jpg",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_2-2-main图表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-main图表"}},[t._v("#")]),t._v(" 2.2 Main图表")]),t._v(" "),_("p",[t._v("Devtools展示了主线程运行状况。X轴代表着时间。每个长条代表着一个event。长条越长就代表这个event花费的时间越长。Y轴代表了调用栈（call stack）。在栈里，上面的event调用了下面的event。\n"),_("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-a010d11aa34123e41e9a6a26ea5d7b8b_1440w.jpg",alt:""}})]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("在事件长条的右上角出，如果出现了红色小三角，说明这个事件是存在问题的，需要特别注意")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-ca44395a2fe6751356b3dc97a997b689_1440w.jpg",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"三、总结图表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、总结图表"}},[t._v("#")]),t._v(" 三、总结图表")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-2fb06d74a5d8e54e0a947d616d3f68f8_1440w.jpg",alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("蓝色(Loading)：网络通信和HTML解析")]),t._v(" "),_("li",[t._v("黄色(Scripting)：JavaScript执行")]),t._v(" "),_("li",[t._v("紫色(Rendering)：样式计算和布局，即重排")]),t._v(" "),_("li",[t._v("绿色(Painting)：重绘")]),t._v(" "),_("li",[t._v("灰色(other)：其它事件花费的时间")]),t._v(" "),_("li",[t._v("白色(Idle)：空闲时间")])]),t._v(" "),_("h3",{attrs:{id:"_3-1、loading"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、loading"}},[t._v("#")]),t._v(" 3.1、Loading")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("事件")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Parse HTML")]),t._v(" "),_("td",[t._v("浏览器执行HTML解析")])]),t._v(" "),_("tr",[_("td",[t._v("Finish Loading")]),t._v(" "),_("td",[t._v("网络请求完毕事件")])]),t._v(" "),_("tr",[_("td",[t._v("Receive Data")]),t._v(" "),_("td",[t._v("请求的响应数据到达事件，如果响应数据很大（拆包），可能会多次触发该事件")])]),t._v(" "),_("tr",[_("td",[t._v("Receive Response")]),t._v(" "),_("td",[t._v("响应头报文到达时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Send Request")]),t._v(" "),_("td",[t._v("发送网络请求时触发")])])])]),t._v(" "),_("h3",{attrs:{id:"_3-2-scripting"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-scripting"}},[t._v("#")]),t._v(" 3.2 Scripting")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("事件")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Animation Frame Fired")]),t._v(" "),_("td",[t._v("一个定义好的动画帧发生并开始回调处理时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Cancel Animation Frame")]),t._v(" "),_("td",[t._v("取消一个动画帧时触发")])]),t._v(" "),_("tr",[_("td",[t._v("GC Event")]),t._v(" "),_("td",[t._v("垃圾回收时触发")])]),t._v(" "),_("tr",[_("td",[t._v("DOMContentLoaded")]),t._v(" "),_("td",[t._v("当页面中的DOM内容加载并解析完毕时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Evaluate Script")]),t._v(" "),_("td",[t._v("A script was evaluated.")])]),t._v(" "),_("tr",[_("td",[t._v("Event")]),t._v(" "),_("td",[t._v("js事件")])]),t._v(" "),_("tr",[_("td",[t._v("Function Call")]),t._v(" "),_("td",[t._v("只有当浏览器进入到js引擎中时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Install Timer")]),t._v(" "),_("td",[t._v("创建计时器（调用setTimeout()和setInterval()）时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Request Animation Frame")]),t._v(" "),_("td",[t._v("A requestAnimationFrame() call scheduled a new frame")])]),t._v(" "),_("tr",[_("td",[t._v("Remove Timer")]),t._v(" "),_("td",[t._v("当清除一个计时器时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Time")]),t._v(" "),_("td",[t._v("调用console.time()触发")])]),t._v(" "),_("tr",[_("td",[t._v("Time End")]),t._v(" "),_("td",[t._v("调用console.timeEnd()触发")])]),t._v(" "),_("tr",[_("td",[t._v("Timer Fired")]),t._v(" "),_("td",[t._v("定时器激活回调后触发")])]),t._v(" "),_("tr",[_("td",[t._v("XHR Ready State Change")]),t._v(" "),_("td",[t._v("当一个异步请求为就绪状态后触发")])]),t._v(" "),_("tr",[_("td",[t._v("XHR Load")]),t._v(" "),_("td",[t._v("当一个异步请求完成加载后触发")])])])]),t._v(" "),_("h3",{attrs:{id:"_3-3、-rendering"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、-rendering"}},[t._v("#")]),t._v(" 3.3、 Rendering")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("事件")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Animation Frame Fired")]),t._v(" "),_("td",[t._v("一个定义好的动画帧发生并开始回调处理时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Invalidate layout")]),t._v(" "),_("td",[t._v("当DOM更改导致页面布局失效时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Layout")]),t._v(" "),_("td",[t._v("页面布局计算执行时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Recalculate style")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Scroll")]),t._v(" "),_("td",[t._v("内嵌的视窗滚动时触发")])])])]),t._v(" "),_("h3",{attrs:{id:"_3-4、painting"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、painting"}},[t._v("#")]),t._v(" 3.4、Painting")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("事件")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Composite Layers")]),t._v(" "),_("td",[t._v("Chrome的渲染引擎完成图片层合并时触发")])]),t._v(" "),_("tr",[_("td",[t._v("Image Decode")]),t._v(" "),_("td",[t._v("一个图片资源完成解码后触发")])]),t._v(" "),_("tr",[_("td",[t._v("Image Resize")]),t._v(" "),_("td",[t._v("一个图片被修改尺寸后触发")])]),t._v(" "),_("tr",[_("td",[t._v("Paint")]),t._v(" "),_("td",[t._v("合并后的层被绘制到对应显示区域后触发")])])])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方参考"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=a.exports}}]);