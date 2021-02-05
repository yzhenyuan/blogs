# ts 编译
Scanner 扫描器（scanner.ts）
Parser 解析器（parser.ts）
Binder 绑定器（binder.ts）
Checker 检查器（checker.ts）
Emitter 发射器（emitter.ts）


源码 ～ scanner(扫描器) ～ token数据流 ～ parser(解析器) -> AST(抽象语法树)
AST(抽象语法树) ～ binder(绑定器) -> symbols(符号)
AST(抽象语法树) + symbols  ~  checker(检查器) -> 类型检查功能
AST(抽象语法树) + checker(检查器) ～ emitter(发射器) -> js代码
