# jsonp跨域请求原理


在进行网站开发的过程中经常会用到第三方的数据，但是由于同源策略的限制导致ajax不能发送请求，因此也无法获得数据。解决ajax的跨域问题有两种方法：

- jsop 　
- XMLHttpRequest2中可以配合服务端来解决，在响应头中加入Access-Control-Allow-Origin:*
　　
#### 1、同源：
　　同源策略是浏览器的一种安全策略，所谓同源是指，域名，协议，端口号完全相同
　　1.1目的：保护用户信息安全
　　1.2限制：cookie、localStorage和IndexDB无法读取
　　无法操作跨域的iframe里的dom元素
　　ajax请求不能发送

####  2、跨域：
如果这三个有一个不一样就是跨域了则为跨域

#### 3、jsonp原理：
其本质是利用了标签具有可跨域的特性，由服务端返回预先定义好的javascript函数的调用，并且将服务端数据以该函数参数的形式传递过来。
``` javascript
<script>
    //预先定义函数
    function fuc(data){
        console.log(data.name);
        data = data.name
    }
</script>
 //执行返回函数
<script src="http://www.baidu.com/api.php?callback=fuc"></script>  
```

#### 4、后台代码

``` javascript
<?php
    $cb = $_GET['callback'];
     $data = array(
                 'name'=> 'zs',
                 'age'=>18,
                 'gender'=>true
             );
     echo $cb.'('.json_encode($data).')';
 ?>  
```

#### 5、案例：利用jsonp访问百度天气

``` javascript
$(function () {
        // 发送jsonp请求
        $.ajax({
            type:"get",
            url:'http://api.map.baidu.com/telematics/v3/weather?output=json&ak=0A5bc3c4fb543c8f9bc54b77bc155724',
            data:{
                location:$("#city").val()||"上海"
            },
            dataType:"jsonp",
            success: function (data) {
                //渲染模版
                var html = template('template',{list:data.results[0].weather_data})
                $('tbody').html(html);

            }
        });
    });
```


