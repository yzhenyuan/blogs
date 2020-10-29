根据 Node.js 官网的定义：Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。

官网的定义言简意赅，但不容易理解，用白话解释一下：Node.js 不是一门语言也不是框架，它只是基于 Google V8 引擎的 JavaScript 运行时环境，同时结合 Libuv 扩展了 JavaScript 功能，使之支持 io、fs 等只有语言才有的特性，使得 JavaScript 能够同时具有 DOM 操作(浏览器)和 I/O、文件读写、操作数据库(服务器端)等能力，是目前最简单的全栈式语言。

Node.js 可用于多个领域的开发，例如：

客户端应用程序（nw.js/electron）
后端（webapi，网站等）
工具（gulp，webpack 等构架工具）
物联网，硬件（ruff）
本文主要通过以下几点来梳理一下 Node.js。

Node.js 基础
Node.js 异步编程
Node.js 内存管理与优化
Node.js 测试与部署