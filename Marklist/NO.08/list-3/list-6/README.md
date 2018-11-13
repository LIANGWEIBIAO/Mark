### 动态传递（根据父组件中值的改变，props动态的改变子组件中的值）

父组件
``` vue
<template>
  <div>
    <input v-model="message">
    <!--将childmessage与message通过v-bind指令绑定!-->
    <child v-bind:childmessage="message"></child>
  </div>
</template>
<script>
  import child from "./components/child.vue"
  export default{
    //构建child组件
    components:{
      child
    },
    data(){
      return {
        //初始化message
        message:''
      }
    }
  }
</script>
```

2.子组件

``` vue
<template>
  <div>
    <p>childmessage is:{{childmessage}}</p>
  </div>
</template>
<script>
  export default{
    //将childmessage传递给child
    props:['childmessage']
  }
</script>
```