### vue 前端实现http拦截

1.建立一个htttp.js
``` javascript
import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='';

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }
```    

2.在main.js中引入
``` javascript
import axios from 'axios'
import {post,fetch,patch,put} from './utils/http'
//定义全局变量
Vue.prototype.funcName = function (){}
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
```

最后在组件里直接使用
``` javascript
 mounted(){
    this.$fetch('/api/v2/movie/top250')
      .then((response) => {
        console.log(response)
      })
  },

其余的方法一样
```