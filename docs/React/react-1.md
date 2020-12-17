# 前言
## React Fiber 是什么？
为了解决 diff 时间过长导致的卡顿问题，React Fiber 用类似 requestIdleCallback 的机制来做异步 diff

但是之前的数据结构不支持这样的实现异步 diff，于是 React 实现了一个类似链表的数据结构，将原来的 递归diff 变成了现在的 遍历diff，这样就能方便的做中断和恢复了。
## 如何让 React 的 diff 可中断？