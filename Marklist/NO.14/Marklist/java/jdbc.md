# JDBC 

## JDBC 的核心 API
- `DriverManager类` 管理和注册数据库驱动和得到数据库连接对象
- `Connection  接口` 一个连接对象，可用于创建 Statement 和 PreparedStatement 对象
- `Statement  接口` 一个 SQL 语句对象，用于将 SQL 语句发送给数据库服务器。
- `PreparedStatemen  接口`  一个 SQL 语句对象，是 Statement 的子接口 
- `ResultSet  接口` 用于封装数据库查询的结果集，返回给客户端 Java 程序




## JDBC 编程步骤

### 加载驱动程序：  

```java
//加载MySql驱动
Class.forName("com.mysql.jdbc.Driver")

```  

### 获得数据库连接： 

```java
DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/imooc", "root", "root");
```

### 创建Statement\PreparedStatement对象：

```java
conn.createStatement();
conn.prepareStatement(sql);
```  

## 完整实例  

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DbUtil {

    public static final String URL = "jdbc:mysql://localhost:3306/db1";
    public static final String USER = "root";
    public static final String PASSWORD = "root";

    public static void main(String[] args) throws Exception {
        //1.加载驱动程序
        Class.forName("com.mysql.jdbc.Driver");
        //2. 获得数据库连接
        Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
        //3.操作数据库，实现增删改查
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT user_name, age FROM imooc_goddess");
        //如果有数据，rs.next()返回true
        while(rs.next()){
            System.out.println(rs.getString("user_name")+" 年龄："+rs.getInt("age"));
        }
    }
}
```

