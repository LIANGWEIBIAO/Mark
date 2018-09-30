# art-template常用总结

``` javascript
//1.编写HTML模板
<script id="test" type="text/html">
    <h1>{{title}}</h1>
</script>

//2.向模板插入数据，并输出到页面
var data = {
    title:"hello world"
};
var html = template("test",data);
document.getElementById('content').innerHTML = html;
```

### 循环遍历语句
``` javascript
<script id="test" type="text/html">
<div>
    <ul>
        {{if c==100}}
            <ul>
                {{each person}}
                    <li>
                        编号：{{$index+1}}--姓名：{{$value.name}}--年龄：{{$value.age}}
                    </li>
                {{/each}}
            </ul>
        {{/if}}
    </ul>
</div>
</script>

<script>
    var data = {
        c:100,
        person:[
            {name:"jack",age:18},
            {name:"tom",age:19},
            {name:"jerry",age:20},
            {name:"kid",age:21},
            {name:"jade",age:22}
        ]
    };
    var html = template("test",data);
    document.getElementById("content").innerHTML = html;
</script>
```


### 流程控制语句（if else）

``` javascript
<script id="test" type="text/html">
    <div>
        {{if bok==22}}
        <h1>线上</h1>
        {{else if bok==33}}
        <h2>隐藏</h2>
        {{else}}
        <h3>走这里</h3>
        {{/if}}
    </div>
</script>
<script>
    var data = {
        "bok":22
    };
    var html = template('test',data);
    document.getElementById("app").innerHTML = html;
</script>
```