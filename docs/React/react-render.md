# React执行流程

整个React 16的执行的流转，主要可以从两个阶段来解读：
+ 第一个是首次我们调用ReactDOM.render方法的时候是怎么个过程，
+ 还有一个就是当我们调用setState方法，更改Props的时候，也就是组件更新的时候又是怎么个过程？

## 一、 首次
指的是ReactDOM.render方法来创建我们React应用的时候，通常一个React应用只会调用一次，第一次调用会发生什么呢？

### 1.1 创建一个React Root
有以下比较重要的参数
```js
{
  // 具体实现的渲染方法
  render(children: ReactNodeList, callback: ?() => mixed): Work,
  // unmount组件的方法
  unmount(callback: ?() => mixed): Work,
  createBatch(): Batch,
    
  // 下一步中创建的Fiber Root
  _internalRoot: FiberRoot,
}
```
### 1.2 创建 **Fiber Root**
它引用着真正的整个应用的fiber树根节点

在构建Fiber Root的过程中，构建Fiber Root引用的第一个fiber实例，这个fiber的tag是HostRoot -- 表示是fiber树的根节点，模式是非异步。并初始化对应的Fiber Root的参数

新建的Fiber Root会成为`React Root中_internalRoot`参数的引用。

### 1.3 如果传入了我们自己的Callback回调函数，那么React会构建一个新的callback函数，里面先获取上述Root的实例作为参数传入我们的回调函数。

### 1.4 调用`Scheduler的unbatchedUpdate`方法
方法的入参是具体的Root的render方法，也就是上述的Render方法。这个`unbatchedUpdate`其实就是运行的了我们传入的render方法。unbatched的隐含意思就是整个渲染过程是同步完成的，也就是要尽快完成。这个render方法到底干了些什么呢？

### 1.5 执行render方法

1. 获取ReactRoot中引用的FiberRoot，并取出根fiber
2. 计算当前时间currentTime：在js被加载的时候，用now()会初始化一个原始的开始时间originalStartTimeMs，然后now() - originalStartTimeMs就表示当前时间。
3. 传入fiber和currentTime。计算fiber的过期时间（优先级），这个过期时间最后的结果应该是Sync=1 也就是同步，首次渲染必然是这个结果。
4. 创建一个更新，过期时间是Sync=1同步，更新的Payload就是我们需要渲染的React元素，更新完成的回调就是包装了我们传入render函数的回调函数的回调函数。把创建的更新放入根fiber的更新队列。
5. 把根fiber提交给Scheduler去开始工作。
6. 至此准备工作已经做完，这就好像是给了一个加速度，下面就会自动不断的运行


## 当我们在一个组件里面调用 setState 方法的时候，觉得到底发生了什么