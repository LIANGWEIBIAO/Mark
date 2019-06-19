# extend和Object.assign合并对象    

插件内部会有`默认参数`，并且会提供一些参数让用户实现部分功能的自定义。    
那么怎么实现呢，这其实就是一个对象合并的问题，例如：  

```javascript
function extend(target, ...rest) {
    for (let i = 0; i < rest.length; i++) {
        let source = rest[i]
        for (let key in source) {
            target[key] = source[key]
        }
    }
    return target
}
// 默认参数
var options = {
    pageNumber: 1,
    pageShow: 2
};

// 用户设置
var userOptions = {
    pageShow: 3,
    pageCount: 10
}

extend(options, userOptions);

console.log(options);
// 合并后
options = {
    pageNumber: 1,
    pageShow: 3,
    pageCount: 10
}

```    

##  Object.assign 也能实现同样的方法   
`Object.assign(options, userOptions);`