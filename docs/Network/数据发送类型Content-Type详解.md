# 数据发送类型Content-Type详解



## 一、application/x-www-form-urlencoded

Content-Type 被指定为 application/x-www-form-urlencoded；其次，提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。大部分服务端语言都对这种方式有很好的支持。例如 PHP 中，`$_POST['title']` 可以获取到 title 的值，`$_POST['sub']` 可以得到 sub 数组。

### **case1: 表单自动提交**

```html
<form action="/formSubmit" method="POST">
  <input type="text" name="name" value="123">
  <input type="text" name="age" value="123">
  <button>提交</button>
</form>
```

Form data : name=123&age=123



### **case2: `Jquery.ajax` post类型的默认发送类型**

```javascript
Jquery.ajax({
  url: '/jquery-urlencoded',
  type: 'post',
  data: {
    a: 1, b: 2,
    c: { a: 1, b: 2 }
  },
  success: () => { },
  error: err => console.log(err)
})
```

Form Data : a=1&b=2&c%5Ba%5D=1&c%5Bb%5D=2

### **case3: 修改`axios`的默认请求头并转化数据格式**

```javascript
Axios({
  url: "/axios-urlencoded",
  method: "post",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset:UTF-8"
  },
  data: qs.stringify({
    a: 1, b: 2,
    c: { a: 1, b: 2 }
  })
}).then(() => { })
```

Form Data : a=1&b=2&c%5Ba%5D=1&c%5Bb%5D=2

在使用axios时，修改`Content-Type`（默认值`application/json`），并且用`qs`转化数据格式，也是因为后台语言更支持`application/x-www-form-urlencoded`类型，否则某些后台语言、框架会接收不到数据

## 二、application/json

用于提醒后台提交的是json字符串形式的数据。优点在于传输`{a:[{a:[1,2,3]}]}`这种复杂结构的数据，使用json形式要比键值对形式更直观更方便，后台接收到数据后，直接转化类型即可使用

### **case1 : axios post默认格式**

```javascript
Axios.post('/axios', {
  a: 1, b: 2,
  c: { a: 1, b: 2 }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

Request Payload : {"a":1,"b":2,"c":{"a":1,"b":2}}

### **case 2 : jquery设置`Content-type`，并转化数据为字符串**

```javascript
Jquery.ajax({
  url: '/jquery-application-json',
  type: 'post',
  processData: false,
  contentType: "application/json;charset=UTF-8",
  data: JSON.stringify({
    a: 1, b: 2,
    c: { a: 1, b: 2 }
  }),
  success: () => { },
  error: err => console.log(err)
})
```

Request Payload : {"a":1,"b":2,"c":{"a":1,"b":2}}

## 三、multipart/form-data

### case1 :提交的数据为`FormData`

 ajax post提交的数据为`FormData`对象时，`Content-Type`自动设置为`multipart/form-data`

```javascript
const xhr = new XMLHttpRequest();
const fd = new FormData();

fd.append('name', 'liyang');
fd.append('avatar', this.$refs.image.files[0]);
xhr.open("POST", '/native-ajax-form-data', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    alert(xhr.responseText); // handle response.
  }
};
xhr.send(fd)
```

```
------WebKitFormBoundaryEUDwjVQS6V8tkel4
Content-Disposition: form-data; name="name"

liyang
------WebKitFormBoundaryEUDwjVQS6V8tkel4
Content-Disposition: form-data; name="avatar"; filename="upload.png"
Content-Type: image/png


------WebKitFormBoundaryEUDwjVQS6V8tkel4--
```

### **case 2: `enctype`属性设置为`multipart/form-data`**

```html
<form action="/form-form-data" method="POST" enctype="multipart/form-data">
  <input type="text" name="name" value="">
  <input type="text" name="age" value="">
  <button>提交</button>
</form>
```

```
------WebKitFormBoundarymbGh3Kll05jGm3Zt
Content-Disposition: form-data; name="name"

liyang
------WebKitFormBoundarymbGh3Kll05jGm3Zt
Content-Disposition: form-data; name="age"

13
------WebKitFormBoundarymbGh3Kll05jGm3Zt--
```

