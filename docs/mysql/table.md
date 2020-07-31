# 



## 一对多关系

举例：

一个用户收藏多个线路，一个线路被多个用户收藏

具体操作：

- 创建用户表

  ```mysql
  -- 创建用户表tab_user
  -- 用户id主键,int类型,自动增长
  -- 用户名username,字符串,长度30
  -- 密码PASSWORD,字符串,长度30
  -- 用户姓名NAME,字符串,长度100
  -- 性别sex,字符串,长度1
  CREATE TABLE tab_user (
     uid INT PRIMARY KEY AUTO_INCREMENT, -- 用户id
     NAME VARCHAR(100), -- 姓名
     sex CHAR(1) -- 性别
  );
  ```

- 创建收藏表

  ```mysql
  -- 创建收藏表:tab_favorite
  -- 收藏主键fid,int类型,主键,自动增长
  -- 用户id int,不为null
  -- 收藏时间date,不为null
  -- 旅游线路id,int类型,不为null
  CREATE TABLE tab_favorite (
     fid INT PRIMARY KEY AUTO_INCREMENT, -- 收藏主键
     uid INT NOT NULL, -- 用户id
     DATE DATE NOT NULL, -- 收藏时间
     rid INT NOT NULL -- 旅游线路id
  );
  ```

  

