# Composition API

基于 setup()的 api

- hooks
- reactive
- ref / toRefs
- computed
- watchEffect / watch
- Provide / Inject

## hooks

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

## setup 函数

setup() 是专门为组件提供的新属性，Composition API 新特性提供了统一的入口。

组件不用写一堆东西了，只需要一个 setup 函数

在 setup() 中访问不到 this

### props & context

props 用来组件通信，context 包含了一些 vue2 中用 this 获取的一些属性和方法

```js
props: {
    msg: String
},

setup(props, context){
    console.log(props.msg)
    // 上下文对象中包含了一些vue2中用this获取的一些属性和方法
    context.attrs
    context.slots
    context.parent
    context.root
    context.emit
    context.refs
}
```

## reactive

`reactive()` 函数接收一个普通对象，返回一个响应式的数据对象。类似于 vue2 中 data() 返回的响应式对象

```js
<template>
    <p>{{state.count}}<p>
</template>
<script>
import { reactive } from 'vue'
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

## ref

ref() 函数用来根据给定的值创建一个响应式的数据对象，ref() 函数调用的返回值是一个对象，这个对象上只包含一个 .value 属性

#### 1. 基础使用

```js
<template>
    <p>{{count}}<p>
</template>
<script>
import { ref } from 'vue'
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

#### 2. ref 和 reactive

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

#### 3. isRef

isRef() 用来判断某个值是否为 ref() 创建出来的对象

```js
const unwrapped = isRef(count) ? count.value : count;
```

#### 4. toRefs

toRefs() 函数可以将 reactive() 创建出来的响应式对象，转换为普通的对象，只不过，这个对象上的每个属性节点，都是 ref() 类型的响应式数据

```js
const state = reactive({
  count,
});
return {
  ...toRefs(state), // count,
};
```

## computed

computed() 用来创建计算属性，computed() 函数的返回值是一个 ref 的实例

```js
import { computed } from 'vue'
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

## 解决 Mixins 的问题

Vue2 中的 Mixins 存在的问题

1. 命名冲突
2. 隐式依赖
### Vue2中使用 Mixins
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
// app.vue
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
### vue3 components API 使用
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
// app.vue
import useMixin1 from "./useMixin1.js";
export default {
    setup () {
        const {msg, setMsg} = useMixin1()
    }
}

```