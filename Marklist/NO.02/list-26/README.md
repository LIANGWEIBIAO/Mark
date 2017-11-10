# 原型，构造函数，实例，原型链关系图

![](http://ouyzoz9zy.bkt.clouddn.com/17-11-10/12277787.jpg)


``` javascript
var M = function(){
   this.name = name;
}

var o3 = new M();

//instanceof 判断 这个XX实例 是不是 XX对象 的实例

03 instanceof M  (true);

03 instanceof Object (true)

M.prototype.__proto__  == object.prototype (true)

```