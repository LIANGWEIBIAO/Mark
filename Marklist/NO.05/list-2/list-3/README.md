# vw+rem进行移动端布局
根据CSS3规范,视口单位主要包括以下4个:

- vw : 1vw 等于视口宽度的1%
- vh : 1vh 等于视口高度的1%
- vmin : 选取 vw 和 vh 中最小的那个
- vmax : 选取 vw 和 vh 中最大的那个

![图片](https://img1.mukewang.com/5b2c75040001b89b06370332.jpg)

沿用rem布局方案，所有的布局元素及属性都用rem做单位，用vw单位给html设置font-size形成“流单位”，这样就不再需要JS来动态计算根元素字体大小。

``` css
//750px设计稿
html{
    font-size: 13.3333vw;//(100px/750px)*100vw
}
//640px设计稿
html{
    font-size: 15.625vw;//(100px/640px)*100vw
}
//1080px设计稿
html{
    font-size: 9.25926vw;//(100px/1080px)*100vw
}
```
