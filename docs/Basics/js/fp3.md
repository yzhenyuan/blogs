# 函数式编程 ③ - 范畴论

函数式编程的理解：

- 与面向对象编程（Object-oriented programming）和过程式编程（Procedural programming）并列的编程范式。
- 最主要的特征是，函数是第一等公民。
- 强调将计算过程分解成可复用的函数，典型例子就是 map 方法和 reduce 方法组合而成 MapReduce 算法。
- 只有纯的、没有副作用的函数，才是合格的函数。

## 一、范畴论

理解函数式编程的关键，就是理解范畴论。

也就是说，彼此之间存在某种关系的概念、事物、对象等等，都构成"范畴"，随便什么东西，只要能找出它们之间的关系，就能定义一个"范畴"。

### 1.1 态射和变形

![](http://www.ruanyifeng.com/blogimg/asset/2017/bg2017022210.jpg)
👆 上图中，各个点与它们之间的箭头，就构成一个范畴。箭头叫**态射**，各个点就是变形

箭头表示范畴成员之间的关系，正式的名称叫做"态射"（morphism）。范畴论认为，同一个范畴的所有成员，就是不同状态的"变形"（transformation）。

通过"态射"，一个成员可以变形成另一个成员。

### 1.2 范畴与容器

我们可以把"范畴"想象成是一个容器，里面包含两样东西。

1. 值（value）
2. 值的**变形关系**，也就是函数。

```js
class Category {
  constructor(val) {
    this.val = val;
  }

  addOne(x) {
    return x + 1;
  }
}
```

👆 函数中 `Category`就是容器，里面包含一个值 `this.val` 和一种变形关系 `addOne`

这里的范畴，就是所有彼此之间相差 1 的数字。

### 1.3 范畴论与函数式编程的关系

范畴论使用函数，表达范畴之间的关系。

伴随着范畴论的发展，就发展出一整套函数的运算方法。这套方法起初只用于数学运算，后来有人将它在计算机上实现了，就变成了今天的"函数式编程"。

本质上，函数式编程只是范畴论的运算方法，跟数理逻辑、微积分、行列式是同一类东西，都是数学方法，只是碰巧它能用来写程序。

所以，你明白了吗，为什么函数式编程要求函数必须是纯的，不能有副作用？因为它是一种数学运算，原始目的就是求值，不做其他事情，否则就无法满足函数运算法则了。

总之，在函数式编程中，函数就是一个管道（pipe）。这头进去一个值，那头就会出来一个新的值，没有其他作用。

## 二、函数的合成与柯里化

### 函数的合成

如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，这叫做"函数的合成"（compose）。

![](http://www.ruanyifeng.com/blogimg/asset/2017/bg2017022204.png)
上图中，X 和 Y 之间的变形关系是函数 f，Y 和 Z 之间的变形关系是函数 g，那么 X 和 Z 之间的关系，就是 g 和 f 的合成函数 g·f。

```js
const compose = function(f, g) {
  return function(x) {
    return f(g(x));
  };
};

// 🚗 函数的合成还必须满足结合律。

compose(f, compose(g, h));
// 等同于
compose(compose(f, g), h);
// 等同于
compose(f, g, h);

// 🇫🇯 例如：

var toUpperCase = function(x) {
  return x.toUpperCase();
};
var exclaim = function(x) {
  return x + "!";
};
var shout = compose(exclaim, toUpperCase);

shout("send in the clowns");
//=> "SEND IN THE CLOWNS!"
```

### 柯里化

柯里化就是把一个多参数的函数，转化为单参数函数

```js
// 柯里化之前
function add(x, y) {
  return x + y;
}

add(1, 2); // 3

// 柯里化之后
function addX(y) {
  return function(x) {
    return x + y;
  };
}

addX(2)(1); // 3
```

有了柯里化以后，我们就能做到，所有函数只接受一个参数

## 三、函子（Functor）

函数不仅可以用于同一个范畴之中值的转换，还可以用于将一个范畴转成另一个范畴

### 函子的概念

函子是函数式编程里面最重要的数据类型，也是基本的运算单位和功能单位。

它首先是一种范畴，也就是说，是一个容器，包含了值和变形关系。比较特殊的是，**它的变形关系可以依次作用于每一个值，将当前容器变形成另一个容器**。

### 函子的代码实现

```js
class Functor {
  constructor(val) {
    this.val = val;
  }

  map(f) {
    return new Functor(f(this.val));
  }
}
```

上面代码中，Functor 是一个函子，它的 map 方法接受函数 f 作为参数，然后返回一个新的函子，里面包含的值是被 f 处理过的（f(this.val)）。

💖 一般约定，函子的标志就是容器具有 map 方法。该方法将容器里面的每一个值，映射到另一个容器。**学习函数式编程，实际上就是学习函子的各种运算**

#### 示例：
```js
(new Functor(2)).map(function (two) {
  return two + 2;
});
// Functor(4)

(new Functor('flamethrowers')).map(function(s) {
  return s.toUpperCase();
});
// Functor('FLAMETHROWERS')

(new Functor('bombs')).map(_.concat(' away')).map(_.prop('length'));
// Functor(10)
```


## 四、of 方法

函数式编程一般约定，函子有一个of方法，用来生成新的容器。


下面就用of方法替换掉new。
```js
Functor.of = function(val) {
  return new Functor(val);
};

然后，前面的例子就可以改成下面这样。

Functor.of(2).map(function (two) {
  return two + 2;
});
// Functor(4)
```

## 五、 Maybe 函子

函子接受各种函数，处理容器内部的值。这里就有一个问题，容器内部的值可能是一个空值（比如null），而外部函数未必有处理空值的机制，如果传入空值，很可能就会出错。

```js
Functor.of(null).map(function (s) {
  return s.toUpperCase();
});
// TypeError
```
上面代码中，函子里面的值是null，结果小写变成大写的时候就出错了。

Maybe 函子就是为了解决这一类问题而设计的。简单说，它的map方法里面设置了空值检查。

---

[参考阮一峰](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
[函数式编程 ☞ 北](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch5.html#%E8%8C%83%E7%95%B4%E5%AD%A6)
