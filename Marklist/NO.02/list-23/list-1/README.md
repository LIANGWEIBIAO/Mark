# 拖拽原理

------
[demo](https://liangweibiao.github.io/v-mark/Marklist/NO.02/list-23/list-1/index.html)
#### 拖拽原理图

![](http://ouyzoz9zy.bkt.clouddn.com/17-10-10/38763052.jpg)

#### 代码实现

``` javascript
function draggie(oDiv) {
    var tLeft, tTop; //鼠标按下时相对盒子的位移
    oDiv = document.querySelector(oDiv);
    oDiv.onmousedown = function(e) {
        var _this = this;
        //鼠标按下时和选中元素的坐标偏移:x坐标
        K = e.clientX - _this.getBoundingClientRect().left; 
        document.onmousemove = function(e) {
            var J = _this.parentNode.getBoundingClientRect().left;
            var moveX = e.clientX - K - J,
            _this.style.left = moveX + 'px';

        }
        document.onmouseup = function() {
            document.onmousemove = null;
        }
    };
}

```

#### 拖拽的范围
![](http://ouyzoz9zy.bkt.clouddn.com/17-10-10/76987254.jpg)
#### 代码实现
``` html
<body>
    <div class="bigBox">
        <div class="box"></div>
    </div>
</body>
```
``` javascript
draggie('.box')

function draggie(oDiv) {
    var tLeft, tTop; //鼠标按下时相对盒子的位移
    oDiv = document.querySelector(oDiv);
    oDiv.onmousedown = function(e) {
        var _this = this;
        //鼠标按下时和选中元素的坐标偏移:x坐标
        tLeft = e.clientX - _this.getBoundingClientRect().left; 
        tTop = e.clientY - _this.getBoundingClientRect().top; 
        document.onmousemove = function(e) {
            var pleft = _this.parentNode.getBoundingClientRect().left;
            var pTop = _this.parentNode.getBoundingClientRect().top;
            var moveX = e.clientX - tLeft - pleft,
                moveY = e.clientY - tTop - pTop;
            if (moveX < 0) {
                moveX = 0;
            } else if (moveX > _this.parentNode.offsetWidth - _this.offsetWidth) {
                moveX = _this.parentNode.offsetWidth - _this.offsetWidth;
            }
            if (moveY < 0) {
                moveY = 0;
            } else if (moveY > _this.parentNode.offsetHeight - _this.offsetHeight) {
                moveY = _this.parentNode.offsetHeight - _this.offsetHeight;
            }

            _this.style.left = moveX + 'px';
            _this.style.top = moveY + 'px';

        }
        document.onmouseup = function() {
            document.onmousemove = null;
        }
    };
}
```