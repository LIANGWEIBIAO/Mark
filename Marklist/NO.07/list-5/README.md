# 深入理解CSS3 Animation 帧动画
### CSS3的Animation有八个属性
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
  定义动画是否运行或暂停，这是后来新增的属性
- animation-fill-mode
   定义动画播放时间之外的状态，顾名思义，要么就是在动画播放完了之后给它一个状态

例如：a.定义一个从红色到黄色的动画。
``` css
@keyframes redToYelloAnimate
{
    from {background: red;}
    to {background: yellow;}
}
```
b.定义一个选择器div的样式，使用animation属性引用动画。动画的名字是redToYelloAnimate，用2s时间，从红色变到黄色。
``` css
div{
     animation: redToYelloAnimate 2s;
 }
```

例如2：a.定义一个div左右来回运动。
``` css3
@keyframes boat {
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
            -webkit-animation-name: 'boat'; /*动画属性名，也就是我们前面keyframes定义的动画名*/
            -webkit-animation-duration: 3s; /*动画持续时间*/
            -webkit-animation-timing-function: linear; /*动画频率，和transition-timing-function是一样的*/
            -webkit-animation-delay: 0s; /*动画延迟时间*/
            -webkit-animation-iteration-count: infinite; /*定义循环资料，infinite为无限次*/
            -webkit-animation-direction: alternate; /*动画应该轮流反向播放。*/
        }
```        

#### animation语法
animation: name duration timing-function delay iteration-count direction;
> 名称，所花费的时间，画的速度曲线，动画开始之前的延迟，画应该播放的次数，是否应该轮流反向播放动画。

具体化可以记成一下形式：
``` css
animation:myAnim 3s linear 2s infinite alternate both running;
```
