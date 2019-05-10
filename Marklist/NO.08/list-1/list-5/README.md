# VUE过渡效果
vue中过渡效果通过transition标签来控制
![此处输入图片的描述][1]
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

## 常用vue动画   
``` css
.v-slide-up {
    &-enter-active, &-leave-active{
      transition: all 0.3s
    }

    &-enter, &-leave-to{
      transform: translate3d(0,100%, 0)  
    }

  }

 .v-fade {
    &-enter-active, &-leave-active{
      transition: all 0.3s;
    }

    &-enter, &-leave-to{
      opcity:0;
    }
  }
  ```