# VUE学习实践笔记(二)
--------------------------------

### 列表渲染
``` html
//只有偶数选项才渲染odd类名。
<li v-for="(item,index) in list" :class="{odd:index % 2}">
     {{item.name}} - {{imte.price}} - {{index}}
</li>     
```

### 自定义属性
类名可以是一个字符串也可以说一个对象
``` html
<a :class="classStr"></a>
<a :class="className"></a>

data(){
    className:{
      "red-font":true,
      "blue-font":true
    },
    classStr:"active"
}
```

### 自定义事件
自定义事件可以让子组件向父组件传递数据
``` javascript
//父组件
<comA @my-event="onComaMyEvent"> <comA>
import comA from comA;
export default{
   //parmFromA就是子组件传递的数据
   onComaMyEvent(parmFromA){
     console.log(parmFromA)
   }
}

//子组件
<button @click="emitMyEvent"> emit <button>
import comA from comA;
export default{
   emitMyEvent(parmFromA){
        //触发父组件自定义事件，并传递信息。
        this.$emit("my-event",'传递数据')
   }
}
```

### 计算属性
如果data中myValue改变了,那么就会触发计算属性里面的myValueNum函数。
可以添加或者过滤掉一些不必要的信息。
``` javascript
{{myValueNum}}
export default{
   data(){
     return {
        myValue:''
     }
   },
   computed:{
      myValueNum(){
         retuan this.myValue + 'end';
      }
   }
}
```
### 变量监听
变量变化的时候，都是执行特定的操作。

``` javascript
{{myVal}} 

//添加lazy后，输入完成后才监听。
<input type="text" v-model.lazy="query">

watch:{
   myVal:function(val,oldVal){
        console.log(val,oldVal)
   },
   query:function(val,oldVal){
        console.log(val,oldVal)
   }
}
```
