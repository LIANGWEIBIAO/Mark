### `limit`子句

`limit`子句：**是一种限制结果的语句，通常来限制结果的数量**。

 - **基本语法**：`limit + [offset] + length;`

其中，`offset`为起始值；`length`为长度。

**第 1 种：只用来限制长度（数据量）**

执行如下 SQL 语句，进行测试：

```
-- 查询表 student 中的全部记录
select * from student;
-- 查询表 student 中的 3 条记录
select * from student limit 3;
```
![select-limit](https://github.com/guobinhit/mysql-tutorial/blob/master/images/select/select-limit.png)


**第 2 种：限制起始值，限制长度（数据量）**

执行如下 SQL 语句，进行测试：

```
-- 查询表 student 中的记录
select * from student limit 0,2;
-- 查询表 student 中的记录
select * from student limit 2,2;
```

![select-limit-2](https://github.com/guobinhit/mysql-tutorial/blob/master/images/select/select-limit-2.png)

**第 3 种：主要用来实现数据的分页，目的是为用户节省时间，提高服务器的响应效率，减少资源的浪费**

大致设计：

 - 对于用户来讲，可以通过点击页码按钮，如`1`、`2`、`3`等来进行选择；
 - 对于服务器来讲，可以根据用户选择的页码来获取不同的数据。

其中，

 - `length`：表示每页的数据量，基本不变；
 - `offset`：表示每页的起始值，公式为`offset=(页码-1)*length`.