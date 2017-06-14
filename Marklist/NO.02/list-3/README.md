# Javascript-原型链

>   __proto__ 是面向对象的底层实现机制，是理解面向对象本质所在。

#### 一、__proto__成员
　　做为一个对象，当你访问其中的一个成员或方法的时候，如果这个对象中没有这个方法或成员，找到该对象的`__proto__`成员所指向的另外的一个对象，并在那个对象中查找指定的方法或成员，如果不能找到，那就会继续通过那个对象的`__proto__`成员指向的对象进行递归查找，直到这个链表结束(null)，系统已经设计好，Object.prototype对象的`__proto___`为null,是所有链试属性搜索的终点。
　　
#### 二、Object对象
Object对象是Function对象的一个实例,所以Object的`__proto__`属性指向Function对象的原型；
```
console.log(Objdect.__proto__ === Function.prototype)
//所有构造函数都是函数的实例,所有都带有一个属性__proto__指向函数的原型
```
![22][1]


  
不光Object,所有内置对象都是Function对象的实例
```
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
![此处输入图片的描述][2]
  


  ![此处输入图片的描述][3]


  [1]: https://ooo.0o0.ooo/2017/06/14/59402b379bb63.png
  [2]: https://ooo.0o0.ooo/2017/06/14/59402b379bb63.png
  [3]: https://ooo.0o0.ooo/2017/06/14/59402d0ad64d4.png