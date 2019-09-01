<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 10:43:57
 * @LastEditTime: 2019-09-01 10:43:57
 * @LastEditors: your name
 -->
#  checkbox和radio标签的样式自定义    

`label`标签有一个很好的作用就是扩大表单控件元素的`点击区域`。      
一般有两种方法可以达到效果        

### 使用label标签包裹表单控件  
``` html
写法一：
<input type="radio" id="radioA" name="radio1" />
<label for="radioA">这是radioA</label>
<input type="radio" id="radioB" name="radio1" />
<label for="radioB">这是radioB</label>

```  

### 设置label标签的for属性和表单的id属性一致  
```html
写法二：
<label>
    <input type="radio"  name="radio2">这是radioA
</label>
<label>
    <input type="radio"  name="radio2">这是radioB
</label>
```

### demo
checkbox样式自定义

``` html
<label class="bui">
    <input type="checkbox" name="sex">
    <i class="bui-checkbox">男</i>
</label>
<label class="bui">
    <input type="checkbox" name="sex">
    <i class="bui-checkbox">女</i>
</label>
```    
``` css
.bui input{
    opacity: 0;
}
//没选中样式
.bui input+ .bui-checkbox{
}
//选中样式
.bui input:checked + .bui-checkbox{
    border-left:2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg) translate(-50%,-50%);
   
}
```