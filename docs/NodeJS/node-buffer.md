# Stream 和 Buffer
## 概念
流是有方向性的，当程序从某个数据源读入数据，会开启一个输入流（例如，读取**.html文件）;

当程序把某些数据写入数据源时，会开启一个输出流；

当一些文件较大时，我们就需要Stream像管道一样，一点一点的将数据流出。

流入的水就叫stream 剩下的水就叫 buffer （数据流的缓冲区）

## Buffer的垃圾回收机制
1. buffer 需要处理大量的二进制数据，假如用一次内存就去向系统申请一次，这样就会造成向系统申请内存 频繁调用，所以**buffer 的内存不是由v8来分配的，而是有c++底层完成申请，在js中进行分配**，这部分内存叫**堆外内存**（不受新生态、老生态的管理）。
2. nodejs 采用了 `slab` 机制进行预先申请、事后分配，是一种动态管理机制。使用`Buffer.alloc(size)`传入一个指定的`size`就会 申请一块固定的内存，边用边去拿。
3. nodejs 以 8kb为界限来区分小对象还是大对象


## 查看node性能
```js
// 使用 memeye 工具
// npm i memeye --save
const memeye = require('memeye')
memeye()
```