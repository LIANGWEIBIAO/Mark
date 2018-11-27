# JS截取字符串方法实例

### 字符串截取操作
- substring()是截取字符串

``` javascript
var s = 'hello, world';

s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'; 含头不含尾

s.substring(7); // 从索引7开始到结束，返回'world';
```


- substr()是截取字符串
定义：substr(start,length)表示从start位置开始，截取length长度的字符串。
``` javascript
var text = 'Mozilla';
text.substr(2,3); // => "zil" 含头含尾
```


### 数组截取操作

- split()
功能：使用一个指定的分隔符把一个字符串分割存储到数组
``` javascript
str="jpg|bmp|gif|ico|png";
arr=theString.split("|");
//arr是一个包含字符值"jpg"、"bmp"、"gif"、"ico"和"png"的数组
```


- slice()是截取数组  
   `slice`和`substring`两者原理相同，针对使用的对象不同。
``` javascript
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C'];

arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G'];

```    


- John() 功能：使用您选择的分隔符将一个数组合并为一个字符串     
``` javascript     
var delimitedString=myArray.join(delimiter);     
var myList=new Array("jpg","bmp","gif","ico","png");     
var portableList=myList.join("|");     
//结果是jpg|bmp|gif|ico|png     
```
 

 