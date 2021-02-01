# ts 类型

## 🐔 基础类型

- boolean
- string
- number
- 枚举 enum
- any
- void
- Null 和 Undefined 默认情况下 null 和 undefined 是所有类型的子类型
- never
- unknow unknow 和 any 的区别是赋值可以，但是不能操作
- 数组
- 元组 Tuple
- object
- 类型断言 as

### 🐩 复合类型，包含多个单一类型的类型

1. 数组类型
2. 元组类型
3. 字面量类型
4. 接口类型

## 数组

两种定义方式

```ts
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];
```

## 元组 Tuple

元组相当于严格的数组，是一一对应的，不能换位置

```ts
let arr: [string, number];

arr = ["hello", 10]; // OK

arr = [10, "hello"]; // Error
```

元组可以使用 push 进去却不能读取新的值

```ts
let arr: [string, number] = ["yzy", 100];

arr.push(99); // OK

console.log(arr[2]); // Error
```

模拟实现

```ts
interface Tuple extends Array<string | number> {
  0: string;
  1: number;
  length: 2;
}
```

## 枚举 enum

枚举按照枚举成员的类型可归为两大类：

- 数字枚举类型
- 字符串枚举类型

数字枚举和字符串枚举的区别，就是枚举成员是常数还是字符串

外部枚举类似于 ts 的类型断言，只要在开发中有这个声明，意味着在当前开发环境上下文中一定存在当前这个对象，你可以随意使用当前对象

```ts
// 数字枚举类型
enum StrEnum {
  one,
  two,
}
console.log(StrEnum[0]); // one
console.log(StrEnum.one); //0

// 字符串枚举类型
let obj: StrEnum = {
  one: "one",
  two: "two",
};
```

## 多态

相同的类型调不同的方法就会有不同的行为
