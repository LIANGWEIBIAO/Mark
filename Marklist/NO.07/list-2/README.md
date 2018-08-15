# sublime配置说明

- 安装Package Controller
``` javascript
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```

### 安装插件列表

- Color​Picker:
  跨平台取色器插件,Windows: ctrl+shift+c;

- HTML-CSS-JS Prettify:
  格式化代码，ctrl+ shift + h；
 

- Bracket Highlighter：
  该插件提供行数列高亮的各种配对的语法符号，显示在行号上。对于很长的代码很有用

- Color Highlighter ：
  CSS颜色高亮

- jQuery :
  智能提示 jQuery代码； 

- Git： 
  整合 Git 功能的插件； 

- LESS: 
  LESS 代码高亮；

- CSS Extended Completions：
  关联CSS文件，智能提示css文件中的类名，非常好用

- AutoFileName:
  提供了文件路径提示功能，比如你要选择images文件夹下的一个图片，输入images/后会提示出图片列表给你选择

- 格式化vue代码:
  我的在tools->HTML/CSS/JS Prettify-> `set node path`里面的在`"allowed_file_extensions"`: `["htm", "html", "xhtml", "shtml", "xml", "svg","vue"] `加上vue就好了

- 主題
AfterGlow


