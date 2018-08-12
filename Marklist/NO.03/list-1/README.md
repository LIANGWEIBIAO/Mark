
### 循环用法
- javascript提供了多种遍历数组的方法，最开始我们可能习惯使用for循环：

``` javascript
for (var index = 0; index < myArray.length; index++){
     console.log(myArray[index]);
}
```
- forEach
上面写法比较麻烦，于是数组内提供了forEach方法：

``` javascript
myArray.forEach(function (value) {
    console.log(value);
});
```
这段代码看起来更加简洁，但这种方法也有一个小缺陷：你不能使用`break语句`中断循环，也不能使用`return语句`返回到外层函数，而且只能数组使用。

- for...in
 for...in循环是为了遍历对象而设计的，`并不适合遍历数组！！`
``` javascript
for (var index in myArray) { // 千万别这样做
    console.log(myArray[index]);
}
```

- for-of循环
```
for (var value of myArray) {
    console.log(value);
}
```

这是最简洁、最直接的遍历数组元素的语法,这个方法避开了for-in循环的所有缺陷

- map循环
``` javascript
[1,2,3].map(function (x) {
  return x * x;
});
```