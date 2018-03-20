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
2. 调用 app.message = 'do it'，如何更新的界面

解答这几个问题，基本上 Vue 的运行机制也就大概地理解了

```
initData -> observe(data, true /* asRootData */) -> new Observer(value) -> defineReactive(obj, keys[i], obj[keys[i]])
```
