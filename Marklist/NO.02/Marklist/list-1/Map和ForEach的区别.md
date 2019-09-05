# Map和ForEach的区别   
forEach()方法不会返回执行结果，而是undefined。
forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。   


## 示例   
下方提供了一个数组，如果我们想将其中的每一个元素翻倍，我们可以使用map和forEach来达到目的。   
```javascript
let arr = [1, 2, 3, 4, 5];
```

### ForEach    
```javascript   
arr.forEach((num, index) => {
    return arr[index] = num * 2;
});    

执行结果如下：   
arr = [2, 4, 6, 8, 10]
```    


### Map    
```javascript
let doubled = arr.map(num => {
   return num * 2;
});

执行结果如下：
doubled = [2, 4, 6, 8, 10];
arr = [1, 2, 3, 4, 5];
```