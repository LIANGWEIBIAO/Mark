# javascript中的this机制

### this机制的四种规则

- 1.默认绑定全局变量

  最常见的情况，当函数被单独定义和调用的时候，this绑定全局变量,this就是window。

  ``` javascript
  function fn() {
    console.log( this.a );
  }
  var a = 2;
  fn(); // 2 -- fn单独调用，this引用window
  ```

- 2.隐式绑定

  隐式调用的意思是，函数调用时拥有一个上下文对象。

  需要注意的是，最后一个调用该函数的对象是传到函数的上下文对象。

  例如obj1.obj2.fn(),此时this指向obj2。

  ``` javascript
  function fn() {
    console.log( this.a );
  }
  var obj = {
    a: 2,
    fn: fn
  };
  obj.fn(); // 2 -- this引用obj。
  ```

- 3.显示绑定

  `bind()` `apply()` `call()`，这三个函数接收的第一个参数(上下文对象)并将其赋给this。

  ``` javascript
  function fn() {
    console.log( this.a );
  }
  var obj = {
    a: 2
  };
  fn.call( obj ); // 2
  ```

  如果传入空值，即：

  ``` javascript
  fn.call(null)
  ```

  此时this又再次指向全局对象window。

- 4.new新对象绑定

  如果是一个构造函数，那么用new来调用，那么绑定的将是新创建的对象。

  ``` javascript
  function Fn(a) {
    this.a = a;
  }
  var bar = new Fn( 2 );
  console.log( bar.a );// 2
  ```
