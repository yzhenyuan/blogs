# vue3 和 vue 中的差异

基于函数式编程

## 一、入口文件

```js
import {createApp} from 'vue'
const app = createApp(App);
app.use();
app.mixins();
app.component();
app.directive();
app.mount("#root");
```

## 二、Fragement template

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

## 三、style

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

## 四、Suspense

一开始是 react 中 才有的，vue2 中一般使用 `v-if`去模拟

### 🐩 异步组件作用

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

## 五、可以使用 jsx + tsx

```ts
import {h} from 'vue'
const React = { createElement: h }
// 为了让 tsx 转换之后的代码可以正确引用到 vue
```

## 六、 重构 Virtual DOM，修改了diff算法
1. 模板编译时的优：将一些静态节点编译成常量
2. slot优化：将slot编译为lazy函数，将slot的渲染的决定权交给子组件
3. 模板中内联事件的提取并重用（原本每次渲染都重新生成内联函数）
4. 代码结构调整：更便于Tree shaking（实际情况中，虽然依赖了某个模块，但其实只使用其中的某些功能。通过 tree-shaking，将没有使用的模块摇掉，这样来达到删除无用代码的目的。），使得体积更小
5. 使用Typescript替换Flow
6. 修改了diff算法： vue2需要diff所有的虚拟dom节点，而vue3参考了SVELTE框架的思想，先分层次-然后找不变化的层-针对变化的层进行diff，更新速度不会再受template大小的影响，而是仅由可变的内容决定。经过尤雨溪自己的测试，大概有6倍的速度提升。