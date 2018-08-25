# vue-router学习实践笔记

####  路由的用法

``` javascript
//router.js
import Vue from 'vue'
import  VueRouter from 'vue-router';
Vue.use(VueRouter);

const myIndex = resolve => require(['../my-index.vue'], resolve);
const myInfo = resolve => require(['../my-info.vue'], resolve)

const routes = [
  {
    path: '/myIndex',
    name: "myIndex",
    component: myIndex,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/myInfo',
    name: "myInfo",
    component: myInfo,
    meta: {
      requireAuth: true
    }
  }
  
const router = new VueRouter({
  routes
})
export default router;


```

``` javascript
//app.js 

import router from './js/router'

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        // 对路由进行验证
        if(store.getters.authorizd) { // 已经登陆
            next()
        }else{
            // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
            next({path:'/login',query:{ referrer: to.fullPath} })  
        }
    } else {
        next();
    }
})
router.afterEach((router) => {
    if (router.name == "myIndex") {
        store.commit('SAVE_TITLE', {
            text: "个人中心"// 设置标题
        })
    }
}
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
```

#### 设置路由渲染区域
``` html
<template>
     <router-view></router-view>
     <router-link :to="{path:'/apple'}"> to Apple </router-link>
     <router-link :to="{name:'applePage'}"> to Apple </router-link>
</template>
```
``` javascript
import Router from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'

Vue.use(Router);
//localhost:8080/apple/green/detail/3
let router = new Router({
    //1.映射关系
    routers:[
        {
           path:'/',
           redirect:'/apple' //路由重定向
        },
        {
          path:'/apple/:color/detail/:type',
          name:'applePage',
          component:Apple
        },
        {
           path:'/banana',
           component:'Banana'
        }
    ]
})

new Vue({
   el:'#app',
   router:router,
   components:{App}
})
```

- 获取参数
``` javascript
this.$route.params

//或者
{{ $router.params.color }}
```

- 命名视图
``` javascript
import Apple from './Apple'
import RedApple from './RedApple'

<router-view name="viewA"></router-view>
<router-view name="viewB"></router-view>

let router = new Router({
    //1.映射关系
    routers:[
        {
          path:'/apple/:color/detail/:type',
          name:'applePage',
          component:{
               viewA:Apple,
               viewB:RedApple,
          },
          name:'applePalge'
        }
    ]
})
```

``` javascript
 {
    path: '/',
    component: Home,
    name: '信息管理',
    menuShow: true,
    iconCls: 'iconfont icon-books',
    children: [
      {path: '/sellbill',   component: sellbill,   name: '卖票信息', menuShow: true, meta:{requireAuth: true }},
      {path: '/buybill',    component: buybill,    name: '买票信息', menuShow: true, meta:{requireAuth: true }},
      {path: '/changebill', component: changebill, name: '换票信息', menuShow: true, meta:{requireAuth: true }},
      {path: '/bill/editsellbill', component: editsellbill, name: '编辑卖票信息', menuShow: false, meta:{requireAuth: true}}
    ]
  }
  ```
