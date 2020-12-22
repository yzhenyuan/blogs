# 每个过程的优化
主要可以从几个方面来看：
+ 网络连接
+ 请求优化
+ 响应优化
+ 浏览器渲染

通过 `performance.timing` API可以获取各个阶段的执行时间


## 一、 网络连接优化

主要针对的是 `重定向`、`DNS`、`TCP` 连接进行优化
+ 避免重定向
+ `DNS` 查找优化：页面采用预解析 `dns-prefach`，同时将同一资源放到一起，减少domain数量也是可以减少DNS查找
+ 使用 `CND`（内容分发网路）
+ HTTP1.1 版本，可以使用`keep-alive`和服务器建立长连接，让多个资源经过一个 `TCP` 链接传输

## 二、 请求方面优化

核心是减少浏览器向服务器发送的请求`数目`，以及请求资源的`大小`
#### 2.1 合理使用文件的压缩与合并
+ 运用浏览器对资源**并行加载**的特性，在资源加载的`数量和大小`之间做一个合理的平衡
+ 在**移动页面**中，将首屏的加载资源数量控制在5个之内，每个资源在`gzip`之后大小控制在28.5kb左右

#### 2.2 压缩图片
使用雪碧图，资源小的使用base64内联
#### 2.3 组件延迟加载
例如`vue`：
1. v-if默认为false情况下不会加载组件，只有变为true的情况下才会进行加载，而且我们的组件加载后不需要销毁
2. 子组件可以通过插槽对父组件引用子组件包裹的内容进行分发。
```js
<template>
  <span>
    <slot v-if="initSuccess"></slot>
  </span>
</template>
 
<script>
  export default {
    name: "pl-lazy",
    props: {
      time: {
        required: false,
        default: 0
      }
    },
    data() {
      return {
        initSuccess: false
      }
    },
    created() {
      this.initSlot();
    },
 
    methods: {
      initSlot() {
        let vm = this;
        setTimeout(function () {
          vm.initSuccess = true;
        }, (Number(vm.time || 0)));
      }
    }
  }
</script>
// 注册
// 注册全局组件
import plLazy from "./components/common/components/plLazy";
Vue.component('pl-lazy', plLazy);

// 使用
<pl-lazy time="200">
这里放的是延迟加载的组件/dom内容
</pl-lazy>
```

#### 2.4 给 `Cookie` 瘦身
静态资源使用`CDN`等方式 放在和当前域 不同 的域上，以避免请求静态资源的时候携带Cookie

#### 2.5 利用`CDN`提升浏览器资源的加载能力
#### 2.6 合理利用缓存策略
+ 利用 manifest + 本地存储做持久化缓存
+ 对访问 实时性不高 的资源 放到`IndexDB`或`WebSQL`中
+ 使用localForage 操作持久化缓存
+ 库文件放入 `CDN`  或者开启强缓

## 三、 响应优化
+ 优化服务端处理流程，如：使用缓存、优化数据库查询、减少查询次数
+ 优化响应资源大小，如：开启Gzip

## 页面加载的核心指标
+ `TTFB` 首个字节
+ `FP` 首次绘制，只有 div 根节点 ，对应vue中的 created
+ `FCP` 首次有内容的绘制，页面的基本框架，但是没有数据内容，对应 monted
+ `FMP` 首次有意义的绘制，包含所有元素和数据内容，对应 updated
+ `TTI` 首次能交互时间
+ `Long Task` 大于 等于 50ms的任务
+ `SSR & CSR` 
+ 同构化

## 四、 浏览器首屏渲染优化
### 首屏时间
用户打开网站开始，到浏览器首屏内容渲染完成的时间，
> 通常一个网站首屏时间在5m以内是比较优秀的，10m是可以接受的，10m以上 就比较差劲了
### 首屏优化方案
+ 页面直出：骨架屏或SSR
+ 首帧渲染优化
+ 资源动态加载
+ 浏览器缓存
+ 优化js执行时间
+ 减少重排重绘
+ 硬件加速

