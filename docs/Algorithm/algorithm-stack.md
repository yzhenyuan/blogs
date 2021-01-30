# 栈和队列

## 👉 栈

栈是一种**后进先出**的数据结构，类似于刷盘子、羽毛球筒

### 用途

1. 编译器，调用函数基本就是把函数压栈再去调用
2. 计算器
3. 回文

### 栈的操作

- 插入新元素也叫 进栈、入栈或压栈
- 栈只能从一端进行操作，这一端叫做栈顶（反之-栈底）

```js
function Stack() {
  this.dataStore = [];
  this.top = 0; //栈顶元素的位置
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}
//进栈
function push(element) {
  this.dataStore[this.top++] = element;
}
//出栈
function pop() {
  return this.dataStore[--this.top];
}
//栈顶元素
function peek() {
  return this.dataStore[this.top - 1];
}
// 栈长度
function length() {
  return this.top;
}
// 清空栈
function clear() {
  this.top = 0;
}
```

## 👉 队列

队列是一种先进先出的结构

### 队列的操作

插入元素叫入队

```js
Queue.isEmpty = function() {
  return this.front == this.rear;
};
Queue.isFull = function() {
  return (this.rear + 1) % this.MaxSize == this.front;
};
Queue.push = function(element) {
  if (this.isFull()) {
    console.error("队列已满");
    return -1;
  }
  let index = ++this.rear % this.MaxSize;
  this.queue[index] = element;
};
Queue.pop = function() {
  if (this.isEmpty()) {
    console.error("队列为空");
    return -2;
  }
  let index = ++this.front % this.MaxSize;
  let element = this.queue[index];
  this.queue[index] = null;
  return element;
};
function Queue(MaxSize) {
  this.MaxSize = MaxSize;
  this.front = this.rear = 0;
  this.queue = new Array(this.MaxSize);
  this.push = Queue.push;
  this.pop = Queue.pop;
  this.isEmpty = Queue.isEmpty;
  this.isFull = Queue.isFull;
}
```
