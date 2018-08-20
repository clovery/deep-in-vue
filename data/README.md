## 数据初始化

取值操作：

利用 JavaScript 的 Object.defineProperty 方法来定义属性，依赖该属性执行取值操作时收集该依赖对象，存放到属性的私有对象 dep.subs 数组中。

值更新操作：

调用 dep.notify() 通知 subs 执行更新操作。

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

1. 定义有响应式特性的数据 defineReactive
2. 执行到 $mount 方法，初始化 vm._watcher
3. Watcher 构造器中调用 watcher.get，Dep.target 指向当前 watcher（收集依赖），接下来调用 `vm._update(vm._render())` 更新界面
4. 在更新界面时，动态生成的 `render` 方法使用定义的数据时，会调用数据相应的 getter 方法。这时完成依赖收集，私有的 dep 变量，保存着订阅的 watcher。
