# css常用收集

## css实现不换行、自动换行、强制换行
``` CSS
//不换行
white-space:nowrap;

//自动换行
word-wrap: break; 
word-break: normal; 

//强制换行
word-break:break-all;
//单行

overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap

//多行                      
.ellipse {
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

``` 

## 添加阴影
属性值依次：水平方向位移（支持负值）、垂直方向位移（支持负值）、模糊半径、阴影颜色
```css3
.box{
    box-shadow:4px 4px 2px #333333;
}
```  

## CSS美化Placeholder提示信息的样式兼容
```css
input::-webkit-input-placeholder{
    color:#AAAAAA;
}
input:focus::-webkit-input-placeholder{
    color:#EEEEEE;
}
```

## 为移动端页面中滑动滚动条的时候，添加惯性效果的方法
```css
body{
    -webkit-transform:translate3d(0,0,0);
}
``` 

## 根据input的type来控制css样式
```css
input[type="text"]{ 
    background-color:#FFC;
}
```

## H5页面窗口自动调整到设备宽度，并禁止用户缩放页面
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```

## 控件限制上传文件类型
```html
<input type="file" class="file" value="上传" accept="image/*"/>
```
