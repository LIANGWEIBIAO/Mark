# JavaScript对象

## 创建对象

### 对象直接量

创建对象最简单的方式就是在JavaScript代码中使用对象直接量。对象直接量是有若干名/值对组成的映射表，名/值对中间用冒号分隔，名/值对之间用逗号分隔，整个映射表用花括号括起来。

属性名可以是JavaScript标识符也可以是字符串直接量（包括空字符串）。

属性的值可以是任意类型的JavaScript表达式，表达式的值（可以是原始值也可以是对象值）就是这个属性的值。

```javascript
var empty = {};          //没有任何属性的对象
var point = {x:0,y:0};   //两个属性
var student = {name: 'Ross', age: 18}
```



### 通过new创建对象

new运算符创建并初始化一个新对象。new后跟随一个构造函数。

```javascript
var o = new Object();    //创建一个空对象，和{}一样

var a = new Array();      //创建一个空数组，和[]一样

var d = new Date();       //创建一个表示当前时间的Date对象

var r = new RegExp("js"); //创建一个可以进行模式匹配的RegExp对象
```

除了这些内置构造函数，用自定义构造函数来初始化新对象也是非常常见的。

如果我们要创建具有相同属性/结构集的多个实例怎么办？而且，我们也不想结束编写多行对象文字...

```javascript
var ross = {name: 'Ross', age: 1}   
var david = {name: 'David', age: 2}
var atul = {name: 'Atul', age: 3}
```

为了解决这个问题，让我们创建一个函数。

```javascript
funtion Student(name,age)  {
  this.name = name; 
  this.age = age; 
}
```

注意，这只是一个简单的函数，没有什么特别的。在**new**关键字后跟函数名初始化对象。

```javascript
var ross = new Student('Ross',18);   
var david = new Student('David',19);
```

### Object.create（）

Object.create()是一个静态函数，而不是提供给某个对象调用的方法。

```javascript
var o1 = Object.create({x:1,y:2});  //o1继承了属性x和y
```

可以通过传入参数null来创建一个没有原型的新对象，但通过这种方式创建的对象不会继承任何东西，甚至不包括基础方法。

```javascript
var o2 = Object.create(null); //o2不继承任何属性和方法
```

如果想创建一个普通的空对象（比如通过{}或new Object()创建的对象），需要传入`Object.prototype`;

```javascript
var o3 = Object.create(Object.prototype); //o3和{}和new Object()一样
```



### ECMAScript 6（类）

对于支持它的浏览器，ECMAScript 6规范现在提供使用类结构创建对象的功能，该类结构类似于诸如C＃、. NET和Java之类的静态类型语言。

同样，这只是现有对象创建功能之上的语法糖。因此，要使用类创建对象，我们将执行以下操作。

```javascript
class Student {  
 constructor(name, rollno) {  
 this.name = name;  
 this.rollno = rollno;  
 }  
 getStudentDetails() {  
   return "Student: " + this.name + ", Roll No: " + this.rollno;  
 }  
}  
var ross = new Student("Ross", 1);  
document.write(ross.getStudentDetails());
```

## 删除属性

delete运算符可以删除对象的属性。它的操作数应当是一个属性访问表达式。让人感到意外的是，delete只是断开属性和宿主对象的联系，而不会去操作属性中的属性：

```javascript
delete book.author;  //book不再有属性author
delete book["main title"]; //book也不再有属性"main title"
```

## 检测属性

 `js`对象可以看做属性的集合，我们经常会检测集合中成员的所属关系-----判断某个属性是否存在于某个对象中，可以通过`in`运算符，`hasOwnPreperty()`和`propertyIsEnumerable()`方法来完成这个工作，甚至仅通过属性查询也可以做到这一点。

**一、in运算符**

 in运算符的左侧是属性名（字符串），右侧是对象。如果对象的自有属性或继承属性中包含这个属性则返回true。

 ```javascript
var o = {x:1}

"x" in o; //true,"x"是o的属性

"y" in o; //false, "y"不是o的属性

"toString" in o; //true,o继承toString 属性
 ```

**二、hasOwnPproperty()方法**

`hasOwnProperty()`方法用来检测给定的名字是否是对象的自有属性。对于继承属性它将返回false.

```javascript
var o= {x:1}

o.hasOwnProperty("x"); //true,o有一个自有属性"x"

o.hasOwnProperty("y"); //false,o中不存在属性"y"

o.hasOwnProperty("toString"); //false,toString是继承属性
```

**三、propertyIsEnumerable()方法**

​    `propertyIsEnumerable()`方法是`hasOwnProperty()`的增强版，只有检测到自有属性且这个属性的可枚举性为true时它才返回true.某些内置属性的是不可枚举的。通常由js代码创建的属性都是可枚举的，除非使用Es5中使用一个特殊的方法来改变属性的可枚举性。

```javascript
var o = inherit({ y : 2 });

o.x=1;

o.propertyIsEnumerable("x"); //true,o有一个可枚举的自有属性

o.propertyIsEnumberable("y"); //false,y是继承来的。

Object.property.propertyIsEnumberable("toString");  //false:不可枚举
```

四、除了使用in运算符之外，另一种更简单的方法是使用"!=="判断一个属性是否是undefined;

```javascript
var o = {x : 1}

o.x !==undefined; //true,o中有属性x

o.y!==undefined; //false,o中没有属性y

o.toString !==undefined; //true,o继承了toString属性
```

五、然而有一种场景只能使用in 运算符而不能使用上述属性访问的方式。in 可以区分不存在的属性和存在但值为undefined的属性。例如

```javascript
 var o = { x : undefined } //属性被显式赋值为undefined;

 o.x !==undefined; //false,属性存在，但值为undefined;

 o.y!==undefined; //false,属性不存在

 "x" in o; //true,属性存在

 "y" in o; //fasle,属性不存在

 delete o.x; //删除了属性x

 "x" in o; //false,属性不再存在

```

注意：上述代码中使用的是"!=="运算符，而不是"!="。"!=="可以区分undefined和null，有时则不必作这种区分。

如果o中含有属性x，且x的值不是null或undefined，o.x乘以2

```javascript
if(o.x!=null)o.x*=2;
```

如果那个o中含有属性x,且x的值不能转换为false o.x乘以2

如果x是undefined、null、false、" "、0或NaN，则它保存不变

```javascript
if(o.x) o.x*=2;
```

## Object.assign

> Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

**语法**

```javascript
Object.assign(target, ...sources)
```

**合并对象**

```javascript
let a = { a:1}
let b = {b:2}

let c = Object.assign(a,b);
console.log(c); // {a: 1, b: 2}
```

**拷贝对象**

```javascript
let a = {a:1}
let c = Object.assign({},a);
console.log(c); // {a: 1}
```

**合并相同属性的对象**

```javascript
let obj1 = {a:1,b:1,c:1}
let obj2 = {b:2,c:2}
let obj3 = {c:3}
let newObje = Object.assign({},obj1,obj2,obj3)
console.log(newObje)  // {a: 1, b: 2, c: 3}
```

**深拷贝问题**

针对深拷贝，需要使用其他办法，因为 Object.assign()拷贝的是属性值。假如源对象的属性值是一个对象的引用，那么它也只指向那个引用。

```javascript
let a = {
          b:{
             name:1
          }
}
a.b.name = 2;
let c = Object.assign({},a);
console.log(c.b); // {name: 2}
```

## 属性getter和setter

一、对象属性

​	对象属性是由名字、值和一组特性构成的。在ES5中，属性值可以用一个或两个方法替代，这两个方法就是getter和setter。由getter和setter定义的属性称做 "存储器属性"，它不同于 "数据属性"，数据属性就是一个简单的值。

当程序查询存取器属性的值时，JS调用getter方法（无参数）。这个方法的返回值就是属性存取表达式的值。

​	当程序设置一个存取器属性的值时，JS调用setter方法，将赋值表达式右侧的值当做参数传入setter。从某种意义上讲，这个方法负责 "设置"属性值。可以忽略setter方法的返回值。

​	和数据属性不同，存取器属性不具有可写性。如果属性同时具有getter和setter，那么它是一个读/写属性。如果它只有getter方法，那么它是一个只读属性。如果它只有setter方法，那么它是一个只写属性（数据属性中有一些例外），读取只写属性总是返回undefined.



二、定义存取器属性

定义存取器属性最简单的方法是使用对象直接量语法的一种扩展写法：

```javascript
var o = {
	//普通的数据属性
	data_prop : value,

	//存取器属性都是成对定义的函数
	get accessor_prop() {/*这里是函数体*/}，

	set accessor_prop() {/*这里是函数体*/}
}；
```

存取器属性定义为一个或两个和属性同名的函数，这个函数定义没有使用function关键字，而是使用get和（或）set.

存取器属性定义为一个或两个和属性同名的函数，这个函数定义没有使用function关键字，而是使用get和（或）set.

```javascript
var p = {

           //x和y是普通的可读写的数据属性

           x : 1.0,

           y : 1.0,

           //r是可读写的存取器属性，它有getter和setter，

           get r(){ return Math.sqrt(this.x*this.x + this.y*this.y) },

           set r(newvalue){

               var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);

               var ratio = newvalue/oldvalue;

               this.x *=ratio;

               this.y *=ratio;

         },

         //theta是只读存取器属性，它只有getter方法

         get theta(){ return Math.atan2(this.y , this.x); }

};
```

三、存取器属性是可以继承的

​	和数据属性一样，存取器属性是可以继承的，因此可以将上述代码中的对象p当做另一个 "点" 原型。可以给新对象定义它的x和y属性，但r和theta属性是可以继承的：

```javascript
var q = inherit(p);     //创建一个继承getter和setter的新对象

q.x=1,q.y=1;           //给q添加两个属性

console.log(q.r);        //可以使用继承的存取器属性

console.log(q.theta);
```

