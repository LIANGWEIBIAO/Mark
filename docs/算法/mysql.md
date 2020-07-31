# Mysql

## 一、数据库和SQL概述

### 数据库的好处

- 实现数据持久化
- 使用完整的管理系统统一管理，易于查询

### 数据库的概念

DB
DBMS
SQL
数据库（database）：存储数据的“仓库”。它保存了一系列有组织的数据。
数据库管理系统（Database Management System）。数据库是通过DBMS创
建和操作的容器
结构化查询语言（Structure Query Language）：专门用来与数据库通信的语
言

常见的数据库管理系统：MySQL、Oracle、DB2、SqlServe

### SQL语言

数据库是不认识JAVA语言的，但是我们同样要与数据库交互，这时需要使用到数据库认识的语言SQL语句，它是数据库的代码。

结构化查询语言(Structured Query Language)简称SQL，是一种数据库查询和[程序设计语言](http://baike.baidu.com/view/128511.htm)，用于存取数据以及查询、更新和管理[关系数据库系统](http://baike.baidu.com/view/549699.htm)。

创建数据库、创建数据表、向数据表中添加一条条数据信息均需要使用SQL语句。

**DML**

DML（Data Manipulation Language):数据操纵语句，用于添加、删除、修改、查询数据库记录，并检查数据完整性。包括如下SQL语句等：

- INSERT：添加数据到数据库中
- UPDATE：修改数据库中的数据
- DELETE：删除数据库中的数据
- **SELECT：选择（查询）数据**
  - SELECT是SQL语言的基础，最为重要。

**DDL**

DDL（Data Definition Language):数据定义语句，用于库和表的创建、修改、删除。包括如下SQL语句等：

- CREATE TABLE：创建数据库表
- ALTER TABLE：更改表结构、添加、删除、修改列长度
- DROP TABLE：删除表
- CREATE INDEX：在表上建立索引
- DROP INDEX：删除索引

**DCL**

DCL（Data Control Language):数据控制语句，用于定义用户的访问权限和安全级别包括如下SQL语句等：

- GRANT：授予访问权限
- REVOKE：撤销访问权限
- COMMIT：提交事务处理
- ROLLBACK：事务处理回退
- SAVEPOINT：设置保存点
- LOCK：对数据库的特定部分进行锁定

**DQL**

数据查询语言：简称DQL(Data Query Language)，用来查询数据库中表的记录。关键字：select，from，where等



## 二、mysql的安装与使用 

### mysql的安装

- [Windows](https://www.runoob.com/mysql/mysql-install.html) （下拉看**Windows 上安装 MySQL部分**）
- [Linux](https://note.zzrfdsn.cn/note/root/cloudlandboy/linux/1566488563139.html)

### 启动和停止MySQL服务

- Windows

  - 方式一：通过计算机管理方式

    右击计算机—管理—服务—启动或停止MySQL服务

  - 方式二：通过命令行方式

    启动：net start mysql服务名

    停止：net stop mysql服务名

- Linux

  启动：service mysql(mysqld) start

  停止：service mysql(mysqld) stop

  状态：service mysql(mysqld) status

### MySQL服务端的登录和退出

- 登录

  mysql –u用户名 –p密码

- 远程登录

  mysql -h 主机名 -P 端口号 -u root -proot

- 退出

  exit(quit)

### MySql数据库的使用

- 不区分大小写(Linux上区分，可以通过配置文件修改)
- 每句话用;或\g结尾
- 各子句一般分行写
- 关键字不能缩写也不能分行
- 用缩进提高语句的可读性

### 基本命令

查看 mysql 中有哪些个数据库: 

``` mysql
show databases;
```

 使用一个数据库: 

``` mysql
use 数据库名称;
```

查看当前使用数据库中的表：

``` mysql
show tables;
```

查看指定数据库中的表：

``` mysql
show tables from 库名;
```

新建一个数据库: 

``` mysql
#创建数据库 数据库中数据的编码采用的是安装数据库时指定的默认编码 utf8
CREATE DATABASE 数据库名;

#创建数据库 并指定数据库中数据的编码
CREATE DATABASE 数据库名 CHARACTER SET utf8;
```

查看当前选择的数据库:

``` mysql
select database();
```

创建表:

``` mysql
create table stuinfo(
    id int,
    name varchar(20));
```

查看表结构:

``` mysql
desc 表名;
```

查看表中的所有记录: 

``` mysql
select * from 表名;
```

向表中插入记录：

``` mysql
insert into 表名(列名1,列名,...,列名n) values(列1值,列2值,...,列n值);
```

<mark><small>注意：插入 varchar 或 date 型的数据要用 单引号 引起来<small></mark>



## 基本查询

### SELECT 语句

> **SELECT** *****|{[DISTINCT] **column**|expression [alias],...}**FROM** **table**

- **SELECT** 标识选择哪些列。
- **FROM** 标识从哪个表中选

语法：

``` mysql
select 查询列表 from 表名;
```

特点：

1. 查询列表可以是：表中的字段、常量值、表达式、函数
2. 查询的结果是一个虚拟的表格

查询全部列:

``` mysql
SELECT *FROM 表名;
```

查询特定的列:

``` mysql
SELECT id, name FROM student;
```



### 查询去重

``` mysql
select distinct 字段名 from 表名;
```

``` mysql
# 案例：查询员工表中涉及到的所有的部门编号
SELECT DISTINCT department_id FROM employees;
```

## 

## 三、条件查询

过滤：使用WHERE 子句，将不满足条件的行过滤掉。

语法：

``` mysql
select 查询列表 from 表名 where 筛选条件;
```
| 运算符 | 作用             |
| --------------------- | ------------------------------------------------------------ |
| BETWEEN  ...AND...    | 显示在某一区间的值(含头含尾)                                 |
| IN(set)               | 显示在in列表中的值，例：in(100,200)                          |
| LIKE 通配符           | 模糊查询，Like语句中有两个通配符：% 用来匹配多个字符；例first_name like ‘a%’；_ 用来匹配一个字符。例first_name like ‘a_’; |
| IS NULL               | 判断是否为空is null; 判断为空；is not null; 判断不为空       |
| and (&&)              | 多个条件同时成立                                             |
| or (\|\|)             | 多个条件任一成立                                             |
| not (!)               | 不成立，例：where not(salary>100);  |



### 按条件表达式筛选

1. 查询工资>12000的员工信息

   ``` mysql
   SELECT 
   	*
   FROM
   	employees
   WHERE
   	salary>12000;
   ```

2. 查询部门编号不等于90号的员工名和部门编号

   ``` mysql
   SELECT 
   	last_name,
   	department_id
   FROM
   	employees
   WHERE
   	department_id<>90;
   ```

### 按逻辑表达式筛选

1. 查询工资在10000到20000之间的员工名、工资以及奖金

   ``` mysql
   SELECT
   	last_name,
   	salary,
   	commission_pct
   FROM
   	employees
   WHERE
   	salary>=10000 AND salary<=20000;
   ```

   或者

   ``` mysql
   SELECT
   	last_name,
   	salary,
   	commission_pct 
   FROM
   	employees 
   WHERE
   	salary BETWEEN 10000 
   	AND 20000;
   ```

2. 查询部门编号不是在90到110之间，或者工资高于15000的员工信息

   ``` mysql
   SELECT
   	* 
   FROM
   	employees 
   WHERE
   	NOT ( department_id >= 90 AND department_id <= 110 ) 
   	OR salary > 15000;
   ```

   或者

   ``` mysql
   SELECT
   	* 
   FROM
   	employees 
   WHERE
   	NOT ( department_id BETWEEN 90 AND 110 ) 
   	OR salary > 15000;
   ```


### 模糊查询

1. 查询员工名中包含字符a的员工信息

   ``` mysql
   select 
   	*
   from
   	employees
   where
   	last_name like '%a%';
   ```

2. 查询员工名中第三个字符为e，第五个字符为a的员工名和工资

   ``` mysql
   select
   	last_name,
   	salary
   FROM
   	employees
   WHERE
   	last_name LIKE '__e_a%';
   ```

3. 查询员工名中第二个字符为_的员工名

   ESCAPE：定义转义标识

   ``` mysql
   SELECT
   	last_name
   FROM
   	employees
   WHERE
   	last_name LIKE '_$_%' ESCAPE '$';
   ```

### IN

含义：判断某字段的值是否属于in列表中的某一项
特点：

1. 使用in提高语句简洁度
2. 列表的值类型必须一致或兼容
3. 列表中不支持通配符

查询员工的工种编号是 IT_PROG、AD_VP、AD_PRES中的一个员工名和工种编号

``` mysql
SELECT
	last_name,
	job_id
FROM
	employees
WHERE
	job_id IN( 'IT_PROT' ,'AD_VP','AD_PRES');
```

或者

``` mysql
SELECT
	last_name,
	job_id
FROM
	employees
WHERE
	job_id = 'IT_PROT' OR job_id = 'AD_VP' OR JOB_ID ='AD_PRES';
```

### IS NULL

**=或<>不能用于判断null值**
is null或is not null 可以判断null值

1. 查询没有奖金的员工名和奖金率

   ``` mysql
   SELECT
   	last_name,
   	commission_pct
   FROM
   	employees
   WHERE
   	commission_pct IS NULL;
   ```

2. 查询有奖金的员工名和奖金率

   ``` mysql
   SELECT
   	last_name,
   	commission_pct
   FROM
   	employees
   WHERE
   	commission_pct IS NOT NULL;
   ```

### 安全等于  <=>

1. 查询没有奖金的员工名和奖金率

   ``` mysql
   SELECT
   	last_name,
   	commission_pct
   FROM
   	employees
   WHERE
   	commission_pct <=>NULL;
   ```

2. 查询工资为12000的员工信息

   ``` mysql
   SELECT
   	last_name,
   	salary
   FROM
   	employees
   
   WHERE 
   	salary <=> 12000;
   ```

   

IS NULL:仅仅可以判断NULL值，可读性较高，建议使用
<=>    :既可以判断NULL值，又可以判断普通的数值，可读性较低

## 四、排序查询

ORDER BY

- 使用 ORDER BY 子句排序
  - ASC（ascend）: 升序
  - DESC（descend）: 降序

### 语法

``` mysql
select 查询列表 from 表名 【where  筛选条件】order by 排序的字段或表达式;
```

### 特点

1. asc代表的是升序，可以省略
2. order by子句可以支持 单个字段、别名、表达式、函数、多个字段
3. order by子句在查询语句的最后面，除了limit子句

### 单个字段排序

1. 查询员工表按薪水降序

   ```
   SELECT * FROM employees ORDER BY salary DESC;
   ```

2. 查询部门编号>=90的员工信息，并按员工编号降序

   ``` mysql
   SELECT * FROM employees WHERE department_id>=90 ORDER BY employee_id DESC;
   ```



## 五、分组查询

### 语法

``` 
select 分组函数，分组后的字段
from 表
【where 筛选条件】
 group by 分组的字段
【having 分组后的筛选】
【order by 排序列表】
```

### 特点

1. 和分组函数一同查询的字段`必须`是group by后出现的字段
2. 筛选分为两类：分组前筛选和分组后筛选

|    筛选    |      针对的表      | 连接的关键字 |
| :--------: | :----------------: | :----------: |
| 分组前筛选 |       原始表       |    where     |
| 分组后筛选 | group by后的结果集 |    having    |

### 问题

1. 分组函数做筛选能不能放在where后面

   不能，原表中没有分组后的数据



### 案例

#### 简单的分组

1. 查询每个工种的员工平均工资

   ``` mysql
   SELECT AVG(salary),job_id
   FROM employees
   GROUP BY job_id;
   ```

2. 查询每个位置的部门个数

   ``` mysql
   SELECT COUNT(*),location_id
   FROM departments
   GROUP BY location_id;
   ```

#### 分组前筛选

1. 查询邮箱中包含a字符的 每个部门的最高工资

   ``` mysql
   SELECT MAX(salary),department_id
   FROM employees
   WHERE email LIKE '%a%'
   GROUP BY department_id;
   ```

   

2. 查询有奖金的每个领导手下员工的平均工资

   ``` mysql
   SELECT
   	AVG( salary ),
   	manager_id 
   FROM
   	employees 
   WHERE
   	commission_pct IS NOT NULL 
   GROUP BY
   	manager_id;
   ```

#### 分组后筛选

1. 查询哪个部门的员工个数>5

   ① 首先查询每个部门的员工个数

   ``` mysql
   SELECT COUNT(*),department_id
   FROM employees
   GROUP BY department_id;
   ```

   ② 筛选刚才①结果

   ``` mysql
   SELECT COUNT(*),department_id
   FROM employees
   
   GROUP BY department_id
   
   HAVING COUNT(*)>5;
   ```

   

2. 每个工种有奖金的员工的最高工资>12000的工种编号和最高工资

   ``` mysql
   SELECT
   	MAX( salary ) 最高工资,
   	job_id 工种编号 
   FROM
   	employees 
   WHERE
   	commission_pct IS NOT NULL 
   GROUP BY
   	job_id 
   HAVING
   	MAX( salary )> 12000;
   ```

   

3. 领导编号>102的每个领导手下的最低工资大于5000的领导编号和最低工资

   ``` mysql
   SELECT
   	manager_id 领导编号,
   	MIN( salary ) 最低工资 
   FROM
   	employees 
   WHERE
   	manager_id > 102 
   GROUP BY
   	manager_id 
   HAVING
   	MIN( salary )> 5000
   ```

   

#### 添加排序

1. 每个工种有奖金的员工的最高工资>6000的工种编号和最高工资,按最高工资升序

   ``` mysql
   SELECT
   	job_id 工种编号,
   	MAX( salary ) 最高工资 
   FROM
   	employees 
   WHERE
   	commission_pct IS NOT NULL 
   GROUP BY
   	job_id 
   HAVING
   	MAX( salary )> 6000 
   ORDER BY
   	MAX( salary );
   ```

   

#### 按多个字段分组

1. 查询每个工种每个部门的最低工资,并按最低工资降序

   ``` mysql
   SELECT
   	MIN( salary ) 最低工资,
   	department_id 部门,
   	job_id 工种 
   FROM
   	employees 
   GROUP BY
   	department_id,
   	job_id 
   ORDER BY
   	MIN( salary ) DESC;
   ```

## 六、连接查询

## 七、子查询

## 八、分页查询

## 九、联合查询
