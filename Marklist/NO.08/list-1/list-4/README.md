# vuex学习实践笔记

--------------------------------------------

#### 什么是Vuex

Vuex是vue中集中管理状态的机制，让多个vue组件中共享状态，可以实现组件中通讯。
完整的应用Vuex开发的应用结构应该是这样的：
![此处输入图片的描述][1]

  
- State
``` javascript
//store为实例化生成的
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

```
这个store可以理解为一个容器，包含着应用中的state等。实例化生成store的过程是：
``` javascript
const mutations = {...};
const actions = {...};
const state = {...};

Vuex.Store({
  state,
  actions,
  mutation
});
```
- Actions

`Actions`也可以用于改变状态，不过是通过触发mutation实现的，重要的是可以包含异步操作。
``` javascript
//定义Actions
const actions = {
  actionName({ commit }) {
    //dosomething
    commit('mutationName')
  }
}
```
在组件中使用
``` javascript
//我是一个组件
export default {
  methods:{
     increment(){
        this.$store.dispatch('increment')
     }
  }
}
```

- Mutations

`Mutations`的中文意思是“变化”，利用它可以更改状态，本质就是用来处理数据的函数，其接收唯一参数值state。`store.commit(mutationName)`是用来触发一个mutation的方法。需要记住的是，定义的mutation必须是`同步函数`。
``` javascript
const mutations = {
  mutationName(state) {
    //在这里改变state中的数据
  }
}
```
在组件中触发：
``` javascript
//我是一个组件
export default {
  methods: {
    handleClick() {
      this.$store.commit('mutationName')
    }
  }
}
```
- Getters

有些状态需要做二次处理，就可以使用getters。通过`this.$store.getters.valueName`对派生出来的状态进行访问。
``` javascript
const getters = {
  strLength: state => state.aString.length
}
//上面的代码根据aString状态派生出了一个strLength状态
```
在组件中使用
``` javascript
//我是一个组件
export default {
  methods: {
    getValue() {
      this.$store.getters.strLength
    }
  }
}
```
- 简单的vuex配置

``` javascript
./store.js


Vue.use(Vuex);

var state = {
   count : 10
};

const mutations = { //同步操作
   increment(state){ //处理状态(数据)变化
      state.count++
   }
}

const actions = { //异步操作
   increment:({commint} => { //处理你要干什么，异步请求，判断，流程控制
         commit('increment')
   }),
   clickOdd:({commit,state} =>{
        if(state.count % 2 == 0 ){
           commit('increment') //偶数才增加。
        }
   })
}

const getters = {
    count(state){
       return state.count % 2 == 0 ？ '偶数'：'奇数'; //二次处理数据  
    }
}

```


  [1]: http://upload-images.jianshu.io/upload_images/112263-6fd755db3b988245.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240