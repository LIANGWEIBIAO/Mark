# assets和static文件夹的区别
Webpack如何处理静态资产。在 *.vue 组件中，所有模板和CSS都会被 vue-html-loader 及 css-loader 解析，并查找资源URL。例如，在` <img src="./logo.png">`
和 `background: url(./logo.png) 中，"./logo.png"` 是相对的资源路径，将由Webpack解析为模块依赖。

因为 logo.png 不是 JavaScript，当被视为模块依赖时，需要使用 url-loader 和 file-loader
处理它。vue-cli 的 webpack 脚手架已经配置了这些 loader，因此可以使用相对/模块路径。

static/ 目录下的文件并不会被 Webpack 处理：它们会直接被复制到最终目录（默认是dist/static）下。必须使用`绝对路径`引用这些文件，这是通过在 config.js 文件中的 build.assetsPublicPath 和 build.assetsSubDirectory 连接来确定的。

任何放在 static/ 中文件需要以绝对路径的形式引用：/static/[filename]。如果更改 assetSubDirectory 的值为 assets，那么路径需改为 /assets/[filename]。

这里给`static`赋予了一个地址，那么在程序中引入路径的时候`~static`就直接可以代替路径`../static`，亲测，这里就算多层嵌套也可以成功找到路径.