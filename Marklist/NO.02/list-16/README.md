# 页面触底自动加载数据

---
> 首先理解三个dom元素，分别是：clientHeight、offsetHeight、scrollTop。

`clientHeight`：这个元素的高度，占用整个空间的高度，所以，如果一个div有滚动条，那个这个高度则是不包括滚动条没显示出来的下面部分的内容。而只是单纯的DIV的高度。

`offsetHeight`：是指元素内容的高度。依照上面的，那这个高度呢就是DIV内部的高度，包括可见部分及以滚动条下面的不可见部分。

`scrollTop`：这个是什么呢？他可以理解为滚动条可以滚动的长度。

举例，如果一个DIV高度是400px（即clientHeight为400），而里面的内容是一个很长的列表，内容的高度是1000px（即offsetHeight为1000）。那么，可见部分我们看到400px，1000px的内容中还有600px不可见。而这不可见的部分呢，正是我们通过拉动滚动条才能把这一部分显示出来。你如果滚动条不拉动，此时scrollTop为0，如果你把滚动条拉到底，显示出列表最下面的部分，此时，scrollTop为600。　所以scrollTop的取值区间为[0, 600]。　所以这个600可以理解为滚动条可以滚动的长度。

理解完上面的这个概念之后。要判断是否滚动到底部就很好做了。

首先，我们拉动滚动条，从最上面拉到最下面，变化的是scrollTop的值，而这个值是有一个区间的。

这个区间是：[0, (offsetHeight - clientHeight)]

即，滚动条拉动的整个过程的变化在 0 到 (offsetHeight – clientHeight) 范围之内。

1、判断滚动条滚动到最底端：scrollTop == (offsetHeight – clientHeight)

图文理解
![此处输入图片的描述][1]


  [1]: http://ouyzoz9zy.bkt.clouddn.com/17-8-20/44234742.jpg
  
 判断div是否触底代码
``` javascript
scrollBottomTest = function() {
    $(".list-box").scroll(function() {
        var $this = $(this),
            nDivHight = $(this).height(), //可见高度  
            nScrollTop = $(this)[0].scrollTop, //滚动高度(卷去的高度，一直在变)
            nScrollHight = $(this)[0].scrollHeight; //内容高度  
        if (nScrollTop + nDivHight >= nScrollHight) { 
            //nScrollTop + nDivHight >= nScrollHight-100,到达底部100px时,加载新内容 
            // 这里加载数据..  
            console.log("11")
        }
    });
}
scrollBottomTest();
```

jQuery判断div滚动到底部，并加载数据的示例，防止重复加载

``` javascript
var msg_list_loading = false;  
$('.msg_list').on('scroll', function(){  
    if ( ! msg_list_loading ){  
        load_more_msg();  
    }  
})  
      
function load_more_msg(){     
    var msg_list = $('.msg_list');  
    if ( msg_list.height() + msg_list[0].scrollTop >= msg_list[0].scrollHeight - 60 ) {   
        msg_list_loading = true;  
        msg_list.append('<div class="loading"></div>');  
        $.get('ajax_data.html').done(function( data ){   
            msg_list.find(".loading").remove();  
            msg_list.append( data );  
            msg_list_loading = false;  
        });  
    }   
}   
```

[判断div触底demo](https://liangweibiao.github.io/v-mark/Marklist/NO.14/list-8/index.html)