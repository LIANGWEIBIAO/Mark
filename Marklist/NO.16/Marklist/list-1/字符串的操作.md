### JavaScript —— String(字符串的操作)
#### 一、 字符串截取方法
##### 1.根据下标截取字符串
> substring(start,end) 开始和结束的位置，从零开始的索引；
(start，end]的区间，包含第x个元素，但不包含第y个元素；
substring和slice参数为2个的时候不建议传负数使用；

- substring和slice;
 　 参数为正数的时候`substring`和`slice`用法一样；
``` javaScript
var test = '0123456'; //lenght = 7
//从第一个元素开始截取(包含start)
alert(test.substring(1));         //123456
//从第四截取到第七个;
alert(test.substring(4,7));        //123


```
　　为负数参数的时候, `substring`转换为0, `slice`与字符串长度相加
``` javaScript
//不同之处 test.length = 7;
test.substring(-3) == test.substring(0);        //123456
test.substring(1,-3) == test.substring(1,0);    //123456 当y>x的时候取最大值(1)
test.slice(-3) == test.slice(4);                //456
test.slice(1,-3) == test.slice(1,4);            //123

```


##### 2.根据长度去接字符串
   >  substr 方法用于返回一个从指定位置开始的指定长度的子字符串。substr(start [, length ])
 
参数为正数的正常使用
``` javaScript
var str="helloworld";
console.log(str.substr(2,5)); //llowo
```
参数为负数的时候，`参数1`会与字符串长度相加，`参数2`则转换为0
``` javaScript
var str="helloworld"; //length = 10;
str.substr(3,-5) == str.substr(3,0); //空
str.substr(-3,5) == str.substr(9,5); //d  取最大值9开始截取
```
##### 3.练习字符串截取
- 1.取出一个字符串最后三个字符
``` javascript
var str="abcd"
str.substr(str.length-3,3) //bcd
str.slice(-3) //bcd
```
- 2.往后第三个字符开始截取
``` javascript
var str="abcde"
str.slice(0,str.length-2) //"abc"
```
- 3.往后第三个字符开始截取一个字符。
``` javascript
var str="abcde"
str = str.slice(0,str.length-2).slice(-1) //"c"
```

#### 二、位置方法indexof()和lastIndexof();
- indexOf
返回某个`指定的字符串值`在字符串中`首次出现的位置`（从左向右）。没有匹配的则返回`-1`，否则返回首次出现位置的字符串的`下标值`。
``` javascript
var src="images/off_1.png";
alert(src.indexOf('t'));
alert(src.indexOf('i'));
alert(src.indexOf('g'));
弹出值依次为：-1,0,3
```

- lastIndexOf
lastIndexOf()方法返回从右向左出现某个字符或字符串的首个字符索引值（与indexOf相反）
``` javascript
var src="images/off_1.png";
alert(src.lastIndexOf('/'));
alert(src.lastIndexOf('g'));
弹出值依次为：6,15
```
- 练习
``` javascript
//希望从最后一个（“/”）倒的截取  以得到精准id  即精准得到318
var str = http://192.168.2.26:8029/wechat/list.html#/list/318;
str.substring(str.lastIndexOf("/")+1) 
```