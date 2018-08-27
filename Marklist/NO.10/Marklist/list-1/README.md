var http = require('http');

//创建一个服务器，回调函数表示接收到请求之后做的时候。
var server = http.createServer((req, res) => {
    //设置响应头信息
    res.writeHead(200, {'Content-type':'text/html'});
    res.end('<h1>Hello NodeJS</h1>');
});

//监听端口
server.listen(3000,() => console.log('Server running on port 3000'));