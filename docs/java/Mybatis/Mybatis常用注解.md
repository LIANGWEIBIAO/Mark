# Mybatis常用注解

## @Mapper和@MapperScan

```java
@Mapper
public interface UserDAO {
    @Select("select * from user where name = #{name}")
    User find(String name);
    @Select("select * from user where name = #{name} and pwd = #{pwd}")
    /**
      * 对于多个参数来说，每个参数之前都要加上@Param注解，
      * 要不然会找不到对应的参数进而报错
      */
    User login(@Param("name")String name, @Param("pwd")String pwd);
}
```

使用 @Mapper，最终 Mybatis 会有一个拦截器，会自动的把 @Mapper 注解的接口生成动态代理类，这点可以在 MapperRegistry 类中的源代码中查看。

@Mapper 注解针对的是一个一个的类，相当于是一个一个 Mapper.xml 文件。而一个接口一个接口的使用 `@Mapper`，太麻烦了，于是 `@MapperScan` 就应用而生了。@MapperScan 配置一个或多个包路径，自动的扫描这些包路径下的类，自动的为它们生成代理类。

```java
@SpringBootApplication  
@MapperScan({"com.lwbblog.mapper","com.lwblog.dao"})
public class XttblogApp {  
    public static void main(String[] args) {  
       SpringApplication.run(XttblogApp.class, args);  
    }  
}
```

当使用了 @MapperScan 注解，将会生成 MapperFactoryBean， 如果没有标注 @MapperScan 也就是没有 MapperFactoryBean 的实例，就走 @Import 里面的配置，具体可以在 AutoConfiguredMapperScannerRegistrar 和 MybatisAutoConfiguration 类中查看源代码进行分析。

由此可见，动态代理和 AOP 知识非常的重要，各种框架都在大量的使用。



## 传参方式

使用不同的传参方式：

### @Param

```java
@Insert("INSERT INTO T_USER(NAME, PASSWORD, PHONE) VALUES(#{name}, #{password}, #{phone})")
int insert(@Param("name") String name, @Param("password") String password, @Param("phone") String phone);
```

理解： `@Param`中定义了`name`对应了sql中的`#{name}`, `password` 对应了sql中的`#{password}`, `phone` 对应了sql中的 `#{phone}`。

### Map

通过Map对象来传递参数：

```java
@Insert("INSERT INTO T_USER(NAME, PASSWORD, PHONE) VALUES(" +
            "#{name, jdbcType=VARCHAR}, #{password, jdbcType=VARCHAR}, #{phone, jdbcType=VARCHAR})")
int insertByMap(Map<String, Object> map);
```

对于Insert语句中需要的参数，我们只需要在map中填入同名的内容即可，具体如下面代码所示：

```java
Map<String, Object> map = new HashMap<>();
		map.put("name","王五");
		map.put("password","23423");
		map.put("phone", "13400000000");
		userMapper.insertByMap(map);
```



### 对象

如果我们使用普通的java对象作为查询条件的参数：

```java
@Insert("INSERT INTO T_USER(NAME, PASSWORD, PHONE) VALUES(#{name}, #{password}, #{phone})")
int insertByUser(User user);
```

只需要语句中的`#{name}`、`#{age}`就分别对应了`User`对象中的`name`和`age`属性。

```java
User u = new User();
	 u.setName("赵六");
	 u.setPassword("12312312");
	 u.setPhone("13888888888");
	 userMapper.insertByUser(u);
```



## 增删改查

MyBatis针对不同的数据库操作分别提供了不同的注解来进行配置，在之前的示例中演示了@Insert，下面针对User表做一组最基本的增删改查作为示例：

```java
@Select("SELECT * FROM T_USER WHERE PHONE = #{phone}")
User findUserByPhone(@Param("phone") String phone);
    
@Insert("INSERT INTO T_USER(NAME, PASSWORD, PHONE) VALUES(#{name}, #{password}, #{phone})")
int insertByUser(User user);

@Update("UPDATE T_USER SET NAME = #{name}, PASSWORD = #{password} WHERE PHONE = #{phone}")
void update(User user);

@Delete("DELETE FROM T_USER WHERE ID = #{id}")
void delete(Integer id);
```

## 返回结果绑定

对于增、删、改操作相对变化较小。而对于“查”操作，我们往往需要进行多表关联，汇总计算等操作，那么对于查询的结果往往就不再是简单的实体对象了，往往需要返回一个与数据库实体不同的包装类，那么对于这类情况，就可以通过`@Results`和`@Result`注解来进行绑定，具体如下:

```java
@Results({
   @Result(property = "name", column = "NAME"),
   @Result(property = "password", column = "PASSWORD"),
   @Result(property = "phone", column = "PHONE")
})
@Select("SELECT NAME, PASSWORD, PHONE FROM T_USER")
List<User> findAll();

```

在上面代码中，@Result中的property属性对应User对象中的成员名，column对应SELECT出的字段名。在该配置中故意没有查出id属性，只对User对应中的name,password,phone对象做了映射配置，这样可以通过下面的单元测试来验证查出的id为null，而其他属性不为null：
