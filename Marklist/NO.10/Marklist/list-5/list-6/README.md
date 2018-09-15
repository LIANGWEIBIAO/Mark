# Node.js使用Express.Router的方法
在实际开发中通常有几十甚至上百的路由，都写在 index.js 既臃肿又不好维护，这时可以使用 express.Router 实现更优雅的路由解决方案。

目录结构如下：
``` javascript
|- web
  |- router  
  | |- user.js 
  | |- article.js
  |- index.js
```

``` javascript
//article.js
const express = require('express');
const router = express.Router();

 router.get('1.html',(req,res)=>{
    res.send('我是文章').end();
});

router.get('/2.html',()=>{
   res.send('我也是文章').end();
})

module.exports = router;
```

``` javascript
//users.js
const express = require('express')
const router = express.Router()
 
router.get('/:name', function (req, res) {
 res.send('hello, ' + req.params.name)
})
 
module.exports = router
```

``` javascript
//index.js
const express = require('express');
const app = express()
const articleRouter = require('./routes/article');
const userRouter = require('./routes/users');
 
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/article', articleRouter);
 
app.listen(3000);

```

浏览器访问请求:

![image](https://files.jb51.net/file_images/article/201711/201711141022454.png) 

每个路由文件通过生成一个 express.Router 实例 router 并导出，通过 app.use 挂载到不同的路径。

在实际开发中推荐使用 express.Router 将不同的路由分离到不同的路由文件中。
