<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 10:05:42
<<<<<<< HEAD
 * @LastEditTime: 2019-08-19 10:08:16
=======
 * @LastEditTime: 2019-09-01 10:48:41
>>>>>>> dae0002860f7f0f630e48b494a4141098c6bcf94
 * @LastEditors: Please set LastEditors
 -->
# css3 media媒体查询器用法总结  

### min-width
屏幕可视窗口尺寸大于 768 像素的设备上修改背景颜色:
```css
@media screen and (min-width: 768px) {
    body {
        background-color: lightgreen;
    }
}
```   
### max-width
<<<<<<< HEAD
屏幕可视窗口尺寸小于 300 像素则修改背景颜色:   
=======
屏幕可视窗口尺寸小于 768 像素则修改背景颜色:   
>>>>>>> dae0002860f7f0f630e48b494a4141098c6bcf94
```css
@media screen and (max-width: 768px) {
    body {
        background-color:lightblue;
    }
}
```    

### 混合使用上面的用法  
当页面宽度大于960px小于1200px的时候修改背景颜色。
```css
@media screen and (min-width:960px) and (max-width:1200px){
	body{
		background:yellow;
	}
}

```