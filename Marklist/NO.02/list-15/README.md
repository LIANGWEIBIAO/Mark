# HTML5 FileReader获取图片变成base64，并异步上传到服务器

> HTML5定义了FileReader作为文件API的重要成员用于读取文件，根据W3C的定义，FileReader接口提供了读取文件的方法和包含读取结果的事件模型,并且可以使用FileReader把图片文件变成base64上传服务器。

原理：
1.使用FileReader 读取图片的base64编码
2.使用ajax，把图片的base64编码post到服务器。
3.根据接收到post的数据分析图片的类型(jpg,gif,png)，并把base64_decode后的数据生成对应类型的图片文件。

javascript代码
``` javascript
 var base64Images;
    uploadPicBtn.change(function() {
     
    //图片预览       
    var imgUrl = window.URL.createObjectURL(this.files[0])
    $(".t_pic").attr("src", imgUrl)

    var reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
        reader.onload = function(e) {
           base64Images = e.target.result;
         };
    })
```

