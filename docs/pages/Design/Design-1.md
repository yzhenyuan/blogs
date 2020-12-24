# 单例模式

## 一、什么是单例模式?
单例模式(Singleton Pattern)的思想在于保证一个特定类仅有一个实例，**即不管使用这个类创建多少个新对象，都会得到与第一次创建的对象完全相同**。

单例模式有以下优点：

+ 用来划分命名空间，减少全局变量数量。
+ 使代码组织的更一致，提高代码阅读性和维护性。
+ 只能被实例化一次。


在JavaScript中没有类，只有对象。当我们创建一个**新对象**，它都是个新的单体，因为JavaScript中永远不会有完全相等的对象，除非它们是同一个对象。
因此，我们每次使用对象字面量创建对象的时候，实际上就是在创建一个单例。
```js
// 创建了两个新对象
let a = { name : 'leo' };
let b = { name : 'leo' };

a === b; // false
a  == b; // false
```

### 1.1 看一个最简单的单例模式👇
```js
let timeTool = {
  name: '处理时间工具库',
  getISODate: function() {},
  getUTCDate: function() {}
}
// 以对象字面量创建对象的方式在JS开发中很常见。
```
👆上面的对象是一个处理时间的工具库, 以对象字面量的方式来封装了一些方法处理时间格式。全局只暴露了一个`timeTool对象`, 在需要使用时, 只需要采用`timeTool.getISODate()`调用即可。`timeTool对象`就是单例模式的体现。在JavaScript创建对象的方式十分灵活, 可以直接通过对象字面量的方式实例化一个对象, 而其他面向对象的语言必须使用类进行实例化。所以，这里的`timeTool`就已经是一个实例， 且ES6中`let 和 const`不允许重复声明的特性，确保了`timeTool`不能被重新覆盖。




### 1.2 惰性单例

采用对象字面量创建单例只能适用于简单的应用场景，一旦该对象十分复杂，那么创建对象本身就需要一定的耗时，且该对象可能需要有一些私有变量和私有方法。

此时使用对象字面创建单例就不再行得通了，我们还是需要采用构造函数的方式实例化对象。下面就是使用立即执行函数和构造函数的方式改造上面的timeTool工具库。

```js
let timeTool = (function() {
  let _instance = null;
  
  function init() {
    //私有变量
    let now = new Date();
    //公用属性和方法
    this.name = '处理时间工具库',
    this.getISODate = function() {
      return now.toISOString();
    }
    this.getUTCDate = function() {
      return now.toUTCString();
    }
  }
  
  return function() {
    if(!_instance) {
      _instance = new init();
    }
    return _instance;
  }
})()
```
上面的timeTool实际上是一个函数，`_instance`作为实例对象最开始赋值为null，init函数是其构造函数，用于实例化对象，立即执行函数返回的是匿名函数用于判断实例是否创建，只有当调用`timeTool()`时进行实例的实例化，这就是**惰性单例**的应用，**不在js加载时就进行实例化创建， 而是在需要的时候再进行单例的创建。 如果再次调用， 那么返回的永远是第一次实例化后的实例对象**。
```js
let instance1 = timeTool();
let instance2 = timeTool();
console.log(instance1 === instance2); //true
```

## 二、应用场景

### 2.1 命名空间
一个项目常常不只一个程序员进行开发和维护, 然后一个程序员很难去弄清楚另一个程序员暴露在的项目中的全局变量和方法。

如果将变量和方法都暴露在全局中, 变量冲突是在所难免的。就想下面的故事一样：
```js
//开发者A写了一大段js代码
function addNumber () {}

//开发者B开始写js代码
var addNumber = '';

//A重新维护该js代码
addNumber(); //Uncaught TypeError: addNumber is not a function
```
**命名空间就是用来解决全局变量冲突的问题**，我们完全可以只暴露一个对象名，将变量作为该对象的属性，将方法作为该对象的方法，这样就能大大减少全局变量的个数。
```js
//开发者A写了一大段js代码
let devA = {
  addNumber() { }
}

//开发者B开始写js代码
let devB = {
  add: ''
}

//A重新维护该js代码
devA.addNumber();
```
👆上面代码中，devA和devB就是两个命名空间，采用命名空间可以有效减少全局变量的数量，以此解决变量冲突的发生。
### 2.2 管理模块
上面说到的timeTool对象是一个只用来处理时间的工具库，但是实际开发过程中的库可能会有多种多样的功能，例如处理ajax请求,操作dom或者处理事件。

这个时候单例模式还可以用来管理代码库中的各个模块，例如下面的代码所示：
```js
var devA = (function(){
  //ajax模块
  var ajax = {
    get: function(api, obj) {console.log('ajax get调用')},
    post: function(api, obj) {}
  }

  //dom模块
  var dom = {
    get: function() {},
    create: function() {}
  }
  
  //event模块
  var event = {
    add: function() {},
    remove: function() {}
  }

  return {
    ajax: ajax,
    dom: dom,
    event: event
  }
})()
```
上面的代码库中有ajax,dom和event三个模块，用同一个命名空间devA来管理。在进行相应操作的时候，只需要devA.ajax.get()进行调用即可。这样可以让库的功能更加清晰。


## 三、 ES6中的单例模式

### 3.1 ES6创建对象
ES6中创建对象时引入了class和constructor用来创建对象。
```js
class Singleton {
  constructor(name) {
    this.name = name;
  }
}

let apple = new Singleton('苹果公司');
```
### 3.2 ES6中创建单例模式
apple 应该是一个单例, 现在我们使用ES6的语法将`constructor`改写为单例模式的构造器。
```js
class Singleton {
  constructor(name) {
    //首次使用构造器实例
    if (!Singleton.instance) {
      this.name = name;
      //将 this 挂载到 Singleton 这个类的instance属性上
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}
let apple = new Singleton('苹果公司');
let Alibaba = new Singleton('阿里巴巴');

console.log(apple === Alibaba);  //true
```
### 3.3 ES6的静态方法优化代码
#### ES6的静态方法
类相当于实例的原型， 所有在类中定义的方法， 都会被实例继承。 如果在一个方法前， 加上 `static` 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为 **静态方法**。

```js
class MyClass {
  constructor() {}
  set(key, value) {}
  get(key) {}
  static say(words) {
    alert(words)
  }
}

MyClass.say()
```
上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用`（Foo.classMethod()）`，而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。
#### 单例模式的优化
静态方法将不在实例化对象的方法中，因此里面不能有this，使用的时候必须直接`MyClass.say()`，实例化对象不拥有这个方法。**静态方法将被共享，因此所用内存减少**。

```js
class MyClass {
  constructor(name) {
      this.name = name
  }
  static getInstance(name) {
    if(!this.instance) {
      this.instance = new MyClass(name);
    }
    return this.instance;
  }
}

let apple = MyClass.getInstance('苹果公司')
let Alibaba = MyClass.getInstance('阿里巴巴')

console.log(apple === Alibaba);  //true
```
