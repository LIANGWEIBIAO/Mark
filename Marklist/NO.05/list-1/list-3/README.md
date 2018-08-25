## 版本回退

回滚命令参数为：git reset HEAD,主要有三种：
Reset 回滚到指定的快照，在reset后加上快照号（一般为快照号的前5位）

- 回来上一个版本
``` javascript
git reset -hard HEAD~
git reset -hard HEAD~ --yo.txt （单个文件）
```

- 指定版本回退

``` javascript
git log
git log -oneline                  //省略信息
git log --pretty=oneline          //省略信息
git reset --hard 3628164dskfidsjflkdsflksd //本地仓库回退到某个版本　
```

#### 回退技巧

当你开始修改一个文件后，还没有执行 `git add`命令前(此时还在工作区）,想撤销对这个文件的改动，可以使用`git checkout -- filename` 一旦你使用了 `git add`命令将文件添加到暂存区，此时不想改这个文件了，需要用`git reset HEAD filename`把文件移会到工作区，再使用第一步的`git checkout -- filenmae`撤销改动



- 版本回来未来

[回到未来的方法](https://blog.csdn.net/tiaopimao3185/article/details/78587495)

如果在回退以后又想再次回到之前的版本，git reflog 可以查看所有分支的所有操作记录（包括commit和reset的操作），包括已经被删除的commit记录，git log则不能察看已经删除了的commit记录
	

### 线上覆盖本地
> 线上覆盖本地文件方法，要慎重用
```
git fetch --all
git reset --hard origin/master
```