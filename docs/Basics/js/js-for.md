# for in & for of

## 枚举

in 可以枚举对象，of 不可以

```js
var obj = {
  a: 1,
  b: [],
  c: function() {},
};

// for in
for (var key in obj) {
  console.log(key);
}
// 结果是：
// a
// b
// c

// for of
for (var key of obj) {
  console.log(key);
}
// 结果是：
// Uncaught TypeError: obj is not iterable
```

## 迭代

```js
var arr = [3, 5, 7];
// of
for (var i of arr) {
  console.log(i);
}
// 结果是：
// 3
// 5
// 7
for (var i in arr) {
  console.log(i, arr[i]);
}
// 结果是：
// 0 3
// 1 5
// 2 7
```

## in 枚举数组 的问题

- 数组自身
- 数组的原型对象
- 数组对象本身属性值

```js
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

var arr = [3, 5, 7];
arr.foo = "hello";

for (var i in arr) {
  console.log(i);
}
// 结果是：
// 0  自身
// 1  自身
// 2  自身
// foo  本身属性
// arrCustom  原型对象
// objCustom  原型对象

// 🍎 hasOwnProperty 去不掉本身属性
for (var i in arr) {
  if (arr.hasOwnProperty(i)) {
    console.log(i);
  }
}
// 结果是： 0 1 2 foo
```

## of 的优点

### 1. 中断

forEach 遍历数组的时候是无法 break 或者 return false 中断的，of 可以使用 使用 break

```js
// 🌶 forEach遍历数组的时候是无法 break或者return false中断的
arr.forEach(function(value) {
  console.log(value);
  if (value == 5) {
    return false;
  }
});
// 结果是：  3 5 7

// 🌶 of 可以使用 使用 break
for (let value of arr) {
  console.log(value);
  if (value == 5) {
    break;
  }
}
// 结果是： 3 5
```

### 2. 可以迭代字符串

```js
let str = "boo";
for (let value of str) {
  console.log(value);
}
// 结果是： "b" "o" "o"
```

### 3. 可以直接迭代 arguments 类数组对象

```js
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);
// 结果是： 1 2 3
```

### 4. 迭代类型数组~”

```js
let typeArr = new Uint8Array([0x00, 0xff]);

for (let value of typeArr) {
  console.log(value);
}
// 结果是： 0 255
```

### 5. 迭代 Map 和 Set

```js
let mapData = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (let [key, value] of mapData) {
  console.log(value);
}
// 结果是： 1 2 3

let setData = new Set([1, 1, 2, 2, 3, 3]);
for (let value of setData) {
  console.log(value);
}
// 结果是： 1 2 3
```
