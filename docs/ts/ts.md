# ts使用
## 泛型
```ts
function test<T>(val:T):T{
    return val
}
test<string>('abc')//or test('abc')
test<number>(123)

// 接口 泛型
interface Config{
    <T>(value:T):T
}

const fn:Config = (value:T):T => {
    return value
}
fn(123)//or fn<number>(123)
```
## 断言
```ts
function test(val:string){
    if((<string>val).length){
        return (<string>val).length
    }else{
        val.toString().length
    }
}
```

## 非空
```ts
// ❌
if(res&&res.data&&res.data.data){}
//✅
if(res!.data!.data){}
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
## .d.ts
对文件/项目的声明
```ts
declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
}

declare module "*.ts"
declare module '*.svg'
```