# loader & plugin

## loader

<!-- loader 是文件加载器，能够加载资源文件，并对文件进行一些处理，例如：编译、压缩等
最终一起打包到指定文件中
处理一个文件可以使用多个loader，loader的执行顺序跟配置的顺序是相反的

最后一个loader最先执行，第一个loader最后执行



编写自己的loader需要引入官方的loader-utils，调用loaderUtils.getOptions(this)拿到webpack的配置参数，然后进行自己的处理 -->

**作用**：loader 是文件加载器，用来对加载的文件进行处理，如：编译、压缩等

**执行顺序**：loader 的执行顺序跟配置顺序是相反的，最后一个先执行

> 第一个执行的 loader 接收源文件内容作为参数，其他的 loader 接收前一个执行的 loader 的返回值作为参数，最后执行的 loader 会返回此模块的 js 源码

**原理**：一般 loader 就只有一个职能，如果需要多步转换，就需要使用多个 loader，使用多个 loader 的时候，每个 loader 都会链式的执行顺序，第一个拿源文件去处理，第二个拿第一个处理后的接着处理，最终的 loader 将结果返回给 webpack

**loader 开发**：引入官方的 loader-utils，调用 loaderUtils.getOptions(this)拿到 webpack 的配置参数，然后进行自己的处理

## plugin

plugin 功能更加强大，从打包优化和压缩，到重新定义环境变量等，loader 不能做的都是它做

plugin 让 webpack 的机制更加灵活，它在编译过程中留下的一系列生命周期的钩子，通过这些钩子来实现在不同编译结果时对源模块进行处理

他的编译是基于事件流来编译的，通过`tapable`这个核心库来实现插件的绑定和执行的

> tapable 主要基于发布订阅的插件架构，用来创建声明周期钩子的库

1. 调用 complier.hooks.run.tap 开始注册
2. 创建 compilation ，基于配置创建 chunks
3. 在通过 parser 解析 chunks
4. 使用模块和依赖管理模块之间的依赖关系
5. 最后使用 template 基于 compilation 数据生成结果代码

```js
class BasicPlugin {
  // 在构造函数中获取用户给该插件传入的配置
  constructor(options) {}

  // Webpack 会调用 BasicPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply(compiler) {
    compiler.plugin("compilation", function(compilation) {});
  }
}

// 导出 Plugin
module.exports = BasicPlugin;
```

## loader 和 plugin 的区别

### 功能上

#### loader

1. loader 从字面的意思理解，是 加载 的意思
2. loader 虽然是扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域
3. loader 是运行在 NodeJS 中

#### plugin

1. plugin 也是为了扩展 webpack 的功能,但是 plugin 是作用于 webpack 本身上的
2. plugin 不仅只局限在打包，资源的加载上，从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务

### 从运行时机的角度区分

1. loader 运行在打包文件之前（loader 为在模块加载时的预处理文件）
2. plugins 在整个编译周期都起作用。
