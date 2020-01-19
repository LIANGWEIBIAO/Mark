# JDBC第一篇【介绍JDBC、使用JDBC连接数据库、简单的工具类】

## 什么是JDBC  
JDBC全称为：Java Data Base Connectivity,它是可以执行SQL语句的Java API  

## 为什么我们要用JDBC

- 市面上有非常多的数据库，本来我们是需要根据不同的数据库学习不同的API，sun公司为了简化这个操作，定义了JDBC API【接口】
- sun公司只是提供了JDBC API【接口】，数据库厂商负责实现。
- 对于我们来说，操作数据库都是在JDBC API【接口】上，使用不同的数据库，只要用数据库厂商提供的数据库驱动程序即可
- 这大大简化了我们的学习成本

## 简单操作JDBC  

### 步骤:  
 1. 导入MySQL或者Oracle驱动包
 2. 装载数据库驱动程序 
 3. 获取到与数据库连接
 4. 获取可以执行SQL语句的对象
 5. 执行SQL语句
 6. 关闭连接  
 
```java
Connection connection = null;
Statement statement = null;
ResultSet resultSet = null;

try {

    /*
    * 加载驱动有两种方式
    *
    * 1：会导致驱动会注册两次，过度依赖于mysql的api，脱离的mysql的开发包，程序则无法编译
    * 2：驱动只会加载一次，不需要依赖具体的驱动，灵活性高
    *
    * 我们一般都是使用第二种方式
    * */

    //1.
    //DriverManager.registerDriver(new com.mysql.jdbc.Driver());

    //2.
    Class.forName("com.mysql.jdbc.Driver");

    //获取与数据库连接的对象-Connetcion
    connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/zhongfucheng", "root", "root");

    //获取执行sql语句的statement对象
    statement = connection.createStatement();

    //执行sql语句,拿到结果集
    resultSet = statement.executeQuery("SELECT * FROM users");

    //遍历结果集，得到数据
    while (resultSet.next()) {

        System.out.println(resultSet.getString(1));

        System.out.println(resultSet.getString(2));
    }

} catch (SQLException e) {
    e.printStackTrace();
} catch (ClassNotFoundException e) {
    e.printStackTrace();
} finally {

    /*
    * 关闭资源，后调用的先关闭
    *
    * 关闭之前，要判断对象是否存在
    * */

    if (resultSet != null) {
        try {
            resultSet.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
    if (statement != null) {
        try {
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
    if (connection != null) {
        try {
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

}
```  

上面我们已经简单使用JDBC去查询数据库的数据了，接下来我们去了解一下上面代码用到的对象  

## Connection对象  
客户端与数据库所有的交互都是通过Connection来完成的。  

常用的方法：  

```java
//创建向数据库发送sql的statement对象。
createcreateStatement()

//创建向数据库发送预编译sql的PrepareSatement对象。
prepareStatement(sql) 

//创建执行存储过程的callableStatement对象
prepareCall(sql)

//设置事务自动提交
setAutoCommit(boolean autoCommit)

//提交事务
commit()

//回滚事务
rollback()
```

## Statement对象  
Statement对象用于向数据库发送Sql语句，对数据库的增删改查都可以通过此对象发送sql语句完成。
Statement对象的常用方法：
```java
//查询
executeQuery(String sql)

//增删改
executeUpdate(String sql)

//任意sql语句都可以，但是目标不明确，很少用
execute(String sql)

//把多条的sql语句放进同一个批处理中
addBatch(String sql)

//向数据库发送一批sql语句执行
executeBatch()
```  

## ResultSet对象  
ResultSet对象代表Sql语句的执行结果，当Statement对象执行executeQuery()时，会返回一个ResultSet对象

ResultSet对象维护了一个数据行的游标【简单理解成指针】，调用ResultSet.next()方法，可以让游标指向具体的数据行，进行获取该行的数据

常用方法：

```java
//获取任意类型的数据
getObject(String columnName)

//获取指定类型的数据【各种类型，查看API】
getString(String columnName)

//对结果集进行滚动查看的方法
next()

Previous()

absolute(int row)

beforeFirst()

afterLast()
```  

## 写一个简单工具类  

通过上面的理解，我们已经能够使用JDBC对数据库的数据进行增删改查了，我们发现，无论增删改查都需要连接数据库，关闭资源，所以我们把连接数据库，释放资源的操作抽取到一个工具类

```java
/*
* 连接数据库的driver，url，username，password通过配置文件来配置，可以增加灵活性
* 当我们需要切换数据库的时候，只需要在配置文件中改以上的信息即可
*
* */

private static String  driver = null;
private static String  url = null;
private static String  username = null;
private static String password = null;

static {
    try {

        //获取配置文件的读入流
        InputStream inputStream = UtilsDemo.class.getClassLoader().getResourceAsStream("db.properties");

        Properties properties = new Properties();
        properties.load(inputStream);

        //获取配置文件的信息
        driver = properties.getProperty("driver");
        url = properties.getProperty("url");
        username = properties.getProperty("username");
        password = properties.getProperty("password");

        //加载驱动类
        Class.forName(driver);


    } catch (IOException e) {
        e.printStackTrace();
    } catch (ClassNotFoundException e) {
        e.printStackTrace();
    }

}

public static Connection getConnection() throws SQLException {
    return DriverManager.getConnection(url,username,password);
}
public static void release(Connection connection, Statement statement, ResultSet resultSet) {

    if (resultSet != null) {
        try {
            resultSet.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    if (statement != null) {
        try {
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    if (connection != null) {
        try {
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

```