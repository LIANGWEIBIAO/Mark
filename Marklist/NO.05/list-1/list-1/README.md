# 远程仓库的使用

### 首先安装git客户端

### 使用前的配置
> 如果还没输入全局配置就先把这个全局配置输入上去（相当注册用户）
``` javascript
git config --global user.name "biao"
git config --global user.email  "313768239@qq.com"
```


### 添加远程仓库

要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用，运行` git remote add [shortname] [url]：`

``` javascript
git init
git remote add origin https://github.com/paulboone/ticgit
git remote -v
git push --set-upstream origin master
git push -u 'lbb' 'lbb_branch'  //加了参数-u后，以后即可直接用git push 代替git push origin master
```



