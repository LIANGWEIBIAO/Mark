# VUE学习实践笔记(一)

--------------------------------------------------

### vue实例
``` html
<body>
   <div id="app"><div>
</body>
```

``` javascript
new Vue({
  el:"#app",//把组件放置到#app元素里面。
  template:"<p>{{ fruit }} </p>",
  data:{
     fruit: "apple"
  }
})
```
把组件挂载到div里面，div被替换成p标签。

``` html
<body>
   <p id="app"> apple </p>
</body>
```


### 组件
- 注册全局组件
``` html
<body>
   <div id="app">apple</div>
</body>
```

``` javascript
import Vue form "vue"

Vue.component("my-header",{
    template:"<div>this is my header<div>"
})
//把根组件的template去掉，把<div id="app"></div>作为根节点，在里面写组件。
new Vue({
  el:"#app"
})

<div id="app">
  <my-my-header></my-my-header>
</div>
```
渲染后
```
<div id="app">
  <div>this is my header<div>
</div>
```

在开发中，我们没有必要把所有的组件注册全局。
``` javascript
import Vue form "vue"
//也可以通过import引入。
var myHeader = {
    template:"<div>this is my {{fruit}}<div>"，
    data:{
         fruit: "apple"
    }
}
//把根组件的template去掉，把<div id="app"></div>作为根节点，在里面写组件。
new Vue({
  el:"#app"，
  components:{
    'my-header':myHeader
  }
})

<div id="app">
  <my-header></my-header>
</div>
```

- 组件系统

![此处输入图片的描述][1]
![此处输入图片的描述][2]

``` javascript
import Vue form "vue"

var myHeaderChild = {
      template:"<p>i am my header child</p>"
}
var myHeader = {
    template:"<div>this is my <my-header-child></my-header-child> <div>"，
    components:{
      'my-header-child':myHeaderChild //局部组件
    }
}

new Vue({
  el:"#app"，
  components:{
    'my-header':myHeader
  }
})

```


  [1]: http://ouyzoz9zy.bkt.clouddn.com/17-9-26/51725301.jpg
  [2]: http://ouyzoz9zy.bkt.clouddn.com/17-9-26/23387547.jpg
  


  
所有的组件写在一个文件里面，这样显然是不利于管理的,于是我们分开文件编写组件。
 
``` javascript
import Vue from 'vue'
import App from './App'
 
new Vue ({
    el:"#app",
    render:function(h){
        return h(App)
    }
})

```
app.vue
``` javascript
<template>
   <div #app></div>
</template>

<script>
//返回一个对象
export default{
   data(){
        return{
            hello:"world"
        }
   }
}
</script>
```

- 组件引用
``` javascript
import componentA form "./components/a"

export default{
   //引入组件要在当前的组件注册。
   components:{
        // compontentA ES6的写法。
        compontentA : componentA
   }
}

//vue2.0中 组件写法灵活，component-a，也可以componentA。
//但是建议不建议使用驼峰写法，因为自定义事件还有组件传递数据是不支持这种写法的。
```

