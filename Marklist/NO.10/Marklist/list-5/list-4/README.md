# Express 中使用模板引擎

需要在应用中进行如下设置才能让 Express 渲染模板文件：

views, 放模板文件的目录，比如： app.set('views', './views')
view engine, 模板引擎，比如： app.set('view engine', 'jade')
然后安装相应的模板引擎 npm 软件包。

然后安装相应的模板引擎 npm 软件包。
``` javascript
$ npm install jade --save
```

一旦 view engine 设置成功，就不需要显式指定引擎，或者在应用中加载模板引擎模块，Express 已经在内部加载，如下所示。

``` javascript
app.set('view engine', 'jade');
```

在 views 目录下生成名为 index.jade 的 Jade 模板文件，内容如下：

``` javascript
html
  head
    title!= title
  body
    h1!= message
```

然后创建一个路由渲染 index.jade 文件。如果没有设置 view engine，您需要指明视图文件的后缀，否则就会遗漏它。

``` javascript
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
```

此时向主页发送请求，“index.jade” 会被渲染为 HTML。