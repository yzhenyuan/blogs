# Prettier
Prettier只关注格式化，并不具有lint检查语法等能力。它通过解析代码并匹配自己的一套规则，来强制执行一致的代码展示格式。

它在美化代码方面有很大的优势，配合ESLint可以对ESLint格式化基础上做一个很好的补充。

## 使用
1. 单独使用，配合编辑器IDE作代码格式化
2. 与ESLint等配合使用

## 配置项
可以在VSCode 首选项-设置-扩展或.settings.json中更改通用配置；

当然还可以在具体项目根目录设置.prettierrc单独配置；
```js
{
  // 设置强制单引号
  "singleQuote": true,
  // 为多行数组的非末尾行添加逗号 es5的对象，数组等
  "trailingComma": "es5",
  // 每行最大宽度 100
  "printWidth": 100,
  // 设置语句末尾不加分号
  "semi": false,
  // jsx中使用单引号
  "jsxSingleQuote": true,
}
```

最后格式化的生效策略同样是就近原则，一步步匹配目标文件最近父目录的配置文件，越近优先级越高。