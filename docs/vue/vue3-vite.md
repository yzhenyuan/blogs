# Vite + Vue3 的使用

## 一、Vite 特点

一个基于浏览器原生 ES Import 的开发服务器。利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念。对 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢。针对生产环境则可以把同一份代码用 rollup 打包

1. 类似于 `webpack-dev-server`,冷启动速度
2. 基于 `ES Import`
3. 热更新使用 `WebSocket` ，服务端使用 Koa 构建
4. 按需编译，开发模式下不需要打包，只需要编译浏览器发出的 HTTP 请求对应的文件即可，所以热更新速度很快
5. 打包使用 rollup

### 1.1 基于 `ES Import`

开发模式下 拦截浏览器发出的 `ES Import` 请求并做相应处理，拦截后使用 `es-module-lexer`，来进行的语法分析获取 imports 数组，然后再做的替换

当声明一个 script 标签类型为 module 时，浏览器将对其内部的 import 引用发起 HTTP 请求获取模块内容

```js
<script type="module">import {a} from './a.js'</script>
```

### 1.2 热更新

要实现热更新，那么就需要浏览器和服务器建立某种通信机制，这样浏览器才能收到通知进行热更新

#### 1.2.1 客户端

Vite 的是通过 `WebSocket` 来实现的热更新通信，代码在 node_modules 的`src/client.ts` 文件里

- vue-reload: 修改了 `script`，组件重新加载
- vue-rerender: 修改了`template` ,组件重新加载
- style-update: 样式更新
- style-remove: 样式移除
- js-update: js 文件更新
- full-reload: fallback 机制，网页重刷新

#### 1.2.2 服务端

主要接卸 vue 文件然后解析，可以直接 运行 vue 文件，把原本一个 .vue 的文件拆成了三个请求（分别对应 script、style 和 template） ，浏览器会先收到包含 script 逻辑的 App.vue 的响应，然后解析到 template 和 style 的路径后，会再次发起 HTTP 请求来请求对应的资源，此时 Vite 对其拦截并再次处理后返回相应的内容

vue-loader 比较类似，借助 module script 处理文件依赖，然后通过拼接不同的 query.type 处理单页面文件解析后的各个资源文件，最后响应给浏览器进行渲染

##### hmrPlugin

当文件发生变化时，服务端在 handleVueSFCReload 方法中会根据变化的类型推送不同的消息，当客户端接收到对应消息时，会结合 vue.HMRRuntime 进行处理或者重新加载新的资源

##### servePlugin

用于实现一些 koa 请求和响应的配置

- 对于普通文件，直接查找服务器静态资源， 通过 servePlugin 中配置 koa-static 实现
- 对于 vue 文件，会重新拼接 http 请求，对于每个请求，包括 path 和 query，其中 path 用于确定组件文件，query.type 用于确定具体使用啥方法来返回响应内容

## 二、在 vue3 开发中的问题

1. 压缩使用 terser，可以选择 esbuild(之前 Chrome80 以下有点问题)
2. 类型别名 键必须以斜线开始和结束
3. 环境变量暂时没有注入到项目中，使用 node 写入文件里

## 三、和 webpack 的区别

1. 本身没有打包功能
2. 利用`ES Import`按需编译，项目随起随用
3. 不需要安装太多依赖
