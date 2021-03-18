# Reflect 和 Proxy

## Reflect

Reflect 对象与 Proxy 对象一样，也是 ES6**为了操作对象**而提供的新 API。

Reflect 对象的设计目的有这样几个。

1. 将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty），放到`Reflect`对象上。现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上。

2. 修改某些 Object 方法的返回结果，让其变得更合理。比如，`Object.defineProperty(obj, name, desc)`在无法定义属性时，会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回 false。
3. 让 Object 操作都变成函数行为。某些 Object 操作是命令式，比如`name in obj和delete obj[name]`，而`Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)`让它们变成了函数行为。

```js
// 老写法
"assign" in Object; // true

// 新写法
Reflect.has(Object, "assign"); // true
```

4. Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，作为修改行为的基础。也就是说，不管 Proxy 怎么修改默认行为，你总可以在 Reflect 上获取默认行为。

### 作用

1. 将原生的 一些零散分布 Object、Function 或全局函数里的方法(apply、delete、get、set)，统一整合到 Reflect 上，更加方便统一管理这些原生 api
2. 因为 proxy 可以改写原生 api，如果被改写就找不到了，所以可以起到备份 api 的作用

## Proxy

Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）

### 语法

```js
let p = new Proxy(target, handler);
```

- target 是你要代理的对象.它可以是 JavaScript 中的任何合法对象.如: (数组, 对象, 函数等等)
- handler 是你要自定义操作方法的一个集合.
- p 是一个被代理后的新对象,它拥有 target 的一切属性和方法.只不过其行为和结果是在 handler 中自定义的.

🌰 例子

```js
const p = new Proxy(obj, {
  get(target, key, value) {
    if (key === "c") {
      return "我是自定义的一个结果";
    } else {
      return target[key];
    }
  },

  set(target, key, value) {
    if (value === 4) {
      target[key] = "我是自定义的一个结果";
    } else {
      target[key] = value;
    }
  },
});
```

## 作用

1. 拦截和监视外部对对象的访问
2. 降低函数或类的复杂度
3. 在复杂操作前对操作进行校验或对所需资源进行管理
