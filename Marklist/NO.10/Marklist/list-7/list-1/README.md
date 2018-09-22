# Mongoose快速入门

### 1.1安装 引用
启动数据库命令
``` javascript
mongod --dbpath=D:\Data\mongodb\_data
```

–dbpath：指定数据存储位置

连接本地的test数据库

``` javascript
var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://127.0.0.1:27017/test");

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {
   	console.log("------数据库连接成功！------");
});
```

### 示例
  - Schema可以说是数据属性模型(传统意义的表结构)，又或着是"集合"的模型骨架,用来约束数据类型。
  - Model ：通过Schema构造而成，除了具有Schema定义的数据库骨架以外，还可以具体的操作数据库。

``` javascript
//引入数据库模块

	var mongoose = require("mongoose");

	//连接本地名为test的数据库，格式
	//var db = mongoose.connect("mongodb://user:pass@localhost:port/database");
	var db = mongoose.connect("mongodb://127.0.0.1:27017/test");

	//用Schema定义集合结构

	var TestSchema = new mongoose.Schema({
    	name : { type:String },
    	age  : { type:Number, default:0 },
    	email: { type:String },
    	time : { type:Date, default:Date.now }

	});

	//创建model,在内存中创建结构为TestSchema名为test1的集合

	var TestModel = db.model("test1", TestSchema );
    // var TestModel = db.model("test1", TestSchema ,'test'); 第三个参数操作test表而不是test1,一个映射关系。

	//插入数据到内存中的test1集合

	var TestEntity = new TestModel({
    	name : "helloworld",
    	age  : 28,
    	email: "helloworld@qq.com"	
	});

	//将test1写入到数据库中

	TestEntity.save(function(error,doc){
  	  if(error){
       	  console.log("error :" + error);
       }else{
      	 console.log(doc);
       }
   });
```

      
 
