# 原型模式

首先我们要知道，我们创建的每一个函数都有一个隐藏属性，也就是原型属性。这个原型属性指向一个原型对象。且所有实例和构造函数 都指向这个原型对象，共享 原型对象的所有方法和属性。
我们通过操作原型对象达到 实例共享属性方法的目的，就是原型模式。

同时，因为实例都是引用 原型对象的属性和方法，也避免了构造函数模式下所有实例都有各自的方法的弊端。

```js
function Person() {}
Person.prototype.name = "Tom";
Person.prototype.sayName = function() {
  alert(this.name);
};
// 或者
Person.prototype = {
  constructor: Person,
  name: "Tom",
  sayName: function() {
    alert(this.name);
  },
};
var person1 = new Person();
person1.sayName(); //"Tom"

var person2 = new Person();
person2.sayName(); //"Tom"

console.log(person1.sayName == persona2.sayName); //true
```

## 与构造函数相比

原型模式，把公共方法提出来放到 prototype 对象里。
每个实例 的`[[prototype]]`指针 指向这个对象，所以所有实例的公共方法 是同一个。这样也避免了内存浪费。
