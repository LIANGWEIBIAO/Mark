# forEach()、map()源码及两者之间的区别

## **forEach()源码解析**

```javascript
var arr = [1, 2, 3, 4, 5]
Array.prototype.myForEach = function(fn){
    var len = this.length;
    for(var i = 0; i < len; i ++){
        //将元素传给回调函数
        fn(this[i],i);
    }
}
arr.myForEach(function (ele, index){
    console.log(ele, index);
})
```



## **map()源码解析**

```javascript
ar arr = [1, 2, 3, 4, 5]
Array.prototype.myMap = function(fn){
    var len = this.length;
    //创建新数组
    var arr = [];
    for(var i = 0; i < len; i ++){
        arr.push(fn(this[i],i))
    }
    return arr;
}
var aa = arr.myMap(function(ele, index){
    return ele * 2;
})
```



## 相同点

- 都是循环遍历数组中的每一项；

- ##### `forEach()`和`map()`匿名函数的参数相同，参数分别是item（当前每一项）、index（索引值）、arr（原数组）；

- ##### this都是指向调用方法的数组；

- ##### 只能遍历数组；



## 不相同点

- `map()`创建了新数组，不改变原数组；`forEach()`可以改变原数组。
- 遇到空缺的时候`map()`虽然会跳过，但保留空缺；`forEach()`遍历时跳过空缺，不保留空缺。
- map()`按照原始数组元素顺序依次处理元素；`forEach()`遍历数组的每个元素，将元素传给回调函数。





