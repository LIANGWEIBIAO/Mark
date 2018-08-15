# VUE过渡效果
vue中过渡效果通过transition标签来控制
![此处输入图片的描述][1]
``` html
<transition name="fade">
    <div> i am show </div>
</transition>

<transition name="my-strans">
    <div> i am show </div>
</transition>
```

``` css
.fade-enter-active,.fade-leave-active{
    transition:all .5s;
}
.fade-enter-active{
    opacity:1;
}
.fade-leave-active{
    opacity:0;
}

.my-strans-enter-active,.my-strans-leave-active{
    transition:all .5s;
}
.my-strans-enter{
    transform:translateY(-500px);
    opacity:1;
}
.my-strans-leave-active{
   transform:translateY(500px);
    opacity:0;
}

```

配合animate.css使用
``` html
// zoomInLeft , zoomOutRight。
<tranlate enter-active-class="bounceInLeft" leave-active-class="bounceOutRinght">
   <p v-show="show" class="animated"></p>
</tranlate>
```


  [1]: https://cn.vuejs.org/images/transition.png