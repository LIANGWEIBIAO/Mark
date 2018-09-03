### 使用中间件处理POST请求

``` javascript
const body = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded{    //中间件处理
   limit: 2*1024*1024           //限制2M上传
})

app.use("/",function(req,res){
    console.log(req.body)        //POST
})
```

### 实现body-parser中间件原理

``` javascript
var app = express();
app.user(function(req,res,next){
    var str = '';
    req.on('data',function(data){
       str += data;
    })
    req.on('end',function(){
        req.body = str;
    })
    
    next();
})

app.use("/",function(req,res){
   console.log(req.body)
})
```