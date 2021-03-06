# Vue 的数据侦测机制

数据侦测机制本质就是要知道什么时候数据被读取了，什么时候数据被修改了，JS 为我们提供了`Object.defineProperty`方法，通过该方法我们就可以轻松的知道数据在什么时候发生变化

```js
Object.defineProperty(obj, key, {
  enumerable: true,
  configurable: true,
  get() {
    console.log(`${key}属性被读取了`);
    return val;
  },
  set(newVal) {
    if (val === newVal) {
      return;
    }
    console.log(`${key}属性被修改了`);
    val = newVal;
  },
});
```

## 一、 object 的变化侦测

### 1.1 依赖收集

整个流程是这样的：通过`Object.defineProperty`可以监听对象，我们知道了数据什么时候会变化，数据发生变化之后我们要通知视图去更新。

问题是视图那么大，我们到底该通知谁去变化？不可能一个数据变了整个视图全部更新一遍的，这样显然不合理，那么合理的肯定是：在视图里**谁**用了这个数据 就更新**谁**

我们可以这样实现：我们给每个数据建一个依赖数组(因为一个数据可能被多处使用)，谁依赖了这个数据(即谁用到了这个数据)我们就把谁放入这个依赖数组中，那么当这个数据发生变化的时候，我们就去它对应的依赖数组中，把每个依赖都通知一遍。这个过程就是依赖收集。

比如：节点 1 和节点 2 使用了 data 中的 msg 数据，那么就是`msg:[节点1，节点2]`，然后 msg 变化了，触发了`Object.defineProperty`中的 set 方法，在 set 方法中通知了节点 1 和节点 2 去更新视图。

### 1.2 何时收集依赖？何时通知依赖更新

谁用到了这个数据，那么当这个数据变化时就通知谁。所谓谁用到了这个数据，其实就是谁获取了这个数据，而可观测的数据被获取时会触发 getter 属性，那么我们就可以在 getter 中收集这个依赖

当这个数据变化时会触发 setter 属性，那么我们就可以在 setter 中通知依赖更新

### 1.3 依赖收集到哪里？

我们给每个数据都建一个依赖数组，谁依赖了这个数据我们就把谁放入这个依赖数组中。单单用一个数组来存放依赖的话，功能好像有点欠缺并且代码过于耦合。我们应该将依赖数组的功能扩展一下，更好的做法是我们应该为每一个数据都建立一个依赖管理器，把这个数据所有的依赖都管理起来。

依赖管理器 Dep 类

```js
// 源码位置：src/core/observer/dep.js
export default class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }
  // 删除一个依赖
  removeSub(sub) {
    remove(this.subs, sub);
  }
  // 添加一个依赖
  depend() {
    if (window.target) {
      this.addSub(window.target);
    }
  }
  // 通知所有依赖更新
  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
```

在上面的依赖管理器 Dep 类中，我们先初始化了一个 subs 数组，用来存放依赖，并且定义了几个实例方法用来对依赖进行添加，删除，通知等操作。

有了依赖管理器后，我们就可以在 getter 中收集依赖，在 setter 中通知依赖更新了

### 1.4 依赖到底是谁

虽然我们一直在说”谁用到了这个数据谁就是依赖“，但是这仅仅是在口语层面上，那么反应在代码上该如何来描述这个”谁“呢？

在 Vue 中还实现了一个叫做 Watcher 的类，而 Watcher 类的实例就是我们上面所说的那个"谁"。换句话说就是：谁用到了数据，谁就是依赖，我们就为谁创建一个 Watcher 实例。在之后数据变化时，我们不直接去通知依赖更新，而是通知依赖对应的 Watch 实例，由 Watcher 实例去通知真正的视图。

```js
export default class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.cb = cb;
    this.getter = parsePath(expOrFn);
    this.value = this.get();
  }
  get() {
    window.target = this;
    const vm = this.vm;
    let value = this.getter.call(vm, vm);
    window.target = undefined;
    return value;
  }
  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldValue);
  }
}

/**
 * Parse simple path.
 * 把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来
 * 例如：
 * data = {a:{b:{c:2}}}
 * parsePath('a.b.c')(data)  // 2
 */
const bailRE = /[^\w.$]/;
export function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  const segments = path.split(".");
  return function(obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}
```

谁用到了数据，谁就是依赖，我们就为谁创建一个 **Watcher 实例**，
在创建 Watcher 实例 的过程中会自动的把自己添加到这个数据对应的依赖管理器中，
以后这个 Watcher 实例 就代表这个依赖，当数据变化时，我们就通知 Watcher 实例 ，由 Watcher 实例 再去通知真正的依赖。

## 二、 Array 的变化侦测

因为对于 Object 数据我们使用的是 JS 提供的对象原型上的方法 Object.defineProperty，而这个方法是对象原型上的，所以 Array 无法使用这个方法，所以我们需要对 Array 型数据设计一套另外的变化侦测机制,

### 2.1Array 型数据怎么收集

##### 第一个问题是怎么知道 array 什么时候被读取，什么时候被修改？

其实 Array 型数据的依赖收集方式和 Object 数据的依赖收集方式相同，都是在 getter 中收集

因为：在开发过程中我们的代码是这样写的

```js
data(){
  return {
    arr:[1,2,3]
  }
}
```

可以看到 arr 这个数据始终都存在于一个 object 数据对象中，那么要用到 arr 这个数据，是不是得先从 object 数据对象中获取一下 arr 数据，而从 object 数据对象中获取 arr 数据自然就会触发 arr 的 getter，所以我们就可以在 getter 中收集依赖。

所以：**Array 型数据还是在 getter 中收集依赖**

### 2.2 使 Array 型数据可观测

知道了 Array 数据如何被收集，那么当 Array 型数据发生变化时我们如何得知？

我们试想一下，要想让 Array 型数据发生变化，那必然是操作了 Array，而 JS 中提供的操作数组的方法就那么几种，我们可以把这些方法都重写一遍，在不改变原有功能的前提下，我们为其新增一些其他功能，例如下面这个例子：

```js
let arr = [1, 2, 3];
arr.push(4);
Array.prototype.newPush = function(val) {
  console.log("arr被修改了");
  this.push(val);
};
arr.newPush(4);
```

我们重写了 push 方法，可以在新的 newPush 方法内部干一些别的事情，比如通知变化。

然后我们顺着这个思路去想：`Object.defineProperty`可以监听对象，那么也就可以监听 Array.prototype 的一些属性，然后我们就可以通过监听 Array 原型的一些方法来知道 Array 被操作了

经过整理，Array 原型中可以改变数组自身内容的方法有 7 个，分别是：push,pop,shift,unshift,splice,sort,reverse

```js
// 源码位置：/src/core/observer/array.js

const arrayProto = Array.prototype;
// 创建一个对象作为拦截器
export const arrayMethods = Object.create(arrayProto);

// 改变数组自身内容的7个方法
const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
methodsToPatch.forEach(function(method) {
  const original = arrayProto[method]; // 缓存原生方法
  Object.defineProperty(arrayMethods, method, {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function mutator(...args) {
      const result = original.apply(this, args);
      return result;
    },
  });
});
```

只要知道了 Array 数据什么时候发生变化，那基本逻辑就回到了之前的 Dep、Watcher

## 三、 不足之处

`Object.defineProperty`方法仅仅只能观测到 object 数据的取值及设置值，当我们向 object 数据里添加一对新的 key/value 或删除一对已有的 key/value 时，它是无法观测到的，导致当我们对 object 数据添加或删除值时，无法通知依赖，无法驱动视图进行响应式更新，为了解决这一问题，Vue 增加了两个全局 API:Vue.set 和 Vue.delete
