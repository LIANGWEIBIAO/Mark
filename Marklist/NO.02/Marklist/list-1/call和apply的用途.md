## call、apply 以及 bind 的区别和用法

### call 和 apply 的共同点
`call` 和 `apply` 都是为了改变函数体内部`this`的指向，也就是把Function(即this)绑定到obj，这时候obj具备了Function的属性和方法，说白一点就是obj继承了Function的属性和方法。    

另外，它们的写法也很类似，`调用 call 和 apply 的对象`，`必须是一个函数 Function`。接下来，就会说到具体的写法，那也是它们区别的主要体现。   

### 继承方法
apply传的是数组
```javascript
//定义一个人类
function Person(name,age){
    this.name = name;
    this.age = age;
}

//定义一个学生类
function Student(name,age,grade){
    Person.apply(this,arguments);
    //或者
    Person.call(this,name,age)
    this.grade = grade;
}

var student = new Student("李云龙","20","一年级");
console.info("name:"+student.name+"\n"+"age:"+student.age+"\n"+"grade:"+student.grade);
```

### call 和 apply 的区别

#### call 的写法
```javascript
Function.call(obj,[param1[,param2[,…[,paramN]]]])
```    

#### call用途
借用方法：类数组使用 Array 原型链上的方法，可以这样：
```javascript
let str = 'abcdefe'
let arg = Array.prototype.slice.call(str,1);
console.log(arg); // ["b", "c", "d", "e", "f", "e"]
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