# vue3 和 vue 中的差异

基于函数式编程

## 入口文件

```js
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.mount("#app");
```

## 增加了 `Fragement template`

可以使用多个节点

```js
<template>
    <div>
        <p>demo1<p>
        <p>demo2<p>
    <div>
</template>
```

```js
<template>
    <p>demo1<p>
    <p>demo2<p>
</template>
```

## style

```scss
// ::v-deep()

<style lang="scss" scoped>
  .openApi-radio{
    margin:10px 0 20px;
    ::v-deep().el-radio-button__inner{
      border: 1px solid rgb(220, 223, 230);
    }
    // /deep/ .el-radio-button__inner{
    //   border: 1px solid rgb(220, 223, 230);
    // }

  }
</style>
```

## 可以使用 jsx + tsx

```ts
const React = { createElement: vue.h, Fragment: vue.Fragment }
为了让 tsx 转换之后的代码可以正确引用到 vue
```

## Suspense
一开始是react 中 才有的，vue2中一般使用 `v-if`去模拟
### 异步组件作用：

- 在页面加载之前显示加载动画
- 显示占位符内容
- 处理延迟加载的图像

```ts
    <Suspense>
        <template #default>
            <HeaderNav />
        </template>
        <template #fallback> Loading ... </template>
    </Suspense>
    // 结合difineSyncComponents使用
```

<!-- ## 所有的数据都代理到proxy上 -->

