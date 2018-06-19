# parser

Convert HTML string to AST

## 关键方法

* parseHTML 源文件[src/compile/parser/html-parser.js](src/compile/parser/html-parser.js)


`parse(template, options)`，compile to ast
`generate(ast, options)` to render

`genElement(ast)` to render method body code

遇到 `directives`，调用 `addDirective(el, name, rawName, value, arg, modifiers)` 方法，`AST` 里的 `directies[]` 属性记录了对应节点上挂载的指令。



