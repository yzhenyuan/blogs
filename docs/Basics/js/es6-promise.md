# promise

## promise

简单版本

1. 创建构造函数 promise 传入参数为 function
2. 定义当前状态 status pending
3. 定义成功和失败 后返回的信息
4. 创建 resolve 和 reject 函数，参数是返回的信息
5. 使用 try...catch 捕获异常
6. 执行传入的参数
7. 增加 then 函数，参数是 resolve 和 reject 函数
8. then函数中判断status去执行函数

```js
function myPromise(constructor) {
  let self = this;
  self.status = "pending"; //定义状态改变前的初始状态
  self.value = undefined; //定义状态为resolved的时候的状态
  self.reason = undefined; //定义状态为rejected的时候的状态
  function resolve(value) {
    //两个==="pending"，保证了了状态的改变是不不可逆的
    if (self.status === "pending") {
      self.value = value;
      self.status = "resolved";
    }
  }
  function reject(reason) {
    //两个==="pending"，保证了了状态的改变是不不可逆的
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
    }
  }
  //捕获构造异常
  try {
    constructor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
myPromise.prototype.then = function(onFullfilled, onRejected) {
  let self = this;
  switch (self.status) {
    case "resolved":
      onFullfilled(self.value);
      break;
    case "rejected":
      onRejected(self.reason);
      break;
    default:
  }
};

// 测试
var p = new myPromise(function(resolve, reject) {
  resolve(1);
});
p.then(function(x) {
  console.log(x);
});
//输出1
```



## promise.all

`promise.all([p1,p2]).then((args:any[])=>{})`

1. 接受一个数组参数，返回一个 promise 的数组
2. 遍历传入的参数，用 Promise.resolve 将参数包一层，变成一个 promise 对象
3. 参数所有回调成功后才成功，返回数组与参数顺序一致
4. 参数数组中一个失败，则触发失败状态，将第一个错误信息显示出来

```js
function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`);
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedResult = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          resolvedCounter++;
          resolvedResult[i] = value;
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedResult);
          }
        },
        (error) => {
          return reject(error);
        }
      );
    }
  });
}

// test
let p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3);
  }, 3000);
});
promiseAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});
```
