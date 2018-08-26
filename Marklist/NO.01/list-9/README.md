# border-1px
解决移动端border问题。可定义任意单边框到全边框、圆角、虚线以及分割线等样式。




``` css
@media only screen and(-webkit-device-pixel-ratio:2)
  .trans{
         transform:scaley(0.5);
  }

@media only screen and(-webkit-device-pixel-tatio:3){
   .trans{
         transform:scaley(0.33333)
    }
}

使用
.box {
   width:100%;
   border:1px solid red;
}
<div  class="box   trans"><div>

```

## 在线预览

http://www.imys.net/demo/border-1px/
