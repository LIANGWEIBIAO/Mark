<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 11:59:45
 * @LastEditTime: 2019-09-01 11:59:48
 * @LastEditors: Please set LastEditors
 -->
# viewport 视口  

```html
布局视口(layout viewport) 960px

可视视口(visual viewport) iphone6 375px 每一款设备都不相同

理想视口(ideal viewport) 布局视口在一个设备上的最佳尺寸(content="width=device-width")

viewport:设备屏幕用来展示网页的可视化区域

<meta name="viewport" content="width=device-width,initial-scale=1.0">

```  
### 布局视口
一般移动设备的浏览器都`默认设置`一个viewport,定义了一个虚构的布局视口，用于解决早期的页面在手机上显示的问题。iOS, Android基本都将这个视口分辨率设置为980px，所以pc上的网页基本能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。     

### 可视视口(visual viewport) 
设备物理屏幕的可视区域，屏幕显示器的物理像素，同样尺寸的屏幕，像素密度大的设备，硬件像素会更多。
每一款设备都不相同，例如iPhone的物理像素：  
iPhone6：750 * 1334
iPhone6 Plus：1242 * 2208     

### 理想视口（ideal viewport）  
理想视口：通常是我们说的屏幕分辨率，`布局视口`在一个设备上的最佳尺寸(content="width=device-width")
逻辑像素宽度 * 倍率 = 物理像素宽度(设备像素)
比如，iPhone6：分辨率
375 * 667，物理像素 750 * 1334，@2x   

### 设置理想视口 
```html

<meta id="viewport" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1; user-scalable=no;">
```
