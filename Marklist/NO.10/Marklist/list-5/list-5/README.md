# app.use和app.get的区别及解析
>app.use(path,callback)中的callback既可以是router对象又可以是函数
app.get(path,callback)中的callback只能是函数

### 两者关系
use与get、post不同的是，他的网址不是精确匹配的。而是能够有文件夹拓展的。

``` javascript
比如：http://localhost:3000/admin/user

var express = require("express");
var app = express();
app.use("/admin", function (req, res) {
    console.log(req.originalUrl);
    console.log(req.baseUrl);
    console.log(req.path);
    res.send("你好");
});
app.listen(3000);


//效果如下
/admin/user
/admin
/user
```

app.get()看作app.use的特定请求(get)的简要写法。即

``` javascript
var express = require('express');
var app = express();
app.get('/hello',function(req,res,next){
    res.send('hello test2');

});
```

等同于
``` javascript
var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('hello world!');
});
app.use('/hello',router);

```

### 那么，什么时用app.use，什么时用app.get呢？

路由规则是`app.use(path,router)`定义的，`router`代表一个由`express.Router()`创建的对象，在路由对象中可定义多个路由规则。可是如果我们的路由只有一条规则时，可直接接一个回调作为简写，也可直接使用`app.get`或`app.post`方法。即

当一个路径有多个匹配规则时，使用`app.use`，否则使用相应的`app.method(get、post)`