<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 10:05:42
 * @LastEditTime: 2019-08-19 10:05:46
 * @LastEditors: Please set LastEditors
 -->
# css3 media媒体查询器用法总结  

### min-width
屏幕可视窗口尺寸大于 480 像素的设备上修改背景颜色:
```css
@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```   
### max-width
屏幕可视窗口尺寸小于于 300 像素则修改背景颜色:   
```css
@media screen and (max-width: 300px) {
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