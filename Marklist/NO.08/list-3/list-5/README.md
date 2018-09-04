# vue自定义指令
除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令。

el: 指令所绑定的元素，可以用来直接操作DOM。
binding: 一个对象，包含指令的很多信息。
vnode: Vue编译生成的虚拟节点。

### 示例一
当页面加载时，该元素将获得焦点
``` javascript
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

然后你可以在模板中任何元素上使用新的 v-focus 属性，如下：
``` javascript
<input v-focus>
```

### 示例二

如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法的 JavaScript 表达式。
``` html
<div v-lang="{ color: 'red', text: 'hello!' }"></div>
```

``` javascript
Vue.directive('lang', function (el, binding) {
  console.log(binding.value.color) // => "red"
  console.log(binding.value.text)  // => "hello!"
  el.style='color:'+binding.value.color//binding.value.color就是color颜色red。
})
```




