# mySql四大基本语句的使用

操作方式为 主句+从句，主体为4主要操作，从句为确定范围

1.删    DELETE
DELETE FROM 表 WHERE 条件
``` javascript
DELETE  FROM banner_table WHERE id = '2612' ;
```

2.增    INSERT
INSERT INTO 表 (字段列表) VALUES(值列表)
``` javascript
INSERT INTO student(id,name,sex)value('1','小白'，'男');
```

3.改    UPDATE
UPDATE 表 SET 字段=值,字段=值,... WHERE 条件
``` javascript
UPDATE cs_user SET gender = '男' WHERE id = 4
```

4.查    SELECT
SELECT * FROM 表 WHERE 条件
``` javascript
SELECT * FROM banner_table WHERE `rider_name`='测试'  ;
```


子句：
WHERE 条件

WHERE name='blu e'

WHERE age>18

WHERE age<=18

WHERE age>=18 AND score<60

WHERE cach>100 OR score>10000


ORDER 排序

ORDER BY age ASC/DESC

ASC-升序(从小到大)

DESC-降序(从大到小)
  
