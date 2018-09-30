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

### 嵌套循环

要展示的数据格式

``` javascript
list:[ {
        "name" : "",
            "age" : 24,
            "scoreList" : [ {
                "sname" : "java",
                "score" : 100
            }, {
                "sname" : "c++",
                "score" : 100
            } ]
        } ]

```

模板代码

``` javascript
<script id="testTemplate" type="text/html">
    {{each list}}
        <span>{{$value.name}}</span>
        <span>{{$value.age}}</span>
        {{include 'scoreTemplate' $value}} <!--引入子模板-->
    {{/each}}
</script>

<script id="scoreTemplate" type="text/html">
    {{each scoreList}}
        <span>{{$value.name}}</span>
        <span>{{$value.score}}</span>
    {{/each}}
</script>

```