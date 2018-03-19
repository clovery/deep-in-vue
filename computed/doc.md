# 计算属性 computed

[官方文档](https://cn.vuejs.org/v2/guide/computed.html)

普通属性的改变，触发依赖该普通属性的计算属性改变的工作机制？

initComputed(vm, computed) -> defineComputed(vm, key, userDef) -> createComputedGetter(key)

依赖收集

计算属性执行 getter 时，设置成当前依赖，取依赖属性时，触发依赖属性的取值方法，这时，记录依赖该属性的依赖者，从而当属性改变的时候，notify 依赖者。