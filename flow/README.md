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

### 处理数据

```
initData ->
observe(data, true /* asRootData */) ->
new Observer(value) ->
defineReactive(obj, keys[i], obj[keys[i]])
```

`defineReactive` 内部调用 `Object.defineProperty` 来定义对象属性，`get` 描述器有段方法，用来收集依赖

```
if (Dep.target) { // 解析模版会调用 pushTarget 方法，设置当前的 watcher 对象
  dep.depend() // 调用 Dep.target.addDep，将 dep 对象 push 到 watcher 中
  if (childOb) {
    childOb.dep.depend()
  }
  if (Array.isArray(value)) {
    dependArray(value)
  }
}
```

### 解析模版

```
$mount ->
compileToFunctions(template) ->
parse(template): ast ->
generate(ast, options): { render } ->
mountComponent(this, el, hydrating) ->
vm._watcher = new Watcher(vm, updateComponent, noop)
```

创建 `vm._watcher` 对象

`watcher.getter` 持有 `updateComponent` 的引用，构造器内调用 `watcher.get()`，接下来执行`get` 方法

`get` 方法主要代码

```
get() {
  pushTarget(this)
  value = this.getter.call(vm, vm) // 调用 updateComponent
  popTarget()
}
```

回过头看 `updateComponent` ， 函数体内部调用 `vm._update(vm._render(), hydrating)`

`vm._render()` 方法返回 `VNode` 对象

接下来到 [`vm.update`]() 方法，调用 `vm.__patch__(prevVnode, vnode)`，从而更新界面

patch 函数，源文件：[src/core/vdom/patch.js]()
