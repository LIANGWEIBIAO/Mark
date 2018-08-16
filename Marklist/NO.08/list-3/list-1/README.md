### vue 前端实现路由拦截

首先在定义路由的时候就需要多添加一个自定义字段requireAuth，用于判断该路由的访问是否需要登录。如果用户已经登录，则顺利进入路由， 
否则就进入登录页面。


``` javascript
const routes = [
    {
        path: '/',
        name: '/',
        component: Index
    },
    {
        path: '/repository',
        name: 'repository',
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Repository
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];
```

定义完路由后，我们主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断。
``` javascript
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
        //sessionStorage.getItem('token')
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
```

每个钩子方法接收三个参数： 
* to: Route: 即将要进入的目标 路由对象 
* from: Route: 当前导航正要离开的路由 
* next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。 
* next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。 
* next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from路由对应的地址。 
* next(‘/’) 或者 next({ path: ‘/’ }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
* 确保要调用 next 方法，否则钩子就不会被 resolved。
其中，to.meta中是我们自定义的数据，其中就包括我们刚刚定义的requireAuth字段。通过这个字段来判断该路由是否需要登录权限。需要的话，同时当前应用不存在token，则跳转到登录页面，进行登录。登录成功后跳转到目标路由。


登录拦截到这里就结束了吗？并没有。这种方式只是简单的前端路由控制，并不能真正阻止用户访问需要登录权限的路由。还有一种情况便是：当前token失效了，但是token依然保存在本地。这时候你去访问需要登录权限的路由时，实际上应该让用户重新登录。 
这时候就需要结合 http 拦截器 + 后端接口返回的http 状态码来判断。


