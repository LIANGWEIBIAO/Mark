# betterscroll使用笔记   

BetterScroll 是一款重点解决移动端各种滚动场景需求的开源插件[（GitHub地址）](https://github.com/ustbhuangyi/better-scroll)，适用于滚动列表、选择器、轮播图、索引列表、开屏引导等应用场景。   

最简单的初始化代码如下：
```javascript
import BScroll from "better-scroll";

setTimeout(() => {
    let scroll = new BScroll('.scroll-wrapper',{
        click: true,
        scrollY: true,  //纵向滚动
        scrollX：false  //横向滚动
    });
}, 200);   
```   

## 核心配置  
- bounce  
当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画。   
```javascript
bounce: {
  top: true,
  bottom: true,
  left: true,
  right: true
}
```

## 核心方法   
- refresh()     
重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。  

```javascript
if (this.scroll) {
    this.scroll.refresh();
}
```