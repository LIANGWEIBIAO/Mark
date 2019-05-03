# 事件委托
## jQuery 中的事件委托    
`$.on`: 基本用法:     
```javascript
$('.parent').on('click', 'a', 
   function () { 
     console.log('click event on tag a');
   }
)
```
`'.parent' `元素之下的` a`元素的事件代理到`$('.parent')`之上，只要在这个元素上有点击事件，就会自动寻找到 `.parent `元素下的 `a `元素，然后响应事件；    

## 原生基本实现    
比如我们有这样的一个 HTML 片段：    
```html
<ul id="list">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
</ul>
```    
我们来实现把 #list 下的 li 元素的事件代理委托到它的父层元素也就是 #list 上：    
```javascript
// 给父层元素绑定事件
document.getElementById('list').addEventListener('click', function (e) {
  // 兼容性处理
  var event = e || window.event;
  var target = event.target || event.srcElement;
  // 判断是否匹配目标元素
  if (target.nodeName.toLocaleLowerCase === 'li') {
    console.log('the content is: ', target.innerHTML);
  }
});
```
