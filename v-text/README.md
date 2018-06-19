# v-text

`parse` 解析之后，生成的 `ast` 相对应的 `directives` 节点保存相应的数据。

```
directives: [
  {
    arg: undefined
    modifiers: undefined
    name: "text"
    rawName: "v-text"
    value: "message"
  }
]
```

`genElement` -> `genData` -> `genElement`

`genDirectives` 处理 `directives`，填充到 `el` 的 `props` 属性上。
