<!-- GFM-TOC -->
* [day01 【前言、入门程序、常量、变量】](#day01-前言入门程序常量变量)
* [day02 【数据类型转换、运算符、方法入门】](#day02-数据类型转换运算符方法入门)
* [day03 【 流程控制语句】](#day03-流程控制语句)

 
<!-- GFM-TOC -->
  

# day01 【前言、入门程序、常量、变量】   

## 今日内容   

- Java 语言的发展历史  
- Java 开发环境搭建  
- 编写 HelloWorld程序  
- 常量和变量   

# 第一章 开发前言

## 1.1Java 语言概述  

### 什么是Java语言  

Java语言是美国Sun公司（Stanford University Network），在1995年推出的高级的编程语言。所谓编程语言，是
计算机的语言，人们可以使用编程语言对计算机下达命令，让计算机完成人们需要的功能  


### Java语言的特点   

- 简单易学；
- 面向对象（封装，继承，多态）；
- 平台无关性（ Java 虚拟机实现平台无关性）；
- 可靠性；
- 安全性；
- 支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）；
- 支持网络编程并且很方便（ Java 语言诞生本身就是为简化网络编程设计的，因此 Java 语言不仅支持网络编程而且很方便）；
- 编译与解释并存；

### Java语言能做什么
Java语言主要应用在互联网程序的开发领域。常见的互联网程序比如天猫、京东、物流系统、网银系统等，以及服务器后台处理大数据的存储、查询、数据挖掘等也有很多应用。  


## 1.2计算机基础知识  

### 二进制  

计算机中的数据不同于人们生活中的数据，人们生活采用十进制数，而计算机中全部采用二进制数表示，它只包含0、1两个数，逢二进一，1+1=10。每一个0或者每一个1，叫做一个bit（比特）。   

下面了解一下十进制和二进制数据之间的转换计算。

- 十进制数据转成二进制数据： 使用除以2获取余数的方式  
- 二进制数据转成十进制数据： 使用8421编码的方式   

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/03-%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%B8%8E%E5%8D%81%E8%BF%9B%E5%88%B6%E7%9A%84%E8%BD%AC%E6%8D%A2%E8%BF%90%E7%AE%97.png)  


### 字节   
字节是我们常见的计算机中最小存储单元。计算机存储任何的数据，都是以字节的形式存储，右键点击文件属性，我们可以查看文件的字节大小。      
8个bit（二进制位） 0000-0000表示为1个字节，写成1 byte或者1 B。   

- 8 bit = 1 B  
- 1024 B =1 KB   
- 1024 KB =1 MB   
- 1024 MB =1 GB   
- 1024 GB = 1 TB    


# 第二章 Java语言开发环境搭建



## 2.1Java语言开发环境搭建    

- JVM （Java Virtual Machine ）：Java虚拟机，简称JVM，是运行所有Java程序的假想计算机，是Java程序的运行环境，是Java 最具吸引力的特性之一。我们编写的Java代码，都运行在 JVM 之上。   

- 跨平台 ：任何软件的运行，都必须要运行在操作系统之上，而我们用Java编写的软件可以运行在任何的操作系统上，这个特性称为Java语言的跨平台特性。该特性是由JVM实现的，我们编写的程序运行在JVM上，而JVM运行在操作系统上。 

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/QQ%E6%88%AA%E5%9B%BE20191209014301.png)     

如图所示，Java的虚拟机本身不具备跨平台功能的，每个操作系统下都有不同版本的虚拟机。
 
## 2.2 JRE  和 JDK  

- JRE  (Java Runtime Environment) ：是Java程序的运行时环境，包含 JVM 和运行时所需要的 核心类库 。  
- JDK (Java Development Kit)：是Java程序开发工具包，包含 JRE 和开发人员使用的工具。   

我们想要运行一个已有的Java程序，那么只需安装 JRE 即可。  
我们想要开发一个全新的Java程序，那么必须安装 JDK 。  
 
# 第三章 HelloWorld入门程序  

## 3.1  程序开发步骤说明 

Java程序开发三步骤：编写、编译、运行。   
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/QQ%E6%88%AA%E5%9B%BE20191209014341.png)   


## 3.2  编写Java源程序
1. 在 d:\day01 目录下新建文本文件，完整的文件名修改为 HelloWorld.java ，其中文件名为 HelloWorld ，后
缀名必须为 .java 。
2. 用记事本打开
3. 在文件中键入文本并保存，代码如下：  

```java  
public class HelloWorld {
   public static void main(String[] args) {  
     System.out.println("Hello World!");    
   }  
}
```  
> 文件名必须是 HelloWorld ，保证文件名和类的名字是一致的，注意大小写。   
> 每个字母和符号必须与示例代码一模一样。  

第一个 HelloWord 源程序就编写完成了，但是这个文件是程序员编写的，JVM是看不懂的，也就不能运行，因此我
们必须将编写好的 Java 源文件 编译成JVM可以看懂的 字节码文件 。  

## 3.3  编译Java源文件

在DOS命令行中，进入Java源文件的目录，使用 javac 命令进行编译。  
命令:  
```java
javac HelloWorld.java
```  
编译成功后，命令行没有任何提示。打开 d:\day01 目录，发现产生了一个新的文件  HelloWorld.class ，该文件
就是编译后的文件，是Java的可运行文件，称为字节码文件，有了字节码文件，就可以运行程序了。  
> Java源文件的编译工具 javac.exe ，在JDK安装目录的bin目录下。但是由于配置了环境变量，可以再任意目录下使用。  

## 3.4  运行Java程序
在DOS命令行中，进入Java源文件的目录，使用 java 命令进行运行。 
命令: 
```java
java HelloWorld
```  

## 3.5  入门程序说明 

### 编译和运行是两回事  

- 编译 ：是指将我们编写的Java源文件翻译成JVM认识的class文件，在这个过程中， javac 编译器会检查我们
所写的程序是否有错误，有错误就会提示出来，如果没有错误就会编译成功。 
- 运行 ：是指将 class 文件 交给JVM去运行，此时JVM就会去执行我们编写的程序了。  

### 关于main方法   
main 方法：称为主方法。写法是固定格式不可以更改。main方法是程序的入口点或起始点，无论我们编写多
少程序，JVM在运行的时候，都会从main方法这里开始执行。  

### 标识符  

- 标识符 ：是指在程序中，我们自己定义内容。比如类的名字、方法的名字和变量的名字等等，都是标识符。 

- 命名规则： 硬性要求  
  - 标识符可以包含 英文字母 26个(区分大小写) 、 0 -9数字 、 $ （美元符号） 和 _ （下划线） 。
  - 标识符不能以数字开头。
  - 标识符不能是关键字。 

- 命名规范： 软性建议  
  - 类名规范：首字母大写，后面每个单词首字母大写（大驼峰式）。
  - 方法名规范： 首字母小写，后面每个单词首字母大写（小驼峰式）。 
  - 变量名规范：全部小写。


# 第四章 常量  

## 4.1  概述 
常量：是指在Java程序中固定不变的数据。 

## 4.2  分类   
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/QQ%E6%88%AA%E5%9B%BE20191209014444.png)  


## 4.3  练习 
需求：输出各种类型的常量。  

```java
public class ConstantDemo {
  public static void main(String[] args){    
        //输出整数常量
        System.out.println(123);
        //输出小数常量
        System.out.println(0.125);
        //输出字符常量
        System.out.println('A');
        //输出布尔常量
        System.out.println(true);
        //输出字符串常量
        System.out.println("你好Java");
   }
}
```  

# 第五章 变量和数据类型   

## 5.1  变量概述 

变量：常量是固定不变的数据，那么在程序中可以变化的量称为变量。  

> Java中要求一个变量每次只能保存一个数据，必须要明确保存的数据类型   

## 5.2  数据类型    

### 数据类型分类   

Java的数据类型分为两大类： 

- 基本数据类型 ：包括  `整数` 、 `浮点数` 、 `字符` 、 `布尔` 。  
- 引用数据类型 ：包括  `类` 、 `数组` 、 `接口` 。   

### 基本数据类型  

四类八种基本数据类型：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.png)  

> Java中的默认类型：整数类型是 `int` 、浮点类型是 `double`   

## 5.3  变量的定义  

### 格式  
```  
数据类型 变量名 = 数据值;
```  

### 练习   

定义所有基本数据类型的变量，代码如下：  

```java
public class Variable {
  public static void main(String[] args){    
          //定义字节型变量
          byte b = 100;
          System.out.println(b);
          //定义短整型变量
          short s = 1000;
          System.out.println(s);
          //定义整型变量
          int i = 123456;
          System.out.println(i);
          //定义长整型变量
          long l = 12345678900L;
          System.out.println(l);
          //定义单精度浮点型变量
          float f = 5.5F;
          System.out.println(f);
          //定义双精度浮点型变量
          double d = 8.5;
          System.out.println(d);
          //定义布尔型变量
          boolean bool = false;
          System.out.println(bool);
          //定义字符型变量
          char c = 'A';
          System.out.println(c);
  }    
}
```  

> long类型：建议数据后加L表示。  
> float类型：建议数据后加F表示。  

### 5.4  注意事项  

- 变量名称：在同一个大括号范围内，变量的名字不可以相同。  
- 变量赋值：定义的变量，不赋值不能使用。  


# day02【数据类型转换、运算符、方法入门】   

## 今日内容  

- 数据类型转换  
- 算数运算符 
- 比较运算符  
- 逻辑运算符  
- 三元运算符  
- 简单方法定义和调用

## 学习目标  

- [ ] 理解数据类型的强制转换   
- [ ] 理解数据类型的自动转换  
- [ ] 理解int类型和char类型的运算原理  
- [ ] 理解运算符++ --的运算方式  
- [ ] 理解+符号在字符串中的作用   
- [ ] 理解比较运算符  
- [ ] 理解逻辑运算符  
- [ ] 掌握三元运算符的格式和计算结果 
- [ ] 掌握无返回值无参数方法的定义格式
- [ ] 了解ASCII编码表  
- [ ] 了解方法的概念
- [ ] 了解方法定义的注意事项   

# 第一章 数据类型转换   

Java程序中要求参与的计算的数据，必须要保证数据类型的一致性，如果数据类型不一致将发生`类型的转换`。  

## 1.1  自动转换   
一个 `int` 类型变量和一个 `byte` 类型变量进行加法运算， 结果会是什么数据类型？

```java
int i = 1;
byte b = 2;
```  
运算结果，变量的类型将是 `int ` 类型，这就是出现了数据类型的自动类型转换现象。 

- 自动转换 ：将 取值范围小的类型 自动提升为 取值范围大的类型 。  

```java
public static void main(String[] args) {
    int i = 1;
    byte b = 2;
   // byte x = b + i; // 报错  
    //int类型和byte类型运算，结果是int类型
    int j = b + i;
    System.out.println(j);
}
```  

### 转换原理图解  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E8%BD%AC%E6%8D%A2%E5%8E%9F%E7%90%86%E5%9B%BE.png)   


同样道理，当一个 int 类型变量和一个 double 变量运算时， int 类型将会自动提升为 double 类型进行运算。  

``` java
public static void main(String[] args) {
    int i = 1;
    double d = 2.5;
    //int类型和double类型运算，结果是double类型
    //int类型会提升为double类型
    double e = d+i;
    System.out.println(e);
}
```  

### 转换规则  

范围小的类型向范围大的类型提升， `byte` 、`short`、`char` 运算时直接提升为 `int` 。  

``` java
byte、short、char‐‐>int‐‐>long‐‐>float‐‐>double
```  

## 1.2  强制转换  

将 `1.5` 赋值到 `int` 类型变量会发生什么？产生编译失败，肯定无法赋值。 

```java
int i = 1.5; // 错误
```  

`double` 类型内存8个字节， `int` 类型内存4个字节。 1.5 是 `double` 类型，取值范围大于 `int` 。可以理解为 `double` 是8
升的水壶， `int` 是4升的水壶，不能把大水壶中的水直接放进小水壶去。  

想要赋值成功，只有通过强制类型转换，将 `double` 类型强制转换成 `int` 类型才能赋值。  

***强制类型转换*** ：将 `取值范围大的类型` 强制转换成 `取值范围小的类型` 。  

比较而言，自动转换是Java自动执行的，而强制转换需要我们自己手动执行。  

### 转换格式：  

```java
数据类型 变量名 = （数据类型）被转数据值；
```  

将 `1.5` 赋值到 `int` 类型，代码修改为：  

```java
// double类型数据强制转成int类型，直接去掉小数点。
int i = (int)1.5;
```  

同样道理，当一个 short 类型与 1 相加，我们知道会类型提升，但是还想给结果赋值给short类型变量，就需要强制转换。  

```java
public static void main(String[] args) {
     //short类型变量，内存中2个字节
     short s = 1;
     /*
       出现编译失败
       s和1做运算的时候，1是int类型，s会被提升为int类型
       s+1后的结果是int类型，将结果在赋值会short类型时发生错误
       short内存2个字节，int类型4个字节
       必须将int强制转成short才能完成赋值
     */
     s = s + 1；//编译失败
     s = (short)(s+1);//编译成功
}
``` 

### 转换原理图解   

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E8%BD%AC%E6%8D%A2%E5%8E%9F%E7%90%86%E5%9B%BE%E8%A7%A32.png)

### 强烈注意  

- 浮点转成整数，直接取消小数点，可能造成数据损失精度。 
- `int`强制转成 `short` 砍掉2个字节，可能造成数据丢失。 

```java
// 定义s为short范围内最大值
short s = 32767;
// 运算后，强制转换，砍掉2个字节后会出现不确定的结果
s = (short)(s + 10);
```  

## 1.3 ASCII 编码表  

```java
public static void main(String[] args) {
  //字符类型变量
  char c = 'a';
  int i = 1;
  //字符类型和int类型计算
  System.out.println(c+i);//输出结果是98
}
```  

在计算机的内部都是二进制的0、1数据，如何让计算机可以直接识别人类文字的问题呢？就产生出了编码表的概念。  

- **编码表**：就是将人类的文字和一个十进制数进行对应起来组成一张表格。  
- 将所有的英文字母，数字，符号都和十进制进行了对应，因此产生了世界上第一张编码表 ASCII（American Standard Code for Information Interchange 美国标准信息交换码）。 

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BC%96%E7%A0%81%E8%A1%A8.png) 

> 小贴士：   
>在char类型和int类型计算的过程中，char类型的字符先查询编码表，得到97，再和1求和，结果为98。char类型提升为了int类型。char类型内存2个字节，int类型内存4个字节。

# 第二章 运算符  

## 2.1  算数运算符  
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E8%BF%90%E7%AE%97%E7%AC%A6.png)

Java中，整数使用以上运算符，无论怎么计算，也不会得到小数。  

```java
public static void main(String[] args) {
   int i = 1234;  
   System.out.println(i/1000*1000);//计算结果是1000  
}
```  

- `++` 运算，变量自己增长1。反之， `--` 运算，变量自己减少1，用法与` ++ `一致。

  - 独立运算： 

    - 变量在独立运算时， 前 `++` 和 后 `++` 没有区别 。
    - 变量 前 `++` ：例如  `++i` 。
    - 变量 后 `++` ：例如  `i++` 。

  - 混合运算：
    
    - 和其他变量放在一起， 前 `++` 和 后 `++` 就产生了不同。
    - 变量 前 `++` ：变量a自己加1，将加1后的结果赋值给b，也就是说a先计算。a和b的结果都是2。

    ```java
      public static void main(String[] args) {
        int a = 1;
        int b = ++a;
        System.out.println(a);//计算结果是2
        System.out.println(b);//计算结果是2
      }
    ```  

    - 变量 后 `++` ：变量a先把自己的值1，赋值给变量b，此时变量b的值就是1，变量a自己再加1。a的结果是2，b的结果是1。 

    ```java
      public static void main(String[] args) {
        int a = 1;
        int b = a++;
        System.out.println(a);//计算结果是2
        System.out.println(b);//计算结果是1
      }
    ```  
- `+`符号在字符串中的操作：   

   - `+` 符号在遇到字符串的时候，表示连接、拼接的含义。 
   - "a"+"b" 的结果是“ab”，连接含义  

  ```java
    public static void main(String[] args){
      System.out.println("5+5="+5+5);//输出5+5=55   
    }
  ```  

## 2.2  赋值运算符

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6.png)  

- 赋值运算符，就是将符号右边的值，赋给左边的变量 

```java
public static void main(String[] args){
    int i = 5;
    i+=5;//计算方式 i=i+5 变量i先加5，再赋值变量i
    System.out.println(i); //输出结果是10
}

```  

## 2.3  比较运算符  
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6.png)  

- 比较运算符，是两个数据之间进行比较的运算，运算结果都是布尔值 `true` 或者 `false` 。  

```java
public static void main(String[] args) {
    System.out.println(1==1);//true
    System.out.println(1<2);//true
    System.out.println(3>4);//false
    System.out.println(3<=4);//true
    System.out.println(3>=4);//false
    System.out.println(3!=4);//true
}
```  

## 2.4  逻辑运算符  


![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6.png)  


- 逻辑运算符，是用来连接两个布尔类型结果的运算符，运算结果都是布尔值 `true` 或者 `false `   


```java
public static void main(String[] args)  {
    System.out.println(true && true);//true
    System.out.println(true && false);//false
    System.out.println(false && true);//false，右边不计算
 
    System.out.println(false || false);//falase
    System.out.println(false || true);//true
    System.out.println(true || false);//true，右边不计算
 
    System.out.println(!false);//true
}
```  

## 2.5  三元运算符  

- 三元运算符格式：  

```java
数据类型 变量名 = 布尔类型表达式？结果1：结果2
```  

- 三元运算符计算方式：
  - 布尔类型表达式结果是 true，三元运算符整体结果为结果1，赋值给变量。
  - 布尔类型表达式结果是 false，三元运算符整体结果为结果2，赋值给变量。  

```java
public static void main(String[] args) {
    int i = (1==2 ? 100 : 200);
    System.out.println(i);//200
    int j = (3<=4 ? 500 : 600);
    System.out.println(j);//500
}
```  

# 第三章 方法入门   

## 3.1  概述  

我们在学习运算符的时候，都为每个运算符单独的创建一个新的类和main方法，我们会发现这样编写代码非常的繁琐，而且
重复的代码过多。能否避免这些重复的代码呢，就需要使用方法来实现。

**方法**： 就是将一个功能抽取出来，把代码单独定义在一个大括号内，形成一个单独的功能。 

当我们需要这个功能的时候，就可以去调用。这样即实现了代码的复用性，也解决了代码冗余的现象。 

## 3.2  方法的定义  

- 定义格式：

```java
修饰符 返回值类型 方法名 （参数列表）｛
     代码...        
    return ;     
｝
```

- 定义格式解释： 
  
  - 修饰符： 目前固定写法  `public static` 。
  - 返回值类型： 目前固定写法  `void` ，其他返回值类型在后面的课程讲解。
  - 方法名：为我们定义的方法起名，满足标识符的规范，用来调用方法。
  - 参数列表： 目前无参数， 带有参数的方法在后面的课程讲解。
  - return ：方法结束。因为返回值类型是void，方法大括号内的return可以不写。  

- 举例： 

```java
public static void methodName() {
   System.out.println("这是一个方法");  
}
```  
## 3.3  方法的调用  

方法在定义完毕后，方法不会自己运行，必须被调用才能执行，我们可以在主方法main中来调用我们自己定义好的方法。在主方法中，直接写要调用的方法名字就可以调用了。 

```java
public static void main(String[] args) {
    //调用定义的方法method
    method();
}
//定义方法，被main方法调用
public static void method() {
   System.out.println("自己定义的方法，需要被main调用运行");  
}
```  

## 3.4  调用练习  

将三元运算符代码抽取到自定义的方法中，并调用。 

```java
public static void main(String[] args) {
    //调用定义的方法operator
    operator();
}
//定义方法，方法中定义三元运算符
public static void operator() {
    int i = 0;
    i = (1==2 ? 100:200);
    System.out.println(i);
    int j = 0 ;
    j = (3<=4 ? 500:600);
    System.out.println(j);
}
``` 

## 3.5  注意事项  

- 方法定义注意事项：
  - 方法必须定义在一类中方法外 
  - 方法不能定义在另一个方法的里面    

```java
public class Demo {
    public static void main(String[] args){
    }
    //正确写法，类中，main方法外面可以定义方法
    public static void method(){}
}
```  

```java
public class Demo {
    public static void main(String[] args){
        //错误写法，一个方法不能定义在另一方法内部
        public static void method(){}
    }
}
```   

# 第五章 扩展知识点   
 
## 5.1 += 符号的扩展  

下面的程序有问题吗？  

```java
public static void main(String[] args){
  short s = 1;
  s+=1;
  System.out.println(s);
}
```  

分析：  `s += 1` 逻辑上看作是 `s = s + 1` 计算结果被提升为int类型，再向short类型赋值时发生错误，因为不能将取值范围
大的类型赋值到取值范围小的类型。但是， `s=s+1` 进行两次运算 ， `+=` 是一个运算符，只运算一次，并带有强制转换的特点，也就是说 `s += 1` 就是 `s = (short)(s + 1)` ，因此程序没有问题编译通过，运行结果是2.  

## 5.2  常量和变量的运算  

下面的程序有问题吗？
 

 ```java
 public static void main(String[] args){
  byte b1=1;
  byte b2=2;
  byte b3=1 + 2;
  byte b4=b1 + b2;
  System.out.println(b3);
  System.out.println(b4);
}
```  

分析： `b3 = 1 + 2` ， `1` 和  `2` 是常量，为固定不变的数据，在编译的时候（编译器javac），已经确定了 `1+2` 的结果并没
有超过byte类型的取值范围，可以赋值给变量 `b3` ，因此 `b3=1 + 2` 是正确的  

反之， `b4 = b2 + b3` ， `b2` 和  `b3` 是变量，变量的值是可能变化的，在编译的时候，编译器javac不确定`b2+b3`的结果是什
么，因此会将结果以int类型进行处理，所以int类型不能赋值给byte类型，因此编译失败。

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20191209153325.png)  


# day03 【流程控制语句】

## 今日内容 

- if else 判断语句 
- switch 选择语句  
- for 循环语句  
- while 循环语句
- do while 循环语句
- 跳出语句 break，continue  

## 学习目标  

- [ ] 理解if语句的格式和执行流程
- [ ] 理解if...else语句的格式和执行流程
- [ ] 理解if...else if语句的格式和执行流程
- [ ] 了解if语句和三元运算符互换
- [ ] 理解switch选择语句的格式和执行流程
- [ ] 了解switch选择语句接收的数据类型
- [ ] 了解case的穿透性
- [ ] 理解while语句的格式和执行流程
- [ ] 理解for语句的格式和执行流程
- [ ] 理解do...while语句的格式和执行流程
- [ ] 了解do...while循环的特点
- [ ] 了解跳出语句break，continue的意义
- [ ] 理解嵌套for循环的执行流程

# 第一章 流程控制  

## 1.1  概述  
在一个程序执行的过程中，各条语句的执行顺序对程序的结果是有直接影响的。也就是说，程序的流程对运行结果有直接的影响。所以，我们必须清楚每条语句的执行流程。而且，很多时候我们要通过控制语句的执行顺序来实现我们要完成的功能。  

## 1.2  顺序结构  
```java
public static void main(String[] args){
    //顺序执行，根据编写的顺序，从上到下运行
    System.out.println(1);
    System.out.println(2);
    System.out.println(3);
}
```  

# 第二章 判断语句  

## 2.1  判断语句1--if  

- if 语句第一种格式： if 

```java
if(关系表达式)｛
   语句体;  
｝
```  

- 执行流程  
  - 首先判断关系表达式看其结果是 true还是false
  - 如果是 true就执行语句体
  - 如果是 false就不执行语句体  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.png)  

```java
public static void main(String[] args){
    System.out.println("开始");
    // 定义两个变量
    int a = 10;
    int b = 20;
    //变量使用if判断
    if (a == b){
       System.out.println("a等于b");  
    }
    int c = 10;
    if(a == c){
       System.out.println("a等于c");  
    }
    System.out.println("结束");
｝

```

## 2.2  判断语句2--if...else  

- if 语句第二种格式： if...else  

```java

if(关系表达式) {
   语句体1;  
}else {
   语句体2;  
}
```  

- 执行流程  
  - 首先判断关系表达式看其结果是 true还是false
  - 如果是 true就执行语句体1
  - 如果是 false就执行语句体2  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B2.png)  

```java
public static void main(String[] args){
    // 判断给定的数据是奇数还是偶数
    // 定义变量
    int a = 1;
    if(a % 2 == 0) {
       System.out.println("a是偶数");  
    } else{
       System.out.println("a是奇数");  
    }
    System.out.println("结束");
}
```  

## 2.3  判断语句3--if..else if...else  

- if 语句第三种格式： if...else if ...else  

```java
if (判断条件1) {
   执行语句1;  
} else if (判断条件2) {
   执行语句2;  
}
...
}else if (判断条件n) {
  执行语句n;   
} else {
   执行语句n+1;  
}
```  

- 执行流程  
  - 首先判断关系表达式 1看其结果是true还是false
  - 如果是 true就执行语句体1
  - 如果是 false就继续判断关系表达式2看其结果是true还是false
  - 如果是 true就执行语句体2
  - 如果是 false就继续判断关系表达式…看其结果是true还是false
  - …
  - 如果没有任何关系表达式为 true，就执行语句体n+1。  

  ![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B3.png)


```java 
  public static void main(String[] args) {
    // x和y的关系满足如下：
    // x>=3 y = 2x + 1;
    //‐1<=x<3 y = 2x;
    // x<=‐1 y = 2x – 1;
    // 根据给定的x的值，计算出y的值并输出。
    // 定义变量
    int x = 5;
    int y;
    if (x>= 3) {
       y = 2 * x + 1;  
    } else if (x >= ‐1 && x < 3) {
       y = 2 * x;  
    } else  {
       y = 2 * x ‐ 1;  
    }
    System.out.println("y的值是："+y);
}
```   

## 2.4  语句练习 

- 指定考试成绩，判断学生等级
  - 90-100 优秀
  - 80-89 好
  - 70-79 良
  - 60-69 及格
  - 60 以下 不及格  

```java
public static void main(String[] args) {   
    int score = 100;
    if(score<0 || score>100){
       System.out.println("你的成绩是错误的");  
    }else if(score>=90 && score<=100){
       System.out.println("你的成绩属于优秀");  
    }else if(score>=80 && score<90){
       System.out.println("你的成绩属于好");  
    }else if(score>=70 && score<80){
       System.out.println("你的成绩属于良");  
    }else if(score>=60 && score<70){
       System.out.println("你的成绩属于及格");  
    }else {
       System.out.println("你的成绩属于不及格");  
    }  
}}
```  

## 2.5 if 语句和三元运算符的互换  

在某些简单的应用中，if语句是可以和三元运算符互换使用的。  

```java
public static void main(String[] args) {
    int a = 10;
    int b = 20;
    //定义变量，保存a和b的较大值
    int c;
    if(a > b) {
       c = a;  
    } else {
       c = b;  
    }
    //可以上述功能改写为三元运算符形式
    c = a > b ? a:b;
}
```

# 第三章 选择语句  

## 3.1  选择语句--switch  

- switch 语句格式：  

```java
switch(表达式) {
  case 常量值1:
    语句体1;
    break;
  case 常量值2:
    语句体2;
    break;
  ...
  default:
    语句体n+1;
    break;
}
```  

- 执行流程
  - 首先计算出表达式的值
  - 其次，和 case依次比较，一旦有对应的值，就会执行相应的语句，在执行的过程中，遇到break就会结束
  - 最后，如果所有的 case都和表达式的值不匹配，就会执行default语句体部分，然后程序结束掉。 

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B4.png)  

```java
public static void main(String[] args) {
    //定义变量，判断是星期几
    int weekday = 6;
    //switch语句实现选择
    switch(weekday) {
        case 1:
          System.out.println("星期一");
          break;
        case 2:
          System.out.println("星期二");
          break;
        case 3:
          System.out.println("星期三");
          break;
        case 4:
          System.out.println("星期四");
          break;
        case 5:
          System.out.println("星期五");
          break;
        case 6:
          System.out.println("星期六");
          break;
        case 7:
          System.out.println("星期日");
          break;
        default:
          System.out.println("你输入的数字有误");
          break;
    }  
}

switch 语句中，表达式的数据类型，可以是byte，short，int，char，enum（枚举），JDK7后可以接收字符串。

## 3.2 case 的穿透性  

在switch语句中，如果case的后面不写break，将出现穿透现象，也就是不会在判断下一个case的值，直接向后运
行，直到遇到break，或者整体switch结束。

```java
public static void main(String[] args) {
  int i = 5;
  switch (i){
    case 0:
      System.out.println("执行case0");
      break;
    case 5:
      System.out.println("执行case5");
    case 10:
      System.out.println("执行case10");
    default:
      System.out.println("执行default");
  }
}
```   

上述程序中，执行case5后，由于没有break语句，程序会一直向后走，不会在判断case，也不会理会break，直接
运行完整体switch。  

由于case存在穿透性，因此初学者在编写switch语句时，必须要写上break。  

# 第四章 循环语句  

## 4.1  循环概述  

循环语句可以在满足循环条件的情况下，反复执行某一段代码，这段被重复执行的代码被称为循环体语句，当反复
执行这个循环体时，需要在合适的时候把循环判断条件修改为false，从而结束循环，否则循环将一直执行下去，形
成死循环。

## 4.2  循环语句1--for  

- for 循环语句格式：  

```java
for(初始化表达式①; 布尔表达式②; 步进表达式④){
循环体③        
}
``` 

- 执行流程  

  - 执行顺序：①②③④ >②③④>②③④…②不满足为止。
  - ①负责完成循环变量初始化
  - ②负责判断是否满足循环条件，不满足则跳出循环
  - ③具体执行的语句
  - ④循环后，循环条件所涉及变量的变化情况  



![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B5.png)

```java
public static void main(String[] args) {
    //控制台输出10次HelloWorld，不使用循环
    System.out.println("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("HelloWorld");
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐");
    //用循环改进，循环10次
    //定义变量从0开始，循环条件为<10
    for(int x = 0; x < 10; x++) {
       System.out.println("HelloWorld"+x);  
    }
}

```  

- 循环练习：使用循环，计算 1-100之间的偶数和  

```java
public static void main(String[] args) {
  //1.定义一个初始化变量,记录累加求和,初始值为0
  int sum = 0;
  //2.利用for循环获取1‐100之间的数字
  for (int i = 1; i <= 100; i++) {
      //3.判断获取的数组是奇数还是偶数
      if(i % 2==0){
        //4.如果是偶数就累加求和
        sum += i;
      }
  }
   //5.循环结束之后,打印累加结果  
   System.out.println("sum:"+sum);  
}
```  

## 4.3  循环语句2--while  

- while 循环语句格式： 

```java
初始化表达式①
  while(布尔表达式②){
    循环体③
    步进表达式④
}
```  

- 执行流程  
  - 执行顺序：①②③④ >②③④>②③④…②不满足为止。
  - ①负责完成循环变量初始化。
  - ②负责判断是否满足循环条件，不满足则跳出循环。
  - ③具体执行的语句。
  - ④循环后，循环变量的变化情况。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B6.png)   

while循环输出10次HelloWorld

```java
public static void main(String[] args) {
    //while循环实现打印10次HelloWorld
    //定义初始化变量
    int i = 1;
    //循环条件<=10
    while(i<=10){
        System.out.println("HelloWorld");
        //步进
        i++;
    }
}
```  

while循环计算1-100之间的和  

```java
public static void main(String[] args) {
    //使用while循环实现
    //定义一个变量,记录累加求和
    int sum = 0;
    //定义初始化表达式
    int i = 1;
    //使用while循环让初始化表达式的值变化
    while(i<=100){
        //累加求和
        sum += i ;
        //步进表达式改变变量的值
        i++;
    }
    //打印求和的变量
    System.out.println("1‐100的和是："+sum);
}
```  

## 4.4  循环语句3--do...while  

- do...while 循环格式  

```java
初始化表达式①
    do{
    循环体③
    步进表达式④
}while(布尔表达式②);
```  

- 执行流程
  - 执行顺序：①③④ >②③④>②③④…②不满足为止。
  - ①负责完成循环变量初始化。
  - ②负责判断是否满足循环条件，不满足则跳出循环。
  - ③具体执行的语句
  - ④循环后，循环变量的变化情况  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B7.png);

输出10次HelloWorld

```java
public static void main(String[] args) {
    int x=1;
    do {
      System.out.println("HelloWorld");
      x++;
    }while(x<=10);
}
```

do...while循环的特点：无条件执行一次循环体，即使我们将循环条件直接写成false，也依然会循环一次。这样的
循环具有一定的风险性，因此初学者不建议使用do...while循环。  

```java
public static void main(String[] args){
    do{
       System.out.println("无条件执行一次");  
    }while(false);
}
```  

## 4.5  循环语句的区别
 
- `for` 和  `while` 的小区别：  
  - 控制条件语句所控制的那个变量，在 for循环结束后，就不能再被访问到了，而while循环结束还可以继续使用，如果你想继续使用，就用while，否则推荐使用for。原因是for循环结束，该变量就从内存中消失，能够提高内存的使用效率。
  - 在已知循环次数的时候使用推荐使用 for，循环次数未知的时推荐使用while。  

## 4.6 跳出语句   

### break  

- 使用场景：终止 switch或者循环  
  - 在选择结构 switch语句中  
  - 在循环语句中
  - 离开使用场景的存在是没有意义的  


```java
public static void main(String[] args) {
    for (int i = 1; i<=10; i++) {
        //需求:打印完两次HelloWorld之后结束循环
        if(i == 3){
          break;
        }
        System.out.println("HelloWorld"+i);
    }
}
```  

### continue  

使用场景：结束本次循环，继续下一次的循环  

```java
public static void main(String[] args) {
    for (int i = 1; i <= 10; i++) {
        //需求:不打印第三次HelloWorld
        if(i == 3){
          continue;
        }
        System.out.println("HelloWorld"+i);
    }
}
```  

# 第五章 扩展知识点  

## 5.1  死循环  

**死循环**： 也就是循环中的条件永远为true，死循环的是永不结束的循环。例如：while(true){}。  

在后期的开发中，会出现使用死循环的场景，例如：我们需要读取用户输入的输入，但是用户输入多少数据我们并
不清楚，也只能使用死循环，当用户不想输入数据了，就可以结束循环了，如何去结束一个死循环呢，就需要使用
到跳出语句了。  

## 5.2  嵌套循环  

- 所谓嵌套循环 ，是指一个循环的循环体是另一个循环。比如for循环里面还有一个for循环，就是嵌套循环。总
共的循环次数=外循环次数*内循环次数  

- 嵌套循环格式：  

```java
for(初始化表达式①; 循环条件②; 步进表达式⑦) {
    for(初始化表达式③; 循环条件④; 步进表达式⑥) {
       执行语句⑤;  
    }
}
```  

- 嵌套循环执行流程：
  - 执行顺序：①②③④⑤⑥ >④⑤⑥>⑦②③④⑤⑥>④⑤⑥
  - 外循环一次，内循环多次。
  - 比如跳绳：一共跳 5组，每组跳10个。5组就是外循环，10个就是内循环。  

## 练习 ：使用嵌套循环，打印5*8的矩形  

```java
  public static void main(String[] args) {
    //5*8的矩形，打印5行*号，每行8个
    //外循环5次，内循环8次
    for(int i = 0; i < 5; i++){
        for(int j = 0; j < 8; j++){
            //不换行打印星号
            System.out.print("*");
        }
        //内循环打印8个星号后，需要一次换行
        System.out.println();
    }
｝
```



