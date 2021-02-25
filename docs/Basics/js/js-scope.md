# 作用域
变量的作用域无非就是两种：全局变量和局部变量。
## 什么是作用域

## 全局作用域和函数作用域

## 块级作用域

let const

## 作用域链
查找变量的时候，会从当前上下文环境记录中查找，如果没有找到，就会从上级执行上下文环境记录中查找，一直找到全局上下文的环境记录，这样多个执行上下文环境的记录构成的链表，就是作用域链
## 执行上下文

解释阶段：

- 词法分析
- 语法分析
- 作用域规则确定

执行阶段：

- 创建执行上下文
- 执行函数代码
- 垃圾回收

作用域和执行上下文之间最大的区别是：

执行上下文在运行时确定，随时可能改变；作用域在定义时就确定，并且不会改变

## 闭包
> 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。 --- 你不知道的JavaScript(上卷)


闭包就是能够读取其他函数内部变量的函数，所以，闭包就是将函数内部和函数外部连接起来的一座桥梁

用途：

1. 可以读取函数内部的变量
2. 让这些变量的值始终保持在内存中，保护变量不被污染
3. 通过闭包来模拟私有方法（私有方法只能被一个类中的其他方法所调用，但是 JavaScript 没有提供这种原生支持）
4. 避免变量污染全局


缺点：
1. 使用不当会导致内存泄漏。内部函数保存了外部变量的引用，导致无法被垃圾回收，增大了内存使用
2. 对处理速度有影响。引用外部变量经过了作用域链的长度
### 闭包原理
函数执行分为 **预编译阶段** 和 **执行阶段**

+ 在预编译阶段，如果内部函数 使用了 外部函数的变量，则会在内存中创建一个'闭包对象'并保存对应变量值
+ 执行完成之后，函数执行上下文会被销毁，函数对‘闭包对象’的引用也会被销毁，但其内部函数还持有该'闭包对象'的引用，所以内部函数可以继续使用外部函数中的变量

闭包利用了函数作用域链的特性，一个函数内部定义的函数，会将包含外部函数的活动对象添加到它的作用域链中，函数执行完毕，其执行作用域链销毁，但因内部函数的作用域链任在引用这个活动对象，所以其活动的对象不会被销毁，直到内部函数被销毁才被销毁