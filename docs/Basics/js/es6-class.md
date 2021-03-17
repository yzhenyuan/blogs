# Class

ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已

类的所有方法都定义在类的prototype属性上面

特点：
- Class不存在变量提升
- 不提供私有方法
- 内部如果含有this，它默认指向类的实例

```js
class Point {
  constructor(){}

  toString(){}
  toValue(){}
}

// 等同于

Point.prototype = {
  toString(){},
  toValue(){}
};
```
## 一、 constructor
- constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法

## 二、 继承
Class之间可以通过extends关键字实现继承
```js
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }
}
```
### 2.1 super
- 表示父类的构造函数，用来新建父类的this对象
- super 既可以当作函数使用，也可以当作对象使用
  - 作为函数调用时，代表父类的构造函数，只能用在子类的构造函数之中
  - 作为对象时，指向父类的原型对象
- 子类必须在constructor方法中调用super方法，否则新建实例时会报错
- 因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工

### 2.2 跟es5 继承 的区别
- ES5的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
- ES6的继承 实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this

### 2.3 Object.getPrototypeOf()
Object.getPrototypeOf方法可以用来从子类上获取父类
```js
Object.getPrototypeOf(ColorPoint) === Point
// true
```

## 三、 静态方法 static

表示该方法不会被实例继承，而是直接通过类来调用

### 静态属性
静态属性指的是Class本身的属性
```js
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
```