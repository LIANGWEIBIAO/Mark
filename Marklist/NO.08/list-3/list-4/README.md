``` javascript
// 环境的切换
if (process.env.NODE_ENV == 'development') { 
 axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV == 'debug') { 
 axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') { 
 axios.defaults.baseURL = 'http://api.123dailu.com/';
}
```