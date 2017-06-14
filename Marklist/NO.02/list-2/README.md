# Javascript面向对象编程（二）：构造函数的继承

> 对象之间的"继承"的五种方法。

比如，现在有一个"动物"对象的构造函数。
```
　function Animal(){
　　　　this.species = "动物";
　　}
```
还有一个"猫"对象的构造函数。
```
function Cat(name,color){
　　　　this.name = name;
　　　　this.color = color;
　　}
```
怎样才能使"猫"继承"动物"呢？

#### 一、 构造函数绑定

第一种方法也是最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行：
```
　function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
　　}
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
```
#### 二、 prototype模式

第二种方法更常见，使用prototype属性。

如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了。

```
　　Cat.prototype = new Animal();
　　var cat1 = new Cat("大毛","黄色");
　　alert(cat1.species); // 动物
```
代码的第一行，我们将Cat的prototype对象指向一个Animal的实例。
它相当于完全删除了prototype 对象原先的值，然后赋予一个新值。
```
　　Cat.prototype = new Animal();
```
　
继承的本质就是通过__proto__指针指向某个对象，系统能够自动链式访问所指向的对象的属性方法。
那么对于自定义对象的继承，只需要让第二个对象的__proto__指向另一个对象即可
改变prototype的指向为Base的实例;其实把ebook地址指向了base的实例;
![此处输入图片的描述][1]


  [1]: https://ooo.0o0.ooo/2017/06/14/594028d745993.png