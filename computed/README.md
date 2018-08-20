# 计算属性 computed

[官方文档](https://cn.vuejs.org/v2/guide/computed.html)

普通属性的改变，触发依赖该普通属性的计算属性改变的工作机制？

initComputed(vm, computed) -> defineComputed(vm, key, userDef) -> createComputedGetter(key)

依赖收集

计算属性执行 getter 时，设置成当前依赖，取依赖属性时，触发依赖属性的取值方法，这时，记录依赖该属性的依赖者，从而当属性改变的时候，notify 依赖者。

## Resources

[Vue.js Internals: How computed properties work](https://skyronic.com/blog/vuejs-internals-computed-properties)


计算属性依赖收集

render 执行，发现需要计算属性，此时依赖指向 vm._watcher，此时进入到计算属性的 getter 中，执行 evaluate 方法，Dep.target 指向计算属性的 watcher，之前的依赖被 push 到 targetStack，执行完计算属性的 watcher.get，此时 Dep.target 指向 vm._watcher，然后

可以看到被依赖数据的 subs 包括 vm._watcher


pushTarget(vm._watcher)
  计算属性 evaluate
  pushTarget(computedWatcher)
  ... 依赖数据，收集依赖者
  popTarget() -> Dep.target 此时指向 vm._target

  createComputedGetter():
  if (Dep.target) {
    watcher.depend();
  }
  收集依赖，vm._target push 到依赖数据的 dep.subs 中
popTarget()
