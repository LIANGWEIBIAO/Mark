# 表单提交

``` javascript
<form action="http://localhost:8080/" method="get">
   用户：<input type="text" name="user" value="">
   密码：<input type="password" name="pass" value="">
   <input type="submit" value="提交">
</from>
```

### 上传文件

``` javascript
<form action="http://localhost:8080/" method="post" enctype="multipart/form-data">
   用户：<input type="text" name="user" value="">
   密码：<input type="password" name="pass" value="">
   <input type="submit" value="提交">
</from>
```
