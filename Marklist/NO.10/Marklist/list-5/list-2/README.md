# Express 路由
``` javascript
// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// 网站首页接受 POST 请求
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```
## express路由器传递的参数
``` javascript
var express = require('express');
var app = express();
// 地址栏： localhost:3000/user/app ;
app.get('/user/:name', function(req, res){
var param = req.params.name;
res.send('hello world' + param); // hello world app});
```