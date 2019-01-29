## js内存分配与this原理
理解 this 的原理，有助于帮我们更好地理解它的用法。JavaScript 语言之所以有 this 的设计，`跟内存里面的数据结构有关系`。
来看一个简单的示例：
```javascript
var obj = { foo: 5 };
```
上面的代码将一个对象赋值给变量 obj。JavaScript 引擎会先在内存里面，生成一个对象`{ foo: 5}`，然后把这个对象的内存地址赋值给`变量 obj`。也就是说，变量 obj 其实只是`一个地址`。后面如果要读取 obj.foo，引擎先从 obj 拿到`内存地`址，然后再从该地址读出原始的对象，返回它的 foo 属性。

这样的结构很清晰，但如果属性的值是一个函数，又会怎么样呢？比如这样：    
```javascript
var obj = { foo: function () {} };
```   
这时，JavaScript 引擎会将函数单独保存在内存中，然后再将函数的地址赋值给 foo 属性的 `value 属性`。   
![](https://user-gold-cdn.xitu.io/2019/1/19/16864091b7cf8373?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)     
可以看到，函数是一个单独的值(以地址形式赋值)，所以才可以在不同的`环境中执行`。
又因为，JavaScript 允许在函数体内部，引用`当前环境`的其他变量。所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是在函数体内部，`指代函数当前的运行环境`。  

#### 重点记住：this的指向与执行环境有关

例子:    
```javascript
this.name="jack";
var demo={
name:"rose",
getName:function(){return this.name;}
}

console.log(demo.getName());//输出rose  这里的this指向demo

var another=demo.getName;
console.log(another())//输出jack  这里的this指向全局对象.this的指向与执行环境有关

```   

#### 面试题    
```javascript
window.val = 1;
 
var obj = {
    val: 2,
    dbl: function () {
        this.val *= 2; 
        val *= 2;
        console.log('val:', val);
        console.log('this.val:', this.val);
    }
};

 // 说出下面的输出结果
 obj.dbl();
 var func = obj.dbl;
 func();

```    


答案是输出：2 、 4 、 8 、 8 。    

#### 解析：
执行 obj.dbl(); 时， this.val 的 this 指向 obj，而下一行的 val 指向 window。所以，由 window.val 输出 2，obj.val 输出 4 。
最后一行 func(); 的调用者是 window。 所以，现在的 this.val 的 this 指向 window。
别忘了刚才的运算结果，window.val 已经是 2 了，所以现在 this.val *= 2; 的执行结果就是 4。
val *= 2; 的执行结果，就是 8 了。 所以，最终的结果就是输出 8 和 8 。


