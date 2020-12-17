# EditorConfig
跨编译器和IDE编写代码，保持一致的简单编码风格

EditorConfig 可以帮助开发者在不同的编辑器和 IDE 之间定义和维护一致的代码风格。

EditorConfig 包含一个用于定义代码格式的文件和一批编辑器插件，这些插件可以让编辑器读取配置文件并依此格式化代码。EditorConfig 的配置文件十分易读，并且可以很好的在 VCS（Version Control System）下工作。

.editorconfig 是一個 INI 格式的檔案，是由 section 跟 properties 組成的設定格式，下列來做個名詞解釋：
+ section 作用域
    + 是被套用的档案路径跟副档名，例如.py .jc .java 格式档
    + 舉例來說若要指定專案目錄底下的所有 .js 檔與 .py 档可以輸入 [*.{js,py}]

+ properties 屬性值
    + 简单来说就是规范值，下面举两个例子
    + indent_style：tab为hard-tabs，space為soft-tabs
    + insert_final_newline：设为true表示文件以一个换行結尾，false反之。
## 通配符

```php
*                匹配除/之外的任意字符串
**               匹配任意字符串
?                匹配任意单个字符
[name]           匹配name中的任意一个单一字符
[!name]          匹配不存在name中的任意一个单一字符
{s1,s2,s3}       匹配给定的字符串中的任意一个(用逗号分隔) 
{num1..num2}   　匹配num1到num2之间的任意一个整数, 这里的num1和num2可以为正整数也可以为负整数
```
## 属性
所有的属性和值都是忽略大小写的. 解析时它们都是小写的
```PHP
indent_style: 设置缩进风格，tab或者空格。tab是hard tabs，space为soft tabs。
indent_size: 缩进的宽度，即列数，整数。如果indent_style为tab，则此属性默认为tab_width。
tab_width: 设置tab的列数。默认是indent_size。
end_of_line： 换行符，lf、cr和crlf
charset： 编码，latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用utf-8-bom。
trim_trailing_whitespace： 设为true表示会除去换行行首的任意空白字符。
insert_final_newline: 设为true表明使文件以一个空白行结尾
root: 表明是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件。
```
## 配置信息
```php
# editorconfig.org
# 表明这是最顶层的配置文件，这样才会停止继续向上查找 .editorconfig 文件；
# 查找的 .editorconfig 文件是从顶层开始读取的，类似变量作用域的效果，内部
# 的 .editorconfig 文件属性优先级更高
root = true
# 指定作用文件格式
[*]
# 缩进的类型 [space | tab]
indent_style = space
# 缩进的大小 
# tab_width: 设置整数用于指定替代tab的列数。默认值就是indent_size的值，一般无需指定。
indent_size = 2
# 定义换行符 [lf | cr | crlf]
end_of_line = lf
# 编码格式。支持latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用uft-8-bom。
charset = utf-8
# 是否除去换行行首的任意空白字符
trim_trailing_whitespace = false
# 文件是否以一个空白行结尾 [true | false]
insert_final_newline = true
```