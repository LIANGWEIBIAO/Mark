###数组的扩展
- 复制数组。
es5复制数据要遍历然后push到新的变量中，在es6中就更简洁的方法。
``` javascript
var arr = [1,2,3]
var arr2 = [...arr];
console.log(arr2) //[1,2,3]
```
```javascript
//拓展
function show(...arg){
  //这样参数变成数组而且能使用数组中的方法。
  args.push(5);
  console.log(args)
}

show(1,2,3,4)
```