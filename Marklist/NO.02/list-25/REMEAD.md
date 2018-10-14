# 最简单的AJAX

``` javascript
var xhr = new HMLHttpRequest();
xhr.open('get','1.txt',true)
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      alert(xhr.responseText)
    }
}

```