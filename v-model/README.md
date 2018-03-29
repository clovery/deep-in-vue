# v-model

[src/core/vdom/modules/directives.js]

```
updateDirectives ->
mergeVNodeHook
```

`updateDOMProps`

src/platforms/web/runtime/modules/dom-props.js

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