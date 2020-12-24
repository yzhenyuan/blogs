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

## 实用工具类型
TypeScript 提供了方便的内置实用工具，可帮助我们轻松地操作类型。在使用时需要将要处理的类型传递给 `<>`。

### Partial
+ `Partial<T>`

`Partial` 允许你将所有类型为 `T` 的属性设为可选。它将在每个字段旁边添加一个 `?` 标记。

```ts
interface PartialType {
  id: number
  firstName: string
  lastName: string
}

function showType(args: Partial<PartialType>) {
  console.log(args)
}

showType({ id: 1 })
// Output: {id: 1}

showType({ firstName: "John", lastName: "Doe" })
// Output: {firstName: "John", lastName: "Doe"}
```

代码中有一个名为 `PartialType` 的接口，它作为函数 `showType()` 的参数的类型注释。要想使属性是可选的，必须用到 `Partial` 关键字，并传入 `PartialType` 类型作为参数。现在所有字段都变成了可选的。

## Required
+ `Required<T>`

与 Partial 不同，Required 使所有类型为 `T` 的属性成为必需的。
```ts
interface RequiredType {
  id: number
  firstName?: string
  lastName?: string
}

function showType(args: Required<RequiredType>) {
  console.log(args)
}

showType({ id: 1, firstName: "John", lastName: "Doe" })
// Output: { id: 1, firstName: "John", lastName: "Doe" }

showType({ id: 1 })
// Error: Type '{ id: number: }' is missing the following properties from type 'Required<RequiredType>': firstName, lastName
```
即使在之前先将它们设为可选的，`Required` 也会使所有符合条件的属性成为必需的。而且如果省略掉属性的话 TypeScript 将会引发错误。
## Readonly
+ `Readonly<T>`

这个类型会对所有类型为 `T` 的属性进行转换，使它们无法被重新赋值。
```ts
interface ReadonlyType {
  id: number
  name: string
}

function showType(args: Readonly<ReadonlyType>) {
  args.id = 4
  console.log(args)
}

showType({ id: 1, name: "Doe" })
// Error: 无法给'id'重新赋值，因为它是只读属性。
```
在代码中用 `Readonly` 来使 `ReadonlyType` 的属性不可被重新赋值。如果你一定要为这些字段赋值的话，将会引发错误。

除此之外，还可以在属性前面使用关键字“ `readonly`”，以使其无法重新分配。
```ts
interface ReadonlyType {
  readonly id: number
  name: string
}
```

## Pick
+ `Pick<T, K>`

它允许你通过选择某个类型的属性 `k` ，从现有的模型 `T` 中创建一个新类型。
```ts
interface PickType {
  id: number
  firstName: string
  lastName: string
}

function showType(args: Pick<PickType, "firstName" | "lastName">) {
  console.log(args)
}

showType({ firstName: "John", lastName: "Doe" })
// Output: {firstName: "John"}

showType({ id: 3 })
// Error: Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'
```
`Pick` 与前面看到的那些有点不同。它需要两个参数 —— `T` 是要从中选择元素的类型，`k` 是要选择的属性。还可以通用管道符号 （`|`）将它们分开来选择多个字段。

## Omit
+ `Omit<T, K>`

`Omit` 与`Pick` 相反。它从类型 `T` 中删除 `K` 属性。
```ts
interface PickType {
  id: number
  firstName: string
  lastName: string
}

function showType(args: Omit<PickType, "firstName" | "lastName">) {
  console.log(args)
}

showType({ id: 7 })
// Output: {id: 7}

showType({ firstName: "John" })
// Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'
```
`Omit` 的工作方式与 `Pick` 类似。
## Extract
+ `Extract<T, U>`

`Extract` 使你通过选择出现在两个不同类型中的属性来构造类型。它从  `T`  中提取所有可分配给  `U`  的属性。
```ts
interface FirstType {
  id: number
  firstName: string
  lastName: string
}

interface SecondType {
  id: number
  address: string
  city: string
}

type ExtractType = Extract<keyof FirstType, keyof SecondType>
// Output: "id"
```
在代码中的两个接口里有共有的属性 `id`。通过 `Extract` 可以把 `id` 提取出来。如果你有多个共享字段，`Extract` 将会提取所有相似的属性。

## Exclude
与 Extract 不同，Exclude 通过排除已经存在于两个不同类型中的属性来构造类型。它排除了所有可以分配给 U 的字段
```ts
interface FirstType {
  id: number
  firstName: string
  lastName: string
}

interface SecondType {
  id: number
  address: string
  city: string
}

type ExcludeType = Exclude<keyof FirstType, keyof SecondType>

// Output; "firstName" | "lastName"
```
在上面的代码中，属性 `firstName` 和 `lastName` 可分配给 `SecondType` 类型，因为它们在那里不存在。通过 `Extract` 可以按预期返回这些字段。

## Record
+ `Record<K,T>`

`Record` 可以帮你构造一个类型，该类型具有给定类型 `T` 的一组属性 `K`。当把一个类型的属性映射到另一个类型时，用 `Record` 非常方便。
```ts
interface EmployeeType {
  id: number
  fullname: string
  role: string
}

let employees: Record<number, EmployeeType> = {
  0: { id: 1, fullname: "John Doe", role: "Designer" },
  1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
  2: { id: 3, fullname: "Sara Duckson", role: "Developer" },
}

// 0: { id: 1, fullname: "John Doe", role: "Designer" },
// 1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
// 2: { id: 3, fullname: "Sara Duckson", role: "Developer" }
```
`Record` 的工作方式相对简单。在代码中，它期望用 `number` 作为类型，这就是我们把 0、1 和 2 作为 `employees` 变量的键的原因。如果试图将字符串用作属性，则会引发错误。接下来，属性集由 `EmployeeType` 给出，因此该对象具有字段 `id`、 `fullName` 和 `role`。
## NonNullable
+ `NonNullable<T>`

它允许你从类型 `T` 中删除 `null` 和 `undefined`

```ts
type NonNullableType = string | number | null | undefined

function showType(args: NonNullable<NonNullableType>) {
  console.log(args)
}

showType("test")
// Output: "test"

showType(1)
// Output: 1

showType(null)
// Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

showType(undefined)
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.
```
在代码中吧  `NonNullableType` 作为参数传给了 `NonNullable`，`NonNullable` 通过从该类型中排除 `null` 和 `undefined` 来构造新类型。也就是说，如果你传递可空的值，`TypeScript` 将会引发错误。

顺便说一句，如果把 --`strictNullChecks` 标志添加到 `tsconfig` 文件，`TypeScript` 将应用非空性规则。

## 映射类型
映射类型允许你获取现有模型并将其每个属性转换为新类型。注意，前面介绍的一些实用工具类型也是映射类型。
```ts
type StringMap<T> = {
  [P in keyof T]: string
}

function showType(arg: StringMap<{ id: number; name: string }>) {
  console.log(arg)
}

showType({ id: 1, name: "Test" })
// Error: Type 'number' is not assignable to type 'string'.

showType({ id: "testId", name: "This is a Test" })
// Output: {id: "testId", name: "This is a Test"}
```

`StringMap<>` 会将传入的任何类型转换为字符串。也就是说，如果在函数 `showType()` 中使用它，那么接收到的参数必须是字符串，否则 `TypeScript` 将会报错。

## 类型保护
类型保护使你可以用运算符检查变量或对象的类型。它实际上是一个检查用 `typeof`、`instanceof` 或 `in` 所返回类型的条件块。

### 1、typeof
```ts
function showType(x: number | string) {
  if (typeof x === "number") {
    return `The result is ${x + x}`
  }
  throw new Error(`This operation can't be done on a ${typeof x}`)
}

showType("I'm not a number")
// Error: This operation can't be done on a string

showType(7)
// Output: The result is 14
```
代码中有一个普通的 JavaScript 条件块，该块检查通过 `typeof` 检测到的参数的类型。在这种情况下就保护你的类型了。
### 2、instanceof
```ts
class Foo {
  bar() {
    return "Hello World"
  }
}

class Bar {
  baz = "123"
}

function showType(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.bar())
    return arg.bar()
  }

  throw new Error("The type is not supported")
}

showType(new Foo())
// Output: Hello World

showType(new Bar())
// Error: The type is not supported
```
和像前面的例子一样，这也是一个类型保护，它检查接收到的参数是否为 `Foo` 类的一部分，并对其进行处理。
### 3、in
```ts
interface FirstType {
  x: number
}
interface SecondType {
  y: string
}

function showType(arg: FirstType | SecondType) {
  if ("x" in arg) {
    console.log(`The property ${arg.x} exists`)
    return `The property ${arg.x} exists`
  }
  throw new Error("This type is not expected")
}

showType({ x: 7 })
// Output: The property 7 exists

showType({ y: "ccc" })
// Error: This type is not expected
```
在代码中，`in` 运算符用来检查对象上是否存在属性 `x`。
## Conditional 类型
用来对两种类型进行测试，并根据测试的结果选择其中的一种
```ts
type NonNullable<T> = T extends null | undefined ? never : T
```
这个例子中的 `NonNullable` 检查该类型是否为 `null` 并根据该类型进行处理。



[参考](https://mp.weixin.qq.com/s/LJCgUBtxSVJq8WGVNOn9iQ)