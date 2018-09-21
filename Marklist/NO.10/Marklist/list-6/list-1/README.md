# nodejs连接mongodb数据

> 连接数据需要下载mongodb模块。
``` javascript
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.get("/add",function(req,res){
    //url就是数据库的地址,test就是数据库名称
    var url = 'mongodb://localhost:20707/test'
    //MongoClient.connect表示连接数据库
    MongoClient.connect(url,function(err,db){
      console.log("数据库连接成功")；
      //插入数据
      db.collection("student").insertOne({
            'name':'xiaoming',
            'age':'18'
      },function(err,result){
        //插入之后做的事件，result表示插入结果.
        res.send('数据插入成功')
      })
      db.close();
    })
})

```