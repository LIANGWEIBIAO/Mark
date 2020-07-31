# transition过渡动画

## 1、transition 属性是一个简写属性，可用于设置四个过渡属性
- transition-property ：规定设置过渡效果的css属性名称（height、width、opacity等）。
- transition-duration ：规定完成过渡效果需要多少秒或毫秒
- transition-timing-function ：指定过渡函数，规定速度效果的速度曲线
- ransition-delay ：指定开始出现的延迟时间

## 2、渐变函数的值
渐变函数是transition-timing-function；  
- ease：动画缓慢开始，接着加速，最后减慢，默认值;
- linear：动画从头到尾的速度是相同的;
- ease-in：以低速开始；
- ease-out：以低速结束；
- ease-in-out：动画以低速开始和结束；

## 3、简写方式
> transition：css属性名  过度时间  渐变函数值  延迟时间
```css
  transition: opacity 3s ease-in 2s;
```