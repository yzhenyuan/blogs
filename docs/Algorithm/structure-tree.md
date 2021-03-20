# 树
## 根据根节点的顺序
1. 前序遍历
2. 中序遍历
3. 后序遍历

深度优先遍历是②和③的组合
## 方法
1. 确定一个路径，简化成链表
2. 通过递归，找子树一直找到叶子节点，最后只有一个节点
3. 把子树细节忽略掉

最大深度找到是不对称的二叉树


数组表示🌲，→层序遍历


1. 线程
2. 压缩
webpack5 
tree shaking ->prepack预执行
3. 缓存 hard-source-webpack-plugin
4. 集群编译 scripty
5. 缩小文件查找范围 
   loader include
   modules->resolve:{

   }
   mainFields ->mainFields:['main']
   alias-> alias:{
       'react':'.../react'
   }
   resolve:{
       extensions:[]
   }
ForkTsCheckerWebpackPlugin 替换tsc

1. 函数命名 use
2. 函数中只要使用了react 的hooks必定是一个hook
3. 最大的优势是复用


函数的参数抽离
```ts
const yd = (use:number) => {}

type ydType = Parameters<typeof yd>

const x = (...data:ydType) => {}
```

as 伴侣、
```ts  
// 单独抽离出一个函数
type IdType = string & {readonly brand:unique symbol}
function test(id:string){
    const xx = t(id)
}

function t(id:string){
    return id as string
}

```