# 事件循环

## 一、宏任务和微任务

🌶 为什么要区分微任务和宏任务？？➡️ 为了将异步队列划分优先级，

🍆 宏任务**由事件触发线程维护**，微任务**由 js 引擎线程维护**

### 1.1 微任务

- promise
- mutationObserver
- process.nextTick(nodejs)

### 1.2 宏任务

- 主代码块
- setTimeout
- setInterval
- IO
- UI 渲染
- setImmediate(nodejs)

### 1.3 事件循环

js 是单线程的，单线程是指 js 引擎中 解析和执行代码只有一个主线程，每次只能做一件事

js 任务 分为 同步和异步，同步任务在 主线程 上依次执行，异步任务放到任务队列中，多个任务就在任务队列中排队等候，类似于缓冲区，任务下一步会被移动到调用栈，然后主线程执行调用栈的任务

> **调用栈**：调用栈是一个栈结构，函数调用会形成栈帧，帧中包含了参数和变量等函数的上下文信息，函数执行完后，从栈中弹出

检查调用栈是否为空，以及将某个任务添加到调用栈的过程就是 event loop

## 二、 浏览器中的 event loop
浏览器中event loop有两种 macro 和micro

### requestAnimationFrame
requestAnimationFrame也属于异步执行的方法，**在GUI渲染之前，micro之后执行**

主要作用：传入一个回调，这个 回调函数 在浏览器下一次重绘之前执行


## 三、 node 的 event loop
node IO处理使用了libuv （libuv是一个基于事件驱动的抽象层，封装了不同操作系统的一些底层特性，对外提供统一的API），里面包含了事件循环机制

### 3.1 node运行机制
1. V8解析js脚本
2. 解析后的代码，调用node API
3. libuv 负责node API的执行
   1. 它将不同的任务分配给不同的线程，形成事件循环
   2. 以异步的方式将任务的执行结果返回给V8引擎 
4. V8引擎将结果返回给用户

### 3.2 六大阶段
libuv将事件循环分成6个阶段，他们按照顺序反复运行

每当进入某个阶段时，都会从对应的**回调队列**中取出函数去执行

当队列为空时就会进入下一个阶段

1. **timers**:由 poll 控制，执行 setTimeout、setInterval的回调
2. **IO callbacks**：处理上一轮未执行的 IO callback
3. idle,prepare：node内部调用
4. poll：获取新的IO事件，适当情况下会堵塞在这
5. **check**：执行 setImmediate的回调
6. **close callbacks**：执行socket的close回调

🐔 ①②⑤⑥都属于宏任务，在浏览器中宏任务可能只有一个，但在 node中，不同的macro会放置在不同的宏队列中

🐟 微任务队列有两个 :
- nextTick Queue：主要放process.nextTick回调
- other Micro Queue：放其他micro task,比如：promise

同样不同的微任务放在不同的微队列中
