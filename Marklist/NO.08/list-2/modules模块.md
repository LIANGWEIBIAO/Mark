# Vuex modules模块   
因为在大多数的项目中，我们对于全局状态的管理并不仅仅一种情况的需求，有时有多方面的需求，比如写一个商城项目，你所用到的全局state可能是关于购物车这一块儿的也有可能是关于商品价格这一块儿的；像这样的情况我们就要考虑使用vuex中的 modules 模块化了，具体怎么使用modules呢？咱们继续一步一步的走： 

## 项目结构
store/index.js    
```javascript
import Vue from 'vue';
import Vuex from 'vuex';
import user from './user.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {     
    },
    mutations: {     
    },
    actions: {
    },
    modules: {     
        user       
    }
});
export default store;
```   

store/user.js    
```javascript
import axios from 'axios'
import Vue from 'vue'  
export default {
    state: { 
        tableDataUser:[],//用户列表数据 
        userpagesize:10,//table每页显示条数
        userpageindex:1,//table当前页  
        usertotal: 1 //总条数  
    },
    getters: {
        tableDataUser:state=>state.tableDataUser,//用户列表数据
        userpagesize:state=>state.userpagesize,//table每页显示条数
        userpageindex:state=>state.userpageindex,//table当前页
        usertotal:state=>state.usertotal//总条数   
    },
    mutations: { 
        //用户列表数据
        USER_LOAD_DATA(state, {tableDataUser,userpagesize,userpageindex,usertotal}) {
            state.tableDataUser = tableDataUser
            state.userpagesize=userpagesize
            state.userpageindex=userpageindex
            state.usertotal=usertotal     
        }       
    },
    actions: {  
        //加载用户列表数据 
        userloaddatatable({commit}, {path,pagesizeA,pageindexA}){
                var params = {             
                    nickname: namesea,//员工名称查询
                    pageSize: pagesizeA, //每页条数
                    pageNumber:pageindexA, //页数        
                };        
            Vue.axios.get(path,{params}).then(res => {
                if (res.data.retCode == 200) {
                    commit("USER_LOAD_DATA", {
                        tableDataUser: res.data.data.records,
                        usertotal: res.data.data.total,
                        userpagesize: res.data.data.size,
                        userpageindex: pageindexA,
                    })
                }
            })
        }       
    }
}
```
