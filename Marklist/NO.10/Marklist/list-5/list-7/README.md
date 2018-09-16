# cookie和sission的使用

cookie  :   保存在浏览器的一些数据，每次请求都会带到服务端。
sission ：  保存在服务端的一些数据  

``` javascript
maxAge存储时候是以毫秒计算。
const express = require('express')
const cookieParser = require('cookie-parser')
server.user('/',function(req,res){
    res.cookie('user','blue',{path:'/aaa'，maxAge:30*24*3600*1000}) //存取
    req.cookies('user')      //读取
    res.clearCookie('user') //删除
})
```