# javascript —— 理解js各种宽高

#### 原生js各种宽度
- offset相关的宽高
  -  offsetWidht 和 offsetHeight
  

 > 可以计算出元素的border+padding+content的宽度和高度;

    ``` javaScript
       oDiv.offsetWidht = 元素的宽
       oDiv.body.offsetHeight = 元素的高
    ```


  -  offsetWidht 和 offsetHeight

   > 找距离定位父级（relative或absolute）左边或右边的距离，没有定位则找body。
   
   ``` javascript
     oDiv.offsetLeft = 距离元素左边的距离
     oDiv.offsetTop = 距离元素左边的距离
   ```
- scroll相关的宽高
  -  scrollLeft和scrollTop
  这对属性是可读写的，指的是当元素其中的内容超出其宽高的时候,元素被卷起的高度和宽度

  -  scrollLeft和scrollTop
  这对属性是可读写的，指的是当元素其中的内容超出其宽高的时候,元素被卷起的高度和宽度

- 3.client相关的宽高
 > 可以计算出元素的border+padding+content的宽度和高度;

    ``` javaScript
       document.body.clientWidth;
       document.body.clientHeight;
    ```
#### jquery的相关宽高
 >  jqeruy的宽高相对原生js精简很多;
 
-  `oDiv.widht()` 元素的宽
-  `oDiv.height()` 元素的搞
- ` oDiv.scrollLeft() `与原生用法一样
-  `oDiv.scrollTop() `
-  `oDiv.offset() ` 返回一个top和left;
- ` oDiv.position()` 返回一个top和left

`.offset()`相对于document的当前坐标值(相对于body左上角的left，top的值)。
`.position()`相对于offset parent的当前坐标值，(相对于offset parent元素左上角的left，top的值)
 

#### 坐标
-  1.clientX和clientY
   相对于浏览器(可视区左右0,0)的坐标;
-  2.pageX和pageY
    相对于设备屏幕左上角(0,0)的坐标(和client的差别在于滚动条)
-  3.offsetX和offsetY
    相对于事件源左上角(0,0)的坐标（oDiv.onclick,oDiv就是事件源）