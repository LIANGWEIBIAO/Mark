# border-1px
解决移动端border问题。可定义任意单边框到全边框、圆角、虚线以及分割线等样式。



# 利用less解决1px边框

``` html
//使用
<ul>
   <li class='border-1px'></li>
<ul>

ul li{
  .border-1px(#f938ab);
}


```


``` less
.border-1px (@color) {
  position: relative;
  &::after{
    content:'';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid @color;
  }
}
@media(-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
  .border-1px{
    &:after{
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}
@media(-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
  .border-1px{
    &:after{
      -webkit-transform: scaleY(0.3333);
      transform: scaleY(0.3333);
    }
  }
}


```

## 在线预览

http://www.imys.net/demo/border-1px/
