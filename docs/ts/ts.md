# ts 使用

### Typescript 基本类型

1. 数字
2. 字符串
3. 布尔类型
4. null
5. undefined
6. any
7. unknown
8. void
9. object
10. 枚举
11. never

### 复合类型，包含多个单一类型的类型

1. 数组类型
2. 元组类型
3. 字面量类型
4. 接口类型

## 泛型

```ts
function test<T>(val: T): T {
  return val;
}
test<string>("abc"); //or test('abc')
test<number>(123);

// 接口 泛型
interface Config {
  <T>(value: T): T;
}

const fn: Config = (value: T): T => {
  return value;
};
fn(123); //or fn<number>(123)
```

## 断言

```ts
function test(val: string) {
  if ((<string>val).length) {
    return (<string>val).length;
  } else {
    val.toString().length;
  }
}
```

## 非空

```ts
// ❌
if (res && res.data && res.data.data) {
}
// ✅
if (res!.data!.data) {
}
```

## 基础类型

```ts
interface {
    readonly id:string//只读属性
    [value:string]:any//任意属性 动态的

}
// 枚举
enum days = {sun, mon, Tue};
console.log(days[0]) // 'sun'
console.log(days['sun']) // 0

enum days2 = {sun = 7, mon = 1, Tue }
console.log(days['sun']) // 7

// type 创建类型别名，常用于联合类型
type val = number | string
```

## .d.ts 文件

对文件/项目的声明

```ts
declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
}

declare module "*.ts";
declare module "*.svg";
```

## Typescript 优点

1. 静态类型检查，提早发现问题。
2. 类型即文档，便于理解，协作。
3. 类型推导，自动补全，提升开发效率。
4. 出错时，可以大概率排除类型问题，缩短 bug 解决时间。

```ts
typeof和instanceof：用于细化的类型查询
keyof：获取对象的键
O[K]：属性查找
[K in O]：映射类型
+或-或readonly或?：加减法，只读和可选修饰符
x ? Y : Z：泛型类型，类型别名，函数参数类型的条件类型
!：可为空的类型的非空声明
=：泛型类型的默认类型参数
as：类型断言
is：函数返回类型的类型防护

ConstructorParameters：类构造函数的参数类型的元组
Exclude：从另一个类型中排除一个类型
Extract：选择可分配给另一种类型的子类型
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

语法功能	例
接口声明	interface Foo {}
类型声明	type Foo = number
函数声明	function foo(): void;
环境声明	declare module 'foo' {}
仅类型导入	import type {Type} from 'foo'
仅类型出口	export type {Type} from 'foo'
```
