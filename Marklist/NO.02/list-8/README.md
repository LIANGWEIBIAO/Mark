``` javaScript
 var Person = function (name) {
    this.name = name;
 }

 Person.prototype.sayName = function(){ //给实例对象添加方法;
    console.log(this.name)
 }

 var p1 = new Person("name")
 p1.sayName();
```