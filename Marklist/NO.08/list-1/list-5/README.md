# VUE过渡效果
vue中过渡效果通过transition标签来控制  
![132](https://cn.vuejs.org/images/transition.png)     

``` html
<transition name="fade">
    <div> i am show </div>
</transition>

<transition name="bounce">
    <div> i am show </div>
</transition>
```

``` css
.fade-enter-active,.fade-leave-active {
  opacity: 1;
  transition: opacity linear 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .3s;
}

@keyframes bounce-in {
  0% {
    transform: scale(1.185);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.85);
    opacity: 0;
  }
}

```

配合animate.css使用
``` html
// zoomInLeft , zoomOutRight。
<tranlate enter-active-class="bounceInLeft" leave-active-class="bounceOutRinght">
   <p v-show="show" class="animated"></p>
</tranlate>
```

