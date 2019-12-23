## MySQL 

# [day01 【MySQL基础】](#day01-MySQL基础)  

## 学习目标  

- 能够理解数据库的概念
- 能够安装 MySQL 数据库
- 能够启动,关闭及登录 MySQL
- 能够使用 SQL 语句操作数据库
- 能够使用 SQL 语句操作表结构
- 能够使用 SQL 语句进行数据的添加修改和删除的操作
- 能够使用 SQL 语句简单查询数据  



# 第一章 数据库

## 1.1 数据库概念
- 数据库的英文单词： DataBase 简称 ： DB
- 存储数据的仓库
- 本质上是一个文件系统，还是以文件的方式存在服务器的电脑上的。
- 所有的关系型数据库都可以使用通用的 SQL 语句进行管理 DBMS DataBase Management System



# 第二章 SQL

## 2.1 概念 
Structured Query Language：结构化查询语言   
其实就是定义了操作所有关系型数据库的规则。每一种数据库操作的方式存在不一样的地方，称为“方言”。 

## 2.2 SQL作用
- 是一种所有关系型数据库的查询规范，不同的数据库都支持。
- 通用的数据库操作语言，可以用在不同的数据库中。
- 不同的数据库 SQL 语句有一些区别  

## 2.3 SQL 语句分类

- Data Definition Language (DDL 数据定义语言) 如：建库，建表
- Data Manipulation Language(DML 数据操纵语言)，如：对表中的记录操作增删改
- Data Query Language(DQL 数据查询语言)，如：对表中的查询操作
- Data Control Language(DCL 数据控制语言)，如：对用户权限的设置  

## 2.4 MySQL的语法  
- 每条语句以分号结尾，如果在 SQLyog 中不是必须加的。
- SQL 中不区分大小写，关键字中认为大写和小写是一样的  

# 第三章 DDL 操作数据库

## 1.1 创建数据库 

```sql
-- 直接创建数据库 db1
create database db1;
-- 判断是否存在，如果不存在则创建数据库 db2
create database if not exists db2;
-- 创建数据库并指定字符集为 gbk
create database db3 default character set gbk;
```
## 1.2 查看数据库

```sql
-- 查看所有的数据库
show databases;

-- 查看某个数据库的定义信息
show create database db3;
show create database db1;
```
## 1.3使用数据库
```sql
-- 查看正在使用的数据库
select database();

-- 改变要使用的数据库
use db4;
```

## 1.4 修改数据库 
```sql 
-- 修改数据库默认的字符集
alter database db3 character set utf8;
```

## 1.5 删除数据库

```sql
DROP DATABASE db1;
```

# 第四章  DDL 操作表结构

## 4.1 创建表  
```sql
-- 创建 student 表包含 id,name,birthday 字段
create table student (
    id int, -- 整数
    name varchar(20), -- 字符串
    birthday date -- 生日，最后没有逗号
);
```

### 查看 student 表的结构
```sql
desc student;
```

### 快速创建一个表结构相同的表

```sql
create table s1 like student;
```

## 4.2 删除表 

```sql
-- 直接删除表 s1 表
drop table s1;
-- 判断表是否存在并删除 s1 表
drop table if exists `create`;
```

## 4.3 修改表结构

### 添加表列 

```sql
-- 为学生表添加一个新的字段 remark,类型为 varchar(20)
alter table student add remark varchar(20);

```

### 修改列类型 

```sql
-- 将 student 表中的 remark 字段的改成 varchar(100)
alter table student modify remark varchar(100);
```

### 修改列名 
```sql
-- 将 student 表中的 remark 字段名改成 intro，类型 varchar(30)
alter table student change remark intro varchar(30);
```

### 删除列 

```sql
-- 删除 student 表中的字段 intro
alter table student change remark intro varchar(30);
```

### 修改字符集 

```sql
-- 将 student2 表的编码修改成 gbk
alter table student2 character set gbk;
```

# 第五章 DML 操作表中的数据   

```sql
-- 增
INSERT INTO student (id,NAME,age) VALUES (1,"马小花",18);

-- 插入多个
INSERT INTO student (id,NAME,age) VALUES(1,"马小花",18),(2,"梁小强",19),(3,"马小青",20),(4,"曾小白",21),(5,"何小方",22),(6,"徐小黑",23),(7,"小贱",23),(8,"马晓飞",23);

-- 删
DELETE FROM student WHERE age = 18;  

-- 删除多个
SELECT * FROM student WHERE age=18 || age =20 || age = 23;
DELETE FROM student WHERE age IN (18,20,23);


-- 改
UPDATE student SET NAME = "小花" WHERE age = 19;


-- 查询年龄大于20的学生  
SELECT * FROM student WHERE age>=20;

-- 查询年龄大于18 小于20的学生
SELECT * FROM student WHERE age>18 && age <=20;

-- 查询年龄为18岁，20岁，23岁的学生
SELECT * FROM student WHERE age=18 || age =20 || age = 23;
SELECT * FROM student WHERE age = 18 OR age = 20 OR age = 23;
SELECT * FROM student WHERE age IN (18,20,23);

-- 查询年龄不为18岁的学生
SELECT * FROM student WHERE age != 18;  

-- 模糊查询
-- %表示不含个数

-- 查询姓马的学生  
SELECT * FROM student WHERE NAME LIKE "马%";

-- 查询含有“小”的名字
SELECT * FROM student WHERE NAME LIKE "%小%";

-- 查询姓名是2个字的人
SELECT * FROM student WHERE NAME LIKE "__" 

-- 查询第三个字是“青”的人
SELECT * FROM student WHERE NAME LIKE "__青"

```


 






