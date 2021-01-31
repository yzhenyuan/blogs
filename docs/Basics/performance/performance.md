# Chrome Performance

Performance 面板同样有个前身，叫 Timeline。该面板用于记录和分析运行时性能，运行时性能是页面运行时（而不是加载）的性能。

![](https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/front-end-performance-analyze_5.jpg)

我们每一次的 UI 的变化，都要经历以下步骤：

![像素管道五步](https://oscimg.oschina.net/oscnet/bddfc2fe-4510-4dc0-9f19-228c40e58540.png)

人的眼睛大约每秒可以看到 60 帧，那么就代表我们每 16.7ms 就要看到 1 帧，一帧就要经历上图的 5 步，说明我们的每一个任务（task） 不宜过长，这样就会导致用户对于界面感知的不友好性

## 一、 FPS;CPU;NET

### 1.1 (Analyze frames per second)帧率,FPS

FPS（frames per second）是用来分析动画的一个主要性能指标。能保持在 60 的 FPS 的话，那么用户体验就是不错的。

红色横条表示帧率过低已经影响了用户体验，通常情况下绿条越高,帧率越高,体验越好.当帧率不影响使用的时候横条是不会出现的。

### 1.2 CPU

在 CPU 图表中的各种颜色与 Summary 面板里的颜色是相互对应的，Summary 面板就在 Performance 面板的下方。CPU 图表中的各种颜色代表着在这个时间段内，CPU 在各种处理上所花费的时间。如果你看到了某个处理占用了大量的时间，那么这可能就是一个可以找到性能瓶颈的线索。

### 1.3 NET

每条彩色横杠表示一种资源。横杠越长，检索资源所需的时间越长。 每个横杠的浅色部分表示等待时间（从请求资源到第一个字节下载完成的时间）

## 二、 火焰图

在火焰图上看到一到三条垂直的虚线。蓝线代表 DOMContentLoaded 事件。 绿线代表首次绘制的时间。 红线代表 load 事件

在火焰图中选择事件时，Details 窗格会显示与事件相关的其他信息

### 2.1 Frames

在 Frames 图表中，把鼠标移动到绿色条状图上，Devtools 会展示这个帧的 FPS。每个帧可能都在 60 以下，都没有达到 60 的标准。
![](https://pic2.zhimg.com/80/v2-5e4f0fbcaca27f49ebb20c4fc16549e5_1440w.jpg)

### 2.2 Main 图表

Devtools 展示了主线程运行状况。X 轴代表着时间。每个长条代表着一个 event。长条越长就代表这个 event 花费的时间越长。Y 轴代表了调用栈（call stack）。在栈里，上面的 event 调用了下面的 event。
![](https://pic4.zhimg.com/80/v2-a010d11aa34123e41e9a6a26ea5d7b8b_1440w.jpg)

::: tip 提示
在事件长条的右上角出，如果出现了红色小三角，说明这个事件是存在问题的，需要特别注意
:::
![](https://pic2.zhimg.com/80/v2-ca44395a2fe6751356b3dc97a997b689_1440w.jpg)

## 三、总结图表

![](https://pic1.zhimg.com/80/v2-2fb06d74a5d8e54e0a947d616d3f68f8_1440w.jpg)

- 蓝色(Loading)：网络通信和 HTML 解析
- 黄色(Scripting)：JavaScript 执行
- 紫色(Rendering)：样式计算和布局，即重排
- 绿色(Painting)：重绘
- 灰色(other)：其它事件花费的时间
- 白色(Idle)：空闲时间

### 3.1、Loading

| 事件             | 描述                                                                   |
| ---------------- | ---------------------------------------------------------------------- |
| Parse HTML       | 浏览器执行 HTML 解析                                                   |
| Finish Loading   | 网络请求完毕事件                                                       |
| Receive Data     | 请求的响应数据到达事件，如果响应数据很大（拆包），可能会多次触发该事件 |
| Receive Response | 响应头报文到达时触发                                                   |
| Send Request     | 发送网络请求时触发                                                     |

### 3.2 Scripting

| 事件                    | 描述                                                  |
| ----------------------- | ----------------------------------------------------- |
| Animation Frame Fired   | 一个定义好的动画帧发生并开始回调处理时触发            |
| Cancel Animation Frame  | 取消一个动画帧时触发                                  |
| GC Event                | 垃圾回收时触发                                        |
| DOMContentLoaded        | 当页面中的 DOM 内容加载并解析完毕时触发               |
| Evaluate Script         | A script was evaluated.                               |
| Event                   | js 事件                                               |
| Function Call           | 只有当浏览器进入到 js 引擎中时触发                    |
| Install Timer           | 创建计时器（调用 setTimeout()和 setInterval()）时触发 |
| Request Animation Frame | A requestAnimationFrame() call scheduled a new frame  |
| Remove Timer            | 当清除一个计时器时触发                                |
| Time                    | 调用 console.time()触发                               |
| Time End                | 调用 console.timeEnd()触发                            |
| Timer Fired             | 定时器激活回调后触发                                  |
| XHR Ready State Change  | 当一个异步请求为就绪状态后触发                        |
| XHR Load                | 当一个异步请求完成加载后触发                          |

### 3.3、 Rendering

| 事件                  | 描述                                       |
| --------------------- | ------------------------------------------ |
| Animation Frame Fired | 一个定义好的动画帧发生并开始回调处理时触发 |
| Invalidate layout     | 当 DOM 更改导致页面布局失效时触发          |
| Layout                | 页面布局计算执行时触发                     |
| Recalculate style     |                                            | Chrome 重新计算元素样式时触发 |
| Scroll                | 内嵌的视窗滚动时触发                       |

### 3.4、Painting

| 事件             | 描述                                  |
| ---------------- | ------------------------------------- |
| Composite Layers | Chrome 的渲染引擎完成图片层合并时触发 |
| Image Decode     | 一个图片资源完成解码后触发            |
| Image Resize     | 一个图片被修改尺寸后触发              |
| Paint            | 合并后的层被绘制到对应显示区域后触发  |

[官方参考](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)
