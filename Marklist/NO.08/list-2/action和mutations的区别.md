# action和mutations的区别    
### Action 类似于 mutation，不同在于：     
`Action` 提交的是 `mutation`，而不是直接变更状态. `Action` 是异步的，`mutation`是同步的。   `Action`提交的是`mutation`，而不是直接变更状态。    

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
### 改变值的话，引用store.js的increment方法
`this.$store.commit("increment")`
`this.$store.dispatch('userloaddatatable')`
