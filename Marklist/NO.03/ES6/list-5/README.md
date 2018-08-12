### 箭头函数
ES6允许使用“箭头”`（=>）`定义函数。

``` javascript
var f = v => v;
```
上面函数的等同于
``` javascript
var f = function(v) {
  return v;
};
```
如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
``` javascript
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
``` javascript
var sum = (num1, num2) => { return num1 + num2; }
```
- 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
``` javascript
var getTempItem = id => ({ id: id, name: "Temp" });
```
- 箭头函数可以与变量解构结合使用。
``` javascript
const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}
```
- 箭头函数的一个用处是简化回调函数。
``` javascript
// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);
```