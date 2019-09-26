# JS - 字符串截取方法汇总（slice、substring、substr等）  

## slice() 截取
`slice() `方法可通过指定的开始和结束位置，提取字符串的某个部分，并以新的字符串返回被提取的部分。语法如下：      

```javascript
str.slice(start, end)   
```    

### 使用样例   
```  
var str = "0123456789";
console.log("原始字符串：", str);
 
console.log("从索引为3的字符起一直到结束：", str.slice(3));  //3456789
console.log("从倒数第3个字符起一直到结束：", str.slice(-3));  //789
 
console.log("从开始一直到索引为5的前一个字符：", str.slice(0,5));  //01234
console.log("从开始一直到倒数第3个字符的前一个字符：", str.slice(0,-3));  //0123456
 
console.log("从索引为3的字符起到索引为5的前一个字符：", str.slice(3,5));  //34
console.log("从索引为3的字符起到倒数第3个字符的前一个字符：", str.slice(3,-3));  //3456
```    

## substring() 截取    
`substring`方法用于提取字符串中介于两个指定下标之间的字符。语法如下：   
```javascript
stringObject.substring(start, stop)
```   
### 使用样例  
```javascript
var str = "0123456789";
console.log("原始字符串：", str);
 
console.log("从索引为3的字符起一直到结束：", str.substring(3));  //3456789
console.log("从索引为20的字符起一直到结束：", str.substring(20));  //
 
console.log("从索引为3的字符起到索引为5的前一个字符结束：", str.substring(3,5));  //34
console.log("start比end大会自动交换，结果同上：", str.substring(5,3));  //34
console.log("从索引为3的字符起到索引为20的前一个字符结束：", str.substring(3,20));  //3456789
```   
#### 注意事项
- 如果 start 与 end 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。
- 如果 start 比 end 大，那么该方法在提取子串之前会先交换这两个参数。
- 如果 start 或 end 为负数，那么它将被替换为 0。   

## substr() 截取   
substr 方法用于返回一个从指定位置开始的指定长度的子字符串。语法如下：   
```javascript
stringObject.substr(start, length)   
```    
### 使用样例  
```javascript
var str = "0123456789";
console.log("原始字符串：", str);
 
console.log("从索引为3的字符起一直到结束：", str.substr(3));  //3456789
console.log("从索引为20的字符起一直到结束：", str.substr(20));  //
 
console.log("从索引为3的字符起截取长度为5的字符串：", str.substr(3,5));  //34567
console.log("从索引为3的字符起截取长度为20的字符串：", str.substr(3,20));  //3456789    
```    

### 注意事项：  
- 如果 length 为 0 或负数，将返回一个空字符串。 
- 如果没有指定 length，则子字符串将延续到 stringObject 的最后。
- 如果 start 或 length 为负数，那么它将被替换为 0。