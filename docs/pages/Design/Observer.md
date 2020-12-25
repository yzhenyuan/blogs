# 观察者模式||发布-订阅模式

#### 首先看看两种模式的区别
![两种模式的区别](https://img2018.cnblogs.com/blog/849589/201904/849589-20190424122505055-2083728728.png)

可以看出，`发布-订阅模式`相比`观察者模式`多了个事件通道，事件通道作为调度中心，管理事件的订阅和发布工作，彻底隔绝了订阅者和发布者的依赖关系。

即订阅者在订阅事件的时候，只关注事件本身，而不关心谁会发布这个事件；发布者在发布事件的时候，只关注事件本身，而不关心谁订阅了这个事件。


## 观察者模式
观察者模式 在软件设计中是一个对象，维护一个依赖列表，当任何状态发生改变自动通知它们。
```js
class Subject {
    constructor() {
        this.observers = [];
    }
 
    add(observer) {
        this.observers.push(observer);
    }
 
    notify(...args) {
        this.observers.forEach(observer => observer.update(...args));
    }
}
 
class Observer {
    update(...args) {
        console.log(...args);
    }
}
 
// 创建观察者ob1
let ob1 = new Observer();
// 创建观察者ob2
let ob2 = new Observer();
// 创建目标 sub
let sub = new Subject();
// 目标sub添加观察者ob1 （目标和观察者建立了依赖关系）
sub.add(ob1);
// 目标sub添加观察者ob2
sub.add(ob2);
// 目标sub触发SMS事件（目标主动通知观察者）
sub.notify('I fired `SMS` event');
```





## 发布-订阅模式
在观察者模式中的Subject就像一个发布者（Publisher），观察者（Observer）完全和订阅者（Subscriber）关联。subject通知观察者就像一个发布者通知他的订阅者。
```js
class PubSub {
    constructor() {
        this.subscribers = [];
    }
     
    subscribe(topic, callback) {
        letcallbacks = this.subscribers[topic];
        if(!callbacks) {
            this.subscribers[topic] = [callback];
        } else{
            callbacks.push(callback);
        }
    }
     
    publish(topic, ...args) {
        letcallbacks = this.subscribers[topic] || [];
        callbacks.forEach(callback => callback(...args));
    }
}
 
// 创建事件调度中心，为订阅者和发布者提供调度服务
let pubSub = new PubSub();
// A订阅了SMS事件（A只关注SMS本身，而不关心谁发布这个事件）
pubSub.subscribe('SMS', console.log);
// B订阅了SMS事件
pubSub.subscribe('SMS', console.log);
// C发布了SMS事件（C只关注SMS本身，不关心谁订阅了这个事件）
pubSub.publish('SMS', 'I published `SMS` event');
```

## 总结
1. 在观察者模式中，观察者是知道Subject的，Subject一直保持对观察者进行记录。然而，在发布订阅模式中，发布者和订阅者不知道对方的存在。它们只有通过消息代理进行通信。
2. 在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。
3. 观察者模式大多数时候是同步的，比如当事件触发，Subject就会去调用观察者的方法。而发布-订阅模式大多数时候是异步的（使用消息队列）。
4. 观察者 模式需要在单个应用程序地址空间中实现，而发布-订阅更像交叉应用模式。
