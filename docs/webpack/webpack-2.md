# webpack 优化

## 一、 代码压缩

- webpack-parallel-uglify-plugin
- uglifyjs-webpack-plugin 开启 parallel 参数（不支持 es6）
- terser-webpack-plugin 开启 parallel 参数，多进程压缩
- mini-css-extract-plugin 提取 chunk 中的 css 到单独文件
- css-assets-webpack-plugin 开启 cssnano

## 二、 提取公共资源

- 使用 html-webpack-externals-plugin 将基础包通过 cdn 引入，不打入 bundle 中
- 使用 splitChunksPlugin 进行（公共脚本、基础包、页面公共文件）分离（webpack 内置）

## 三、 tree shaking

- purgecss-webapck-plugin 和 mini-css-extract-plugin 配合使用
- 使用 es6 Module
- 禁用 babel-loader 的模块依赖解析（否则 webpack 接收的就是 commonjs 形式的模块）

## 四、 scope hoisting

构建后的代码存在大量 闭包 ，造成体积正大，运行代码时创建的函数作用域变多，内存开销变大

scope hoisting 将所有模块的代码 按照引用顺序放到后一个函数作用域里，然后适当的重命名一些变量防止变量名冲突

- 必须是 es6 语法
- 需要配置 mainFilds 对第三方模块采用 jsnext:main 中指向 es6 的语法

## 五、 quicklink

main.bundle.js 里面还有一些库（node-module，例如 html-entities）需要提出来（默认打包 80kb，提取出来之后 30kb，白屏的几率就很小了），放到 common.js 两里面

### 下一页的优化，quicklink 做预加载

prefetch
`<link rel='dns-prefetch' href='http://g-ecx.images-amazon.com'>`

```js
window.addEventListener("load", () => {
  quicklink.listen();
});
```

原理:

1. 监听视窗
2. 滚动到 a 标签的时候，调用了 requestIdleCallback(react 一直在模仿的 api)
3. 判断用户的网络的类型，如果弱网就不干这事了，强网就会用
4. prefetch
