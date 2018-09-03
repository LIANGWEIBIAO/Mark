### Muter文件上传
``` javascript
const multer = require('multer')

var objMulter= multer({dest:'./www/upload'}) //指定上传路径；

app.user(objMulter.any())
app.post("/",function(req,res){
    //新文件名
    var filePath = req.files[0],path; //读取上传文件名
    var fileExt = path.parse(req.files[0].originalname).ext  //读取上传文件的扩展名;
    var newName = filePath + fileExt;  //拼接新的文件名字
    
    //更改名字
    fs.rename(req.files[0].path,newName,function(err){
       if(err)
          res.send('上传失败')
       else
          res.send('成功')
    })
})
```