# JavaScript模块化 —— require.js

```
根目录/
├── index.html
└── js/
    ├── box.js
    ├── jquery.min.js
    ├── main.js
    └── require.js
```

### 引入require.js

直接使用`<script>`标签引入require.js，使用`data-main`属性引入`js/main.js`主文件。

``` html
<script type="text/javascript" src="js/require.js" data-main="js/main.js"></script>
```

### main.js

``` javascript
require.config({
  paths: {
    jquery: 'jquery.min'
  }
})

require(['jquery', 'box'], function($, b) {
  $('#show-box').on('click', function(event) {
    new b.Box().alert('success', function(){
      alert('click "确定" continue...')
    })
  })
})
```

### box.js

``` javascript
define(['jquery'], function($) {

  function Box(){

  }

  Box.prototype = {
    alert: function(content, callback){
      var alertBox = $('<div class="alert-box"></div>')
      alertBox.appendTo('body').html(content)
      var closeBtn = $('<a href="javascript:" class="alert-close">X</a>')
      closeBtn.appendTo(alertBox)
      closeBtn.on('click', function(event) {
        callback && callback()
        alertBox.remove()
      })
    }
  }

  return {
    Box: Box
  }

})
```

### 引入jquery的方法

使用`require`和`define`方法，第一个参数传入`jquery`,`function($){}`使用`$`接收jquery。

``` javascript
require(['jquery'], function($) {})
define(['jquery'], function($) {})
```

配置jquery路径

``` javascript
require.config({
  paths: {
    jquery: 'jquery.min'
  }
})
```