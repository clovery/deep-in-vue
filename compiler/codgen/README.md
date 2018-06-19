```
generate(ast, options)
-> genElement(ast)
-> genData(el)
-> genChildren(el, true)
```

调用 `vm._render()` 生成 `vnode`，然后调用 `vm._update(vnode, hydrating) -> vm.__patch__` 插入或更新 `dom`

更新 UI，`Vue.prototype._update`

patch -> createElm -> createChildren

`VNode` 对象树
