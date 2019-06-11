# vuex管理登陆状态  



login.js

```javascript
const result = await this.$api.json('userInfo');
	if(result.status === 1){
		this.login(result.data);
        uni.navigateBack();  
	}
}
```  

store/index.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
	},
	mutations: {
		login(state, provider) {

			state.hasLogin = true;
			state.userInfo = provider;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',  
			    data: provider  
			}) 
			console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({  
                key: 'userInfo'  
            })
		}
	},
})
```   

app.js
```javascript
import {
	mapMutations
} from 'vuex';
export default {
	methods: {
		...mapMutations(['login'])
	},
	onLaunch: function() {
		let userInfo = uni.getStorageSync('userInfo') || '';
		if(userInfo.id){
			//更新登陆状态
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					this.login(res.data);
				}
			});
		}
		
	}
}
```   