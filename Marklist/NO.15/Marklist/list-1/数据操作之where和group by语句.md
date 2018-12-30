## 数据操作 之 where 和 group by语句
`where`字句：用来判断数据和筛选数据，返回的结果为`0`或者`1`

判断条件：   

 - 比较运算符：`>`、`<`、`>=`、`<=`、`<>`、`=`、`like`、`between and`、`in`和`not in`；
 - 逻辑运算符：`&&`、`||`、和`!`   
 

``` sql
-- 查询表 student 中 id 为 2、3、5 的记录
select * from student where id = 2 || id = 3 || id = 5;
select * from student where id in (2,3,5); 

-- 查询表 student 中 id 在 2 和 5 之间的记录
select * from student where id between 2 and 5;
```   

关于group by子句
`group by子句`：根据表中的`某个字段`进行分组，即将含有相同字段值的记录放在一组，不同的放在不同组。

``` sql
# 基本语法：group by + 字段名;
select * from student group by sex;
```

group by分组的目的是为了（按分组字段）统计数据，并不是为了单纯的进行分组而分组。为了方便统计数据，SQL 提供了一系列的统计函数，例如：   

 - `cout()`：统计分组后，每组的总记录数；
 - `max()`：统计每组中的最大值；
 - `min()`：统计每组中的最小值；
 - `avg()`：统计每组中的平均值；
 - `sum()`：统计每组中的数据总和。   
    

执行如下 SQL 语句，进行测试：
``` sql 
# -- 将表 student 中的数据按字段 sex 进行分组，并进行统计
select sex,count(*),max(age),min(age),avg(age),sum(age) from student group by sex;
```
![images](https://github.com/LIANGWEIBIAO/v-mark/blob/master/Marklist/NO.15/Marklist/list-1/images/select-count-max-min.png)        


其中，count()函数里面可以使用两种参数，分别为：*表示统计组内全部记录的数量；字段名表示统计对应字段的非null（如果某条记录中该字段的值为null，则不统计）记录的总数。    

关于group_concat(字段名)
```sql
# 将表 student 中的数据按字段 sex进行分组，并保留字段 name 的值
select sex,age,count(*),group_concat(name) from student group by sex;
```   

![select-group-by-sex](https://github.com/guobinhit/mysql-tutorial/blob/master/images/select/select-group-by-sex.png)
 

