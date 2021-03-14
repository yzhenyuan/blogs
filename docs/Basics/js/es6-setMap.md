# Set & Map

## 1. Set

```js
let set = new Set();

set.add({});
set.size; // 1

set.add({});
set.size; // 2
```

## 2. WeakSet

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

1. WeakSet 的成员只能是对象，而不能是其他类型的值
2. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中

## 3. Map

Map 和 object 的区别：Map 的 key 可以是任意类型，object 只能是字符串

## 4. WeakMap

WeakMap 结构与 Map 结构基本类似，唯一的区别是它只接受对象作为键名（null 除外），不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。
