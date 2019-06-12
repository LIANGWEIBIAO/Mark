## 在做前端开发时，经常要在css3的属性前加上各浏览器厂商的前缀：  
- 如果是在css中，编辑器自带的功能一般可以实现，或者通过`gulp`、`webpack`打包时也都有插件实现自动添加
- 如果是在js中，可以用下面的代码：封装成一个`prefixStyle()`函数复用   


```javascript
//dom.js文件
let elementStyle = document.createElement('div').style

function vendor(prop) {
    let ucProp = prop.charAt(0).toUpperCase() + prop.substr(1)
    let transformNames = {
        webkit: `webkit${ucProp}`,
        Moz: `Moz${ucProp}`,
        O: `O${ucProp}`,
        ms: `ms${ucProp}`,
        standard: prop
    }

    for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
          return key
        }
    }

    return false
}

export function prefixStyle(style) {
    const ret = vendor(style)
    if (ret === false) {
      return false
    }

    if (ret === 'standard') {
      return style
    }

    return ret + style.charAt(0).toUpperCase() + style.substr(1)
}
```   

然后，在页面中调用，如下：   

```javascript
import {prefixStyle} from 'common/js/dom.js'

const transform = prefixStyle('transform')
const transition = prefixStyle('transition')

el.style[transform] = 'translate3d(0, 0, 0)'  //这里的 el 根据实际情况替换成DOM节点
el.style[transition] = 'all 0.4s ease'
```