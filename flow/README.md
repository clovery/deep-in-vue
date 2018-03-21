## Vue.js 从官网示例说起

```html
<div id="app">
  {{ message }}
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

## 问题

1. Vue 如何将数据填充到模版，更新界面的
2. 调用 app.message = 'Hola Vue!'，如何更新的界面

解答这几个问题，基本上 Vue 的运行机制也就大概地理解了


### 解析模版

```
$mount -> compileToFunctions(template) ->
  parse(template): ast -> generate(ast, options): { render } ->
  mountComponent(this, el, hydrating) ->
  vm._watcher = new Watcher(vm, updateComponent, noop)
```

`updateComponent` 作为 Watcher 的 expOrFn 的参数，watcher.getter 持有 updateComponent 的引用，watcher.get 方法执行，调用 watcher.getter，相当于调用了 `updateComponent` 方法，回过头看 `updateComponent` 函数， 函数体内部调用 `vm._update(vm._render(), hydrating)`

`vm._render()` 方法返回 `VNode` 对象

接下来到 [`vm.update`]() 方法，调用 `vm.__patch__(prevVnode, vnode)`，从而更新界面

patch 函数，源文件：[src/core/vdom/patch.js]()


### 处理数据

```
initData -> observe(data, true /* asRootData */) -> new Observer(value) -> defineReactive(obj, keys[i], obj[keys[i]])
```
