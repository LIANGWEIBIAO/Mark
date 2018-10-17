# gulp

## 开发命令
``` javascript
npm run dev    //生产环境
npm run build  //开发环境
```

``` 
  project
  |- build
  |- dist // 打包文件夹
  |- src  // 源文件夹
  | |- assets // 放置一些第三方文件，如bootstrap
  | |- css
  | |  - index.css
  | |- images
  | |- js
  | |  - index.js
  | |- sass
  | |  - index.scss
  |- gulpfile.js
  |- package.json
```

##  Gulp配置

- config.js文件

  `gulpfile.config.js`文件，主要用途为保存项目的目录配置，如源文件存放的路径，打包后文件存放的路径等，可以进行灵活配置。同时将Config对应暴露出来供其他文件引用。 

- dev.js

  `gulpfile.dev.js`文件，该文件放置的时开发环境下调用的任务，同时使用browser-sync实现编写程序的时候浏览器自动刷新的功能。 

- prod.js

  `gulpfile.prod.js`文件，用于放置生产环境下运行的任务。其中在生产环境下，我们并不需要使用到什么浏览器自动刷新的功能，只要进行如压缩CSS、JS文件等操作即可。 

- gulpfile.js
在真正的gulp配置文件`gulpfile.js`中，引入`gulpfile.dev.js`和`gulpfile.prod.js`文件，并调用dev和prod方法，这样对应环境下的各个任务即被创建出来了。 

## 运行gulp
　　这个时候，我们可以使用gulp dev命令进行开发模式，此时会监听项目src中文件的变化，执行对应的任务，与此同时会通知浏览器进行刷新，及时响应=而使用gulp build命令则可以针对生产环境的要求打包资源文件，用于生产。
　　
## 定义脚本scripts
需要rimraf，我们必须先进行全局安装：
`npm install rimraf -g`
rimraf dist命令（删除dist目录下的所有文件）；

``` 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "gulp dev",
    "build": "rimraf dist && gulp build"
}
```



