# Vuex基础详解     
在SPA单页面组件的开发中 Vue的vuex和React的Redux 都统称为同一状态管理，个人的理解是全局状态管理更合适；简单的理解就是你在state中定义了一个数据之后，你可以在所在项目中的任何一个组件里进行获取、进行修改，并且你的修改可以得到全局的响应变更。     

## 安装
首先在 vue 2.0+ 在vue-cli项目中安装 vuex :
`npm install vuex --save`    

## store文件夹
在`src文件`目录下新建一个名为`store`的文件夹，为方便引入并在`store`文件夹里新建一个`index.js`,里面的内容如下:    
```javascript
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {     
    },
    mutations: {     
    },
    actions: {
    }
});
export default store;
```    
## 注入store对象
然后在 main.js里面引入store，然后再全局注入一下，这样一来就可以在任何一个组件里面使用this.$store了：    
```javascript
import store from './store'//引入store
 
new Vue({
  el: '#app',
  router,
  store,//使用store
  template: '<App/>',
  components: { App }
})
```   

## state对象
说了上面的前奏之后，接下来就是纳入正题了，就是开篇说的state的玩法。回到store文件的index.js里面，我们先声明一个state变量，并赋值一个空对象给它，里面随便定义两个初始属性值；然后再在实例化的Vuex.Store里面传入一个空对象，并把刚声明的变量state仍里面：    
```javascript
 
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 const state={//要设置的全局访问的state对象
     showFooter: true,
     changableNum:0
     //要设置的初始属性值
   };
 const store = new Vuex.Store({
       state
    });
 
export default store;
```    

## getters对象
实际上做完上面的三个步骤后，你已经可以用`this.$store.state.showFooter`或`this.$store.state.changebleNum`在任何一个组件里面获取`showfooter`和`changebleNum`定义的值了，但这不是理想的获取方式；vuex官方API提供了一个`getters`，官网说：有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数。减少我们对这些状态数据的操作

```javascript
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 const state={   //要设置的全局访问的state对象
     showFooter: true,
     changableNum:0
     //要设置的初始属性值
   };
const getters = {   //实时监听state值的变化(最新状态)
    getToDo (state) {
         return state.todos.filter(item => item.done === true)
         // filter 迭代过滤器 将每个item的值 item.done == true 挑出来， 返回的是一个数组
    }
    isShow(state) {  //方法名随意,主要是来承载变化的showFooter的值
       return state.showFooter
    },
    getChangedNum(){  //方法名随意,主要是用来承载变化的changableNum的值
       return state.changebleNum
    }
};
const store = new Vuex.Store({
       state,
       getters
});
export default store;
```      
取值`this.$store.getters.isShow` 和 `this.$store.getters.getChangedNum`

## mutations
光有定义的state的初始值，不改变它不是我们想要的需求，接下来要说的就是`mutations`了，`mutattions`也是一个对象，这个对象里面可以放改变state的初始值的方法，具体的用法就是给里面的方法传入参数state或额外的参数,然后利用vue的双向数据驱动进行值的改变，同样的定义好之后也把这个`mutations`扔进`Vuex.Store`里面，如下：    
```javascript
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 const state={   //要设置的全局访问的state对象
     showFooter: true,
     changableNum:0
     //要设置的初始属性值
   };
const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //承载变化的showFooter的值
       return state.showFooter
    },
    getChangedNum(){  //承载变化的changebleNum的值
       return state.changableNum
    }
};
const mutations = {
    show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showFooter = true;
    },
    hide(state) {  //同上
        state.showFooter = false;
    },
    newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
       state.changableNum+=sum;
    }
};
 const store = new Vuex.Store({
       state,
       getters,
       mutations
});
export default store;
```      
这时候你完全可以用 `this.$store.commit('show')` 或 `this.$store.commit('hide')` 以及 `this.$store.commit('newNum',6)` 在别的组件里面进行改变`showfooter`和`changebleNum`的值了，但这不是理想的改变值的方式；因为在 Vuex 中，mutations里面的方法 都是同步事务，意思就是说：比如这里的一个`this.$store.commit('newNum',sum)`方法,两个组件里用执行得到的值，每次都是一样的，这样肯定不是理想的需求

好在vuex官方API还提供了一个actions，这个actions也是个对象变量，最大的作用就是里面的Action方法 可以包含任意异步操作，这里面的方法是用来异步触发`mutations`里面的方法，`actions`里面自定义的函数接收一个context参数和要变化的形参，`context`与`store`实例具有相同的方法和属性，所以它可以执行`context.commit(' ')`,然后也不要忘了把它也扔进`Vuex.Store`里面：    
```javascript
 
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 const state={   //要设置的全局访问的state对象
     showFooter: true,
     changableNum:0
     //要设置的初始属性值
   };
const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //承载变化的showFooter的值
       return state.showFooter
    },
    getChangedNum(){  //承载变化的changebleNum的值
       return state.changableNum
    }
};
const mutations = {
    show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showFooter = true;
    },
    hide(state) {  //同上
        state.showFooter = false;
    },
    newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
       state.changableNum+=sum;
    }
};
 const actions = {
    hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('hide');
    },
    showFooter(context) {  //同上注释
        context.commit('show');
    },
    getNewNum(context,num){   //同上注释，num为要变化的形参
        context.commit('newNum',num)
     }
};
  const store = new Vuex.Store({
       state,
       getters,
       mutations,
       actions
});
export default store;
```   
而在外部组件里进行全局执行`actions`里面方法的时候，你只需要用执行    
`this.$store.dispatch('hideFooter')`或`this.$store.dispatch('showFooter')`    
以及`this.$store.dispatch('getNewNum'，6)` //6要变化的实参