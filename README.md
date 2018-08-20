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

1. html 模版解析成 ast
2. ast 生成 render
3. render 返回 vnode
4. vm.__patch__ 更新 UI


## html 模版解析为 ast

代码在 `src/compiler/parser`

# todos

[] 数据(data) 处理
[] 计算数据(computed) 处理

## 思考方式

关于数据和计算属性

1. 初始化
2. 更新
