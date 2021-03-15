# PWA

PWA 全称 Progressive Web App，即渐进式 WEB 应用

## 一、浏览器一般有三类 Worker,

1. Dedicated Worker (专用 worker)：只能被创建它的 JS 访问. 创建它的页面关闭, 它的生命周期就结束了.
2. Shared Worker (共享 worker)：可以被同一域名下的 JS 访问. 关联的页面都关闭时, 它的生命周期就结束了.
3. service worker（是事件驱动的 worker）：生命周期与页面无关. 关联页面未关闭时, 它也可以退出, 没有关联页面时, 它也可以启动.

## 二、service worker

ServiceWorker 生命周期的目的是,

实现离线优先.

在不打断现有 ServiceWorker 的情况下，准备好一个新的 ServiceWorker.

ServiceWorker 注册的 scope 下的页面, 同一时间只由一个 ServiceWorker 控制.

确保你的网站只有一个版本在运行.

### 2.1 特点

- 在页面中注册并安装成功后，运行于浏览器后台，不受页面刷新的影响，可以监听和截拦作用域范围内所有页面的 HTTP 请求。
- 网站必须使用 HTTPS。除了使用本地开发环境调试时(如域名使用 localhost)
- 运行于浏览器后台，可以控制打开的作用域范围下所有的页面请求
- 单独的作用域范围，单独的运行环境和执行线程
- 不能操作页面 DOM。但可以通过事件机制来处理
- 事件驱动型服务线程

### 2.2 生命周期

Service Worker 可能有以下几种状态：

1. 解析成功（parsed）
2. 正在安装（installing）
3. 安装成功（installed）
4. 正在激活（activating）
5. 激活成功（activated）
6. 废弃（redundant）

## PWA 存在的问题

- 支持率不高:现在 ios 手机端不支持 pwa，IE 也暂时不支持
- Chrome 在中国桌面版占有率还是不错的，安卓移动端上的占有率却很低
- 各大厂商还未明确支持 pwa
- 依赖的 GCM 服务在国内无法使用
- 微信小程序的竞争

总结：就是支持不太好
