## 常用的CSS水平垂直居中方法大全

#### 水平居中
 - 行内元素（文字的水平居中）
 如果被设置元素为文本、图片等行内元素时，水平居中是通过给父元素设置text-align:center来实现的。
 - 固定宽块级元素
 >当被设置元素为块状元素时用`text-align：centr`就不起作用了，这时也分两种情况： 定宽块状元素 和 不定宽块状元素 。我们先来讲一讲定宽块状元素。 
满足 定宽和块状 两个条件的元素是可以通过设置左右margin值为auto来实现居中的。


- 设置 display:inline 方法
改变块级元素的 `display` 为 `inline` 类型，然后使用 `text-align:center` 来实现居中效果
- 定位解决
```
width: 300px;
height:300px;
position: absolute;
top:50%;
left:50%;
margin-left: -150px; //自身高度的一半
```


 - 未知宽块级元素
```
 position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
```
*注：transform属性，ie9以下不支持 transform，手机端表现的比较好。


#### 垂直居中


- 父元素高度确定的单行文本
 父元素高度确定的单行文本的竖直居中的方法是通过设置父元素的 `height` 和 `line-height` 高度一致来实现的。

- 已知高度的容器的垂直方向居中：
```
height:300px;
position: absolute;
top:50%;
left:50%;
margin-top: -150px; //自身高度的一半
```
- 未知高度的容器的垂直居中。
> *注：transform属性，ie9以下不支持 transform，手机端表现的比较好。


```
.vertical-center-nowidth{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
```

#### flex水平居中
> 水平垂直居中记得要想到flexbox此时.div无论是否已知宽高，都能两个方向居中

```
.container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.container .div{
//whatever
}
```

