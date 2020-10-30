V8 是由 Google 开发的开源 JavaScript 引擎，也被称为虚拟机，模拟实际计算机各种功能来实现代码的编译和执行。
# JavaScript 引擎
[理解 V8 的字节码](https://zhuanlan.zhihu.com/p/28590489)
## 为什么需要 JavaScript 引擎
我们写的 JavaScript 代码直接交给浏览器或者 Node 执行时，底层的 CPU 是不认识的，也没法执行。CPU 只认识自己的指令集，指令集对应的是汇编代码。写汇编代码是一件很痛苦的事情。并且不同类型的 CPU 的指令集是不一样的，那就意味着需要给每一种 CPU 重写汇编代码。

JavaScirpt 引擎可以将 JS 代码编译为不同 CPU(Intel, ARM 以及 MIPS 等)对应的汇编代码，这样我们就不需要去翻阅每个 CPU 的指令集手册来编写汇编代码了。当然，JavaScript 引擎的工作也不只是编译代码，它还要负责执行代码、分配内存以及垃圾回收。

#### 热门 JavaScript 引擎


+ V8 (Google)，用 C++编写，开放源代码，由 Google 丹麦开发，是 Google Chrome 的一部分，也用于 Node.js。
+ JavaScriptCore (Apple)，开放源代码，用于 webkit 型浏览器，如 Safari ，2008 年实现了编译器和字节码解释器，升级为了 SquirrelFish。苹果内部代号为“Nitro”的 JavaScript 引擎也是基于 JavaScriptCore 引擎的。
+ Rhino，由 Mozilla 基金会管理，开放源代码，完全以 Java 编写，用于 HTMLUnit
+ SpiderMonkey (Mozilla)，第一款 JavaScript 引擎，早期用于 Netscape Navigator，现时用于 Mozilla Firefox。
+ Chakra (JScript 引擎)，用于 Internet Explorer。
+ Chakra (JavaScript 引擎)，用于 Microsoft Edge。
+ KJS，KDE 的 ECMAScript／JavaScript 引擎，最初由哈里·波顿开发，用于 KDE 项目的 Konqueror 网页浏览器中。
+ JerryScript — 三星推出的适用于嵌入式设备的小型 JavaScript 引擎。
+ 其他：Nashorn、QuickJS 、 Hermes

## V8

Google V8 引擎是用 C ++编写的开源高性能 JavaScript 和 WebAssembly 引擎，它已被用于 Chrome 和 Node.js 等。可以运行在 Windows 7+，macOS 10.12+和使用 x64，IA-32，ARM 或 MIPS 处理器的 Linux 系统上。V8 最早被开发用以嵌入到 Google 的开源浏览器 Chrome 中，第一个版本随着第一版Chrome于 2008 年 9 月 2 日发布。但是 V8 是一个可以独立运行的模块，完全可以嵌入到任何 C ++应用程序中。著名的 Node.js( 一个异步的服务器框架，可以在服务端使用 JavaScript 写出高效的网络服务器 ) 就是基于 V8 引擎的，Couchbase, MongoDB 也使用了 V8 引擎。
 
和其他 JavaScript 引擎一样，V8 会编译 / 执行 JavaScript 代码，管理内存，负责垃圾回收，与宿主语言的交互等。通过暴露宿主对象 ( 变量，函数等 ) 到 JavaScript，JavaScript 可以访问宿主环境中的对象，并在脚本中完成对宿主对象的操作。