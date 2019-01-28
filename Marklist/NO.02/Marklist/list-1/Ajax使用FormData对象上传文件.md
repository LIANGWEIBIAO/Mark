# Ajax使用FormData对象上传文件

> `FormData`对象，是可以使用一系列的键值对来模拟一个完整的表单，然后使用XMLHttpRequest发送这个"表单"。


#### 使用FormData对象添加字段方式上传文件

HTML代码
``` html
<div id="uploadForm">
    <input id="file" type="file"/>
    <button id="upload" type="button">upload</button>
</div>
```
这里没有<form>标签，也没有enctype="multipart/form-data"属性。

javascript代码
``` javascript
var formData = new FormData();
formData.append('file', $('#file')[0].files[0]);
$.ajax({
    url: '/upload',
    type: 'POST',
    cache: false,
    data: formData,
    processData: false,
    contentType: false
}).done(function(res) {
}).fail(function(res) {});
```

这里要注意几点：

 - `processData`设置为`false`。因为`data`值是`FormData`对象，不需要对数据做处理。
 - `cache设置为false，上传文件不需要缓存。`
 - `contentType设置为false。`


