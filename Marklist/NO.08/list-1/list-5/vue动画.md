# vue动画

``` vue
<transition name="normal">
    <div v-show='playling.lenght>0'>
        <div class='top'></div>
        <div class='bottom'></div>
    </div>
</transition>
```

``` css
//进入和离开过渡状态
.normal-enter-active, .normal-leave-active{
    transition: all 0.4s
    .top, .bottom{ //生效元素
        transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
    }
 }

//开始和结束状态
.normal-enter,.normal-leave-to{
    opacity: 0 //开始和结束opacity为0
    .top{
        transform: translate3d(0, -100px, 0)
    }
    .bottom{   
         transform: translate3d(0, 100px, 0)
    }
}
```
