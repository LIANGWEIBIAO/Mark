# URL模块
> 该模块包含用以 URL 解析的实用函数
``` javascript
//调用URL模块
var url = require('url')
```

实例1，仅指定url字符解析成对象
``` javascript
var url=require('url');
var url1='http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two';
var result=url.parse(url1);
 { protocol: 'http:',    //使用协议
   slashes: true,        //
   auth: null,		   // 验证信息
   host: 'calc.gongjuji.net', //全小写的主机部分的URL，包括端口信息。
   port: null,				//端口
   hostname: 'calc.gongjuji.net',//小写的主机部分的主机
   hash: '#one#two',			   //页面锚点参数部分
   search: '?name=zhangsan&age=18',//查询参数部分，带？
   query: 'name=zhangsan&age=18',  //查询参数部分
   pathname: '/byte/',			 //目录部分
   path: '/byte/?name=zhangsan&age=18',//目录+参数部分
   href: 'http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two' 最初解析的完整的网址。双方的协议和主机是小写。
 }
console.info(result);

```

实例2 ，指定是否解析参数部分成对象（把参数变成对象方便使用）

``` javascript

//参数解析
var result2=url.parse(url1,true);
{
    query: { name: 'zhangsan', age: '18' }, //页面参数部分，已经解析成对象了
}
```