# Javascript 面向对象编程（四）： 原型prototype
####  prototype属性
　　只要创建了一个函数，就会为该函数创建一个prototype属性，指向该函数的原型对象。实例对象是不会拥有该属性的。
　　默认情况下，该原型对象也会获得一个constructor属性，该属性包含一个指针，指向prototype属性所在的函数。
```
Person.prototype.constructor===Person
```

#### 对象propotype和`__propo__`的理解
　　在构造函数里面有一个属性叫prototype;由该函数创建的对象会默认连接到该属性上,在访问一个对象的属性的时候,首先在当前的对象中找,如果没有在其原型对象中找;
　　
#####构造函数创建对象的四个步骤;
- 1.自动创建出一个新的对象;
- 2.初始化这个对象,给这个对象添加一个`__proto__` == 构造函数.prototype;
- 3.通过这个新对象调用构造函数;
- 4.返回新对象的地址;

`__proto__`存在new出来的对象中,new出来的对象又指向原则prototype,所以有了查找规则;

#####对象的属性查找规则;
 - 1.如果访问一个对象的属性,先会在自身上查找,如果没有;(`f.age=12` , 这就是自身);
 - 2.则根据`__proto__`对应的原型对象上去找;
 - 3.如果还没有找到,再根据这个对象的`__proto__`去找;
 - 4.一直找到object.prototype;
 
```
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