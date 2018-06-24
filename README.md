# Vue Note

Base on Vue.js version 2.2.0

`parse` to ast

`generate` feed ast to `render`

`vm.$options.render` 根据模版生成的方法，调用返回 VNode 对象。


## ast 如何转换成 render


## 更新 data

`Vue` 实例会 

`_watchers` `_watcher`

Vue 实例的 _watcher[Watcher] 对象在 `mountComponent` 函数中初始化

```
vm._watcher = new Watcher(vm, updateComponent, noop);
```

依赖收集


将 `html` 模版转换为 `render` 方法
