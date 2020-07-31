# File、FileReader对象
## file对象  
`File`对象可以用来获取某个文件的信息，还可以用来读取这个文件的内容。通常情况下，`File`对象是来自用户在一个 `<input> `元素上选择文件后返回的`FileList`对象

   
### 该对象有以属性： 

 - `name`：文件名，该属性只读。
 - `size`：文件大小，单位为字节，该属性只读。
 - `type`：文件的MIME类型，如果分辨不出类型，则为空字符串，该属性只读。
 - `lastModified`：文件的上次修改时间，格式为时间戳。
 - `lastModifiedDate`：文件的上次修改时间，格式为Date对象实例。

 
###  通过FileList访问File对象

用户在选择一个或者多个文件后，可以通过File API访问这些`File`对象，这些对象被包含在一个`FileList`对象中。每一个`<input type="file">`都有一个`files`属性，通过`Element.files`可以返回`FileList`对象。

```
<body>
    <input type="file" id="fileInput" name="file" multiple="multiple" accept="image/*">

    <script>
        var fileInput = document.querySelector("#fileInput");
        fileInput.addEventListener("change", function (event) {
            var file = fileInput.files[0];
            console.log(fileInput.files)
        }, false)
    </script>
</body>
```     

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/20170412131045937.png)    

`files`有一个`length`属性和`item`方法，可以通过`files[index]`或者`files.item(index)`获取我们选择的file对象。每个File对象中包含了文件的一些详细信息：    

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/20170412131045938.png)   
根据size属性换算为我们习惯的文件大小单位：    
```javascript
function bytesToSize(bytes) {
    if (bytes === 0) return '0 B';  
    var k = 1024,
        sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    // Math.log() 返回数字的自然对数 log(b)/log(a)=loga(b)) 换底公式 log以a为底b的对数
    // Math.floor(x) -- 向下取整，返回小于或等于x的值
    // Math.pow(x,y) -- 返回以x的y次幂，等同于x^y的数值表达式
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
}
```    
## FileReader对象   
`FileReader API`用于读取文件，即把文件内容读入内存。它的参数是`File`对象`或`Blob`对象。    对于不同类型的文件，FileReader提供不同的方法读取文件。    

 - `readAsDataURL(Blob|File)`：返回一个基于`Base64`编码的data-uri对象。  
 - `readAsBinaryString(Blob|File)`：返回二进制字符串，该字符串每个字节包含一个0到255之间的整数。   
 - `readAsText(Blob|File, opt_encoding)`：返回文本字符串。默认情况下，文本编码格式是`UTF-8`，可以通过可选的格式参数，指定其他编码格式的文本。
 - `readAsArrayBuffer(Blob|File)`：返回一个ArrayBuffer对象。   
 
`readAsText`方法用于读取文本文件，它的第一个参数是`File`或`Blob`对象，第二个参数是前一个参数的编码方法，如果省略就默认为UTF-8编码。该方法是异步方法，一般监听onload件，用来确定文件是否加载结束，方法是判断`FileReader`实例的`result`属性是否有值。其他三种读取方法，用法与`readAsText`方法类似。  

```javascript
var reader = new FileReader();
reader.onload = function(e) {
  var text = reader.result;
}
 
reader.readAsText(file, encoding);
```

`readAsDataURL`方法返回一个data URL，它的作用基本上是将文件数据进行Base64编码。你可以将返回值设为图像的src属性。   

```javascript
var file = document.getElementById('destination').files[0];
if(file.type.indexOf('image') !== -1) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var dataURL = reader.result;
  }
  reader.readAsDataURL(file);
}
```    

`readAsBinaryString`方法可以读取任意类型的文件，而不仅仅是文本文件，返回文件的原始的二进制内容。这个方法与`XMLHttpRequest.sendAsBinary`方法结合使用，就可以使用JavaScript上传任意文件到服务器。   
```javascript
var reader = new FileReader();
reader.onload = function(e) {
  var rawData = reader.result;
}
reader.readAsBinaryString(file);

```

`readAsArrayBuffer`方法读取文件，返回一个类型化数组（ArrayBuffer），即固定长度的二进制缓存数据。在文件操作时（比如将JPEG图像转为PNG图像），这个方法非常方便。   
```javascript
var reader = new FileReader();
reader.onload = function(e) {
  var arrayBuffer = reader.result;
}
 
reader.readAsArrayBuffer(file);
```   




除了以上四种不同的读取文件方法，FileReader API还有一个abort方法，用于中止文件上传。    

```javascript
var reader = new FileReader();
reader.abort();
```

### FileReader回调函数

`FileReader`对象采用异步方式读取文件，可以为一系列事件指定回调函数。    

 - `onabort`方法：读取中断或调用reader.abort()方法时触发。
 - `onerror`方法：读取出错时触发。
 - `onload`方法：读取成功后触发。
 - `onloadend`方法：读取完成后触发，不管是否成功。触发顺序排在 onload 或 onerror 后面。
 - `onloadstart`方法：读取将要开始时触发。
 - `onprogress`方法：读取过程中周期性触发。    


onload事件的回调函数接受一个事件对象，该对象的`target.result`就是文件的内容。    下面是一个使用`readAsDataURL`方法，为`img`元素添加`src`属性的例子。 

```javascript
var reader = new FileReader();
reader.onload = function(e) {
  document.createElement('img').src = e.target.result;
};
reader.readAsDataURL(f);
```









  
