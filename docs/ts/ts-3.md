# 映射类型
映射类型表示可以对某一个类型进行操作，产生出另一个符合我们要求的类型：
```ts
    ConstructorParameters：类构造函数的参数类型的元组
    Exclude：从另一个类型中排除一个类型
    type Exclude<T, U> = T extends U ? never : T; 从 T 中找出 U 中没有的元素
    Extract：选择可分配给另一种类型的子类型 
    type Extract<T, U> = T extends U ? T : never; 提取出 T 包含在 U 中的元素
    InstanceType：您从newing类构造函数获得的实例类型
    NonNullable：从类型中排除null和undefined
    Parameters：函数参数类型的元组
    Partial：将对象中的所有属性设为可选
    Readonly：使对象中的所有属性为只读
    ReadonlyArray：制作给定类型的不可变数组
    Pick：对象类型的子类型及其键的子集
    Record：从键类型到值类型的映射
    Required：将对象中的所有属性设为必需

    ReturnType：函数的返回类型
    用它取到函数返回值的类型方便之后使用.
    function foo(x: number): Array<number> {
        return [x];
    }
    type fn = ReturnType<typeof foo>;
```
## 映射类型 介绍
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

## 1. Readonly
```ts
// 定义接口Obj
interface Obj {
    a: number
    b: string
    c: boolean
}
// 使用类型别名定义类型ReadonlyObj
type ReadonlyObj = Readonly<Obj>    // Readonly是TS内置的泛型接口
```
### 实现原理
```ts
type Readonly<T> = {
    readonly [P in typeof T]:P[T]
}
```

## 2. Partial
将一个接口的所有属性变成可选的
```ts
type PartialObj = Partial<Obj>  // 可选
```
### 实现原理
```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```



## 3. Pick
可以抽取对象子集的Pick映射类型
从 T 中，选择一组键在并集 K 中的属性。实际就是说在原有的类型 T 上 筛选出想要的全部或极个别的属性和类型

```ts
type PickObj = Pick<Obj, 'a' | 'b'> // 抽取接口Obj中的属性a和b,形成新类型
```

### 实现原理
```ts
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```
以上三种映射类型官方称为同态,意思是只作用于obj属性而不会引入新的属性

### Omit
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

## 4. Record 
他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型

```ts
type petsGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
    name:string,
    age:number,
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'dogName',
        age:2
    },
    cat:{
        name:'catName',
        age:3
    },
    fish:{
        name:'fishName',
        age:5
    }
}
```
### 实现原理
```ts
/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

## ---
映射类型本质上是一种预先定义的泛型接口,
通常还会结合索引类型,获取对象的属性和属性值,
从而将一个对象映射为我们想要的结构,即目标类型


[参考](https://mp.weixin.qq.com/s/LJCgUBtxSVJq8WGVNOn9iQ)