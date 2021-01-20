# ypeScript 高级类型总结
## Intersection 类型
`Intersection` 类型是一种把对多种类型进行组合的方法。这意味着你可以把给定的多种类型合并，并得到一个带有全部属性的新类型。
```ts
    type LeftType = {
      id: number
      left: string
    }

    type RightType = {
      id: number
      right: string
    }

    type IntersectionType = LeftType & RightType

    function showType(args: IntersectionType) {
      console.log(args)
    }

    showType({ id: 1, left: "test", right: "test" })
    // Output: {id: 1, left: "test", right: "test"}
```
代码中的 `IntersectionType` 组合了两种类型：`LeftType 和 RightType`，并使用 & 符号来构造交 `intersection` 类型。
## Union 类型
`Union` 类型用来在给定变量中使用不同类型的注释。
```ts
    type UnionType = string | number

    function showType(arg: UnionType) {
      console.log(arg)
    }

    showType("test")
    // Output: test

    showType(7)
    // Output: 7
```
`showType` 函数是一个 `union` 类型，它能够接受字符串和数字作为参数
## 泛型
泛型类型是一种用来重用给定类型的一部分的方式。它用来处理参数传入的类型 **T**
```ts
    function showType<T>(args: T) {
      console.log(args)
    }

    showType("test")
    // Output: "test"

    showType(1)
    // Output: 1
```
要构造一个泛型类型，需要用到尖括号并将 `T` 作为参数进行传递。

在下面的代码中，我用的是 `T`（这个名称随你决定）这个名字，然后使用不同的类型注释调用了两次 `showType` 函数，因为它是可以重用的
```ts
    interface GenericType<T> {
      id: number
      name: T
    }

    function showType(args: GenericType<string>) {
      console.log(args)
    }

    showType({ id: 1, name: "test" })
    // Output: {id: 1, name: "test"}

    function showTypeTwo(args: GenericType<number>) {
      console.log(args)
    }

    showTypeTwo({ id: 1, name: 4 })
    // Output: {id: 1, name: 4}
```
还有另一个例子，例子中有一个接口 `GenericType`，这个接口接收通用类型 `T`。由于它是可重用的，因此我们可以用字符串和数字来调用它。
```ts
    interface GenericType<T, U> {
      id: T
      name: U
    }

    function showType(args: GenericType<number, string>) {
      console.log(args)
    }

    showType({ id: 1, name: "test" })
    // Output: {id: 1, name: "test"}

    function showTypeTwo(args: GenericType<string, string[]>) {
      console.log(args)
    }

    showTypeTwo({ id: "001", name: ["This", "is", "a", "Test"] })
    // Output: {id: "001", name: Array["This", "is", "a", "Test"]}
```
泛型类型可以接收多个参数。在例子中传入两个参数：`T 和 U`，然后将它们用作属性的类型注释。也就是说，我们现在可以给这个该接口并提供两个不同的类型作为参数。




[参考](https://mp.weixin.qq.com/s/LJCgUBtxSVJq8WGVNOn9iQ)