# javascript ——  实现文件的上传与压缩


###  一、文件上传
    因为前端上传文件是必须通过form表单的，不能使用ajax，这样的话上传文件就不能异步了，我们可以利用H5新api做到表单异步上传。
#### FormData的运用
``` javascript
//这是一个响应上传文件夹的函数
function handleUpload() {
    //初始化一个FormData对象
    var formData = new FormData();
    //获取到<input>传过来的文件
    //files为一个数组
    var files = upload.querySelector('#file').files;

   var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;


    if ( files.length === 0 ) {
        alert("请先选择文件夹");
        return;
    } 

    for (var i = files.length - 1; i >= 0; i--) {
       if (!rFilter.test(files.type)) {
          alert("文件格式必须为图片");
          return;
       }
       if (files.size > iMaxFilesize) {
           alert("图片大小不能超过2M");
           return;
       }

        formData.append( "file" + i,  files[i] );
        //循环添加文件到FormData对象中
    }

    formData.append('files_len', files.length );//添加任意键值对
    var xhr = new XMLHttpRequest();
    xhr.open( "post", "upload.php", true );
    xhr.onreadystatechange = function() {

        if ( xhr.readyState === 4 ) {
            if ( Number(xhr.responseText) === 200 ) {
                alert( "上传成功" );
            } else {
                console.log( xhr.responseText )
            }
        }
    }

    xhr.send( formData );
}
```

###  二、canvas压缩图片
　　canvas的toDataUrl方法可以将内容导出为base64编码格式的图片，采用base64编码将比源文件大1/3，但是该方法可以指定导出图片质量，所以前端可实现上传图片的压缩。先通过fileApi拿到本地图片地址，然后新建一个Img元素，图片绘制到canvas中后再将其导出（压缩）。例如：
　　
```javascript
$(':file').on('change',function(){
    var file = this.files[0];
    var url = webkitURL.createObjectURL(file);//图片预览
 
    //生成图片
    var $img = new Image();
    $img.onload = function() {

        var canvas = document.createElement("canvas"), //创建canvas元素
                width=$img.width, //确保canvas的尺寸和图片一样
                height=$img.height;
            canvas.width=width;
            canvas.height=height;
            canvas.getContext("2d").drawImage(Img,0,0,width,height); //将图片绘制到canvas中
            dataURL=canvas.toDataURL('image/jpeg'); //转换图片为dataURL

        //发送到服务端
        $.post('upload.php',{formFile : dataURL.substr(22) },function(data){
            $('#php').html(data);
        });
 
    }
    $img.src = url;
});
```

### 文件上传参考文章
  - [用canvas的toDataURL()将图片转为dataURL(base64)](http://www.jianshu.com/p/17d7e5ddf10a)
  - [jquery.from.js-支持进度条](http://blog.csdn.net/qq_28602957/article/details/53612885)
  - [webuploader](http://fex.baidu.com/webuploader/)