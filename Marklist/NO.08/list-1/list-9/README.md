``` javascript
proxy: {
        '/api': {   //匹配所有以'/api'开头的请求路径
                target: 'http://wx.lxjjz.cn',  //代理目标的基础路径
                changeOrigin: true,          //支持跨域
                pathRewrite: {             //重写路径:去掉路径中开头的'/api'
                     '^/api': ''
                 }  
        }
}
```