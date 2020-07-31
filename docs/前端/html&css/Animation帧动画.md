# 深入理解CSS3 Animation 帧动画  

### Animation八个属性
- animation-name (keyframes的名称)
- animation-duration （完成一次完整的动画需要花费的时间）
- animation-iteration-count （动画被播放的次数，默认是1，infinite为无限次）
- animation-timing-function （规定动画的运动曲线）
  - ease：动画缓慢开始，接着加速，最后减慢，默认值;
  - linear：动画从头到尾的速度是相同的;
  - ease-in：以低速开始；
  - ease-out：以低速结束；
  - ease-in-out：动画以低速开始和结束；
- animation-delay (动画延迟时间)
- animation-direction (动画是否在下一个周期逆向地播放，alternate反向播放)
，
- animation-play-state
  是否运行或暂停动画，这是后来新增的属性
- animation-fill-mode
   把物体动画地从一个地方移动到另一个地方，并让它停留在那里：


### 示例
``` css
div{
     animation: moveDiv 2s;
}
```

``` css3
@keyframes moveDiv {
   0% {
       left: 0;
    }

   100% {
       left: 15%;
    }
}

```

``` css
div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    background: pink;
    /*动画属性名，也就是我们前面keyframes定义的动画名*/
    animation-name: 'boat';
    /*动画运动时间*/
    animation-duration: 3s;
    /*动画延迟时间*/
    animation-delay: 0s;
    /*动画频率*/
    animation-timing-function: linear;
    /*定义循环次数，infinite为无限次*/
    animation-iteration-count: infinite;
    /*动画是否反向播放。*/
    animation-direction: alternate;
    /*把物体动画地从一个地方移动到另一个地方，并让它停留在那里：*/
    animation-fill-mode:forwards;
}
```        

#### animation语法
animation: name duration timing-function delay iteration-count direction;
> 名称，所花费的时间，画的速度曲线，动画开始之前的延迟，画应该播放的次数，是否应该轮流反向播放动画。

具体化可以记成一下形式：
``` css
//名称,时间,速度曲线,延迟,播放的次数,是否应该轮流反向播放动画, 动画完成后的样式。
animation:myAnim 3s linear 2s infinite alternate forwards;
```
