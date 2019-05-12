# Fromdata上传文件

```html
<input type="file" class="file" id="uploadFile" multiple="multiple" accept="image/png, image/jpeg, image/gif, image/jpg">
```
 
```javascript
$('#uploadFile').on('change',function(){//当 input file 已经选中时触发js

    var formData = new FormData();//先实例化formdata
    var file     = this.files[0];//获取文件名
    var id       = this.id;//本input的id
    var url      = '/usercenter/business/upload';//接受处理本JS方法的路径

    formData.append("sfz", file);//append方法用于向formdata中注入内容

    $.ajax({
        type: "post",
        url: url,
        cache: false,
        contentType: false,
        processData: false,
        data: formData,//传过来
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            $('#'+id+"1").val(data.url);//在隐藏的hidden中返回文件的路径
　　　　　　$('#'+id+"2").attr('src',data.url);//改变当前的显示图片
        }
    });
})
```   

把图片变成base64，设置图片预览   

```
$('#uploadFile').on('change',function(){//当 input file 已经选中时触发js
    var formData = new FormData();//先实例化formdata
    var file     = this.files[0];//获取文件名
    formData.append("sfz", file);//append方法用于向formdata中注入内容
    
    var reader = new FileReader() //创建读取文件的对象
    
    //为文件读取成功设置事件 
    var imgFile;
    reader.onload=function(e) {
        alert('文件读取完成');
        imgFile = e.target.result;
        $("#imgContent").attr('src', imgFile);
        //上传文件
        //$.ajax({...})
    };
    
}
```
