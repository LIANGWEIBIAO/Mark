# node操作文件
> 必须引入fs模块 const fs = require('fs');

### 读取文件
readFile(错误，文件名，回调)
``` javascript
fs.readFile("1.html",function(err，data){
     res.write(data);
     res.end
})
```

### 写文件
writeFile(文件名，内容，回调)

``` javascript
fs.writeFile("aaa.txt","我爱你"，function(err){
})
```