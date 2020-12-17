# 了解Koa

## 一、前言
Koa是Express之后，node的又一主流web框架，相比Express，Koa只保留了核心的中间件处理逻辑，去掉了路由、模板以及其他的一些功能是一个基于node实现的web框架

>特点是：优雅、简洁、健壮、体积小、表现力强，他的所有功能通过插件想形式来表现

## 二、Koa2原理
Koa2通过封装原生的 node http 模块
koa的 `context` 把 node 的 `request` 对象和 `response` 对象封装到单个对象中，并暴露给中间件等回调函数

最主要的是 **中间件机制洋葱模型**

流程：
1. 通过`use()`注册多个中间件放入数组中
2. 从外层开始向内执行
3. 遇到`next()`后进入下一个中间件
4. 当所有中间件执行完后，开始返回
5. 依次执行中间件中未执行的部分，整体流程就是递归处理

```js
function compose(middleware){
    return () => {
        // 先执行第一个函数
        return dispatch(0)

        function dispatch(i){
            let fn = middleware[i]
            //如果不存在直接返回 Promise
            if(!fn) return Promise.resolve()

            //step1: 返回一个promise，因此单纯变成一个promise 且立即执行
            //step2: 向当前中间件 传入一个 next 方法，当这个中间件有执行next 的时候才执行下一个中间件
            return Promise.resolve(fn(fnction next(){
                //执行下一个中间件
                return dispach(i+1)
            }))
        }
    }
}
```
核心代码是
`Promise.resolve(fn(context, dispach.bind(null, i+1)))`
，递归遍历，直到遍历完所有的中间件 next ,生成一个多层嵌套的 promise 函数

#### 分析：
> 中间件的执行 是通过递归的方式来执行，
调用 dispach 函数，从第一个开始执行，
当有 next 方法时，创建一个promise，
等到下一个中间件执行结果后，再执行next，
当第二个中间件也有 next 方法时，依然会创建一个新的 promise 等待下一个中间件的执行结果，这就是中间件next的执行原理

> `app.use()` 将中间件 push 到中间件数组中，然后在 listen 方法中通过调用 compose 方法进行集中处理

## 三、Koa的基本组成
+ `application.js`:负责管理中间件，以及处理请求
+ `context.js`:用来维护请求的的上下文环境
+ `request.js`:封装和抽象req
+ `response.js`:封装和抽象res

## 四、Koa-body原理
Koa-body中间件作用是将 post 请求的请求体携带的数据解析到ctx.request.body中。

#### 基本原理是：
1. 先用`type-is`这个包（ctx.is函数，根据请求的content-type）判断出请求的数据类型
2. 然后根据不同类型的co-body（请求体解析）和formidable（数据类型是multipart，文件上传解析）来解析
3. 拿到解析结果放到ctx.request.body或 ctx.request.files里面

## 五、Koa与Express区别

1. **集成方面**：`Express` 自身集成了路由、视图等处理功能；`Koa`本身不集成任何中间件
2. **异步流程控制**：Express使用`callback来处理异步`；Koa v1使用`generator`，v2使用`async/await`，async/await使用同步写法处理异步明显要优于其他
3. **错误处理**： `Express` 使用 callback 捕获异常，深层次的捕获不了；`Koa`使用 try/catch 能够更好的捕获异常
4. **中间件模型**：`Express`基于context中间件，线性模型；`Koa`使用洋葱模型，所有的请求在经过中间件的时候回执行两次，能够方便的执行一些后置处理逻辑
5. **context**：`Express`只有request和response两个对象；`Koa`增加了一个`context`作为这次请求的上下文对象（koa1中为中间件的this，v2中作为中间件的第一个参数传入）