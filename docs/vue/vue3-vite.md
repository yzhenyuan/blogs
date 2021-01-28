# Vite 和 Vue3 的使用

## Vite 特点

一个基于浏览器原生 ES imports 的开发服务器。利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念。对 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢。针对生产环境则可以把同一份代码用 rollup 打包

1. 类似于 `webpack-dev-server`
2. 基于 `ES imports`
3. 热更新使用 `WebSocket` 实现服务端使用 `Koa`
4. 按需编译，开发模式下不需要打包，只需要编译浏览器发出的 HTTP 请求对应的文件即可，所以热更新速度很快。
5. 打包使用 rollup

### 👉 基于 `ES imports`

开发模式下 拦截浏览器发出的 `ES imports` 请求并做相应处理，拦截后使用 `es-module-lexer`，来进行的语法分析获取 imports 数组，然后再做的替换

当声明一个 script 标签类型为 module 时，浏览器将对其内部的 import 引用发起 HTTP 请求获取模块内容

```js
<script type="module">
    import {a} from './a.js'
</script>
```

### 👉 热更新

要实现热更新，那么就需要浏览器和服务器建立某种通信机制，这样浏览器才能收到通知进行热更新。

#### 客户端

Vite 的是通过 `WebSocket` 来实现的热更新通信，代码在 `client` 文件里

- connected: 连接成功
- vue-reload: 修改了 `script`，组件重新加载
- vue-rerender: 修改了`template` ,组件重新加载
- style-update: 样式更新
- style-remove: 样式移除
- js-update: js 文件更新
- full-reload: fallback 机制，网页重刷新

#### 服务端

主要接卸vue文件然后解析，可以直接 运行 vue 文件，把原本一个 .vue 的文件拆成了三个请求（分别对应 script、style 和 template） ，浏览器会先收到包含 script 逻辑的 App.vue 的响应，然后解析到 template 和 style 的路径后，会再次发起 HTTP 请求来请求对应的资源，此时 Vite 对其拦截并再次处理后返回相应的内容

## ⑤ 问题

1. 压缩使用 terser，可以选择 esbuild(之前 Chrome80 以下有点问题)
2. 类型别名 键必须以斜线开始和结束
3. 环境变量暂时没有注入到项目中，使用 node 写入文件里
