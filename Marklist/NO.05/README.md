# GIT版本控制

####  版本回退
```
1.查看版本号吗。
git log --pretty=oneline
2.版本回退。
git reset --hard 3628164dskfidsjflkdsflksd
```

####线上覆盖本地
*线上覆盖本地文件方法，要慎重用*
```
git fetch --all
git reset --hard origin/master
```