# javascript原型和闭包 —— 继承

### javascript中的继承是通过原型链来体现的

``` javascript
function Foo() {
  this.c = 0
}

var  f1 = new Foo()
f1.a = 10

Foo.prototype.a = 100
Foo.prototype.b = 200

console.log(f1.a) // 10
console.log(f1.b) // 200
console.log(f1.c) // 0
```

f1是Foo函数new出来的
`f1.a` a是f1对象的基本属性
`f1.b` b是从Foo.prototype得来的, `f1.__proto__`指向Foo.prototype

> 访问一个对象的属性时，先在基本属性中查找，如果没有，再沿着__proto__这条链向上找，这就是原型链。

### 如何区分属性是基本属性还是在原型中找到的？

> hasOwnProperty
