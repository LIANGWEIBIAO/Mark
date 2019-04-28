# js修改DOM属性和方法

## 操作 className    
### addClass   
给元素增加 class，使用 classList 属性，该属性返回的是 DOMTokenList 对象，对象有一个 add 方法可添加 class，如果没有这个属性那么使用 className 进行字符串拼接    
```javascript
function addClass(el, className) {
    el.classList ? el.classList.add(className) : el.className += ` ${className}`
}
```   
### hasClass    
检查是否存在某个 class   
```javascript
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : el.className.split(' ').includes(className)
}
```   
### removeClass    
删除元素的某个 class   
```javascript
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className)
    } else {
        const classList = el.className.split(' ')
        classList.splice(classList.indexOf(className), 1)
        el.className = classList
    }
}
```   
### toggleClass   
toggle 根据情况设置或取消设置 class    
```javascript
function toggleClass(el, className) {
    if (el.classList) {
        el.classList.toggle(className)
    } else {
        const classList = el.className.split(' ')
        if (classList.includes(className)) {
            classList.splice(classList.indexOf(className), 1)
            el.className = classList.join(' ')
        } else {
            el.className += ` ${className}`
        }
    }
}
```   

## 元素的属性和值

### attr   
通过 getAttribute 获取 html 元素的属性    
`el.getAttribute(attrName)`    

通过 setAttribute 设置 html 元素的属性
`el.getAttribute(attrName)`    

通过 removeAttribute 获取 html 元素的属性    
`el.removeAttribute(attrName)`     

## 操作父子关系节点    
### parent    
获取父元素    
`el.parentNode`     

### appendChild     
在元素后追加新的元素，直接使用 appendChild 方法即可    
```javascript
function appendChild(parentNode, newEl) {
    parentNode.appendChild(newEl)
}
```    
### insertBefore   
在元素前面插入新的元素，直接使用 insertBefore 即可，注意要在 parentNode 上调用，refEl 代表参照节点   
```javascript
function insertBefore(parentNode, newEl, refEl) {
    parentNode.insertBefore(newEl, refEl)
}
```   
### children   
获取元素节点，浏览器表现相同。      
`el.children`    
或使用 querySeclectorAll

### childNodes    
获取节点，不同浏览器表现不同；
``el.childNodes`      

### hasChild
```javascript
function hasChild(el, child) {
    if (typeof child === 'string') {
        return el.querySelector(child) !== null
    } else {
        return el !== child && el.contains(child)
    }
}
```    
### hasChildNodes   
检查元素是否有子元素    
`parentNode.hasChildNodes`    

### removeChild   
删除元素指定的子元素    
`parentNode.removeChild(childNode)` 

### replaceChild   
使用一个节点替代另一个节点   
`parentNode.replaceChild(newNode, oldNode)`    

### firstChild   
获取元素第一个子节点   
`parentNode.firstChild`   

### lastChild   
获取元素第一个子节点    
`parentNode.lastChild`    

## 操作兄弟关系节点   
### elementSibling
获取下一个或前一个 nodeType 为 ELEMENT_NODE 的节点，使用 next/prevElementSibling 兼容性需要递归调用 next/prevSibling   
```javascript
function elementSibling(el, prev = false) {
    if (prev) {
        if (el.previousElementSibling) return el.previousElementSibling
        el = el.previousSibling
        if (el && el.nodeType === 1) {
            return el
        } else {
            return elementSibling(el, true)
        }
    } else {
        if (el.nextElementSibling) return el.nextElementSibling
        el = el.nextSibling
        if (el && el.nodeType === 1) {
            return el
        } else {
            return elementSibling(el)
        }
    }
}
```   
### siblings   
获取除了自己以外的所有 sibling 节点，包括 next/prev   
```javascript
function siblings(el) {
    return [...el.parentNode.children].filter(item => item !== el)
}
```   






