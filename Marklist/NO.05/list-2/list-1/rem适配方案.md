# rem适配方案
> rem 表示:根元素`<html>`标签的 font-size 的大小。即根元素的 font-size 大小为 100px，则 1rem = 100px

## 不同分辨率适配！
具体来说，有的屏幕320px宽，有的屏幕640px宽，有的更宽，如果你写固定px，那么要么小的放不下，要么大的有大片空白。

怎么办？

如果元素固定占用屏幕空间（一般是指宽度而非高度，下同）的百分之xx就ok了。

比如320px的10%是32px，640px的10%是64px，

如果10个10%宽度的元素放在一起，那肯定就是100%，即挤满屏幕（宽度），不会超出，也不会留白。

> 简单理解：
rem 就是指屏幕宽度的百分之x；
或者说，n个rem = 用户可视区域100%宽度

注意，之所以不说高度，是因为宽度（x轴）满了后，y轴（高度）方向的内容可以通过滚动屏幕来查看

上实例：

1、设计师给一个750px宽度的设计图，

2、你假定75rem=100%宽度（这里是750px），那么1rem=10px；

3、你照着写出了静态页面，然后按照1rem=10px的比例，将设计图上的元素的大小，全部用rem写下；

4、完美，你写的静态页面在750px宽度的页面上正常展示了；


### rem怎么用？
- rem是css单位；
- 1rem的大小是通过html下的font-size这个css属性告诉浏览器的；
- 使用替换px所在的位置即可
- 假定你预设在设计稿的时候 1rem = 10px;

假设有一个类名为`ele`的元素宽度是20px，高度30px（设计稿），
那么你的css这么写就可以了；
``` css
html {
    font-size: 10px;
}

.ele {
    width: 2rem;
    height 3rem;
}
```
假设用750rem沾满屏幕，那么750rem=750px,1rem=1px就好啦，这样方便计算。但是rem的大小等于`html`字体大小，浏览器不支持1px的字体。


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


