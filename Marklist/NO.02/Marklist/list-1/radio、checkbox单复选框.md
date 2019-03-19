# radio、checkbox单复选框

## radio
radio又称单选框，它是html表单中的单选按钮。通常单选按钮是成组出现的，是互斥的，每次只能选取一个。      
当点击按钮的时候，就会触发onclick事件。通过属性`checked`判断按钮是否被选中。     
声明的语法如下：`<input type="radio">`

```html
<div class="container">
    <input type="radio" name="sex" value="男" class="choose" />男
    <input type="radio" name="sex" value="女" class="choose" />女
    <input type="submit" id="btn" value="提交">
</div>
```

``` javascript
var radioObj = document.querySelectorAll('.choose');
for(var i = 0;i < radioObj.length;i++){
    if(radioObj[i].checked == true){
        console.log(radioObj[i].value);//获取选中的值
        radioObj[i].checked = false;//设置取消选中
    }else{
       //radioObj[i].checked = true;//设置选中
    }
}
```

## checkbox

checkbox又称复选框，它是html表单中的一个选择框。通过checked属性判断是否被选中。      
声明语法如下：`<input type="checkbox">`

```html
<div class="container">
    <input class="checkbox" name="frontEnd" type="checkbox" value="vue" />vue
    <input class="checkbox" name="frontEnd" type="checkbox" value="javascript" />javascript
    <input class="checkbox" name="frontEnd" type="checkbox" value="sass" />sass
    <input class="checkbox" name="frontEnd" type="checkbox" value="less" />less
</div>     
```   

``` javascript
//获取选中的值
var checkboxObj = document.querySelectorAll('.checkbox');
for(var i = 0;i < checkboxObj.length;i++){
    if(checkboxObj[i].checked == true){
        console.log(checkboxObj[i].value);//获取选中的值
        checkboxObj[i].checked = false;//设置取消选中
    }else{
        checkboxObj[i].checked = true;//设置选中
    }
}

//全选
var oChooseAll = document.querySelectorAll('.checkbox');
oChooseAll.onclick = function(){
    for(var i=0;i<oInptLen;i++){
        oInpt[i].checked = true;
    }
}

//反选
var oReverseChoose = document.querySelectorAll('.checkbox');
oReverseChoose.onclick = function(){
    for(var i=0;i<oInptLen;i++){
        oInpt[i].checked = !oInpt[i].checked;
    }
}
```

