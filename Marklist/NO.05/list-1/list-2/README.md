## 创建本地分支、并切换到分支

``` javascript
//创建
git branch <BranchName>

//切换
git checkout <BranchName>

//创建并且切换到分支
git checkout -b <BranchName>

```

## 查看所有分支：
```javascript
git branch -a
```

注：其中，remotes开头的代表是远程分支。

## 删除远程分支和本地分支  

```javascript
//删除本地分支
git branch -d <BranchName>

//删除远程分支
git push origin --delete <BranchName>
```
 
## 合并某分支到当前分支   
```javascript
git merge
```

