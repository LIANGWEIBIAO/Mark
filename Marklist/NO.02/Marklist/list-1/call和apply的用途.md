## call、apply 以及 bind 的区别和用法

### call 和 apply 的共同点
它们的共同点是，都能够改变`函数执行时`的`上下文`，将一个对象的方法交给另一个对象来执行，并且是立即执行的。

为何要改变执行上下文？举一个生活中的小例子：平时没时间做饭的我，周末想给孩子炖个腌笃鲜尝尝。但是没有适合的锅，而我又不想出去买。所以就问邻居借了一个锅来用，这样既达到了目的，又节省了开支，一举两得。

改变执行上下文也是一样的，A 对象有一个方法，而 B 对象因为某种原因，也需要用到同样的方法，那么这时候我们是单独为 B 对象扩展一个方法呢，还是借用一下 A 对象的方法呢？当然是借用 A 对象的啦，既完成了需求，又减少了内存的占用。

另外，它们的写法也很类似，`调用 call 和 apply 的对象`，`必须是一个函数 Function`。接下来，就会说到具体的写法，那也是它们区别的主要体现。

### call 和 apply 的区别

#### call 的写法
```javascript
Function.call(obj,[param1[,param2[,…[,paramN]]]])
```    

#### call用途
借用方法：类数组使用 Array 原型链上的方法，可以这样：
```javascript
let domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
```

#### apply的写法   
```javascript
Function.apply(obj[,argArray])
```   

#### apply的用法
Math.max。用它来获取数组中最大的一项。  
```javascript
let max = Math.max.apply(null, array);
```
#### 面试题
apply() 是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就表示改变后的调用这个函数的对象。因此，this 指的就是这第一个参数。
```javascript
var x = 0;
function test() {
    console.log(this.x);
}
var o = {};
o.x = 1;
o.m = test;
o.m.apply(windows); //0
```

### bind
提到bind方法，估计大家还会想到`call方法`、`apply方法`；它们都是Function对象内建的方法，它们的第一个参数都是用来更改调用方法中this的指向。需要注意的是bind 是返回新的函数，以便稍后调用；apply 、call 则是`立即调用原函数` 。   
例子:
```javascript
this.name="jack";
var demo={
name:"rose",
getName:function(){return this.name;}
}

console.log(demo.getName());//输出rose  这里的this指向demo

var another=demo.getName;
console.log(another())//输出jack  这里的this指向全局对象
  
//运用bind方法更改this指向
var another2=another.bind(demo);
console.log(another2());//输出rose  这里this指向了demo对象了
```