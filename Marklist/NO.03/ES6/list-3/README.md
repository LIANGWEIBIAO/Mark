### class类
JavaScript语言的传统方法是通过构造函数，定义并生成新对象。下面是一个例子。
``` javascript
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```

上面这种写法跟传统的面向对象语言（比如C++和Java）差异很大，很容易让新学习这门语言的程序员感到困惑。

ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用ES6的“类”改写，就是下面这样。

``` javascript
//class
class person{
  construtor(name,age){
    this.name = name;
    this.age = age;
  }
  showName(){
    return this.name;
  };
}

var p1 = new Person();
alert(p1.showName);
```

`this`关键字代表实例对象