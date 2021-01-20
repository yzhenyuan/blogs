# vue3 中watch和watchEffect的


## 写法区别

watch在监听 ref 类型时和监听reactive类型时watch函数的写发有所不一样

watch在监听 ref 类型时
```js
    const state = ref(0)
    watch(state, (newValue, oldValue) => {
        console.log(`原值为${oldValue}`)
        console.log(`新值为${newValue}`)
        /* 1秒后打印结果：
                原值为0
                新值为1
        */
    })
```
watch在监听 reactive类型时：
```js
    const state = reactive({count: 0})
    watch(() => state.count, (newValue, oldValue) => {
        console.log(`原值为${oldValue}`)
        console.log(`新值为${newValue}`)
        /* 1秒后打印结果：
                原值为0
                新值为1
        */
    })
```

## watchEffect 它与 watch 的区别主要有以下几点：

1. 不需要手动传入依赖
2. 每次初始化时会执行一次回调函数来自动获取依赖
3. 无法获取到原值，只能得到变化后的值

```js
watchEffect(() => {
    console.log(state.count)
    console.log(state.name)
    /*  初始化时打印：
            0
            zs*/
})
```
watch和watchEffect监听器在同一个页面中都可以使用多次，对于分别监听多个变量的时候

## watchEffect原理分析
```js
 watchEffect(()=>{
        console.log(state.todos);
    });
```
我们将参数中的匿名箭头函数设为 `A`
1. 当编译器执行watchEffect方法时，大致会走以下流程
   ```js
   调用watchEffect--->调用A--->访问state.todos--->调用proxy对象的get方法--->将todos与函数A绑定
   ```
2. 如果todos发生变化则会执行以下流程：
   ```js
   调用proxy的set方法--->调用A方法
   ```

数据状态都是proxy对象，调用watchEffect可以将访问到的数据状态绑定包含数据状态的方法，一旦数据状态发生变化即可调用被绑定的方法