# rem适配方案
> rem 表示:根元素`<html>`标签的 font-size 的大小。即根元素的 font-size 大小为 14px，则 1rem = 14px

## rem概念
假设750设计稿上有宽60px，高40px的元素
html的font-size设为100px，既1rem = 100px。
由于1个逻辑像素等于2个物理像素，css中宽30px，高20px；
CSS样式就这样设置如下 ↓
``` css
width: 0.03rem;
height: 0.02rem;
```

## 设计rem
通过以上知识我们了解到rem的换算，接下来我们用js动态设计rem的字体大小。
核心代码
``` javascript
var docEl = document.documentElement,
docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
```
#### 这里为什么要是`100 * (clientWidth / 750)`
1.因为这里是作为一个基础数值，换个方向去想，这里先不乘以100以免产生误解。
例如：设计稿宽度是750px，有一个元素设计稿上的宽度是50px，设备物理宽度是375px,那么我们在页面上应该设置宽度为 `width:50rem`，相当于宽度是：50*（375/750）=25px；这里能正确算出在375px的设备上刚好占一半,其实可以想象为 rem=（375/750）,有了这个公式设计稿测量的数值等于css中rem数值。

2.一般浏览器的最小字体是12px，如果html的font-size=（375/750）px，相当于font-size=0.5px，那么这个数值就小于12px，会造成一些计算的错误，和一些奇怪的问题，*100后，font-size是50px，就可以`解决这种字体小于12px的问题`。


### 封装代码
``` css
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui">
```
``` javascript
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```

- [链接](https://segmentfault.com/a/1190000007276635)


