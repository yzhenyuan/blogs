# 工厂模式
 工厂模式类似于现实生活中的工厂可以产生大量相似的商品，去做同样的事情，实现同样的效果;这时候需要使用工厂模式。


## 1.概念介绍
工厂模式是为了解决多个类似对象声明的问题;
也就是为了解决实列化对象产生重复的问题。

优点：能解决多个相似的问题。

缺点：不能知道对象识别的问题(对象的类型不知道)。
## 2.应用场景

```js
function createPerson (name,age) {
    var o = {
        name : name,
        age : age,    
        sayName : function () {
            alert(this.name)
        }
    }
    return o;
}
var person1 = createPerson("Tom",14);
var person2 = createPerson("Jerry",18)

console.log(person1 instanceof Object)  //true
console.log(person1 instanceof createPerson)  //false
```
工厂模式解决了代码复用的问题，但是却没有解决对象识别的问题。即**创建的所有实例都是Object类型**。

## 3. 工厂模式的分类
工厂模式分为简单工厂、抽象工厂和智能工厂，工厂模式不显示地要求使用一个构造函数。

简单工厂模式：使用一个类（通常为单体）来生成实例。  
复杂工厂模式：使用子类来决定一个成员变量应该是哪个具体的类的实例。


了解抽象工厂模式也是非常实用的,它的目标是以一个通用的目标将一组独立的工厂进行封装.它将一堆对象的实现细节从它们的一般用例中分离。

抽象工厂应该被用在一种必须从其创建或生成对象的方式处独立,或者需要同多种类型的对象一起工作,这样的系统中。