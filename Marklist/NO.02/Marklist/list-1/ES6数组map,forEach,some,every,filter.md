# ES6数组map,forEach,some,every,filter

## map    
map（映射）`不会改变`原数组，返回一个`新的数组`
对应参数：item 每次的值，当前索引，原来数组 arr

成绩对应等级
```javascript
let arr =[22,55,67,33,99,70];
let result = arr.map((item,index,arr)=>{
    return item>60?'及格':'不及格';
})
console.log(result)

// ["不及格", "不及格", "及格", "不及格", "及格", "及格"]
```   


## forEach 循环 （迭代）   
forEach与map最大不同之处，是forEach`会改变原数组`，`没有返回值`。   
```javascript   
let arr = [1, 2, 3, 4, 5];

arr.forEach((num, index) => {
    arr[index] = num * 2
});    
console.log(arr)

执行结果如下：   
arr = [2, 4, 6, 8, 10]
```       


## every   
遍历数组每一项，每一项返回true,则最终结果为true。
当任何一项返回false时，停止遍历，返回false。不改变原数组   
```javascript
let arr = [1, 2, 3, 4];

let flag = arr.every((item, index, arr) => {
    return item > 0;
  } 
);
console.log(flag); //false
```   

## some    
遍历数组每一项，有一项返回true，就返回true，
当任何一项返回true时，则停止遍历，返回true；
```javascript   
var arr = [1, 2, 3, 4];
 
let flag = arr.some((item, index, arr) => {
   return item > 1; 
});

console.log(flag) //结果为true
```   


## filter    
filter方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
```javascript
 var ages = [32, 33, 16, 40];
let result = ages.filter((age,index)=>{
     return age >= 18; 
});
console.log(result); // [32, 33, 40]
```   

