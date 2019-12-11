<!-- GFM-TOC -->
* [day01 【前言、入门程序、常量、变量】](#day01-前言入门程序常量变量)
* [day02 【数据类型转换、运算符、方法入门】](#day02-数据类型转换运算符方法入门)
* [day03 【流程控制语句】](#day03-流程控制语句)
* [day04 【Idea、方法】](#day04-idea方法) 
* [day05 【数组】](#day05-数组)   
* [day06 【类与对象、封装、构造方法】](#day06-类与对象封装构造方法)   
* [day07 【Scanner类、Random类、ArrayList类】](#day07-Scanner类Random类ArrayList类)   
* [day08 【String类、static关键字、Arrays类、
Math类】](#day08-String类static关键字Arrays类)
* [day09 【继承、super、this、抽象类】](#day09-继承superthis抽象类)  
* [day10 【接口、多态】](#day10-接口多态)   
* [day11 【final、权限、内部类、引用类型】](#day11final权限内部类引用类型)  
* [day12【Object类、Date类、Calendar类、System类、StringBuilder类、基本类型包装类】]
* [day13【Collection、泛型】]
* [day14【List、Set】]
* [day15 【Map】]
* [day16 【异常、线程】]
* [day17 【线程、同步】]
* [day18【线程池、Lambda表达式】]
* [day19【File类、递归】]
* [day20【字节流、字符流】]
* [day21【缓冲流、转换流、序列化流、打印流】]
* [day22【网络编程】]
* [day23【函数式接口】]
* [day24【Stream流、方法引用】]

 
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
1. 在 `d:\day01` 目录下新建文本文件，完整的文件名修改为 HelloWorld.java ，其中文件名为 HelloWorld ，后缀名必须为 .java 。
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
编译成功后，命令行没有任何提示。打开 `d:\day01` 目录，发现产生了一个新的文件  HelloWorld.class ，该文件
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

- 编译 ：是指将我们编写的Java源文件翻译成JVM认识的class文件，在这个过程中， javac 编译器会检查我们所写的程序是否有错误，有错误就会提示出来，如果没有错误就会编译成功。 
- 运行 ：是指将 class 文件 交给JVM去运行，此时JVM就会去执行我们编写的程序了。  

### 关于main方法   
main方法：称为主方法。写法是固定格式不可以更改。main方法是程序的入口点或起始点，无论我们编写多少程序，JVM在运行的时候，都会从main方法这里开始执行。  

### 标识符  

- 标识符 ：是指在程序中，我们自己定义内容。比如类的名字、方法的名字和变量的名字等等，都是标识符。 

- 命名规则： `硬性要求`
  - 标识符可以包含 英文字母 26个(区分大小写) 、 0 -9数字 、 $ （美元符号） 和 _ （下划线） 。
  - 标识符不能以数字开头。
  - 标识符不能是关键字。 

- 命名规范： `软性建议`  
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


# day02 【数据类型转换、运算符、方法入门】   

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

- 自动转换 ：将取值范围小的类型`自动提升为`取值范围大的类型 。  

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

# day04 【Idea、方法】

# 第一章 开发工具IntelliJ IDEA  

## 1.1 IDEA 的项目目录  

- 我们创建的项目，在 d:\ideawork目录的demo下  
  - `.idea` 目录和 `demo.iml` 和我们开发无关，是IDEA工具自己使用的
  - `out` 目录是存储编译后的`.class`文件
  - `src` 目录是存储我们编写的`.java`源文件  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/IDEA1.png)  


## 1.2 IDEA 常用快捷键  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/IDEA2.png)  

# 第二章 方法   

## 2.1  回顾--方法的定义和调用  

前面的课程中，使用过嵌套循环输出矩形，控制台打印出矩形就可以了，因此将方法定义为 `void` ，没有返回值。
在主方法`main` 中直接被调用。  

```java
public class Method_Demo1 {
    public static void main(String[] args) {
        print();
    }
    private static void print() {
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 8; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```  

`print` 方法被` main` 方法调用后直接输出结果，而 `main` 方法并不需要 `print` 方法的执行结果，所以被定义为
`void` 。  

## 2.2  定义方法的格式详解  

```java
修饰符 返回值类型 方法名(参数列表){
    //代码省略...
    return 结果;
}
```  

- 修饰符： public static 固定写法
- 返回值类型： 表示方法运行的结果的数据类型，方法执行后将结果返回到调用者
- 参数列表：方法在运算过程中的未知数据，调用者调用方法时传递
- return ：将方法执行后的结果带给调用者，方法执行到 `return` ，整体方法运行结束  

> 小贴士：return 结果; 这里的"结果"在开发中，我们正确的叫法成为方法的返回值  

## 2.3 定义方法的两个明确   

- 需求： 定义方法实现两个整数的求和计算。
  - 明确返回值类型 ：方法计算的是整数的求和，结果也必然是个整数，返回值类型定义为int类型。 
  - 明确参数列表 ：计算哪两个整数的和，并不清楚，但可以确定是整数，参数列表可以定义两个int类型的变量，由调用者调用方法时传递  

```java
public class Method_Demo2 {
    public static void main(String[] args) {
        // 调用方法getSum，传递两个整数，这里传递的实际数据又称为实际参数
        // 并接收方法计算后的结果，返回值    
        int sum = getSum(5, 6);
        System.out.println(sum);
    }
   /*  
    定义计算两个整数和的方法
    返回值类型，计算结果是int
    参数：不确定数据求和，定义int参数.参数又称为形式参数
    */
    public static int getSum(int a, int b) {
        return a + b;
    }
}
```  

程序执行，主方法 `main` 调用 `getSum` 方法，传递了实际数据 `5 和6` ，两个变量 `a 和b` 接收到的就是实际参数，并
将计算后的结果返回，主方法 `main` 中的变量 `sum` 接收的就是方法的返回值。  

## 2.4  调用方法的流程图解  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/method1.png)   

## 2.5  定义方法练习  

### 练习一 

比较两个整数是否相同  

- 分析：定义方法实现功能，需要有两个明确，即 `返回值` 和  `参数列表 `。 

  - 明确返回值 ：比较整数，比较的结果只有两种可能，相同或不同，因此结果是布尔类型，比较的结果相同为true。
  - 明确参数列表 ：比较的两个整数不确定，所以默认定义两个int类型的参数。

```java
public class Method_Demo3 {
    public static void main(String[] args) {
        //调用方法compare，传递两个整数
        //并接收方法计算后的结果，布尔值
        boolean bool = compare(3, 8);
        System.out.println(bool);
    }
    /*
        定义比较两个整数是否相同的方法
        返回值类型，比较的结果布尔类型
        参数：不确定参与比较的两个整数
    */
    public static boolean compare(int a, int b) {
        if (a == b) {
            return true;
        } else {
            return false;
        }
    }
}
```  

### 练习二  

计算1+2+3...+100的和  

- 分析：定义方法实现功能，需要有两个明确，即 `返回值` 和 `参数` 。
  
  - 明确返回值 ：1~100的求和，计算后必然还是整数，返回值类型是int
  - 明确参数 ：需求中已知到计算的数据，没有未知的数据，不定义参数  

```java
public class Method_Demo4 {
    public static void main(String[] args) {
        //调用方法getSum
        //并接收方法计算后的结果，整数
        int sum = getSum();
        System.out.println(sum);
    }
    /*
        定义计算1~100的求和方法
        返回值类型，计算结果整数int
        参数：没有不确定数据
    */
    public static int getSum() {
          //定义变量保存求和
        int sum = 0;
        //从1开始循环，到100结束
        for (int i = 1; i <= 100; i++) {
            sum = sum + i;
        }
        return sum;
    }
}
```  

### 练习三  

实现不定次数打印  

- 分析：定义方法实现功能，需要有两个明确，即 返回值 和 参数 。
  - 明确返回值 ：方法中打印出 HelloWorld 即可，没有计算结果，返回值类型 void 。
  - 明确参数 ：打印几次不清楚，参数定义一个整型参数  

```java
public class Method_Demo5 {
    public static void main(String[] args) {
        //调用方法printHelloWorld，传递整数
        printHelloWorld(9);
    }
    /*
    定义打印HelloWorld方法
    返回值类型，计算没有结果 void
    参数：不确定打印几次
    */
    public static void printHelloWorld(int n) {
        for (int i = 0; i < n; i++) {
            System.out.println("HelloWorld");
        }
    }
}
```  

## 2.6  定义方法的注意事项

- 定义位置，类中方法外面。
- 返回值类型，必须要和 `return` 语句返回的类型相同，否则编译失败 。

```java
// 返回值类型要求是int
public static int getSum() {
    return 5;// 正确，int类型
    return 1.2;// 错误，类型不匹配
    return true;// 错误，类型不匹配
}
```

不能在 `return` 后面写代码， `return` 意味着方法结束，所有后面的代码永远不会执行，属于无效代码。 

```java
public static int getSum(int a,int b) {
   return a + b;  
   System.out.println("Hello");// 错误，return已经结束，这里不会执行，无效代码  
}
```  

## 2.7  调用方法的三种形式  

- 直接调用： 直接写方法名调用  

```java
public static void main(String[] args) {
   print();  
}
public static void print() {
  System.out.println("方法被调用");   
}
```  

- 赋值调用： 调用方法，在方法前面定义变量，接收方法返回值  

```java
public static void main(String[] args) {
   int sum = getSum(5,6);  
   System.out.println(sum);  
}
public static int getSum(int a,int b) {
   return a + b;  
}
```  

## 2.8  方法重载  

- 方法重载 ：指在同一个类中，允许存在一个以上的同名方法，只要它们的参数列表不同即可，与修饰符和返
回值类型无关。
- 参数列表：个数不同，数据类型不同，顺序不同。
- 重载方法调用： JVM通过方法的参数列表，调用不同的方法。  

## 2.9  方法重载练习 

### 练习一  

比较两个数据是否相等。参数类型分别为两个 `byte` 类型，两个 `short` 类型，两个 `int` 类型，两个 `long` 类型，并
在 `main` 方法中进行测试。 

```java
 public class Method_Demo6 {
    public static void main(String[] args) {
        //定义不同数据类型的变量
        byte a = 10;
        byte b = 20;
        short c = 10;
        short d = 20;
        int e = 10;
        int f = 10;
        long g = 10;
        long h = 20;
        // 调用
        System.out.println(compare(a, b));
        System.out.println(compare(c, d));
        System.out.println(compare(e, f));
        System.out.println(compare(g, h));
    }
    // 两个byte类型的
    public static boolean compare(byte a, byte b) {
        System.out.println("byte");
        return a == b;
    }
    // 两个short类型的
    public static boolean compare(short a, short b) {
        System.out.println("short");
        return a == b;
    }
    // 两个int类型的
    public static boolean compare(int a, int b) {
        System.out.println("int");
        return a == b;
    }
    // 两个long类型的
    public static boolean compare(long a, long b) {
        System.out.println("long");
        return a == b;
    }
}
```

### 练习二 

判断哪些方法是重载关系。

```java

public static void open(){}
public static void open(int a){}
static void open(int a,int b){}
public static void open(double a,int b){}
public static void open(int a,double b){}
public void open(int i,double d){}
public static void OPEN(){}
public static void open(int i,int j){}
 
```  

### 练习三  

模拟输出语句中的 `println` 方法效果，传递什么类型的数据就输出什么类型的数据，只允许定义一个方法名`println` 。 

```java
public class Method_Demo7 {
public static void println(byte a) {    
        System.out.println(a);
    }
    public static void println(short a) {
        System.out.println(a);
    }
    public static void println(int a) {
        System.out.println(a);
    }
    public static void println(long a) {
        System.out.println(a);
    }
    public static void println(float a) {
        System.out.println(a);
    }
    public static void println(double a) {
        System.out.println(a);
    }
    public static void println(char a) {
        System.out.println(a);
    }
    public static void println(boolean a) {
        System.out.println(a);
    }
    public static void println(String a) {
        System.out.println(a);
    }
}

```

# day05 【数组】  

## 今日内容  

- 数组概念 
- 数组的定义  
- 数组的索引
- 数组内存 
- 数组的遍历
- 数组的最大值获取
- 数组反转
- 数组作为方法参数和返回值  

## 学习目标  

- [ ] 理解容器的概念
- [ ] 掌握数组的第一种定义方式
- [ ] 掌握数组的第二种定义方式
- [ ] 掌握数组的第三种定义方式
- [ ] 使用索引访问数组的元素
- [ ] 了解数组的内存图解
- [ ] 了解空指针和越界异常
- [ ] 掌握数组的遍历
- [ ] 掌握数组最大值的获取
- [ ] 了解数组反转的原理
- [ ] 了解数组作为方法参数传递
- [ ] 了解数组作为方法的返回值  

# 第一章 数组定义和访问  

## 1.1  容器概述  

### 案例分析  

现在需要统计某公司员工的工资情况，例如计算平均工资、找到最高工资等。假设该公司有50名员工，用前面所学
的知识，程序首先需要声明50个变量来分别记住每位员工的工资，然后在进行操作，这样做会显得很麻烦，而且错
误率也会很高。因此我们可以使用容器进行操作。将所有的数据全部存储到一个容器中，统一操作。

### 容器概念  

- 容器： 是将多个数据存储到一起，每个数据称为该容器的元素。 
- 生活中的容器： 水杯，衣柜，教室  

## 1.2  数组概念

- 数组概念： 数组就是存储数据长度固定的容器，保证多个数据的数据类型要一致。 

## 1.3  数组的定义  

### 方式一  

- 格式：

```java
数组存储的数据类型[] 数组名字 = new 数组存储的数据类型[长度];
```

- 数组定义格式详解：
  - 数组存储的数据类型： 创建的数组容器可以存储什么数据类型。
  - [] :  表示数组。
  - 数组名字：为定义的数组起个变量名，满足标识符规范，可以使用名字操作数组。
  - new ：关键字，创建数组使用的关键字。
  - 数组存储的数据类型： 创建的数组容器可以存储什么数据类型。
  - [ 长度]：数组的长度，表示数组容器中可以存储多少个元素。 
  - **注意：数组有定长特性，长度一旦指定，不可更改。**
    - 和水杯道理相同，买了一个 2升的水杯，总容量就是2升，不能多也不能少。


- 举例:  

定义可以存储3个整数的数组容器，代码如下： 

```java
int[] arr = new int[3];
``` 

### 方式二  

- 格式： 

```java
数据类型[] 数组名 = new 数据类型[]{元素1,元素2,元素3...};
```  

- 举例：  

定义存储1，2，3，4，5整数的数组容器。

```java
int[] arr = new int[]{1,2,3,4,5};
```  

### 方式三 

- 格式： 

```java
数据类型[] 数组名 = {元素1,元素2,元素3...};
``` 

- 举例：  

定义存储1，2，3，4，5整数的数组容器 

```java
int[] arr = {1,2,3,4,5};
```  

## 1.4  数组的访问  

- 索引： 每一个存储到数组的元素，都会自动的拥有一个编号，从0开始，这个自动编号称为数组索引(index)，可以通过数组的索引访问到数组中的元素。 

- 数组的长度属性：每个数组都具有长度，而且是固定的，Java中赋予了数组的一个属性，可以获取到数组的长度，语句为： 数组名 .length ，属性length的执行结果是数组的长度，int类型结果。由次可以推断出，数组的最大索引值为 数组名 .length-1 。  

```java
public static void main(String[] args) {
   int[] arr = new int[]{1,2,3,4,5};  
   //打印数组的属性，输出结果是5  
   System.out.println(arr.length);  
}
```  

- 索引访问数组中的元素：  
  - 数组名 [索引]=数值，为数组中的元素赋值
  - 变量 =数组名[索引]，获取出数组中的元素  

```java
public static void main(String[] args) {
    //定义存储int类型数组，赋值元素1，2，3，4，5
    int[] arr = {1,2,3,4,5};
    //为0索引元素赋值为6
    arr[0] = 6;
    //获取数组0索引上的元素
    int i = arr[0];
    System.out.println(i);
    //直接输出数组0索引元素
    System.out.println(arr[0]);
}
```  

# 第二章 数组原理内存图  

## 2.1  内存概述  

内存是计算机中的重要原件，临时存储区域，作用是运行程序。我们编写的程序是存放在硬盘中的，在硬盘中的程
序是不会运行的，必须放进内存中才能运行，运行完毕后会清空内存。  

Java虚拟机要运行程序，必须要对内存进行空间的分配和管理。  

## 2.2 Java 虚拟机的内存划分  

为了提高运算效率，就对空间进行了不同区域的划分，因为每一片区域都有特定的处理数据方式和内存管理方式。  

- JVM 的内存划分：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E7%BB%841.png)  


## 2.3  数组在内存中的存储    

### 一个数组内存图  

```java
public static void main(String[] args) {
   int[] arr = new int[3];  
   System.out.println(arr);//[I@5f150435  
}
```  

以上方法执行，输出的结果是[I@5f150435，这个是什么呢？是数组在内存中的地址。new出来的内容，都是在堆
内存中存储的，而方法中的变量arr保存的是数组的地址。   

输出arr[0]，就会输出arr保存的内存地址中数组中0索引上的元素  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E7%BB%842.png)  

### 两个数组内存图    

```java
 public static void main(String[] args) {
    int[] arr = new int[3];
    int[] arr2 = new int[2];
    System.out.println(arr);
    System.out.println(arr2);
}
```  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E7%BB%843.png)  

### 两个变量指向一个数组  

```java
public static void main(String[] args) {
    // 定义数组，存储3个元素
    int[] arr = new int[3];
    //数组索引进行赋值
    arr[0] = 5;
    arr[1] = 6;
    arr[2] = 7;
    //输出3个索引上的元素值
    System.out.println(arr[0]);
    System.out.println(arr[1]);
    System.out.println(arr[2]);
    //定义数组变量arr2，将arr的地址赋值给arr2
    int[] arr2 = arr;
    arr2[1] = 9;
    System.out.println(arr[1]);
}
```   

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E7%BB%844.png)  


# 第三章 数组的常见操作

## 3.1  数组越界异常  

观察一下代码，运行后会出现什么结果。  

```java
public static void main(String[] args) {
    int[] arr = {1,2,3};
    System.out.println(arr[3]);
}
```  

创建数组，赋值3个元素，数组的索引就是0，1，2，没有3索引，因此我们不能访问数组中不存在的索引，程序运
行后，将会抛出 ` ArrayIndexOutOfBoundsException` 数组越界异常。在开发中，数组的越界异常是不能出现的，一
旦出现了，就必须要修改我们编写的代码。  

## 3.2  数组空指针异常  

观察一下代码，运行后会出现什么结果。  

```java
public static void main(String[] args) {
    int[] arr = {1,2,3};
    arr = null;
    System.out.println(arr[0]);
｝
```  

`arr = null` 这行代码，意味着变量arr将不会在保存数组的内存地址，也就不允许再操作数组了，因此运行的时候
会抛出 `NullPointerException` 空指针异常。在开发中，数组的越界异常是不能出现的，一旦出现了，就必须要修
改我们编写的代码。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E7%BB%845.png)

**空指针异常在内存图中的表现** 


![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E7%BB%846.png)  

## 3.3  数组遍历【重点】  

- 数组遍历： 就是将数组中的每个元素分别获取出来，就是遍历。遍历也是数组操作中的基石。  

```java
public static void main(String[] args) {
    int[] arr = { 1, 2, 3, 4, 5 };
    System.out.println(arr[0]);
    System.out.println(arr[1]);
    System.out.println(arr[2]);
    System.out.println(arr[3]);
    System.out.println(arr[4]);
}
```

以上代码是可以将数组中每个元素全部遍历出来，但是如果数组元素非常多，这种写法肯定不行，因此我们需要改
造成循环的写法。数组的索引是 `0` 到 `lenght -1` ，可以作为循环的条件出现。

```java
public static void main(String[] args) {
    int[] arr = { 1, 2, 3, 4, 5 };
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
}
```  

## 3.4  数组获取最大值元素  

```java
public static void main(String[] args) {
    int[] arr = { 5, 15, 2000, 10000, 100, 4000 };
    //定义变量，保存数组中0索引的元素
    int max = arr[0];
    //遍历数组，取出每个元素
    for (int i = 0; i < arr.length; i++) {
      //遍历到的元素和变量max比较
      //如果数组元素大于max
      if (arr[i] > max) {
        //max记录住大值
        max = arr[i];
      }
    }
    System.out.println("数组最大值是： " + max);
}
```  

## 3.5  数组反转  

- 数组的反转： 数组中的元素颠倒顺序，例如原始数组为1,2,3,4,5，反转后的数组为5,4,3,2,1  

```java
void invertUsingFor(Object[] array) {
    for (int i = 0; i < array.length / 2; i++) {
        Object temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}
```  

# 第四章 数组作为方法参数和返回值   

## 4.1  数组作为方法参数  

以前的方法中我们学习了方法的参数和返回值，但是使用的都是基本数据类型。那么作为引用类型的数组能否作为
方法的参数进行传递呢，当然是可以的。

- 数组作为方法参数传递，传递的参数是数组内存的地址  

```java
public static void main(String[] args) {
    int[] arr = { 1, 3, 5, 7, 9 };
    //调用方法，传递数组
    printArray(arr);
}
/*
创建方法，方法接收数组类型的参数    
进行数组的遍历    
*/
public static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
}
```  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E7%BB%847.png)    


## 4.2  数组作为方法返回值   

- 数组作为方法的返回值，返回的是数组的内存地址   

```java
public static void main(String[] args) {
    //调用方法，接收数组的返回值
    //接收到的是数组的内存地址
    int[] arr = getArray();
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
}
/*
方法，返回值是数组类型    
return返回数组的地址    
*/
public static int[] getArray() {
    int[] arr = { 1, 3, 5, 7, 9 };
    //返回数组的地址，返回到调用者
    return arr;
}

```  
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E7%BB%848.png);  

## 4.3  方法的参数类型区别    

### 代码分析  

1. 分析下列程序代码，计算输出结果。  

```java
public static void main(String[] args) {
    int a = 1;
    int b = 2;
    System.out.println(a);
    System.out.println(b);
    change(a, b);
    System.out.println(a);
    System.out.println(b);
}

public static void change(int a, int b) {
    a = a + b;
    b = b + a;
}
``` 

2.  分析下列程序代码，计算输出结果。  

```java
public static void main(String[] args) {
    int[] arr = {1,3,5};
    System.out.println(arr[0]);
    change(arr);
    System.out.println(arr[0]);
}
public static void change(int[] arr) {
   arr[0] = 200;  
}
```  

> 总结:
> 方法的参数为基本类型时,传递的是数据值. 方法的参数为引用类型时,传递的是地址值.  


# day06 【类与对象、封装、构造方法】  

## 今日内容  

- 面向对象 
- 类与对象
- 三大特征 ——封装  
- 构造方法  

## 学习目标  
 
- 能够理解面向对象的思想 
- 能够明确类与对象关系  
- 能够掌握类的定义格式
- 能够掌握创建对象格式，并访问类中的成员
- 能够完成手机类的练习
- 能够理解对象的内存图
- 能够说出成员变量和局部变量的区别
- 能够理解private关键字的含义
- 能够说出this关键字可以解决的问题
- 能够理解构造方法的含义
- 能够用封装的思想定义一个标准类 

# 第 1章 面向对象思想

## 1.1  面向对象思想概述  

### 概述  
java语言是一种面向对象的程序设计语言，而面向对象思想是一种程序设计思想，我们在面向对象思想的指引下，
使用Java语言去设计、开发计算机程序。 这里的对象泛指现实中一切事物，每种事物都具备自己的属性和行为。面
向对象思想就是在计算机程序设计过程中，参照现实中事物，将事物的属性特征、行为特征抽象出来，描述成计算
机事件的设计思想。 它区别于面向过程思想，强调的是通过调用对象的行为来实现功能，而不是自己一步一步的去
操作实现。  

### 举例  

洗衣服:  

- 面向过程：把衣服脱下来 -->找一个盆-->放点洗衣粉-->加点水-->浸泡10分钟-->揉一揉-->清洗衣服-->拧干-->晾
起来 

- 面向对象：把衣服脱下来 -->打开全自动洗衣机-->扔衣服-->按钮-->晾起来  

区别： 

- 面向过程：强调步骤。
- 面向对象：强调对象，这里的对象就是洗衣机。  

### 特点   

面向对象思想是一种更符合我们思考习惯的思想，它可以将复杂的事情简单化，并将我们从执行者变成了指挥者。
面向对象的语言中，包含了三大基本特征，即封装、继承和多态。  

## 1.2  类和对象  

环顾周围，你会发现很多对象，比如桌子，椅子，同学，老师等。桌椅属于办公用品，师生都是人类。那么什么是
类呢？什么是对象呢？

### 什么是类  
- 类 ：是一组相关属性和行为的集合。可以看成是一类事物的模板，使用事物的属性特征和行为特征来描述该
类事物。

- 属性 ：就是该事物的状态信息。 

- 行为 ：就是该事物能够做什么。  

举例：小猫。    
属性：名字、体重、年龄、颜色。 行为：走、跑、叫。  

### 什么是对象  

- 对象 ：是一类事物的具体体现。对象是类的一个实例（对象并不是找个女朋友），必然具备该类事物的属性
和行为。  

现实中，一类事物的一个实例：一只小猫。   
举例：一只小猫。   

属性：tom、5kg、2 years、yellow。 行为：溜墙根走、蹦跶的跑、喵喵叫。  

### 类与对象的关系  

- 类是对一类事物的描述，是抽象的。  
- 对象是一类事物的实例，是具体的。   
- 类是对象的模板，对象是类的实体 。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A101.png)    

## 1.3  类的定义  

### 事物与类的对比  
现实世界的一类事物：    
属性：事物的状态信息。 行为：事物能够做什么。  
java中用class描述事物也是如此：  
**成员变量**：对应事物的**属性** **成员方法**：对应事物的行为  

### 类的定义格式  

```java
public class ClassName {
  //成员变量
  //成员方法
}
```   

- 定义类 ：就是定义类的成员，包括成员变量和成员方法。  
- 成员变量 ：和以前定义变量几乎是一样的。只不过位置发生了改变。在类中，方法外。  
- 成员方法 ：和以前定义方法几乎是一样的。只不过把static去掉，static的作用在面向对象后面课程中再详细讲解。  

类的定义格式举例：  

```java
public class Student {
   //成员变量  
   String name；//姓名  
    int age；//年龄
   //成员方法
    //学习的方法
    publicvoid study() {
    System.out.println("好好学习，天天向上");
  }
  //吃饭的方法
  publicvoid eat() {
    System.out.println("学习饿了要吃饭");
  }
}
```  

## 1.4  对象的使用

### 对象的使用格式  

创建对象：  

类名 对象名 = new 类名();  

使用对象访问类中的成员:  

```java
对象名.成员变量；
对象名.成员方法()；
```  
对象的使用格式举例:  

```java
public class Test01_Student {
  public static void main(String[] args) {
    //创建对象格式：类名 对象名 = new 类名();
    Student s = new Student();
    System.out.println("s:"+s); //cn.itcast.Student@100363
    //直接输出成员变量值
    System.out.println("姓名："+s.name); //null
    System.out.println("年龄："+s.age); //0
    System.out.println("‐‐‐‐‐‐‐‐‐‐");
    //给成员变量赋值
    s.name = "赵丽颖";
    s.age = 18;
    //再次输出成员变量的值
    System.out.println("姓名："+s.name); //赵丽颖
    System.out.println("年龄："+s.age); //18
    System.out.println("‐‐‐‐‐‐‐‐‐‐");
    //调用成员方法
    s.study(); // "好好学习，天天向上"
    s.eat(); // "学习饿了要吃饭"
  }
}
```  

成员变量的默认值  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A102.png);  

## 1.5  类与对象的练习  

定义手机类： 

```java
public class Phone {
  // 成员变量
  String brand; //品牌
  int price; //价格
  String color; //颜色
  // 成员方法
  //打电话
  public void call(String name) {
    System.out.println("给"+name+"打电话");
  }
  //发短信
  public void sendMessage() {
    System.out.println("群发短信");
  }
}
```  

定义测试类：  

```java
public class Test02Phone {
  public static void main(String[] args) {
    //创建对象
    Phone p = new Phone();
    //输出成员变量值
    System.out.println("品牌："+p.brand);//null
    System.out.println("价格："+p.price);//0
    System.out.println("颜色："+p.color);//null
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐‐");

    //给成员变量赋值
    p.brand = "锤子";
    p.price = 2999;
    p.color = "棕色";
    //再次输出成员变量值
    System.out.println("品牌："+p.brand);//锤子
    System.out.println("价格："+p.price);//2999
    System.out.println("颜色："+p.color);//棕色
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐‐");
    //调用成员方法
    p.call("紫霞");
    p.sendMessage();
  }
}
```  

## 1.6  对象内存图  

### 一个对象，调用一个方法内存图  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A103.png)  

> 通过上图，我们可以理解，在栈内存中运行的方法，遵循"先进后出，后进先出"的原则。变量p指向堆内存中的空间，寻找方法信息，去执行该方法。    
> 但是，这里依然有问题存在。创建多个对象时，如果每个对象内部都保存一份方法信息，这就非常浪费内存
了，因为所有对象的方法信息都是一样的。那么如何解决这个问题呢？请看如下图解。

### 两个对象，调用同一方法内存图  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A104.png)   

> 对象调用方法时，根据对象中方法标记（地址值），去类中寻找方法信息。这样哪怕是多个对象，方法信息只保存一份，节约内存空间。  

### 一个引用，作为参数传递到方法中内存图  


![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A105.png)

> 引用类型作为参数，传递的是地址值。  

## 1.7  成员变量和局部变量区别  

变量根据定义位置的不同，我们给变量起了不同的名字。如下图所示：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A106.png)   

- 在类中的位置不同 `重点`
  - 成员变量：类中，方法外
  - 局部变量：方法中或者方法声明上 (形式参数)

- 作用范围不一样 `重点`  
  - 成员变量：类中
  - 局部变量：方法中 

- 初始化值的不同 `重点`
  - 成员变量：有默认值
  - 局部变量：没有默认值。必须先定义，赋值，最后使用

- 在内存中的位置不同 `了解`
  - 成员变量：堆内存
  - 局部变量：栈内存

- 生命周期不同 `了解`
  - 成员变量：随着对象的创建而存在，随着对象的消失而消失 
  - 局部变量：随着方法的调用而存在，随着方法的调用完毕而消失  

# 第 2章 封装  

## 2.1  封装概述  

### 概述  

面向对象编程语言是对客观世界的模拟，客观世界里成员变量都是隐藏在对象内部的，外界无法直接操作和修改。封装可以被认为是一个保护屏障，防止该类的代码和数据被其他类随意访问。要访问该类的数据，必须通过指定的方式。适当的封装可以让代码更容易理解与维护，也加强了代码的安全性。  

### 原则  

将**属性隐藏**起来，若需要访问某个属性，**提供公共方**法对其访问。

## 2.2  封装的步骤

1.使用`private`关键字来修饰成员变量。
2.对需要访问的成员变量，提供对应的一对  `getXxx` 方法 、 `setXxx`方法。

## 2.3  封装的操作——private关键字

### private的含义  

1. private是一个权限修饰符，代表最小权限。
2. 可以修饰成员变量和成员方法。  
3. 被private修饰后的成员变量和成员方法，只在本类中才能访问。 

### private的使用格式  

```java
private 数据类型 变量名 ；
```

1. 使用  private 修饰成员变量，代码如下：  

```java
public class Student {
  private String name;
  private int age;
}
```

2. 提供  `getXxx` 方法 /  `setXxx` 方法，可以访问成员变量，代码如下：

```java
public class Student {
  private String name;
  private int age;
  public void setName(String n) {
    name = n;
  }
  public String getName() {
    return name;
  }
  public void setAge(int a) {
    age = a;
  }
  public int getAge() {
    return age;
  }
}
```

## 2.4  封装优化1——this关键字  

我们发现 `setXxx`方法中的形参名字并不符合见名知意的规定，那么如果修改与成员变量名一致，是否就见名知意了呢？代码如下：  

```java
public class Student {
  private String name;
  private int age;
  public void setName(String name) {
    name = name;
  }
  public void setAge(int age) {
    age = age;
  }
}
```  

经过修改和测试，我们发现新的问题，成员变量赋值失败了。也就是说，在修改了 setXxx() 的形参变量名后，方法并没有给成员变量赋值！这是由于形参变量名与成员变量名重名，导致成员变量名被隐藏，方法中的变量名，无法访问到成员变量，从而赋值失败。所以，我们只能使用this关键字，来解决这个重名问题。 

### this的含义  

this代表所在类的当前对象的引用（地址值），即对象自己的引用。 
> 记住 ：方法被哪个对象调用，方法中的this就代表那个对象。即谁在调用，this就代表谁。

### this使用格式 

```java
this.成员变量名；
```

使用 `this` 修饰方法中的变量，解决成员变量被隐藏的问题，代码如下：

```java
public class Student {
  private String name;
  private int age;
  public void setName(String name) {
    //name = name;
    this.name = name;
  }
  public String getName() {
    return name;
  }
  public void setAge(int age) {
    //age = age;
    this.age = age;
  }
  public int getAge() {
    return age;
  }
}
```

> 小贴士：方法中只有一个变量名时，默认也是使用 this 修饰，可以省略不写。

## 2.5  封装优化2——构造方法  

当一个对象被创建时候，构造方法用来初始化该对象，给对象的成员变量赋初始值。

> 小贴士：无论你与否自定义构造方法，所有的类都有构造方法，因为Java自动提供了一个无参数构造方法，一旦自己定义了构造方法，Java自动提供的默认无参数构造方法就会失效。

### 构造方法的定义格式

```java
修饰符 构造方法名(参数列表){
// 方法体    
}
```

构造方法的写法上，方法名与它所在的类名相同。它没有返回值，所以不需要返回值类型，甚至不需要void。使用构造方法后，代码如下：
```java
public class Student {
  private String name;
  private int age;
  // 无参数构造方法
  public Student() {}
  // 有参数构造方法
  public Student(String name,int age) {
    this.name = name;
    this.age = age;
  }
}
```

### 注意事项  

1. 如果你不提供构造方法，系统会给出无参数构造方法。 
2. 如果你提供了构造方法，系统将不再提供无参数构造方法。
3. 构造方法是可以重载的，既可以定义参数，也可以不定义参数。  

## 2.6  标准代码——JavaBean  

`JavaBean` 是 Java语言编写类的一种标准规范。符合 `JavaBean `的类，要求类必须是具体的和公共的，并且具有无参数的构造方法，提供用来操作成员变量的 `set` 和 `get` 方法。
```java
public class ClassName{
  //成员变量
  //构造方法
  //无参构造方法【必须】
  //有参构造方法【建议】
  //成员方法   
  //getXxx()
  //setXxx()
}
```

编写符合 `JavaBean` 规范的类，以学生类为例，标准代码如下：

```java
public class Student {
  //成员变量
  private String name;
  private int age;
  //构造方法
  public Student() {}
  public Student(String name,int age) {
    this.name = name;
    this.age = age;
  }
  //成员方法
  publicvoid setName(String name) {
    this.name = name;
  }
  public String getName() {
    return name;
  }
  publicvoid setAge(int age) {
    this.age = age;
  }
  publicint getAge() {
    return age;
  }
}
```  

测试类，代码如下： 

```java
public class TestStudent {
  public static void main(String[] args) {
    //无参构造使用
    Student s= new Student();
    s.setName("柳岩");
    s.setAge(18);
    System.out.println(s.getName()+"‐‐‐"+s.getAge());
    //带参构造使用
    Student s2= new Student("赵丽颖",18);
    System.out.println(s2.getName()+"‐‐‐"+s2.getAge());
  }
}
```  

# day07 【Scanner类、Random类、ArrayList类】

## 今日内容  
- API 概述
- Scanner 类
- Random 类
- ArrayList 类

## 学习目标  
- 能够明确API的使用步骤  
- 能够使用Scanner类获得键盘录入数据
- 能够使用Random类生成随机数
- 能够使用数组存储自定义类型并遍历
- 能够使用ArrayList集合的构造方法创建ArrayList集合对象
- 能够使用ArrayList集合存储数据  
- 能够使用ArrayList集合中常用的方法
- 能够使用ArrayList集合存储字符串并遍历
- 能够使用ArrayList集合存储自定义对象并遍历
- 能够使用ArrayList类作为形式参数和返回值类型  


# 第 1章 API  

## 概述   

API(Application Programming Interface)，应用程序编程接口。Java API是一本程序员的`字典`，是JDK中提供给
我们使用的类的说明文档。这些类将底层的代码实现封装了起来，我们不需要关心这些类是如何实现的，只需要学
习这些类如何使用即可。所以我们可以通过查询API的方式，来学习Java提供的类，并得知如何使用它们。
 
## API 使用步骤  

1. 打开帮助文档。
2. 点击显示，找到索引，看到输入框。
3. 你要找谁？在输入框里输入，然后回车。
4. 看包。java.lang下的类不需要导包，其他需要。
5. 看类的解释和说明。
6. 学习构造方法。   
7. 使用成员方法。  

# 第 2章 Scanner类
了解了API的使用方式，我们通过Scanner类，熟悉一下查询API，并使用类的步骤。

## 2.1  什么是Scanner类  

一个可以解析基本类型和字符串的简单文本扫描器。 例如，以下代码使用户能够从 System.in 中读取一个数：  

```java
Scanner sc = new Scanner(System.in);
int i = sc.nextInt();
```

> 备注：System.in 系统输入指的是通过键盘录入数据。  

## 2.2  引用类型使用步骤  

### 导包  

使用import关键字导包，在类的所有代码之前导包，引入要使用的类型，java.lang包下的所有类无需导入。 格式：

```java
import 包名.类名;
```  

举例：

```java
java.util.Scanner;
```  

### 创建对象  

使用该类的构造方法，创建一个该类的对象。 格式：

```java
数据类型  变量名  =  new 数据类型(参数列表);
```

### 调用方法

调用该类的成员方法，完成指定功能。 格式：  

```java
变量名.方法名();
```  

举例： 

```java
int i = sc.nextInt(); // 接收一个键盘录入的整数
```  

## 2.3 Scanner 使用步骤    