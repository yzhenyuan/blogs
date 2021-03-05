# webpack 优化

## 一、 代码压缩
- webpack-parallel-uglify-plugin
- uglifyjs-webpack-plugin 开启 parallel 参数（不支持es6）
- terser-webpack-plugin 开启 parallel 参数，多进程压缩
- mini-css-extract-plugin提取chunk中的css到单独文件
- css-assets-webpack-plugin 开启cssnano

## 二、 提取公共资源
- 使用html-webpack-externals-plugin将基础包通过cdn引入，不打入bundle中
- 使用splitChunksPlugin进行（公共脚本、基础包、页面公共文件）分离（webpack内置）
  
## 三、 tree shaking
- purgecss-webapck-plugin 和 mini-css-extract-plugin 配合使用
- 使用 es6 Module
- 禁用babel-loader的模块依赖解析（否则webpack接收的就是commonjs形式的模块）

## 四、 scope hoisting
构建后的代码存在大量 闭包 ，造成体积正大，运行代码时创建的函数作用域变多，内存开销变大

scope hoisting 将所有模块的代码 按照引用顺序放到后一个函数作用域里，然后适当的重命名一些变量防止变量名冲突
- 必须是es6语法
- 需要配置mainFilds 对第三方模块采用 jsnext:main 中指向es6的语法