# 探讨javascript函数节流


###  一、javascript函数节流简介
我在这里简单举例说明一下函数节流吧！例如当我们使用。
``` javascript
$(window).resize(function(){
    console.log("haorooms window resize");
})
```        
会发现：
![此处输入图片的描述][1]


  [1]: http://www.haorooms.com/uploads/images/windowresize.png
  
  
这里会输出好多次。我们简单的缩小一下窗口，就会不停的触发！

这样在div很多的时候，页面不停重绘！为了避免这种情况，我们可以用函数节流的方式。基本的思想是：第一次调用函数的时候，我们创建一个定时器，在指定时间间隔之后运行代码，第二次调用的时候，会清楚前一个定时器，并重新设置一个。如果前一个定时器已经执行过了，那么这个操作就没有有意了，如果定时器尚未执行，就会将其替换为一个新的定时器。目的是在执行函数停止了一段时间之后再执行。  

#### 函数节流编写
编写js函数节流的方式很多，在这里我只列举常用的一种方法;
``` javascript
function throttle(method,context){
    clearTimeout(method.tId);
        method.tId=setTimeout(function(){
        method.call(context);
    },100);
}
```     
我们如下使用
``` javascript
 function resizeDIv(){
    console.log("haorooms")
}

$(window).resize(function(){
    throttle(resizeDIv)
})
``` 
