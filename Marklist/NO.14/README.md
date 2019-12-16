<!-- GFM-TOC -->
* [day01 【前言、入门程序、常量、变量】](#day01-前言入门程序常量变量)
* [day02 【数据类型转换、运算符、方法入门】](#day02-数据类型转换运算符方法入门)
* [day03 【流程控制语句】](#day03-流程控制语句)
* [day04 【Idea、方法】](#day04-idea方法) 
* [day05 【数组】](#day05-数组)   
* [day06 【类与对象、封装、构造方法】](#day06-类与对象封装构造方法)   
* [day07 【Scanner类、Random类、ArrayList类】](#day07-Scanner类Random类ArrayList类)   
* [day08 【String类、static关键字、Arrays类、Math类】](#day08-String类static关键字Arrays类Math类)
* [day09 【继承、super、this、抽象类】](#day09-继承superthis抽象类)  
* [day10 【接口、多态】](#day10-接口多态)   
* [day11 【final、权限、内部类、引用类型】](#day11-final权限内部类引用类型)  
* [day12 【Object类、Date类、Calendar类、System类、StringBuilder类、基本类型包装类】](#day12-Object类Date类Calendar类System类StringBuilder类基本类型包装类) 
* [day13 【Collection、泛型】](#day13-Collection泛型)    
* [day14 【List、Set】](#day14-ListSet) 
* [day15 【Map】](#day11final权限内部类引用类型) 
* [day16 【异常、线程】](#day11final权限内部类引用类型) 
* [day17 【线程、同步】](#day11final权限内部类引用类型) 
* [day18【线程池、Lambda表达式】](#day11final权限内部类引用类型) 
* [day19【File类、递归】](#day11final权限内部类引用类型) 
* [day20【字节流、字符流】](#day11final权限内部类引用类型) 
* [day21【缓冲流、转换流、序列化流、打印流】](#day11final权限内部类引用类型) 
* [day22【网络编程】](#day11final权限内部类引用类型) 
* [day23【函数式接口】](#day11final权限内部类引用类型) 
* [day24【Stream流、方法引用】](#day11final权限内部类引用类型) 

 
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
 
- [ ] 能够理解面向对象的思想 
- [ ] 能够明确类与对象关系  
- [ ] 能够掌握类的定义格式
- [ ] 能够掌握创建对象格式，并访问类中的成员
- [ ] 能够完成手机类的练习
- [ ] 能够理解对象的内存图
- [ ] 能够说出成员变量和局部变量的区别
- [ ] 能够理解private关键字的含义
- [ ] 能够说出this关键字可以解决的问题
- [ ] 能够理解构造方法的含义
- [ ] 能够用封装的思想定义一个标准类 

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

### 查看类  

- `java.util.Scanner` ：该类需要import导入后使用。  

### 查看构造方法  

- `public Scanner(InputStream source)` : 构造一个新的  `Scanner` ，它生成的值是从指定的输入流扫描的。  

### 查看成员方法  

- `public int nextInt()` ：将输入信息的下一个标记扫描为一个  `int` 值。  

使用Scanner类，完成接收键盘录入数据的操作，代码如下：  

```java
//1. 导包
import java.util.Scanner;
public class Demo01_Scanner {
   public static void main(String[] args) {  
     //2. 创建键盘录入数据的对象    
     Scanner sc = new Scanner(System.in);    
     //3. 接收数据    
     System.out.println("请录入一个整数：");    
     int i = sc.nextInt();    
     //4. 输出数据    
     System.out.println("i:"+i);    
   }  
}
```  

## 2.4  练习 

### 求和  

键盘录入两个数据并求和，代码如下：  

```java
import java.util.Scanner;
public class Test01Scanner {
  public static void main(String[] args) {
    // 创建对象
    Scanner sc = new Scanner(System.in);
    // 接收数据
    System.out.println("请输入第一个数据：");
    int a = sc.nextInt();
    System.out.println("请输入第二个数据：");
    int b = sc.nextInt();
    // 对数据进行求和
    int sum = a + b;
    System.out.println("sum:" + sum);
  }
}  

### 取最值  

键盘录入三个数据并获取最大值，代码如下：  

```java
import java.util.Scanner;
public class Test02Scanner {
  public static void main(String[] args) {
    // 创建对象
    Scanner sc = new Scanner(System.in);
    // 接收数据
    System.out.println("请输入第一个数据：");
    int a = sc.nextInt();
    System.out.println("请输入第二个数据：");
    int b = sc.nextInt();
    System.out.println("请输入第三个数据：");
    int c = sc.nextInt();
    // 如何获取三个数据的最大值
    int temp = (a > b ? a : b);
    int max = (temp > c ? temp : c);
    System.out.println("max:" + max);
  }
}
```  
## 2.5  匿名对象【了解】   

### 概念   

创建对象时，只有创建对象的语句，却没有把对象地址值赋值给某个变量。虽然是创建对象的简化写法，但是应用
场景非常有限。  

- 匿名对象 ：没有变量名的对象。   

格式：  

```java
new 类名(参数列表)；
```

举例：
```java
new Scanner(System.in)；
```

### 应用场景  

1. 创建匿名对象直接调用方法，没有变量名。  

```java
new Scanner(System.in).nextInt(); 
```

2. 一旦调用两次方法，就是创建了两个对象，造成浪费，请看如下代码。

```java
new Scanner(System.in).nextInt();
new Scanner(System.in).nextInt();
```  
> 小贴士：一个匿名对象，只能使用一次。  

3. 匿名对象可以作为方法的参数和返回值

- 作为参数：  

```java
class Test {
    public static void main(String[] args) {
      // 普通方式   
        Scanner sc = new Scanner(System.in); 
        input(sc);
     
        //匿名对象作为方法接收的参数
        input(new Scanner(System.in));
    }
 
  public static void input(Scanner sc){   
     System.out.println(sc);    
   }  
}
```  

- 作为返回值  

```java
class Test2 {
    public static void main(String[] args) {  
      // 普通方式   
        Scanner sc = getScanner();
    }
   
   public static Scanner getScanner(){  
        //普通方式
        //Scanner sc = new Scanner(System.in); 
        //return sc;
     
        //匿名对象作为方法返回值
        return new Scanner(System.in);
  }    
}
```

# 第3章 Random类   

## 3.1  什么是Random类   

此类的实例用于生成伪随机数。
例如，以下代码使用户能够得到一个随机数：   
```java
Random r = new Random();
int i = r.nextInt();
```   

## 3.2 Random 使用步骤   

- 查看类  
 
`java.util.Random`：该类需要 import导入使后使用。   

- 查看构造方法  

`public Random()` ：创建一个新的随机数生成器。  

- 查看成员方法  
`public int nextInt(int n)` ：返回一个伪随机数，范围在  0 （包括）和 指定值  n （不包括）之间的
int 值。  

使用Random类，完成生成3个10以内的随机整数的操作，代码如下：  

```java
//1. 导包
import java.util.Random;
public class Demo01_Random {
   public static void main(String[] args) {  
        //2. 创建键盘录入数据的对象
        Random r = new Random();
        for(int i = 0; i < 3; i++){
            //3. 随机生成一个数据
            int number = r.nextInt(10);
            //4. 输出数据
            System.out.println("number:"+ number);
        }      
    }
}
```

> 备注：创建一个 `Random` 对象，每次调用 `nextInt()` 方法，都会生成一个随机数。  

## 3.3  练习
获取随机数
获取1-n之间的随机数，包含n，代码如下：
```java
// 导包
import java.util.Random;
public class Test01Random {
  public static void main(String[] args) {
    int n = 50;
    // 创建对象
    Random r = new Random();
    // 获取随机数
    int number = r.nextInt(n) + 1;
    // 输出随机数
    System.out.println("number:" + number);
  }
}
```  

### 猜数字小游戏  

游戏开始时，会随机生成一个1-100之间的整数 number 。玩家猜测一个数字 guessNumber ，会与 number 作比
较，系统提示大了或者小了，直到玩家猜中，游戏结束。  

> 小贴士：先运行程序代码，理解此题需求，经过分析后，再编写代码  

```java
// 导包
import java.util.Random;
public class Test02Random {
  public static void main(String[] args) {
    // 系统产生一个随机数1‐100之间的。
    Random r = new Random();
    int number = r.nextInt(100) + 1;
    while(true){
      // 键盘录入我们要猜的数据
      Scanner sc = new Scanner(System.in);
      System.out.println("请输入你要猜的数字(1‐100)：");
      int guessNumber = sc.nextInt();
      // 比较这两个数据(用if语句)
      if (guessNumber > number) {
        System.out.println("你猜的数据" + guessNumber + "大了");
      } else if (guessNumber < number) {
        System.out.println("你猜的数据" + guessNumber + "小了");
      } else {
        System.out.println("恭喜你,猜中了");
        break;
      }
    }
  }
}
```  

# 第4章 ArrayList类   

## 4.1引入——对象数组   

使用学生数组，存储三个学生对象，代码如下 

```java
public class Student {
  private String name;
  private int age;
  public Student() {
  }
  public Student(String name, int age) {
    this.name = name;
    this.age = age;
  }
  public String getName() {
    return name;
  }
  publicvoid setName(String name) {
    this.name = name;
  }
  publicint getAge() {
    return age;
  }
  publicvoid setAge(int age) {
    this.age = age;
  }
}
public class Test01StudentArray {
  public static void main(String[] args) {
    //创建学生数组
    Student[] students = new Student[3];
    //创建学生对象
    Student s1 = new Student("曹操",40);
    Student s2 = new Student("刘备",35);
    Student s3 = new Student("孙权",30);
    //把学生对象作为元素赋值给学生数组
    students[0] = s1;
    students[1] = s2;
    students[2] = s3;
    //遍历学生数组
    for(int x=0; x<students.length; x++) {
      Student s = students[x];
      System.out.println(s.getName()+"‐‐‐"+s.getAge());
    }
  }
}
```  

到目前为止，我们想存储对象数据，选择的容器，只有对象数组。而数组的长度是固定的，无法适应数据变化的需
求。为了解决这个问题，Java提供了另一个容器 `java.util.ArrayList` 集合类,让我们可以更便捷的存储和操作对
象数据。

## 4.2  什么是ArrayList类    

`java.util.ArrayList` 是大小可变的数组的实现，存储在内的数据称为元素。此类提供一些方法来操作内部存储
的元素。  `ArrayList` 中可不断添加元素，其大小也自动增长。

## 4.3 ArrayList 使用步骤  

### 查看类  

`java.util.ArrayList <E> `：该类需要 import导入使后使用。  
`<E>` ，表示一种指定的数据类型，叫做泛型。E，取自Element（元素）的首字母。在出现E的地方，我们使
用一种引用数据类型将其替换即可，表示我们将存储哪种引用类型的元素。代码如下：  

```java
ArrayList<String>，ArrayList<Student>
```

### 查看构造方法  

`public ArrayList()` ：构造一个内容为空的集合。  

基本格式:  

```java
ArrayList<String> list = new ArrayList<String>();
```  

在JDK 7后,右侧泛型的尖括号之内可以留空，但是<>仍然要写。简化格式：   
```java
ArrayList<String> list = new ArrayList<>();
```  

### 查看成员方法  

`public boolean add(E e)` ： 将指定的元素添加到此集合的尾部。参数  E e ，在构造ArrayList对象时， `<E>` 指定了什么数据类型，那么 `add(E e)` 方法中，只能添加什么数据
类型的对象。 

使用ArrayList类，存储三个字符串元素，代码如下：  

```java
public class Test02StudentArrayList {
  public static void main(String[] args) {
    //创建学生数组
    ArrayList<String> list = new ArrayList<>();
    //创建学生对象
    String s1 = "曹操";
    String s2 = "刘备";
    String s3 = "孙权";
    //打印学生ArrayList集合
    System.out.println(list);
    //把学生对象作为元素添加到集合
    list.add(s1);
    list.add(s2);
    list.add(s3);

    //打印学生ArrayList集合
    System.out.println(list);
  }
}
```

## 4.4  常用方法和遍历  

对于元素的操作,基本体现在——增、删、查。常用的方法有： 

- `public boolean add(E e)` ：将指定的元素添加到此集合的尾部。  
- `public E remove(int index)` ：移除此集合中指定位置上的元素。返回被删除的元素。   
- `public E get(int index)` ：返回此集合中指定位置上的元素。返回获取的元素。  
- `public int size()` ：返回此集合中的元素数。遍历集合时，可以控制索引范围，防止越界。  

这些都是最基本的方法，操作非常简单，代码如下:   

```java
public class Demo01ArrayListMethod {
  public static void main(String[] args) {
    //创建集合对象
    ArrayList<String> list = new ArrayList<String>();
    //添加元素
    list.add("hello");
    list.add("world");
    list.add("java");
    //public E get(int index):返回指定索引处的元素
    System.out.println("get:"+list.get(0));
    System.out.println("get:"+list.get(1));
    System.out.println("get:"+list.get(2));
    //public int size():返回集合中的元素的个数
    System.out.println("size:"+list.size());
    //public E remove(int index):删除指定索引处的元素，返回被删除的元素
    System.out.println("remove:"+list.remove(0));
    //遍历输出
    for(int i = 0; i < list.size(); i++){
      System.out.println(list.get(i));
    }
  }
}
```  

## 4.5  如何存储基本数据类型   
ArrayList对象不能存储基本类型，只能存储引用类型的数据。类似 `<int>` 不能写，但是存储基本数据类型对应的
包装类型是可以的。所以，想要存储基本类型数据， `<>` 中的数据类型，必须转换后才能编写，转换写法如下：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%B8%B8%E7%94%A8api1.png)  

我们发现，只有 `Integer` 和 `Character` 需要特殊记忆，其他基本类型只是首字母大写即可。那么存储基本类型数
据，代码如下： 

```java
public class Demo02ArrayListMethod {
  public static void main(String[] args) {
    ArrayList<Integer> list = new ArrayList<Integer>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    System.out.println(list);    
  }
}
```  

## 4.6 ArrayList 练习   

### 数值添加到集合  
生成6个1~33之间的随机整数,添加到集合,并遍历  

```java
public class Test01ArrayList {
  public static void main(String[] args) {
    // 创建Random 对象
    Random random = new Random();
    // 创建ArrayList 对象
    ArrayList<Integer> list = new ArrayList<>();
    // 添加随机数到集合
    for (int i = 0; i < 6; i++) {
      int r = random.nextInt(33) + 1;
      list.add(r);
    }
    // 遍历集合输出
    for (int i = 0; i < list.size(); i++) {
      System.out.println(list.get(i));
    }
  }
}
```  

### 对象添加到集合  
自定义4个学生对象,添加到集合,并遍历  

```java
public class Test02ArrayList {
  public static void main(String[] args) {
    //创建集合对象
    ArrayList<Student> list = new ArrayList<Student>();
    //创建学生对象
    Student s1 = new Student("赵丽颖",18);
    Student s2 = new Student("唐嫣",20);
    Student s3 = new Student("景甜",25);
    Student s4 = new Student("柳岩",19);
    //把学生对象作为元素添加到集合中
    list.add(s1);
    list.add(s2);
    list.add(s3);
    list.add(s4);
    //遍历集合
    for(int x = 0; x < list.size(); x++) {
      Student s = list.get(x);
      System.out.println(s.getName()+"‐‐‐"+s.getAge());
    }
  }
}
``` 

### 打印集合方法  
定义以指定格式打印集合的方法(ArrayList类型作为参数)，使用{}扩起集合，使用@分隔每个元素。格式参照 {元素
@元素@元素}。 

```java
public class Test03ArrayList {
  public static void main(String[] args) {
    // 创建集合对象
    ArrayList<String> list = new ArrayList<String>();
    // 添加字符串到集合中
    list.add("张三丰");
    list.add("宋远桥");
    list.add("张无忌");
    list.add("殷梨亭");
    // 调用方法
    printArrayList(list);
  }
  public static void printArrayList(ArrayList<String> list) {
    // 拼接左括号
    System.out.print("{");
    // 遍历集合
    for (int i = 0; i < list.size(); i++) {
      // 获取元素
      String s = list.get(i);
      // 拼接@符号
      if (i != list.size() ‐ 1) {
        System.out.print(s + "@");
      } else {
        // 拼接右括号
        System.out.print(s + "}");
      }
    }
  }
}
```  

### 获取集合方法   

定义获取所有偶数元素集合的方法(ArrayList类型作为返回值)  

```java
public class Test04ArrayList {
  public static void main(String[] args) {
    // 创建Random 对象
    Random random = new Random();
    // 创建ArrayList 对象
    ArrayList<Integer> list = new ArrayList<>();
    // 添加随机数到集合
    for (int i = 0; i < 20; i++) {
      int r = random.nextInt(1000) + 1;
      list.add(r);
    }
    // 调用偶数集合的方法
    ArrayList<Integer> arrayList = getArrayList(list);
    System.out.println(arrayList);
  }
  public static ArrayList<Integer> getArrayList(ArrayList<Integer> list) {
    // 创建小集合,来保存偶数
    ArrayList<Integer> smallList = new ArrayList<>();
    // 遍历list
    for (int i = 0; i < list.size(); i++) {
      // 获取元素
      Integer num = list.get(i);
      // 判断为偶数,添加到小集合中
      if (num % 2 == 0){
        smallList.add(num);
      }
    }
    // 返回小集合
    return smallList;
  }
}
```

# day08 【String类、static关键字、Arrays类、Math类】

## 今日内容  
- String 类  
- static 关键字  
- Arrays 类 
- Math 类  

## 学习目标

- [ ] 能够使用String类的构造方法创建字符串对象
- [ ] 能够明确String类的构造方法创建对象,和直接赋值创建字符串对象的区别
- [ ] 能够使用文档查询String类的判断方法
- [ ] 能够使用文档查询String类的获取方法
- [ ] 能够使用文档查询String类的转换方法
- [ ] 能够理解static关键字
- [ ] 能够写出静态代码块的格式
- [ ] 能够使用Arrays类操作数组
- [ ] 能够使用Math类进行数学运算   

# 第一章 String类  

## 1.1 String 类概述  

### 概述  

`java.lang.String` 类代表字符串。Java程序中所有的字符串文字（例如 `"abc"` ）都可以被看作是实现此类的实
例。

类`String`中包括用于检查各个字符串的方法，比如用于比较字符串，搜索字符串，提取子字符串以及创建具有翻
译为大写或小写的所有字符的字符串的副本。  

### 特点  

1. 字符串不变：字符串的值在创建后不能被更改。

```java
String s1 = "abc";
s1 += "d";
System.out.println(s1); // "abcd"
// 内存中有"abc"，"abcd"两个对象，s1从指向"abc"，改变指向，指向了"abcd"。
```  

2. 因为String对象是不可变的，所以它们可以被共享。  
```java
String s1 = "abc";
String s2 = "abc";
// 内存中只有一个"abc"对象被创建，同时被s1和s2共享。
``` 
3.  `"abc"` 等效于  `char[] data={ 'a' , 'b' , 'c' }` 。 

```java
例如：
String str = "abc";
相当于：
char data[] = {'a', 'b', 'c'};    
String str = new String(data);
// String底层是靠字符数组实现的。
```  

## 1.2  使用步骤  

- 查看类  
  - `java.lang.String` ：此类不需要导入。  
- 查看构造方法 
  - `public String()` ：初始化新创建的 String对象，以使其表示空字符序列。
  - `public String(char[] value)` ：通过当前参数中的字符数组来构造新的String。
  - `public String(byte[] bytes)` ：通过使用平台的默认字符集解码当前参数中的字节数组来构造新的String。
  - 构造举例，代码如下：  
  ```java
  // 无参构造
  String str = new String();   
  // 通过字符数组构造
  char chars[] = {'a', 'b', 'c'};       
  String str2 = new String(chars);  
  // 通过字节数组构造
  byte bytes[] = { 97, 98, 99 };      
  String str3 = new String(bytes);  
  ```

## 1.3  常用方法   
判断功能的方法  

`public boolean equals (Object anObject)` ：将此字符串与指定对象进行比较。
`public boolean equalsIgnoreCase (String anotherString) `：将此字符串与指定对象进行比较，忽略大小写。

方法演示，代码如下：  
```java
public class String_Demo01 {
  public static void main(String[] args) {
    // 创建字符串对象
    String s1 = "hello";
    String s2 = "hello";
    String s3 = "HELLO";
    // boolean equals(Object obj):比较字符串的内容是否相同
    System.out.println(s1.equals(s2)); // true
    System.out.println(s1.equals(s3)); // false
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
    //boolean equalsIgnoreCase(String str):比较字符串的内容是否相同,忽略大小写
    System.out.println(s1.equalsIgnoreCase(s2)); // true
    System.out.println(s1.equalsIgnoreCase(s3)); // true
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
  }
}
```
> Object 是” 对象”的意思，也是一种引用类型。作为参数类型，表示任意对象都可以传递到方法中。  

### 获取功能的方法  

- `public int length ()` ：返回此字符串的长度。
- `public String concat (String str)` ：将指定的字符串连接到该字符串的末尾。
- `public char charAt (int index)` ：返回指定索引处的 char值。
- `public int indexOf (String str)` ：返回指定子字符串第一次出现在该字符串内的索引。
- `public String substring (int beginIndex)` ：返回一个子字符串，从beginIndex开始截取字符串到字符串结尾。
- `public String substring (int beginIndex, int endIndex)` ：返回一个子字符串，从beginIndex到endIndex截取字符串。含beginIndex，不含endIndex。  

方法演示，代码如下：  

```java
public class String_Demo02 {
  public static void main(String[] args) {
    //创建字符串对象
    String s = "helloworld";
    // int length():获取字符串的长度，其实也就是字符个数
    System.out.println(s.length());
    System.out.println("‐‐‐‐‐‐‐‐");
    // String concat (String str):将将指定的字符串连接到该字符串的末尾.
    String s = "helloworld";
    String s2 = s.concat("**hello itheima");
    System.out.println(s2);// helloworld**hello itheima
    // char charAt(int index):获取指定索引处的字符
    System.out.println(s.charAt(0));
    System.out.println(s.charAt(1));
    System.out.println("‐‐‐‐‐‐‐‐");
    // int indexOf(String str):获取str在字符串对象中第一次出现的索引,没有返回‐1
    System.out.println(s.indexOf("l"));
    System.out.println(s.indexOf("owo"));
    System.out.println(s.indexOf("ak"));
    System.out.println("‐‐‐‐‐‐‐‐");
    // String substring(int start):从start开始截取字符串到字符串结尾
    System.out.println(s.substring(0));
    System.out.println(s.substring(5));
    System.out.println("‐‐‐‐‐‐‐‐");
    // String substring(int start,int end):从start到end截取字符串。含start，不含end。
    System.out.println(s.substring(0, s.length()));
    System.out.println(s.substring(3,8));
  }
}

```  

### 转换功能的方法   

- `public char[] toCharArray ()` ：将此字符串转换为新的字符数组。
- `public byte[] getBytes ()` ：使用平台的默认字符集将该 String编码转换为新的字节数组。
- `public String replace (CharSequence target, CharSequence replacement)` ：将与target匹配的字符串使用replacement字符串替换。  

方法演示，代码如下：  

```java
public class String_Demo03 {
  public static void main(String[] args) {
    //创建字符串对象
    String s = "abcde";
    // char[] toCharArray():把字符串转换为字符数组
    char[] chs = s.toCharArray();
    for(int x = 0; x < chs.length; x++) {
      System.out.println(chs[x]);
    }
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
    // byte[] getBytes ():把字符串转换为字节数组
    byte[] bytes = s.getBytes();
    for(int x = 0; x < bytes.length; x++) {
      System.out.println(bytes[x]);
    }
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
    // 替换字母it为大写IT
    String str = "itcast itheima";
    String replace = str.replace("it", "IT");
    System.out.println(replace); // ITcast ITheima
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐");
  }
}
```  

> CharSequence  是一个接口，也是一种引用类型。作为参数类型，可以把String对象传递到方法中。  

### 分割功能的方法   
- `public String[] split(String regex)` ：将此字符串按照给定的regex（规则）拆分为字符串数组。

方法演示，代码如下：  
```java
public class String_Demo03 {
  public static void main(String[] args) {
    //创建字符串对象
    String s = "aa|bb|cc";
    String[] strArray = s.split("|"); // ["aa","bb","cc"]
    for(int x = 0; x < strArray.length; x++) {
      System.out.println(strArray[x]); // aa bb cc
    }
  }
}
``` 

## 1.4 String 类的练习   

### 拼接字符串    

定义一个方法，把数组{1,2,3}按照指定个格式拼接成一个字符串。格式参照如下：[word1#word2#word3]。   

```java
public class StringTest1 {
  public static void main(String[] args) {
    //定义一个int类型的数组
    int[] arr = {1, 2, 3};
    //调用方法
    String s = arrayToString(arr);
    //输出结果
    System.out.println("s:" + s);
  }
  /*
     * 写方法实现把数组中的元素按照指定的格式拼接成一个字符串
     * 两个明确：
     * 返回值类型：String
     * 参数列表：int[] arr
     */
  public static String arrayToString(int[] arr) {
    // 创建字符串s
  String s = new String("[");
    // 遍历数组，并拼接字符串
    for (int x = 0; x < arr.length; x++) {
      if (x == arr.length ‐ 1) {
        s = s.concat(arr[x] + "]");
      } else {
        s = s.concat(arr[x] + "#");
      }
    }
    return s;
  }
}
```  

### 统计字符个数  

键盘录入一个字符，统计字符串中大小写字母及数字字符个数  

```java
public class StringTest2 {
  public static void main(String[] args) {
    //键盘录入一个字符串数据
    Scanner sc = new Scanner(System.in);
    System.out.println("请输入一个字符串数据：");
    String s = sc.nextLine();
    //定义三个统计变量，初始化值都是0
    int bigCount = 0;
    int smallCount = 0;
    int numberCount = 0;
    //遍历字符串，得到每一个字符
    for(int x=0; x<s.length(); x++) {
      char ch = s.charAt(x);
      //拿字符进行判断
      if(ch>='A'&&ch<='Z') {
        bigCount++;
      }else if(ch>='a'&&ch<='z') {
        smallCount++;
      }else if(ch>='0'&&ch<='9') {
        numberCount++;
      }else {
        System.out.println("该字符"+ch+"非法");
      }
    }
    //输出结果
    System.out.println("大写字符："+bigCount+"个");
    System.out.println("小写字符："+smallCount+"个");
    System.out.println("数字字符："+numberCount+"个");
  }
}
```  

# 第二章 static关键字  

## 2.1  概述  

关于  `static` 关键字的使用，它可以用来修饰的成员变量和成员方法，被修饰的成员是属于类的，而不是单单是属于某个对象的。也就是说，既然属于类，就可以不靠创建对象来调用了。  

## 2.2  定义和使用格式  

### 类变量  
当  `static` 修饰成员变量时，该变量称为`类变量`。该类的每个对象都`共享`同一个类变量的值。任何对象都可以更改该类变量的值，但也可以在不创建该类的对象的情况下对类变量进行操作。  

- 类变量 ：使用 static关键字修饰的成员变量。  
定义格式：  

```java
static 数据类型 变量名；
```   
举例： 

```java
static int numberID；
```  

比如说，基础班新班开班，学员报到。现在想为每一位新来报到的同学编学号（sid），从第一名同学开始，sid为1，以此类推。学号必须是唯一的，连续的，并且与班级的人数相符，这样以便知道，要分配给下一名新同学的学号是多少。这样我们就需要一个变量，与单独的每一个学生对象无关，而是与整个班级同学数量有关。所以，我们可以这样定义一个静态变量numberOfStudent，代码如下：   

```java
public class Student {
  private String name;
  private int age;
  // 学生的id
  private int sid;
  // 类变量，记录学生数量，分配学号
  public static int numberOfStudent = 0;
  public Student(String name, int age){
    this.name = name;
    this.age = age;
    // 通过 numberOfStudent 给学生分配学号
    this.sid = ++numberOfStudent;
  }
  // 打印属性值
  public void show() {
    System.out.println("Student : name=" + name + ", age=" + age + ", sid=" + sid );
  }
}

public class StuDemo {
  public static void main(String[] args) {
    Student s1 = new Student("张三", 23);
    Student s2 = new Student("李四", 24);
    Student s3 = new Student("王五", 25);
    Student s4 = new Student("赵六", 26);
    s1.show(); // Student : name=张三, age=23, sid=1
    s2.show(); // Student : name=李四, age=24, sid=2
    s3.show(); // Student : name=王五, age=25, sid=3
    s4.show(); // Student : name=赵六, age=26, sid=4
  }
}

```  

### 静态方法  

当 `static` 修饰成员方法时，该方法称为类方法 。静态方法在声明中有 static ，建议使用类名来调用，而不需要创建类的对象。调用方式非常简单。

- 类方法 ：使用 static关键字修饰的成员方法，习惯称为静态方法。  

定义格式：  
```java
修饰符 static 返回值类型 方法名 (参数列表){
// 执行语句     
}
```
举例：在Student类中定义静态方法

```java
public static void showNum() {
  System.out.println("num:" +  numberOfStudent);
}
```  
- 静态方法调用的注意事项： 
  - 静态方法可以直接访问类变量和静态方法。
  - 静态方法 不能直接访问普通成员变量或成员方法。反之，成员方法可以直接访问类变量或静态方法。
  - 静态方法中，不能使用 this关键字。  

> 小贴士：静态方法只能访问静态成员。   

### 调用格式   
被static修饰的成员可以并且建议通过类名直接访问。虽然也可以通过对象名访问静态成员，原因即多个对象均属于一个类，共享使用同一个静态成员，但是不建议，会出现警告信息。  

格式：  
```java
// 访问类变量
类名.类变量名；
// 调用静态方法
类名.静态方法名(参数)；
```  

调用演示，代码如下：  

```java
public class StuDemo2 {
  public static void main(String[] args) {     
    // 访问类变量
    System.out.println(Student.numberOfStudent);
    // 调用静态方法
    Student.showNum();
  }
}
```

## 2.3  静态原理图解  

`static` 修饰的内容：
 - 是随着类的加载而加载的，且只加载一次。
 - 存储于一块固定的内存区域（静态区），所以，可以直接被类名调用。 
 - 它优先于对象存在，所以，可以被所有对象共享。   

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%B8%B8%E7%94%A8api2.png)  

### 2.4  静态代码块  

- 静态代码块 ：定义在成员位置，使用static修饰的代码块{ }。  
  - 位置：类中方法外。
  - 执行：随着类的加载而执行且执行一次，优先于 main方法和构造方法的执行。

格式：  
```java
public class ClassName{
  static {
    // 执行语句
  }
}
```  

作用：给类变量进行初始化赋值。用法演示，代码如下： 

```java
public class Game {
  public static int number;
  public static ArrayList<String> list;
  static {
    // 给类变量赋值
    number = 2;
    list = new ArrayList<String>();
    // 添加元素到集合中
    list.add("张三");
    list.add("李四");
  }
}
```

> 小贴士：   
> static 关键字，可以修饰变量、方法和代码块。在使用的过程中，其主要目的还是想在不创建对象的情况下，去调用方法。下面将介绍两个工具类，来体现static 方法的便利。  

# 第三章 Arrays类  

## 3.1  概述   

`java.util.Arrays` 此类包含用来操作数组的各种方法，比如排序和搜索等。其所有方法均为静态方法，调用起来
非常简单。  

## 3.2  操作数组的方法  

- `public static String toString(int[] a)` ：返回指定数组内容的字符串表示形式。

```java
public static void main(String[] args) {
  // 定义int 数组
  int[] arr  =  {2,34,35,4,657,8,69,9};
  // 打印数组,输出地址值
  System.out.println(arr); // [I@2ac1fdc4
  // 数组内容转为字符串
  String s = Arrays.toString(arr);
  // 打印字符串,输出内容
  System.out.println(s); // [2, 34, 35, 4, 657, 8, 69, 9]
}
```  

- `public static void sort(int[] a)` ：对指定的 int 型数组按数字升序进行排序。

```java
public static void main(String[] args) {
  // 定义int 数组
  int[] arr  =  {24, 7, 5, 48, 4, 46, 35, 11, 6, 2};
  System.out.println("排序前:"+ Arrays.toString(arr)); // 排序前:[24, 7, 5, 48, 4, 46, 35, 11, 6,2]
  // 升序排序
  Arrays.sort(arr);
  System.out.println("排序后:"+ Arrays.toString(arr));// 排序后:[2, 4, 5, 6, 7, 11, 24, 35, 46,48]
}
```   

## 3.3  练习  

请使用 Arrays 相关的API，将一个随机字符串中的所有字符升序排列，并倒序打印。
```java

public class ArraysTest {
  public static void main(String[] args) {
    // 定义随机的字符串
    String line = "ysKUreaytWTRHsgFdSAoidq";
    // 转换为字符数组
    char[] chars = line.toCharArray();
    // 升序排序
    Arrays.sort(chars);
    // 反向遍历打印
    for (int i =  chars.length‐1; i >= 0 ; i‐‐) {
      System.out.print(chars[i]+" "); // y y t s s r q o i g e d d a W U T S R K H F A
    }
  }
}
```  

## 第四章 Math类  

## 4.1  概述  

`java.lang.Math` 类包含用于执行基本数学运算的方法，如初等指数、对数、平方根和三角函数。类似这样的工具
类，其所有方法均为静态方法，并且不会创建对象，调用起来非常简单。

## 4.2  基本运算的方法   

- `public static double abs(double a)` ：返回 double 值的绝对值。

```java
double d1 = Math.abs(‐5); //d1的值为5
double d2 = Math.abs(5); //d2的值为5
``` 

- `public static double ceil(double a)` ：返回大于等于参数的最小的整数。

```java
double d1 = Math.ceil(3.3); //d1的值为 4.0
double d2 = Math.ceil(‐3.3); //d2的值为 ‐3.0
double d3 = Math.ceil(5.1); //d3的值为 6.0
```

- `public static double floor(double a)` ：返回小于等于参数最大的整数。

```java
double d1 = Math.floor(3.3); //d1的值为3.0
double d2 = Math.floor(‐3.3); //d2的值为‐4.0
double d3 = Math.floor(5.1); //d3的值为 5.0
```

- `public static long round(double a)` ：返回最接近参数的 long。(相当于四舍五入方法)

```java
long d1 = Math.round(5.5); //d1的值为6.0
long d2 = Math.round(5.4); //d2的值为5.0
```

## 4.3  练习  

请使用 `Math` 相关的API，计算在  `- 10.8` 到 `5.9` 之间，绝对值大于 `6` 或者小于 `2.1` 的整数有多少个？  

```java
public class MathTest {
  public static void main(String[] args) {
    // 定义最小值
    double min = ‐10.8;
    // 定义最大值
    double max = 5.9;
    // 定义变量计数
    int count = 0;
    // 范围内循环
    for (double i = Math.ceil(min); i <= max; i++) {
      // 获取绝对值并判断
      if (Math.abs(i) > 6 || Math.abs(i) < 2.1) {
        // 计数
        count++;
      }
    }
    System.out.println("个数为: " + count + " 个");
  }
}
```

# day09 【继承、super、this、抽象类】   

## 今日内容  

- 三大特性 ——继承  
- 方法重写  
- super 关键字 
- this 关键字  
- 抽象类  

## 学习目标

- [ ] 能够解释类名作为参数和返回值类型  
- [ ] 能够写出类的继承格式  
- [ ] 能够说出继承的特点  
- [ ] 能够说出子类调用父类的成员特点  
- [ ] 能够说出方法重写的概念  
- [ ] 能够说出super可以解决的问题  
- [ ] 描述抽象方法的概念 
- [ ] 写出抽象类的格式 
- [ ] 写出抽象方法的格式 
- [ ] 能够说出父类抽象方法的存在意义
- [ ] 能够完成发红包案例的代码逻辑  


# 第一章 继承  

## 1.1  概述  

### 由来

多个类中存在相同属性和行为时，将这些内容抽取到单独一个类中，那么多个类无需再定义这些属性和行为，只要
继承那一个类即可。如图所示：    

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BB%A7%E6%89%BF01.png)  

其中，多个类可以称为`子类`，单独那一个类称为`父类、超类（superclass）或者基类`。   

继承描述的是事物之间的所属关系，这种关系是： `is -a` 的关系。例如，图中兔子属于食草动物，食草动物属于动
物。可见，父类更通用，子类更具体。我们通过继承，可以使多种事物之间形成一种关系体系。
  
### 定义   

- 继承 ：就是子类继承父类的属性和行为，使得子类对象具有与父类相同的属性、相同的行为。子类可以直接
访问父类中的非私有的属性和行为。  

### 好处  

1. 提高代码的复用性。  
2. 类与类之间产生了关系，是多态的前提。  

## 1.2  继承的格式 

通过 `extends` 关键字，可以声明一个子类继承另外一个父类，定义格式如下：

```java
class 父类 {
...    
}
class 子类 extends 父类 {
...    
}
```  

继承演示，代码如下： 
```java
  
//定义员工类Employee，做为父类
class Employee {
String name; // 定义name属性    
// 定义员工的工作方法    
public void work() {    
  System.out.println("尽心尽力地工作");        
  }    
}
/*
 * 定义讲师类Teacher 继承 员工类Employee
 */
class Teacher extends Employee {
// 定义一个打印name的方法    
public void printName() {    
  System.out.println("name=" + name);        
  }    
}
/*
 * 定义测试类
 */
public class ExtendDemo01 {
  public static void main(String[] args) {    
    // 创建一个讲师类对象
    Teacher t = new Teacher();        
           
    // 为该员工类的name属性进行赋值
    t.name = "小明";         
           
    // 调用该员工的printName()方法  
    t.printName(); // name = 小明        
             
    // 调用Teacher类继承来的work()方法  
    t.work();  // 尽心尽力地工作  
  }    
}
```  

## 1.3  继承后的特点——成员变量  

当类之间产生了关系后，其中各类中的成员变量，又产生了哪些影响呢？  

### 成员变量不重名  

如果子类父类中出现不重名的成员变量，这时的访问是没有影响的。代码如下：  

```java
class Fu {
  // Fu中的成员变量。    
  int num = 5;    
}
class Zi extends Fu {
      
    int num2 = 6;    
    // Zi中的成员方法    
    public void show() {    
      // 访问父类中的num，        
      System.out.println("Fu num="+num); // 继承而来，所以直接访问。        
      // 访问子类中的num2        
      System.out.println("Zi num2="+num2);        
    }    
}

class ExtendDemo02 {
    public static void main(String[] args) {    
                // 创建子类对象
        Zi z = new Zi();         
               // 调用子类中的show方法  
        z.show();          
    }    
}
//演示结果：
Fu num = 5
Zi num2 = 6
``` 

### 成员变量重名  

如果子类父类中出现重名的成员变量，这时的访问是有影响的。代码如下：  


```java
class Fu {
  // Fu中的成员变量。    
  int num = 5;    
}
class Zi extends Fu {
  // Zi中的成员变量    
  int num = 6;    
  public void show() {    
    // 访问父类中的num        
    System.out.println("Fu num=" + num);        
    // 访问子类中的num        
    System.out.println("Zi num=" + num);        
  }    
}
class ExtendsDemo03 {
  public static void main(String[] args) {    
    // 创建子类对象  
    Zi z = new Zi();         
    // 调用子类中的show方法  
    z.show();         
  }    
}
//演示结果：
Fu num = 6
Zi num = 6
```

子父类中出现了同名的成员变量时，在子类中需要访问父类中非私有成员变量时，需要使用 super 关键字，修饰父类成员变量，类似于之前学过的  `this` 。

使用格式：  

```java
super.父类成员变量名
```

 子类方法需要修改，代码如下：  


 ```java
class Zi extends Fu {
  // Zi中的成员变量    
  int num = 6;    
  public void show() {    
    //访问父类中的num        
    System.out.println("Fu num=" + super.num);        
    //访问子类中的num        
    System.out.println("Zi num=" + this.num);        
  }    
}
//演示结果：
Fu num = 5
Zi num = 6
```

>小贴士：Fu 类中的成员变量是非私有的，子类中可以直接访问。若Fu 类中的成员变量私有了，子类是不能直接访问的。通常编码时，我们遵循封装的原则，使用private修饰成员变量，那么如何访问父类的私有成员变量呢？对！可以在父类中提供公共的getXxx方法和setXxx方法。
 
 ## 1.4  继承后的特点——成员方法   

 当类之间产生了关系，其中各类中的成员方法，又产生了哪些影响呢？  

 ### 成员方法不重名    

如果子类父类中出现不重名的成员方法，这时的调用是没有影响的。对象调用方法时，会先在子类中查找有没有对应的方法，若子类中存在就会执行子类中的方法，若子类中不存在就会执行父类中相应的方法。代码如下：

```java
class Fu{
  public void show(){    
    System.out.println("Fu类中的show方法执行");        
  }    
}

class Zi extends Fu{
  public void show2(){    
    System.out.println("Zi类中的show2方法执行");        
  }    
}
public  class ExtendsDemo04{
  public static void main(String[] args) {    
    Zi z = new Zi();        
          //子类中没有show方法，但是可以找到父类方法去执行
    z.show();         
    z.show2();        
  }    
}
···  
```

### 成员方法重名 ——重写(Override)   

如果子类父类中出现重名的成员方法，这时的访问是一种特殊情况，叫做方法重写 (Override)。  

- 方法重写 ：子类中出现与父类一模一样的方法时（返回值类型，方法名和参数列表都相同），会出现覆盖效果，也称为重写或者复写。`声明不变，重新实现`。  

代码如下：
```java
class Fu {
public void show() {    
  System.out.println("Fu show");        
  }    
}
class Zi extends Fu {
  //子类重写了父类的show方法    
  public void show() {    
    System.out.println("Zi show");        
  }    

  public class ExtendsDemo05{
    public static void main(String[] args) {    
      Zi z = new Zi();        
            // 子类中有show方法，只执行重写后的show方法   
      z.show();  // Zi show        
    }    
  }
}
```  

### 重写的应用  

子类可以根据需要，定义特定于自己的行为。既沿袭了父类的功能名称，又根据子类的需要重新实现父类方法，从而进行扩展增强。比如新的手机增加来电显示头像的功能，代码如下：

```java
class Phone {
  public void sendMessage(){    
   System.out.println("发短信");        
  }    
  public void call(){    
    System.out.println("打电话");        
  }    
  public void showNum(){    
    System.out.println("来电显示号码");        
  }    
}

//智能手机类
class NewPhone extends Phone {
   
  //重写父类的来电显示号码功能，并增加自己的显示姓名和图片功能    
  public void showNum(){    
    //调用父类已经存在的功能使用super        
    super.showNum();        
    //增加自己特有显示姓名和图片功能        
    System.out.println("显示来电姓名");        
    System.out.println("显示头像");        
  }    
}

public class ExtendsDemo06 {
  public static void main(String[] args) {    
     // 创建子类对象  
     NewPhone np = new NewPhone()；  
       
     // 调用父类继承而来的方法
     np.call();
     
     // 调用子类重写的方法  
     np.showNum();  
  }    
}

```  

> 小贴士：这里重写时，用到 super.父类成员方法，表示调用父类的成员方法。  

### 注意事项   

1. 子类方法覆盖父类方法，必须要保证权限大于等于父类权限。  
2. 子类方法覆盖父类方法，返回值类型、函数名和参数列表都要一模一样。  

##  1.5  继承后的特点——构造方法  

当类之间产生了关系，其中各类中的构造方法，又产生了哪些影响呢？   

首先我们要回忆两个事情，构造方法的定义格式和作用。

  1. 构造方法的名字是与类名一致的。所以子类是无法继承父类构造方法的。  

  2. 构造方法的作用是初始化成员变量的。所以子类的初始化过程中，必须先执行父类的初始化动作。子类的构造方法中默认有一个 super() ，表示调用父类的构造方法，父类成员变量初始化后，才可以给子类使用。代

```java
class Fu {
  private int n;
    Fu(){
      System.out.println("Fu()");
    }
}

class Zi extends Fu {
  Zi(){
    // super（），调用父类构造方法
    super();
    System.out.println("Zi（）");
  } 
}

public class ExtendsDemo07{
  public static void main (String args[]){
    Zi zi = new Zi();
  }
}

//输出结果：
Fu（）
Zi（） 
```  

## 1.6 super 和this   

### 父类空间优先于子类对象产生   

在每次创建子类对象时，先初始化父类空间，再创建其子类对象本身。目的在于子类对象中包含了其对应的父类空间，便可以包含其父类的成员，如果父类成员非private修饰，则子类可以随意使用父类成员。代码体现在子类的构造方法调用时，一定先调用父类的构造方法。理解图解如下：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BB%A7%E6%89%BF02.png);

### super和this的含义   

- super ：代表父类的存储空间标识(可以理解为父亲的引用)。
- this ：代表当前对象的引用(谁调用就代表谁)。

### super和this的用法  

1. 访问成员  

```java
this.成员变量     ‐‐    本类的   
super.成员变量     ‐‐    父类的  
this.成员方法名()   ‐‐    本类的      
super.成员方法名()   ‐‐    父类的
```  

用法演示，代码如下：


```java
class Animal {
    public void eat() {
        System.out.println("animal : eat");
    }
}
class Cat extends Animal {
    public void eat() {
        System.out.println("cat : eat");
    }
    public void eatTest() {
        this.eat();   // this  调用本类的方法
        super.eat();  // super 调用父类的方法
    }
}
public class ExtendsDemo08 {
    public static void main(String[] args) {
        Animal a = new Animal();
        a.eat();
        Cat c = new Cat();
        c.eatTest();
    }
}
//输出结果为：
animal : eat
cat : eat
animal : eat
```  

2. 访问构造方法

```java
this(...)     ‐‐    本类的构造方法   
super(...)    ‐‐    父类的构造方法
```

> 子类的每个构造方法中均有默认的super()，调用父类的空参构造。手动调用父类构造会覆盖默认的super()。super() 和 this() 都必须是在构造方法的第一行，所以不能同时出现。


## 1.7  继承的特点  

1. Java只支持单继承，不支持多继承。  

```java
//一个类只能有一个父类，不可以有多个父类。
class C extends A{}  //ok    
class C extends A，B... //error
```  

2. Java支持多层继承(继承体系)。   

```java
class A{}
class B extends A{}
class C extends B{}
```

> 顶层父类是Object类。所有的类默认继承Object，作为父类。  

3. 子类和父类是一种相对的概念。  

# 第二章 抽象类  

## 2.1  概述  

### 由来

父类中的方法，被它的子类们重写，子类各自的实现都不尽相同。那么父类的方法声明和方法主体，只有声明还有
意义，而方法主体则没有存在的意义了。我们把没有方法主体的方法称为抽象方法。Java语法规定，包含抽象方法
的类就是抽象类。  

### 定义  

- 抽象方法 ： 没有方法体的方法。 
- 抽象类 ：包含抽象方法的类。  

## 2.2 abstract 使用格式  

### 抽象方法  

使用 `abstract` 关键字修饰方法，该方法就成了抽象方法，抽象方法只包含一个方法名，而没有方法体。

定义格式： 

```java
修饰符 abstract 返回值类型 方法名 (参数列表)；
```  

代码举例：  

```java
public abstract void run()；
```  

### 抽象类 

如果一个类包含抽象方法，那么该类必须是抽象类。  
定义格式：  

```java
abstract class 类名字 {
 
}
```  

代码举例：
```java
public abstract class Animal {
    public abstract void run()；
}
```  

### 抽象的使用  

继承抽象类的子类`必须重写父类所有的抽象方法`。否则，该子类也必须声明为抽象类。最终，必须有子类实现该父
类的抽象方法，否则，从最初的父类到最终的子类都不能创建对象，失去意义。  

代码举例：  

```java
public class Cat extends Animal {
    public void run (){
       System.out.println("小猫在墙头走~~~")；         
    }
}
public class CatTest {
   public static void main(String[] args) {   
        // 创建子类对象
        Cat c = new Cat();
      
        // 调用run方法
        c.run();
   }  
}
输出结果：
小猫在墙头走~~~
```  

此时的方法重写，是子类对父类抽象方法的完成实现，我们将这种方法重写的操作，也叫做实现方法。  

## 2.3  注意事项  

关于抽象类的使用，以下为语法上要注意的细节，虽然条目较多，但若理解了抽象的本质，无需死记硬背。  

1 . 抽象类不能创建对象，如果创建，编译无法通过而报错。只能创建其非抽象子类的对象。 
> 理解：假设创建了抽象类的对象，调用抽象的方法，而抽象方法没有具体的方法体，没有意义。  

2 . 抽象类中，可以有构造方法，是供子类创建对象时，初始化父类成员使用的。
> 理解：子类的构造方法中，有默认的super()，需要访问父类构造方法。  

3. 抽象类中，不一定包含抽象方法，但是有抽象方法的类必定是抽象类。  
> 理解：未包含抽象方法的抽象类，目的就是不想让调用者创建该类对象，通常用于某些特殊的类结构设计。

4 . 抽象类的子类，必须重写抽象父类中所有的抽象方法，否则，编译无法通过而报错。除非该子类也是抽象类。

>理解：假设不重写所有抽象方法，则类中可能包含抽象方法。那么创建对象后，调用抽象的方法，没有
意义。

# 第三章 继承的综合案例  

## 3.1  综合案例：群主发普通红包   

群主发普通红包。某群有多名成员，群主给成员发普通红包。普通红包的规则：  

1. 群主的一笔金额，从群主余额中扣除，平均分成n等份，让成员领取。  

2. 成员领取红包后，保存到成员余额中。  

请根据描述，完成案例中所有类的定义以及指定类之间的继承关系，并完成发红包的操作。  

## 3.2  案例分析   

根据描述分析，得出如下继承体系：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BB%A7%E6%89%BF03.png)  

## 3.3  案例实现  

定义用户类：  

```java
  public class User {
 
   // 成员变量  
    private String username; // 用户名    
    private double leftMoney; // 余额   
   // 构造方法

  public User() { }
    public User(String username, double leftMoney) {
        this.username = username;
        this.leftMoney = leftMoney;
    }
    // get/set方法    
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public double getLeftMoney() {
        return leftMoney;
    }
    public void setLeftMoney(double leftMoney) {
        this.leftMoney = leftMoney;
    }
    // 展示信息的方法    
    public void show() {
        System.out.println("用户名:"+ username +" , 余额为:" + leftMoney + "元");
    }
}

``` 

定义群主类：  

```java
public class QunZhu extends User {
// 添加构造方法    
    public QunZhu() {
    }
    public QunZhu(String username, double leftMoney) {
       // 通过super 调用父类构造方法  
        super(username, leftMoney);
    }
/*    
群主发红包，就是把一个整数的金额，分层若干等份。        
1.获取群主余额,是否够发红包.        
不能则返回null,并提示.            
能则继续.            
2.修改群主余额.        
3.拆分红包.        
3.1.如果能整除，那么就平均分。            
3.2.如果不能整除，那么就把余数分给最后一份。            
*/    
    public ArrayList<Double> send(int money, int count) {
       // 获取群主余额  
       double leftMoney = getLeftMoney();  
        if(money > leftMoney) {
          return null;
        }
       // 修改群主余额的  
        setLeftMoney(leftMoney ‐ money);
     
       // 创建一个集合,保存等份金额  
        ArrayList<Double> list = new ArrayList<>();
     
       // 扩大100倍,相当于折算成'分'为单位,避免小数运算损失精度的问题  
        money = money * 100;
     
        // 每份的金额
        int m = money / count;
        // 不能整除的余数
        int l = money % count;
     
       // 无论是否整除,n‐1份,都是每份的等额金额  
        for (int i = 0; i < count ‐ 1; i++) {
           // 缩小100倍,折算成 '元'  
            list.add(m / 100.0);
        }
     
       // 判断是否整除  
        if (l == 0) {
           // 能整除, 最后一份金额,与之前每份金额一致  
            list.add(m / 100.0);
        } else {
           // 不能整除, 最后一份的金额,是之前每份金额+余数金额  
            list.add((m + l) / 100.00);
        }
     
       // 返回集合  
        return list;
    }
}

```  

定义成员类： 

```java
public class Member extends  User {
    public Member() {
    }
    public Member(String username, double leftMoney) {
        super(username, leftMoney);
    }
    // 打开红包,就是从集合中,随机取出一份,保存到自己的余额中
    public void openHongbao(ArrayList<Double> list) {
       // 创建Random对象  
       Random r = new Random();  
       // 随机生成一个角标  
       int index = r.nextInt(list.size());  
       // 移除一个金额
       Double money = list.remove(index);
       // 直接调用父类方法,设置到余额  
        setLeftMoney( money );
    }
}

```  

定义测试类： 

```java
public class Test {
    public static void main(String[] args) {
        // 创建一个群主对象
        QunZhu qz = new QunZhu("群主" , 200);
       
       // 创建一个键盘录入  
       Scanner sc = new Scanner();  
        System.out.println("请输入金额:");
        int money = sc.nextInt();
        System.out.println("请输入个数:");
        int count = sc.nextInt();
       
      // 发送红包   
        ArrayList<Double> sendList = s.send(money,count);
       
        // 判断,如果余额不足
        if(sendList == null){
            System.out.println(" 余额不足...");
            return;
        }
        // 创建三个成员
        Member m = new Member();
        Member m2 = new Member();
        Member m3 = new Member();
       
       // 打开红包  
        m.openHongbao(sendList);
        m2.openHongbao(sendList);
        m3.openHongbao(sendList);
// 展示信息        
        qz.show();
        m.show();
        m2.show();
        m3.show();
    }
}
```  

> 思考并完成扩展需求。 
> 案例扩展：
> 1. 如果成员的余额不为0呢，将如何处理？  
> 2 . 如果群主想输入带小数的金额呢，将如何处理？   

# day10 【接口、多态】

## 今日内容  

- 接口  
- 三大特征 ——多态  
- 引用类型转换 

## 学习目标 

- [ ] 写出定义接口的格式
- [ ] 写出实现接口的格式
- [ ] 说出接口中成员的特点
- [ ] 能够说出使用多态的前提条件
- [ ] 理解多态的向上转型
- [ ] 理解多态的向下转型
- [ ] 能够完成笔记本电脑案例（方法参数为接口）

# 第一章 接口  

## 1.1  概述  
接口，是Java语言中一种引用类型，是方法的集合，如果说类的内部封装了成员变量、构造方法和成员方法，那么接口的内部主要就是`封装了方法`，包含抽象方法（JDK 7及以前），默认方法和静态方法（JDK 8），私有方法（JDK 9）。

接口的定义，它与定义类方式相似，但是使用  `interface` 关键字。它也会被编译成.class文件，但一定要明确它并
不是类，而是另外一种引用数据类型。

> 引用数据类型：数组，类，接口。  

接口的使用，它不能创建对象，但是可以被实现（ `implements` ，类似于被继承）。一个实现接口的类（可以看做
是接口的子类），需要实现接口中所有的抽象方法，创建该类对象，就可以调用方法了，否则它必须是一个抽象
类。

## 1.2  定义格式  

```java
public interface 接口名称 {
    // 抽象方法
    // 默认方法
    // 静态方法
    // 私有方法
} 
``` 

### 含有抽象方法  

抽象方法：使用 `abstract` 关键字修饰，可以省略，没有方法体。该方法供子类实现使用。
代码如下：

```java
public interface InterFaceName {
    public abstract void method();
}
```

### 含有默认方法和静态方法  

默认方法：使用  `default` 修饰，不可省略，供子类调用或者子类重写。
静态方法：使用  `static` 修饰，供接口直接调用。
代码如下：
```java
public interface InterFaceName {
    public default void method() {
        // 执行语句
    }
    public static void method2() {
        // 执行语句   
    }
}
```

### 含有私有方法和私有静态方法   

私有方法：使用  `private` 修饰，供接口中的默认方法或者静态方法调用。
代码如下：

```java
public interface InterFaceName {
    private void method() {
        // 执行语句
    }
}
```

## 1.3  基本的实现 

### 实现的概述 

类与接口的关系为实现关系，即`类实现接口`，该类可以称为接口的实现类，也可以称为接口的子类。实现的动作类
似继承，格式相仿，只是关键字不同，实现使用  `implements` 关键字。  

非抽象子类实现接口：
1. 必须重写接口中所有抽象方法。
2. 继承了接口的默认方法，即可以直接调用，也可以重写。

实现格式：
```java
class 类名 implements 接口名 {
    // 重写接口中抽象方法【必须】
   // 重写接口中默认方法【可选】  
}
```

### 抽象方法的使用  

必须全部实现，代码如下：  
定义接口：

```java
public interface LiveAble {
    // 定义抽象方法
    public abstract void eat();
    public abstract void sleep();
}
```

定义实现类： 

```java
public class Animal implements LiveAble {
    @Override
    public void eat() {
        System.out.println("吃东西");
    }
    @Override
    public void sleep() {
        System.out.println("晚上睡");
    }
}
```  

定义测试类： 

```java
public class InterfaceDemo {
    public static void main(String[] args) {
        // 创建子类对象 
        Animal a = new Animal();
        // 调用实现后的方法
        a.eat();
        a.sleep();
    }
}
输出结果：
吃东西
晚上睡
```  

### 默认方法的使用  
可以继承，可以重写，二选一，但是只能通过实现类的对象来调用。  

1. 继承默认方法，代码如下：

定义接口：
```java
public interface LiveAble {
    public default void fly(){
        System.out.println("天上飞");
    }
}
```

定义实现类：
```java
public class Animal implements LiveAble {
// 继承，什么都不用写，直接调用    
}
```  

定义测试类： 

```java
public class InterfaceDemo {
    public static void main(String[] args) {
        // 创建子类对象 
        Animal a = new Animal();
        // 调用默认方法
        a.fly();
    }
}
输出结果：
天上飞
```

2. 重写默认方法，代码如下： 
定义接口：

```java
public interface LiveAble {
    public default void fly(){
        System.out.println("天上飞");
    }
}
```

定义实现类：
```java
public class Animal implements LiveAble {
    @Override
    public void fly() {
        System.out.println("自由自在的飞");
    }
}
```

定义测试类：

```java
public class InterfaceDemo {
    public static void main(String[] args) {
        // 创建子类对象 
        Animal a = new Animal();
        // 调用重写方法
        a.fly();
    }
}
输出结果：
自由自在的飞
```

静态方法的使用
静态与.class 文件相关，只能使用接口名调用，不可以通过实现类的类名或者实现类的对象调用，代码如下：

定义接口：
```java
public interface LiveAble {
    public static void run(){
        System.out.println("跑起来~~~");
    }
}

```

定义实现类：
```java
public class Animal implements LiveAble {
// 无法重写静态方法    
}
```  

定义测试类：  
```java
public class InterfaceDemo {
    public static void main(String[] args) {
        // Animal.run(); // 【错误】无法继承方法,也无法调用
        LiveAble.run(); //
    }
}
输出结果：
跑起来~~~
```

### 私有方法的使用  

- 私有方法：只有默认方法可以调用。 
- 私有静态方法：默认方法和静态方法可以调用。 

如果一个接口中有多个默认方法，并且方法中有重复的内容，那么可以抽取出来，封装到私有方法中，供默认方法
去调用。从设计的角度讲，私有的方法是对默认方法和静态方法的辅助。同学们在已学技术的基础上，可以自行测
试。

定义接口： 

```java
public interface LiveAble {
    default void func(){
        func1();
        func2();
    }
    private void func1(){
        System.out.println("跑起来~~~");
    }
    private void func2(){
        System.out.println("跑起来~~~");
    }
}
```  

## 1.4  接口的多实现  

之前学过，在继承体系中，一个类只能继承一个父类。而对于接口而言，一个类是可以实现多个接口的，这叫做接
口的`多实现`。并且，一个类能继承一个父类，同时实现多个接口。

实现格式：  

```java
class 类名 [extends 父类名] implements 接口名1,接口名2,接口名3... {
    // 重写接口中抽象方法【必须】
   // 重写接口中默认方法【不重名时可选】  
}
```

> [ ]： 表示可选操作。  

### 抽象方法 

接口中，有多个抽象方法时，实现类必须重写所有抽象方法。如果抽象方法有重名的，只需要重写一次。代码如
下：

定义多个接口：  

```java
interface A {
    public abstract void showA();
    public abstract void show();
}
interface B {
    public abstract void showB();
    public abstract void show();
}
```

定义实现类：
```java
public class C implements A,B{
    @Override
    public void showA() {
        System.out.println("showA");
    }
    @Override
    public void showB() {
        System.out.println("showB");
    }
    @Override
    public void show() {
        System.out.println("show");
    }
}

```

### 默认方法  

接口中，有多个默认方法时，实现类都可继承使用。`如果默认方法有重名的，必须重写一次。`代码如下：
定义多个接口：

```java
interface A {
    public default void methodA(){}
    public default void method(){}
}
interface B {
    public default void methodB(){}
    public default void method(){}
}
```  

定义实现类：  

```java
public class C implements A,B{
    @Override
    public void method() {
        System.out.println("method");
    }
}
```  

### 静态方法  

接口中，存在同名的静态方法并不会冲突，原因是只能通过各自接口名访问静态方法。  

### 优先级的问题 

当一个类，既继承一个父类，又实现若干个接口时，父类中的成员方法与接口中的默认方法重名，子类就近选择执
行父类的成员方法。代码如下：  

定义接口：  

```java
interface A {
    public default void methodA(){
        System.out.println("AAAAAAAAAAAA");
    }
}
```

定义父类：
```java
class D {
    public void methodA(){
        System.out.println("DDDDDDDDDDDD");
    }
}
```

定义子类：  

```java
class C extends D implements A {
   // 未重写methodA方法  
}
```

定义测试类：

```java
public class Test {
    public static void main(String[] args) {
        C c = new C();
        c.methodA();
    }
}
输出结果:
DDDDDDDDDDDD
```  

## 1.5  接口的多继承【了解】  

一个接口能继承另一个或者多个接口，这和类之间的继承比较相似。接口的继承使用  extends 关键字，子接口继
承父接口的方法。`如果父接口中的默认方法有重名的，那么子接口需要重写一次`。代码如下：
定义父接口：

```java
interface A {
    public default void method(){
        System.out.println("AAAAAAAAAAAAAAAAAAA");
    }
}
interface B {
    public default void method(){
        System.out.println("BBBBBBBBBBBBBBBBBBB");
    }
}
```  

定义子接口：  
```java
interface D extends A,B{
    @Override
    public default void method() {
        System.out.println("DDDDDDDDDDDDDD");
    }
}
```

> 小贴士：
> 子接口重写默认方法时，default关键字可以保留。
> 子类重写默认方法时，default关键字不可以保留。  


## 1.6  其他成员特点  

- 接口中，无法定义成员变量，但是可以定义常量，其值不可以改变，默认使用 public static final修饰。 
- 接口中，没有构造方法，不能创建对象。 
- 接口中，没有静态代码块。 

# 第二章 多态 

## 2.1  概述  

### 引入  
多态是继封装、继承之后，面向对象的第三大特性。  

生活中，比如跑的动作，小猫、小狗和大象，跑起来是不一样的。再比如飞的动作，昆虫、鸟类和飞机，飞起来也
是不一样的。可见，同一行为，通过不同的事物，可以体现出来的不同的形态。多态，描述的就是这样的状态。  

### 定义 

- 多态 ： 是指同一行为，具有多个不同表现形式。  

### 前提【重点】  

1 . 继承或者实现【二选一】  
2. 方法的重写【意义体现：不重写，无意义】 
3. 父类引用指向子类对象【格式体现】  

## 2.2  多态的体现  

多态体现的格式：  

```java
父类类型 变量名 = new 子类对象；
变量名.方法名();
```

> 父类类型：指子类对象继承的父类类型，或者实现的父接口类型。 

代码如下：  

```java
Fu f = new Zi();
f.method();
```  

当使用多态方式调用方法时，首先检查父类中是否有该方法，如果没有，则编译错误；如果有，执行的是子类重写
后方法。  

代码如下：  
定义父类：  
```java
public abstract class Animal { 
    public abstract void eat(); 
} 
``` 
定义子类：  

```java
class Cat extends Animal { 
    public void eat() { 
        System.out.println("吃鱼"); 
    } 
} 
class Dog extends Animal { 
    public void eat() { 
        System.out.println("吃骨头"); 
    } 
}
``` 

定义测试类：
```java
public class Test {
    public static void main(String[] args) {
        // 多态形式，创建对象
        Animal a1 = new Cat(); 
        // 调用的是 Cat 的 eat
        a1.eat();         
        // 多态形式，创建对象
        Animal a2 = new Dog();
        // 调用的是 Dog 的 eat
        a2.eat();              
    } 
}
```  

## 2.3  多态的好处 

实际开发的过程中，父类类型作为方法形式参数，传递子类对象给方法，进行方法的调用，更能体现出多态的扩展
性与便利。代码如下： 

定义父类： 

```java
public abstract class Animal { 
    public abstract void eat(); 
} 
```  

定义子类：
```java
class Cat extends Animal { 
    public void eat() { 
        System.out.println("吃鱼"); 
    } 
} 
class Dog extends Animal { 
    public void eat() { 
        System.out.println("吃骨头"); 
    } 
}
```  

定义测试类：  
```java
public class Test {
    public static void main(String[] args) {
        // 多态形式，创建对象
        Cat c = new Cat(); 
        Dog d = new Dog();
        // 调用showCatEat
        showCatEat(c);
        // 调用showDogEat
        showDogEat(d);
        /*
        以上两个方法, 均可以被showAnimalEat(Animal a)方法所替代
        而执行效果一致
        */
        showAnimalEat(c);
        showAnimalEat(d);
    }
    public static void showCatEat (Cat c){
        c.eat();
    }
    public static void showDogEat (Dog d){
        d.eat();
    }
    public static void showAnimalEat (Animal a){
        a.eat();
    }
}
```  

由于多态特性的支持， showAnimalEat方法的Animal类型，是Cat和Dog的父类类型，父类类型接收子类对象，当
然可以把Cat对象和Dog对象，传递给方法。 

当eat方法执行时，多态规定，执行的是子类重写的方法，那么效果自然与showCatEat、showDogEat方法一致，
所以showAnimalEat完全可以替代以上两方法。  

不仅仅是替代，在扩展性方面，无论之后再多的子类出现，我们都不需要编写showXxxEat方法了，直接使用
showAnimalEat都可以完成。  

所以，多态的好处，体现在，可以使程序编写的更简单，并有良好的扩展。  

## 2.4  引用类型转换   

多态的转型分为向上转型与向下转型两种：  

### 向上转型  

- 向上转型 ：多态本身是子类类型向父类类型向上转换的过程，这个过程是默认的。  

当父类引用指向一个子类对象时，便是向上转型。 
使用格式：
```java
父类类型  变量名 = new 子类类型();
如：Animal a = new Cat();
```  

### 向下转型  

- 向下转型 ：父类类型向子类类型向下转换的过程，这个过程是强制的。  

一个已经向上转型的子类对象，将父类引用转为子类引用，可以使用强制类型转换的格式，便是向下转型。
使用格式：  

```java
子类类型 变量名 = (子类类型) 父类变量名;
如:Cat c =(Cat) a; 
```  

### 为什么要转型  

当使用多态方式调用方法时，首先检查父类中是否有该方法，如果没有，则编译错误。也就是说，不能调用子类拥
有，而父类没有的方法。编译都错误，更别说运行了。这也是多态给我们带来的一点"小麻烦"。所以，想要调用子
类特有的方法，必须做向下转型。

转型演示，代码如下：  

定义类： 

```java
abstract class Animal { 
    abstract void eat(); 
} 
class Cat extends Animal { 
    public void eat() { 
        System.out.println("吃鱼"); 
    } 
    public void catchMouse() { 
        System.out.println("抓老鼠"); 
    } 
} 
class Dog extends Animal { 
    public void eat() { 
        System.out.println("吃骨头"); 
    } 
    public void watchHouse() { 
        System.out.println("看家"); 
    } 
}
```  

定义测试类：  

```java
public class Test {
    public static void main(String[] args) {
        // 向上转型 
        Animal a = new Cat(); 
        a.eat();  // 调用的是 Cat 的 eat               
        // 向下转型 
        Cat c = (Cat)a;      
        c.catchMouse();  // 调用的是 Cat 的 catchMouse        
    } 
}
```  

### 转型的异常 

转型的过程中，一不小心就会遇到这样的问题，请看如下代码：  

```java
public class Test {
    public static void main(String[] args) {
        // 向上转型 
        Animal a = new Cat(); 
        a.eat();               // 调用的是 Cat 的 eat
        // 向下转型 
        Dog d = (Dog)a;      
        d.watchHouse();        // 调用的是 Dog 的 watchHouse 【运行报错】
    } 
}
```

这段代码可以通过编译，但是运行时，却报出了  `ClassCastException` ，类型转换异常！这是因为，明明创建了
Cat类型对象，运行时，当然不能转换成Dog对象的。这两个类型并没有任何继承关系，不符合类型转换的定义。

为了避免ClassCastException的发生，Java提供了  `instanceof` 关键字，给引用变量做类型的校验，格式如下：

```java
变量名 instanceof 数据类型
如果变量属于该数据类型，返回true。
如果变量不属于该数据类型，返回false。
```

所以，转换前，我们最好先做一个判断，代码如下：  

```java
public class Test {
    public static void main(String[] args) {
        // 向上转型 
        Animal a = new Cat(); 
        a.eat();               // 调用的是 Cat 的 eat
        // 向下转型 
        if (a instanceof Cat){
            Cat c = (Cat)a;      
            c.catchMouse();        // 调用的是 Cat 的 catchMouse
        } else if (a instanceof Dog){
            Dog d = (Dog)a;      
            d.watchHouse();       // 调用的是 Dog 的 watchHouse
        }
    } 
}
```  

# 第三章 接口多态的综合案例  

## 3.1  笔记本电脑 

笔记本电脑（ laptop）通常具备使用USB设备的功能。在生产时，笔记本都预留了可以插入USB设备的USB接口，
但具体是什么USB设备，笔记本厂商并不关心，只要符合USB规格的设备都可以。

定义USB接口，具备最基本的开启功能和关闭功能。鼠标和键盘要想能在电脑上使用，那么鼠标和键盘也必须遵守
USB规范，实现USB接口，否则鼠标和键盘的生产出来也无法使用。

## 3.2  案例分析  

进行描述笔记本类，实现笔记本使用USB鼠标、USB键盘  
  - USB 接口，包含开启功能、关闭功能 
  - 笔记本类，包含运行功能、关机功能、使用 USB设备功能 
  - 鼠标类，要实现 USB接口，并具备点击的方法 
  - 键盘类，要实现 USB接口，具备敲击的方法  

## 3.3  案例实现  

定义USB接口： 

```java
interface USB {
    void open();// 开启功能
    void close();// 关闭功能
}
```

定义鼠标类：  

```java
class Mouse implements USB {
    public void open() {
        System.out.println("鼠标开启，红灯闪一闪");
    }
    public void close() {
        System.out.println("鼠标关闭，红灯熄灭");
    }
    public void click(){
        System.out.println("鼠标单击");
    }
}
```  

定义键盘类：  

```java
class KeyBoard implements USB {
    public void open() {
        System.out.println("键盘开启，绿灯闪一闪");
    }
    public void close() {
        System.out.println("键盘关闭，绿灯熄灭");
    }
    public void type(){
        System.out.println("键盘打字");
    }
}
```  

定义笔记本类：  

```java
class Laptop {
    // 笔记本开启运行功能
    public void run() {
        System.out.println("笔记本运行");
    }
    // 笔记本使用usb设备，这时当笔记本对象调用这个功能时，必须给其传递一个符合USB规则的USB设备
    public void useUSB(USB usb) {
        // 判断是否有USB设备
        if (usb != null) {
            usb.open();
            // 类型转换,调用特有方法
            if(usb instanceof Mouse){
                Mouse m = （Mouse）usb；
                    m.click();
            }else if (usb instanceof KeyBoard){
                KeyBoard kb = (KeyBoard)usb;
                kb.type();
            }
            usb.close();
        }
    }
    public void shutDown() {
        System.out.println("笔记本关闭");
    }
}
```  

测试类，代码如下：   

```java
public class Test {
    public static void main(String[] args) {
        // 创建笔记本实体对象
        Laptop lt = new Laptop();
        // 笔记本开启
        lt.run();
        // 创建鼠标实体对象
        Usb u = new Mouse();
        // 笔记本使用鼠标
        lt.useUSB(u);
        // 创建键盘实体对象
        KeyBoard kb = new KeyBoard();
        // 笔记本使用键盘
        lt.useUSB(kb);
        // 笔记本关闭
        lt.shutDown();
    }
}
```  

# day11 【final、权限、内部类、引用类型】

## 今日内容  

- final 关键字 
- 权限
- 内部类 
- 引用类型  

## 学习目标 
- [ ] 描述final修饰的类的特点
- [ ] 描述final修饰的方法的特点
- [ ] 能够说出权限修饰符作用范围
- [ ] 说出内部类的概念
- [ ] 能够理解引用类型作为成员变量
- [ ] 能够理解引用类型作为方法参数
- [ ] 能够理解引用类型作为方法返回值类型    

# 第一章 final关键字  

## 1.1  概述  

学习了继承后，我们知道，子类可以在父类的基础上改写父类内容，比如，方法重写。那么我们能不能随意的继承API中提供的类，改写其内容呢？显然这是不合适的。为了避免这种随意改写的情况，Java提供了 final 关键字，用于修饰不可改变内容。   

- final ： 不可改变。可以用于修饰类、方法和变量。 
  - 类：被修饰的类，不能被继承。 
  - 方法：被修饰的方法，不能被重写。
  - 变量：被修饰的变量，不能被重新赋值。 

## 1.2  使用方式  

### 修饰类  

格式如下：  

```java
final class 类名 {
 
}
```  

查询 API发现像  `public final class String` 、 `public final class Math` 、 `public final class Scanner`
等，很多我们学习过的类，都是被final修饰的，目的就是供我们使用，而不让我们所以改变其内容。  

### 修饰方法  

格式如下：  
```java
修饰符 final 返回值类型 方法名(参数列表){
    //方法体
}
```
重写被  `final` 修饰的方法，编译时就会报错。  

### 修饰变量 

1. 局部变量——基本类型  

基本类型的局部变量，被final修饰后，只能赋值一次，不能再更改。代码如下：  

```java
public class FinalDemo1 {
    public static void main(String[] args) {
        // 声明变量，使用final修饰
        final int a;
        // 第一次赋值
        a = 10;
        // 第二次赋值
        a = 20; // 报错,不可重新赋值
        // 声明变量，直接赋值，使用final修饰
        final int b = 10;
        // 第二次赋值
        b = 20; // 报错,不可重新赋值
    }
}
```

思考，如下两种写法，哪种可以通过编译？  

写法1：  
```java
final int c = 0;
for (int i = 0; i < 10; i++) {
    c = i;
    System.out.println(c);
}
```  

写法2：
```java
for (int i = 0; i < 10; i++) {
    final int c = i;
    System.out.println(c);
}
```  

根据  `final` 的定义，写法1报错！写法2，为什么通过编译呢？因为每次循环，都是一次新的变量c。这也是大家
需要注意的地方。
 
2. 局部变量——引用类型  

引用类型的局部变量，被final修饰后，只能指向一个对象，地址不能再更改。但是不影响对象内部的成员变量值的
修改，代码如下：  

```java
public class FinalDemo2 {
    public static void main(String[] args) {
        // 创建 User 对象
        final   User u = new User();
        // 创建 另一个 User对象
        u = new User(); // 报错，指向了新的对象，地址值改变。
        // 调用setName方法
        u.setName("张三"); // 可以修改
    }
}
```  

3. 成员变量   

成员变量涉及到初始化的问题，初始化方式有两种，只能二选一：  

- 显示初始化；  

```java
public class User {
    final String USERNAME = "张三";
    private int age;
}
```

- 构造方法初始化。  

```java
public class User {
    final String USERNAME ;
    private int age;
    public User(String username, int age) {
        this.USERNAME = username;
        this.age = age;
    }
}
```

> 被final修饰的常量名称，一般都有书写规范，所有字母都大写。 

# 第二章 权限修饰符 

## 2.1  概述  
 
在Java中提供了四种访问权限，使用不同的访问权限修饰符修饰时，被修饰的内容会有不同的访问权限， 

- public ：公共的。 
- protected ：受保护的  
- default ：默认的
- private ：私有的  

## 2.2  不同权限的访问能力   

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%9D%83%E9%99%90%E4%BF%AE%E9%A5%B0%E7%AC%A601.png) 

可见，public具有最大权限。private则是最小权限。 

编写代码时，如果没有特殊的考虑，建议这样使用权限： 

- 成员变量使用 `private` ，隐藏细节。
- 构造方法使用 `public` ，方便创建对象。
- 成员方法使用 `public` ，方便调用方法。

> 小贴士：不加权限修饰符，其访问能力与default修饰符相同 

# 第三章 内部类  

## 1.1  概述 

### 什么是内部类  
将一个类A定义在另一个类B里面，里面的那个类A就称为内部类，B则称为外部类。 

### 成员内部类  

成员内部类 ：定义在类中方法外的类。

定义格式：

```java
class 外部类 {
    class 内部类{
    }
}
``` 

在描述事物时，若一个事物内部还包含其他事物，就可以使用内部类这种结构。比如，汽车类` Car` 中包含发动机
类 `Engine` ，这时， `Engine` 就可以使用内部类来描述，定义在成员位置。

代码举例：

```java
class Car { //外部类
    class Engine { //内部类
    }
}
```  

### 访问特点  

- 内部类可以直接访问外部类的成员，包括私有成员。 
- 外部类要访问内部类的成员，必须要建立内部类的对象。 

创建内部类对象格式：  

```java
外部类名.内部类名 对象名 = new 外部类型().new 内部类型()；
```  

访问演示，代码如下：  

定义类：  

```java
public class Person {
    private  boolean live = true;
    class Heart {
        public void jump() {
            // 直接访问外部类成员
            if (live) {
                System.out.println("心脏在跳动");
            } else {
                System.out.println("心脏不跳了");
            }
        }
    }
    public boolean isLive() {
        return live;
    }
    public void setLive(boolean live) {
        this.live = live;
    }
}
```  

定义测试类：  
```java
public class InnerDemo {
    public static void main(String[] args) {
        // 创建外部类对象
        Person p  = new Person();
        // 创建内部类对象
        Heart heart = p.new Heart();
        // 调用内部类方法
        heart.jump();
        // 调用外部类方法
        p.setLive(false);
        // 调用内部类方法
        heart.jump();
    }
}
输出结果:
心脏在跳动
心脏不跳了

```

> 内部类仍然是一个独立的类，在编译之后会内部类会被编译成独立的 .class文件，但是前面冠以外部类的类名
和$符号 。
> 比如，Person$Heart.class  

## 1.2  匿名内部类【重点】  

- `匿名内部类` ：是内部类的简化写法。它的本质是一个 `带具体实现的` `父类或者父接口的` `匿名的` **子类对象**。
开发中，最常用到的内部类就是匿名内部类了。以接口举例，当你使用一个接口时，似乎得做如下几步操作，

- 1. 定义子类 
- 2. 重写接口中的方法 
- 3. 创建子类对象 
- 4. 调用重写后的方法 

我们的目的，最终只是为了调用方法，那么能不能简化一下，把以上四步合成一步呢？匿名内部类就是做这样的快
捷方式。 

### 前提 

匿名内部类必须`继承一个父类`或者`实现一个父接口`。 

### 格式 

```java
new 父类名或者接口名(){
    // 方法重写
    @Override
    public void method() {
        // 执行语句
    }
};
```  

### 使用方式  

以接口为例，匿名内部类的使用，代码如下：

定义接口：

```java
public abstract class FlyAble{
    public abstract void fly();
}
```

创建匿名内部类，并调用：  

```java
public class InnerDemo {
    public static void main(String[] args) {
        /*
        1.等号右边:是匿名内部类，定义并创建该接口的子类对象
        2.等号左边:是多态赋值,接口类型引用指向子类对象
        */
        FlyAble  f = new FlyAble(){
            public void fly() {
                System.out.println("我飞了~~~");
            }
        };
        //调用 fly方法,执行重写后的方法
        f.fly();
    }
}
```

通常在方法的形式参数是接口或者抽象类时，也可以将匿名内部类作为参数传递。代码如下： 

```java
public class InnerDemo2 {
    public static void main(String[] args) {
        /*
        1.等号右边:定义并创建该接口的子类对象
        2.等号左边:是多态,接口类型引用指向子类对象
       */
        FlyAble  f = new FlyAble(){
            public void fly() {
                System.out.println("我飞了~~~");
            }
        };
        // 将f传递给showFly方法中
        showFly(f);
    }
    public static void showFly(FlyAble f) {
        f.fly();
    }
}
```

以上两步，也可以简化为一步，代码如下： 

```java
public class InnerDemo3 {
      public static void main(String[] args) {           
        /*
       创建匿名内部类,直接传递给showFly(FlyAble f) 
        */
        showFly( new FlyAble(){
            public void fly() {
                System.out.println("我飞了~~~");
            }
        });
    }
    public static void showFly(FlyAble f) {
        f.fly();
    }
}
``` 

# 第四章 引用类型用法总结 

实际的开发中，引用类型的使用非常重要，也是非常普遍的。我们可以在理解基本类型的使用方式基础上，进一步
去掌握引用类型的使用方式。基本类型可以作为成员变量、作为方法的参数、作为方法的返回值，那么当然引用类
型也是可以的。


## 4.1 class 作为成员变量 

在定义一个类Role（游戏角色）时，代码如下： 

```java
class Role {
   int id; // 角色id  
   int blood; // 生命值  
   String name; // 角色名称  
}
```

使用 `int` 类型表示 角色id和生命值，使用 `String` 类型表示姓名。此时， `String` 本身就是引用类型，由于使用
的方式类似常量，所以往往忽略了它是引用类型的存在。如果我们继续丰富这个类的定义，给 `Role` 增加武器，穿
戴装备等属性，我们将如何编写呢？

定义武器类，将增加攻击能力：

```java
class Weapon {
  String name； // 武器名称   
    int hurt； // 伤害值
}
```

定义穿戴盔甲类，将增加防御能力，也就是提升生命值： 

```java
class Armour {
   String name；// 装备名称  
    int protect；// 防御值 
}
```  

定义角色类： 

```java
class Role {
    int id；
    int blood；
    String name；
    // 添加武器属性
    Weapon wp；
    // 添加盔甲属性
    Armour ar；
    // 提供get/set方法
    public Weapon getWp() {
        return wp;
    }
    public void setWeapon(Weapon wp) {
        this.wp = wp;
    }
    public Armour getArmour() {
        return ar;
    }
    public void setArmour(Armour ar) {
        this.ar = ar;
    }
    // 攻击方法
    public void attack(){
        System.out.println("使用"+ wp.getName() +", 造成"+wp.getHurt()+"点伤害"); 
    }
    // 穿戴盔甲
    public void wear(){
        // 增加防御,就是增加blood值
        this.blood += ar.getProtect();
        System.out.println("穿上"+ar.getName()+", 生命值增加"+ar.getProtect());
    } 
}
``` 

测试类：  

```java
public class Test {
   public static void main(String[] args) {  
     // 创建Weapon 对象     
       Weapon wp = new Weapon("屠龙刀" , 999999);        
       // 创建Armour 对象  
       Armour ar = new Armour("麒麟甲",10000);  
       // 创建Role 对象  
       Role r = new Role();        
       
       // 设置武器属性  
       r.setWeapon(wp);   
       // 设置盔甲属性      
       r.setArmour(ar);  
     
       // 攻击  
       r.attack();  
        // 穿戴盔甲
       r.wear();  
   }  
}
输出结果:
使用屠龙刀,造成999999点伤害
穿上麒麟甲 ,生命值增加10000
```

> 类作为成员变量时，对它进行赋值的操作，实际上，是赋给它该类的一个对象。

## 4.2 interface 作为成员变量 

接口是对方法的封装，对应游戏当中，可以看作是扩展游戏角色的技能。所以，如果想扩展更强大技能，我们在`Role` 中，可以增加接口作为成员变量，来设置不同的技能。

定义接口：

```java
// 法术攻击
public interface FaShuSkill {
    public abstract void faShuAttack();
}
```

定义角色类：

```java
public class Role {
    FaShuSkill fs;
    public void setFaShuSkill(FaShuSkill fs) {
        this.fs = fs;
    }
    // 法术攻击
    public void faShuSkillAttack(){
        System.out.print("发动法术攻击:");
        fs.faShuAttack();
        System.out.println("攻击完毕");
    }
}
```

定义测试类：

```java
public class Test {
    public static void main(String[] args) {
        // 创建游戏角色
        Role role = new Role();
        // 设置角色法术技能
        role.setFaShuSkill(new FaShuSkill() {
              public void faShuAttack() {
                System.out.println("纵横天下");
            }
        });
        // 发动法术攻击
        role.faShuSkillAttack();
        // 更换技能
        role.setFaShuSkill(new FaShuSkill() {
            @Override
            public void faShuAttack() {
                System.out.println("逆转乾坤");
            }
        });
        // 发动法术攻击
        role.faShuSkillAttack();
    }    
}
输出结果:
发动法术攻击:纵横天下
攻击完毕
发动法术攻击:逆转乾坤
攻击完毕
```

>我们使用一个接口，作为成员变量，以便随时更换技能，这样的设计更为灵活，增强了程序的扩展性。
>接口作为成员变量时，对它进行赋值的操作，实际上，是赋给它该接口的一个子类对象。

## 4.3 interface 作为方法参数和返回值类型 

当接口作为方法的参数时,需要传递什么呢？当接口作为方法的返回值类型时，需要返回什么呢？对，其实都是它的
子类对象。  `ArrayList` 类我们并不陌生，查看API我们发现，实际上，它是  `java.util.List` 接口的实现类。所
以，当我们看见 `List` 接口作为参数或者返回值类型时，当然可以将 `ArrayList` 的对象进行传递或返回。

请观察如下方法：获取某集合中所有的偶数。

定义方法：

```java
public static List<Integer> getEvenNum(List<Integer> list) {
    // 创建保存偶数的集合
    ArrayList<Integer> evenList = new ArrayList<>();
    // 遍历集合list,判断元素为偶数,就添加到evenList中
    for (int i = 0; i < list.size(); i++) {
        Integer integer = list.get(i);
        if (integer % 2 == 0) {
            evenList.add(integer);
        }
    }
    /*
   返回偶数集合 
   因为getEvenNum方法的返回值类型是List,而ArrayList是List的子类, 
   所以evenList可以返回 
   */  
    return evenList;
}
```  

调用方法：  

```java
public class Test {
    public static void main(String[] args) {
        // 创建ArrayList集合,并添加数字
        ArrayList<Integer> srcList = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            srcList.add(i);
        }
        /*
       获取偶数集合  
       因为getEvenNum方法的参数是List,而ArrayList是List的子类,  
       所以srcList可以传递  
       */  
        List list = getEvenNum(srcList);
        System.out.println(list);
    }
}
```

> 接口作为参数时，传递它的子类对象。
> 接口作为返回值类型时，返回它的子类对象。 


# day12 【Object类、Date类、Calendar类、System类、StringBuilder类、基本类型包装类】

## 主要内容

* Object类
* Date类
* DateFormat类
* Calendar类
* System类
* StringBuilder类
* 包装类

## 学习目标

-[ ] 能够说出Object类的特点
-[ ] 能够重写Object类的toString方法
-[ ] 能够重写Object类的equals方法
-[ ] 能够使用日期类输出当前日期
-[ ] 能够使用将日期格式化为字符串的方法
-[ ] 能够使用将字符串转换成日期的方法
-[ ] 能够使用System类的数组复制方法
-[ ] 能够使用System类获取当前毫秒时刻值
-[ ] 能够说出使用StringBuilder类可以解决的问题
-[ ] 能够使用StringBuilder进行字符串拼接操作
-[ ] 能够说出8种基本类型对应的包装类名称
-[ ] 能够说出自动装箱、自动拆箱的概念
-[ ] 能够将字符串转换为对应的基本类型
-[ ] 能够将基本类型转换为对应的字符串

# 第一章 Object类

## 1.1 概述

`java.lang.Object`类是Java语言中的根类，即所有类的父类。它中描述的所有方法子类都可以使用。在对象实例化的时候，最终找的父类就是Object。

如果一个类没有特别指定父类，	那么默认则继承自Object类。例如：

```java
public class MyClass /*extends Object*/ {
  	// ...
}
```

根据JDK源代码及Object类的API文档，Object类当中包含的方法有11个。今天我们主要学习其中的2个：

* `public String toString()`：返回该对象的字符串表示。
* `public boolean equals(Object obj)`：指示其他某个对象是否与此对象“相等”。

## 1.2 toString方法

### 方法摘要

* `public String toString()`：返回该对象的字符串表示。

toString方法返回该对象的字符串表示，其实该字符串内容就是对象的类型+@+内存地址值。

由于toString方法返回的结果是内存地址，而在开发中，经常需要按照对象的属性得到相应的字符串表现形式，因此也需要重写它。

### 覆盖重写

如果不希望使用toString方法的默认行为，则可以对它进行覆盖重写。例如自定义的Person类：

```java
public class Person {  
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
    }

    // 省略构造器与Getter Setter
}
```

在IntelliJ IDEA中，可以点击`Code`菜单中的`Generate...`，也可以使用快捷键`alt+insert`，点击`toString()`选项。选择需要包含的成员变量并确定。如下图所示：

<!-- ![toString方法的自动重写](img\toString方法的自动重写.bmp) -->

> 小贴士： 在我们直接使用输出语句输出对象名的时候,其实通过该对象调用了其toString()方法。
>

## 1.3 equals方法

### 方法摘要

* `public boolean equals(Object obj)`：指示其他某个对象是否与此对象“相等”。

调用成员方法equals并指定参数为另一个对象，则可以判断这两个对象是否是相同的。这里的“相同”有默认和自定义两种方式。

### 默认地址比较

如果没有覆盖重写equals方法，那么Object类中默认进行`==`运算符的对象地址比较，只要不是同一个对象，结果必然为false。

### 对象内容比较

如果希望进行对象的内容比较，即所有或指定的部分成员变量相同就判定两个对象相同，则可以覆盖重写equals方法。例如：

```java
import java.util.Objects;

public class Person {	
	private String name;
	private int age;
	
    @Override
    public boolean equals(Object o) {
        // 如果对象地址一样，则认为相同
        if (this == o)
            return true;
        // 如果参数为空，或者类型信息不一样，则认为不同
        if (o == null || getClass() != o.getClass())
            return false;
        // 转换为当前类型
        Person person = (Person) o;
        // 要求基本类型相等，并且将引用类型交给java.util.Objects类的equals静态方法取用结果
        return age == person.age && Objects.equals(name, person.name);
    }
}
```

这段代码充分考虑了对象为空、类型一致等问题，但方法内容并不唯一。大多数IDE都可以自动生成equals方法的代码内容。在IntelliJ IDEA中，可以使用`Code`菜单中的`Generate…`选项，也可以使用快捷键`alt+insert`，并选择`equals() and hashCode()`进行自动代码生成。如下图所示：

![](img\equals方法1.png)

![](img\equals方法2.png)

![](img\equals方法3.png)

> tips：Object类当中的hashCode等其他方法，今后学习。

## 1.4 Objects类

在刚才IDEA自动重写equals代码中，使用到了`java.util.Objects`类，那么这个类是什么呢？

在**JDK7**添加了一个Objects工具类，它提供了一些方法来操作对象，它由一些静态的实用方法组成，这些方法是null-save（空指针安全的）或null-tolerant（容忍空指针的），用于计算对象的hashcode、返回对象的字符串表示形式、比较两个对象。

在比较两个对象的时候，Object的equals方法容易抛出空指针异常，而Objects类中的equals方法就优化了这个问题。方法如下：

* `public static boolean equals(Object a, Object b)`:判断两个对象是否相等。

我们可以查看一下源码，学习一下：

~~~java
public static boolean equals(Object a, Object b) {  
    return (a == b) || (a != null && a.equals(b));  
}
~~~

# 第二章 日期时间类

## 2.1 Date类

### 概述

` java.util.Date`类 表示特定的瞬间，精确到毫秒。

继续查阅Date类的描述，发现Date拥有多个构造函数，只是部分已经过时，但是其中有未过时的构造函数可以把毫秒值转成日期对象。

- `public Date()`：分配Date对象并初始化此对象，以表示分配它的时间（精确到毫秒）。
- `public Date(long date)`：分配Date对象并初始化此对象，以表示自从标准基准时间（称为“历元（epoch）”，即1970年1月1日00:00:00 GMT）以来的指定毫秒数。

> tips: 由于我们处于东八区，所以我们的基准时间为1970年1月1日8时0分0秒。

简单来说：使用无参构造，可以自动设置当前系统时间的毫秒时刻；指定long类型的构造参数，可以自定义毫秒时刻。例如：

```java
import java.util.Date;

public class Demo01Date {
    public static void main(String[] args) {
        // 创建日期对象，把当前的时间
        System.out.println(new Date()); // Tue Jan 16 14:37:35 CST 2018
        // 创建日期对象，把当前的毫秒值转成日期对象
        System.out.println(new Date(0L)); // Thu Jan 01 08:00:00 CST 1970
    }
}
```

> tips:在使用println方法时，会自动调用Date类中的toString方法。Date类对Object类中的toString方法进行了覆盖重写，所以结果为指定格式的字符串。
>

### 常用方法

Date类中的多数方法已经过时，常用的方法有：

* `public long getTime()` 把日期对象转换成对应的时间毫秒值。

## 2.2 DateFormat类

`java.text.DateFormat` 是日期/时间格式化子类的抽象类，我们通过这个类可以帮我们完成日期和文本之间的转换,也就是可以在Date对象与String对象之间进行来回转换。

* **格式化**：按照指定的格式，从Date对象转换为String对象。
* **解析**：按照指定的格式，从String对象转换为Date对象。

### 构造方法

由于DateFormat为抽象类，不能直接使用，所以需要常用的子类`java.text.SimpleDateFormat`。这个类需要一个模式（格式）来指定格式化或解析的标准。构造方法为：

* `public SimpleDateFormat(String pattern)`：用给定的模式和默认语言环境的日期格式符号构造SimpleDateFormat。

参数pattern是一个字符串，代表日期时间的自定义格式。

### 格式规则

常用的格式规则为：

| 标识字母（区分大小写） | 含义   |
| ----------- | ---- |
| y           | 年    |
| M           | 月    |
| d           | 日    |
| H           | 时    |
| m           | 分    |
| s           | 秒    |

> 备注：更详细的格式规则，可以参考SimpleDateFormat类的API文档0。

创建SimpleDateFormat对象的代码如：

```java
import java.text.DateFormat;
import java.text.SimpleDateFormat;

public class Demo02SimpleDateFormat {
    public static void main(String[] args) {
        // 对应的日期格式如：2018-01-16 15:06:38
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    }    
}
```

### 常用方法

DateFormat类的常用方法有：

- `public String format(Date date)`：将Date对象格式化为字符串。
- `public Date parse(String source)`：将字符串解析为Date对象。

#### format方法

使用format方法的代码为：

```java
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
/*
 把Date对象转换成String
*/
public class Demo03DateFormatMethod {
    public static void main(String[] args) {
        Date date = new Date();
        // 创建日期格式化对象,在获取格式化对象时可以指定风格
        DateFormat df = new SimpleDateFormat("yyyy年MM月dd日");
        String str = df.format(date);
        System.out.println(str); // 2008年1月23日
    }
}
```

#### parse方法

使用parse方法的代码为：

```java
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
/*
 把String转换成Date对象
*/
public class Demo04DateFormatMethod {
    public static void main(String[] args) throws ParseException {
        DateFormat df = new SimpleDateFormat("yyyy年MM月dd日");
        String str = "2018年12月11日";
        Date date = df.parse(str);
        System.out.println(date); // Tue Dec 11 00:00:00 CST 2018
    }
}
```

## 2.3 练习

请使用日期时间相关的API，计算出一个人已经出生了多少天。

**思路：**

1.获取当前时间对应的毫秒值

2.获取自己出生日期对应的毫秒值

3.两个时间相减（当前时间– 出生日期）

**代码实现：**

```java
public static void function() throws Exception {
	System.out.println("请输入出生日期 格式 YYYY-MM-dd");
	// 获取出生日期,键盘输入
	String birthdayString = new Scanner(System.in).next();
	// 将字符串日期,转成Date对象
	// 创建SimpleDateFormat对象,写日期模式
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	// 调用方法parse,字符串转成日期对象
	Date birthdayDate = sdf.parse(birthdayString);	
	// 获取今天的日期对象
	Date todayDate = new Date();	
	// 将两个日期转成毫秒值,Date类的方法getTime
	long birthdaySecond = birthdayDate.getTime();
	long todaySecond = todayDate.getTime();
	long secone = todaySecond-birthdaySecond;	
	if (secone < 0){
		System.out.println("还没出生呢");
	} else {
		System.out.println(secone/1000/60/60/24);
	}
}
```

## 2.4 Calendar类

###  概念

日历我们都见过

![](img\日历.jpg)

`java.util.Calendar`是日历类，在Date后出现，替换掉了许多Date的方法。该类将所有可能用到的时间信息封装为静态成员变量，方便获取。日历类就是方便获取各个时间属性的。

### 获取方式

Calendar为抽象类，由于语言敏感性，Calendar类在创建对象时并非直接创建，而是通过静态方法创建，返回子类对象，如下：

Calendar静态方法

* `public static Calendar getInstance()`：使用默认时区和语言环境获得一个日历

例如：

```java
import java.util.Calendar;

public class Demo06CalendarInit {
    public static void main(String[] args) {
        Calendar cal = Calendar.getInstance();
    }    
}
```

### 常用方法

根据Calendar类的API文档，常用方法有：

- `public int get(int field)`：返回给定日历字段的值。
- `public void set(int field, int value)`：将给定的日历字段设置为给定值。
- `public abstract void add(int field, int amount)`：根据日历的规则，为给定的日历字段添加或减去指定的时间量。
- `public Date getTime()`：返回一个表示此Calendar时间值（从历元到现在的毫秒偏移量）的Date对象。

Calendar类中提供很多成员常量，代表给定的日历字段：

| 字段值          | 含义                   |
| ------------ | -------------------- |
| YEAR         | 年                    |
| MONTH        | 月（从0开始，可以+1使用）       |
| DAY_OF_MONTH | 月中的天（几号）             |
| HOUR         | 时（12小时制）             |
| HOUR_OF_DAY  | 时（24小时制）             |
| MINUTE       | 分                    |
| SECOND       | 秒                    |
| DAY_OF_WEEK  | 周中的天（周几，周日为1，可以-1使用） |

#### get/set方法

get方法用来获取指定字段的值，set方法用来设置指定字段的值，代码使用演示：

```java
import java.util.Calendar;

public class CalendarUtil {
    public static void main(String[] args) {
        // 创建Calendar对象
        Calendar cal = Calendar.getInstance();
        // 设置年 
        int year = cal.get(Calendar.YEAR);
        // 设置月
        int month = cal.get(Calendar.MONTH) + 1;
        // 设置日
        int dayOfMonth = cal.get(Calendar.DAY_OF_MONTH);
        System.out.print(year + "年" + month + "月" + dayOfMonth + "日");
    }    
}
```

```java
import java.util.Calendar;

public class Demo07CalendarMethod {
    public static void main(String[] args) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.YEAR, 2020);
        System.out.print(year + "年" + month + "月" + dayOfMonth + "日"); // 2020年1月17日
    }
}
```

#### add方法

add方法可以对指定日历字段的值进行加减操作，如果第二个参数为正数则加上偏移量，如果为负数则减去偏移量。代码如：

```java
import java.util.Calendar;

public class Demo08CalendarMethod {
    public static void main(String[] args) {
        Calendar cal = Calendar.getInstance();
        System.out.print(year + "年" + month + "月" + dayOfMonth + "日"); // 2018年1月17日
        // 使用add方法
        cal.add(Calendar.DAY_OF_MONTH, 2); // 加2天
        cal.add(Calendar.YEAR, -3); // 减3年
        System.out.print(year + "年" + month + "月" + dayOfMonth + "日"); // 2015年1月18日; 
    }
}
```

#### getTime方法

Calendar中的getTime方法并不是获取毫秒时刻，而是拿到对应的Date对象。

```java
import java.util.Calendar;
import java.util.Date;

public class Demo09CalendarMethod {
    public static void main(String[] args) {
        Calendar cal = Calendar.getInstance();
        Date date = cal.getTime();
        System.out.println(date); // Tue Jan 16 16:03:09 CST 2018
    }
}
```

> 小贴士：
>
> ​     西方星期的开始为周日，中国为周一。
>
> ​     在Calendar类中，月份的表示是以0-11代表1-12月。
>
> ​     日期是有大小关系的，时间靠后，时间越大。
>

# 第三章 System类

`java.lang.System`类中提供了大量的静态方法，可以获取与系统相关的信息或系统级操作，在System类的API文档中，常用的方法有：

- `public static long currentTimeMillis()`：返回以毫秒为单位的当前时间。
- `public static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)`：将数组中指定的数据拷贝到另一个数组中。

## 3.1 currentTimeMillis方法

实际上，currentTimeMillis方法就是 获取当前系统时间与1970年01月01日00:00点之间的毫秒差值

```java
import java.util.Date;

public class SystemDemo {
    public static void main(String[] args) {
       	//获取当前时间毫秒值
        System.out.println(System.currentTimeMillis()); // 1516090531144
    }
}
```

### 练习

验证for循环打印数字1-9999所需要使用的时间（毫秒）

~~~java
public class SystemTest1 {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        for (int i = 0; i < 10000; i++) {
            System.out.println(i);
        }
        long end = System.currentTimeMillis();
        System.out.println("共耗时毫秒：" + (end - start));
    }
}
~~~

## 3.2 arraycopy方法

* `public static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)`：将数组中指定的数据拷贝到另一个数组中。

数组的拷贝动作是系统级的，性能很高。System.arraycopy方法具有5个参数，含义分别为：

| 参数序号 | 参数名称    | 参数类型   | 参数含义       |
| ---- | ------- | ------ | ---------- |
| 1    | src     | Object | 源数组        |
| 2    | srcPos  | int    | 源数组索引起始位置  |
| 3    | dest    | Object | 目标数组       |
| 4    | destPos | int    | 目标数组索引起始位置 |
| 5    | length  | int    | 复制元素个数     |

### 练习

将src数组中前3个元素，复制到dest数组的前3个位置上复制元素前：src数组元素[1,2,3,4,5]，dest数组元素[6,7,8,9,10]复制元素后：src数组元素[1,2,3,4,5]，dest数组元素[1,2,3,9,10]

```java
import java.util.Arrays;

public class Demo11SystemArrayCopy {
    public static void main(String[] args) {
        int[] src = new int[]{1,2,3,4,5};
        int[] dest = new int[]{6,7,8,9,10};
        System.arraycopy( src, 0, dest, 0, 3);
        /*代码运行后：两个数组中的元素发生了变化
         src数组元素[1,2,3,4,5]
         dest数组元素[1,2,3,9,10]
        */
    }
}
```

# 第四章 StringBuilder类

## 4.1 字符串拼接问题

由于String类的对象内容不可改变，所以每当进行字符串拼接时，总是会在内存中创建一个新的对象。例如：

~~~java
public class StringDemo {
    public static void main(String[] args) {
        String s = "Hello";
        s += "World";
        System.out.println(s);
    }
}
~~~

在API中对String类有这样的描述：字符串是常量，它们的值在创建后不能被更改。

根据这句话分析我们的代码，其实总共产生了三个字符串，即`"Hello"`、`"World"`和`"HelloWorld"`。引用变量s首先指向`Hello`对象，最终指向拼接出来的新字符串对象，即`HelloWord` 。

![](img\String拼接问题.bmp)

由此可知，如果对字符串进行拼接操作，每次拼接，都会构建一个新的String对象，既耗时，又浪费空间。为了解决这一问题，可以使用`java.lang.StringBuilder`类。

## 4.2 StringBuilder概述

查阅`java.lang.StringBuilder`的API，StringBuilder又称为可变字符序列，它是一个类似于 String 的字符串缓冲区，通过某些方法调用可以改变该序列的长度和内容。

原来StringBuilder是个字符串的缓冲区，即它是一个容器，容器中可以装很多字符串。并且能够对其中的字符串进行各种操作。

它的内部拥有一个数组用来存放字符串内容，进行字符串拼接时，直接在数组中加入新内容。StringBuilder会自动维护数组的扩容。原理如下图所示：(默认16字符空间，超过自动扩充)

![06-StringBuilder的原理](img\06-StringBuilder的原理.png)

## 4.3 构造方法

根据StringBuilder的API文档，常用构造方法有2个：

- `public StringBuilder()`：构造一个空的StringBuilder容器。
- `public StringBuilder(String str)`：构造一个StringBuilder容器，并将字符串添加进去。

```java
public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb1 = new StringBuilder();
        System.out.println(sb1); // (空白)
        // 使用带参构造
        StringBuilder sb2 = new StringBuilder("itcast");
        System.out.println(sb2); // itcast
    }
}
```

## 4.4 常用方法

StringBuilder常用的方法有2个：

- `public StringBuilder append(...)`：添加任意类型数据的字符串形式，并返回当前对象自身。
- `public String toString()`：将当前StringBuilder对象转换为String对象。

### append方法

append方法具有多种重载形式，可以接收任意类型的参数。任何数据作为参数都会将对应的字符串内容添加到StringBuilder中。例如：

```java
public class Demo02StringBuilder {
	public static void main(String[] args) {
		//创建对象
		StringBuilder builder = new StringBuilder();
		//public StringBuilder append(任意类型)
		StringBuilder builder2 = builder.append("hello");
		//对比一下
		System.out.println("builder:"+builder);
		System.out.println("builder2:"+builder2);
		System.out.println(builder == builder2); //true
	    // 可以添加 任何类型
		builder.append("hello");
		builder.append("world");
		builder.append(true);
		builder.append(100);
		// 在我们开发中，会遇到调用一个方法后，返回一个对象的情况。然后使用返回的对象继续调用方法。
        // 这种时候，我们就可以把代码现在一起，如append方法一样，代码如下
		//链式编程
		builder.append("hello").append("world").append(true).append(100);
		System.out.println("builder:"+builder);
	}
}
```

> 备注：StringBuilder已经覆盖重写了Object当中的toString方法。

### toString方法

通过toString方法，StringBuilder对象将会转换为不可变的String对象。如：

```java
public class Demo16StringBuilder {
    public static void main(String[] args) {
        // 链式创建
        StringBuilder sb = new StringBuilder("Hello").append("World").append("Java");
        // 调用方法
        String str = sb.toString();
        System.out.println(str); // HelloWorldJava
    }
}
```

# 第五章 包装类

## 5.1 概述

Java提供了两个类型系统，基本类型与引用类型，使用基本类型在于效率，然而很多情况，会创建对象使用，因为对象可以做更多的功能，如果想要我们的基本类型像对象一样操作，就可以使用基本类型对应的包装类，如下：

| 基本类型    | 对应的包装类（位于java.lang包中） |
| ------- | --------------------- |
| byte    | Byte                  |
| short   | Short                 |
| int     | **Integer**           |
| long    | Long                  |
| float   | Float                 |
| double  | Double                |
| char    | **Character**         |
| boolean | Boolean               |

## 5.2 装箱与拆箱

基本类型与对应的包装类对象之间，来回转换的过程称为”装箱“与”拆箱“：

* **装箱**：从基本类型转换为对应的包装类对象。

* **拆箱**：从包装类对象转换为对应的基本类型。

用Integer与 int为例：（看懂代码即可）

基本数值---->包装对象

~~~java
Integer i = new Integer(4);//使用构造函数函数
Integer iii = Integer.valueOf(4);//使用包装类中的valueOf方法
~~~

包装对象---->基本数值

~~~java
int num = i.intValue();
~~~
## 5.3自动装箱与自动拆箱

由于我们经常要做基本类型与包装类之间的转换，从Java 5（JDK 1.5）开始，基本类型与包装类的装箱、拆箱动作可以自动完成。例如：

```java
Integer i = 4;//自动装箱。相当于Integer i = Integer.valueOf(4);
i = i + 5;//等号右边：将i对象转成基本数值(自动拆箱) i.intValue() + 5;
//加法运算完成后，再次装箱，把基本数值转成对象。
```

## 5.3 基本类型与字符串之间的转换

### 基本类型转换为String

   基本类型转换String总共有三种方式，查看课后资料可以得知，这里只讲最简单的一种方式： 

~~~
基本类型直接与””相连接即可；如：34+""
~~~

String转换成对应的基本类型 

除了Character类之外，其他所有包装类都具有parseXxx静态方法可以将字符串参数转换为对应的基本类型：

- `public static byte parseByte(String s)`：将字符串参数转换为对应的byte基本类型。
- `public static short parseShort(String s)`：将字符串参数转换为对应的short基本类型。
- `public static int parseInt(String s)`：将字符串参数转换为对应的int基本类型。
- `public static long parseLong(String s)`：将字符串参数转换为对应的long基本类型。
- `public static float parseFloat(String s)`：将字符串参数转换为对应的float基本类型。
- `public static double parseDouble(String s)`：将字符串参数转换为对应的double基本类型。
- `public static boolean parseBoolean(String s)`：将字符串参数转换为对应的boolean基本类型。

代码使用（仅以Integer类的静态方法parseXxx为例）如：

```java
public class Demo18WrapperParse {
    public static void main(String[] args) {
        int num = Integer.parseInt("100");
    }
}
```

> 注意:如果字符串参数的内容无法正确转换为对应的基本类型，则会抛出`java.lang.NumberFormatException`异常。
>


# day13 【Collection、泛型】

## 主要内容

- Collection集合
- 迭代器
- 增强for
- 泛型

## 教学目标

- [ ] 能够说出集合与数组的区别
- [ ] 说出Collection集合的常用功能
- [ ] 能够使用迭代器对集合进行取元素
- [ ] 能够说出集合的使用细节
- [ ] 能够使用集合存储自定义类型
- [ ] 能够使用foreach循环遍历集合
- [ ] 能够使用泛型定义集合对象
- [ ] 能够理解泛型上下限
- [ ] 能够阐述泛型通配符的作用



# 第一章 Collection集合

## 1.1 集合概述

在前面基础班我们已经学习过并使用过集合ArrayList<E> ,那么集合到底是什么呢?

* **集合**：集合是java中提供的一种容器，可以用来存储多个数据。

集合和数组既然都是容器，它们有啥区别呢？

* 数组的长度是固定的。集合的长度是可变的。
* 数组中存储的是同一类型的元素，可以存储基本数据类型值。集合存储的都是对象。而且对象的类型可以不一致。在开发中一般当对象多的时候，使用集合进行存储。

## 1.2  集合框架

JAVASE提供了满足各种需求的API，在使用这些API前，先了解其继承与接口操作架构，才能了解何时采用哪个类，以及类之间如何彼此合作，从而达到灵活应用。

集合按照其存储结构可以分为两大类，分别是单列集合`java.util.Collection`和双列集合`java.util.Map`，今天我们主要学习`Collection`集合，在day04时讲解`Map`集合。

* **Collection**：单列集合类的根接口，用于存储一系列符合某种规则的元素，它有两个重要的子接口，分别是`java.util.List`和`java.util.Set`。其中，`List`的特点是元素有序、元素可重复。`Set`的特点是元素无序，而且不可重复。`List`接口的主要实现类有`java.util.ArrayList`和`java.util.LinkedList`，`Set`接口的主要实现类有`java.util.HashSet`和`java.util.TreeSet`。

从上面的描述可以看出JDK中提供了丰富的集合类库，为了便于初学者进行系统地学习，接下来通过一张图来描述整个集合类的继承体系。

![](img\Collection集合体系图.png)

其中，橙色框里填写的都是接口类型，而蓝色框里填写的都是具体的实现类。这几天将针对图中所列举的集合类进行逐一地讲解。

集合本身是一个工具，它存放在java.util包中。在`Collection`接口定义着单列集合框架中最最共性的内容。

## 1.3 Collection 常用功能

Collection是所有单列集合的父接口，因此在Collection中定义了单列集合(List和Set)通用的一些方法，这些方法可用于操作所有的单列集合。方法如下：

* `public boolean add(E e)`：  把给定的对象添加到当前集合中 。
* `public void clear()` :清空集合中所有的元素。
* `public boolean remove(E e)`: 把给定的对象在当前集合中删除。
* `public boolean contains(E e)`: 判断当前集合中是否包含给定的对象。
* `public boolean isEmpty()`: 判断当前集合是否为空。
* `public int size()`: 返回集合中元素的个数。
* `public Object[] toArray()`: 把集合中的元素，存储到数组中。

方法演示：

~~~java
import java.util.ArrayList;
import java.util.Collection;

public class Demo1Collection {
    public static void main(String[] args) {
		// 创建集合对象 
    	// 使用多态形式
    	Collection<String> coll = new ArrayList<String>();
    	// 使用方法
    	// 添加功能  boolean  add(String s)
    	coll.add("小李广");
    	coll.add("扫地僧");
    	coll.add("石破天");
    	System.out.println(coll);

    	// boolean contains(E e) 判断o是否在集合中存在
    	System.out.println("判断  扫地僧 是否在集合中"+coll.contains("扫地僧"));

    	//boolean remove(E e) 删除在集合中的o元素
    	System.out.println("删除石破天："+coll.remove("石破天"));
    	System.out.println("操作之后集合中元素:"+coll);
    	
    	// size() 集合中有几个元素
		System.out.println("集合中有"+coll.size()+"个元素");

		// Object[] toArray()转换成一个Object数组
    	Object[] objects = coll.toArray();
    	// 遍历数组
    	for (int i = 0; i < objects.length; i++) {
			System.out.println(objects[i]);
		}

		// void  clear() 清空集合
		coll.clear();
		System.out.println("集合中内容为："+coll);
		// boolean  isEmpty()  判断是否为空
		System.out.println(coll.isEmpty());  	
	}
}
~~~

> tips: 有关Collection中的方法可不止上面这些，其他方法可以自行查看API学习。

## 第二章 Iterator迭代器

## 2.1 Iterator接口

在程序开发中，经常需要遍历集合中的所有元素。针对这种需求，JDK专门提供了一个接口`java.util.Iterator`。`Iterator`接口也是Java集合中的一员，但它与`Collection`、`Map`接口有所不同，`Collection`接口与`Map`接口主要用于存储元素，而`Iterator`主要用于迭代访问（即遍历）`Collection`中的元素，因此`Iterator`对象也被称为迭代器。

想要遍历Collection集合，那么就要获取该集合迭代器完成迭代操作，下面介绍一下获取迭代器的方法：

* `public Iterator iterator()`: 获取集合对应的迭代器，用来遍历集合中的元素的。

下面介绍一下迭代的概念：

* **迭代**：即Collection集合元素的通用获取方式。在取元素之前先要判断集合中有没有元素，如果有，就把这个元素取出来，继续在判断，如果还有就再取出出来。一直把集合中的所有元素全部取出。这种取出方式专业术语称为迭代。

Iterator接口的常用方法如下：

* `public E next()`:返回迭代的下一个元素。
* `public boolean hasNext()`:如果仍有元素可以迭代，则返回 true。

接下来我们通过案例学习如何使用Iterator迭代集合中元素：

~~~java
public class IteratorDemo {
  	public static void main(String[] args) {
        // 使用多态方式 创建对象
        Collection<String> coll = new ArrayList<String>();

        // 添加元素到集合
        coll.add("串串星人");
        coll.add("吐槽星人");
        coll.add("汪星人");
        //遍历
        //使用迭代器 遍历   每个集合对象都有自己的迭代器
        Iterator<String> it = coll.iterator();
        //  泛型指的是 迭代出 元素的数据类型
        while(it.hasNext()){ //判断是否有迭代元素
            String s = it.next();//获取迭代出的元素
            System.out.println(s);
        }
  	}
}
~~~

> tips:：在进行集合元素取出时，如果集合中已经没有元素了，还继续使用迭代器的next方法，将会发生java.util.NoSuchElementException没有集合元素的错误。

## 2.2 迭代器的实现原理

我们在之前案例已经完成了Iterator遍历集合的整个过程。当遍历集合时，首先通过调用t集合的iterator()方法获得迭代器对象，然后使用hashNext()方法判断集合中是否存在下一个元素，如果存在，则调用next()方法将元素取出，否则说明已到达了集合末尾，停止遍历元素。

Iterator迭代器对象在遍历集合时，内部采用指针的方式来跟踪集合中的元素，为了让初学者能更好地理解迭代器的工作原理，接下来通过一个图例来演示Iterator对象迭代元素的过程：

![](img\迭代器原理图.bmp)

在调用Iterator的next方法之前，迭代器的索引位于第一个元素之前，不指向任何元素，当第一次调用迭代器的next方法后，迭代器的索引会向后移动一位，指向第一个元素并将该元素返回，当再次调用next方法时，迭代器的索引会指向第二个元素并将该元素返回，依此类推，直到hasNext方法返回false，表示到达了集合的末尾，终止对元素的遍历。

## 2.3 增强for

增强for循环(也称for each循环)是**JDK1.5**以后出来的一个高级for循环，专门用来遍历数组和集合的。它的内部原理其实是个Iterator迭代器，所以在遍历的过程中，不能对集合中的元素进行增删操作。

格式：

~~~java
for(元素的数据类型  变量 : Collection集合or数组){ 
  	//写操作代码
}
~~~

它用于遍历Collection和数组。通常只进行遍历元素，不要在遍历的过程中对集合元素进行增删操作。

#### 练习1：遍历数组

~~~java
public class NBForDemo1 {
    public static void main(String[] args) {
		int[] arr = {3,5,6,87};
       	//使用增强for遍历数组
		for(int a : arr){//a代表数组中的每个元素
			System.out.println(a);
		}
	}
}
~~~

#### 练习2:遍历集合

~~~java
public class NBFor {
    public static void main(String[] args) {        
    	Collection<String> coll = new ArrayList<String>();
    	coll.add("小河神");
    	coll.add("老河神");
    	coll.add("神婆");
    	//使用增强for遍历
    	for(String s :coll){//接收变量s代表 代表被遍历到的集合元素
    		System.out.println(s);
    	}
	}
}
~~~

> tips: 新for循环必须有被遍历的目标。目标只能是Collection或者是数组。新式for仅仅作为遍历操作出现。

# 第三章 泛型

## 3.1  泛型概述

在前面学习集合时，我们都知道集合中是可以存放任意对象的，只要把对象存储集合后，那么这时他们都会被提升成Object类型。当我们在取出每一个对象，并且进行相应的操作，这时必须采用类型转换。

大家观察下面代码：

~~~java
public class GenericDemo {
	public static void main(String[] args) {
		Collection coll = new ArrayList();
		coll.add("abc");
		coll.add("itcast");
		coll.add(5);//由于集合没有做任何限定，任何类型都可以给其中存放
		Iterator it = coll.iterator();
		while(it.hasNext()){
			//需要打印每个字符串的长度,就要把迭代出来的对象转成String类型
			String str = (String) it.next();
			System.out.println(str.length());
		}
	}
}
~~~

程序在运行时发生了问题**java.lang.ClassCastException**。                                                                                             为什么会发生类型转换异常呢？                                                                                                                                       我们来分析下：由于集合中什么类型的元素都可以存储。导致取出时强转引发运行时 ClassCastException。                                                                                                                                                       怎么来解决这个问题呢？                                                                                                                                                           Collection虽然可以存储各种对象，但实际上通常Collection只存储同一类型对象。例如都是存储字符串对象。因此在JDK5之后，新增了**泛型**(**Generic**)语法，让你在设计API时可以指定类或方法支持泛型，这样我们使用API的时候也变得更为简洁，并得到了编译时期的语法检查。

* **泛型**：可以在类或方法中预支地使用未知的类型。

> tips:一般在创建对象时，将未知的类型确定具体的类型。当没有指定泛型时，默认类型为Object类型。

## 3.2  使用泛型的好处

上一节只是讲解了泛型的引入，那么泛型带来了哪些好处呢？

* 将运行时期的ClassCastException，转移到了编译时期变成了编译失败。
* 避免了类型强转的麻烦。

通过我们如下代码体验一下：

~~~java
public class GenericDemo2 {
	public static void main(String[] args) {
        Collection<String> list = new ArrayList<String>();
        list.add("abc");
        list.add("itcast");
        // list.add(5);//当集合明确类型后，存放类型不一致就会编译报错
        // 集合已经明确具体存放的元素类型，那么在使用迭代器的时候，迭代器也同样会知道具体遍历元素类型
        Iterator<String> it = list.iterator();
        while(it.hasNext()){
            String str = it.next();
            //当使用Iterator<String>控制元素类型后，就不需要强转了。获取到的元素直接就是String类型
            System.out.println(str.length());
        }
	}
}
~~~

> tips:泛型是数据类型的一部分，我们将类名与泛型合并一起看做数据类型。

## 3.3  泛型的定义与使用

我们在集合中会大量使用到泛型，这里来完整地学习泛型知识。

泛型，用来灵活地将数据类型应用到不同的类、方法、接口当中。将数据类型作为参数进行传递。

### 定义和使用含有泛型的类

定义格式：

~~~
修饰符 class 类名<代表泛型的变量> {  }
~~~

例如，API中的ArrayList集合：

~~~java
class ArrayList<E>{ 
    public boolean add(E e){ }

    public E get(int index){ }
   	....
}
~~~

使用泛型： 即什么时候确定泛型。

**在创建对象的时候确定泛型**

 例如，`ArrayList<String> list = new ArrayList<String>();`

此时，变量E的值就是String类型,那么我们的类型就可以理解为：

~~~java 
class ArrayList<String>{ 
     public boolean add(String e){ }

     public String get(int index){  }
     ...
}
~~~

再例如，`ArrayList<Integer> list = new ArrayList<Integer>();`

此时，变量E的值就是Integer类型,那么我们的类型就可以理解为：

~~~java
class ArrayList<Integer> { 
     public boolean add(Integer e) { }

     public Integer get(int index) {  }
     ...
}
~~~

举例自定义泛型类

~~~java
public class MyGenericClass<MVP> {
	//没有MVP类型，在这里代表 未知的一种数据类型 未来传递什么就是什么类型
	private MVP mvp;
     
    public void setMVP(MVP mvp) {
        this.mvp = mvp;
    }
     
    public MVP getMVP() {
        return mvp;
    }
}
~~~

使用:

~~~java
public class GenericClassDemo {
  	public static void main(String[] args) {		 
         // 创建一个泛型为String的类
         MyGenericClass<String> my = new MyGenericClass<String>();    	
         // 调用setMVP
         my.setMVP("大胡子登登");
         // 调用getMVP
         String mvp = my.getMVP();
         System.out.println(mvp);
         //创建一个泛型为Integer的类
         MyGenericClass<Integer> my2 = new MyGenericClass<Integer>(); 
         my2.setMVP(123);   	  
         Integer mvp2 = my2.getMVP();
    }
}
~~~

###  含有泛型的方法

定义格式：

~~~
修饰符 <代表泛型的变量> 返回值类型 方法名(参数){  }
~~~

例如，

~~~java
public class MyGenericMethod {	  
    public <MVP> void show(MVP mvp) {
    	System.out.println(mvp.getClass());
    }
    
    public <MVP> MVP show2(MVP mvp) {	
    	return mvp;
    }
}
~~~

使用格式：**调用方法时，确定泛型的类型**

~~~java
public class GenericMethodDemo {
    public static void main(String[] args) {
        // 创建对象
        MyGenericMethod mm = new MyGenericMethod();
        // 演示看方法提示
        mm.show("aaa");
        mm.show(123);
        mm.show(12.45);
    }
}
~~~

### 含有泛型的接口

定义格式：

~~~
修饰符 interface接口名<代表泛型的变量> {  }
~~~

例如，

~~~java
public interface MyGenericInterface<E>{
	public abstract void add(E e);
	
	public abstract E getE();  
}
~~~

使用格式：

**1、定义类时确定泛型的类型**

例如

~~~java
public class MyImp1 implements MyGenericInterface<String> {
	@Override
    public void add(String e) {
        // 省略...
    }

	@Override
	public String getE() {
		return null;
	}
}
~~~

此时，泛型E的值就是String类型。

 **2、始终不确定泛型的类型，直到创建对象时，确定泛型的类型**

 例如

~~~java
public class MyImp2<E> implements MyGenericInterface<E> {
	@Override
	public void add(E e) {
       	 // 省略...
	}

	@Override
	public E getE() {
		return null;
	}
}
~~~

确定泛型：

~~~java
/*
 * 使用
 */
public class GenericInterface {
    public static void main(String[] args) {
        MyImp2<String>  my = new MyImp2<String>();  
        my.add("aa");
    }
}
~~~

## 3.4  泛型通配符

当使用泛型类或者接口时，传递的数据中，泛型类型不确定，可以通过通配符<?>表示。但是一旦使用泛型的通配符后，只能使用Object类中的共性方法，集合中元素自身方法无法使用。

#### 通配符基本使用

泛型的通配符:**不知道使用什么类型来接收的时候,此时可以使用?,?表示未知通配符。**

此时只能接受数据,不能往该集合中存储数据。

举个例子大家理解使用即可：

~~~java
public static void main(String[] args) {
    Collection<Intger> list1 = new ArrayList<Integer>();
    getElement(list1);
    Collection<String> list2 = new ArrayList<String>();
    getElement(list2);
}
public static void getElement(Collection<?> coll){}
//？代表可以接收任意类型
~~~

> tips:泛型不存在继承关系 Collection<Object> list = new ArrayList<String>();这种是错误的。

#### 通配符高级使用----受限泛型

之前设置泛型的时候，实际上是可以任意设置的，只要是类就可以设置。但是在JAVA的泛型中可以指定一个泛型的**上限**和**下限**。

**泛型的上限**：

* **格式**： `类型名称 <? extends 类 > 对象名称`
* **意义**： `只能接收该类型及其子类`

**泛型的下限**：

- **格式**： `类型名称 <? super 类 > 对象名称`
- **意义**： `只能接收该类型及其父类型`

比如：现已知Object类，String 类，Number类，Integer类，其中Number是Integer的父类

~~~java
public static void main(String[] args) {
    Collection<Integer> list1 = new ArrayList<Integer>();
    Collection<String> list2 = new ArrayList<String>();
    Collection<Number> list3 = new ArrayList<Number>();
    Collection<Object> list4 = new ArrayList<Object>();
    
    getElement(list1);
    getElement(list2);//报错
    getElement(list3);
    getElement(list4);//报错
  
    getElement2(list1);//报错
    getElement2(list2);//报错
    getElement2(list3);
    getElement2(list4);
  
}
// 泛型的上限：此时的泛型?，必须是Number类型或者Number类型的子类
public static void getElement1(Collection<? extends Number> coll){}
// 泛型的下限：此时的泛型?，必须是Number类型或者Number类型的父类
public static void getElement2(Collection<? super Number> coll){}
~~~

# 第四章 集合综合案例

## 4.1 案例介绍

按照斗地主的规则，完成洗牌发牌的动作。
具体规则：

使用54张牌打乱顺序,三个玩家参与游戏，三人交替摸牌，每人17张牌，最后三张留作底牌。

## 4.2 案例分析

* 准备牌：

  牌可以设计为一个ArrayList<String>,每个字符串为一张牌。
  每张牌由花色数字两部分组成，我们可以使用花色集合与数字集合嵌套迭代完成每张牌的组装。
  牌由Collections类的shuffle方法进行随机排序。

* 发牌

  将每个人以及底牌设计为ArrayList<String>,将最后3张牌直接存放于底牌，剩余牌通过对3取模依次发牌。


* 看牌

  直接打印每个集合。

## 4.3 代码实现

~~~java
import java.util.ArrayList;
import java.util.Collections;

public class Poker {
    public static void main(String[] args) {
        /*
        * 1: 准备牌操作
        */
        //1.1 创建牌盒 将来存储牌面的 
        ArrayList<String> pokerBox = new ArrayList<String>();
        //1.2 创建花色集合
        ArrayList<String> colors = new ArrayList<String>();

        //1.3 创建数字集合
        ArrayList<String> numbers = new ArrayList<String>();

        //1.4 分别给花色 以及 数字集合添加元素
        colors.add("♥");
        colors.add("♦");
        colors.add("♠");
        colors.add("♣");

        for(int i = 2;i<=10;i++){
            numbers.add(i+"");
        }
        numbers.add("J");
        numbers.add("Q");
        numbers.add("K");
        numbers.add("A");
        //1.5 创造牌  拼接牌操作
        // 拿出每一个花色  然后跟每一个数字 进行结合  存储到牌盒中
        for (String color : colors) {
            //color每一个花色 
            //遍历数字集合
            for(String number : numbers){
                //结合
                String card = color+number;
                //存储到牌盒中
                pokerBox.add(card);
            }
        }
        //1.6大王小王
        pokerBox.add("小☺");
        pokerBox.add("大☠");	  
        // System.out.println(pokerBox);
        //洗牌 是不是就是将  牌盒中 牌的索引打乱 
        // Collections类  工具类  都是 静态方法
        // shuffer方法   
        /*
         * static void shuffle(List<?> list) 
         *     使用默认随机源对指定列表进行置换。 
         */
        //2:洗牌
        Collections.shuffle(pokerBox);
        //3 发牌
        //3.1 创建 三个 玩家集合  创建一个底牌集合
        ArrayList<String> player1 = new ArrayList<String>();
        ArrayList<String> player2 = new ArrayList<String>();
        ArrayList<String> player3 = new ArrayList<String>();
        ArrayList<String> dipai = new ArrayList<String>();	  

        //遍历 牌盒  必须知道索引   
        for(int i = 0;i<pokerBox.size();i++){
            //获取 牌面
            String card = pokerBox.get(i);
            //留出三张底牌 存到 底牌集合中
            if(i>=51){//存到底牌集合中
                dipai.add(card);
            } else {
                //玩家1   %3  ==0
                if(i%3==0){
                  	player1.add(card);
                }else if(i%3==1){//玩家2
                  	player2.add(card);
                }else{//玩家3
                  	player3.add(card);
                }
            }
        }
        //看看
        System.out.println("令狐冲："+player1);
        System.out.println("田伯光："+player2);
        System.out.println("绿竹翁："+player3);
        System.out.println("底牌："+dipai);  
	}
}
~~~

# day14 【List、Set】



