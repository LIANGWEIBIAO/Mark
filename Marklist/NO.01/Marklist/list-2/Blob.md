# Blob有关api解析  

## 前言   
Blob 是一个二进制大对象，可以存储二进制文件的容器。
在计算机中，blob常常是数据库中用来存储二进制文件的字段类型。
历史上，JavaScript无法处理二进制数据。如果一定要处理的话，只能使用charCodeAt()方法，一个个字节地从文字编码转成二进制数据，还有一种办法是将二进制数据转成Base64编码，再进行处理。这两种方法不仅速度慢，而且容易出错。`ECMAScript 5`引入了`Blob对象`，允许直接操作二进制数据。    
   

 

## Blob对象   
`Blob对象`衍生出一系列相关的`API`，这些对象继承`Blob对象`，用来操作文件。   

 - File对象：负责处理那些以文件形式存在的二进制数据，也就是操作本地文件；     
 - FileList对象：File对象的网页表单接口；   
 - FileReader对象：负责将二进制数据读入内存内容；   
 - URL对象：用于对二进制数据生成URL。        


### 生成Blob对象
生成Blob对象有两种方法：一种是使用`Blob构造函数`，另一种是对现有的`Blob对象`使用slice方法切出一部分。   
使用Blob构造函数生成blod，接受`两个参数`。    
第一个参数是一个包含实际数据的数组，     
第二个参数是数据的类型，这两个参数都不是必需的。    
```
var htmlParts = ["<a id=\"a\"><b id=\"b\">hey!<\/b><\/a>"];
var myBlob = new Blob(htmlParts, { "type" : "text\/xml" });
```    
下面是一个利用Blob对象，生成可下载文件的例子。    
```
var blob = new Blob(["Hello World"]);
 
var a = document.createElement("a");
a.href = window.URL.createObjectURL(blob);
a.download = "hello-world.txt";
a.textContent = "Download Hello World!";
 
body.appendChild(a);
```   
上面的代码生成了一个超级链接，点击后提示下载文本文件`hello-world.txt`，文件内容为`Hello World`。  

### Blob方法
Blob对象的slice方法，将二进制数据按照字节分块，返回一个新的Blob对象。     
```
var newBlob = oldBlob.slice(startingByte, endindByte);
```   
下面是一个使用`XMLHttpRequest对象`，将大文件分割上传的例子。     
```

function upload(blobOrFile) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/server', true);
  xhr.onload = function(e) { ... };
  xhr.send(blobOrFile);
}
 
document.querySelector('input[type="file"]').addEventListener('change', function(e) {
  var blob = this.files[0];
 
  const BYTES_PER_CHUNK = 1024 * 1024; // 1MB chunk sizes.
  const SIZE = blob.size;
 
  var start = 0;
  var end = BYTES_PER_CHUNK;
 
  while(start < SIZE) {
    upload(blob.slice(start, end));
 
    start = end;
    end = start + BYTES_PER_CHUNK;
  }
}, false);
 
})();

```    


### FormData 上传Blob 对象   
```
$.domLoad(function () {
    var formdata = new FormData();
    formdata.append("a","ffdfdf");
    formdata.append("file1",new Blob(["Hello World!"],{type:"text/plain"}));
    $.post("/home/SayHi",formdata,function (data) {
        console.log(data);
    });
});
```