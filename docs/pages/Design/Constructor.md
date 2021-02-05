# 构造器模式

装饰者模式（Decorator Pattern）：在不改变原类和继承情况下，动态添加功能到对象中，通过包装一个对象实现一个新的具有原对象相同接口的新对象。

#### 装饰者模式有以下特点：

1. 构造函数 Person 有一个 prototype(原型)属性，这个属性是一个指针，指向一个对象即：Person.prototype(原型对象)；
2. 实例 person1 person2 也有一个[[prototype]]属性或者叫*proto*,这个属性 也指向 Person.prototype；
3. 构造函数、和实例 都共享 Person.prototype 里的 属性和方法；
4. Person.prototype 里有一个 constructor 属性，这个属性也是一个指针，指向构造函数 Person。这样以来，实例 也指向了 Person,那么实例 也共享了构造函数的属性和方法。
5. 构造函数、实例、原型对象里所有的属性和方法 都是共享的。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    alert(this.name);
  };
}
var person1 = new Person("Tom", 14);
var Person2 = new Person("Jerry", 18);
console.log(person1 instanceof Object); //true
console.log(person1 instanceof Person); //truev
```

构造函数**解决了对象识别问题**，我们在这个例子中创建的对所有对象既是 Object 的实例，同时，也是 Person 的实例。这一点通过 instanceof 操作符可以得到验证。

## 构造函数虽然好用，但也有缺点。

既每个`new`出来的实例里的方法都要重新创建一遍。在前面的例子中`person1` `person2` 都有一个`sayName`方法，但这两个方法不是同一个`Function实例`！每个实例的方法都是不同、不相等的。这是不合理的！

```js
function Person(name) {
  this.name = name;
  this.sayName = new Function("alert(this.name)");
}
function Person(name) {
  this.name = name;
  this.sayName = function() {
    alert(this.name);
  };
}
console.log(person1.sayName == person2.sayName); //false
```

由此可见，完成同样任务的函数确实没必要 每个实例，就新实例一次。
