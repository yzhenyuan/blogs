# esbuild
![](https://static001.geekbang.org/wechat/images/36/36f0f7cd3e00dd92a86aa7aea0c85e8c.png)

## 快的原因
1. 它是用 Go 语言编写的，该语言可以编译为原生代码；
2. 解析，打印和源映射生成全部完全并行化；
3. 无需昂贵的数据转换，只需很少的几步即可完成所有操作；
4. 编写代码时处处注意速度表现，并尽量避免不必要的配置。

## 支持
CommonJS 模块

ES6 模块

使用’–bundle’与 ES6 模块的静态绑定打包

使用’–minify’完全压缩（空格、标识符和修饰符）

启用’–sourcemap’时，完全支持源映射

.jsx 文件的 JSX 到 JavaScript 转换

通过’–define’进行编译时标识符替换

使用 package.json 中的’browser’字段进行路径替换

自动检测 tsconfig.json 中的’baseUrl’

## terser
作为js代码压缩工具

## Webpack＆Vite原理对比
### webpack
当我们使用如webpack的打包工具时，经常会遇到遇到一小行代码，webpack常常需要耗时数秒甚至几秒钟进行重新打包。这是因为webpack需要将所有模块打包成一个一个或多个模块。

> 不可避免的，当我们修改模块中的一个子模块b.js，整个bundle.js都需要重新打包，随着项目规模的扩大，重新打包（热更新）的时间越来越长。我们常用如thread-loader，cache-loader，代码分片等方法进行优化。但通过项目规模的进一步扩大，热更新速度又将变慢，又将开始新一轮的优化。通过项目规模的不断扩大，基于bunder的项目优化也将达到一定的极限。

Webpack之所以慢，是因为Webpack会使多个资源构成一个或多个捆绑

### Vite
Vite的基本实现原理，就是启动一个koa服务器拦截浏览器请求ES模块的请求。通过路径查找目录下对应文件的文件做一定的处理最终以ES模块格式返回给客户端

Vite对js / ts的处理没有使用如gulp，rollup等传统打包工具，其他使用了esbuild

esbuild是一个全新的js打包工具，支持如babel，压缩等的功能，他的特点是快（比rollup等工具会快上几十倍）(go这样的静态语言会比动态语言快很多)