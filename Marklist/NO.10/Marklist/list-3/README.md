# GET/POST请求

在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交。

表单提交到服务器一般都使用 GET/POST 请求。

## 获取GET请求内容

由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。

获取 URL 的参数
我们可以使用 url.parse 方法来解析 URL 中的参数，代码如下：
``` javascript
var http = require('http');
var url = require('url');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.end();
 
}).listen(3000);
```

## 获取POST请求内容
相比较GET请求，POST请求比较复杂。因为NODE。js认为，使用POST请求时 ,数据量会表较多，为了效率，它将数据拆分成为了从多的数据块(chunk)，然后通过特定的事件，将这些小数据块有序传递给回调函数。
``` javascript
var http = require('http');
var querystring = require('querystring');
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
       
    } 
    res.end();
  });
}).listen(3000);
```

querystring模块一般是对http请求所带的数据进行解析
``` javascript
querystring.parse("name=whitemu&sex=man&sex=women");

return:
{ name: 'whitemu', sex: [ 'man', 'women' ] }

```