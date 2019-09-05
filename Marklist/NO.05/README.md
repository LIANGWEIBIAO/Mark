## 分支操作  
1.git branch <分支名> 创建分支    
2.git checkout -b <分支名> 创建并切换到新建的分支上   
3.git checkout <分支名> 切换分支  
4.git branch -a  查看分支列表  
5.git branch -d <分支名> 删除本地分支 
6.git merge <分支名dev> 合并分支到当前分支上(切换到master分支，合并dev)  

## 暂存操作
1.git stash list 查看暂存列表   
2.git stash drop 暂存名(例：stash@{0}) 移除某次暂存
3.git stash clear 清除暂存  

## 回退操作  
1.git reset --hard HEAD^ 回退到上一个版本   
2.git reset --hard ahdhs1(commit_id) 回退到某个版本   

## git创建项目仓库   
1、git init 初始化     
2、git remote add origin url 关联远程仓库      
3、git pull      
4、git fetch 获取远程仓库中所有的分支到本地     
