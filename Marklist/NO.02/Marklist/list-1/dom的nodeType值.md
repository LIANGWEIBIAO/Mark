# HTML DOM的nodeType值   
将HTML DOM中几个容易常用的属性做下记录：   

## nodeName、nodeValue 以及 nodeType 包含有关于节点的信息。  
### nodeName 属性含有某个节点的名称。   
- 元素节点的 nodeName 是标签名称  
- 属性节点的 nodeName 是属性名称   
- 文本节点的 nodeName 永远是 #text   
- 文档节点的 nodeName 永远是 #document   

### nodeValue   
对于文本节点，nodeValue 属性包含文本。    
对于属性节点，nodeValue 属性包含属性值。    
nodeValue 属性对于文档节点和元素节点是不可用的。   

### nodeType   
nodeType 属性可返回节点的类型。   
最重要的节点类型是：    
|元素类型|节点类型|
|--|--|
|元素element|1|
|元素element|2|
|元素element|3|
|元素element|8|
|元素element|9|    

HTML文件:
```html   
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1 id="h1">An HTML Document</h1>
    <p id="p1">This is a <i>W3C HTML DOM</i> document.</p>
    <p><input id="btnDemo1" type="button" value="取H1 Element节点值"></p>
    <p><input id="btnDemo2" type="button" value="取H1 Element节点文本"></p>
    <p><input id="btnDemo3" type="button" value="取Document Element节点文本"></p>
    <p><input type="button" alt="这是个演示按钮" title="演示按钮提示标题" name="btnShowAttr" id="btnShowAttr" value="按钮节点演示" /></p>
</body>

</html>
<script>
    function showElement() {
        var element = document.getElementById("h1"); //h1是一个<h1>标签
        console.log('nodetype:' + element.nodeType); //nodeType=1
        console.log('nodeName:' + element.nodeName);
        console.log('nodeValue:' + element.nodeValue); //null
        console.log('element:' + element);
    }

    function showText() {
        var element = document.getElementById("h1");
        var text = element.childNodes[0];
        console.log('nodeType:' + text.nodeType); //nodeType=3
        console.log('nodeValue:' + text.nodeValue); //文本节点的nodeValue是其文本内容
        text.nodeValue = text.nodeValue + "abc"; //文本内容添加修改删除等等。
        console.log('nodeName:' + text.nodeName);
        console.log(text.data); //data同样是其内容,这个属性下同样可以增删改。
    }

    function showDocument() {
        console.log('nodeType:' + document.nodeType); //9
        console.log('nodeName:' + document.nodeName);//一个对象
        console.log(document);
    }

    function showAttr() {
        var btnShowAttr = document.getElementById("btnShowAttr"); //演示按钮，有很多属性
        var attrs = btnShowAttr.attributes;
        for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];
            console.log('nodeType:' + attr.nodeType); //attribute 的nodeType=2
            console.log('attr:' + attr);
            console.log('attr.name:' + attr.name + '=' + attr.value);

        }

    }

    function demo() {
        var btnDemo1 = document.getElementById("btnDemo1");
        btnDemo1.onclick = showElement; //按钮1取节点nodetype值
        var btnDemo2 = document.getElementById("btnDemo2");
        btnDemo2.onclick = showText;
        var btnDemo3 = document.getElementById("btnDemo3");
        btnDemo3.onclick = showDocument;
        var btnShowAttr = document.getElementById("btnShowAttr");
        btnShowAttr.onclick = showAttr;

    }
    window.onload = demo;
</script>
```