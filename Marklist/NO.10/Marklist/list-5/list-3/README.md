# Express 托管静态文件

通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。

将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：
``` javascript
app.use(express.static('public'));
```
现在，public 目录下面的文件就可以访问了。
``` javascript
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```
如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：
``` javascript
app.use(express.static('public'));
app.use(express.static('files'));
```