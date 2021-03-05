# this

## 词法作用域和 this 的区别

词法作用域 包含 执行上下文中的变量声明

this 是执行上下文的一个可能为空值的属性，是对对象的引用

js 引擎执行一段 跟当前执行上下文无关 的代码时，会创建新的执行上下文，用来追踪代码执行过程



## call apply bind

### call

```js
Function.prototype.mycall = function(context, ...argus) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  const fn = this;
  let result = null;

  context = context || window;
  context.fn = fn;
  result = context.fn(...argus);
  delete context.fn;

  return result;
};
```

### apply

```js
Function.prototype.myapply = function(context, ...argus) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  const fn = this;
  let result = null;
  // 区别在这一步
  context = context || window;
  argus = (argus && argus[0]) || [];
  context.fn = fn;
  result = context.fn(...argus);
  delete context.fn;

  return result;
};
```

### bind

- 可以修改 this 指向
- 返回了一个绑定 this 的新函数
- 支持函数柯里化
- 新函数的 this 不能修改

```js
Function.prototype.mybind = function(context) {
  var me = this;
  var args = Array.prototype.slice.apply(arguments, [1]);
  var F = function() {};
  F.prototype = this.prototype;
  var bound = function() {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return me.apply(this instanceof F ? this : context || this, finalArgs);
  };
  bound.prototype = new F();
  return bound;
};
```
