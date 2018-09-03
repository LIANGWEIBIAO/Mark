# EJS模板渲染
``` javascript
 varexpress=require("express");
 varapp=express();
//设置渲染引擎
 app.set("viewengine",'ejs');
//设置模板目录为当前index.js目录同级views目录下的模板
 app.set("views",__dirname+"/views"); 
//设置使用当前目录
 app.use(express.static(__dirname));
 app.get("/",function(req,res){
//渲染页面并传值
 res.render('home.ejs',{name:"kid"});
});
 
//监听3000端口
 
app.listen(3000);
```