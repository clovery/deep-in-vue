## 数据初始化

```
initState
  -> initData
      // 循环 data 数据，监听每个属性的变更
    -> proxy(vm, "_data", keys[i]);
      -> Object.defineProperty(target, key, sharedPropertyDefinition)
    -> observe(data, true /* asRootData */)
      -> new Observer(value)
        -> defineReactive(obj, keys[i], obj[keys[i]])
```

defineReactive

监听属性变更，收集依赖此属性的依赖


Watcher:

run -> get

生成的 `render` 方法在调用 `vm.message` 时，进入 `message` 的 `getter`，执行 `dep.depend` 收集依赖。

## 修改数据

```
app.message = 'hola'
```

进入 `reactiveSetter(newVal)` 方法，执行 `dep.notify()`，接下来调用 `watcher.update()`，进入 `queueWatcher` 队列，然后调用 `watcher.run() -> watcher.get() -> watcher.getter.call(vm, vm)`
`watcher.getter` 持有 `updateComponent` 的引用。
