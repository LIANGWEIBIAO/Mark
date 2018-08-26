#### 创建本地分支、提交到远程分支
1、查看本地分支：
``` javascript
$ git branch
  master
* mutilrecall
```
查看远程分支：
``` javascript
$ git branch -a
  master
* mutilrecall
  remotes/origin/master
  remotes/origin/mutilrecall

```
注：其中，remotes开头的代表是远程分支。

2、创建本地分支，并切换到分支：
``` javascript
$ git branch test
 
$ git checkout test
Switched to branch 'test'

```