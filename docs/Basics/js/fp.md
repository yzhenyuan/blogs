# 函数式编程 ①

"函数式编程"是一种"编程范式"（programming paradigm），也就是如何编写程序的方法论。

## 一、函数式编程的概念

🍺 主要思想是把运算过程尽量写成一系列嵌套的函数调用，用数学的方式编程

> 随着 react 高阶函数（HOC）而火热（**_高阶组件简单来说就是一个组件传给另一个组件，然后返回一个新的组件_**）
> 例如：最常用的就是`map`和`reduce`

1. **函数是"第一等公民"**：函数与其他数据类型一样，可以赋值给其他变量，也可以作为参数
2. **不修改状态**：这里的变量在函数式编程中被函数代替了，仅仅代表某个表达式，这里的变量是不能被修改的，需要什么就 return 出去
3. **只用"表达式"，不用"语句"**：函数式编程要求，只使用表达式，不使用语句。也就是说，每一步都是单纯的运算，而且都有返回值。
4. **没有"副作用"**：所谓"副作用"（side effect），指的是函数内部与外部互动（最典型的情况，就是修改全局变量的值），产生运算以外的其他结果。
5. **引用透明**：指的是函数的运行不依赖于外部变量或"状态"，相同输入总是相同输出

## 二、纯函数

相同的输入，永远得到相同的输出，而且没有任何可观测的副作用，也不依赖外部环境

```js
// Array.slice()就是纯函数

let arr = [1, 2, 3, 4, 5];
arr.slice(0, 3); //[1, 2, 3]
arr.slice(0, 3); //[1, 2, 3]
arr.slice(0, 3); //[1, 2, 3]
// 每次都会得到这个结果
```

### 2.1 优缺点

具有可缓存性

```js
import _ from 'lodash'
cont sin = _.memorize(x => Math.sin(x))

// 📚 第一次会稍慢一点
sin(1)
// 📚 第二次有了缓存就会很快
sin(1)
```s

```js
// 不纯的
let min = 10;
let checkAge = (age) => age > min;
// 📚 checkAge 不仅取决于 age 还有外部依赖的变量 min

// 纯的 函数式

let checkAge = (age) => age > 10;
// 📚 纯的 checkAge 把数字 10 写在函数内部，扩展性比较差，柯里化优雅的函数式解决
```

## 三、偏应用函数（partial application）

- 传递给函数 一部分参数 来调用它，让他 返回一个函数去处理 剩下的参数，例如：`bind`
- 偏函数之所以 偏 ，就在于他只能 处理那些能与至少一个 case 语句匹配的输入，而不能处理所有可能的输入

### 3.1. 函数的柯里化

🎆 柯里化主要为了改变纯函数的硬编码方式

1. 柯里化是偏应用函数的一种，他把一个 多参的函数 转换成一个 嵌套一元函数的的过程
2. 传递给函数一部分参数来调用它，让他返回一个函数去处理剩下的参数

```js
// 📚 柯里化改造，先穿进去一个参数，再返回一个函数，再传剩余的参数
let checkAge = (min) => (age) => age > min;
let checkAge18 = checkAge(18);
checkAge18(20);
```

### 3.2 反柯里化

**柯里化**是接受少的参数，去处理剩下的参数，而**反柯里化**是尽可能实现更多的参数

区别就在于多参少参

函数柯里化

```js
// 柯里化之前
function add(x, y) {
  return x + y;
}
add(1, 2);

// 柯里化之后
function add(y) {
  return function(x) {
    return x + y;
  };
}
add(1)(2);
```

### 3.3 柯里化和偏应用的区别

柯里化是一种 预加载 函数的方法，通过较少的参数，得到一个已经记住了这些参数的新函数，某种意义上是对参数的缓存

1. 柯里化的参数列表是从左到右的
2. 如果不能满足正常的从左到右就得使用偏应用函数了，需要额外的封装

## 四、函数组合

为了给函数解耦

纯函数以及柯里化写出来的代码`h(g(s(x)))`，不容易维护，为了解决这种函数嵌套的问题，就需要用到 **函数组合**

函数组合的数据流是 从右到左，因为右边的函数 首先执行，将数据传递给下一个函数以此类推

```js
// 让多个函数像拼接木一样
const compose = (f, g) => (x) => f(g(x));

const first = (arr) => arr[0];

const reverse = (arr) => arr.reverse();

const last = compose(first, reverse);

last([1, 2, 3, 4, 5]);
```

函数组合代码

```js
compose(f, compose(g, h));
compose(compose(f, g), h);
compose(f, g, h);
```

## 五、函数组合子

- 之前的函数组合、函数柯里化都 分属于 函数组合子

- 函数组合的数据流是 从右到左，因为右边的函数 首先执行，将数据传递给下一个函数以此类推，如果不想要从右到左的，那我们可以实现一个 pipe（称作 管道、序列）来实现

组合子可以组合其他函数，作为控制逻辑单元的高阶函数，**组合子通常不声明任何变量，也不包含任何业务逻辑**，旨在管理函数呈现执行流程，并在链式调用中对中间结构进行操作

// 分属于 ski 组合子

## 六、Point Free

把一些对象自带的方法转化成纯函数，不要命名中间变量

函数无须提及将要操作的数据是什么样的

```js
这个函数中使用了 str 作为中间变量，但是这个变量除了代码长一点毫无其他意义
const f = str =>str.toUpperCase().split('')

// 🏡 然后， 可以转换成下面👇这样

const toUpperCase = word => str.toUpperCase()
const split = x => (str.split(x))

const f = compose(split(' '), toUpperCase)
f("acds cds")
```

## 🐴 声明式与命令式代码

```js
// 命令式
let list = [];
for (let i = 0; i < data.length; i++) {
  list.push(data[i].m);
}
// 声明式
let list = data.map((i) => i.m);
```

## 🐴 类 SQL 数据：函数既数据

以函数形式对数据建模

## 🐷 惰性链、惰性求值、惰性函数

## 🐴 优点

1. **代码简洁，开发快速**：函数式编程大量使用函数，减少了代码的重复，因此程序比较短，开发速度较快
2. **接近自然语言**，易于理解
3. **更方便的代码管理**
4. **易于"并发编程"**
5. **代码的热升级**

1) 现有的 react、redux 库是使用函数式编程
2) lodash、underscore 等库原理
3) node 中 koa 的原理
4) 业务逻辑模块的封装


```js
const curry = (fn) => 
  (judge = (...args) =>
    args.length === fn.length
    ? fn(...args)
    : (...arg) => judge(...args, arg)
  )
const add = (a,b,c) => a+b+c
const curryAdd = curry(add)

curryAdd(1)(2)(3)
```