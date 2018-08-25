# 远程仓库的使用

### 首先安装git客户端

### 使用前的配置
> 如果还没输入全局配置就先把这个全局配置输入上去（相当注册用户）
``` javascript
git config --global user.name "biao"
git config --global user.email  "313768239@qq.com"
```
### 查看当前的远程库
要查看当前配置有哪些远程仓库，可以用 git remote 命令，它会列出每个远程库的简短名字。在克隆完某个项目后，至少可以看到一个名为 origin 的远程库，Git 默认使用这个名字来标识你所克隆的原始仓库：

``` javascript
$ git clone git://github.com/schacon/ticgit.git
$ git remote
origin
```
也可以加上 -v 选项（译注：此为 --verbose 的简写，取首字母），显示对应的克隆地址：

``` javascript
$ git remote -v
origin  git://github.com/schacon/ticgit.git (fetch)
origin  git://github.com/schacon/ticgit.git (push)
```

如果有多个远程仓库，此命令将全部列出。比如在我的 Grit 项目中，可以看到：
``` javascript
$ git remote -v
lbb  git://github.com/test/grit.git
lcc     git://github.com/test/grit.git

```

### 添加远程仓库

要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用，运行` git remote add [shortname] [url]：`

``` javascript
$ git remote
origin
$ git remote add pb git://github.com/paulboone/ticgit.git
$ git remote -v
origin  git://github.com/schacon/ticgit.git
pb  git://github.com/paulboone/ticgit.gi
```


### 代码到码云的配置

``` javascript
cd d:/wamp/www/mall360/wap              //首先指定到你的项目目录下
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://git.oschina.net/name/package.git   //用你仓库的url
git push -u origin master  //提交到你的仓库
```

加了参数-u后，以后即可直接用git push 代替git push origin master
一般我会把`个人分支`推到自己的`私人仓库`
``` javascript
git branch test     //创建分支
git checkout test   //切换分支
git add .
git commit -m "first commit"
git remote add 'lbb'  'url'    //主机名+远程仓库地址
git push -u 'lbb' 'lbb_branch'  //使用u参数后下次再提交可以缩写git push
```


