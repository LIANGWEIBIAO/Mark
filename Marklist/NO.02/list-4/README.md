# Javascript - call() ,apply() 和 bind() 函数

 call和apply是为了动态改变this而出现的，当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。

call, apply都属于Function.prototype的一个方法,它是JavaScript引擎内在实现的,因为属于Function.prototype,所以每个Function对象实例,也就是每个方法都有call, apply属性.既然作为方法的属性,那它们的使用就当然是针对方法的了.这两个方法是容易混淆的,因为它们的作用一样,只是使用方式不同.
从上面可以得出 call, apply 是给方法使用的,为了改变调用该方法的 this指针 

#### 一、call和apply简单例子：
- call
``` javascript
function A() {
    this.getName = function (xx) {
        return xx;
    }
}

function B() {

}

var a = new A();
console.log( a.getName('i am A')  ); //i am A

var b = new B() ;
console.log( a.getName.call(b,'i am B') );  // i am B

```
`B` 函数中没有 任何方法 ， `A` 函数有个 `getName()` 方法 ，`a.getName()` 自然成立 ，但 `B` 也要使用 `getName()` 的方法怎么办呢 ？ 那就用 `call(this,'参数')` ！！

可以 再理解一下这句话 -- 我们可以借助call或apply调用其它对象的方法来操作，call和apply是为了动态改变this而出现的 ，本来 `a.getName()` 的 this 指向 a, call 动态的 把 this 指向了 b ，变成了 `b.getName()`其实就是把函数里面的this指向了对象,操作函数里面的this等于操作对象;就这么简单;

``` javascript
     // 定义一个伪数组对象
        var argus = {
            0: 10,
            1: 20,
            2: 30,
            length: 3
        };
        // 通过数组的push方法，给伪数组添加值
        Array.prototype.push.call(argus, 5);
        console.log(argus);
```

- apply
> apply 与 call 只是参数的使用不同而已

``` javascript
function A() {
    this.sun = function (a ,b) {
        return a+b;
    }
}

function B() {

}

var a = new A();
console.log( a.sun(1,2)  ); //3

var b = new B() ;
console.log( a.sun.call(b,2,2) );  // 4

console.log( a.sun.apply(b,[3, 3]) );  //6
```

#### 二、call和apply一般使用情况：

``` javascript
function cat(){
}

cat.prototype={     
food:"fish",    
say: function(){      
   alert("I love "+this.food);   
   }
}

var blackCat = new cat;blackCat.say();

```
但是如果我们有一个对象whiteDog = {food:"bone"},我们不想对它重新定义say方法，那么我们可以通过call或apply用blackCat的say方法：blackCat.say.call(whiteDog);

所以，可以看出call和apply是为了动态改变this而出现的，当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。

用的比较多的，通过document.getElementsByTagName选择的dom节点是一种类似array的array。它不能应用Array下的push,pop等方法。我们可以通过：var domNodes =  Array.prototype.slice.call(document.getElementsByTagName("*"));这样domNodes就可以应用Array下的所有方法了。其他的就不提了，讲多了反而迷惑。

#### 三、bind()方法
在讨论bind()方法之前我们先来看一道题目：
``` javascript
var altwrite = document.write;
altwrite("hello");
//1.以上代码有什么问题
//2.正确操作是怎样的
//3.bind()方法怎么实现
```
对于上面这道题目，答案并不是太难，主要考点就是this指向的问题，altwrite()函数改变this的指向global或window对象，导致执行时提示非法调用异常，正确的方案就是使用bind()方法：
``` javascript
altwrite.bind(document)("hello")
```
当然也可以使用call()方法：
``` javascript
altwrite.call(document, "hello")
```
- 绑定函数
  `bind()`最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的this值。常见的错误就像上面的例子一样，将方法从对象中拿出来，然后调用，并且希望this指向原来的对象。如果不做特殊处理，一般会丢失原来的对象。使用bind()方法能够很漂亮的解决这个问题：

``` javascript
this.num = 9; 
var mymodule = {
  num: 81,
  getNum: function() { return this.num; }
};

module.getNum(); // 81

var getNum = module.getNum;
getNum(); // 9, 因为在这个例子中，"this"指向全局对象

// 创建一个'this'绑定到module的函数
var boundGetNum = getNum.bind(module);
boundGetNum(); // 81
```

- 和setTimeout一起使用
``` javascript
function Bloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 1秒后调用declare函数
Bloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

Bloomer.prototype.declare = function() {
  console.log('我有 ' + this.petalCount + ' 朵花瓣!');
};
```

