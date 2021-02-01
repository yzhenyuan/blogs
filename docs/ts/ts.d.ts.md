# 声明文件

在开发过程中不可避免要引用其他第三方的 JavaScript 的库，虽然通过直接引用可以调用库的类和方法，但是却无法使用 TypeScript 诸如类型检查等特性功能

声明文件就是给 js 代码补充类型标注. 这样在 ts 编译环境下就不会提示 js 文件"缺少类型".

## 声明文件 xxx.d.ts

```ts
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
declare interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块, import xx = require('xxx')
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块
```
