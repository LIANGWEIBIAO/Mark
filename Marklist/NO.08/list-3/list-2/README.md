### vue 前端实现http拦截

要想统一处理所有http请求和响应，就得用上 axios 的拦截器。通过配置http response inteceptor，当后端接口返回401，让用户重新登录。

建立一个htttp.js
``` javascript
// http request 拦截器（所有发送的请求都要从这儿过一次）
axios.interceptors.request.use(
    const token = sessionStorage.getItem("token"); //获取存储在本地的token
    config.data = JSON.stringify(config.data);
    config => {
        判断是否存在token，如果存在的话，则每个http header都加上token
         if (token) {
            config.headers.Authorization = "Token " + token; //携带权限参数
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
 
// http response 拦截器（所有接收到的请求都要从这儿过一次
//两个参数是回调函数
axios.interceptors.response.use(
    response => {
    if(response.status == 401) {
    //401是我和后台约定的权限丢失或者权限不够返回的状态码
    sessionStorage.setItem("user_token",'')
    sessionStorage.setItem("LoginUser",'{}')
            router.replace({
                path: './login',
                query: {redirect: router.currentRoute.fullPath} 
                //登录成功后跳入浏览的当前页面
            })
        }
        return response;
    },
     error => {
        return Promise.reject(error.response.data)
    }
);
export default axios;
```    