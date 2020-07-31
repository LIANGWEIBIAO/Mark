# Javascript 面向对象编程

## 面向对象编程（一）：封装

### 一、 生成实例对象的原始模式

假定我们把猫看成一个对象，它有"名字"和"颜色"两个属性。

``` javascript
　　var Cat = {
　　　　name : '',
　　　　color : ''
　　} 
```
现在，我们需要根据这个原型对象的规格（schema），生成两个实例对象。  
``` javascript
　　var cat1 = {}; // 创建一个空对象
　　　　cat1.name = "大毛"; // 按照原型对象的属性赋值
　　　　cat1.color = "黄色";
　　var cat2 = {};
　　　　cat2.name = "二毛";
　　　　cat2.color = "黑色";
```
好了，这就是最简单的封装了，把两个属性封装在一个对象里面。但是，这样的写法有两个缺点，一是如果多生成几个实例，写起来就非常麻烦；二是实例与原型之间，没有任何办法，可以看出有什么联系。
### 二、 原始模式的改进
我们可以写一个函数，解决代码重复的问题。
``` javascript
　function Cat(name,color) {
　　　　return {
　　　　　　name:name,
　　　　　　color:color
　　　　}
　　}
```
然后生成实例对象，就等于是在调用函数：
``` javascript
　var cat1 = Cat("大毛","黄色");
　var cat2 = Cat("二毛","黑色");
```
这种方法的问题依然是，cat1和cat2之间没有内在的联系，不能反映出它们是同一个原型对象的实例。
### 三、 构造函数模式
为了解决从原型对象生成实例的问题，Javascript提供了一个构造函数（Constructor）模式。
所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。
比如，猫的原型对象现在可以这样写，

``` javascript
function Cat(name,color){
　　　　this.name=name;
　　　　this.color=color;
　　}
```
我们现在就可以生成实例对象了。
``` javascript
　　var cat1 = new Cat("大毛","黄色");
　　var cat2 = new Cat("二毛","黑色");
　　alert(cat1.name); // 大毛
　　alert(cat1.color); // 黄色
```
这时cat1和cat2会自动含有一个constructor属性，指向它们的构造函数。
``` javascript
　alert(cat1.constructor == Cat); //true
　alert(cat2.constructor == Cat); //true
```
Javascript还提供了一个instanceof运算符，验证原型对象与实例对象之间的关系。
``` javascript
　　alert(cat1 instanceof Cat); //true
　　alert(cat2 instanceof Cat); //true
```
### 四、构造函数模式的问题
构造函数方法很好用，但是存在一个浪费内存的问题。
请看，我们现在为Cat对象添加一个不变的属性type（种类），再添加一个方法eat（吃）。那么，原型对象Cat就变成了下面这样：
``` javascript
　function Cat(name,color){
　　　　this.name = name;
　　　　this.color = color;
　　　　this.type = "猫科动物";
　　　　this.eat = function(){alert("吃老鼠");};
　　}
```

还是采用同样的方法，生成实例：

``` javascript
　　var cat1 = new Cat("大毛","黄色");
　　var cat2 = new Cat ("二毛","黑色");
　　alert(cat1.type); // 猫科动物
　　cat1.eat(); // 吃老鼠
```

表面上好像没什么问题，但是实际上这样做，有一个很大的弊端。那就是对于每一个实例对象，type属性和eat()方法都是一模一样的内容，每一次生成一个实例，都必须为重复的内容，多占用一些内存。这样既不环保，也缺乏效率。
``` javascript
alert(cat1.eat == cat2.eat); //false
```
能不能让type属性和eat()方法在内存中只生成一次，然后所有实例都指向那个内存地址呢？回答是可以的。
### 五、 Prototype模式
Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。
这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上。
``` javascript
　　function Cat(name,color){
　　　　this.name = name;
　　　　this.color = color;
　　}
　　Cat.prototype.type = "猫科动物";
　　Cat.prototype.eat = function(){alert("吃老鼠")};
```
然后，生成实例。
``` javascript
　　var cat1 = new Cat("大毛","黄色");
　　var cat2 = new Cat("二毛","黑色");
　　alert(cat1.type); // 猫科动物
　　cat1.eat(); // 吃老鼠
```

这时所有实例的type属性和eat()方法，其实都是同一个内存地址，指向prototype对象，因此就提高了运行效率。
``` javascript
alert(cat1.eat == cat2.eat); //true
```
### 六、 Prototype模式的验证方法
为了配合prototype属性，Javascript定义了一些辅助方法，帮助我们使用它

6.1 isPrototypeOf()
这个方法用来判断，某个proptotype对象和某个实例之间的关系。
``` javascript
alert(Cat.prototype.isPrototypeOf(cat1)); //true
alert(Cat.prototype.isPrototypeOf(cat2)); //true
```
6.2 hasOwnProperty()
每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。
``` javascript
alert(cat1.hasOwnProperty("name")); // true
```
6.3 in运算符
in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
``` javascript
　　alert("name" in cat1); // true
　　alert("type" in cat1); // true
```

## 面向对象编程（二）：继承

> 对象之间的"继承"的五种方法。

比如，现在有一个"动物"对象的构造函数。
``` javascript
　function Animal(){
　　　　this.species = "动物";
　　}
```
还有一个"猫"对象的构造函数。
``` javascript
function Cat(name,color){
　　　　this.name = name;
　　　　this.color = color;
　　}
```
怎样才能使"猫"继承"动物"呢？

### 一、 构造函数绑定

第一种方法也是最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行：
``` javascript
　function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
　　}
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
```
### 二、 prototype模式

第二种方法更常见，使用prototype属性。

如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了。

``` javascript
　　Cat.prototype = new Animal();
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
```
代码的第一行，我们将Cat的prototype对象指向一个Animal的实例。
它相当于完全删除了prototype 对象原先的值，然后赋予一个新值。
``` javascript
　　Cat.prototype = new Animal();
```

继承的本质就是通过__proto__指针指向某个对象，系统能够自动链式访问所指向的对象的属性方法。
那么对于自定义对象的继承，只需要让第二个对象的__proto__指向另一个对象即可
改变prototype的指向为Base的实例;其实把ebook地址指向了base的实例;
![此处输入图片的描述][1]


[1]: https://ooo.0o0.ooo/2017/06/14/594028d745993.png

## Javascript-原型链

>   __proto__ 是面向对象的底层实现机制，是理解面向对象本质所在。

#### 一、__proto__成员
　　做为一个对象，当你访问其中的一个成员或方法的时候，如果这个对象中没有这个方法或成员，找到该对象的`__proto__`成员所指向的另外的一个对象，并在那个对象中查找指定的方法或成员，如果不能找到，那就会继续通过那个对象的`__proto__`成员指向的对象进行递归查找，直到这个链表结束(null)，系统已经设计好，Object.prototype对象的`__proto___`为null,是所有链试属性搜索的终点。
　　
#### 二、Object对象
Object对象是Function对象的一个实例,所以Object的`__proto__`属性指向Function对象的原型；
``` javascript
console.log(Objdect.__proto__ === Function.prototype)
//所有构造函数都是函数的实例,所有都带有一个属性__proto__指向函数的原型
```




不光Object,所有内置对象都是Function对象的实例
``` javascript
Boolean.__proto__ === Function.prototype // true
String.__proto__ === Function.prototype  // true
Object.__proto__ === Function.prototype  // true
Function.__proto__ === Function.prototype //true
Array.__proto__ === Function.prototype   // true
RegExp.__proto__ === Function.prototype  // true
Error.__proto__ === Function.prototype   // true
Date.__proto__ === Function.prototype    // true
```
#### 三、原型链图
> 所有的对象不管是内置，还是自定义都是继承自object - 万物都继承自object.prototype 
> ![此处输入图片的描述][2]



  ![此处输入图片的描述][3]


[2]: https://ooo.0o0.ooo/2017/06/14/59402b379bb63.png
[3]: https://ooo.0o0.ooo/2017/06/14/59402d0ad64d4.png

## 面向对象编程（四）： 原型prototype

####  prototype属性
只要创建了一个函数，就会为该函数创建一个prototype属性，指向该函数的原型对象。实例对象是不会拥有该属性的。
默认情况下，该原型对象也会获得一个constructor属性，该属性包含一个指针，指向prototype属性所在的函数。

``` javascript
Person.prototype.constructor===Person
```

#### 对象propotype和`__propo__`的理解
在构造函数里面有一个属性叫prototype;由该函数创建的对象会默认连接到该属性上,在访问一个对象的属性的时候,首先在当前的对象中找,如果没有在其原型对象中找;     

#### 构造函数创建对象的四个步骤;  
- 1.自动创建出一个新的对象;
- 2.初始化这个对象,给这个对象添加一个`__proto__` == 构造函数.prototype;
- 3.通过这个新对象调用构造函数;
- 4.返回新对象的地址;

`__proto__`存在new出来的对象中,new出来的对象又指向原则prototype,所以有了查找规则;

#### 对象的属性查找规则;
 - 1.如果访问一个对象的属性,先会在自身上查找,如果没有;(`f.age=12` , 这就是自身);
 - 2.则根据`__proto__`对应的原型对象上去找;
 - 3.如果还没有找到,再根据这个对象的`__proto__`去找;
 - 4.一直找到object.prototype;

``` javascript
function student (name,age){
    this.name = name;
    this.age = age;
}
student.prototype.each = function () {
    console.log('吃饭!!!');
}
var xiaoming = new student('小明',18);
var xiaofan = new student('小芳',17)
xiaofan.__proto__.each = function  () {
    console.log('吃大米!!')
}
/*注意这里xiaofan修改了__propo__,因为xiaoming的__propo__都指向同一个地方,所以xiaoming
* 的__propo__也变了,所以小明的each=也变了;
* */
console.log(xiaoming.each);
//吃大米!!
```

![此处输入图片的描述][1]


[1]: https://ooo.0o0.ooo/2017/06/14/5940d8d361007.png