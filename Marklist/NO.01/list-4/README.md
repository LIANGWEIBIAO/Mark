# css input和输入框美化

- input file
input file上传按钮的美化思路是，先把之前的按钮透明度opacity设置为0,然后，外层用div包裹，就实现了美化功能。
``` css
<a href="javascript:;" class="a-upload">
    <input type="file" name="" id="">点击这里上传文件
</a>
```


- 单选框和多选框美化
css
``` css
 input[type="radio"] {
        display: none;
}
    
input[type="radio"] + i {
    border-radius: 7px;
}

input[type="radio"]:checked + i {
    background: #2489c5;
}
```
html
``` html
<label>
    <input type="checkbox">
    <i>✓</i>
    复选框
    </label>
<label>
```
单选框和多选框美化重要还是隐藏选择框本身，`+`是[相邻兄弟选择器](http://www.w3school.com.cn/tiy/t.asp?f=csse_selector_adjacent_sibling) 
使用`label`包裹`input`主要是实现点击文字是也可以选中文本框


  [1]: https://ws1.sinaimg.cn/large/7ae924b5gy1fh8uv5tb2pj20fi0biq30.jpg