# 前言   
HTML5 的 web Storage 存储方式有两种：localStorage 和 sessionStorage。

这两种方式都是通过键值对保存数据，存取方便，不影响网站性能。他们的用法相同，存储时间不同。
localStorage 的数据保存在本地硬件上，可以永久保存，可以手动调用api清除数据。sessionStorage 保存在 session 对象中，会在浏览器关闭时被清除。

web Storage 的大小在浏览器上是有限制的，不同浏览器大小会有区别，在主流浏览器中，大小约为 5M，用来存储普通数据其实已经足够。    

# 用法   
以 localStorage 为例，sessionStorage 用法一样：    
## setItem   
保存数据：localStorage.setItem(key,value);

示例：    
```javascript
localStorage.setItem('name','Hello World');
```   
当 key 相同时会覆盖之前的 value，用于修改数据。如果 value 为对象，需转为 json 字符串，否则你读取出来的将会是 [object Object]     
## getItem    
读取数据：localStorage.getItem(key);     
示例：    
```javascript
localStorage.getItem('name');       // Hello World
```    
## removeItem    
删除单个数据：localStorage.removeItem(key);    
示例：   
```javascript
localStorage.removeItem('name');
localStorage.getItem('name');       // null
```    
删除 key 为 name 的数据后，loaclStorage 里已经获取不到该数据，则返回 null;    
## clear   
删除所有数据：localStorage.clear();      
示例：     
```javascript
localStorage.clear();
```   
此时会把 localStorage 中的所有数据都删除。     
## key   
得到某个索引的key：localStorage.key(index);    
示例：    
```javascript
localStorage.setItem('name1','Hello World');
localStorage.setItem('name2','Hello Linxin');
localStorage.key(1);                // name2
```     
获取到索引为 1 的 key，即 name2。     

## 构造函数    
在实际项目中，可能需要多次对 localStorage 进行操作，我们可以通过一个构造函数来更好的操作。    
示例：

```javascript
var localEvent = function (item) {
    this.get = function () {
        return localStorage.getItem(item);
    }
    this.set = function (val) {
        localStorage.setItem(item, val);
    }
    this.remove = function () {
        localStorage.removeItem(item);
    }
    this.clear = function () {
        localStorage.clear();
    }
}

// 使用new字符把构造函数实例化出多个对象
var local1 = new localEvent('name1');
var local2 = new localEvent('name2');

local1.set('Hello World');
local2.set('Hello Linxin');

local1.get();               // Hello World
local2.get();               // Hello Linxin
```     
这里只是简单的演示，像我们平时在项目中可能要把对象存储起来，就需要在代码里做些处理。    

## 监听 storage 事件    
可以通过监听 window 对象的 storage 事件并指定其事件处理函数，当页面中对 localStorage 或 sessionStorage 进行修改时，则会触发对应的处理函数。    
```javascript
window.addEventListener('storage',function(e){
    console.log('key='+e.key+',oldValue='+e.oldValue+',newValue='+e.newValue);
})
```
