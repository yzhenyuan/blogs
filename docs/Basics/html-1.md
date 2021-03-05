# HTML

## 一、 元素分类

#### 1）内联元素

```
span,a,b,strong,i,em,br,input,textarea
```

- 本身属性为 display:inline
- 从左到右一行显示
- 不能控制宽、高，但是可以设置内外边框左右值

#### 2）块级元素

```
div,h1-h6,hr,menu,ol,ul,li,table,p,form
```

- 本身属性为 display:block
- 独占一行，从上到下布局
- 可以控制宽、高等相关属性
- 不设置宽高的情况下，是它父级的宽高

#### 3）内联块级元素

- 能够识别 width、height、line-height、padding、margin
- 默认从左到右排列

#### 元素的应用场景

- 内联元素：用于不指定宽高，宽高由内容指定
- 块级元素：用于指定宽高，标签占满一行
- 内联块级元素：用于指定元素宽高，不占满一行

## 二、 语义化

根据不同的内容只用合适的标签，即为语义化

### 2.1 语义化优点：

1. 利于 SEO ，对搜索引擎友好，容易被搜索引擎抓取
2. 便于其他开发者阅读
3. 结构明确，在样式没有加载前也有较为明确的结构
4. 方便其他设备阅读

### 2.2 如何语义化

1. 少用无语义化的 div 和 span
2. 语义不明显时，div||p，使用 p，因为 p 有上下间距，对兼容特殊终端有利
3. 不要使用纯样式标签，如 b、font、u
4. input 对应的说明使用 label

## 三、 meta

### 3.1 元数据

1. 用来构建 HTML 文档的基本结构
2. 处理文档向浏览器提供信息和指示
3. 如 title、base、meta

### 3.2 meta 元素

可提供有关页面的元信息，比如针对**搜索引擎**和**更新频度**的描述和关键词

包括四大属性：

1. charset:声明字符编码
2. content：配合`name`或`http-equiv`使用，为这两种提供 值
3. http-equiv：可以用作 HTTP 头部的某些作用
4. name：定义页面的元数据，只能跟 content 以前使用

## 四、 大量 dom 怎么优化？

1. 缓存 DOM 对象，提前获取 dom
   ```js
   let rootElem = document.querySelector("#app");
   let childList = rootElem.child; // 假设全是dom节点
   for (let i = 0; i < childList.len; j++) {
     /**
      * 根据条件对应操作
      */
   }
   ```
2. 文档碎片
3. 使用 innerHTML 代替 appendChild
4. 批量读，一次性写；使用 requestAnimationFrame
5. 虚拟 DOM
