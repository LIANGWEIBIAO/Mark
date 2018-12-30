## 数据操作 之 having子句语句
`having`字句：**与`where`子句一样，都是进行条件判断的**，但是`where`是针对磁盘数据进行判断，数据进入内存之后，会进行分组操作，分组结果就需要`having`来处理。思考可知，`having`能做`where`能做的几乎所有事情，但是`where`却不能做`having`能做的很多事情。  

`having`子句可以对统计函数得到的结果进行筛选，但是`where`却不能。   
``` sql
# 求出表 student 中所有班级人数大于等于 2 的班级
select grade,count(*) from student group by grade having count(*) >= 2;
select grade,count(*) from student where count(*) >= 2 group by grade;

```   

`having`能够使用字段别名，`where`则不能   
```sql
# 求出表 student 中所有班级人数大于等于 2 的班级
select grade,count(*) as total from student group by grade having total >= 2;
```