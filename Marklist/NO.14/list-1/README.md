# html css、css3 常用的收集

> css有些属性容易忘记，半天不写就要去查api，有时候api还不好使，于是还是记下来以后方便用，后续会慢慢补充进来的。

#### css3水平垂直居中
```

.box{ 
    display: flex;
    justify-content:center;//水平居中
    flex-direction:column;//垂直排列
}

.box{ //垂直居中
    display: flex;
    align-items:center;
}

```

#### css实现不换行、自动换行、强制换行

```
//不换行
white-space:nowrap;

//自动换行
word-wrap: break; 
word-break: normal; 

//强制换行
word-break:break-all;
```

#### 合并表格边框border-collapse:collapse
```
table{border-collapse:collapse;}
```

#### box-shadow
```
.box{box-shadow:4px 4px 2px #333333;}
```
属性值依次：水平方向位移（支持负值）、垂直方向位移（支持负值）、模糊半径、阴影颜色

## 根据input的type来控制css样式

1.用css中的type选择器
```
input[type="text"]{ background-color:#FFC;}
```

#### CSS :first-child 选择器,:last-child选择器,nth-child(IE7,8无效，不识别)

:nth-child(2)选取第几个标签，“2可以是你想要的数字”
:nth-child(2n)选取偶数标签，2n也可以是even
:nth-child(2n-1)选取奇数标签，2n-1可以是odd
:nth-child(3n+1)自定义选取标签，3n+1表示“隔二取一”


#### HTML5:input file控件限制上传文件类型
如果限制上传文件为图片类型，如下：
``` html
<input type="file" class="file" value="上传" accept="image/*"/>
```

#### H5页面窗口自动调整到设备宽度，并禁止用户缩放页面
``` html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```

#### CSS美化Placeholder提示信息的样式兼容

```
input::-webkit-input-placeholder{color:#AAAAAA;}
input:focus::-webkit-input-placeholder{color:#EEEEEE;}
```


#### 开启硬件加速
```
.css {
   -webkit-transform: translate3d(0, 0, 0);
   -moz-transform: translate3d(0, 0, 0);
   -ms-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}
```

#### 为移动端页面中滑动滚动条的时候，添加惯性效果的方法
```
body{-webkit-overflow-scrolling:touch;}
```
有的同学添加了这一条属性后遇到了向下滑动后页面变成空白的问题，实际上可以通过一条 CSS 属性把页面加载到内存来解决：
```
body{-webkit-transform:translate3d(0,0,0);}
```

