# new运算符的工作原理

``` javascript
var new2 = function(func){
    var o = object.create(func.protype); //创建一个空对象
    var k = func.call(o) (改变上下文)
    if(typeof k == "object"){
           return k
    } else{
       return o;
    }
}
```