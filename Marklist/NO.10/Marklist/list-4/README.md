# EJS模板渲染
``` javascript
var ejs = require('ejs');
var ejs = require('fs');
var ejs = require('http');

var server = http.createServer(function(req,res){
    fs.readFile("./views/index.ejs",function(err,data){
       var template = data.toString();
       var dictionary = {a:6};
       var html = ejs.render(tmplate,dictionary);
       
       res.writeHead(200,{"Content-type":"text/html"})
       res.end(html);
    })    
})

server.listen(80,"127.0.0.1");
```