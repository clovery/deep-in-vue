# v-model

[src/core/vdom/modules/directives.js]

```
updateDirectives ->
mergeVNodeHook
```

`updateDOMProps`

src/platforms/web/runtime/modules/dom-props.js

生成的 `render` 方法，创建 `_c('input')`，有 `domProps` 属性，如下：

```
domProps: {
  "value": (message)
},
```

最终 `data` 中的 `message` 属性是调用 `updateDOMProps` 函数来完成赋值的。

`updateListeners`
绑定 `input` 的 `oninput` 事件


流程

`vm._c` 生成的 `render` 方法，在 `render.js` 中。

执行 `createElement`，接下来 `_createElement(context, tag, data, children, normalizationType)`

```
createElement ->
_createElement(context, tag, data, children, normalizationType)) ->
vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      )

render() ->
createElm ->
createChildren ->
invokeCreateHooks ->
```