# Ajax搭配Promise的简单封装

先说一下平时工作的情况：
日常的工作业务中，与后端数据交互只用了两种形式，`GET`和`POST`，写业务代码的时候传的参数都是对象格式`{name:'jason',age:27}`，一般都是这样写：

``` javascript
Http.get('api/userCenter/bookList.json', {
    date: '2010',
    lang: 'en'
}).then(function(res) {
    console.log(res);
})

Http.post('api/userCenter/login.json', {
    mobile: 13821863666,
    psd: 123123
}).then(function(res) {
    console.log(this);
})
```

`GET`传输时，需要把对应的参数拼接在`URL`的后面；`POST`传输时，`send`的数据格式也主要只用到了以下三种：

- `Content-Type: application/x-www-form-urlencoded`，send(data)中的`data`数据格式为`"name=jason&age=27"`，此时需要序列化参数对象
- `Content-Type: application/json`，`send(data`中的`data`数据格式为`"{"mobile":13821863666,"psd":123123}"`，此时需要用`JSON.stringify()`把参数对象转换成`json`字符串
- 使用`FormData`对象，直接`send(FormDataObj)`即可，此时不需要设置`Content-Type`

我就针对以上这些应用场景对ajax做了简单的封装


之后就可以在其他文件中使用`get`和`post`这两个接口：

``` javascript
import Http from 'http'

Http.get('api/userCenter/bookList.json', {
    date: '2010',
    lang: 'en'
}).then(function(res) {
    console.log(res);
})

Http.post('api/userCenter/login.json', {
    mobile: 13821863666,
    psd: 123123
}).then(function(res) {
    console.log(this);
})
```
`get`的使用形式是`Http.get(url, data)`；`post`的使用形式是`Http.post(url, data, contentType)`，第三个参数`contentType`可选，当设置了对应的值时，`http.js`会对传入的参数做不同格式化的处理。

[完整demo](./assets/http.js) .

