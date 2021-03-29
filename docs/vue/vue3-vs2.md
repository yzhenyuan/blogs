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

## 七、 为什么要重写？
1. 利用新的语言特性 proxy 拦截对象的某个操作，不用去遍历整个对象
   1. 不能识别对象的深度嵌套
   2. 数组会导致多次的get、set
2. 解决架构设计问题
   1. vue2 代码耦合性强，有很多代码api都在实例上，不能tree shaking
   2. vue3 把各个功能的模块独立开-->方便分包--> composition API
   3. vue2 编译时的优化，静态节点，模板编译（正则匹配[有回溯问题]）
      1. vue3静态节点提升优化
      2. 静态节点字符串化
      3. 动态 blockTree/动态标记
      4. 编译过程，状态机编译模式

处理成响应式数据
渲染和数据关联起来（数据变更）




## 八、为什么更快更小
### 8.1 克服虚拟 DOM 的瓶颈

#### vue2 独特的渲染策略
它提供了类似于 HTML 的模板语法，但是将模板编译为可返回虚拟 DOM 树的渲染函数
#### 特点
1. 通过递归遍历两个虚拟 DOM 树，并比较每个节点上的每个属性来确定真实 DOM 的哪些部分需要更新
2. 但是更新仍然涉及许多不必要的 CPU 工作。当您查看的模板中大部分是静态内容并且只有少量动态绑定时，效率低下尤其明显-整个虚拟 DOM 树仍需要递归遍历以找出更改之处。
3. 模板编译步骤使我们有机会 对模板进行静态分析 并提取有关动态部分的信息，通过跳过静态子树在某种程度上做到了这一点
4. Vue 2 通过跳过静态子树在某种程度上做到了这一点，不过由于编译器体系结构过于简单，难以进行更高级的优化
5. 在 Vue 3中，使用适当的 AST 转换 pipeline 重写了编译器，这使我们能够以转换插件的形式编写编译时的优化

### 消除不必要的虚拟DOM树遍历和属性比较
编译器和运行时必须同时工作：编译器分析模板和生成带有优化提示的代码，同时，运行时拾取这些提示，并采取尽可能快的更新策略