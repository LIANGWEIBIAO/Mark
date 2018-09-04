### promise
#### 基本用法
ES6规定，Promise对象是一个构造函数，用来生成Promise实例。

下面代码创造了一个Promise实例。
``` javascript
var promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数。
``` javascript
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

#### Promise 简单例子

示例一
``` javascript
let promise = new Promise((resolve,reject){
    wx.request({
       url."http://www.lxj.com/v1/Classic/latest",
       success:(res)=>{
             resolve(res)
       }
    })
})
promise.then((res)=>{
    console.log(res)
})

```
示例二
``` javascript
//Ajax
oBtn.onclick = function (){
  let p1 = new promise(function(resolve,reject){
    ajax('a.txt',function(str){
        resolve(str);  //成功
      },function(){
        reject(str)    //失败
      })
  })
    
    //ajax请求数据后把数据传递出来。
  p1.then((str)=>{
    oBox.innerHTML = str;
  })
}

```

### 什么是async、await？
await得到Promise对象之后就等待Promise接下来的resolve或者reject。
来看一段简单的代码：
``` javascript
async function testSync() {
     const response = await new Promise(resolve => {
         setTimeout(() => {
             resolve("async await test...");
          }, 1000);
     });
     console.log(response);
}
testSync();//async await test...

``` 

就这样一个简单的async、await异步就完成了。使用async、await完成异步操作代码可读与写法上更像是同步的，也更容易让人理解。