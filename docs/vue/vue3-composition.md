# Vue3 Composition API

## 一、与Vue2 的API区别

### 最明显区别

就是从基于对象的编程转向了**函数式编程**。🌶

目的是为了保证每个函数都能独立运行

#### Vue2 option API

- 所谓的 option API 就是部分的，一块一块的，开发应用的时候按照逻辑走，让你放哪就放哪
- Vue2 里就是 把相关的数据和操作写在同一个对象里，对象调用自己的数据和方法——this
- 也可以使用 ts，基于 vue-class-compent

- Vue3 的 setup 里就没有 this 了，变成了让函数来调用对象或是另一个函数

### 基于 setup() 的 api

- hooks
- setup
- reactive
- ref / toRefs / isRef
- computed
- watchEffect / watch
- Provide / Inject
- defineComponent

## 二、hooks

| Vue2          | Vue3            |
| ------------- | --------------- |
| beforeCreate  | setup()         |
| created       | setup()         |
| beforeMount   | onBeforeMount   |
| mounted       | onMounted       |
| beforeUpdate  | onBeforeUpdate  |
| updated       | onUpdated       |
| beforeDestroy | onBeforeUnmount |
| destroyed     | onUnmounted     |
| errorCaptured | onErrorCaptured |

## 三、setup() 函数

setup() 是专门为组件提供的新属性，Composition API 新特性提供了统一的入口。

组件不用写一堆东西了，只需要一个 setup 函数

在 setup() 中访问不到 this

### props & context

props 用来组件通信，context 包含了一些 Vue2 中用 this 获取的一些属性和方法

```js
props: {
    msg: String
},

setup(props, context){
    console.log(props.msg)
    // 上下文对象中包含了一些Vue2中用this获取的一些属性和方法
    context.attrs
    context.slots
    context.parent
    context.root
    context.emit
    context.refs
}
```

## 四、reactive

创建复杂对象

`reactive()` 函数接收一个普通对象，返回一个响应式的数据对象。类似于 Vue2 中 data() 返回的响应式对象

```js
<template>
    <p>{{state.count}}<p>
</template>
<script>
import { reactive } from 'Vue'
setup(){
    const state = reactive({ count: 0 })
    // 修改
    state.count = 20
    return {
        state
    }
}
</script>
```

## 五、ref

ref() 函数用来根据给定的值创建一个响应式的数据对象，ref() 函数调用的返回值是一个对象，这个对象上只包含一个 .value 属性

作用：

1. 创建基础响应式数据
2. 访问 dom

### 5.1. 基础使用

```js
<template>
    <p>{{count}}<p>
</template>
<script>
import { ref } from 'Vue'
setup(){
    const count = ref(100)
    // 修改
    count.value = 20
    // 读取
    console.log(count.value)
    return {
        count
    }
}
</script>
```

### 5.2. ref 和 reactive

当把 ref() 创建出来的响应式数据对象，挂载到 reactive() 上时，会自动把响应式数据对象展开为原始的值，不需通过 .value 就可以直接被访问

用法： ref 传单一变量，reactive 传复杂变量（对象）

```js
const count = ref(0)
const state = reactive({
  count:0
})
console.log(state.count) // 输出 0
state.count++            // 此处不需要通过 .value 就能直接访问原始值
console.log(count)       // 输出 1，
</script>
```

### 5.3. isRef

isRef() 用来判断某个值是否为 ref() 创建出来的对象

```js
const unwrapped = isRef(count) ? count.value : count;
```

### 5.4. toRefs

toRefs() 函数可以将 reactive() 创建出来的响应式对象，转换为普通的对象，只不过，这个对象上的每个属性节点，都是 ref() 类型的响应式数据

```js
const state = reactive({
  count,
});
return {
  ...toRefs(state), // count,
};
```

## 六、computed

computed() 用来创建计算属性，computed() 函数的返回值是一个 ref 的实例

```js
import { computed } from 'Vue'
props:{
    count:Number
},
setup(props){
    const addCount = computed(() => props.count + 1)
    return {
        addCount
    }
    // or
    return {
        addCount:computed(() => props.count + 1)
    }
    // ------------------------

}
```

## 七、watch & watchEffect

### watch

```js
// ---------------vue2
  watch:{
      name(val, oldVal){
    },
    immediate:true //true 创建的时候会立即执行，vue3中watchEffect
  }

// ---------------vue3
/*
  watch((sourse, cb, options))
  sourse, 数据源
  cb, 回调
  options 可选参数{
    deep:深度监听，和vue2一样
    lazy:和vue2的immediate正好相反 默认false
  }
*/
  const sourse = reactive({param:{data:100}})
  watch(
    () => sourse.param,
    (val, oldVal) => {},
    {
      deep:true,
      lazy:true
    }
  );
  watch([val1, val2],([newVal1, newVal2],[oldVal1, oldVal2])=>{})
```

### watchEffect

+ 对标 react useEffect
+ 但是进去就会执行，
+ 默认监听 props

> 原先watch的第三个参数来进行副作用的清除，现在用`watchEffect`的第一个参数fn来进行

```js
/*
🍎 比watch多了一个清理副作用的回调函数
  watchEffect(effect, options?)
  第一个参数是一个包含副作用的函数，它也有自己的参数 `onInvalidate`
  然后 onInvalidate 也是一个函数，用于清除 effect 产生的副作用
  1. 只作用于异步函数
  2. 当 effect 函数被重新调用时
  3. 当监听器被注销时
*/
watchEffect((onInvalidate)=>{
  syncFunction()
  onInvalidate(()=>{
    // 
  })
})
// 1. 会默认执行一次
// 2. 返回一个值可以直接暂停监听
const stop = watchEffect(() => {})
stop（）

// 跟react 的区别在于没有处理好 promise 
// 无法立刻返回一个所以也不能使用 async / await,
```

## 八、 provider & inject

跟vue2效果一样，只是把api单独提了出来

## 九、 defineComponent

这个不是必须的，主要用于结合 `ts` 提供的类型推断来进行项目开发

这个函数仅仅为 `setup()` 中的 `props` 提供了完整的推断

## 十、 Mixins

Vue2 中的 Mixins 存在的问题

1. 命名冲突
2. 隐式依赖

### Vue2 中 Mixins

```js
// Mixin1.js
export default {
  data: () => ({
    msg: null,
  }),
  methods: {
    setMsg() {},
  },
};
```

```js
// app.Vue
import Mixin1 from "./Mixin1.js";
export default {
  mixins: [Mixin1],
  //命名冲突
  data: () => ({
    msg: null,
  }),
  methods: {
    setMsg() {},
  },
};
```

### Vue3  使用

```js
// useMixin1.js
export  default{
    setup () {
        const msg = ref(0)
        const setMsg(){
            msg.value++
        }
        return {
            msg,
            setMsg
        }
    }
}
```

```js
// app.Vue
import useMixin1 from "./useMixin1.js";
export default {
  setup() {
    const { msg, setMsg } = useMixin1();
  },
};
```
