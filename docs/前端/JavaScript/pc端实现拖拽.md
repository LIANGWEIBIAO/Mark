# 拖拽原理

## 基本思路如下：

``` javascript
拖拽状态 = 0鼠标在元素上按下的时候{    
    记录下鼠标的x和y坐标    
    记录下元素的x和y坐标    
        
   } 
 鼠标在元素上移动的时候{    
    元素y = 现在鼠标y - 原来鼠标y + 原来元素y    
    元素x = 现在鼠标x - 原来鼠标x + 原来元素x    
    }     
 鼠标在任何时候放开的时候{    
    解除事件
}
```

## 代码：
``` javascript
elBox.onmousedown = function (e) {
    e.preventDefault();
    //记录下鼠标的x和y坐标 ,记录下元素的x和y坐标
    // 获取鼠标离元素的距离
    var mouseBoxleft = ev.clientX - this.offsetLeft;
    
    document.onmousemove = function (ev) {
        //移动元素x = 现在鼠标x - 鼠标离元素的距离x  
        var l = ev.clientX - mouseBoxleft;

        elBox.style.left = l + "px";


    }
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    };;
};
```

