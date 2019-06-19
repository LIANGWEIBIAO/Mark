# getBoundingClientRect   

`getBoundingClientRect`用于获取某个html元素相对于视窗的位置集合。  
执行 `element.getBoundingClientRect()`;会得到元素的`top`、`right`、`bottom`、`left`、`width`、`height`属性，这些属性以一个对象的方式返回。  

## . 浏览器兼容性  
ie5以上都能支持，但是又一点点地方需要修正一下，     
IE67的left、top会少2px,并且没有width、height属性。