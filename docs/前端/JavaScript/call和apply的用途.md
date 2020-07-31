## call、apply 以及 bind 的区别和用法

### call 和 apply 的共同点
`call` 和 `apply` 都是为了改变函数体内部`this`的指向，也就是把Function(即this)绑定到obj，这时候obj具备了Function的属性和方法，说白一点就是obj继承了Function的属性和方法。    

另外，它们的写法也很类似，`调用 call 和 apply 的对象`，`必须是一个函数 Function`。接下来，就会说到具体的写法，那也是它们区别的主要体现。   





### call

call方法第一个参数也是作为函数上下文的对象，但是后面传入的是一个参数列表，而不是单个数组。

```javascript
var foo = {
    value : 1
}
function bar() {
    console.log(this.value)
}
// 如果不对this进行绑定执行bar() 会返回undefined
bar.call(foo) // 1
```

当使用 call 或者 apply 的时候,如果我们传入的第一个参数为 null,函数体内的 this 会指 向默认的宿主对象,在浏览器中则是 window。

```javascript
var func = function( a, b, c ){ 
   console.log(this === window); // 输出:true
};
func.apply( null, [ 1, 2, 3 ] );
```

### call的实现原理

试想当调用 call 的时候，也就是类似于

```javascript
var foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
}
foo.bar() // 1
```

这样就把 this 指向到了 foo 上，但是这样给 foo 对象加了一个属性，有些瑕疵，不过不要紧，执行完删除这个属性就可以完美实现了。

也就是说步骤可以是这样：

1. 将函数设为对象的属性
2. 执行这个函数
3. 删除这个函数

下面就试着去实现一下：

```javascript
Function.prototype.call2 = function (...values) {
    let obj = values[0] //要指向的对象

    obj.fn = this; // 往对象里面添加要执行的函数

    values.splice(0,1) 

    obj.fn(...values); //执行函数，函数this执行obj
}


var foo = {
   value: 1
}

function bar(name, age) {
   console.log(name)
   console.log(age)
   console.log(this.value);
}

bar.call2(foo, 'black', '18')
```

### apply
`apply()`方法传入两个两个参数：一个是作为函数上下文的对象，另一个是作为函数参数所组成的数组。

```javascript
 var obj = {
      name : 'linxin'
  }

  function func(firstName, lastName){
      console.log(firstName + ' ' + this.name + ' ' + lastName);
  }

  func.apply(obj, ['A', 'B']);    // A linxin B
```

### apply的实现原理

`apply`的方法和 `call` 方法的实现类似，只不过是如果有参数，以数组形式进行传递，直接上代码：

```javascript
Function.prototype.apply2 = function(context) {
    var context = context || window
    context.fn = this // this 也就是调用apply的函数
    var result
    // 判断是否有第二个参数
    if(arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn()
    return result
}

var foo = {
    value: 1
}
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
bar.apply2(foo, ['black', '18']) // black 18 1
```


###  bind

call和apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数。

```javascript
var obj = {
     name: 'linxin'
}

function func() {
     console.log(this.name);
}

var func1 = func.bind(obj);
func1();     
```

bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数。而原函数 func 中的 this 并没有被改变，依旧指向全局对象 window。

```javascript
function func(a, b, c) {
   console.log(a, b, c);
}
var func1 = func.bind(null,'linxin');

func('A', 'B', 'C');            // A B C
func1('A', 'B', 'C');           // linxin A B
func1('B', 'C');                // linxin B C
func.call(null, 'linxin');      // linxin undefined undefined
```




### 面试题
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

