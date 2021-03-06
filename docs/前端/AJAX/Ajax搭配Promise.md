# Ajax搭配Promise封装

## 使用说明

日常的工作业务中，与后端数据交互只用了两种形式，`GET`和`POST`，

写业务代码的时候传的参数都是对象格式`{name:'jason',age:27}`，

一般都是这样写：

``` javascript
Http.get('api/userCenter/bookList.json', {
    age:18,
    name: '小白'
}).then(function(res) {
    console.log(res);
})

Http.post('api/userCenter/login.json', {
    age:18,
    name: '小白'
}).then(function(res) {
    console.log(this);
})
```

`GET`传输时，需要把对应的参数拼接在`URL`的后面；

`POST`传输时，`send`的数据格式也主要只用到了以下三种：

- `Content-Type: application/x-www-form-urlencoded`，send(data)中的`data`数据格式为`"name=jason&age=27"`，此时需要序列化参数对象

- `Content-Type: application/json`，`send(data`中的`data`数据格式为`"{"mobile":13821863666,"psd":123123}"`，此时需要用`JSON.stringify()`把参数对象转换成`json`字符串

- 使用`FormData`对象，直接`send(FormDataObj)`即可，此时不需要设置`Content-Type`




## 封装代码

```javascript
// http.js

function ajax(type, url, data, contentType) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
  
      // 查询字符串中每个参数的名称和值都必须使用 encodeURIComponent() 进行编码，然后才能放到 URL 的末尾；
      // 所有名-值对儿都必须由和号 ( & ) 分隔
  
      if (type.toUpperCase() === 'GET' && data) {
        for (key in data) {
          url += (url.indexOf('?') == -1 ? '?' : '&');
          url += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }
      }
  
      /** post传输，当传FormData类型的数据时，不需要设置Content-Type
       *  当数据格式为纯对象时
       *  默认设置'Content-Type'为'application/x-www-form-urlencoded'，对数据进行序列化
       *  如果'Content-Type'设置为'application/json'，数据直接传json字符串
       **/
      xhr.open(type, url, true);
  
      if (type.toUpperCase() === 'POST') {
        if (!contentType || contentType === 'application/x-www-form-urlencoded') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          // data = serialize(data);
          var html = "";
          for (key in data) {
            html += (html.indexOf('=') == -1 ? '' : '&');
            html += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
          }
          data = html;
  
        } else {
          xhr.setRequestHeader('Content-Type', 'application/json');
          data = JSON.stringify(data);
        }
      }
  
      xhr.onload = function () {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          var res = JSON.parse(xhr.response);
          resolve(res);
        } else {
          reject(xhr.statusText);
        }
      };
  
      xhr.timeout = 10000;
      xhr.ontimeout = function () {
        reject('链接超时！')
      };
      xhr.onerror = function () {
        reject('网络错误！');
      };
      xhr.onabort = function () {
        reject('请求取消！');
      };
  
      xhr.send(type.toUpperCase() === 'GET' ? null : data); // 如果不需要通过请求主体发送数据，则必须传入null，因为这个参数对有些浏览器来说是必需的
    });
  }
  
  export default {
    get: function(url, data) {
      return ajax('GET', url, data);
    },
    post: function(url, data, contentType) {
      return ajax('POST', url, data, contentType);
    }
  }
  

  
  // note：xhr的兼容写法
  // function XHR() {
  //   if (window.XMLHttpRequest) return new XMLHttpRequest();
  //   if (window.ActiveXObject) return new ActiveXObject('Microsoft.XMLHTTP');
  //   return 'Not support XMLHttpRequest!';
  // }
  
  
  /**
   * Converts an object to x-www-form-urlencoded serialization.
   * http://victorblog.com/2012/12/20/make-angularjs-http-service-behave-like-jquery-ajax/
   * @param  {Object} obj
   * @return {String}
   */
  function serialize(obj) {
    var query = '',
      name, value, fullSubName, subName, subValue, innerObj, i;
  
    for (name in obj) {
      value = obj[name];
  
      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += serialize(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += serialize(innerObj) + '&';
        }
      } else if (value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }
  
    return query.length ? query.substr(0, query.length - 1) : query;
  }
```




