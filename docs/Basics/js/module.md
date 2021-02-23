# 模块化

> 模块化是一种思想, 是将大工程拆成小的模块分治的思想.

历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。

其他语言都有这项功能，比如 Ruby 的 require、Python 的 import，甚至就连 CSS 都有@import，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。

## 一、模块化的发展阶段

### 1.1 语法层面的约定封装

大多利用 JavaScript 的语言特性和浏览器特性，使用 Script 标签、目录文件的组织、闭包、IIFE、对象模拟命名空间等方法。

### 1.2 规范的制定和预编译

这一阶段的发展，开始了对模块化规范的制定。

以 CommonJS 社区为触发点，发展出不同了规范如 CommonJS、AMD、CMD、UMD 等和不同的模块加载库如 RequireJS、Sea.js、Browserify 等

解决了浏览器端 JavaScript 依赖管理、执行顺序等在之前一个阶段未被解决的许多问题被有了一定程度的解决，随着 browserify 和 webpack 工具的出现，让写法上也可以完全和服务端 Node.js 的模块写法一样，**通过 AST 转为在浏览器端可运行的代码，虽然多了一层预编译的过程**，但对开发来说是很友好的，预编译的过程完全可以由工具自动化。

### 1.3 原生语言层面模块化的支持

ES Modules

## 二、目前流行的 js 模块化规范

目前流行的 js 模块化规范有 AMD、CMD、CommonJS、UMD 以及 ES6 Module

## 2.1 AMD
异步加载模块，它是一个在浏览器端模块化开发的规范，使用AMD规范就需要对应的库 `require.js`

```js
// 定义模块
define('moduleName', ['a', 'b'], function(ma, mb){
    return someValue
})
// 引入模块
require(['a', 'b'], function(ma, mb){
    /** code **/
})
```

🍎 特点：
+ 异步加载模块，模块加载不影响后面语句的执行
+ 所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完后回调函数才会执行
+ **依赖前置、提前执行**，在定义模块的时候就要声明其依赖的模块


## 2.2 CMD
使用对应的库`SeaJS`

与AMD类似，不同点在于推崇就近延迟执行，只有在用到某个模块的时候再去require

🌶 AMD和CMD最大的区别 是**对依赖模块的执行时机处理不同**

```js
define(function(require, exports, module) {
  var $ = require('jquery.js')
  $('div').addClass('active');
});

// 加载模块
seajs.use(['myModule.js'], function(my){});
```
## 2.3 UMD
UMD整合了CommonJS和AMD，希望能够解决跨平台的模块方案

🍎 运行原理：
1. 先判断是否支持Nodejs的模块（exports）是否存在，存在就使用CommonJS
2. 否则判断是否支持AMD（define）是否存在，存在则使用AMD


## 2.4 CommonJS
node使用的是commonjs

🍎 特点：
1. 同步加载
2. 一个文件就是一个模块，拥有单独的作用域
3. 在服务端模块文件都存在本地磁盘，读取非常快，但在客户端限于网络问题，适合异步加载


🍆 注意：
1. exports和module.exports同时存在时，后者覆盖前一个
2. 模块内部全是exports时，等同于 module.exports
3. exports是module.exports的子集
4. 模块加载顺序是同步的
5. 模块可以多次加载，但只会在第一次加载时运行，后面的都被缓存了，是直接取结果

## 2.5 ES6 Module

跟CommonJS的区别：
1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
3. CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

