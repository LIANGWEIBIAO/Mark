# JS实现最简单的图片懒加载

------------------------------------------------
### 完整demo
[在这里哦](https://liangweibiao.github.io/v-mark/Marklist/NO.02/list-21/index.html)


### 懒加载原理
`<img>`标签有一个属性是`src`，用来表示图像的`URL`，当这个属性的值不为空时，浏览器就会根据这个值发送请求。如果没有src属性，就不会发送请求。

嗯？貌似这点可以利用一下？

我先不设置src，需要的时候再设置？

nice，就是这样。

我们先不给`<img>`设置src，把图片真正的URL放在另一个属性`data-src`中，在需要的时候也就是图片进入可视区域的之前，将URL取出放到src中。

### HTML结构
``` html
<div class="container">
  <div class="img-area">
    <img class="my-photo" alt="loading" data-src="./img/img1.png">
  </div>
  <div class="img-area">
    <img class="my-photo" alt="loading" data-src="./img/img2.png">
  </div>
</div>
```

仔细观察一下，`<img>`标签此时是没有src属性的，只有alt和data-src属性。
>alt 属性是一个必需的属性，它规定在图像无法显示时的替代文本。
data-* 全局属性：构成一类名称为自定义数据属性的属性，可以通过`HTMLElement.dataset`来访问,JQ可以通过`$("div").data("greeting")`方法取值。

### 如何判断元素是否在可视区域

通过getBoundingClientRect()方法来获取元素的大小以及位置，MDN上是这样描述的：

这个方法返回一个名为ClientRect的DOMRect对象，包含了top、right、botton、left、width、height这些值。

MDN上有这样一张图：

![此处输入图片的描述][2]


  
可以看出返回的元素位置是相对于左上角而言的，而不是边距。

我们思考一下，什么情况下图片进入可视区域。

假设`const bound = el.getBoundingClientRect();`来表示图片到可视区域顶部距离；
并设`const clientHeight = window.innerHeight;`来表示可视区域的高度。

随着滚动条的向下滚动，`bound.top`会越来越小，也就是图片到可视区域顶部的距离越来越小，当`bound.top===clientHeight`时，图片的上沿应该是位于可视区域下沿的位置的临界点，再滚动一点点，图片就会进入可视区域。

也就是说，在`bound.top<=clientHeight`时，图片是在可视区域内的。

我们这样判断：

``` javascript
function isInSight(el) {
  const bound = el.getBoundingClientRect();
  const clientHeight = window.innerHeight;
  //如果只考虑向下滚动加载
  //const clientWidth = window.innerWeight;
  return bound.top <= clientHeight + 100;
}
```

这里有个+100是为了提前加载。

经提醒。。这个方法性能

加载图片
页面打开时需要对所有图片进行检查，是否在可视区域内，如果是就加载。

``` javascript
function checkImgs() {
  const imgs = document.querySelectorAll('.my-photo');
  Array.from(imgs).forEach(el => {
    if (isInSight(el)) {
      loadImg(el);
    }
  })
}

function loadImg(el) {
  if (!el.src) {
    const source = el.dataset.src;
    el.src = source;
  }
}
```

这里应该是有一个优化的地方，设一个标识符标识已经加载图片的index，当滚动条滚动时就不需要遍历所有的图片，只需要遍历未加载的图片即可。


  [1]: %E6%87%92%E5%8A%A0%E8%BD%BD
  [2]: http://ouyzoz9zy.bkt.clouddn.com/17-10-1/84919660.jpg