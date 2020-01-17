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
* [day14 【List、Set、数据结构、Collections】](#day14-ListSet数据结构Collections) 
* [day15 【Map】](#day15-Map)  
* [day16 【异常、线程】](#day16-异常线程) 
* [day17 【线程、同步】](#day17-线程同步)  
* [day18 【线程池、Lambda表达式】](#day18-线程池Lambda表达式) 
* [day19 【File类、递归】](#day19-File类递归) 
* [day20 【字节流、字符流】](#day20-字节流字符流) 
* [day21 【缓冲流、转换流、序列化流、打印流】](#day21-缓冲流转换流序列化流打印流) 
* [day22 【网络编程】](#day22-网络编程) 
* [day23 【函数式接口】](#day23-函数式接口)  
* [day24 【Stream流、方法引用】](#day24-Stream流方法引用) 

 
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

```java
public static boolean equals(Object a, Object b) {  
    return (a == b) || (a != null && a.equals(b));  
}
```

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

```java
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
```

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

```java
public class StringDemo {
    public static void main(String[] args) {
        String s = "Hello";
        s += "World";
        System.out.println(s);
    }
}
```

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

```java
Integer i = new Integer(4);//使用构造函数函数
Integer iii = Integer.valueOf(4);//使用包装类中的valueOf方法
```

包装对象---->基本数值

```java
int num = i.intValue();
```
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

```
基本类型直接与””相连接即可；如：34+""
```

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

```java
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
```

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

```java
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
```

> tips:：在进行集合元素取出时，如果集合中已经没有元素了，还继续使用迭代器的next方法，将会发生java.util.NoSuchElementException没有集合元素的错误。

## 2.2 迭代器的实现原理

我们在之前案例已经完成了Iterator遍历集合的整个过程。当遍历集合时，首先通过调用t集合的iterator()方法获得迭代器对象，然后使用hashNext()方法判断集合中是否存在下一个元素，如果存在，则调用next()方法将元素取出，否则说明已到达了集合末尾，停止遍历元素。

Iterator迭代器对象在遍历集合时，内部采用指针的方式来跟踪集合中的元素，为了让初学者能更好地理解迭代器的工作原理，接下来通过一个图例来演示Iterator对象迭代元素的过程：

![](img\迭代器原理图.bmp)

在调用Iterator的next方法之前，迭代器的索引位于第一个元素之前，不指向任何元素，当第一次调用迭代器的next方法后，迭代器的索引会向后移动一位，指向第一个元素并将该元素返回，当再次调用next方法时，迭代器的索引会指向第二个元素并将该元素返回，依此类推，直到hasNext方法返回false，表示到达了集合的末尾，终止对元素的遍历。

## 2.3 增强for

增强for循环(也称for each循环)是**JDK1.5**以后出来的一个高级for循环，专门用来遍历数组和集合的。它的内部原理其实是个Iterator迭代器，所以在遍历的过程中，不能对集合中的元素进行增删操作。

格式：

```java
for(元素的数据类型  变量 : Collection集合or数组){ 
  	//写操作代码
}
```

它用于遍历Collection和数组。通常只进行遍历元素，不要在遍历的过程中对集合元素进行增删操作。

#### 练习1：遍历数组

```java
public class NBForDemo1 {
    public static void main(String[] args) {
		int[] arr = {3,5,6,87};
       	//使用增强for遍历数组
		for(int a : arr){//a代表数组中的每个元素
			System.out.println(a);
		}
	}
}
```
#### 练习2:遍历集合

```java
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
```

> tips: 新for循环必须有被遍历的目标。目标只能是Collection或者是数组。新式for仅仅作为遍历操作出现。

# 第三章 泛型

## 3.1  泛型概述

在前面学习集合时，我们都知道集合中是可以存放任意对象的，只要把对象存储集合后，那么这时他们都会被提升成Object类型。当我们在取出每一个对象，并且进行相应的操作，这时必须采用类型转换。

大家观察下面代码：

```java
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
```

程序在运行时发生了问题**java.lang.ClassCastException**。                                                                                             为什么会发生类型转换异常呢？                                                                                                                                       我们来分析下：由于集合中什么类型的元素都可以存储。导致取出时强转引发运行时 ClassCastException。                                                                                                                                                       怎么来解决这个问题呢？                                                                                                                                                           Collection虽然可以存储各种对象，但实际上通常Collection只存储同一类型对象。例如都是存储字符串对象。因此在JDK5之后，新增了**泛型**(**Generic**)语法，让你在设计API时可以指定类或方法支持泛型，这样我们使用API的时候也变得更为简洁，并得到了编译时期的语法检查。

* **泛型**：可以在类或方法中预支地使用未知的类型。

> tips:一般在创建对象时，将未知的类型确定具体的类型。当没有指定泛型时，默认类型为Object类型。

## 3.2  使用泛型的好处

上一节只是讲解了泛型的引入，那么泛型带来了哪些好处呢？

* 将运行时期的ClassCastException，转移到了编译时期变成了编译失败。
* 避免了类型强转的麻烦。

通过我们如下代码体验一下：

```java
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
```

> tips:泛型是数据类型的一部分，我们将类名与泛型合并一起看做数据类型。

## 3.3  泛型的定义与使用

我们在集合中会大量使用到泛型，这里来完整地学习泛型知识。

泛型，用来灵活地将数据类型应用到不同的类、方法、接口当中。将数据类型作为参数进行传递。

### 定义和使用含有泛型的类

定义格式：

```
修饰符 class 类名<代表泛型的变量> {  }
```

例如，API中的ArrayList集合：

```java
class ArrayList<E>{ 
    public boolean add(E e){ }

    public E get(int index){ }
   	....
}
```

使用泛型： 即什么时候确定泛型。

**在创建对象的时候确定泛型**

 例如，`ArrayList<String> list = new ArrayList<String>();`

此时，变量E的值就是String类型,那么我们的类型就可以理解为：

```java 
class ArrayList<String>{ 
     public boolean add(String e){ }

     public String get(int index){  }
     ...
}
```

再例如，`ArrayList<Integer> list = new ArrayList<Integer>();`

此时，变量E的值就是Integer类型,那么我们的类型就可以理解为：

```java
class ArrayList<Integer> { 
     public boolean add(Integer e) { }

     public Integer get(int index) {  }
     ...
}
```
举例自定义泛型类

```java
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
```

使用:

```java
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
```

###  含有泛型的方法

定义格式：

```
修饰符 <代表泛型的变量> 返回值类型 方法名(参数){  }
```

例如，

```java
public class MyGenericMethod {	  
    public <MVP> void show(MVP mvp) {
    	System.out.println(mvp.getClass());
    }
    
    public <MVP> MVP show2(MVP mvp) {	
    	return mvp;
    }
}
```

使用格式：**调用方法时，确定泛型的类型**

```java
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
```

### 含有泛型的接口

定义格式：

```
修饰符 interface接口名<代表泛型的变量> {  }
```

例如，

```java
public interface MyGenericInterface<E>{
	public abstract void add(E e);
	
	public abstract E getE();  
}
```

使用格式：

**1、定义类时确定泛型的类型**

例如

```java
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
```

此时，泛型E的值就是String类型。

 **2、始终不确定泛型的类型，直到创建对象时，确定泛型的类型**

 例如

```java
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
```

确定泛型：

```java
/*
 * 使用
 */
public class GenericInterface {
    public static void main(String[] args) {
        MyImp2<String>  my = new MyImp2<String>();  
        my.add("aa");
    }
}
```

## 3.4  泛型通配符

当使用泛型类或者接口时，传递的数据中，泛型类型不确定，可以通过通配符<?>表示。但是一旦使用泛型的通配符后，只能使用Object类中的共性方法，集合中元素自身方法无法使用。

### 通配符基本使用

泛型的通配符:**不知道使用什么类型来接收的时候,此时可以使用?,?表示未知通配符。**

此时只能接受数据,不能往该集合中存储数据。

举个例子大家理解使用即可：

```java
public static void main(String[] args) {
    Collection<Intger> list1 = new ArrayList<Integer>();
    getElement(list1);
    Collection<String> list2 = new ArrayList<String>();
    getElement(list2);
}
public static void getElement(Collection<?> coll){}
//？代表可以接收任意类型
```

tips:泛型不存在继承关系 Collection<Object> list = new ArrayList<String>();这种是错误的。


### 通配符高级使用----受限泛型

之前设置泛型的时候，实际上是可以任意设置的，只要是类就可以设置。但是在JAVA的泛型中可以指定一个泛型的**上限**和**下限**。

**泛型的上限**：

* **格式**： `类型名称 <? extends 类 > 对象名称`
* **意义**： `只能接收该类型及其子类`

**泛型的下限**：

- **格式**： `类型名称 <? super 类 > 对象名称`
- **意义**： `只能接收该类型及其父类型`

比如：现已知Object类，String 类，Number类，Integer类，其中Number是Integer的父类

```java
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
```

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

```java
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
``` 

# day14 【List、Set、数据结构、Collections】

## 主要内容  

- 数据结构   
- List集合   
- Set集合   
- Collections     

## 学习目标

- [ ] 能够说出List集合特点  
- [ ] 能够说出常见的数据结构   
- [ ] 能够说出数组结构特点  
- [ ] 能够说出栈结构特点  
- [ ] 能够说出队列结构特点  
- [ ] 能够说出单向链表结构特点  
- [ ] 能够说出Set集合的特点  
- [ ] 能够说出哈希表的特点  
- [ ] 使用HashSet集合存储自定义元素   
- [ ] 能够说出可变参数的格式   
- [ ] 能够使用集合工具类   
- [ ] 能够使用Comparator比较器进行排序   

# 第一章 数据结构  

## 2.1 数据结构有什么用？  

当你用着java里面的容器类很爽的时候，你有没有想过，怎么ArrayList就像一个无限扩充的数组，也好像链表之类
的。好用吗？好用，这就是数据结构的用处，只不过你在不知不觉中使用了。

现实世界的存储，我们使用的工具和建模。每种数据结构有自己的优点和缺点，想想如果Google的数据用的是数
组的存储，我们还能方便地查询到所需要的数据吗？而算法，在这么多的数据中如何做到最快的插入，查找，删
除，也是在追求更快。  

我们java是面向对象的语言，就好似自动档轿车，C语言好似手动档吉普。数据结构呢？是变速箱的工作原理。你
完全可以不知道变速箱怎样工作，就把自动档的车子从 A点 开到 B点，而且未必就比懂得的人慢。写程序这件事，
和开车一样，经验可以起到很大作用，但如果你不知道底层是怎么工作的，就永远只能开车，既不会修车，也不能
造车。当然了，数据结构内容比较多，细细的学起来也是相对费功夫的，不可能达到一蹴而就。我们将常见的数据
结构：堆栈、队列、数组、链表和红黑树 这几种给大家介绍一下，作为数据结构的入门，了解一下它们的特点即  
可。  

!()[https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8401.png]  

## 2.2 常见的数据结构  

数据存储的常用结构有：栈、队列、数组、链表和红黑树。我们分别来了解一下：  

### 栈  

stack,又称堆栈，它是运算受限的线性表，其限制是仅允许在标的一端进行插入和删除操作，不允许在其
他任何位置进行添加、查找、删除等操作。  

简单的说：采用该结构的集合，对元素的存取有如下的特点  

- 先进后出（即，存进去的元素，要在后它后面的元素依次取出后，才能取出该元素）。例如，子弹压进弹
夹，先压进去的子弹在下面，后压进去的子弹在上面，当开枪时，先弹出上面的子弹，然后才能弹出下面的
子弹。  

- 栈的入口、出口的都是栈的顶端位置。  

!()[https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8402.png]  

这里两个名词需要注意：  

- 压栈：就是存元素。即，把元素存储到栈的顶端位置，栈中已有元素依次向栈底方向移动一个位置。  
- 弹栈：就是取元素。即，把栈的顶端位置元素取出，栈中已有元素依次向栈顶方向移动一个位置。  

### 队列  

queue,简称队，它同堆栈一样，也是一种运算受限的线性表，其限制是仅允许在表的一端进行插入，
而在表的另一端进行删除。   

简单的说，采用该结构的集合，对元素的存取有如下的特点：   
- 先进先出（即，存进去的元素，要在后它前面的元素依次取出后，才能取出该元素）。例如，小火车过山
洞，车头先进去，车尾后进去；车头先出来，车尾后出来。    

- 队列的入口、出口各占一侧。例如，下图中的左侧为入口，右侧为出口。  

!()[https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8403.png]  

### 数组  

Array,是有序的元素序列，数组是在内存中开辟一段连续的空间，并在此空间存放元素。就像是一排出
租屋，有100个房间，从001到100每个房间都有固定编号，通过编号就可以快速找到租房子的人。 

简单的说,采用该结构的集合，对元素的存取有如下的特点：  

- 查找元素快：通过索引，可以快速访问指定位置的元素  
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8404.png)  

- 增删元素慢  
  - 指定索引位置增加元素：需要创建一个新数组，将指定新元素存储在指定索引位置，再把原数组元素根
据索引，复制到新数组对应索引的位置。如下图  

  ![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8405.png)

  - 指定索引位置删除元素：需要创建一个新数组，把原数组元素根据索引，复制到新数组对应索引的位
置，原数组中指定索引位置元素不复制到新数组中。如下图  

  ![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8406.png)   


### 链表  


链表:linked list,由一系列结点node（链表中每一个元素称为结点）组成，结点可以在运行时i动态生成。每
个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。我们常说的
链表结构有单向链表与双向链表，那么这里给大家介绍的是单向链表。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8407.png)  

简单的说，采用该结构的集合，对元素的存取有如下的特点：  

- 多个结点之间，通过地址进行连接。例如，多个人手拉手，每个人使用自己的右手拉住下个人的左手，依次
类推，这样多个人就连在一起了。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8408.png)  

- 查找元素慢：想查找某个元素，需要通过连接的节点，依次向后查找指定元素 

- 增删元素快：  

  - 增加元素：只需要修改连接下个元素的地址即可。  
  ![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8409.png)

  - 删除元素：只需要修改连接下个元素的地址即可。 
  ![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%8410.png)

 # 第二章 List集合  

我们掌握了Collection接口的使用后，再来看看Collection接口中的子类，他们都具备那些特性呢？
接下来，我们一起学习Collection中的常用几个子类（ `java.util.List` 集合、 `java.util.Set` 集合）。 

看完API，我们总结一下  
List接口特点：  

1. 它是一个元素存取有序的集合。例如，存元素的顺序是11、22、33。那么集合中，元素的存储就是按照11、22、33的顺序完成的）。
2. 它是一个带有索引的集合，通过索引就可以精确的操作集合中的元素（与数组的索引是一个道理）。  
3. 集合中可以有重复的元素，通过元素的equals方法，来比较是否为重复的元素。  

> tips:我们在基础班的时候已经学习过List接口的子类java.util.ArrayList类，该类中的方法都是来自List中定义。

## 1.2 List接口中常用方法  

List作为Collection集合的子接口，不但继承了Collection接口中的全部方法，而且还增加了一些根据元素索引来操
作集合的特有方法，如下：   

- `public void add(int index, E element)` : 将指定的元素，添加到该集合中的指定位置上。   
- `public E get(int index)` :返回集合中指定位置的元素。   
- `public E remove(int index)` : 移除列表中指定位置的元素, 返回的是被移除的元素。   
- `public E set(int index, E element)` :用指定元素替换集合中指定位置的元素,返回值的更新前的元素。  
 
List集合特有的方法都是跟索引相关，我们在基础班都学习过，那么我们再来复习一遍吧：    

```java
public class ListDemo {
    public static void main(String[] args) {
    // 创建List集合对象        
     List<String> list = new ArrayList<String>();    
       
     // 往 尾部添加 指定元素    
     list.add("图图");    
     list.add("小美");    
     list.add("不高兴");    
       
     System.out.println(list);    
     // add(int index,String s) 往指定位置添加    
     list.add(1,"没头脑");    
       
     System.out.println(list);    
     // String remove(int index) 删除指定位置元素  返回被删除元素    
     // 删除索引位置为2的元素     
     System.out.println("删除索引位置为2的元素");    
     System.out.println(list.remove(2));    
       
     System.out.println(list);    
       
     // String set(int index,String s)    
     // 在指定位置 进行 元素替代（改）     
     // 修改指定位置元素    
     list.set(0, "三毛");    
     System.out.println(list);    
       
     // String get(int index)  获取指定位置元素    
       
     // 跟size() 方法一起用  来 遍历的     
     for(int i = 0;i<list.size();i++){    
       System.out.println(list.get(i));        
     }    
     //还可以使用增强for
    for (String string : list) {    
      System.out.println(string);            
    }            
  }    
}
```  

# 第三章 List的子类   

## 3.1 ArrayList集合  

`java.util.ArrayList` 集合数据存储的结构是数组结构。元素增删慢，查找快，由于日常开发中使用最多的功能为
查询数据、遍历数据，所以 `ArrayList` 是最常用的集合。

许多程序员开发时非常随意地使用ArrayList完成任何需求，并不严谨，这种用法是不提倡的。  

## 3.2 LinkedList集合  

`java.util.LinkedList` 集合数据存储的结构是链表结构。方便元素添加、删除的集合。
> LinkedList是一个双向链表，那么双向链表是什么样子的呢，我们用个图了解下  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/list01.png)

实际开发中对一个集合元素的添加与删除经常涉及到首尾操作，而LinkedList提供了大量首尾操作的方法。这些方
法我们作为了解即可：

- `public void addFirst(E e)` :将指定元素插入此列表的开头。 
- `public void addLast(E e)` :将指定元素添加到此列表的结尾。 
- `public E getFirst()` :返回此列表的第一个元素。 
- `public E getLast()` :返回此列表的最后一个元素。 
- `public E removeFirst()` :移除并返回此列表的第一个元素。 
- `public E removeLast()` :移除并返回此列表的最后一个元素。
- `public E pop()` :从此列表所表示的堆栈处弹出一个元素。
- `public void push(E e)` :将元素推入此列表所表示的堆栈。
- `public boolean isEmpty()` ：如果列表不包含元素，则返回true。  

LinkedList是List的子类，List中的方法LinkedList都是可以使用，这里就不做详细介绍，我们只需要了解LinkedList
的特有方法即可。在开发时，LinkedList集合也可以作为堆栈，队列的结构使用。（了解即可）

方法演示：  

```java
public class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList<String> link = new LinkedList<String>();
        //添加元素
        link.addFirst("abc1");
        link.addFirst("abc2");
        link.addFirst("abc3");
        System.out.println(link);
        // 获取元素
        System.out.println(link.getFirst());
        System.out.println(link.getLast());
        // 删除元素
        System.out.println(link.removeFirst());
        System.out.println(link.removeLast());
        while (!link.isEmpty()) { //判断集合是否为空
            System.out.println(link.pop()); //弹出集合中的栈顶元素
        }
        System.out.println(link);
    }
}
```

# 第四章 Set接口  

`java.util.Set` 接口和 `java.util.List` 接口一样，同样继承自 `Collection` 接口，它与 `Collection`接口中的方法基本一致，并没有对 Collection 接口进行功能上的扩充，只是比 `Collection` 接口更加严格了。与 `List` 接口不同的是， `Set` 接口中元素无序，并且都会以某种规则保证存入的元素不出现重复。

`Set` 集合有多个子类，这里我们介绍其中的 `java.util.HashSet` 、 `java.util.LinkedHashSet` 这两个集合。

> tips:Set集合取出元素的方式可以采用：迭代器、增强for。  

## 3.1 HashSet集合介绍  

`java.util.HashSet` 是 `Set` 接口的一个实现类，它所存储的元素是不可重复的，并且元素都是无序的(即存取顺序不一致)。 `java.util.HashSet` 底层的实现其实是一个 `java.util.HashMap` 支持，由于我们暂时还未学习，先做了解。  

`HashSet` 是根据对象的哈希值来确定元素在集合中的存储位置，因此具有良好的存取和查找性能。保证元素唯一性
的方式依赖于： `hashCode` 与 `equals` 方法。   

我们先来使用一下Set集合存储，看下现象，再进行原理的讲解:  

```java
public class HashSetDemo {
    public static void main(String[] args) {
        //创建 Set集合
        HashSet<String>  set = new HashSet<String>();
        //添加元素
        set.add(new String("cba"));
        set.add("abc");
        set.add("bac");
        set.add("cba"); 
        //遍历
        for (String name : set) {
            System.out.println(name);
        }
    }
}
```

输出结果如下，说明集合中不能存储重复元素：  

```java
cba
abc
bac
```

> tips:根据结果我们发现字符串"cba"只存储了一个，也就是说重复的元素set集合不存储。  

## 2.2 HashSet集合存储数据的结构（哈希表）  

什么是哈希表呢？  

在JDK1.8之前，哈希表底层采用数组+链表实现，即使用链表处理冲突，同一hash值的链表都存储在一个链表里。
但是当位于一个桶中的元素较多，即hash值相等的元素较多时，通过key值依次查找的效率较低。而JDK1.8中，哈
希表存储采用数组+链表+红黑树实现，当链表长度超过阈值（8）时，将链表转换为红黑树，这样大大减少了查找
时间。  

简单的来说，哈希表是由数组+链表+红黑树（JDK1.8增加了红黑树部分）实现的，如下图所示。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/HashSet01.png);

看到这张图就有人要问了，这个是怎么存储的呢？  

为了方便大家的理解我们结合一个存储流程图来说明一下：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/HashSet02.png)

总而言之，JDK1.8引入红黑树大程度优化了HashMap的性能，那么对于我们来讲保证HashSet集合元素的唯一，
其实就是根据对象的hashCode和equals方法来决定的。如果我们往集合中存放自定义的对象，那么保证其唯一，
就必须复写hashCode和equals方法建立属于当前对象的比较方式。  

## 2.3 HashSet存储自定义类型元素  

给HashSet中存放自定义类型元素时，需要重写对象中的hashCode和equals方法，建立自己的比较方式，才能保
证HashSet集合中的对象唯一

创建自定义Student类  

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
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Student student = (Student) o;
        return age == student.age &&
               Objects.equals(name, student.name);
    }
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
```

```java
public class HashSetDemo2 {
    public static void main(String[] args) {
        //创建集合对象   该集合中存储 Student类型对象
        HashSet<Student> stuSet = new HashSet<Student>();
        //存储
        Student stu = new Student("于谦", 43);
        stuSet.add(stu);
        stuSet.add(new Student("郭德纲", 44));
        stuSet.add(new Student("于谦", 43));
        stuSet.add(new Student("郭麒麟", 23));
        stuSet.add(stu);
        for (Student stu2 : stuSet) {

                    System.out.println(stu2);
        }
    }
}
执行结果：
Student [name=郭德纲, age=44]
Student [name=于谦, age=43]
Student [name=郭麒麟, age=23]
```

## 2.3 LinkedHashSet  

我们知道HashSet保证元素唯一，可是元素存放进去是没有顺序的，那么我们要保证有序，怎么办呢？
在HashSet下面有一个子类 `java.util.LinkedHashSet` ，它是链表和哈希表组合的一个数据存储结构。
演示代码如下:

```java
public class LinkedHashSetDemo {
public static void main(String[] args) {
      
  Set<String> set = new LinkedHashSet<String>();        
  set.add("bbb");        
  set.add("aaa");        
  set.add("abc");        
  set.add("bbc");        
  Iterator<String> it = set.iterator();

  while (it.hasNext()) {        
    System.out.println(it.next());            
    }        
  }    
}

结果：
  bbb
  aaa
  abc
  bbc
```

## 1.9 可变参数 

在JDK1.5之后，如果我们定义一个方法需要接受多个参数，并且多个参数类型一致，我们可以对其简化成如下格式：

```java
修饰符 返回值类型 方法名(参数类型... 形参名){  }
```

其实这个书写完全等价与
```java
修饰符 返回值类型 方法名(参数类型[] 形参名){  }
```

只是后面这种定义，在调用时必须传递数组，而前者可以直接传递数据即可。JDK1.5以后。出现了简化操作。... 用在参数上，称之为可变参数。

同样是代表数组，但是在调用这个带有可变参数的方法时，不用创建数组(这就是简单之处)，直接将数组中的元素
作为实际参数进行传递，其实编译成的class文件，将这些元素先封装到一个数组中，在进行传递。这些动作都在编
译.class文件时，自动完成了。

代码演示：  
```java
public class ChangeArgs {
    public static void main(String[] args) {
        int[] arr = { 1, 4, 62, 431, 2 };
        int sum = getSum(arr);
        System.out.println(sum);
        //  6  7  2 12 2121
        // 求 这几个元素和 6  7  2 12 2121
        int sum2 = getSum(6, 7, 2, 12, 2121);
        System.out.println(sum2);
    }
    /*
     * 完成数组  所有元素的求和 原始写法
    
      public static int getSum(int[] arr){
        int sum = 0;
        for(int a : arr){
            sum += a;
        }
       
        return sum;
      }
    */
    //可变参数写法
    public static int getSum(int... arr) {
        int sum = 0;
        for (int a : arr) {
            sum += a;
        }
        return sum;
    }
}
```

> tips: 上述add方法在同一个类中，只能存在一个。因为会发生调用的不确定性 
> 注意：如果在方法书写时，这个方法拥有多参数，参数中包含可变参数，可变参数一定要写在参数列表的末尾位置。 

# 第五章 Collections  

## 2.1 常用功能  

`java.utils.Collections` 是集合工具类，用来对集合进行操作。部分方法如下： 

- `public static <T> boolean addAll(Collection<T> c, T... elements)` :往集合中添加一些元素。
- `public static void shuffle(List<?> list)` 打乱顺序 :打乱集合顺序。  
- `public static <T> void sort(List<T> list)` :将集合中元素按照默认规则排序。  
- `public static <T> void sort(List<T> list，Comparator<? super T> )` :将集合中元素按照指定规则排序。代码演示：

代码演示：  

```java
public class CollectionsDemo {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        //原来写法
        //list.add(12);
        //list.add(14);
        //list.add(15);
        //list.add(1000);
        //采用工具类 完成 往集合中添加元素 
        Collections.addAll(list, 5, 222, 1，2);
        System.out.println(list);
        //排序方法
        Collections.sort(list);
        System.out.println(list);
    }
}
结果：
[5, 222, 1, 2]
[1, 2, 5, 222]
```

代码演示之后 ，发现我们的集合按照顺序进行了排列，可是这样的顺序是采用默认的顺序，如果想要指定顺序那该
怎么办呢？  

我们发现还有个方法没有讲， `public static <T> void sort(List<T> list，Comparator<? super T> )` :将集合中
元素按照指定规则排序。接下来讲解一下指定规则的排列。

## 2.2 Comparator比较器  

我们还是先研究这个方法 
`public static <T> void sort(List<T> list)` :将集合中元素按照默认规则排序。
不过这次存储的是字符串类型。  

```java
public class CollectionsDemo2 {
    public static void main(String[] args) {
        ArrayList<String>  list = new ArrayList<String>();
        list.add("cba");
        list.add("aba");
        list.add("sba");
        list.add("nba");
        //排序方法
        Collections.sort(list);
        System.out.println(list);
    }
}
```

结果：  

```java
[aba, cba, nba, sba]
```

我们使用的是默认的规则完成字符串的排序，那么默认规则是怎么定义出来的呢？  

说到排序了，简单的说就是两个对象之间比较大小，那么在JAVA中提供了两种比较实现的方式，一种是比较死板的采用 `java.lang.Comparable` 接口去实现，一种是灵活的当我需要做排序的时候在去选择的`java.util.Comparator` 接口完成。

那么我们采用的 `public static <T> void sort(List<T> list)` 这个方法完成的排序，实际上要求了被排序的类型
需要实现Comparable接口完成比较的功能，在String类型上如下：

```java
public final class String implements java.io.Serializable, Comparable<String>, CharSequence {
  
}
```
String类实现了这个接口，并完成了比较规则的定义，但是这样就把这种规则写死了，那比如我想要字符串按照第
一个字符降序排列，那么这样就要修改String的源代码，这是不可能的了，那么这个时候我们可以使用


`public static <T> void sort(List<T> list，Comparator<? super T> )` 方法灵活的完成，这个里面就涉及到了
Comparator这个接口，位于位于java.util包下，排序是comparator能实现的功能之一,该接口代表一个比较器，比
较器具有可比性！顾名思义就是做排序的，通俗地讲需要比较两个对象谁排在前谁排在后，那么比较的方法就是：

- `public int compare(String o1, String o2)` ：比较其两个参数的顺序。

> 两个对象比较的结果有三种：大于，等于，小于。
> 如果要按照升序排序， 则o1 小于o2，返回（负数），相等返回0，01大于02返回（正数） 如果要按照降序排序 则o1 小于o2，返回（正数），相等返回0，01大于02返回（负数） 

操作如下:  

```java
public class CollectionsDemo3 {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        list.add("cba");
        list.add("aba");
        list.add("sba");
        list.add("nba");
        //排序方法  按照第一个单词的降序
        Collections.sort(list, new Comparator<String>() {
                    @Override
            public int compare(String o1, String o2) {
                return o2.charAt(0) ‐ o1.charAt(0);
            }
        });
        System.out.println(list);
    }
}
```

结果如下：  

```java
[sba, nba, cba, aba]
```

## 2.3 简述Comparable和Comparator两个接口的区别。  
Comparable：强行对实现它的每个类的对象进行整体排序。这种排序被称为类的自然排序，类的compareTo方法
被称为它的自然比较方法。只能在类中实现compareTo()一次，不能经常修改类的代码实现自己想要的排序。实现
此接口的对象列表（和数组）可以通过Collections.sort（和Arrays.sort）进行自动排序，对象可以用作有序映射中
的键或有序集合中的元素，无需指定比较器。


Comparator强行对某个对象进行整体排序。可以将Comparator 传递给sort方法（如Collections.sort或
Arrays.sort），从而允许在排序顺序上实现精确控制。还可以使用Comparator来控制某些数据结构（如有序set或
有序映射）的顺序，或者为那些没有自然顺序的对象collection提供排序。

## 2.4 练习 

创建一个学生类，存储到ArrayList集合中完成指定排序操作。 

Student 初始类  

```java
public class Student{
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
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
            return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    @Override
    public String toString() {
        return "Student{" +
               "name='" + name + '\'' +
               ", age=" + age +
               '}';
    }
}
```

测试类：

```java
public class Demo {
    public static void main(String[] args) {
        // 创建四个学生对象 存储到集合中
        ArrayList<Student> list = new ArrayList<Student>();
        list.add(new Student("rose",18));
        list.add(new Student("jack",16));
        list.add(new Student("abc",16));
        list.add(new Student("ace",17));
        list.add(new Student("mark",16));
        /*
          让学生 按照年龄排序 升序
         */
//        Collections.sort(list);//要求 该list中元素类型  必须实现比较器Comparable接口
        for (Student student : list) {
            System.out.println(student);
        }
    }
}
```

发现，当我们调用Collections.sort()方法的时候 程序报错了。  
原因：如果想要集合中的元素完成排序，那么必须要实现比较器Comparable接口。
于是我们就完成了Student类的一个实现，如下： 

```java
public class Student implements Comparable<Student>{
    ....
    @Override
    public int compareTo(Student o) {
        return this.age‐o.age;//升序
    }
}
```

再次测试，代码就OK 了效果如下：  

```java
Student{name='jack', age=16}
Student{name='abc', age=16}
Student{name='mark', age=16}
Student{name='ace', age=17}
Student{name='rose', age=18}
```

## 2.5 扩展  

如果在使用的时候，想要独立的定义规则去使用 可以采用Collections.sort(List list,Comparetor c)方式，自己定义
规则：  

```java
Collections.sort(list, new Comparator<Student>() {
    @Override
    public int compare(Student o1, Student o2) {
        return o2.getAge()‐o1.getAge();//以学生的年龄降序
    }
});
```

效果：  
```java
Student{name='rose', age=18}
Student{name='ace', age=17}
Student{name='jack', age=16}
Student{name='abc', age=16}
Student{name='mark', age=16}
```

如果想要规则更多一些，可以参考下面代码：  

```java
Collections.sort(list, new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                // 年龄降序
                int result = o2.getAge()‐o1.getAge();//年龄降序
                if(result==0){//第一个规则判断完了 下一个规则 姓名的首字母 升序
                    result = o1.getName().charAt(0)‐o2.getName().charAt(0);
                }
                return result;
            }
        });
```

效果如下：

```java
Student{name='rose', age=18}
Student{name='ace', age=17}
Student{name='abc', age=16}
Student{name='jack', age=16}
Student{name='mark', age=16}
```

# day15 【Map】 

## 主要内容  

- Map 集合 

## 学习目标

- [ ] 能够说出Map集合特点
- [ ] 使用Map集合添加方法保存数据
- [ ] 使使用”键找值”的方式遍历Map集合
- [ ] 使用”键值对”的方式遍历Map集合
- [ ] 能够使用HashMap存储自定义键值对的数据
- [ ] 能够使用HashMap编写斗地主洗牌发牌案例

# 第一章 Map集合 

1.1  概述  
现实生活中，我们常会看到这样的一种集合：IP地址与主机名，身份证号与个人，系统用户名与系统用户对象等，
这种一一对应的关系，就叫做映射。Java提供了专门的集合类用来存放这种对象关系的对象，即 `java.util.Map` 接
口。  

我们通过查看 Map 接口描述，发现 `Map` 接口下的集合与 `Collection` 接口下的集合，它们存储数据的形式不同，如下图。 

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/map01.png)

- `Collection` 中的集合，元素是孤立存在的（理解为单身），向集合中存储元素采用一个个元素的方式存储。
- `Map` 中的集合，元素是成对存在的(理解为夫妻)。每个元素由键与值两部分组成，通过键可以找对所对应的
值。
- `Collection` 中的集合称为单列集合， `Map` 中的集合称为双列集合
- 需要注意的是， `Map` 中的集合不能包含重复的键，值可以重复；每个键只能对应一个值  

## 1.2 Map 常用子类  
通过查看Map接口描述，看到Map有多个子类，这里我们主要讲解常用的HashMap集合、LinkedHashMap集合。  

- HashMap ：存储数据采用的哈希表结构，元素的存取顺序不能保证一致。由于要保证键的唯一、不重复，需
要重写键的hashCode()方法、equals()方法。  

- LinkedHashMap ：HashMap下有个子类LinkedHashMap，存储数据采用的哈希表结构+链表结构。通过链
表结构可以保证元素的存取顺序一致；通过哈希表结构可以保证的键的唯一、不重复，需要重写键的  hashCode()方法、equals()方法。

> tips：Map接口中的集合都有两个泛型变量,在使用时，要为两个泛型变量赋予数据类型。两个泛型变量的数
> 据类型可以相同，也可以不同。  

## 1.3 Map 接口中的常用方法  
Map接口中定义了很多方法，常用的如下：

- `public V put(K key, V value)` : 把指定的键与指定的值添加到Map集合中。
- `public V remove(Object key)` : 把指定的键 所对应的键值对元素 在Map集合中删除，返回被删除元素的值。
- `public V get(Object key)` 根据指定的键，在Map集合中获取对应的值。
- `public Set<K> keySet()` : 获取Map集合中所有的键，存储到Set集合中。
- `public Set<Map.Entry<K,V>> entrySet()` : 获取到Map集合中所有的键值对对象的集合(Set集合)。


Map 接口的方法演示  

```java
public class MapDemo {
    public static void main(String[] args) {
        //创建 map对象
        HashMap<String, String>  map = new HashMap<String, String>();
        //添加元素到集合
        map.put("黄晓明", "杨颖");
        map.put("文章", "马伊琍");
        map.put("邓超", "孙俪");
        System.out.println(map);
        //String remove(String key)
        System.out.println(map.remove("邓超"));
        System.out.println(map);
        // 想要查看 黄晓明的媳妇 是谁
        System.out.println(map.get("黄晓明"));
        System.out.println(map.get("邓超"));   
    }
}
```
> tips:
> 使用put方法时，若指定的键(key)在集合中没有，则没有这个键对应的值，返回null，并把指定的键值添加到集合中； 
> 若指定的键(key)在集合中存在，则返回值为集合中键对应的值（该值为替换前的值），并把指定键所对应的值，替换成指定的新值。

## 1.4 Map 集合遍历键找值方式  

键找值方式：即通过元素中的键，获取键所对应的值 

分析步骤：  
  1. 获取Map中所有的键，由于键是唯一的，所以返回一个Set集合存储所有的键。方法提示: `keyset()`
  2. 遍历键的Set集合，得到每一个键。
  3. 根据键，获取键所对应的值。方法提示: `get(K key)`

代码演示: 

```java
public class MapDemo01 {
    public static void main(String[] args) {
        //创建Map集合对象
        HashMap<String, String> map = new HashMap<String,String>();
        //添加元素到集合
        map.put("胡歌", "霍建华");
        map.put("郭德纲", "于谦");
        map.put("薛之谦", "大张伟");
        //获取所有的键  获取键集
                Set<String> keys = map.keySet();
        // 遍历键集 得到 每一个键
        for (String key : keys) {
           //key  就是键  
            //获取对应值
            String value = map.get(key);
            System.out.println(key+"的CP是："+value);
        } 
    }
}
```

遍历图解：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/map02.png)

## 1.5 Entry 键值对对象  

我们已经知道， Map 中存放的是两种对象，一种称为key(键)，一种称为value(值)，它们在在 Map 中是一一对应关
系，这一对对象又称做 Map 中的一个 Entry( 项) 。 Entry 将键值对的对应关系封装成了对象。即键值对对象，这
样我们在遍历 Map 集合时，就可以从每一个键值对（ Entry ）对象中获取对应的键与对应的值。 

既然Entry表示了一对键和值，那么也同样提供了获取对应键和对应值得方法： 

- `public K getKey()` ：获取Entry对象中的键。 
- `public V getValue()` ：获取Entry对象中的值。 

在Map集合中也提供了获取所有Entry对象的方法：  

- `public Set<Map.Entry<K,V>> entrySet()` : 获取到Map集合中所有的键值对对象的集合(Set集合)。

## 1.6 Map 集合遍历键值对方式  

键值对方式：即通过集合中每个键值对(Entry)对象，获取键值对(Entry)对象中的键与值。  

操作步骤与图解：  

1. 获取Map集合中，所有的键值对(Entry)对象，以Set集合形式返回。方法提示: `entrySet()` 。 
2. 遍历包含键值对(Entry)对象的Set集合，得到每一个键值对(Entry)对象。   
3. 通过键值对(Entry)对象，获取Entry对象中的键与值。 方法提示: `getkey() getValue()`

```java
public class MapDemo02 {
    public static void main(String[] args) {
        // 创建Map集合对象
        HashMap<String, String> map = new HashMap<String,String>();
        // 添加元素到集合
        map.put("胡歌", "霍建华");
        map.put("郭德纲", "于谦");
        map.put("薛之谦", "大张伟");
        // 获取 所有的 entry对象  entrySet
        Set<Entry<String,String>> entrySet = map.entrySet();
        // 遍历得到每一个entry对象
        for (Entry<String, String> entry : entrySet) {
           // 解析  
            String key = entry.getKey();
            String value = entry.getValue(); 
            System.out.println(key+"的CP是:"+value);
        }
    }
}
```

遍历图解：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/map03.png)

## 1.7 HashMap 存储自定义类型键值  

练习：每位学生（姓名，年龄）都有自己的家庭住址。那么，既然有对应关系，则将学生对象和家庭住址存储到
map集合中。学生作为键, 家庭住址作为值。 

> 注意，学生姓名相同并且年龄相同视为同一名学生。 

编写学生类：

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
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Student student = (Student) o;
        return age == student.age && Objects.equals(name, student.name);
    }
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
``` 

编写测试类：  

```java
public class HashMapTest {
    public static void main(String[] args) {
        //1,创建Hashmap集合对象。
        Map<Student,String>map = new HashMap<Student,String>();
        //2,添加元素。
        map.put(newStudent("lisi",28), "上海");
        map.put(newStudent("wangwu",22), "北京");
        map.put(newStudent("zhaoliu",24), "成都");
        map.put(newStudent("zhouqi",25), "广州");
        map.put(newStudent("wangwu",22), "南京");
       
        //3,取出元素。键找值方式
        Set<Student>keySet = map.keySet();
        for(Student key: keySet){
            Stringvalue = map.get(key);
            System.out.println(key.toString()+"....."+value);
        }
    }
}
```

- 当给 HashMap中存放自定义对象时，如果自定义对象作为key存在，这时要保证对象唯一，必须复写对象的
hashCode和equals方法(如果忘记，请回顾HashSet存放自定义对象)。 
- 如果要保证 map中存放的key和取出的顺序一致，可以使用 `java.util.LinkedHashMap` 集合来存放。

## 1.8 LinkedHashMap 

我们知道HashMap保证成对元素唯一，并且查询速度很快，可是成对元素存放进去是没有顺序的，那么我们要保
证有序，还要速度快怎么办呢？  

在HashMap下面有一个子类LinkedHashMap，它是链表和哈希表组合的一个数据存储结构。  

```java
public class LinkedHashMapDemo {
    public static void main(String[] args) {
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        map.put("邓超", "孙俪");
        map.put("李晨", "范冰冰");
        map.put("刘德华", "朱丽倩");
        Set<Entry<String, String>> entrySet = map.entrySet();
        for (Entry<String, String> entry : entrySet) {
            System.out.println(entry.getKey() + "  " + entry.getValue());
        }
    }
}
```

结果: 
```java
邓超  孙俪
李晨  范冰冰
刘德华  朱丽倩
```

## 1.9 Map 集合练习 

## 需求： 

计算一个字符串中每个字符出现次数。  

## 分析： 

1. 获取一个字符串对象
2. 创建一个Map集合，键代表字符，值代表次数。   
3. 遍历字符串得到每个字符。  
4. 判断Map中是否有该键。  
5. 如果没有，第一次出现，存储次数为1；如果有，则说明已经出现过，获取到对应的值进行++，再次存储。     
6. 打印最终结果  

## 代码: 

```java
public class MapTest {
public static void main(String[] args) {
        //友情提示
        System.out.println("请录入一个字符串:");
        String line = new Scanner(System.in).nextLine();
        // 定义 每个字符出现次数的方法
        findChar(line);
    }
    private static void findChar(String line) {
        //1:创建一个集合 存储  字符 以及其出现的次数
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        //2:遍历字符串
        for (int i = 0; i < line.length(); i++) {
            char c = line.charAt(i);
            //判断 该字符 是否在键集中
            if (!map.containsKey(c)) {//说明这个字符没有出现过
                //那就是第一次
                map.put(c, 1);
            } else {
                //先获取之前的次数
                Integer count = map.get(c);
                //count++;
                //再次存入  更新
                map.put(c, ++count);
            }
        }
        System.out.println(map);
    }
}
```

## 第二章 补充知识点  

### 2.1 JDK9 对集合添加的优化 

通常，我们在代码中创建一个集合（例如，List 或 Set ），并直接用一些元素填充它。 实例化集合，几个 add方法
调用，使得代码重复。  

```java
public class Demo01 {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("abc");
        list.add("def");
        list.add("ghi");
        System.out.println(list);
    }
}
```

Java 9，添加了几种集合工厂方法,更方便创建少量元素的集合、map实例。新的List、Set、Map的静态工厂方法可
以更方便地创建集合的不可变实例。 

例子： 

```java
public class HelloJDK9 { 
    public static void main(String[] args) { 
        Set<String> str1=Set.of("a","b","c"); 
        //str1.add("c");这里编译的时候不会错，但是执行的时候会报错，因为是不可变的集合 
        System.out.println(str1); 
        Map<String,Integer> str2=Map.of("a",1,"b",2); 
        System.out.println(str2); 
        List<String> str3=List.of("a","b"); 
        System.out.println(str3); 
    } 
}
```

需要注意以下两点：

> 1:of()方法只是Map，List，Set这三个接口的静态方法，其父类接口和子类实现并没有这类方法，比如HashSet，ArrayList等待；
> 2:返回的集合是不可变的；  

# 第三章 模拟斗地主洗牌发牌   

## 3.1  案例介绍 

按照斗地主的规则，完成洗牌发牌的动作。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/map04.png)  

具体规则： 
1. 组装54张扑克牌将  
2. 54张牌顺序打乱  
3. 三个玩家参与游戏，三人交替摸牌，每人17张牌，最后三张留作底牌。  
4. 查看三人各自手中的牌（按照牌的大小排序）、底牌

> 规则：手中扑克牌从大到小的摆放顺序：大王,小王,2,A,K,Q,J,10,9,8,7,6,5,4,3 

## 3.2  案例需求分析 

1. 准备牌：  
完成数字与纸牌的映射关系：
使用双列Map(HashMap)集合，完成一个数字与字符串纸牌的对应关系(相当于一个字典)。

2. 洗牌：  
通过数字完成洗牌发牌  

3. 发牌：  
将每个人以及底牌设计为ArrayList,将最后3张牌直接存放于底牌，剩余牌通过对3取模依次发牌。
存放的过程中要求数字大小与斗地主规则的大小对应。
将代表不同纸牌的数字分配给不同的玩家与底牌。

4. 看牌： 
通过Map集合找到对应字符展示。
通过查询纸牌与数字的对应关系，由数字转成纸牌字符串再进行展示。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/map05.png)

## 3.3 实现代码步骤  

```java
  public class Poker {
    public static void main(String[] args) {
        /*
         * 1组装54张扑克牌
         */
        // 1.1 创建Map集合存储
        HashMap<Integer, String> pokerMap = new HashMap<Integer, String>();
        // 1.2 创建 花色集合 与 数字集合
        ArrayList<String> colors = new ArrayList<String>();
        ArrayList<String> numbers = new ArrayList<String>();
        // 1.3 存储 花色 与数字
        Collections.addAll(colors, "♦", "♣", "♥", "♠");
        Collections.addAll(numbers, "2", "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4",
"3");
        // 设置 存储编号变量
        int count = 1;
        pokerMap.put(count++, "大王");
        pokerMap.put(count++, "小王");
        // 1.4 创建牌 存储到map集合中
        for (String number : numbers) {
            for (String color : colors) {
                String card = color + number;
                pokerMap.put(count++, card);
            }
        }
        /*
         * 2 将54张牌顺序打乱
         */
        // 取出编号 集合
        Set<Integer> numberSet = pokerMap.keySet();
        // 因为要将编号打乱顺序 所以 应该先进行转换到 list集合中
        ArrayList<Integer> numberList = new ArrayList<Integer>();
        numberList.addAll(numberSet);
        // 打乱顺序
        Collections.shuffle(numberList);
                // 3 完成三个玩家交替摸牌，每人17张牌，最后三张留作底牌
        // 3.1 发牌的编号
        // 创建三个玩家编号集合 和一个 底牌编号集合
        ArrayList<Integer> noP1 = new ArrayList<Integer>();
        ArrayList<Integer> noP2 = new ArrayList<Integer>();
        ArrayList<Integer> noP3 = new ArrayList<Integer>();
        ArrayList<Integer> dipaiNo = new ArrayList<Integer>();
        // 3.2发牌的编号
        for (int i = 0; i < numberList.size(); i++) {
            // 获取该编号
            Integer no = numberList.get(i);
            // 发牌
            // 留出底牌
            if (i >= 51) {
                dipaiNo.add(no);
            } else {
                if (i % 3 == 0) {
                    noP1.add(no);
                } else if (i % 3 == 1) {
                    noP2.add(no);
                } else {
                    noP3.add(no);
                }
            }
        }
        // 4 查看三人各自手中的牌（按照牌的大小排序）、底牌
        // 4.1 对手中编号进行排序
        Collections.sort(noP1);
        Collections.sort(noP2);
        Collections.sort(noP3);
        Collections.sort(dipaiNo);
        // 4.2 进行牌面的转换
        // 创建三个玩家牌面集合 以及底牌牌面集合
        ArrayList<String> player1 = new ArrayList<String>();
        ArrayList<String> player2 = new ArrayList<String>();
        ArrayList<String> player3 = new ArrayList<String>();
        ArrayList<String> dipai = new ArrayList<String>();
        // 4.3转换
        for (Integer i : noP1) {
            // 4.4 根据编号找到 牌面 pokerMap
            String card = pokerMap.get(i);
            // 添加到对应的 牌面集合中
            player1.add(card);
        }
        for (Integer i : noP2) {
            String card = pokerMap.get(i);
            player2.add(card);
                }
        for (Integer i : noP3) {
            String card = pokerMap.get(i);
            player3.add(card);
        }
        for (Integer i : dipaiNo) {
            String card = pokerMap.get(i);
            dipai.add(card);
        }
        //4.5 查看
        System.out.println("令狐冲："+player1);
        System.out.println("石破天："+player2);
        System.out.println("鸠摩智："+player3);
        System.out.println("底牌："+dipai);
    }
}
```

# day16 【异常、线程】

## 主要内容  

- 异常、线程 

## 学习目标 

- [ ] 能够辨别程序中异常和错误的区别  
- [ ] 说出异常的分类   
- [ ] 说出虚拟机处理异常的方式   
- [ ] 列举出常见的三个运行期异常   
- [ ] 能够使用try...catch关键字处理异常   
- [ ] 能够使用throws关键字处理异常   
- [ ] 能够自定义异常类   
- [ ] 能够处理自定义异常类  
- [ ] 说出进程的概念  
- [ ] 说出线程的概念   
- [ ] 能够理解并发与并行的区别   
- [ ] 能够开启新线程   

# 第一章 异常 

## 1.1 异常概念  

异常，就是不正常的意思。在生活中:医生说,你的身体某个部位有异常,该部位和正常相比有点不同,该部位的功能将
受影响.在程序中的意思就是：  

异常 ：指的是程序在执行过程中，出现的非正常的情况，最终会导致JVM的非正常停止。  

在Java等面向对象的编程语言中，异常本身是一个类，产生异常就是创建异常对象并抛出了一个异常对象。Java处
理异常的方式是中断处理。

> 异常指的并不是语法错误,语法错了,编译不通过,不会产生字节码文件,根本不能运行.  

## 1.2 异常体系  

异常机制其实是帮助我们找到程序中的问题，异常的根类是 `java.lang.Throwable` ，其下有两个子类：`java.lang.Error` 与 `java.lang.Exception` ，平常所说的异常指 `java.lang.Exception` 。  
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%BC%82%E5%B8%B801.png)   

### Throwable体系： 

- Error:严重错误Error，无法通过处理的错误，只能事先避免，好比绝症。  
- Exception:表示异常，异常产生后程序员可以通过代码的方式纠正，使程序继续运行，是必须要处理的。好比感冒、阑尾炎。   

### Throwable中的常用方法：  

- `public void printStackTrace()` :打印异常的详细信息。  
  包含了异常的类型,异常的原因,还包括异常出现的位置,在开发和调试阶段,都得使用printStackTrace。   

- `public String getMessage()` :获取发生异常的原因。 
  提示给用户的时候,就提示错误原因。  

- `public String toString()` :获取异常的类型和异常描述信息(不用)。  

## 1.3 异常分类  

我们平常说的异常就是指Exception，因为这类异常一旦出现，我们就要对代码进行更正，修复程序。  
异常(Exception)的分类:根据在编译时期还是运行时期去检查异常? 

- 编译时期异常:checked异常。在编译时期,就会检查,如果没有处理异常,则编译失败。(如日期格式化异常)  
- 运行时期异常:runtime异常。在运行时期,检查异常.在编译时期,运行异常不会编译器检测(不报错)。(如数学异常)  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%BC%82%E5%B8%B802.png)  

## 1.4 异常的产生过程解析  

先运行下面的程序，程序会产生一个数组索引越界异常ArrayIndexOfBoundsException。我们通过图解来解析下
异常产生的过程。  

工具类  

```java
public class ArrayTools {
    // 对给定的数组通过给定的角标获取元素。
    public static int getElement(int[] arr, int index) {
        int element = arr[index];
        return element;
    }
}
```

测试类  
```java
public class ExceptionDemo {
    public static void main(String[] args) {
        int[] arr = { 34, 12, 67 };
        intnum = ArrayTools.getElement(arr, 4)
        System.out.println("num=" + num);
        System.out.println("over");
    }
}
```

上述程序执行过程图解： 

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%BC%82%E5%B8%B803.png)  

# 第二章 异常的处理  

java异常处理的五个关键字：try、catch、finally、throw、throws  

## 2.1 抛出异常throw  
在编写程序时，我们必须要考虑程序出现问题的情况。比如，在定义方法时，方法需要接受参数。那么，当调用方法使用接受到的参数时，首先需要先对参数数据进行合法的判断，数据若不合法，就应该告诉调用者，传递合法的数据进来。这时需要使用抛出异常的方式来告诉调用者。

在java中，提供了一个throw关键字，它用来抛出一个指定的异常对象。那么，抛出一个异常具体如何操作呢？  
1. 创建一个异常对象。封装一些提示信息(信息可以自己编写)。
2. 需要将这个异常对象告知给调用者。怎么告知呢？怎么将这个异常对象传递到调用者处呢？通过关键字throw就可以完成。throw 异常对象。
throw用在方法内，用来抛出一个异常对象，将这个异常对象传递到调用者处，并结束当前方法的执行。

使用格式：

```java
throw new 异常类名(参数);
```

例如：  

```java
throw new NullPointerException("要访问的arr数组不存在");

throw new ArrayIndexOutOfBoundsException("该索引在数组中不存在，已超出范围");
```

学习完抛出异常的格式后，我们通过下面程序演示下throw的使用。  

```java
public class ThrowDemo {
    public static void main(String[] args) {
        //创建一个数组
        int[] arr = {2,4,52,2};
        //根据索引找对应的元素
        int index = 4;
        int element = getElement(arr, index);
        System.out.println(element);
        System.out.println("over");
    }
    /*
     * 根据 索引找到数组中对应的元素
     */
    public static int getElement(int[] arr,int index){
       //判断  索引是否越界 
        if(index<0 || index>arr.length‐1){
             /*
             判断条件如果满足，当执行完throw抛出异常对象后，方法已经无法继续运算。
             这时就会结束当前方法的执行，并将异常告知给调用者。这时就需要通过异常来解决。
              */
             throw new ArrayIndexOutOfBoundsException("哥们，角标越界了~~~");
        }
        int element = arr[index];
        return element;
    }
}
```
> 注意：如果产生了问题，我们就会throw将问题描述类即异常进行抛出，也就是将问题返回给该方法的调用者。
> 那么对于调用者来说，该怎么处理呢？一种是进行捕获处理，另一种就是继续讲问题声明出去，使用throws声明处理。

## 2.2 Objects非空判断  

还记得我们学习过一个类Objects吗，曾经提到过它由一些静态的实用方法组成，这些方法是null-save（空指针安
全的）或null-tolerant（容忍空指针的），那么在它的源码中，对对象为null的值进行了抛出异常操作。

- `public static <T> T requireNonNull(T obj)` :查看指定引用对象不是null。

查看源码发现这里对为null的进行了抛出异常操作：  

```java
public static <T> T requireNonNull(T obj) {
    if (obj == null)
       throw new NullPointerException();  
    return obj;
}
```

## 2.3 声明异常throws  

声明异常：将问题标识出来，报告给调用者。如果方法内通过throw抛出了编译时异常，而没有捕获处理（稍后讲
解该方式），那么必须通过throws进行声明，让调用者去处理。   

关键字throws运用于方法声明之上,用于表示当前方法不处理异常,而是提醒该方法的调用者来处理异常(抛出异常).  

声明异常格式：  

```java
修饰符 返回值类型 方法名(参数) throws 异常类名1,异常类名2…{   }   
```

声明异常的代码演示：  

```java
public class ThrowsDemo {
    public static void main(String[] args) throws FileNotFoundException {
        read("a.txt");
    }
    // 如果定义功能时有问题发生需要报告给调用者。可以通过在方法上使用throws关键字进行声明
    public static void read(String path) throws FileNotFoundException {
        if (!path.equals("a.txt")) {//如果不是 a.txt这个文件
            // 我假设  如果不是 a.txt 认为 该文件不存在 是一个错误 也就是异常  throw
            throw new FileNotFoundException("文件不存在");
        }
    }
}

```

throws用于进行异常类的声明，若该方法可能有多种异常情况产生，那么在throws后面可以写多个异常类，用逗
号隔开。

```java
public class ThrowsDemo2 {
    public static void main(String[] args) throws IOException {
        read("a.txt");
    }
    public static void read(String path)throws FileNotFoundException, IOException {
        if (!path.equals("a.txt")) {//如果不是 a.txt这个文件
            // 我假设  如果不是 a.txt 认为 该文件不存在 是一个错误 也就是异常  throw
            throw new FileNotFoundException("文件不存在");
        }
        if (!path.equals("b.txt")) {
            throw new IOException();
        }
    }
}
```

## 2.4 捕获异常try…catch  

如果异常出现的话,会立刻终止程序,所以我们得处理异常:  
1. 该方法不处理,而是声明抛出,由该方法的调用者来处理(throws)。   
2. 在方法中使用try-catch的语句块来处理异常。  

try-catch的方式就是捕获异常。  

- 捕获异常：Java中对异常有针对性的语句进行捕获，可以对出现的异常进行指定方式的处理。

捕获异常语法如下： 
```java
try{
     编写可能会出现异常的代码
}catch(异常类型  e){
     处理异常的代码
     //记录日志/打印异常信息/继续抛出异常
}
```
**try**：该代码块中编写可能产生异常的代码。
**catch**：该代码块中编写可能产生异常的代码。
> 注意:try和catch都不能单独使用,必须连用。  

演示如下：  

```java
public class TryCatchDemo {
    public static void main(String[] args) {
        try {// 当产生异常时，必须有处理方式。要么捕获，要么声明。
            read("b.txt");
        } catch (FileNotFoundException e) {// 括号中需要定义什么呢？
           //try中抛出的是什么异常，在括号中就定义什么异常类型  
            System.out.println(e);
        }
        System.out.println("over");
    }
    /*
     *
     * 我们 当前的这个方法中 有异常  有编译期异常
     */
    public static void read(String path) throws FileNotFoundException {
        if (!path.equals("a.txt")) {//如果不是 a.txt这个文件
            // 我假设  如果不是 a.txt 认为 该文件不存在 是一个错误 也就是异常  throw
            throw new FileNotFoundException("文件不存在");
        }
    }
}
```  

如何获取异常信息：  

Throwable类中定义了一些查看方法:  
- `public String getMessage()` :获取异常的描述信息,原因(提示给用户的时候,就提示错误原因。 
- `public String toString()` :获取异常的描述信息,原因(提示给用户的时候,就提示错误原因。 
- `public void printStackTrace()` :打印异常的跟踪栈信息并输出到控制台。

包含了异常的类型,异常的原因,还包括异常出现的位置,在开发和调试阶段,都得使用printStackTrace。  

## 2.4 finally 代码块  

finally：有一些特定的代码无论异常是否发生，都需要执行。另外，因为异常会引发程序跳转，导致有些语句执行
不到。而finally就是解决这个问题的，在finally代码块中存放的代码都是一定会被执行的。  

什么时候的代码必须最终执行？  

当我们在try语句块中打开了一些物理资源(磁盘文件/网络连接/数据库连接等),我们都得在使用完之后,最终关闭打开
的资源。

finally的语法:  

try...catch....finally:自身需要处理异常,最终还得关闭资源。  

> 注意:finally不能单独使用。  

比如在我们之后学习的IO流中，当打开了一个关联文件的资源，最后程序不管结果如何，都需要把这个资源关闭掉。

finally代码参考如下： 

```java
public class TryCatchDemo4 {
    public static void main(String[] args) {
        try {
            read("a.txt");
        } catch (FileNotFoundException e) {
            //抓取到的是编译期异常  抛出去的是运行期
            throw new RuntimeException(e);
        } finally {
            System.out.println("不管程序怎样，这里都将会被执行。");
        }
        System.out.println("over");
    }
    /*
     *
     * 我们 当前的这个方法中 有异常  有编译期异常
     */
    public static void read(String path) throws FileNotFoundException {
        if (!path.equals("a.txt")) {//如果不是 a.txt这个文件
            // 我假设  如果不是 a.txt 认为 该文件不存在 是一个错误 也就是异常  throw
            throw new FileNotFoundException("文件不存在");
        }
    }
}
```

> 当只有在try或者catch中调用退出JVM的相关方法,此时finally才不会执行,否则finally永远会执行。  

## 2.5 异常注意事项  

- 多个异常使用捕获又该如何处理呢？ 
  1. 多个异常分别处理。
  2. 多个异常一次捕获，多次处理。
  3. 多个异常一次捕获一次处理。  

一般我们是使用一次捕获多次处理方式，格式如下：  

```java
try{
     编写可能会出现异常的代码
}catch(异常类型A  e){  当try中出现A类型异常,就用该catch来捕获.
     处理异常的代码
     //记录日志/打印异常信息/继续抛出异常
}catch(异常类型B  e){  当try中出现B类型异常,就用该catch来捕获.
     处理异常的代码
     //记录日志/打印异常信息/继续抛出异常
}
```

> 注意:这种异常处理方式，要求多个catch中的异常不能相同，并且若catch中的多个异常之间有子父类异常的关系，那么子类异常要求在上面的catch处理，父类异常在下面的catch处理

- 运行时异常被抛出可以不处理。即不捕获也不声明抛出。  

- 如果finally有return语句,永远返回finally中的结果,避免该情况.  

- 如果父类抛出了多个异常,子类重写父类方法时,抛出和父类相同的异常或者是父类异常的子类或者不抛出异常。

- 父类方法没有抛出异常，子类重写父类该方法时也不可抛出异常。此时子类产生该异常，只能捕获处理，不能声明抛出

# 第三章 自定义异常  

## 3.1 概述 

为什么需要自定义异常类:  

我们说了Java中不同的异常类,分别表示着某一种具体的异常情况,那么在开发中总是有些异常情况是SUN没有定义
好的,此时我们根据自己业务的异常情况来定义异常类。例如年龄负数问题,考试成绩负数问题等等。

在上述代码中，发现这些异常都是JDK内部定义好的，但是实际开发中也会出现很多异常,这些异常很可能在JDK中
没有定义过,例如年龄负数问题,考试成绩负数问题.那么能不能自己定义异常呢？  

什么是自定义异常类:  

在开发中根据自己业务的异常情况来定义异常类.  

自定义一个业务逻辑异常: RegisterException。一个注册异常类。  

异常类如何定义:

1. 自定义一个编译期异常: 自定义类 并继承于`java.lang.Exception` 。  
2. 自定义一个运行时期的异常类:自定义类 并继承于 `java.lang.RuntimeException` 。

## 3.2 自定义异常的练习  

要求：我们模拟注册操作，如果用户名已存在，则抛出异常并提示：亲，该用户名已经被注册。  
首先定义一个登陆异常类RegisterException： 

```java
// 业务逻辑异常
public class RegisterException extends Exception {
    /**
     * 空参构造
     */
    public RegisterException() {
    }
    /**
     *
     * @param message 表示异常提示
     */
    public RegisterException(String message) {
        super(message);
    }
}
```

模拟登陆操作，使用数组模拟数据库中存储的数据，并提供当前注册账号是否存在方法用于判断。  

```java
public class Demo {
    // 模拟数据库中已存在账号
    private static String[] names = {"bill","hill","jill"};
  
    public static void main(String[] args) {    
        //调用方法
        try{
              // 可能出现异常的代码
            checkUsername("nill");
            System.out.println("注册成功");//如果没有异常就是注册成功
        }catch(RegisterException e){
            //处理异常
            e.printStackTrace();
        }
    }
    //判断当前注册账号是否存在
    //因为是编译期异常，又想调用者去处理 所以声明该异常
    public static boolean checkUsername(String uname) throws LoginException{
        for (String name : names) {
            if(name.equals(uname)){//如果名字在这里面 就抛出登陆异常
                throw new RegisterException("亲"+name+"已经被注册了！");
            }
        }
        return true;
    }
}
```

# 第四章 多线程 

我们在之前，学习的程序在没有跳转语句的前提下，都是由上至下依次执行，那现在想要设计一个程序，边打游戏
边听歌，怎么设计？

要解决上述问题,咱们得使用多进程或者多线程来解决.  

## 4.1 并发与并行 

- 并发：指两个或多个事件在同一个时间段内发生。
- 并行：指两个或多个事件在同一时刻发生（同时发生）。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B01.png) 


在操作系统中，安装了多个程序，并发指的是在一段时间内宏观上有多个程序同时运行，这在单 CPU 系统中，每
一时刻只能有一道程序执行，即微观上这些程序是分时的交替运行，只不过是给人的感觉是同时运行，那是因为分
时交替运行的时间是非常短的。  

而在多个 CPU 系统中，则这些可以并发执行的程序便可以分配到多个处理器上（CPU），实现多任务并行执行，
即利用每个处理器来处理一个可以并发执行的程序，这样多个程序便可以同时执行。目前电脑市场上说的多核
CPU，便是多核处理器，核 越多，并行处理的程序越多，能大大的提高电脑运行的效率。

> 注意：单核处理器的计算机肯定是不能并行的处理多个任务的，只能是多个任务在单个CPU上并发运行。同理,线程也是一样的，从宏观角度上理解线程是并行运行的，但是从微观角度上分析却是串行运行的，即一个线程一个线程的去运行，当系统只有一个CPU时，线程会以某种顺序执行多个线程，我们把这种情况称之为线程调度。

## 4.2 线程与进程  

- 进程：是指一个内存中运行的应用程序，每个进程都有一个独立的内存空间，一个应用程序可以同时运行多个进程；进程也是程序的一次执行过程，是系统运行程序的基本单位；系统运行一个程序即是一个进程从创建、运行到消亡的过程。

- 线程：线程是进程中的一个执行单元，负责当前进程中程序的执行，一个进程中至少有一个线程。一个进程中是可以有多个线程的，这个应用程序也可以称之为多线程程序。

简而言之：一个程序运行后至少有一个进程，一个进程中可以包含多个线程  

我们可以再电脑底部任务栏，右键----->打开任务管理器,可以查看当前任务的进程：

进程  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B02.png)  


线程:

线程调度:  
- 分时调度 
  所有线程轮流使用 CPU 的使用权，平均分配每个线程占用 CPU 的时间。

- 抢占式调度
  优先让优先级高的线程使用 CPU，如果线程的优先级相同，那么会随机选择一个(线程随机性)，Java使用的为抢占式调度。

  - 设置线程的优先级
  ![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B03.png)

  - 抢占式调度详解  
    大部分操作系统都支持多进程并发运行，现在的操作系统几乎都支持同时运行多个程序。比如：现在我们上课一边使用编辑器，一边使用录屏软件，同时还开着画图板，
    dos窗口等软件。此时，这些程序是在同时运行，”感觉这些软件好像在同一时刻运行着“。

    实际上，CPU(中央处理器)使用抢占式调度模式在多个线程间进行着高速的切换。对于CPU的一个核而言，某个时刻，只能执行一个线程，而 CPU的在多个线程间切换速度相对我们的感觉要快，看上去就是在同一时刻运行。 其实，多线程程序并不能提高程序的运行速度，但能够提高程序运行效率，让CPU的使用率更高。

    ![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B04.png)

 ## 4.3 创建线程类    

 Java使用 `java.lang.Thread` 类代表线程，所有的线程对象都必须是Thread类或其子类的实例。每个线程的作用是
完成一定的任务，实际上就是执行一段程序流即一段顺序执行的代码。Java使用线程执行体来代表这段程序流。
Java中通过继承Thread类来创建并启动多线程的步骤如下：

1. 定义Thread类的子类，并重写该类的run()方法，该run()方法的方法体就代表了线程需要完成的任务,因此把
run()方法称为线程执行体。  

2. 创建Thread子类的实例，即创建了线程对象  

3. 调用线程对象的start()方法来启动该线程

代码如下：  

测试类：  

```
public class Demo01 {
  public static void main(String[] args) {    
    //创建自定义线程对象        
    MyThread mt = new MyThread("新的线程！");        
    //开启新线程        
    mt.start();        
    //在主方法中执行for循环        
    for (int i = 0; i < 10; i++) {        
      System.out.println("main线程！"+i);            
    }        
  }    
}
```

自定义线程类：  

```java
public class MyThread extends Thread {
//定义指定线程名称的构造方法    
public MyThread(String name) {    
//调用父类的String参数的构造方法，指定线程的名称        
super(name);        
} 
/**    
 * 重写run方法，完成该线程执行的逻辑    
 */    
@Override    
  public void run() {    
    for (int i = 0; i < 10; i++) {        
        System.out.println(getName()+"：正在执行！"+i);            
    }        
  }    
}
```

# day17 【线程、同步】  

## 主要内容  

- 线程
- 同步
- 线程状态  

## 学习目标

- [ ]  能够描述Java中多线程运行原理
- [ ]  能够使用继承类的方式创建多线程
- [ ]  能够使用实现接口的方式创建多线程
- [ ]  能够说出实现接口方式的好处
- [ ]  能够解释安全问题的出现的原因
- [ ]  能够使用同步代码块解决线程安全问题
- [ ]  能够使用同步方法解决线程安全问题
- [ ]  能够说出线程6个状态的名称   

# 第一章 线程  

## 1.1  多线程原理  
昨天的时候我们已经写过一版多线程的代码，很多同学对原理不是很清楚，那么我们今天先画个多线程执行时序图
来体现一下多线程程序的执行流程。

代码如下： 
自定义线程类：

```java
public class MyThread extends Thread{
  /*    
   * 利用继承中的特点     
   *   将线程名称传递  进行设置    
   */    
  public MyThread(String name){    
    super(name);        
  }    
  /*    
   * 重写run方法    
   *  定义线程要执行的代码    
   */    
  public void run(){           
    for (int i = 0; i < 20; i++) { 
      //getName()方法 来自父亲 
      System.out.println(getName()+i);            
    }        
  }    
}
```

测试类：  
```java
public class Demo {
    public static void main(String[] args) {
        System.out.println("这里是main线程"); 
     
        MyThread mt = new MyThread("小强");  
              
        mt.start();//开启了一个新的线程    

        for (int i = 0; i < 20; i++) {    
          System.out.println("旺财:"+i);            
        }        
    }    
}
```

流程图：

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B05.png)  

程序启动运行 main时候，java虚拟机启动一个进程，主线程main在main()调用时候被创建。随着调用mt的对象的
start方法，另外一个新的线程也启动了，这样，整个应用就在多线程下运行。    

通过这张图我们可以很清晰的看到多线程的执行流程，那么为什么可以完成并发执行呢？我们再来讲一讲原理。    

多线程执行时，到底在内存中是如何运行的呢？以上个程序为例，进行图解说明：   

多线程执行时，在栈内存中，其实每一个执行线程都有一片自己所属的栈内存空间。进行方法的压栈和弹栈。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B06.png)  

当执行线程的任务结束了，线程自动在栈内存中释放了。但是当所有的执行线程都结束了，那么进程就结束了。


## 1.2 Thread 类   

在上一天内容中我们已经可以完成最基本的线程开启，那么在我们完成操作过程中用到了 java.lang.Thread 类，
API中该类中定义了有关线程的一些方法，具体如下：

###  构造方法：

- `public Thread()` :分配一个新的线程对象。  
- `public Thread(String name)` :分配一个指定名字的新的线程对象。  
- `public Thread(Runnable target)` :分配一个带有指定目标新的线程对象。
- `public Thread(Runnable target,String name)` :分配一个带有指定目标新的线程对象并指定名字。

### 常用方法： 

- `public String getName()` :获取当前线程名称。 
- `public void start()` :导致此线程开始执行; Java虚拟机调用此线程的run方法。  
- `public void run()` :此线程要执行的任务在此处定义代码。  
- `public static void sleep(long millis)` :使当前正在执行的线程以指定的毫秒数暂停（暂时停止执行）。 
- `public static Thread currentThread()` :返回对当前正在执行的线程对象的引用。

翻阅API后得知创建线程的方式总共有两种，一种是继承Thread类方式，一种是实现Runnable接口方式，方式一我
们上一天已经完成，接下来讲解方式二实现的方式。

## 1.3  创建线程方式二 
采用 `java.lang.Runnable` 也是非常常见的一种，我们只需要重写run方法即可。

步骤如下：  
1. 定义Runnable接口的实现类，并重写该接口的run()方法，该run()方法的方法体同样是该线程的线程执行体。
2. 创建Runnable实现类的实例，并以此实例作为Thread的target来创建Thread对象，该Thread对象才是真正的线程对象。
3. 调用线程对象的start()方法来启动线程。  

代码如下：

```java
public class MyRunnable implements Runnable{
  @Override    
  public void run() {    
    for (int i = 0; i < 20; i++) {        
      System.out.println(Thread.currentThread().getName()+" "+i);            
    }        
  }    
}

public class Demo {
    public static void main(String[] args) {
        //创建自定义类对象  线程任务对象
        MyRunnable mr = new MyRunnable();
        //创建线程对象
        Thread t = new Thread(mr, "小强");
        t.start();
        for (int i = 0; i < 20; i++) {
            System.out.println("旺财 " + i);
        }
    }
}
```

通过实现 Runnable接口，使得该类有了多线程类的特征。run()方法是多线程程序的一个执行目标。所有的多线程
代码都在run方法里面。Thread类实际上也是实现了Runnable接口的类。  

在启动的多线程的时候，需要先通过Thread类的构造方法Thread(Runnable target) 构造出对象，然后调用Thread
对象的start()方法来运行多线程代码。  

实际上所有的多线程代码都是通过运行Thread的start()方法来运行的。因此，不管是继承Thread类还是实现
Runnable接口来实现多线程，最终还是通过Thread的对象的API来控制线程的，熟悉Thread类的API是进行多线程编程的基础。

> tips:Runnable对象仅仅作为Thread对象的target，Runnable实现类里包含的run()方法仅作为线程执行体。而实际的线程对象依然是Thread实例，只是该Thread线程负责执行其target的run()方法。

## 1.4 Thread 和Runnable的区别  

如果一个类继承Thread，则不适合资源共享。但是如果实现了Runable接口的话，则很容易的实现资源共享。 

总结：  

实现Runnable接口比继承Thread类所具有的优势：  

1. 适合多个相同的程序代码的线程去共享同一个资源。 
2. 可以避免java中的单继承的局限性。 
3. 增加程序的健壮性，实现解耦操作，代码可以被多个线程共享，代码和线程独立。 
4. 线程池只能放入实现Runable或Callable类线程，不能直接放入继承Thread的类。

>扩充：在java中，每次程序运行至少启动2个线程。一个是main线程，一个是垃圾收集线程。因为每当使用java命令执行一个类的时候，实际上都会启动一个JVM，每一个JVM其实在就是在操作系统中启动了一个进程。


## 1.5  匿名内部类方式实现线程的创建  

使用线程的内匿名内部类方式，可以方便的实现每个线程执行不同的线程任务操作。  

使用匿名内部类的方式实现Runnable接口，重新Runnable接口中的run方法： 

```java
  public class NoNameInnerClassThread {
   public static void main(String[] args) {            
// new Runnable(){      
// public void run(){          
// for (int i = 0; i < 20; i++) {              
// System.out.println("张宇:"+i);                  
// }              
// }            
//    }; //‐‐‐这个整体  相当于new MyRunnable()    
        Runnable r = new Runnable(){
            public void run(){
                for (int i = 0; i < 20; i++) {
                   System.out.println("张宇:"+i);  
                }
            } 
        };
        new Thread(r).start();
        for (int i = 0; i < 20; i++) {
           System.out.println("费玉清:"+i);  
        }
   } 
}
```

# 第二章 线程安全  

## 2.1  线程安全 

如果有多个线程在同时运行，而这些线程可能会同时运行这段代码。程序每次运行结果和单线程运行的结果是一样
的，而且其他的变量的值也和预期的是一样的，就是线程安全的。  

我们通过一个案例，演示线程的安全问题：  

电影院要卖票，我们模拟电影院的卖票过程。假设要播放的电影是 “葫芦娃大战奥特曼”，本次电影的座位共100个
(本场电影只能卖100张票)。

我们来模拟电影院的售票窗口，实现多个窗口同时卖 “葫芦娃大战奥特曼”这场电影票(多个窗口一起卖这100张票)

需要窗口，采用线程对象来模拟；需要票，Runnable接口子类来模拟

模拟票：

```java
public class Ticket implements Runnable {
    private int ticket = 100;
    /*
     * 执行卖票操作
     */
    @Override
    public void run() {
        //每个窗口卖票的操作
        //窗口 永远开启
        while (true) {
            if (ticket > 0) {//有票 可以卖
                //出票操作
                //使用sleep模拟一下出票时间
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    // TODO Auto‐generated catch block
                    e.printStackTrace();
                }
                //获取当前线程对象的名字
                String name = Thread.currentThread().getName();
                System.out.println(name + "正在卖:" + ticket‐‐);
            }
        }
    }
}
```

测试类：

```java
public class Demo {
  public static void main(String[] args) {    
    //创建线程任务对象        
    Ticket ticket = new Ticket();        
    //创建三个窗口对象        
    Thread t1 = new Thread(ticket, "窗口1");        
    Thread t2 = new Thread(ticket, "窗口2");        
    Thread t3 = new Thread(ticket, "窗口3");        
           
    //同时卖票        
    t1.start();        
    t2.start();        
    t3.start();        
  }    
}
```

结果中有一部分这样现象：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B07.png)  

发现程序出现了两个问题：  

1. 相同的票数,比如5这张票被卖了两回。
2. 不存在的票，比如0票与-1票，是不存在的。   

这种问题，几个窗口(线程)票数不同步了，这种问题称为线程不安全。  

> 线程安全问题都是由全局变量及静态变量引起的。若每个线程中对全局变量、静态变量只有读操作，而无写操作，一般来说，这个全局变量是线程安全的；若有多个线程同时执行写操作，一般都需要考虑线程同步，否则的话就可能影响线程安全。

## 2.2  线程同步  

当我们使用多个线程访问同一资源的时候，且多个线程中对资源有写的操作，就容易出现线程安全问题。 

要解决上述多线程并发访问一个资源的安全性问题:也就是解决重复票与不存在票问题，Java中提供了同步机制
(synchronized)来解决。  

根据案例简述：  

```java
窗口1线程进入操作的时候，窗口2和窗口3线程只能在外等着，窗口1操作结束，窗口1和窗口2和窗口3才有机会进入代码
去执行。也就是说在某个线程修改共享资源的时候，其他线程不能修改该资源，等待修改完毕同步之后，才能去抢夺CPU
资源，完成对应的操作，保证了数据的同步性，解决了线程不安全的现象。

```

为了保证每个线程都能正常执行原子操作,Java引入了线程同步机制。  

那么怎么去使用呢？有三种方式完成同步操作：  

1. 同步代码块。
2. 同步方法。
3. 锁机制。

## 2.3  同步代码块  

- 同步代码块 ： synchronized 关键字可以用于方法中的某个区块中，表示只对这个区块的资源实行互斥访问。  

格式:  

```java
synchronized(同步锁){
     需要同步操作的代码
}
```

同步锁:  
对象的同步锁只是一个概念,可以想象为在对象上标记了一个锁.

1. 锁对象 可以是任意类型。 
2. 多个线程对象 要使用同一把锁。

> 注意:在任何时候,最多允许一个线程拥有同步锁,谁拿到锁就进入代码块,其他的线程只能在外等着(BLOCKED)。

使用同步代码块解决代码： 

```java
public class Ticket implements Runnable{
  private int ticket = 100;    
     
  Object lock = new Object();    
  /*    
   * 执行卖票操作    
   */    
  @Override    
  public void run() {    
    //每个窗口卖票的操作         
    //窗口 永远开启         
    while(true){        
      synchronized (lock) {            
        if(ticket>0){//有票 可以卖                
          //出票操作                    
          //使用sleep模拟一下出票时间                     
          try {                    
              Thread.sleep(50);                        
          } catch (InterruptedException e) {                    
            // TODO Auto‐generated catch block                        
            e.printStackTrace();                        
          }   
                           
          //获取当前线程对象的名字                     
          String name = Thread.currentThread().getName();                    
          System.out.println(name+"正在卖:"+ticket‐‐);                    
        }                
      } 
    }           
  }    
}
```  

当使用了同步代码块后，上述的线程的安全问题，解决了。 

## 2.4  同步方法

同步方法 :使用synchronized修饰的方法,就叫做同步方法,保证A线程执行该方法的时候,其他线程只能在方法外
等着。

格式：

```java
public synchronized void method(){
   可能会产生线程安全问题的代码 
}
```

> 同步锁是谁?
> 对于非static方法,同步锁就是this。
> 对于static方法,我们使用当前方法所在类的字节码对象(类名.class)。

使用同步方法代码如下：  

```java
public class Ticket implements Runnable{

    private int ticket = 100;    
    /*    
     * 执行卖票操作    
     */    
    @Override    
    public void run() {    
      //每个窗口卖票的操作         
      //窗口 永远开启         
      while(true){        
        sellTicket();            
      }        
    }    
     
  /*    
   * 锁对象 是 谁调用这个方法 就是谁     
   *   隐含 锁对象 就是  this    
   *        
   */    
    public synchronized void sellTicket(){    
        if(ticket>0){//有票 可以卖  
            //出票操作
            //使用sleep模拟一下出票时间
            try {
               Thread.sleep(100);  
            } catch (InterruptedException e) {
               // TODO Auto‐generated catch block  
               e.printStackTrace();
            }
            //获取当前线程对象的名字
            String name = Thread.currentThread().getName();
            System.out.println(name+"正在卖:"+ticket‐‐);
        }
    }    
}
```

## 2.5 Lock 锁  

`java.util.concurrent.locks.Lock` 机制提供了比synchronized代码块和synchronized方法更广泛的锁定操作,
同步代码块/同步方法具有的功能Lock都有,除此之外更强大,更体现面向对象。

Lock锁也称同步锁，加锁与释放锁方法化了，如下：  
- `public void lock()` :加同步锁。
- `public void unlock()` :释放同步锁。

使用如下：  

```java
public class Ticket implements Runnable{
  private int ticket = 100;    
     
  Lock lock = new ReentrantLock();    
  /*    
   * 执行卖票操作    
   */    
  @Override    
  public void run() {    
    //每个窗口卖票的操作         
    //窗口 永远开启         
    while(true){      
        
        lock.lock();            
        if(ticket>0){//有票 可以卖            
        //出票操作                 
        //使用sleep模拟一下出票时间    
                     
        try {                
        Thread.sleep(50);                    
        } catch (InterruptedException e) {                
          // TODO Auto‐generated catch block                    
          e.printStackTrace();                    
        }                

        //获取当前线程对象的名字                 
        String name = Thread.currentThread().getName();                
        System.out.println(name+"正在卖:"+ticket‐‐);                
      }            
      lock.unlock();            
    }        
  }    
}
```

# 第三章 线程状态  

## 3.1  线程状态概述  

当线程被创建并启动以后，它既不是一启动就进入了执行状态，也不是一直处于执行状态。在线程的生命周期中，
有几种状态呢？在API中 `java.lang.Thread.State` 这个枚举中给出了六种线程状态：

这里先列出各个线程状态发生的条件，下面将会对每种状态进行详细解析

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B08.png);

我们不需要去研究这几种状态的实现原理，我们只需知道在做线程操作中存在这样的状态。那我们怎么去理解这几
个状态呢，新建与被终止还是很容易理解的，我们就研究一下线程从Runnable（可运行）状态与非运行状态之间
的转换问题。


## 3.2 Timed Waiting （计时等待）

Timed Waiting在API中的描述为：一个正在限时等待另一个线程执行一个（唤醒）动作的线程处于这一状态。单独
的去理解这句话，真是玄之又玄，其实我们在之前的操作中已经接触过这个状态了，在哪里呢？

在我们写卖票的案例中，为了减少线程执行太快，现象不明显等问题，我们在run方法中添加了sleep语句，这样就
强制当前正在执行的线程休眠（暂停执行），以“减慢线程”。

其实当我们调用了sleep方法之后，当前执行的线程就进入到“休眠状态”，其实就是所谓的Timed Waiting(计时等
待)，那么我们通过一个案例加深对该状态的一个理解。

实现一个计数器，计数到100，在每个数字之间暂停1秒，每隔10个数字输出一个字符串

代码：

```java
public class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 100; i++) {
            if ((i) % 10 == 0) {
                System.out.println("‐‐‐‐‐‐‐" + i);
            }
            System.out.print(i);
            try {
                Thread.sleep(1000);
               System.out.print("    线程睡眠1秒！\n");  
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    public static void main(String[] args) {
        new MyThread().start();
    }
}

```
通过案例可以发现， sleep方法的使用还是很简单的。我们需要记住下面几点：

1. 进入 TIMED_WAITING 状态的一种常见情形是调用的 sleep 方法，单独的线程也可以调用，不一定非要有协作关系。

2. 为了让其他线程有机会执行，可以将Thread.sleep()的调用放线程run()之内。这样才能保证该线程执行过程
中会睡眠

3. sleep与锁无关，线程睡眠到期自动苏醒，并返回到Runnable（可运行）状态。

> 小提示：sleep()中指定的时间是线程不会运行的最短时间。因此，sleep()方法不能保证该线程睡眠到期后就开始立刻执行。

Timed Waiting 线程状态图：

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B09.png)

## 3.3 BLOCKED （锁阻塞） 

Blocked 状态在API中的介绍为：一个正在阻塞等待一个监视器锁（锁对象）的线程处于这一状态。

我们已经学完同步机制，那么这个状态是非常好理解的了。比如，线程A与线程B代码中使用同一锁，如果线程A获
取到锁，线程A进入到Runnable状态，那么线程B就进入到Blocked锁阻塞状态。

这是由Runnable状态进入Blocked状态。除此Waiting以及Time Waiting状态也会在某种情况下进入阻塞状态，而
这部分内容作为扩充知识点带领大家了解一下。

Blocked 线程状态图

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B10.png)

## 3.4 Waiting （无限等待）

Wating状态在API中介绍为：一个正在无限期等待另一个线程执行一个特别的（唤醒）动作的线程处于这一状态。  

那么我们之前遇到过这种状态吗？答案是并没有，但并不妨碍我们进行一个简单深入的了解。我们通过一段代码来
学习一下：

```java
 public class WaitingTest {
    public static Object obj = new Object();
    public static void main(String[] args) {
        // 演示waiting
        new Thread(new Runnable() {
            @Override
            public void run() {
                while (true){
                    synchronized (obj){
                        try {
                            System.out.println( Thread.currentThread().getName() +"=== 获取到锁对象，调用wait方法，进入waiting状态，释放锁对象");
                            obj.wait();  //无限等待
                            //obj.wait(5000); //计时等待, 5秒 时间到，自动醒来
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        System.out.println( Thread.currentThread().getName() + "=== 从waiting状态醒来，获取到锁对象，继续执行了");
                    }
                }
            }
        },"等待线程").start();
        new Thread(new Runnable() {
            @Override
            public void run() {
//                while (true){   //每隔3秒 唤醒一次
                    try {
                        System.out.println( Thread.currentThread().getName() +"‐‐‐‐‐ 等待3秒钟");
                        Thread.sleep(3000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    synchronized (obj){
                        System.out.println( Thread.currentThread().getName() +"‐‐‐‐‐ 获取到锁对象,调用notify方法，释放锁对象");
                        obj.notify();
                    }
                }
//            }
        },"唤醒线程").start();
    }
}
```

通过上述案例我们会发现，一个调用了某个对象的 Object.wait 方法的线程会等待另一个线程调用此对象的
Object.notify()方法 或 Object.notifyAll()方法。

其实waiting状态并不是一个线程的操作，它体现的是多个线程间的通信，可以理解为多个线程之间的协作关系，
多个线程会争取锁，同时相互之间又存在协作关系。就好比在公司里你和你的同事们，你们可能存在晋升时的竞
争，但更多时候你们更多是一起合作以完成某些任务。


当多个线程协作时，比如A，B线程，如果A线程在Runnable（可运行）状态中调用了wait()方法那么A线程就进入
了Waiting（无限等待）状态，同时失去了同步锁。假如这个时候B线程获取到了同步锁，在运行状态中调用了
notify()方法，那么就会将无限等待的A线程唤醒。注意是唤醒，如果获取到锁对象，那么A线程唤醒后就进入
Runnable（可运行）状态；如果没有获取锁对象，那么就进入到Blocked（锁阻塞状态）。

Waiting 线程状态图

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B11.png)

## 3.5  补充知识点 

到此为止我们已经对线程状态有了基本的认识，想要有更多的了解，详情可以见下图：  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%A4%9A%E7%BA%BF%E7%A8%8B12.png)

> 一条有意思的tips:
> 我们在翻阅API的时候会发现Timed Waiting（计时等待） 与 Waiting（无限等待） 状态联系还是很紧密的，比如Waiting（无限等待） 状态中wait方法是空参的，而timed waiting（计时等待） 中wait方法是带参的。这种带参的方法，其实是一种倒计时操作，相当于我们生活中的小闹钟，我们设定好时间，到时通知，可是如果提前得到（唤醒）通知，那么设定好时间在通知也就显得多此一举了，那么这种设计方案其实是一举两得。如果没有得到（唤醒）通知，那么线程就处于Timed Waiting状态,直到倒计时完毕自动醒来；如果在倒计时期间得到（唤醒）通知，那么线程从Timed Waiting状态立刻唤醒。


# day18 【线程池、Lambda表达式】   

## 主要内容  

- 等待与唤醒案例 
- 线程池 
- Lambda表达式  

## 学习目标

- [ ] 能够理解线程通信概念
- [ ] 能够理解等待唤醒机制
- [ ] 能够描述Java中线程池运行原理
- [ ] 能够理解函数式编程相对于面向对象的优点
- [ ] 能够掌握Lambda表达式的标准格式
- [ ] 能够使用Lambda标准格式使用Runnable与Comparator接口
- [ ] 能够掌握Lambda表达式的省略格式与规则
- [ ] 能够使用Lambda省略格式使用Runnable与Comparator接口
- [ ] 能够通过Lambda的标准格式使用自定义的接口（有且仅有一个抽象方法）
- [ ] 能够通过Lambda的省略格式使用自定义的接口（有且仅有一个抽象方法）
- [ ] 能够明确Lambda的两项使用前提

# 第一章 等待唤醒机制  

## 1.1 线程间通信  

概念：多个线程在处理同一个资源，但是处理的动作（线程的任务）却不相同。
比如：线程A用来生成包子的，线程B用来吃包子的，包子可以理解为同一资源，线程A与线程B处理的动作，一个是生产，一个是消费，那么线程A与线程B之间就存在线程通信问题。

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/Lambda01.png)

### 为什么要处理线程间通信：

多个线程并发执行时, 在默认情况下CPU是随机切换线程的，当我们需要多个线程来共同完成一件任务，并且我们希望他们有规律的执行, 那么多线程之间需要一些协调通信，以此来帮我们达到多线程共同操作一份数据。

### 如何保证线程间通信有效利用资源：  
多个线程在处理同一个资源，并且任务不同时，需要线程通信来帮助解决线程之间对同一个变量的使用或操作。 就是多个线程在操作同一份数据时， 避免对同一共享变量的争夺。也就是我们需要通过一定的手段使各个线程能有效的利用资源。而这种手段即—— 等待唤醒机制。

## 1.2 等待唤醒机制  

### 什么是等待唤醒机制  
这是多个线程间的一种协作机制。谈到线程我们经常想到的是线程间的竞争（race），比如去争夺锁，但这并不是故事的全部，线程间也会有协作机制。就好比在公司里你和你的同事们，你们可能存在在晋升时的竞争，但更多时候你们更多是一起合作以完成某些任务。

就是在一个线程进行了规定操作后，就进入等待状态（wait()）， 等待其他线程执行完他们的指定代码过后 再将其唤醒（notify()）;在有多个线程进行等待时， 如果需要，可以使用 notifyAll()来唤醒所有的等待线程。wait/notify 就是线程间的一种协作机制。

### 等待唤醒中的方法  

等待唤醒机制就是用于解决线程间通信的问题的，使用到的3个方法的含义如下：  
1. wait：线程不再活动，不再参与调度，进入 wait set 中，因此不会浪费 CPU 资源，也不会去竞争锁了，这时的线程状态即是 WAITING。它还要等着别的线程执行一个特别的动作，也即是“通知（notify）”在这个对象上等待的线程从wait set 中释放出来，重新进入到调度队列（ready queue）中

2. notify：则选取所通知对象的 wait set 中的一个线程释放；例如，餐馆有空位置后等候就餐最久的顾客最先入座。

3. notifyAll：则释放所通知对象的 wait set 上的全部线程。

> 注意：

> 哪怕只通知了一个等待的线程，被通知线程也不能立即恢复执行，因为它当初中断的地方是在同步块内，而此刻它已经不持有锁，所以她需要再次尝试去获取锁（很可能面临其它线程的竞争），成功后才能在当初调用 wait 方法之后的地方恢复执行。

> 总结如下：
  - 如果能获取锁，线程就从 WAITING 状态变成 RUNNABLE 状态；
  - 否则，从 wait set 出来，又进入 entry set，线程就从 WAITING 状态又变成BLOCKED 状态

### 调用wait和notify方法需要注意的细节 
1. wait方法与notify方法必须要由同一个锁对象调用。因为：对应的锁对象可以通过notify唤醒使用同一个锁对象调用的wait方法后的线程。

2. wait方法与notify方法是属于Object类的方法的。因为：锁对象可以是任意对象，而任意对象的所属类都是继承了Object类的。

3. wait方法与notify方法必须要在同步代码块或者是同步函数中使用。因为：必须要通过锁对象调用这2个方法。

## 1.3 生产者与消费者问题  

等待唤醒机制其实就是经典的“生产者与消费者”的问题。  
就拿生产包子消费包子来说等待唤醒机制如何有效利用资源：

```java
包子铺线程生产包子，吃货线程消费包子。当包子没有时（包子状态为false），吃货线程等待，包子铺线程生产包子
（即包子状态为true），并通知吃货线程（解除吃货的等待状态）,因为已经有包子了，那么包子铺线程进入等待状态。
接下来，吃货线程能否进一步执行则取决于锁的获取情况。如果吃货获取到锁，那么就执行吃包子动作，包子吃完（包
子状态为false），并通知包子铺线程（解除包子铺的等待状态）,吃货线程进入等待。包子铺线程能否进一步执行则取
决于锁的获取情况。
```  

### 代码演示：

包子资源类：  

```java
public class BaoZi {
     String  pier ;
     String  xianer ;
     boolean  flag = false ;//包子资源 是否存在  包子资源状态
}
```

吃货线程类：

```java
public class ChiHuo extends Thread{
    private BaoZi bz;
    public ChiHuo(String name,BaoZi bz){
        super(name);
        this.bz = bz;
    }
    @Override
    public void run() {
        while(true){
            synchronized (bz){
                if(bz.flag == false){//没包子
                    try {
                        bz.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.println("吃货正在吃"+bz.pier+bz.xianer+"包子");
                bz.flag = false;
                bz.notify();
            }
        }
    }
}
```

包子铺线程类：

```java
public class BaoZiPu extends Thread {
    private BaoZi bz;
    public BaoZiPu(String name,BaoZi bz){
        super(name);
        this.bz = bz;
    }
    @Override
    public void run() {
        int count = 0;
        //造包子
        while(true){
            //同步
            synchronized (bz){
                if(bz.flag == true){//包子资源  存在
                    try {
                        bz.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                // 没有包子  造包子
                System.out.println("包子铺开始做包子");
                if(count%2 == 0){
                    // 冰皮  五仁
                    bz.pier = "冰皮";
                    bz.xianer = "五仁";
                }else{
                    // 薄皮  牛肉大葱
                    bz.pier = "薄皮";
                    bz.xianer = "牛肉大葱";
                }
                count++;
                bz.flag=true;
                System.out.println("包子造好了："+bz.pier+bz.xianer);
                System.out.println("吃货来吃吧");
                //唤醒等待线程 （吃货）
                bz.notify();
            }
        }
    }
}
```

测试类：  

```java
public class Demo {
    public static void main(String[] args) {
        //等待唤醒案例
        BaoZi bz = new BaoZi();
        ChiHuo ch = new ChiHuo("吃货",bz);
        BaoZiPu bzp = new BaoZiPu("包子铺",bz);
        ch.start();
        bzp.start();
    }
}
```

执行效果：

```java
包子铺开始做包子
包子造好了：冰皮五仁
吃货来吃吧
吃货正在吃冰皮五仁包子
包子铺开始做包子
包子造好了：薄皮牛肉大葱
吃货来吃吧
吃货正在吃薄皮牛肉大葱包子
包子铺开始做包子
包子造好了：冰皮五仁
吃货来吃吧
吃货正在吃冰皮五仁包子
```

# 第二章 线程池

## 2.1 线程池思想概述  

我们使用线程的时候就去创建一个线程，这样实现起来非常简便，但是就会有一个问题：

如果并发的线程数量很多，并且每个线程都是执行一个时间很短的任务就结束了，这样频繁创建线程就会大大降低系统的效率，因为频繁创建线程和销毁线程需要时间。

那么有没有一种办法使得线程可以复用，就是执行完一个任务，并不被销毁，而是可以继续执行其他的任务？

在Java中可以通过线程池来达到这样的效果。今天我们就来详细讲解一下Java的线程池。

## 2.2 线程池概念  

线程池：其实就是一个容纳多个线程的容器，其中的线程可以反复使用，省去了频繁创建线程对象的操作，无需反复创建线程而消耗过多资源。

由于线程池中有很多操作都是与优化资源相关的，我们在这里就不多赘述。我们通过一张图来了解线程池的工作原理：

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/lambda02.png)  

合理利用线程池能够带来三个好处： 
1. 降低资源消耗。减少了创建和销毁线程的次数，每个工作线程都可以被重复利用，可执行多个任务。

2. 提高响应速度。当任务到达时，任务可以不需要的等到线程创建就能立即执行。

3. 提高线程的可管理性。可以根据系统的承受能力，调整线程池中工作线线程的数目，防止因为消耗过多的内存，而把服务器累趴下(每个线程需要大约1MB内存，线程开的越多，消耗的内存也就越大，最后死机)。

## 2.3 线程池的使用 

Java里面线程池的顶级接口是 `java.util.concurrent.Executor` ，但是严格意义上讲 `Executor` 并不是一个线程池，而只是一个执行线程的工具。真正的线程池接口是 `java.util.concurrent.ExecutorService` 。

要配置一个线程池是比较复杂的，尤其是对于线程池的原理不是很清楚的情况下，很有可能配置的线程池不是较优
的，因此在 `java.util.concurrent.Executors` 线程工厂类里面提供了一些静态工厂，生成一些常用的线程池。官方建议使用Executors工程类来创建线程池对象。

Executors类中有个创建线程池的方法如下：

 - `public static ExecutorService newFixedThreadPool(int nThreads)` ：返回线程池对象。(创建的是有界线
程池,也就是池中的线程个数可以指定最大数量)

获取到了一个线程池ExecutorService 对象，那么怎么使用呢，在这里定义了一个使用线程池对象的方法如下：

 - public Future<?> submit(Runnable task) :获取线程池中的某一个线程对象，并执行
   > Future接口：用来记录线程任务执行完毕后产生的结果。线程池创建与使用。

使用线程池中线程对象的步骤：

1. 创建线程池对象。
2. 创建Runnable接口子类对象。(task)
3. 提交Runnable接口子类对象。(take task)
4. 关闭线程池(一般不做)。

Runnable实现类代码：
```java
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("我要一个教练");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("教练来了： " + Thread.currentThread().getName());
        System.out.println("教我游泳,交完后，教练回到了游泳池");
    }
}
```

线程池测试类： 

```java
public class ThreadPoolDemo {
    public static void main(String[] args) {
        // 创建线程池对象
        ExecutorService service = Executors.newFixedThreadPool(2);//包含2个线程对象
        // 创建Runnable实例对象
        MyRunnable r = new MyRunnable();
        //自己创建线程对象的方式
        // Thread t = new Thread(r);
        // t.start(); ‐‐‐> 调用MyRunnable中的run()
        // 从线程池中获取线程对象,然后调用MyRunnable中的run()
        service.submit(r);
        // 再获取个线程对象，调用MyRunnable中的run()
        service.submit(r);
        service.submit(r);
        // 注意：submit方法调用结束后，程序并不终止，是因为线程池控制了线程的关闭。
        // 将使用完的线程又归还到了线程池中
        // 关闭线程池
        //service.shutdown();
    }
}
```

# 第三章 Lambda表达式 

## 3.1 函数式编程思想概述 

在数学中，函数就是有输入量、输出量的一套计算方案，也就是“拿什么东西做什么事情”。相对而言，面向对象过分强调“必须通过对象的形式来做事情”，而函数式思想则尽量忽略面向对象的复杂语法——强调做什么，而不是以什么形式做。

面向对象的思想:    
做一件事情,找一个能解决这个事情的对象,调用对象的方法,完成事情.

函数式编程思想:   
只要能获取到结果,谁去做的,怎么做的都不重要,重视的是结果,不重视过程  

## 3.2 冗余的Runnable代码

### 传统写法

当需要启动一个线程去完成任务时，通常会通过 `java.lang.Runnable` 接口来定义任务内容，并使用`java.lang.Thread` 类来启动该线程。代码如下：

```java
public class Demo01Runnable {
  public static void main(String[] args) {    
         // 匿名内部类    
    Runnable task = new Runnable() {        
      @Override            
      public void run() { // 覆盖重写抽象方法            
        System.out.println("多线程任务执行！");                
      }            
    };        
    new Thread(task).start(); // 启动线程        
  }    
}
```

本着“一切皆对象”的思想，这种做法是无可厚非的：首先创建一个 Runnable 接口的匿名内部类对象来指定任务内容，再将其交给一个线程来启动。

### 代码分析 

对于` Runnable` 的匿名内部类用法，可以分析出几点内容：

- `Thread` 类需要 `Runnable` 接口作为参数，其中的抽象 `run `方法是用来指定线程任务内容的核心；
- 为了指定 `run` 的方法体，不得不需要` Runnable `接口的实现类；
- 为了省去定义一个 `RunnableImpl` 实现类的麻烦，不得不使用匿名内部类；
- 必须覆盖重写抽象 `run` 方法，所以方法名称、方法参数、方法返回值不得不再写一遍，且不能写错；
- 而实际上，似乎只有方法体才是关键所在。

## 3.3 编程思想转换

### 做什么，而不是怎么做 
我们真的希望创建一个匿名内部类对象吗？不。我们只是为了做这件事情而不得不创建一个对象。我们真正希望做的事情是：将 `run` 方法体内的代码传递给 `Thread` 类知晓。

传递一段代码——这才是我们真正的目的。而创建对象只是受限于面向对象语法而不得不采取的一种手段方式。那，有没有更加简单的办法？如果我们将关注点从“怎么做”回归到“做什么”的本质上，就会发现只要能够更好地达到目的，过程与形式其实并不重要。

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/lambda03.png)

当我们需要从北京到上海时，可以选择高铁、汽车、骑行或是徒步。我们的真正目的是到达上海，而如何才能到达上海的形式并不重要，所以我们一直在探索有没有比高铁更好的方式——搭乘飞机。

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/lambda04.png)

而现在这种飞机（甚至是飞船）已经诞生：2014年3月Oracle所发布的Java 8（JDK 1.8）中，加入了Lambda表达式的重量级新特性，为我们打开了新世界的大门。

## 3.4 体验Lambda的更优写法  

借助Java 8的全新语法，上述` Runnable `接口的匿名内部类写法可以通过更简单的Lambda表达式达到等效：

```java
public class Demo02LambdaRunnable {
  public static void main(String[] args) {    
    new Thread(() ‐> System.out.println("多线程任务执行！")).start();
     // 启动线程        
  }    
}
```

这段代码和刚才的执行效果是完全一样的，可以在1.8或更高的编译级别下通过。从代码的语义中可以看出：我们启动了一个线程，而线程任务的内容以一种更加简洁的形式被指定。

不再有“不得不创建接口对象”的束缚，不再有“抽象方法覆盖重写”的负担，就是这么简单！  
## 3.5 回顾匿名内部类  

Lambda是怎样击败面向对象的？在上例中，核心代码其实只是如下所示的内容：

```java
() ‐> System.out.println("多线程任务执行！")
```

为了理解Lambda的语义，我们需要从传统的代码起步。  

### 使用实现类  

要启动一个线程，需要创建一个 `Thread` 类的对象并调用 `start` 方法。而为了指定线程执行的内容，需要调用`Thread` 类的构造方法：
- `public Thread(Runnable target)`

为了获取 `Runnable` 接口的实现对象，可以为该接口定义一个实现类 `RunnableImpl` ：

```java
public class RunnableImpl implements Runnable {
  @Override    
  public void run() {    
    System.out.println("多线程任务执行！");        
  }    
}
```

然后创建该实现类的对象作为 `Thread` 类的构造参数：

```java
public class Demo03ThreadInitParam {
  public static void main(String[] args) {    
    Runnable task = new RunnableImpl();        
    new Thread(task).start();        
  }    
}
```

### 使用匿名内部类  

这个 `RunnableImpl` 类只是为了实现 `Runnable` 接口而存在的，而且仅被使用了唯一一次，所以使用匿名内部类的语法即可省去该类的单独定义，即匿名内部类：

```java
public class Demo04ThreadNameless {
  public static void main(String[] args) {    
    new Thread(new Runnable() {        
      @Override            
      public void run() {            
        System.out.println("多线程任务执行！");                
      }            
    }).start();        
  }    
}
```

### 匿名内部类的好处与弊端

一方面，匿名内部类可以帮我们省去实现类的定义；另一方面，匿名内部类的语法——确实太复杂了！

### 语义分析
仔细分析该代码中的语义， `Runnable` 接口只有一个 `run` 方法的定义：
- `public abstract void run();`

即制定了一种做事情的方案（其实就是一个函数）：

- 无参数：不需要任何条件即可执行该方案。
- 无返回值：该方案不产生任何结果。
- 代码块（方法体）：该方案的具体执行步骤。

同样的语义体现在 `Lambda` 语法中，要更加简单：

```java
() ‐> System.out.println("多线程任务执行！")
```
- 前面的一对小括号即 run 方法的参数（无），代表不需要任何条件；
- 中间的一个箭头代表将前面的参数传递给后面的代码；
- 后面的输出语句即业务逻辑代码。 

## 3.6 Lambda标准格式  

Lambda省去面向对象的条条框框，格式由3个部分组成： 
- 一些参数
- 一个箭头
- 一段代码  

Lambda表达式的标准格式为：  
```java
(参数类型 参数名称) ‐> { 代码语句 }
```

格式说明：  
- 小括号内的语法与传统方法参数列表一致：无参数则留空；多个参数则用逗号分隔。
- `->` 是新引入的语法格式，代表指向动作。
- 大括号内的语法与传统方法体要求基本一致。

## 3.7 练习：使用Lambda标准格式（无参无返回）

### 题目

给定一个厨子 `Cook` 接口，内含唯一的抽象方法 `makeFood` ，且无参数、无返回值。如下：
```java
public interface Cook {
    void makeFood();
}
```

在下面的代码中，请使用Lambda的标准格式调用 `invokeCook` 方法，打印输出“吃饭啦！”字样：

```java
public class Demo05InvokeCook {
    public static void main(String[] args) {
        // TODO 请在此使用Lambda【标准格式】调用invokeCook方法
    }
    private static void invokeCook(Cook cook) {
        cook.makeFood();
    }
}
```

### 解答  
```java
public static void main(String[] args) {
    invokeCook(() ‐> {
       System.out.println("吃饭啦！");  
    });
}
```

> 备注：小括号代表 Cook 接口 makeFood 抽象方法的参数为空，大括号代表 makeFood 的方法体。

## 3.8 Lambda的参数和返回值

```java
需求:
   使用数组存储多个Person对象
   对数组中的Person对象使用Arrays的sort方法通过年龄进行升序排序
```

下面举例演示 `java.util.Comparator<T>` 接口的使用场景代码，其中的抽象方法定义为：
- `public abstract int compare(T o1, T o2);`

当需要对一个对象数组进行排序时， `Arrays.sort` 方法需要一个 `Comparator` 接口实例来指定排序的规则。假设有一个 `Person` 类，含有 `String name` 和 `int age` 两个成员变量：

```java
public class Person {
    private String name;
    private int age;
   
    // 省略构造器、toString方法与Getter Setter
}
```

### 传统写法 
如果使用传统的代码对 `Person[]` 数组进行排序，写法如下：

```java
import java.util.Arrays;
import java.util.Comparator;
public class Demo06Comparator {
    public static void main(String[] args) {
       // 本来年龄乱序的对象数组  
        Person[] array = {
         new Person("古力娜扎", 19),    
         new Person("迪丽热巴", 18),    
        new Person("马尔扎哈", 20) };     
       // 匿名内部类  
        Comparator<Person> comp = new Comparator<Person>() {
            @Override
            public int compare(Person o1, Person o2) {
                return o1.getAge() ‐ o2.getAge();
            }
        };
        Arrays.sort(array, comp); // 第二个参数为排序规则，即Comparator接口实例
        for (Person person : array) {
            System.out.println(person);
        }
    }
}
```

这种做法在面向对象的思想中，似乎也是“理所当然”的。其中 `Comparator` 接口的实例（使用了匿名内部类）代表了“按照年龄从小到大”的排序规则。

### 代码分析 
下面我们来搞清楚上述代码真正要做什么事情。
- 为了排序， `Arrays.sort` 方法需要排序规则，即 `Comparator` 接口的实例，抽象方法 compare 是关键；
- 为了指定 `compare` 的方法体，不得不需要 `Comparator` 接口的实现类；
- 为了省去定义一个 `ComparatorImpl` 实现类的麻烦，不得不使用匿名内部类；
- 必须覆盖重写抽象 `compare` 方法，所以方法名称、方法参数、方法返回值不得不再写一遍，且不能写错；
- 实际上，只有参数和方法体才是关键。

### Lambda写法 
```java
import java.util.Arrays;
public class Demo07ComparatorLambda {
    public static void main(String[] args) {
        Person[] array = {
           new Person("古力娜扎", 19),  
           new Person("迪丽热巴", 18),  
           new Person("马尔扎哈", 20) };  
        Arrays.sort(array, (Person a, Person b) ‐> {
           return a.getAge() ‐ b.getAge();  
        });
        for (Person person : array) {
            System.out.println(person);
        }
    }
}
```

## 3.9 练习：使用Lambda标准格式（有参有返回） 

### 题目

给定一个计算器 `Calculator` 接口，内含抽象方法 `calc` 可以将两个int数字相加得到和值：

```java
public interface Calculator {
    int calc(int a, int b);
}
```

在下面的代码中，请使用`Lambda`的标准格式调用 `invokeCalc` 方法，完成120和130的相加计算：

```java
public class Demo08InvokeCalc {
    public static void main(String[] args) {
        // TODO 请在此使用Lambda【标准格式】调用invokeCalc方法来计算120+130的结果ß
    }
    private static void invokeCalc(int a, int b, Calculator calculator) {
        int result = calculator.calc(a, b);
        System.out.println("结果是：" + result);
    }
}
```

## 解答 
```java
public static void main(String[] args) {
    invokeCalc(120, 130, (int a, int b) ‐> {
       return a + b;  
    });
}
```
> 备注：小括号代表 `Calculator` 接口 `calc` 抽象方法的参数，大括号代表 `calc` 的方法体。

## 3.10 Lambda省略格式

### 可推导即可省略
Lambda强调的是“做什么”而不是“怎么做”，所以凡是可以根据上下文推导得知的信息，都可以省略。例如上例还可以使用Lambda的省略写法：
```java
public static void main(String[] args) {
   invokeCalc(120, 130, (a, b) ‐> a + b);  
}
```

### 省略规则

在Lambda标准格式的基础上，使用省略写法的规则为： 
1. 小括号内参数的类型可以省略；
2. 如果小括号内有且仅有一个参，则小括号可以省略；
3. 如果大括号内有且仅有一个语句，则无论是否有返回值，都可以省略大括号、return关键字及语句分号。

> 备注：掌握这些省略规则后，请对应地回顾本章开头的多线程案例。

## 3.11 练习：使用Lambda省略格式

### 题目
仍然使用前文含有唯一 `makeFood` 抽象方法的厨子 `Cook` 接口，在下面的代码中，请使用`Lambda`的省略格式调用`invokeCook` 方法，打印输出“吃饭啦！”字样：

```java
public class Demo09InvokeCook {
    public static void main(String[] args) {
        // TODO 请在此使用Lambda【省略格式】调用invokeCook方法
    }
    private static void invokeCook(Cook cook) {
        cook.makeFood();
    }
}
```
### 解答  
```java
public static void main(String[] args) {
   invokeCook(() ‐> System.out.println("吃饭啦！"));  
}
```

## 3.12 Lambda的使用前提

Lambda的语法非常简洁，完全没有面向对象复杂的束缚。但是使用时有几个问题需要特别注意：  

1. 使用Lambda必须具有接口，且要求接口中有且仅有一个抽象方法。无论是JDK内置的 `Runnable` 、 `Comparator` 接口还是自定义的接口，只有当接口中的抽象方法存在且唯一时，才可以使用Lambda。   

2. 使用Lambda必须具有上下文推断。也就是方法的参数或局部变量类型必须为Lambda对应的接口类型，才能使用Lambda作为该接口的实例。

> 备注：有且仅有一个抽象方法的接口，称为“函数式接口”。


# day19 【File类、递归】  

## 主要内容

- File类
- 递归

## 学习目标
- [ ] 能够说出File对象的创建方式
- [ ] 能够说出File类获取名称的方法名称
- [ ] 能够说出File类获取绝对路径的方法名称
- [ ] 能够说出File类获取文件大小的方法名称
- [ ] 能够说出File类判断是否是文件的方法名称
- [ ] 能够说出File类判断是否是文件夹的方法名称
- [ ] 能够辨别相对路径和绝对路径
- [ ] 能够遍历文件夹
- [ ] 能够解释递归的含义
- [ ] 能够使用递归的方式计算5的阶乘
- [ ] 能够说出使用递归会内存溢出隐患的原因

# 第一章 File类   

1.1 概述 

`java.io.File` 类是文件和目录路径名的抽象表示，主要用于文件和目录的创建、查找和删除等操作。

1.2 构造方法

- `public File(String pathname)` ：通过将给定的路径名字符串转换为抽象路径名来创建新的 File实例。
- `public File(String parent, String child)` ：从父路径名字符串和子路径名字符串创建新的 File实例。
- `public File(File parent, String child)` ：从父抽象路径名和子路径名字符串创建新的 File实例。
- 构造举例，代码如下：

```java
// 文件路径名
String pathname = "D:\\aaa.txt";
File file1 = new File(pathname);
// 文件路径名
String pathname2 = "D:\\aaa\\bbb.txt";
File file2 = new File(pathname2);
// 通过父路径和子路径字符串
 String parent = "d:\\aaa";
 String child = "bbb.txt";
 File file3 = new File(parent, child);
// 通过父级File对象和子路径字符串
File parentDir = new File("d:\\aaa");
String child = "bbb.txt";
File file4 = new File(parentDir, child);

```

> 小贴士：
> 1. 一个File对象代表硬盘中实际存在的一个文件或者目录。
> 2. 无论该路径下是否存在文件或者目录，都不影响File对象的创建。

## 1.3 常用方法

获取功能的方法

- `public String getAbsolutePath()` ：返回此File的绝对路径名字符串。
- `public String getPath()` ：将此File转换为路径名字符串
- `public String getName()`：返回由此File表示的文件或目录的名称。
- `public long length()`：返回由此File表示的文件的长度。

方法演示，代码如下：

```java
public class FileGet {
    public static void main(String[] args) {
        File f = new File("d:/aaa/bbb.java");    
        System.out.println("文件绝对路径:"+f.getAbsolutePath());
        System.out.println("文件构造路径:"+f.getPath());
        System.out.println("文件名称:"+f.getName());
        System.out.println("文件长度:"+f.length()+"字节");
        File f2 = new File("d:/aaa");    
        System.out.println("目录绝对路径:"+f2.getAbsolutePath());
        System.out.println("目录构造路径:"+f2.getPath());
        System.out.println("目录名称:"+f2.getName());
        System.out.println("目录长度:"+f2.length());
    }
}
输出结果：
文件绝对路径:d:\aaa\bbb.java
文件构造路径:d:\aaa\bbb.java
文件名称:bbb.java
文件长度:636字节
目录绝对路径:d:\aaa
目录构造路径:d:\aaa
目录名称:aaa
目录长度:4096
```

> API中说明：length()，表示文件的长度。但是File对象表示目录，则返回值未指定。

### 绝对路径和相对路径
- 绝对路径：从盘符开始的路径，这是一个完整的路径。
- 相对路径：相对于项目目录的路径，这是一个便捷的路径，开发中经常使用。

```java
public class FilePath {
    public static void main(String[] args) {
       // D盘下的bbb.java文件  
        File f = new File("D:\\bbb.java");
        System.out.println(f.getAbsolutePath());
       
// 项目下的bbb.java文件        
        File f2 = new File("bbb.java");
        System.out.println(f2.getAbsolutePath());
    }
}
输出结果：
D:\bbb.java
D:\idea_project_test4\bbb.java
```

### 判断功能的方法
- `public boolean exists()` ：此File表示的文件或目录是否实际存在。
- `public boolean isDirectory()` ：此File表示的是否为目录。
- `public boolean isFile()` ：此File表示的是否为文件。

方法演示，代码如下：

```java
public class FileIs {
    public static void main(String[] args) {
        File f = new File("d:\\aaa\\bbb.java");
        File f2 = new File("d:\\aaa");
       // 判断是否存在  
        System.out.println("d:\\aaa\\bbb.java 是否存在:"+f.exists());
        System.out.println("d:\\aaa 是否存在:"+f2.exists());
       // 判断是文件还是目录  
        System.out.println("d:\\aaa 文件?:"+f2.isFile());
        System.out.println("d:\\aaa 目录?:"+f2.isDirectory());
    }
}
输出结果：
d:\aaa\bbb.java 是否存在:true
d:\aaa 是否存在:true
d:\aaa 文件?:false
d:\aaa 目录?:true
```

### 创建删除功能的方法
`
- `public boolean createNewFile()` ：当且仅当具有该名称的文件尚不存在时，创建一个新的空文件。
- `public boolean delete()` ：删除由此File表示的文件或目录。
- `public boolean mkdir()` ：创建由此File表示的目录。
- `public boolean mkdirs()` ：创建由此File表示的目录，包括任何必需但不存在的父目录。

方法演示，代码如下：
```java
public class FileCreateDelete {
    public static void main(String[] args) throws IOException {
        // 文件的创建
        File f = new File("aaa.txt");
        System.out.println("是否存在:"+f.exists()); // false
        System.out.println("是否创建:"+f.createNewFile()); // true
        System.out.println("是否存在:"+f.exists()); // true
       
      // 目录的创建   
       File f2= new File("newDir");       
        System.out.println("是否存在:"+f2.exists());// false
        System.out.println("是否创建:"+f2.mkdir()); // true 
        System.out.println("是否存在:"+f2.exists());// true
// 创建多级目录        
       File f3= new File("newDira\\newDirb");  
        System.out.println(f3.mkdir());// false
        File f4= new File("newDira\\newDirb");
        System.out.println(f4.mkdirs());// true
     
       // 文件的删除  
       System.out.println(f.delete());// true 
     
       // 目录的删除  
        System.out.println(f2.delete());// true
        System.out.println(f4.delete());// false
    }
}
```

> API中说明：delete方法，如果此File表示目录，则目录必须为空才能删除。

### 1.4 目录的遍历

- `public String[] list()` ：返回一个String数组，表示该File目录中的所有子文件或目录。
- `public File[] listFiles()` ：返回一个File数组，表示该File目录中的所有的子文件或目录。

```java
public class FileFor {
    public static void main(String[] args) {
        File dir = new File("d:\\java_code");
     
           //获取当前目录下的文件以及文件夹的名称。  
          String[] names = dir.list();        
          for(String name : names){        
            System.out.println(name); 
          }
            //获取当前目录下的文件以及文件夹对象，只要拿到了文件对象，那么就可以获取更多信息
           File[] files = dir.listFiles();
           for (File file : files) {
               System.out.println(file);
            }
      }
}

```
> 小贴士：
> 调用listFiles方法的File对象，表示的必须是实际存在的目录，否则返回null，无法进行遍历。

# 第二章 递归

## 2.1 概述
- 递归：指在当前方法内调用自己的这种现象。
- 递归的分类:
  - 递归分为两种，直接递归和间接递归。
  - 直接递归称为方法自身调用自己。
  - 间接递归可以A方法调用B方法，B方法调用C方法，C方法调用A方法。
- 注意事项：
  - 递归一定要有条件限定，保证递归能够停止下来，否则会发生栈内存溢出。
  - 在递归中虽然有限定条件，但是递归次数不能太多。否则也会发生栈内存溢出。
  - 构造方法,禁止递归

```java
public class Demo01DiGui {

  public static void main(String[] args) {    
      // a();        
      b(1);        
  }    
   
  /*    
   * 3.构造方法,禁止递归    
   * 编译报错:构造方法是创建对象使用的,不能让对象一直创建下去    
   */    
  public Demo01DiGui() {    
  //Demo01DiGui();        
  }    
  /*    

 * 2.在递归中虽然有限定条件，但是递归次数不能太多。否则也会发生栈内存溢出。    
 * 4993    
 * Exception in thread "main" java.lang.StackOverflowError      
 */    
  private static void b(int i) {    
    System.out.println(i); 
    //添加一个递归结束的条件,i==5000的时候结束     
    if(i==5000){        
      return;//结束方法            
    }        
      b(++i);        
    }   
     
    /*    
     * 1.递归一定要有条件限定，保证递归能够停止下来，否则会发生栈内存溢出。 Exception in thread "main"    
     * java.lang.StackOverflowError    
     */    
    private static void a() {    
      System.out.println("a方法");        
        a();        
      }    
    } 
  }  
}

```

## 2.2 递归累加求和

### 计算1 ~ n的和
分析：num的累和 = num + (num-1)的累和，所以可以把累和的操作定义成一个方法，递归调用。

实现代码：

```java
public class DiGuiDemo {
    public static void main(String[] args) {    
        //计算1~num的和，使用递归完成        
        int num = 5;        
               // 调用求和的方法  
        int sum = getSum(num);        
               // 输出结果  
        System.out.println(sum);        
           
    }    
     /*  
       通过递归算法实现.  
       参数列表:int   
       返回值类型: int   
     */  
    public static int getSum(int num) {    
        /*   
          num为1时,方法返回1,  
          相当于是方法的出口,num总有是1的情况  
       */  
        if(num == 1){        
          return 1;            
        }        
               /*  
                  num不为1时,方法返回 num +(num‐1)的累和
                  递归调用getSum方法
                */
          num + getSum(num‐1);        
        } 
    }   
}
```

### 代码执行图解

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E9%80%92%E5%BD%9201.png)

> 小贴士：递归一定要有条件限定，保证递归能够停止下来，次数不要太多，否则会发生栈内存溢出。

## 2.3 递归求阶乘

- 阶乘：所有小于及等于该数的正整数的积。

```java
n的阶乘：n! = n * (n‐1) *...* 3 * 2 * 1
```

分析：这与累和类似,只不过换成了乘法运算，学员可以自己练习，需要注意阶乘值符合int类型的范围。  

```java
推理得出：n! = n * (n‐1)!
```

代码实现：  

```java
public class DiGuiDemo {
   //计算n的阶乘，使用递归完成  
    public static void main(String[] args) {
        int n = 3;
       // 调用求阶乘的方法  
        int value = getValue(n);
       // 输出结果
      System.out.println("阶乘为:"+ value);
    }
   /*    
     通过递归算法实现.  
     参数列表:int   
     返回值类型: int   
   */  
    public static int getValue(int n) {
       // 1的阶乘为1  
        if (n == 1) {
            return 1;
        }
       /*  
         n不为1时,方法返回 n! = n*(n‐1)!  
          递归调用getValue方法
       */  
        return n * getValue(n ‐ 1);
    }
}
```

## 2.4 递归打印多级目录

分析：多级目录的打印，就是当目录的嵌套。遍历之前，无从知道到底有多少级目录，所以我们还是要使用递归实现。

代码实现：
```java
public class DiGuiDemo2 {
    public static void main(String[] args) {
       // 创建File对象  
        File dir  = new File("D:\\aaa");
       // 调用打印目录方法  
        printDir(dir);
    }
    public static void  printDir(File dir) {
       // 获取子文件和目录  
        File[] files = dir.listFiles();
       // 循环打印  
       /*  
         判断:  
         当是文件时,打印绝对路径.  
         当是目录时,继续调用打印目录的方法,形成递归调用.  
       */  
        for (File file : files) {
           // 判断        
            if (file.isFile()) {
               // 是文件,输出文件绝对路径  
                System.out.println("文件名:"+ file.getAbsolutePath());
            } else {
               // 是目录,输出目录绝对路径  
                System.out.println("目录:"+file.getAbsolutePath());
               // 继续遍历,调用printDir,形成递归  
                printDir(file);
            }
        }
    }
}
```

# 第三章 综合案例  

## 3.1 文件搜索   

搜索 `D:\aaa` 目录中的 `.java` 文件。

分析：
  1. 目录搜索，无法判断多少级目录，所以使用递归，遍历所有目录。
  2. 遍历目录时，获取的子文件，通过文件名称，判断是否符合条件。

代码实现：  

```java
public class DiGuiDemo3 {
    public static void main(String[] args) {
        // 创建File对象
        File dir  = new File("D:\\aaa");
       // 调用打印目录方法  
        printDir(dir);
    }
    public static void printDir(File dir) {
       // 获取子文件和目录  
        File[] files = dir.listFiles();
       
       // 循环打印  
        for (File file : files) {
            if (file.isFile()) {
               // 是文件，判断文件名并输出文件绝对路径  
                if (file.getName().endsWith(".java")) {
                    System.out.println("文件名:" + file.getAbsolutePath());
                }
            } else {
                // 是目录，继续遍历,形成递归
                printDir(file);
            }
        }
    }
}
```

## 3.2 文件过滤器优化

`java.io.FileFilter` 是一个接口，是File的过滤器。 该接口的对象可以传递给File类的 `listFiles(FileFilter)`作为参数， 接口中只有一个方法。

`boolean accept(File pathname)` ：测试pathname是否应该包含在当前File目录中，符合则返回true。

分析：
1. 接口作为参数，需要传递子类对象，重写其中方法。我们选择匿名内部类方式，比较简单。

2.  accept 方法，参数为File，表示当前File下所有的子文件和子目录。保留住则返回true，过滤掉则返回false。保留规则：   
    1. 要么是.java文件。
    2. 要么是目录，用于继续遍历。
3. 通过过滤器的作用， `listFiles(FileFilter)` 返回的数组元素中，子文件对象都是符合条件的，可以直接打印。

代码实现：

```java
public class DiGuiDemo4 {
    public static void main(String[] args) {
        File dir = new File("D:\\aaa");
        printDir2(dir);
    }
 
    public static void printDir2(File dir) {
       // 匿名内部类方式,创建过滤器子类对象  
        File[] files = dir.listFiles(new FileFilter() {
            @Override
            public boolean accept(File pathname) {
                return pathname.getName().endsWith(".java")||pathname.isDirectory();
            }
        });
       // 循环打印  
        for (File file : files) {
            if (file.isFile()) {
                System.out.println("文件名:" + file.getAbsolutePath());
            } else {
                printDir2(file);
            }
        }
    }
} 
```

## 3.3 Lambda优化

分析： `FileFilter` 是只有一个方法的接口，因此可以用lambda表达式简写。
lambda格式：
```java
()‐>{ }
```

代码实现：

```java
public static void printDir3(File dir) {
   // lambda的改写  
    File[] files = dir.listFiles(f ‐>{
       return f.getName().endsWith(".java") || f.isDirectory();   
    });
   
// 循环打印    
    for (File file : files) {
        if (file.isFile()) {
            System.out.println("文件名:" + file.getAbsolutePath());
       } else {  
         printDir3(file);    
       }  
    }
}
```

# day20 【字节流、字符流】

## 主要内容

- IO流
- 字节流
- 字符流
- 异常处理
- Properties

## 教学目标

- [ ] 能够说出IO流的分类和功能
- [ ] 能够使用字节输出流写出数据到文件
- [ ] 能够使用字节输入流读取数据到程序
- [ ] 能够理解读取数据read(byte[])方法的原理
- [ ] 能够使用字节流完成文件的复制
- [ ] 能够使用FileWirter写数据到文件
- [ ] 能够说出FileWriter中关闭和刷新方法的区别
- [ ] 能够使用FileWriter写数据的5个方法
- [ ] 能够使用FileWriter写数据实现换行和追加写
- [ ] 能够使用FileReader读数据
- [ ] 能够使用FileReader读数据一次一个字符数组
- [ ] 能够使用Properties的load方法加载文件中配置信息  

# 第一章 IO概述

## 1.1 什么是IO

生活中，你肯定经历过这样的场景。当你编辑一个文本文件，忘记了 `ctrl+s` ，可能文件就白白编辑了。当你电脑上插入一个U盘，可以把一个视频，拷贝到你的电脑硬盘里。那么数据都是在哪些设备上的呢？键盘、内存、硬盘、外接设备等等。

我们把这种数据的传输，可以看做是一种数据的流动，按照流动的方向，以内存为基准，分为 输入`input` 和 输出`output` ，即流向内存是输入流，流出内存的输出流。

Java中I/O操作主要是指使用 `java.io` 包下的内容，进行输入、输出操作。输入也叫做读取数据，输出也叫做作写出数据。

## 1.2 IO的分类  

根据数据的流向分为：输入流和输出流。 
- 输入流 ：把数据从 其他设备 上读取到 内存 中的流。
- 输出流 ：把数据从 内存 中写出到 其他设备 上的流。

格局数据的类型分为：字节流和字符流。 
- 字节流 ：以字节为单位，读写数据的流。
- 字符流 ：以字符为单位，读写数据的流。

## 1.3 IO的流向说明图解

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/io%E6%B5%81%E7%A8%8B01.png)

## 1.4 顶级父类们

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/io%E6%B5%81%E7%A8%8B02.png)

# 第二章 字节流

## 2.1 一切皆为字节 

一切文件数据(文本、图片、视频等)在存储时，都是以二进制数字的形式保存，都一个一个的字节，那么传输时一样如此。所以，字节流可以传输任意文件数据。在操作流的时候，我们要时刻明确，无论使用什么样的流对象，底层传输的始终为二进制数据。

## 2.2 字节输出流【OutputStream】

`java.io.OutputStream` 抽象类是表示字节输出流的所有类的超类，将指定的字节信息写出到目的地。它定义了字节输出流的基本共性功能方法。

- `public void close()` ：关闭此输出流并释放与此流相关联的任何系统资源。
- `public void flush()` ：刷新此输出流并强制任何缓冲的输出字节被写出。
- `public void write(byte[] b)` ：将 b.length字节从指定的字节数组写入此输出流。
- `public void write(byte[] b, int off, int len)` ：从指定的字节数组写入 len字节，从偏移量 off开始输出到此输出流。
- `public abstract void write(int b)` ：将指定的字节输出流。

> 小贴士：  
> close方法，当完成流的操作时，必须调用此方法，释放系统资源。

## 2.3 FileOutputStream类

`OutputStream` 有很多子类，我们从最简单的一个子类开始。   
`java.io.FileOutputStream` 类是文件输出流，用于将数据写出到文件。


### 构造方法

- `public FileOutputStream(File file)` ：创建文件输出流以写入由指定的 File对象表示的文件。
- `public FileOutputStream(String name)` ： 创建文件输出流以指定的名称写入文件。

当你创建一个流对象时，必须传入一个文件路径。该路径下，如果没有这个文件，会创建该文件。如果有这个文件，会清空这个文件的数据。

- 构造举例，代码如下：

```java
public class FileOutputStreamConstructor throws IOException {
    public static void main(String[] args) {
     // 使用File对象创建流对象    
        File file = new File("a.txt");
        FileOutputStream fos = new FileOutputStream(file);
     
        // 使用文件名称创建流对象
        FileOutputStream fos = new FileOutputStream("b.txt");
    }
}
```

### 写出字节数据 

1. 写出字节： `write(int b)` 方法，每次可以写出一个字节数据，代码使用演示：
```java
public class FOSWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象
        FileOutputStream fos = new FileOutputStream("fos.txt");    
       // 写出数据  
       fos.write(97); // 写出第1个字节  
       fos.write(98); // 写出第2个字节  
       fos.write(99); // 写出第3个字节  
       // 关闭资源  
        fos.close();
    }
}
输出结果：
abc
```

> 小贴士：
>  1. 虽然参数为int类型四个字节，但是只会保留一个字节的信息写出。
>  2. 流操作完毕后，必须释放系统资源，调用close方法，千万记得。

2. 写出字节数组： `write(byte[] b)` ，每次可以写出数组中的数据，代码使用演示：

```java
public class FOSWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象
        FileOutputStream fos = new FileOutputStream("fos.txt");    
       // 字符串转换为字节数组  
       byte[] b = "黑马程序员".getBytes();  
       // 写出字节数组数据  
       fos.write(b);  
       // 关闭资源  
        fos.close();
    }
}
输出结果：
黑马程序员
```

3. 写出指定长度字节数组： `write(byte[] b, int off, int len)` ,每次写出从off索引开始，len个字节，代码使用演示：

```java
public class FOSWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象
        FileOutputStream fos = new FileOutputStream("fos.txt");    
       // 字符串转换为字节数组  
       byte[] b = "abcde".getBytes();  
// 写出从索引2开始，2个字节。索引2是c，两个字节，也就是cd。        
        fos.write(b,2,2);
       // 关闭资源  
        fos.close();
    }
}
输出结果：
cd
```

### 数据追加续写

经过以上的演示，每次程序运行，创建输出流对象，都会清空目标文件中的数据。如何保留目标文件中数据，还能继续添加新数据呢？

- `public FileOutputStream(File file, boolean append)` ： 创建文件输出流以写入由指定的 File对象表示的文件。

- `public FileOutputStream(String name, boolean append)` ： 创建文件输出流以指定的名称写入文件。

这两个构造方法，参数中都需要传入一个boolean类型的值， `true` 表示追加数据， `false` 表示清空原有数据。这样创建的输出流对象，就可以指定是否追加续写了，代码使用演示：

```java
public class FOSWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象
        FileOutputStream fos = new FileOutputStream("fos.txt"，true);    
       // 字符串转换为字节数组  
       byte[] b = "abcde".getBytes();  
// 写出从索引2开始，2个字节。索引2是c，两个字节，也就是cd。        
        fos.write(b);
       // 关闭资源  
        fos.close();
    }
}
文件操作前：cd
文件操作后：cdabcde
```
### 写出换行

Windows系统里，换行符号是` \r\n `。把
以指定是否追加续写了，代码使用演示：
```java
public class FOSWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象
        FileOutputStream fos = new FileOutputStream("fos.txt"); 
       // 定义字节数组  
       byte[] words = {97,98,99,100,101};  
       // 遍历数组  
        for (int i = 0; i < words.length; i++) {
           // 写出一个字节  
            fos.write(words[i]);
           // 写出一个换行, 换行符号转成数组写出  
            fos.write("\r\n".getBytes());
        }
       // 关闭资源  
        fos.close();
    }
}
输出结果：
a
b
c
d
e
```

> - 回车符 \r 和换行符 \n ：
>   - 回车符：回到一行的开头（return）。
>   - 换行符：下一行（newline）。
> - 系统中的换行：
>   - Windows系统里，每行结尾是 `回车+换行 `，即 `\r\n` ；
>   - Unix系统里，每行结尾只有 `换行 `，即 `\n` ；
>   - Mac系统里，每行结尾是  `回车 `，即 `\r` 。从 Mac OS X开始与Linux统一。


## 2.4 字节输入流【InputStream】 

`java.io.InputStream `抽象类是表示字节输入流的所有类的超类，可以读取字节信息到内存中。它定义了字节输入流的基本共性功能方法。

- `public void close()` ：关闭此输入流并释放与此流相关联的任何系统资源。
- `public abstract int read()` ： 从输入流读取数据的下一个字节
- `public int read(byte[] b)` ： 从输入流中读取一些字节数，并将它们存储到字节数组 b中 。

> 小贴士：   
> close方法，当完成流的操作时，必须调用此方法，释放系统资源。

## 2.5 FileInputStream类

`java.io.FileInputStream` 类是文件输入流，从文件中读取字节。

### 构造方法

- `FileInputStream(File file)` ： 通过打开与实际文件的连接来创建一个 `FileInputStream` ，该文件由文件系统中的 File对象 file命名。

- `FileInputStream(String name)` ： 通过打开与实际文件的连接来创建一个 FileInputStream ，该文件由文件系统中的路径名 name命名。

当你创建一个流对象时，必须传入一个文件路径。该路径下，如果没有该文件,会抛出 `FileNotFoundException` 。

- 构造举例，代码如下：

```java
public class FileInputStreamConstructor throws IOException{
    public static void main(String[] args) {
     // 使用File对象创建流对象    
        File file = new File("a.txt");
        FileInputStream fos = new FileInputStream(file);
     
        // 使用文件名称创建流对象
        FileInputStream fos = new FileInputStream("b.txt");
    }
}
```  

### 读取字节数据

1. 读取字节： read 方法，每次可以读取一个字节的数据，提升为int类型，读取到文件末尾，返回 -1 ，代码使用演示：

```java
public class FISRead {
    public static void main(String[] args) throws IOException{
       // 使用文件名称创建流对象  
       FileInputStream fis = new FileInputStream("read.txt"); 
       // 读取数据，返回一个字节  
        int read = fis.read();
        System.out.println((char) read);
        read = fis.read();
        System.out.println((char) read);
        read = fis.read();
        System.out.println((char) read);
        read = fis.read();
        System.out.println((char) read);
        read = fis.read();
        System.out.println((char) read);
       // 读取到末尾,返回‐1  
       read = fis.read(); 
        System.out.println( read);
// 关闭资源        
        fis.close();
    }
}
输出结果：
a
b
c
d
e
‐1
```

循环改进读取方式，代码使用演示：

```java
public class FISRead {
    public static void main(String[] args) throws IOException{
       // 使用文件名称创建流对象
       FileInputStream fis = new FileInputStream("read.txt"); 
       // 定义变量，保存数据  
        int b ；
        // 循环读取
        while ((b = fis.read())!=‐1) {
            System.out.println((char)b);
        }
// 关闭资源        
        fis.close();
    }
}
输出结果：
a
b
c
d
e
```

> 小贴士：
>   1. 虽然读取了一个字节，但是会自动提升为int类型。
>   2. 流操作完毕后，必须释放系统资源，调用close方法，千万记得。

2. 使用字节数组读取： `read(byte[] b)` ，每次读取b的长度个字节到数组中，返回读取到的有效字节个数，读取到末尾时，返回 -1 ，代码使用演示：

```java
public class FISRead {
    public static void main(String[] args) throws IOException{
       // 使用文件名称创建流对象.  
       FileInputStream fis = new FileInputStream("read.txt"); // 文件中为abcde 
       // 定义变量，作为有效个数  
        int len ；
        // 定义字节数组，作为装字节数据的容器  
        byte[] b = new byte[2];
        // 循环读取
        while (( len= fis.read(b))!=‐1) {
           // 每次读取后,把数组变成字符串打印 
            System.out.println(new String(b));
        }
// 关闭资源        
        fis.close();
    }
}
输出结果：
ab
cd
ed
```

错误数据 d ，是由于最后一次读取时，只读取一个字节 e ，数组中，上次读取的数据没有被完全替换，所以要通过 len ，获取有效的字节，代码使用演示：

```java
public class FISRead {
    public static void main(String[] args) throws IOException{
       // 使用文件名称创建流对象.  
       FileInputStream fis = new FileInputStream("read.txt"); // 文件中为abcde 
       // 定义变量，作为有效个数  
        int len ；
        // 定义字节数组，作为装字节数据的容器  
        byte[] b = new byte[2];
        // 循环读取
        while (( len= fis.read(b))!=‐1) {
           // 每次读取后,把数组的有效字节部分，变成字符串打印 
            System.out.println(new String(b，0，len));//  len 每次读取的有效字节个数
        }
// 关闭资源        
        fis.close();
    }
}
输出结果：
ab
cd
e
```

> 小贴士：  
> 使用数组读取，每次读取多个字节，减少了系统间的IO操作次数，从而提高了读写的效率，建议开发中使用。

## 2.6 字节流练习：图片复制

复制原理图解

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/io%E6%B5%81%E7%A8%8B03.png)

### 案例实现

复制图片文件，代码使用演示：

```java
public class Copy {
    public static void main(String[] args) throws IOException {
        // 1.创建流对象
        // 1.1 指定数据源
        FileInputStream fis = new FileInputStream("D:\\test.jpg");
        // 1.2 指定目的地
        FileOutputStream fos = new FileOutputStream("test_copy.jpg");
        // 2.读写数据
        // 2.1 定义数组
        byte[] b = new byte[1024];
        // 2.2 定义长度
        int len;
        // 2.3 循环读取
        while ((len = fis.read(b))!=‐1) {
            // 2.4 写出数据
            fos.write(b, 0 , len);
        }
        // 3.关闭资源
        fos.close();
        fis.close();
    }
}
```

> 小贴士：
> 流的关闭原则：先开后关，后开先关。

# 第三章 字符流

当使用字节流读取文本文件时，可能会有一个小问题。就是遇到中文字符时，可能不会显示完整的字符，那是因为一个中文字符可能占用多个字节存储。所以Java提供一些字符流类，以字符为单位读写数据，专门用于处理文本文件。

## 3.1 字符输入流【Reader】
`java.io.Reader` 抽象类是表示用于读取字符流的所有类的超类，可以读取字符信息到内存中。它定义了字符输入流的基本共性功能方法。
- public void close() ：关闭此流并释放与此流相关联的任何系统资源。
- public int read() ： 从输入流读取一个字符。
- public int read(char[] cbuf) ： 从输入流中读取一些字符，并将它们存储到字符数组 cbuf中 。

## 3.2 FileReader类

`java.io.FileReader` 类是读取字符文件的便利类。构造时使用系统默认的字符编码和默认字节缓冲区。

> 小贴士：   
>    1. 字符编码：字节与字符的对应规则。Windows系统的中文编码默认是GBK编码表。idea中UTF-8    
>    2. 字节缓冲区：一个字节数组，用来临时存储字节数据。   

### 构造方法  

- `FileReader(File file)` ： 创建一个新的 `FileReader` ，给定要读取的File对象。
- `FileReader(String fileName)` ： 创建一个新的 `FileReader` ，给定要读取的文件的名称。

当你创建一个流对象时，必须传入一个文件路径。类似于FileInputStream 。  

- 构造举例，代码如下：

```java
public class FileReaderConstructor throws IOException{
    public static void main(String[] args) {
     // 使用File对象创建流对象    
        File file = new File("a.txt");
        FileReader fr = new FileReader(file);
     
        // 使用文件名称创建流对象
        FileReader fr = new FileReader("b.txt");
    }
}
```

### 读取字符数据


1. 读取字符： `read` 方法，每次可以读取一个字符的数据，提升为int类型，读取到文件末尾，返回 `-1` ，循环读取，代码使用演示：

```java
public class FRRead {
    public static void main(String[] args) throws IOException {
       // 使用文件名称创建流对象  
       FileReader fr = new FileReader("read.txt"); 
       // 定义变量，保存数据  
        int b ；
        // 循环读取
        while ((b = fr.read())!=‐1) {
            System.out.println((char)b);
        }
// 关闭资源        
        fr.close();
    }
}
输出结果：
程
序
员
```

> 小贴士：虽然读取了一个字符，但是会自动提升为int类型。

2. 使用字符数组读取： `read(char[] cbuf)` ，每次读取b的长度个字符到数组中，返回读取到的有效字符个数，读取到末尾时，返回 `-1` ，代码使用演示：

```java
public class FRRead {
    public static void main(String[] args) throws IOException {
       // 使用文件名称创建流对象  
       FileReader fr = new FileReader("read.txt"); 
       // 定义变量，保存有效字符个数  
        int len ；
        // 定义字符数组，作为装字符数据的容器
         char[] cbuf = new char[2];
        // 循环读取
        while ((len = fr.read(cbuf))!=‐1) {
            System.out.println(new String(cbuf));
        }
// 关闭资源        
        fr.close();
    }
}
输出结果：
程序
员序
```

获取有效的字符改进，代码使用演示： 

```java
public class FISRead {
    public static void main(String[] args) throws IOException {
       // 使用文件名称创建流对象  
       FileReader fr = new FileReader("read.txt"); 
       // 定义变量，保存有效字符个数  
        int len ；
        // 定义字符数组，作为装字符数据的容器
        char[] cbuf = new char[2];
        // 循环读取
        while ((len = fr.read(cbuf))!=‐1) {
            System.out.println(new String(cbuf,0,len));
        }
     // 关闭资源    
        fr.close();
    }
}
输出结果：
程序
员
```

## 3.3 字符输出流【Writer】  

`java.io.Writer` 抽象类是表示用于写出字符流的所有类的超类，将指定的字符信息写出到目的地。它定义了字节输出流的基本共性功能方法。  

- `void write(int c)` 写入单个字符。
- `void write(char[] cbuf)` 写入字符数组。
- `abstract  void write(char[] cbuf, int off, int len)` 写入字符数组的某一部分,off数组的开始索引,len写的字符个数。
- `void write(String str)` 写入字符串。
- `void write(String str, int off, int len)` 写入字符串的某一部分,off字符串的开始索引,len写的字符个数。
- `void flush()` 刷新该流的缓冲。
- `void close()` 关闭此流，但要先刷新它。

## 3.4 FileWriter类

`java.io.FileWriter` 类是写出字符到文件的便利类。构造时使用系统默认的字符编码和默认字节缓冲区。

### 构造方法

- `FileWriter(File file)` ： 创建一个新的 FileWriter，给定要读取的File对象。
- `FileWriter(String fileName)` ： 创建一个新的 FileWriter，给定要读取的文件的名称。

当你创建一个流对象时，必须传入一个文件路径，类似于FileOutputStream。

- 构造举例，代码如下：

```java
public class FileWriterConstructor {
    public static void main(String[] args) throws IOException {
     // 使用File对象创建流对象    
        File file = new File("a.txt");
        FileWriter fw = new FileWriter(file);
     
        // 使用文件名称创建流对象
        FileWriter fw = new FileWriter("b.txt");
    }
}
```

### 基本写出数据

写出字符： `write(int b)` 方法，每次可以写出一个字符数据，代码使用演示：

```java
public class FWWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象
        FileWriter fw = new FileWriter("fw.txt");    
       // 写出数据  
       fw.write(97); // 写出第1个字符  
       fw.write('b'); // 写出第2个字符  
       fw.write('C'); // 写出第3个字符  
       fw.write(30000); // 写出第4个字符，中文编码表中30000对应一个汉字。
       /*  
        【注意】关闭资源时,与FileOutputStream不同。
        如果不关闭,数据只是保存到缓冲区，并未保存到文件。  
        */
        // fw.close();
    }
}
输出结果：
abC田
```

> 小贴士：
>    1. 虽然参数为int类型四个字节，但是只会保留一个字符的信息写出。
>    2. 未调用close方法，数据只是保存到了缓冲区，并未写出到文件中。

### 关闭和刷新

因为内置缓冲区的原因，如果不关闭输出流，无法写出字符到文件中。但是关闭的流对象，是无法继续写出数据的。如果我们既想写出数据，又想继续使用流，就需要 `flush` 方法了。
- `flush` ：刷新缓冲区，流对象可以继续使用。
- `close` :先刷新缓冲区，然后通知系统释放资源。流对象不可以再被使用了。

代码使用演示：

```java
public class FWWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象
        FileWriter fw = new FileWriter("fw.txt");
        // 写出数据，通过flush
        fw.write('刷'); // 写出第1个字符
        fw.flush();
        fw.write('新'); // 继续写出第2个字符，写出成功
        fw.flush();
     
       // 写出数据，通过close  
        fw.write('关'); // 写出第1个字符
        fw.close();
        fw.write('闭'); // 继续写出第2个字符,【报错】java.io.IOException: Stream closed
        fw.close();
    }
}
```
> 小贴士：即便是flush方法写出了数据，操作的最后还是要调用close方法，释放系统资源。

### 写出其他数据

1. 写出字符数组 ：` write(char[] cbuf) `和  `write(char[] cbuf, int off, int len)` ，每次可以写出字符数
组中的数据，用法类似`FileOutputStream`，代码使用演示：
```java
public class FWWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象
        FileWriter fw = new FileWriter("fw.txt");    
       // 字符串转换为字节数组  
       char[] chars = "黑马程序员".toCharArray();  
     
       // 写出字符数组  
       fw.write(chars); // 黑马程序员  
       
        // 写出从索引2开始，2个字节。索引2是'程'，两个字节，也就是'程序'。        
        fw.write(b,2,2); // 程序
     
       // 关闭资源  
        fos.close();
    }
}
```

2. 写出字符串： `write(String str)` 和  `write(String str, int off, int len)` ，每次可以写出字符串中的数据，更为方便，代码使用演示：

```java
public class FWWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象
        FileWriter fw = new FileWriter("fw.txt");    
       // 字符串  
       String msg = "黑马程序员";  
     
       // 写出字符数组  
       fw.write(msg); //黑马程序员  
     
// 写出从索引2开始，2个字节。索引2是'程'，两个字节，也就是'程序'。        
        fw.write(msg,2,2); // 程序  
       
        // 关闭资源
        fos.close();
    }
}
```

3. 续写和换行：操作类似于FileOutputStream。

```java
public class FWWrite {
    public static void main(String[] args) throws IOException {
        // 使用文件名称创建流对象，可以续写数据
        FileWriter fw = new FileWriter("fw.txt"，true);    
       // 写出字符串  
        fw.write("黑马");
       // 写出换行  
       fw.write("\r\n");  
       // 写出字符串  
   fw.write("程序员");      
       // 关闭资源  
        fw.close();
    }
}
输出结果:
程序员
```

> 小贴士：字符流，只能操作文本文件，不能操作图片，视频等非文本文件。
> 当我们单纯读或者写文本文件时 使用字符流 其他情况使用字节流

# 第四章 IO异常的处理

## JDK7前处理

之前的入门练习，我们一直把异常抛出，而实际开发中并不能这样处理，建议使用 try...catch...finally 代码
块，处理异常部分，代码使用演示：

```java
public class HandleException1 {
    public static void main(String[] args) {
       // 声明变量  
        FileWriter fw = null;
        try {
            //创建流对象
            fw = new FileWriter("fw.txt");
            // 写出数据
            fw.write("黑马程序员"); //黑马程序员
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (fw != null) {
                    fw.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

## JDK7的处理(扩展知识点了解内容)

还可以使用JDK7优化后的 `try-with-resource` 语句，该语句确保了每个资源在语句结束时关闭。所谓的资源`（resource）`是指在程序完成后，必须关闭的对象。

格式：

```java
try (创建流对象语句，如果多个,使用';'隔开) {
  // 读写数据    
} catch (IOException e) {
  e.printStackTrace();    
}
```

代码使用演示：

```java
public class HandleException2 {
    public static void main(String[] args) {
       // 创建流对象  
        try ( FileWriter fw = new FileWriter("fw.txt"); ) {
            // 写出数据
            fw.write("黑马程序员"); //黑马程序员
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### JDK9的改进(扩展知识点了解内容)

JDK9中 `try-with-resource` 的改进，对于引入对象的方式，支持的更加简洁。被引入的对象，同样可以自动关闭，无需手动close，我们来了解一下格式。

改进前格式：

```java
// 被final修饰的对象
final Resource resource1 = new Resource("resource1");
// 普通对象
Resource resource2 = new Resource("resource2");
// 引入方式：创建新的变量保存
try (Resource r1 = resource1;
     Resource r2 = resource2) {
     // 使用对象
}
```

改进后格式：

```java
// 被final修饰的对象
final Resource resource1 = new Resource("resource1");
// 普通对象
Resource resource2 = new Resource("resource2");
// 引入方式：直接引入
try (resource1; resource2) {
     // 使用对象
}
```

改进后，代码使用演示：

```java
public class TryDemo {
    public static void main(String[] args) throws IOException {
       // 创建流对象 
        final  FileReader fr  = new FileReader("in.txt");
        FileWriter fw = new FileWriter("out.txt");
           // 引入到try中 
              try (fr; fw) {
           // 定义变量  
            int b;
           // 读取数据  
           while ((b = fr.read())!=‐1) {  
             // 写出数据    
             fw.write(b);    
           }  
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

# 第五章 属性集

## 5.1 概述
`java.util.Properties` 继承于 `Hashtable` ，来表示一个持久的属性集。它使用键值结构存储数据，每个键及其对应值都是一个字符串。该类也被许多Java类使用，比如获取系统属性时， `System.getProperties` 方法就是返回一个 `Properties` 对象。

## 5.2 Properties类

### 构造方法

- `public Properties()` :创建一个空的属性列表。

### 基本的存储方法
- `public Object setProperty(String key, String value)` ： 保存一对属性。
- `public String getProperty(String key)` ：使用此属性列表中指定的键搜索属性值。
- `public Set<String> stringPropertyNames()` ：所有键的名称的集合。

```java
public class ProDemo {
    public static void main(String[] args) throws FileNotFoundException {
        // 创建属性集对象
        Properties properties = new Properties();
        // 添加键值对元素
        properties.setProperty("filename", "a.txt");
        properties.setProperty("length", "209385038");
        properties.setProperty("location", "D:\\a.txt");
        // 打印属性集对象
        System.out.println(properties);
        // 通过键,获取属性值
        System.out.println(properties.getProperty("filename"));
        System.out.println(properties.getProperty("length"));
        System.out.println(properties.getProperty("location"));
        // 遍历属性集,获取所有键的集合
        Set<String> strings = properties.stringPropertyNames();
        // 打印键值对
        for (String key : strings ) {
           System.out.println(key+" ‐‐ "+properties.getProperty(key));  
        }
    }
}
输出结果：
{filename=a.txt, length=209385038, location=D:\a.txt}
a.txt
209385038
D:\a.txt
filename ‐‐ a.txt
length ‐‐ 209385038
location ‐‐ D:\a.txt
```

### 与流相关的方法

- `public void load(InputStream inStream)` ： 从字节输入流中读取键值对。

参数中使用了字节输入流，通过流对象，可以关联到某文件上，这样就能够加载文本中的数据了。文本数据格式:

```java
filename=a.txt
length=209385038
location=D:\a.txt
```

加载代码演示：

```java
public class ProDemo2 {
    public static void main(String[] args) throws FileNotFoundException {
        // 创建属性集对象
        Properties pro = new Properties();
        // 加载文本中信息到属性集
        pro.load(new FileInputStream("read.txt"));
        // 遍历集合并打印
        Set<String> strings = pro.stringPropertyNames();
        for (String key : strings ) {
           System.out.println(key+" ‐‐ "+pro.getProperty(key));  
        }
     }
}
输出结果：
filename ‐‐ a.txt
length ‐‐ 209385038
location ‐‐ D:\a.txt
```

> 小贴士：文本中的数据，必须是键值对形式，可以使用空格、等号、冒号等符号分隔。

# day21 【缓冲流、转换流、序列化流、打印流】

## 主要内容

- 转换流
- 缓冲流
- 序列化流
- 打印流

## 学习目标

- [ ] 能够使用字节缓冲流读取数据到程序
- [ ] 能够使用字节缓冲流写出数据到文件
- [ ] 能够明确字符缓冲流的作用和基本用法
- [ ] 能够使用缓冲流的特殊功能
- [ ] 能够阐述编码表的意义
- [ ] 能够使用转换流读取指定编码的文本文件
- [ ] 能够使用转换流写入指定编码的文本文件
- [ ] 能够说出打印流的特点
- [ ] 能够使用序列化流写出对象到文件
- [ ] 能够使用反序列化流读取文件到程序中

# 第一章 缓冲流

昨天学习了基本的一些流，作为IO流的入门，今天我们要见识一些更强大的流。比如能够高效读写的缓冲流，能够转换编码的转换流，能够持久化存储对象的序列化流等等。这些功能更为强大的流，都是在基本的流对象基础之上创建而来的，就像穿上铠甲的武士一样，相当于是对基本流对象的一种增强。

## 1.1 概述
缓冲流,也叫高效流，是对4个基本的 `FileXxx` 流的增强，所以也是4个流，按照数据类型分类：

- 字节缓冲流： `BufferedInputStream` ， `BufferedOutputStream`
- 字符缓冲流： `BufferedReader` ， `BufferedWriter`

缓冲流的基本原理，是在创建流对象时，会创建一个内置的默认大小的缓冲区数组，通过缓冲区读写，减少系统IO次数，从而提高读写的效率。

## 1.2 字节缓冲流

### 构造方法

- `public BufferedInputStream(InputStream in)` ：创建一个 新的缓冲输入流。
- `public BufferedOutputStream(OutputStream out)` ： 创建一个新的缓冲输出流。

构造举例，代码如下：

```java
// 创建字节缓冲输入流
BufferedInputStream bis = new BufferedInputStream(new FileInputStream("bis.txt"));
// 创建字节缓冲输出流
BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("bos.txt"));
```

效率测试  

查询API，缓冲流读写方法与基本的流是一致的，我们通过复制大文件（375MB），测试它的效率。

1. 基本流，代码如下：

```java

public class BufferedDemo {
    public static void main(String[] args) throws FileNotFoundException {
        // 记录开始时间
       long start = System.currentTimeMillis();  
// 创建流对象        
        try (
         FileInputStream fis = new FileInputStream("jdk9.exe");    
         FileOutputStream fos = new FileOutputStream("copy.exe")    
        ){
         // 读写数据    
            int b;
            while ((b = fis.read()) != ‐1) {
                fos.write(b);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
// 记录结束时间        
        long end = System.currentTimeMillis();
        System.out.println("普通流复制时间:"+(end ‐ start)+" 毫秒");
    }
}
十几分钟过去了....

```

2. 缓冲流，代码如下：

```java
public class BufferedDemo {
    public static void main(String[] args) throws FileNotFoundException {
        // 记录开始时间
       long start = System.currentTimeMillis();  
// 创建流对象        
        try (
         BufferedInputStream bis = new BufferedInputStream(new FileInputStream("jdk9.exe"));    
     BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("copy.exe"));    
        ){
        // 读写数据
            int b;
            while ((b = bis.read()) != ‐1) {
                bos.write(b);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
// 记录结束时间        
        long end = System.currentTimeMillis();
        System.out.println("缓冲流复制时间:"+(end ‐ start)+" 毫秒");
    }
}
缓冲流复制时间:8016 毫秒
```


如何更快呢？
使用数组的方式，代码如下：

```java
public class BufferedDemo {
    public static void main(String[] args) throws FileNotFoundException {
       // 记录开始时间  
        long start = System.currentTimeMillis();
// 创建流对象        
        try (
BufferedInputStream bis = new BufferedInputStream(new FileInputStream("jdk9.exe"));            
 BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("copy.exe"));        
        ){
           // 读写数据  
            int len;
            byte[] bytes = new byte[8*1024];
            while ((len = bis.read(bytes)) != ‐1) {
                bos.write(bytes, 0 , len);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
// 记录结束时间        
        long end = System.currentTimeMillis();
        System.out.println("缓冲流使用数组复制时间:"+(end ‐ start)+" 毫秒");
    }
}
缓冲流使用数组复制时间:666 毫秒
```

## 1.3 字符缓冲流

### 构造方法

- public BufferedReader(Reader in) ：创建一个 新的缓冲输入流。
- public BufferedWriter(Writer out) ： 创建一个新的缓冲输出流。

构造举例，代码如下：

```java
// 创建字符缓冲输入流
BufferedReader br = new BufferedReader(new FileReader("br.txt"));
// 创建字符缓冲输出流
BufferedWriter bw = new BufferedWriter(new FileWriter("bw.txt"));
```

### 特有方法

字符缓冲流的基本方法与普通字符流调用方式一致，不再阐述，我们来看它们具备的特有方法。

- BufferedReader： `public String readLine()` : 读一行文字。
- BufferedWriter： `public void newLine()` : 写一行行分隔符,由系统属性定义符号。

`readLine` 方法演示，代码如下：

```java
public class BufferedReaderDemo {
    public static void main(String[] args) throws IOException {
        // 创建流对象  
        BufferedReader br = new BufferedReader(new FileReader("in.txt"));
// 定义字符串,保存读取的一行文字        
        String line  = null;
       // 循环读取,读取到最后返回null  
        while ((line = br.readLine())!=null) {
            System.out.print(line);
            System.out.println("‐‐‐‐‐‐");
        }
// 释放资源        
        br.close();
    }
}
```

`newLine` 方法演示，代码如下：

```java
public class BufferedWriterDemo throws IOException {
    public static void main(String[] args) throws IOException  {
       // 创建流对象  
BufferedWriter bw = new BufferedWriter(new FileWriter("out.txt"));        
       // 写出数据  
        bw.write("非洲");
       // 写出换行  
        bw.newLine();
        bw.write("程序");
        bw.newLine();
        bw.write("员");
        bw.newLine();
// 释放资源        
        bw.close();
    }
}
输出效果:
非洲
程序
员
```  

## 1.4 练习:文本排序

请将文本信息恢复顺序。

```java
3.侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉
以咨之，然后施行，必得裨补阙漏，有所广益。
8.愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其
咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。
4.将军向宠，性行淑均，晓畅军事，试用之于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，
必能使行阵和睦，优劣得所。
2.宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不
宜偏私，使内外异法也。
1.先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外
者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以
塞忠谏之路也。
9.今当远离，临表涕零，不知所言。
6.臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣
以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
7.先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐付托不效，以伤先帝之明，故五月渡泸，深入不毛。
今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛
下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
5.亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息
痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
```

### 案例分析

1. 逐行读取文本信息。
2. 解析文本信息到集合中。
3. 遍历集合，按顺序，写出文本信息。


### 案例实现

```java
public class BufferedTest {
    public static void main(String[] args) throws IOException {
        // 创建map集合,保存文本数据,键为序号,值为文字
        HashMap<String, String> lineMap = new HashMap<>();
        // 创建流对象
        BufferedReader br = new BufferedReader(new FileReader("in.txt"));
        BufferedWriter bw = new BufferedWriter(new FileWriter("out.txt"));
        // 读取数据
        String line  = null;
        while ((line = br.readLine())!=null) {
            // 解析文本
            String[] split = line.split("\\.");
            // 保存到集合
            lineMap.put(split[0],split[1]);
        }
        // 释放资源
        br.close();
        // 遍历map集合
        for (int i = 1; i <= lineMap.size(); i++) {
            String key = String.valueOf(i);
            // 获取map中文本
            String value = lineMap.get(key);
           // 写出拼接文本  
            bw.write(key+"."+value);
           // 写出换行  
            bw.newLine();
        }
// 释放资源        
        bw.close();
    }
}
```


# 第二章 转换流

## 2.1 字符编码和字符集

### 字符编码

计算机中储存的信息都是用二进制数表示的，而我们在屏幕上看到的数字、英文、标点符号、汉字等字符是二进制数转换之后的结果。按照某种规则，将字符存储到计算机中，称为编码 。反之，将存储在计算机中的二进制数按照某种规则解析显示出来，称为解码 。比如说，按照A规则存储，同样按照A规则解析，那么就能显示正确的文本f符号。反之，按照A规则存储，再按照B规则解析，就会导致乱码现象。

- 字符编码 Character Encoding : 就是一套自然语言的字符与二进制数之间的对应规则。

### 字符集

- 字符集  Charset ：也叫编码表。是一个系统支持的所有字符的集合，包括各国家文字、标点符号、图形符号、数字等。

计算机要准确的存储和识别各种字符集符号，需要进行字符编码，一套字符集必然至少有一套字符编码。常见字符集有ASCII字符集、GBK字符集、Unicode字符集等。  

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%AD%97%E7%AC%A6%E9%9B%8601.png)

可见，当指定了编码，它所对应的字符集自然就指定了，所以编码才是我们最终要关心的。

- ASCII字符集 ：
  - ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统，用于显示现代英语，主要包括控制字符（回车键、退格、换行键等）和可显示字符（英文大小写字符、阿拉伯数字和西文符号）。
  - 基本的ASCII字符集，使用7位（bits）表示一个字符，共128字符。ASCII的扩展字符集使用8位（bits）表示一个字符，共256字符，方便支持欧洲常用字符。

- ISO-8859-1字符集：
  - 拉丁码表，别名Latin-1，用于显示欧洲使用的语言，包括荷兰、丹麦、德语、意大利语、西班牙语等。
  - ISO-5559-1使用单字节编码，兼容ASCII编码。

- GBxxx字符集：
  - GB就是国标的意思，是为了显示中文而设计的一套字符集。
  - GB2312：简体中文码表。一个小于127的字符的意义与原来相同。但两个大于127的字符连在一起时，就表示一个汉字，这样大约可以组合了包含7000多个简体汉字，此外数学符号、罗马希腊的字母、日文的假名们都编进去了，连在ASCII里本来就有的数字、标点、字母都统统重新编了两个字节长的编码，这就是常说的"全角"字符，而原来在127号以下的那些就叫"半角"字符了。
  - GBK：最常用的中文码表。是在GB2312标准基础上的扩展规范，使用了双字节编码方案，共收录了21003个汉字，完全兼容GB2312标准，同时支持繁体汉字以及日韩汉字等。
  - GB18030：最新的中文码表。收录汉字70244个，采用多字节编码，每个字可以由1个、2个或4个字节组成。支持中国国内少数民族的文字，同时支持繁体汉字以及日韩汉字等。

- Unicode字符集 ：
  - Unicode编码系统为表达任意语言的任意字符而设计，是业界的一种标准，也称为统一码、标准万国码。
  - 它最多使用4个字节的数字来表达每个字母、符号，或者文字。有三种编码方案，UTF-8、UTF-16和UTF-32。最为常用的UTF-8编码。
  - UTF-8编码，可以用来表示Unicode标准中任何字符，它是电子邮件、网页及其他存储或传送文字的应用中，优先采用的编码。互联网工程工作小组（IETF）要求所有互联网协议都必须支持UTF-8编码。所以，我们开发Web应用，也要使用UTF-8编码。它使用一至四个字节为每个字符编码，编码规则：
    1. 128个US-ASCII字符，只需一个字节编码。
    2. 拉丁文等字符，需要二个字节编码。
    3. 大部分常用字（含中文），使用三个字节编码。
    4. 其他极少使用的Unicode辅助字符，使用四字节编码。

## 2.2 编码引出的问题
在IDEA中，使用 `FileReader` 读取项目中的文本文件。由于IDEA的设置，都是默认的 `UTF-8` 编码，所以没有任何问题。但是，当读取Windows系统中创建的文本文件时，由于Windows系统的默认是GBK编码，就会出现乱码。
```java
public class ReaderDemo {
    public static void main(String[] args) throws IOException {
        FileReader fileReader = new FileReader("E:\\File_GBK.txt");
        int read;
        while ((read = fileReader.read()) != ‐1) {
            System.out.print((char)read);
        }
        fileReader.close();
    }
}
输出结果：
���
```

那么如何读取GBK编码的文件呢？

## 2.3 InputStreamReader类

转换流 `java.io.InputStreamReader` ，是Reader的子类，是从字节流到字符流的桥梁。它读取字节，并使用指定的字符集将其解码为字符。它的字符集可以由名称指定，也可以接受平台的默认字符集。

### 构造方法

- `InputStreamReader(InputStream in)` : 创建一个使用默认字符集的字符流。
- `InputStreamReader(InputStream in, String charsetName)` : 创建一个指定字符集的字符流。

构造举例，代码如下：

```java
InputStreamReader isr = new InputStreamReader(new FileInputStream("in.txt"));
InputStreamReader isr2 = new InputStreamReader(new FileInputStream("in.txt") , "GBK");
```

### 指定编码读取

```java
public class ReaderDemo2 {
    public static void main(String[] args) throws IOException {
       // 定义文件路径,文件为gbk编码  
        String FileName = "E:\\file_gbk.txt";
       // 创建流对象,默认UTF8编码  
        InputStreamReader isr = new InputStreamReader(new FileInputStream(FileName));
       // 创建流对象,指定GBK编码  
        InputStreamReader isr2 = new InputStreamReader(new FileInputStream(FileName) , "GBK");
// 定义变量,保存字符        
        int read;
       // 使用默认编码字符流读取,乱码  
        while ((read = isr.read()) != ‐1) {
            System.out.print((char)read); // ��Һ�
        }
        isr.close();
     
       // 使用指定编码字符流读取,正常解析  
        while ((read = isr2.read()) != ‐1) {
            System.out.print((char)read);// 大家好
        }
        isr2.close();
    }
}
```

## 2.4 OutputStreamWriter类

转换流 `java.io.OutputStreamWriter` ，是Writer的子类，是从字符流到字节流的桥梁。使用指定的字符集将字符编码为字节。它的字符集可以由名称指定，也可以接受平台的默认字符集。

### 构造方法

- OutputStreamWriter(OutputStream in) : 创建一个使用默认字符集的字符流。
- OutputStreamWriter(OutputStream in, String charsetName) : 创建一个指定字符集的字符流。

构造举例，代码如下：
```java
OutputStreamWriter isr = new OutputStreamWriter(new FileOutputStream("out.txt"));
OutputStreamWriter isr2 = new OutputStreamWriter(new FileOutputStream("out.txt") , "GBK");
```

### 指定编码写出  
```java
public class OutputDemo {
    public static void main(String[] args) throws IOException {
       // 定义文件路径  
        String FileName = "E:\\out.txt";
       // 创建流对象,默认UTF8编码  
        OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(FileName));
        // 写出数据
       osw.write("你好"); // 保存为6个字节  
        osw.close();
       
// 定义文件路径        
String FileName2 = "E:\\out2.txt";        
      // 创建流对象,指定GBK编码   
        OutputStreamWriter osw2 = new OutputStreamWriter(new FileOutputStream(FileName2),"GBK");
        // 写出数据
       osw2.write("你好");// 保存为4个字节  
        osw2.close();
    }
}
```

### 转换流理解图解 

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%AD%97%E7%AC%A6%E9%9B%8602.png)

## 2.5 练习：转换文件编码

将GBK编码的文本文件，转换为UTF-8编码的文本文件。

### 案例分析

1. 指定GBK编码的转换流，读取文本文件。
2. 使用UTF-8编码的转换流，写出文本文件。

### 案例实现

```java
public class TransDemo {
   public static void main(String[] args) {     
     // 1.定义文件路径    
      String srcFile = "file_gbk.txt";   
        String destFile = "file_utf8.txt";
// 2.创建流对象        
     // 2.1 转换输入流,指定GBK编码    
        InputStreamReader isr = new InputStreamReader(new FileInputStream(srcFile) , "GBK");
     // 2.2 转换输出流,默认utf8编码    
        OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(destFile));
// 3.读写数据        
     // 3.1 定义数组    
        char[] cbuf = new char[1024];
     // 3.2 定义长度    
        int len;
     // 3.3 循环读取    
        while ((len = isr.read(cbuf))!=‐1) {
            // 循环写出
           osw.write(cbuf,0,len);  
        }
     // 4.释放资源    
        osw.close();
        isr.close();
   }  
}
```

# 第三章 序列化

## 3.1 概述

Java 提供了一种对象序列化的机制。用一个字节序列可以表示一个对象，该字节序列包含该 对象的数据 、 对象的类型 和 对象中存储的属性 等信息。字节序列写出到文件之后，相当于文件中持久保存了一个对象的信息。

反之，该字节序列还可以从文件中读取回来，重构对象，对它进行反序列化。 对象的数据 、 对象的类型 和 对象中存储的数据 信息，都可以用来在内存中创建对象。看图理解序列化：

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E5%AD%97%E7%AC%A6%E9%9B%8603.png)

## 3.2 ObjectOutputStream类

`java.io.ObjectOutputStream` 类，将Java对象的原始数据类型写出到文件,实现对象的持久存储。

### 构造方法

- `public ObjectOutputStream(OutputStream out) ` ： 创建一个指定OutputStream的ObjectOutputStream。构造举例，代码如下：

```java
FileOutputStream fileOut = new FileOutputStream("employee.txt");
ObjectOutputStream out = new ObjectOutputStream(fileOut);
```

## 序列化操作

1. 一个对象要想序列化，必须满足两个条件: 
- 该类必须实现 java.io.Serializable 接口， Serializable 是一个标记接口，不实现此接口的类将不会使任何状态序列化或反序列化，会抛出 NotSerializableException 。
- 该类的所有属性必须是可序列化的。如果有一个属性不需要可序列化的，则该属性必须注明是瞬态的，使用`transient` 关键字修饰。

```java
public class Employee implements java.io.Serializable {
    public String name;
    public String address;
    public transient int age; // transient瞬态修饰成员,不会被序列化
    public void addressCheck() {
       System.out.println("Address  check : " + name + " ‐‐ " + address);  
    }
}
```

2.写出对象方法

- public final void writeObject (Object obj) : 将指定的对象写出。

```java
public class SerializeDemo{
   public static void main(String [] args)   { 
     Employee e = new Employee();    
     e.name = "zhangsan";    
     e.address = "beiqinglu";    
     e.age = 20;     
     try {    
       // 创建序列化流对象      
          ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("employee.txt"));
         // 写出对象    
         out.writeObject(e);    
         // 释放资源    
         out.close();    
         fileOut.close();    
         System.out.println("Serialized data is saved"); // 姓名，地址被序列化，年龄没有被序列
化。
   
        } catch(IOException i)   {
            i.printStackTrace();
        }
   } 
}
输出结果：
Serialized data is saved
```

## 3.3 ObjectInputStream类

ObjectInputStream反序列化流，将之前使用ObjectOutputStream序列化的原始数据恢复为对象。

### 构造方法

- `public ObjectInputStream(InputStream in)` ： 创建一个指定InputStream的ObjectInputStream。

### 反序列化操作1

如果能找到一个对象的class文件，我们可以进行反序列化操作，调用`ObjectInputStream` 读取对象的方法：

- `public final Object readObject ()` : 读取一个对象。

```java
public class DeserializeDemo {
     public static void main(String [] args)   {
        Employee e = null;
        try {      
             // 创建反序列化流
             FileInputStream fileIn = new FileInputStream("employee.txt");
             ObjectInputStream in = new ObjectInputStream(fileIn);
             // 读取一个对象
             e = (Employee) in.readObject();
             // 释放资源
             in.close();
             fileIn.close();
        }catch(IOException i) {
             // 捕获其他异常
             i.printStackTrace();
             return;
        }catch(ClassNotFoundException c)  {
         // 捕获类找不到异常    
             System.out.println("Employee class not found");
             c.printStackTrace();
             return;
        }
        // 无异常,直接打印输出
        System.out.println("Name: " + e.name); // zhangsan  
        System.out.println("Address: " + e.address); // beiqinglu
        System.out.println("age: " + e.age); // 0
    }
}
```

对于JVM可以反序列化对象，它必须是能够找到class文件的类。如果找不到该类的class文件，则抛出一个`ClassNotFoundException` 异常。


### 反序列化操作2

另外，当JVM反序列化对象时，能找到class文件，但是class文件在序列化对象之后发生了修改，那么反序列化操作也会失败，抛出一个 `InvalidClassException` 异常。发生这个异常的原因如下：

- 该类的序列版本号与从流中读取的类描述符的版本号不匹配
- 该类包含未知数据类型
- 该类没有可访问的无参数构造方法

`Serializable` 接口给需要序列化的类，提供了一个序列版本号。 `serialVersionUID` 该版本号的目的在于验证序列化的对象和对应类是否版本匹配。

```java
public class Employee implements java.io.Serializable {
     // 加入序列版本号
     private static final long serialVersionUID = 1L;
     public String name;
     public String address;
     // 添加新的属性 ,重新编译, 可以反序列化,该属性赋为默认值.
     public int eid;
     public void addressCheck() {
         System.out.println("Address  check : " + name + " ‐‐ " + address);
     }
}
```

## 3.4 练习：序列化集合

1. 将存有多个自定义对象的集合序列化操作，保存到 `list.txt` 文件中。
2. 反序列化 `list.txt` ，并遍历集合，打印对象信息

### 案例分析

1. 把若干学生对象 ，保存到集合中。
2. 把集合序列化。
3. 反序列化读取时，只需要读取一次，转换为集合类型。
4. 遍历集合，可以打印所有的学生信息

### 案例实现

```java
public class SerTest {
  public static void main(String[] args) throws Exception {    
    // 创建 学生对象        
    Student student = new Student("老王", "laow");        
    Student student2 = new Student("老张", "laoz");        
    Student student3 = new Student("老李", "laol");        
    ArrayList<Student> arrayList = new ArrayList<>();        
    arrayList.add(student);        
    arrayList.add(student2);        
    arrayList.add(student3);        
    // 序列化操作        
    // serializ(arrayList);        
           
    // 反序列化          
    ObjectInputStream ois  = new ObjectInputStream(new FileInputStream("list.txt"));   
         
    // 读取对象,强转为ArrayList类型        
    ArrayList<Student> list  = (ArrayList<Student>)ois.readObject();        
    for (int i = 0; i < list.size(); i++ ){  
       Student s = list.get(i);  
       System.out.println(s.getName()+"‐‐"+ s.getPwd());
    }  
      
    private static void serializ(ArrayList<Student> arrayList)
      throws Exception {    
        // 创建 序列化流         
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("list.txt"));        
        // 写出对象        
        oos.writeObject(arrayList);        
        // 释放资源        
        oos.close();        
      }  
   }   
}
```

# 第四章 打印流

## 4.1 概述

平时我们在控制台打印输出，是调用 `print` 方法和 `println` 方法完成的，这两个方法都来自于`java.io.PrintStream` 类，该类能够方便地打印各种数据类型的值，是一种便捷的输出方式。

## 4.2 PrintStream类

### 构造方法

- `public PrintStream(String fileName)` ： 使用指定的文件名创建一个新的打印流。

构造举例，代码如下：

```java
PrintStream ps = new PrintStream("ps.txt")；
```

### 改变打印流向

`System.out` 就是 `PrintStream` 类型的，只不过它的流向是系统规定的，打印在控制台上。不过，既然是流对象，我们就可以玩一个"小把戏"，改变它的流向。

```java
public class PrintDemo {
    public static void main(String[] args) throws IOException {
// 调用系统的打印流,控制台直接输出97        
        System.out.println(97);
     
// 创建打印流,指定文件的名称        
        PrintStream ps = new PrintStream("ps.txt");
       
       // 设置系统的打印流流向,输出到ps.txt  
        System.setOut(ps);
       // 调用系统的打印流,ps.txt中输出97  
        System.out.println(97);
    }
}
```

# day22 【网络编程】

## 主要内容

- 软件架构CS／BS
- 网络通信三要素
- TCP通信
- Socket套接字
- ServerSocket

## 学习目标

- 能够辨别UDP和TCP协议特点
- 能够说出TCP协议下两个常用类名称
- 能够编写TCP协议下字符串数据传输程序
- 能够理解TCP协议下文件上传案例
- 能够理解TCP协议下案例2

# 第一章 网络编程入门

## 1.1软件结构
- C/S结构 ：全称为Client/Server结构，是指客户端和服务器结构。常见程序有ＱＱ、迅雷等软件。
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B01.png)

- B/S结构 ：全称为Browser/Server结构，是指浏览器和服务器结构。常见浏览器有谷歌、火狐等。

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B02.png)

两种架构各有优势，但是无论哪种架构，都离不开网络的支持。网络编程，就是在一定的协议下，实现两台计算机的通信的程序。

## 1.2 网络通信协议

- 网络通信协议：通信协议是对计算机必须遵守的规则，只有遵守这些规则，计算机之间才能进行通信。这就好比在道路中行驶的汽车一定要遵守交通规则一样，协议中对数据的传输格式、传输速率、传输步骤等做了统一规定，通信双方必须同时遵守，最终完成数据交换。

- TCP/IP协议： 传输控制协议/因特网互联协议( Transmission Control Protocol/Internet Protocol)，是Internet最基本、最广泛的协议。它定义了计算机如何连入因特网，以及数据如何在它们之间传输的标准。它的内部包含一系列的用于处理数据通信的协议，并采用了4层的分层模型，每一层都呼叫它的下一层所提供的协议来完成自己的需求。

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B03.png)

## 1.3 协议分类  

通信的协议还是比较复杂的， `java.net` 包中包含的类和接口，它们提供低层次的通信细节。我们可以直接使用这些类和接口，来专注于网络程序开发，而不用考虑通信的细节。

`java.net` 包中提供了两种常见的网络协议的支持：

- TCP：传输控制协议 (Transmission Control Protocol)。TCP协议是面向连接的通信协议，即传输数据之前，在发送端和接收端建立逻辑连接，然后再传输数据，它提供了两台计算机之间可靠无差错的数据传输。三次握手：TCP协议中，在发送数据的准备阶段，客户端与服务器之间的三次交互，以保证连接的可

  - 三次握手：TCP协议中，在发送数据的准备阶段，客户端与服务器之间的三次交互，以保证连接的可靠。

    - 第一次握手，客户端向服务器端发出连接请求，等待服务器确认。
    - 第二次握手，服务器端向客户端回送一个响应，通知客户端收到了连接请求。
    - 第三次握手，客户端再次向服务器端发送确认信息，确认连接。整个交互过程如下图所示。

    ![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B04.png)

    完成三次握手，连接建立后，客户端和服务器就可以开始进行数据传输了。由于这种面向连接的特性，TCP协议可
以保证传输数据的安全，所以应用十分广泛，例如下载文件、浏览网页等。

  - UDP：用户数据报协议(User Datagram Protocol)。UDP协议是一个面向无连接的协议。传输数据时，不需要建立连接，不管对方端服务是否启动，直接将数据、数据源和目的地都封装在数据包中，直接发送。每个数据包的大小限制在64k以内。它是不可靠协议，因为无连接，所以传输速度快，但是容易丢失数据。日常应用中,例如视频会议、QQ聊天等。

## 1.4 网络编程三要素

### 协议

- 协议：计算机网络通信必须遵守的规则，已经介绍过了，不再赘述。

### IP地址

- IP地址：指互联网协议地址（Internet Protocol Address），俗称IP。IP地址用来给一个网络中的计算机设备做唯一的编号。假如我们把“个人电脑”比作“一台电话”的话，那么“IP地址”就相当于“电话号码”。

- IP地址分类
  - IPv4：是一个32位的二进制数，通常被分为4个字节，表示成 a.b.c.d 的形式，例如 192.168.65.100 。其中a、b、c、d都是0~255之间的十进制整数，那么最多可以表示42亿个
  - IPv6：由于互联网的蓬勃发展，IP地址的需求量愈来愈大，但是网络地址资源有限，使得IP的分配越发紧张。有资料显示，全球IPv4地址在2011年2月分配完毕。

  为了扩大地址空间，拟通过IPv6重新定义地址空间，采用128位地址长度，每16个字节一组，分成8组十六进制数，表示成 ABCD:EF01:2345:6789:ABCD:EF01:2345:6789 ，号称可以为全世界的每一粒沙子编上一个网址，这样就解决了网络地址资源数量不够的问题。

### 常用命令  

- 查看本机IP地址，在控制台输入：

```java
ipconfig
```

- 检查网络是否连通，在控制台输入：

```java
ping 空格 IP地址
ping 220.181.57.216
```

###  特殊的IP地址

- 本机IP地址： 127.0.0.1 、 localhost 。

### 端口号

网络的通信，本质上是两个进程（应用程序）的通信。每台计算机都有很多的进程，那么在网络通信时，如何区分这些进程呢？

如果说IP地址可以唯一标识网络中的设备，那么端口号就可以唯一标识设备中的进程（应用程序）了。

- 端口号：用两个字节表示的整数，它的取值范围是0~65535。其中，0~1023之间的端口号用于一些知名的网络服务和应用，普通的应用程序需要使用1024以上的端口号。如果端口号被另外一个服务或应用所占用，会导致当前程序启动失败。

利用 `协议` + `IP地址` + `端口号` 三元组合，就可以标识网络中的进程了，那么进程间的通信就可以利用这个标识与其它进程进行交互。

# 第二章 TCP通信程序

## 2.1 概述

TCP通信能实现两台计算机之间的数据交互，通信的两端，要严格区分为客户端（Client）与服务端（Server）。

两端通信时步骤： 
   1. 服务端程序，需要事先启动，等待客户端的连接。
   2. 客户端主动连接服务器端，连接成功才能通信。服务端不可以主动连接客户端。

在Java中，提供了两个类用于实现TCP通信程序：

  1. 客户端： java.net.Socket 类表示。创建 Socket 对象，向服务端发出连接请求，服务端响应请求，两者建立连接开始通信。
  2. 服务端： java.net.ServerSocket 类表示。创建 ServerSocket 对象，相当于开启一个服务，并等待客户端的连接。

## 2.2 Socket类

`Socket` 类：该类实现客户端套接字，套接字指的是两台设备之间通讯的端点。

### 构造方法

- `public Socket(String host, int port)` :创建套接字对象并将其连接到指定主机上的指定端口号。如果指定的host是null ，则相当于指定地址为回送地址。
> 小贴士：回送地址(127.x.x.x) 是本机回送地址（Loopback Address），主要用于网络软件测试以及本地机进程间通信，无论什么程序，一旦使用回送地址发送数据，立即返回，不进行任何网络传输。

构造举例，代码如下：

```java
Socket client = new Socket("127.0.0.1", 6666);
```

### 成员方法 

- `public InputStream getInputStream()` ： 返回此套接字的输入流。
  - 如果此Scoket具有相关联的通道，则生成的InputStream 的所有操作也关联该通道。
  - 关闭生成的InputStream也将关闭相关的Socket。

- `public OutputStream getOutputStream()` ： 返回此套接字的输出流。
  - 如果此Scoket具有相关联的通道，则生成的OutputStream 的所有操作也关联该通道。
  - 关闭生成的OutputStream也将关闭相关的Socket。

- `public void close()` ：关闭此套接字。
  - 一旦一个socket被关闭，它不可再使用。
  - 关闭此socket也将关闭相关的InputStream和OutputStream 。

- `public void shutdownOutput()` ： 禁用此套接字的输出流。
  - 任何先前写出的数据将被发送，随后终止输出流。  

## 2.3 ServerSocket类

`ServerSocket` 类：这个类实现了服务器套接字，该对象等待通过网络的请求。

### 构造方法

- `public ServerSocket(int port)` ：使用该构造方法在创建ServerSocket对象时，就可以将其绑定到一个指定的端口号上，参数port就是端口号。

构造举例，代码如下：

```java
ServerSocket server = new ServerSocket(6666);
```
### 成员方法

- `public Socket accept()`：侦听并接受连接，返回一个新的Socket对象，用于和客户端实现通信。该方法会一直阻塞直到建立连接。

## 2.4 简单的TCP网络程序

### TCP通信分析图解

1. 【服务端】启动,创建ServerSocket对象，等待连接。
2. 【客户端】启动,创建Socket对象，请求连接。
3. 【服务端】接收连接,调用accept方法，并返回一个Socket对象。
4. 【客户端】Socket对象，获取OutputStream，向服务端写出数据。
5. 【服务端】Scoket对象，获取InputStream，读取客户端发送的数据。

> 到此，客户端向服务端发送数据成功。

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B05.png)

> 自此，服务端向客户端回写数据。

6. 【服务端】Socket对象，获取OutputStream，向客户端回写数据。
7. 【客户端】Scoket对象，获取InputStream，解析回写数据。
8. 【客户端】释放资源，断开连接。

### 客户端向服务器发送数据

服务端实现： 

```java
public class ServerTCP {
    public static void main(String[] args) throws IOException {
        System.out.println("服务端启动 , 等待连接 .... ");
        // 1.创建 ServerSocket对象，绑定端口，开始等待连接
        ServerSocket ss = new ServerSocket(6666);
        // 2.接收连接 accept 方法, 返回 socket 对象.
        Socket server = ss.accept();
        // 3.通过socket 获取输入流
        InputStream is = server.getInputStream();
        // 4.一次性读取数据
       // 4.1 创建字节数组  
        byte[] b = new byte[1024];
       // 4.2 据读取到字节数组中.  
        int len = is.read(b)；
        // 4.3 解析数组,打印字符串信息
        String msg = new String(b, 0, len);
        System.out.println(msg);
        //5.关闭资源.
        is.close();
        server.close();
    }
}
```

客户端实现：

```java
public class ClientTCP {
  public static void main(String[] args) throws Exception {    
    System.out.println("客户端 发送数据");        
    // 1.创建 Socket ( ip , port ) , 确定连接到哪里.        
    Socket client = new Socket("localhost", 6666);        
    // 2.获取流对象 . 输出流        
    OutputStream os = client.getOutputStream();        
    // 3.写出数据.        
    os.write("你好么? tcp ,我来了".getBytes());        
    // 4. 关闭资源 .        
    os.close();        
    client.close();        
  }    
}
```

### 服务器向客户端回写数据

服务端实现：

```java
public class ServerTCP {
    public static void main(String[] args) throws IOException {
        System.out.println("服务端启动 , 等待连接 .... ");
        // 1.创建 ServerSocket对象，绑定端口，开始等待连接
        ServerSocket ss = new ServerSocket(6666);
        // 2.接收连接 accept 方法, 返回 socket 对象.
        Socket server = ss.accept();
        // 3.通过socket 获取输入流
        InputStream is = server.getInputStream();
        // 4.一次性读取数据
       // 4.1 创建字节数组  
        byte[] b = new byte[1024];
       // 4.2 据读取到字节数组中.  
        int len = is.read(b)；
        // 4.3 解析数组,打印字符串信息
        String msg = new String(b, 0, len);
        System.out.println(msg);
       // =================回写数据=======================  
       // 5. 通过 socket 获取输出流  
        OutputStream out = server.getOutputStream();  
       // 6. 回写数据  
        out.write("我很好,谢谢你".getBytes());  
       // 7.关闭资源.  
       out.close();  
        is.close();
        server.close();
    }
}
```

客户端实现：

```java
public class ClientTCP {
  public static void main(String[] args) throws Exception {    
    System.out.println("客户端 发送数据");        
    // 1.创建 Socket ( ip , port ) , 确定连接到哪里.        
    Socket client = new Socket("localhost", 6666);        
    // 2.通过Scoket,获取输出流对象         
    OutputStream os = client.getOutputStream();        
    // 3.写出数据.        
    os.write("你好么? tcp ,我来了".getBytes());        
    // ==============解析回写=========================  
    // 4. 通过Scoket,获取 输入流对象  
    InputStream in = client.getInputStream();  
    // 5. 读取数据数据  
    byte[] b = new byte[100];  
    int len = in.read(b);  
    System.out.println(new String(b, 0, len));  
    // 6. 关闭资源 .        
    in.close();  
    os.close();        
    client.close();        
  }    
}
```
# 第三章 综合案例

## 3.1 文件上传案例

### 文件上传分析图解

1. 【客户端】输入流，从硬盘读取文件数据到程序中。
2. 【客户端】输出流，写出文件数据到服务端。
3. 【服务端】输入流，读取文件数据到服务端程序。
4. 【服务端】输出流，写出文件数据到服务器硬盘中。

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B06.png)

### 基本实现

服务端实现：
```java
public class FileUpload_Server {
    public static void main(String[] args) throws IOException {
        System.out.println("服务器 启动.....  ");
        // 1. 创建服务端ServerSocket
       ServerSocket serverSocket = new ServerSocket(6666);  
   // 2. 建立连接       
        Socket accept = serverSocket.accept();
       // 3. 创建流对象  
       // 3.1 获取输入流,读取文件数据  
        BufferedInputStream bis = new BufferedInputStream(accept.getInputStream());
        // 3.2 创建输出流,保存到本地 .
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("copy.jpg"));
// 4. 读写数据        
        byte[] b = new byte[1024 * 8];
        int len;
        while ((len = bis.read(b)) != ‐1) {
            bos.write(b, 0, len);
        }
        //5. 关闭 资源
        bos.close();
        bis.close();
        accept.close();
        System.out.println("文件上传已保存");
    }
}
```

客户端实现：

```java
public class FileUPload_Client {
  public static void main(String[] args) throws IOException {    
          // 1.创建流对象
          // 1.1 创建输入流,读取本地文件 
          BufferedInputStream bis  = new BufferedInputStream(new FileInputStream("test.jpg"));
          // 1.2 创建输出流,写到服务端
          Socket socket = new Socket("localhost", 6666);
          BufferedOutputStream   bos   = new BufferedOutputStream(socket.getOutputStream());
          //2.写出数据.
          byte[] b  = new byte[1024 * 8 ];
          int len ;
          while (( len  = bis.read(b))!=‐1) {
              bos.write(b, 0, len);
              bos.flush();
          }
          System.out.println("文件发送完毕");
          // 3.释放资源
          bos.close();
          socket.close();
          bis.close();
          System.out.println("文件上传完毕 ");
  }    
}
```

### 文件上传优化分析

1. 文件名称写死的问题   
服务端，保存文件的名称如果写死，那么最终导致服务器硬盘，只会保留一个文件，建议使用系统时间优化，保证文件名称唯一，代码如下：

  ```java
  FileOutputStream fis = new FileOutputStream(System.currentTimeMillis()+".jpg") // 文件名称
  BufferedOutputStream bos = new BufferedOutputStream(fis);
  ```

2. 循环接收的问题    
服务端，指保存一个文件就关闭了，之后的用户无法再上传，这是不符合实际的，使用循环改进，可以不断的接收不同用户的文件，代码如下：

```java
// 每次接收新的连接,创建一个Socket
while（true）{
    Socket accept = serverSocket.accept();
    ......
}
```

3. 效率问题

服务端，在接收大文件时，可能耗费几秒钟的时间，此时不能接收其他用户上传，所以，使用多线程技术优化，代码如下：

```java
while（true）{
    Socket accept = serverSocket.accept();
    // accept 交给子线程处理.
    new Thread(() ‐> {
       ......  
        InputStream bis = accept.getInputStream();
       ......  
    }).start();
}
```

### 优化实现

```java
public class FileUpload_Server {
    public static void main(String[] args) throws IOException {
        System.out.println("服务器 启动.....  ");
        // 1. 创建服务端ServerSocket
        ServerSocket serverSocket = new ServerSocket(6666);
       // 2. 循环接收,建立连接  
        while (true) {
            Socket accept = serverSocket.accept();
           /*   
           3. socket对象交给子线程处理,进行读写操作
               Runnable接口中,只有一个run方法,使用lambda表达式简化格式
            */
            new Thread(() ‐> {
                try (
                    //3.1 获取输入流对象
                    BufferedInputStream bis = new BufferedInputStream(accept.getInputStream());
                    //3.2 创建输出流对象, 保存到本地 .
                    FileOutputStream fis = new FileOutputStream(System.currentTimeMillis() +
".jpg");
                    BufferedOutputStream bos = new BufferedOutputStream(fis);) {
                    // 3.3 读写数据
                    byte[] b = new byte[1024 * 8];
                    int len;
                    while ((len = bis.read(b)) != ‐1) {
                      bos.write(b, 0, len);
                    }
                    //4. 关闭 资源
                    bos.close();
                    bis.close();
                    accept.close();
                    System.out.println("文件上传已保存");
                } catch (IOException e) {
                   e.printStackTrace();  
                }
            }).start();
        }
    }
}
```

### 信息回写分析图解

前四步与基本文件上传一致.

  5. 【服务端】获取输出流，回写数据。
  6. 【客户端】获取输入流，解析回写数据。

  ![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B07.png)


### 代码实现

服务端实现：
```java
public class FileUpload_Server {
    public static void main(String[] args) throws IOException {
        System.out.println("服务器 启动.....  ");
        // 1. 创建服务端ServerSocket
        ServerSocket serverSocket = new ServerSocket(6666);
        // 2. 循环接收,建立连接
        while (true) {
            Socket accept = serverSocket.accept();
           /*  
           3. socket对象交给子线程处理,进行读写操作  
               Runnable接口中,只有一个run方法,使用lambda表达式简化格式
            */
            new Thread(() ‐> {
                try (
                    //3.1 获取输入流对象
                    BufferedInputStream bis = new BufferedInputStream(accept.getInputStream());
                    //3.2 创建输出流对象, 保存到本地 .
                    FileOutputStream fis = new FileOutputStream(System.currentTimeMillis() +
".jpg");
                    BufferedOutputStream bos = new BufferedOutputStream(fis);
                ) {
                    // 3.3 读写数据
                    byte[] b = new byte[1024 * 8];
                    int len;
                    while ((len = bis.read(b)) != ‐1) {
                        bos.write(b, 0, len);
                    }
                    // 4.=======信息回写===========================
                    System.out.println("back ........");
                    OutputStream out = accept.getOutputStream();
                    out.write("上传成功".getBytes());
                    out.close();
                    //================================
                    //5. 关闭 资源
                    bos.close();
                    bis.close();
                    accept.close();
                    System.out.println("文件上传已保存");
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
}
```

客户端实现：

```java
public class FileUpload_Client {
    public static void main(String[] args) throws IOException {
          // 1.创建流对象
        // 1.1 创建输入流,读取本地文件
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("test.jpg"));
        // 1.2 创建输出流,写到服务端
        Socket socket = new Socket("localhost", 6666);
        BufferedOutputStream bos = new BufferedOutputStream(socket.getOutputStream());
        //2.写出数据.
        byte[] b  = new byte[1024 * 8 ];
        int len ;
        while (( len  = bis.read(b))!=‐1) {
            bos.write(b, 0, len);
        }
       // 关闭输出流,通知服务端,写出数据完毕  
        socket.shutdownOutput();
        System.out.println("文件发送完毕");
        // 3. =====解析回写============
        InputStream in = socket.getInputStream();
        byte[] back = new byte[20];
        in.read(back);
        System.out.println(new String(back));
        in.close();
        // ============================
        // 4.释放资源
        socket.close();
        bis.close();
    }
}
```

## 3.2 模拟B\S服务器

模拟网站服务器，使用浏览器访问自己编写的服务端程序，查看网页效果。

### 案例分析

1. 准备页面数据，web文件夹。复制到我们Module中，比如复制到day08中。
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B08.png)
2. 我们模拟服务器端，ServerSocket类监听端口，使用浏览器访问

```java
public static void main(String[] args) throws IOException {
     ServerSocket server = new ServerSocket(8000);    
     Socket socket = server.accept();    
     InputStream in = socket.getInputStream();    
       byte[] bytes = new byte[1024]; 
     int len = in.read(bytes);    
     System.out.println(new String(bytes,0,len));    
     socket.close();    
     server.close();    
}
```

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B09.png)

3. 服务器程序中字节输入流可以读取到浏览器发来的请求信息

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B13.png)  

GET/web/index.html HTTP/1.1是浏览器的请求消息。/web/index.html为浏览器想要请求的服务器端的资源,使用字符串切割方式获取到请求的资源。

```java
//转换流,读取浏览器请求第一行
BufferedReader readWb = new BufferedReader(new InputStreamReader(socket.getInputStream()));
String requst = readWb.readLine();
//取出请求资源的路径
String[] strArr = requst.split(" ");
//去掉web前面的/
String path = strArr[1].substring(1);
System.out.println(path);
```

### 案例实现

服务端实现：

```java
public class SerDemo {
    public static void main(String[] args) throws IOException {
        System.out.println("服务端  启动 , 等待连接 .... ");
        // 创建ServerSocket 对象
        ServerSocket server = new ServerSocket(8888);
        Socket socket = server.accept();
        // 转换流读取浏览器的请求消息
        BufferedReader readWb = new
        BufferedReader(new InputStreamReader(socket.getInputStream()));
        String requst = readWb.readLine();
        // 取出请求资源的路径
        String[] strArr = requst.split(" ");
        // 去掉web前面的/
        String path = strArr[1].substring(1);
        // 读取客户端请求的资源文件
        FileInputStream fis = new FileInputStream(path);
        byte[] bytes= new byte[1024];
        int len = 0 ;
        // 字节输出流,将文件写会客户端
        OutputStream out = socket.getOutputStream();
        // 写入HTTP协议响应头,固定写法
        out.write("HTTP/1.1 200 OK\r\n".getBytes());
        out.write("Content‐Type:text/html\r\n".getBytes());
        // 必须要写入空行,否则浏览器不解析
        out.write("\r\n".getBytes());
        while((len = fis.read(bytes))!=‐1){
            out.write(bytes,0,len);
        }
        fis.close();
        out.close();
        readWb.close();
        socket.close();
        server.close();
    }
}
```

### 访问效果
![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B10.png)

发现浏览器中出现很多的叉子,说明浏览器没有读取到图片信息导致。
浏览器工作原理是遇到图片会开启一个线程进行单独的访问,因此在服务器端加入线程技术。

```java
public class ServerDemo {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(8888);
        while(true){
            Socket socket = server.accept();
            new Thread(new Web(socket)).start();
        }
    }
    static class Web implements Runnable{
        private Socket socket;
        public Web(Socket socket){
            this.socket=socket;
        }
        public void run() {
            try{
                //转换流,读取浏览器请求第一行
                BufferedReader readWb = new
                        BufferedReader(new InputStreamReader(socket.getInputStream()));
                String requst = readWb.readLine();
                //取出请求资源的路径
                String[] strArr = requst.split(" ");
                System.out.println(Arrays.toString(strArr));
                String path = strArr[1].substring(1);
                System.out.println(path);
                FileInputStream fis = new FileInputStream(path);
                System.out.println(fis);
                byte[] bytes= new byte[1024];
                int len = 0 ;
                //向浏览器 回写数据
                OutputStream out = socket.getOutputStream();
                out.write("HTTP/1.1 200 OK\r\n".getBytes());
                out.write("Content‐Type:text/html\r\n".getBytes());
                out.write("\r\n".getBytes());
                while((len = fis.read(bytes))!=‐1){
                    out.write(bytes,0,len);
                }
                fis.close();
                out.close();
                readWb.close();
                socket.close();
            }catch(Exception ex){
            }
        }
    }
}
```

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B11.png)

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/java/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B12.png)


# day23 【函数式接口】

## 主要内容 

- 自定义函数式接口
- 函数式编程
- 常用函数式接口  

## 学习目标

- 能够使用@FunctionalInterface注解
- 能够自定义无参无返回函数式接口   
- 能够自定义有参有返回函数式接口  
- 能够理解Lambda延迟执行的特点  
- 能够使用Lambda作为方法的参数  
- 能够使用Lambda作为方法的返回值  
- 能够使用Supplier函数式接口  
- 能够使用Consumer函数式接口  
- 能够使用Function函数式接口  
- 能够使用Predicate函数式接口  

# 第一章 函数式接口  

## 1.1 概念  

函数式接口在Java中是指：**有且仅有一个抽象方法的接口。**

函数式接口，即适用于函数式编程场景的接口。而Java中的函数式编程体现就是Lambda，所以函数式接口就是可以适用于Lambda使用的接口。只有确保接口中有且仅有一个抽象方法，Java中的Lambda才能顺利地进行推导。

> 备注：“语法糖”是指使用更加方便，但是原理不变的代码语法。例如在遍历集合时使用的for-each语法，其实底层的实现原理仍然是迭代器，这便是“语法糖”。从应用层面来讲，Java中的Lambda可以被当做是匿名内部类的“语法糖”，但是二者在原理上是不同的。

## 1.2 格式 

只要确保接口中有且仅有一个抽象方法即可：

```java
修饰符 interface 接口名称 {
    public abstract 返回值类型 方法名称(可选参数信息);
    // 其他非抽象方法内容
}
```

由于接口当中抽象方法的 `public abstract` 是可以省略的，所以定义一个函数式接口很简单：

```java
public interface MyFunctionalInterface {   
  void myMethod();    
}
```

## 1.3 @FunctionalInterface注解  

与 `@Override` 注解的作用类似，Java 8中专门为函数式接口引入了一个新的注解： `@FunctionalInterface` 。该注解可用于一个接口的定义上：

```java
@FunctionalInterface
public interface MyFunctionalInterface {
  void myMethod();    
}
```

一旦使用该注解来定义接口，编译器将会强制检查该接口是否确实有且仅有一个抽象方法，否则将会报错。需要注意的是，即使不使用该注解，只要满足函数式接口的定义，这仍然是一个函数式接口，使用起来都一样。

## 1.4 自定义函数式接口 

对于刚刚定义好的 `MyFunctionalInterface` 函数式接口，典型使用场景就是作为方法的参数：

```java
public class Demo09FunctionalInterface {   
  // 使用自定义的函数式接口作为方法参数    
  private static void doSomething(MyFunctionalInterface inter) {    
  inter.myMethod(); // 调用自定义的函数式接口方法        
}    
   
public static void main(String[] args) {    
  // 调用使用函数式接口的方法        
  doSomething(() ‐> System.out.println("Lambda执行啦！"));        
  }    
}
```

# 第二章 函数式编程

在兼顾面向对象特性的基础上，Java语言通过Lambda表达式与方法引用等，为开发者打开了函数式编程的大门。下面我们做一个初探。

## 2.1 Lambda的延迟执行    

有些场景的代码执行后，结果不一定会被使用，从而造成性能浪费。而Lambda表达式是延迟执行的，这正好可以作为解决方案，提升性能。

### 性能浪费的日志案例  

注:日志可以帮助我们快速的定位问题，记录程序运行过程中的情况，以便项目的监控和优化。一种典型的场景就是对参数进行有条件使用，例如对日志消息进行拼接后，在满足条件的情况下进行打印输出：  

```java
public class Demo01Logger {
    private static void log(int level, String msg) {
        if (level == 1) {
           System.out.println(msg);  
        }
    }
    public static void main(String[] args) {
        String msgA = "Hello";
        String msgB = "World";
        String msgC = "Java";
        log(1, msgA + msgB + msgC);
    }
}
```

这段代码存在问题：无论级别是否满足要求，作为 `log` 方法的第二个参数，三个字符串一定会首先被拼接并传入方法内，然后才会进行级别判断。如果级别不符合要求，那么字符串的拼接操作就白做了，存在性能浪费。 

> 备注：SLF4J是应用非常广泛的日志框架，它在记录日志时为了解决这种性能浪费的问题，并不推荐首先进行字符串的拼接，而是将字符串的若干部分作为可变参数传入方法中，仅在日志级别满足要求的情况下才会进行字符串拼接。例如： `LOGGER.debug("变量{}的取值为{}。", "os", "macOS")` ，其中的大括号 {} 为占位符。如果满足日志级别要求，则会将“os”和“macOS”两个字符串依次拼接到大括号的位置；否则不会进行字符串拼接。这也是一种可行解决方案，但Lambda可以做到更好。

### 体验Lambda的更优写法  

使用Lambda必然需要一个函数式接口：

```java
@FunctionalInterface
public interface MessageBuilder { 
   String buildMessage(); 
}
```

然后对 `log` 方法进行改造：

```java
public class Demo02LoggerLambda {
    private static void log(int level, MessageBuilder builder) {
        if (level == 1) {
           System.out.println(builder.buildMessage());  
        }
    }
    public static void main(String[] args) {
        String msgA = "Hello";
        String msgB = "World";
        String msgC = "Java";
        log(1, () ‐> msgA + msgB + msgC );
    }
}
```

这样一来，只有当级别满足要求的时候，才会进行三个字符串的拼接；否则三个字符串将不会进行拼接。

### 证明Lambda的延迟

下面的代码可以通过结果进行验证：

```java
public class Demo03LoggerDelay {
    private static void log(int level, MessageBuilder builder) {
        if (level == 1) {
           System.out.println(builder.buildMessage());  
        }
    }
    public static void main(String[] args) {
        String msgA = "Hello";
        String msgB = "World";
        String msgC = "Java";
        log(2, () ‐> {
            System.out.println("Lambda执行！");
            return msgA + msgB + msgC;
        });
    }
}
```

从结果中可以看出，在不符合级别要求的情况下，Lambda将不会执行。从而达到节省性能的效果。

> 扩展：实际上使用内部类也可以达到同样的效果，只是将代码操作延迟到了另外一个对象当中通过调用方法来完成。而是否调用其所在方法是在条件判断之后才执行的。

## 2.2 使用Lambda作为参数和返回值  

如果抛开实现原理不说，Java中的Lambda表达式可以被当作是匿名内部类的替代品。如果方法的参数是一个函数式接口类型，那么就可以使用Lambda表达式进行替代。使用Lambda表达式作为方法参数，其实就是使用函数式接口作为方法参数。

例如 `java.lang.Runnable` 接口就是一个函数式接口，假设有一个 startThread 方法使用该接口作为参数，那么就可以使用`Lambda`进行传参。这种情况其实和 Thread 类的构造方法参数为 `Runnable` 没有本质区别。


```java
public class Demo04Runnable {
    private static void startThread(Runnable task) {
       new Thread(task).start();  
    }
    public static void main(String[] args) {
       startThread(() ‐> System.out.println("线程任务执行！"));  
    }
}
```

类似地，如果一个方法的返回值类型是一个函数式接口，那么就可以直接返回一个Lambda表达式。当需要通过一
个方法来获取一个 `java.util.Comparator` 接口类型的对象作为排序器时,就可以调该方法获取。

```java
import java.util.Arrays;
import java.util.Comparator;
public class Demo06Comparator {
    private static Comparator<String> newComparator() {
       return (a, b) ‐> b.length() ‐ a.length();  
    }
    public static void main(String[] args) {
        String[] array = { "abc", "ab", "abcd" };
        System.out.println(Arrays.toString(array));
        Arrays.sort(array, newComparator());
        System.out.println(Arrays.toString(array));
    }
}
```

其中直接return一个Lambda表达式即可。

# 第三章 常用函数式接口

JDK提供了大量常用的函数式接口以丰富Lambda的典型使用场景，它们主要在 java.util.function 包中被提供。
下面是最简单的几个接口及使用示例。

## 3.1 Supplier接口  

`java.util.function.Supplier<T>` 接口仅包含一个无参的方法： `T get()` 。用来获取一个泛型参数指定类型的对
象数据。由于这是一个函数式接口，这也就意味着对应的Lambda表达式需要“对外提供”一个符合泛型类型的对象
数据。

```java
import java.util.function.Supplier;
public class Demo08Supplier {
    private static String getString(Supplier<String> function) {
       return function.get();  
    }
    public static void main(String[] args) {
        String msgA = "Hello";
        String msgB = "World";
        System.out.println(getString(() ‐> msgA + msgB));
    }
}
```

## 3.2 练习：求数组元素最大值  

### 题目

使用 `Supplier` 接口作为方法参数类型，通过Lambda表达式求出int数组中的最大值。提示：接口的泛型请使用`java.lang.Integer` 类。

### 解答  

```java
public class Demo02Test {
    //定一个方法,方法的参数传递Supplier,泛型使用Integer
    public static int getMax(Supplier<Integer> sup){
        return sup.get();
    }
    public static void main(String[] args) {
        int arr[] = {2,3,4,52,333,23};
        //调用getMax方法,参数传递Lambda
        int maxNum = getMax(()‐>{
           //计算数组的最大值
           int max = arr[0];
           for(int i : arr){
               if(i>max){
                   max = i;
               }
           }
           return max;
        });
        System.out.println(maxNum);
    }
}
```

## 3.3 Consumer接口  

`java.util.function.Consumer<T>` 接口则正好与Supplier接口相反，它不是生产一个数据，而是消费一个数据，
其数据类型由泛型决定。  

### 抽象方法：accept

`Consumer` 接口中包含抽象方法 `void accept(T t)` ，意为消费一个指定泛型的数据。基本使用如：

```java
import java.util.function.Consumer;
public class Demo09Consumer {
    private static void consumeString(Consumer<String> function) {
       function.accept("Hello");  
    }
    public static void main(String[] args) {
        consumeString(s ‐> System.out.println(s));
    }
}
```

当然，更好的写法是使用方法引用。

### 默认方法：andThen

如果一个方法的参数和返回值全都是 `Consumer` 类型，那么就可以实现效果：消费数据的时候，首先做一个操作，
然后再做一个操作，实现组合。而这个方法就是 `Consumer` 接口中的default方法 `andThen` 。下面是JDK的源代码：

```java
default Consumer<T> andThen(Consumer<? super T> after) {
    Objects.requireNonNull(after);
    return (T t) ‐> { accept(t); after.accept(t); };
}
```

> 备注： java.util.Objects 的 requireNonNull 静态方法将会在参数为null时主动抛出NullPointerException 异常。这省去了重复编写if语句和抛出空指针异常的麻烦。  

要想实现组合，需要两个或多个Lambda表达式即可，而 andThen 的语义正是“一步接一步”操作。例如两个步骤组
合的情况：

```java
import java.util.function.Consumer;
public class Demo10ConsumerAndThen {
    private static void consumeString(Consumer<String> one, Consumer<String> two) {
       one.andThen(two).accept("Hello");  
    }
    public static void main(String[] args) {
        consumeString(
            s ‐> System.out.println(s.toUpperCase()),
            s ‐> System.out.println(s.toLowerCase()));
    }
}
```

运行结果将会首先打印完全大写的HELLO，然后打印完全小写的hello。当然，通过链式写法可以实现更多步骤的
组合。

## 3.4 练习：格式化打印信息  

### 题目 

下面的字符串数组当中存有多条信息，请按照格式“ `姓名：XX。性别：XX。` ”的格式将信息打印出来。要求将打印姓
名的动作作为第一个 `Consumer` 接口的Lambda实例，将打印性别的动作作为第二个 `Consumer` 接口的Lambda实
例，将两个 `Consumer` 接口按照顺序“拼接”到一起。

```java
public static void main(String[] args) {
   String[] array = { "迪丽热巴,女", "古力娜扎,女", "马尔扎哈,男" };  
}
```

### 解答

```java
import java.util.function.Consumer;
public class DemoConsumer {
    public static void main(String[] args) {
        String[] array = { "迪丽热巴,女", "古力娜扎,女", "马尔扎哈,男" };
        printInfo(s ‐> System.out.print("姓名：" + s.split(",")[0]),
                  s ‐> System.out.println("。性别：" + s.split(",")[1] + "。"),
                  array);
    }
    private static void printInfo(Consumer<String> one, Consumer<String> two, String[] array) {
        for (String info : array) {
            one.andThen(two).accept(info); // 姓名：迪丽热巴。性别：女。
        }
    }
}
```

## 3.5 Predicate接口  

有时候我们需要对某种类型的数据进行判断，从而得到一个boolean值结果。这时可以使用
`java.util.function.Predicate<T>` 接口。

### 抽象方法：test  

`Predicate` 接口中包含一个抽象方法： `boolean test(T t)` 。用于条件判断的场景：

```java
import java.util.function.Predicate;
public class Demo15PredicateTest {
    private static void method(Predicate<String> predicate) {
        boolean veryLong = predicate.test("HelloWorld");
        System.out.println("字符串很长吗：" + veryLong);
    }
    public static void main(String[] args) {
        method(s ‐> s.length() > 5);
    }
}
```
条件判断的标准是传入的Lambda表达式逻辑，只要字符串长度大于5则认为很长。

### 默认方法：and 

既然是条件判断，就会存在与、或、非三种常见的逻辑关系。其中将两个 `Predicate` 条件使用“与”逻辑连接起来实
现**“并且”**的效果时，可以使用default方法 `and` 。其JDK源码为：

```java
default Predicate<T> and(Predicate<? super T> other) {
    Objects.requireNonNull(other);
    return (t) ‐> test(t) && other.test(t);
}
```

如果要判断一个字符串既要包含大写“H”，又要包含大写“W”，那么：

```java
import java.util.function.Predicate;
public class Demo16PredicateAnd {
    private static void method(Predicate<String> one, Predicate<String> two) {
        boolean isValid = one.and(two).test("Helloworld");
        System.out.println("字符串符合要求吗：" + isValid);
    }
    public static void main(String[] args) {
        method(s ‐> s.contains("H"), s ‐> s.contains("W"));
    }
}
```

### 默认方法：or 

与 `and` 的“与”类似，默认方法 `or` 实现逻辑关系中的“或”。JDK源码为：

```java
default Predicate<T> or(Predicate<? super T> other) {
    Objects.requireNonNull(other);
    return (t) ‐> test(t) || other.test(t);
}
```

如果希望实现逻辑“字符串包含大写H或者包含大写W”，那么代码只需要将“and”修改为“or”名称即可，其他都不
变：

```java
import java.util.function.Predicate;
public class Demo16PredicateAnd {
    private static void method(Predicate<String> one, Predicate<String> two) {
        boolean isValid = one.or(two).test("Helloworld");
        System.out.println("字符串符合要求吗：" + isValid);
    }
    public static void main(String[] args) {
        method(s ‐> s.contains("H"), s ‐> s.contains("W"));
    }
}
```

### 默认方法：negate 

“与”、“或”已经了解了，剩下的“非”（取反）也会简单。默认方法 negate 的JDK源代码为：

```java
default Predicate<T> negate() {
    return (t) ‐> !test(t);
}
```
从实现中很容易看出，它是执行了test方法之后，对结果boolean值进行“!”取反而已。一定要在 `test` 方法调用之前
调用 `negate` 方法，正如 `and` 和 `or` 方法一样：

```java
import java.util.function.Predicate;
public class Demo17PredicateNegate {
    private static void method(Predicate<String> predicate) {
        boolean veryLong = predicate.negate().test("HelloWorld");
        System.out.println("字符串很长吗：" + veryLong);
    }
    public static void main(String[] args) {
       method(s ‐> s.length() < 5);  
    }
}
```

## 3.6 练习：集合信息筛选

### 题目 

数组当中有多条“姓名+性别”的信息如下，请通过 `Predicate` 接口的拼装将符合要求的字符串筛选到集合
`ArrayList` 中，需要同时满足两个条件：

1. 必须为女生；
2. 姓名为4个字。

```java
public class DemoPredicate {
    public static void main(String[] args) {
       String[] array = { "迪丽热巴,女", "古力娜扎,女", "马尔扎哈,男", "赵丽颖,女" };  
    }
}
```

### 解答  

```java
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
public class DemoPredicate {
    public static void main(String[] args) {
        String[] array = { "迪丽热巴,女", "古力娜扎,女", "马尔扎哈,男", "赵丽颖,女" };
        List<String> list = filter(array,
                                   s ‐> "女".equals(s.split(",")[1]),
                                   s ‐> s.split(",")[0].length() == 4);
        System.out.println(list);
    }
    private static List<String> filter(String[] array, Predicate<String> one,
                                       Predicate<String> two) {
        List<String> list = new ArrayList<>();
        for (String info : array) {
            if (one.and(two).test(info)) {
                list.add(info);
            }
        }
        return list;
    }
}
```

## 3.7 Function接口  

`java.util.function.Function<T,R>` 接口用来根据一个类型的数据得到另一个类型的数据，前者称为前置条件，
后者称为后置条件。

### 抽象方法：apply  

`Function` 接口中最主要的抽象方法为： `R apply(T t)` ，根据类型T的参数获取类型R的结果。
使用的场景例如：将 `String` 类型转换为 `Integer` 类型。

```java
import java.util.function.Function;
public class Demo11FunctionApply {
    private static void method(Function<String, Integer> function) {
        int num = function.apply("10");
        System.out.println(num + 20);
    }
    public static void main(String[] args) {
        method(s ‐> Integer.parseInt(s));
    }
}
```

当然，最好是通过方法引用的写法。

### 默认方法：andThen

`Function` 接口中有一个默认的 `andThen` 方法，用来进行组合操作。JDK源代码如：

```java
default <V> Function<T, V> andThen(Function<? super R, ? extends V> after) {
    Objects.requireNonNull(after);
    return (T t) ‐> after.apply(apply(t));
}
```

该方法同样用于“先做什么，再做什么”的场景，和 `Consumer` 中的 `andThen` 差不多：

```java
import java.util.function.Function;
public class Demo12FunctionAndThen {
    private static void method(Function<String, Integer> one, Function<Integer, Integer> two) {
        int num = one.andThen(two).apply("10");
        System.out.println(num + 20);
    }
    public static void main(String[] args) {
        method(str‐>Integer.parseInt(str)+10, i ‐> i *= 10);
    }
}
```

第一个操作是将字符串解析成为int数字，第二个操作是乘以10。两个操作通过 andThen 按照前后顺序组合到了一
起

> 请注意，Function的前置条件泛型和后置条件泛型可以相同。

## 3.8 练习：自定义函数模型拼接

### 题目  

请使用 `Function` 进行函数模型的拼接，按照顺序需要执行的多个函数操作为：
`String str = "赵丽颖,20"`

1. 将字符串截取数字年龄部分，得到字符串；
2. 将上一步的字符串转换成为int类型的数字；
3. 将上一步的int数字累加100，得到结果int数字。


### 解答

```java
 import java.util.function.Function;
public class DemoFunction {
    public static void main(String[] args) {
        String str = "赵丽颖,20";
        int age = getAgeNum(str, s ‐> s.split(",")[1],
                            s ‐>Integer.parseInt(s),
                            n ‐> n += 100);
        System.out.println(age);
    }
    private static int getAgeNum(String str, Function<String, String> one,
                                 Function<String, Integer> two,
                                 Function<Integer, Integer> three) {
        return one.andThen(two).andThen(three).apply(str);
    }
}
```

# day24 【Stream流、方法引用】

## 主要内容  

- Stream流
- 方法引用  

## 学习目标

- [ ] 能够理解流与集合相比的优点 
- [ ] 能够理解流的延迟执行特点
- [ ] 能够通过集合、映射或数组获取流
- [ ] 能够掌握常用的流操作
- [ ] 能够使用输出语句的方法引用3
- [ ] 能够通过4种方式使用方法引用
- [ ] 能够使用类和数组的构造器引用8

# 第一章 Stream流

说到Stream便容易想到I/O Stream，而实际上，谁规定“流”就一定是“IO流”呢？在Java 8中，得益于Lambda所带来的函数式编程，引入了一个全新的Stream概念，用于解决已有集合类库既有的弊端。

## 1.1 引言

### 传统集合的多步遍历代码

几乎所有的集合（如 Collection 接口或 Map 接口等）都支持直接或间接的遍历操作。而当我们需要对集合中的元素进行操作的时候，除了必需的添加、删除、获取外，最典型的就是集合遍历。例如：

```java
import java.util.ArrayList;
import java.util.List;
public class Demo01ForEach {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("张无忌");
        list.add("周芷若");
        list.add("赵敏");
        list.add("张强");
        list.add("张三丰");
        for (String name : list) {
           System.out.println(name);  
        }
    } 
}
```

这是一段非常简单的集合遍历操作：对集合中的每一个字符串都进行打印输出操作。

### 循环遍历的弊端 

Java 8的Lambda让我们可以更加专注于做什么（What），而不是怎么做（How），这点此前已经结合内部类进行了对比说明。现在，我们仔细体会一下上例代码，可以发现：

- for循环的语法就是“怎么做”
- for循环的循环体才是“做什么”

为什么使用循环？因为要进行遍历。但循环是遍历的唯一方式吗？遍历是指每一个元素逐一进行处理，`而并不是从第一个到最后一个顺次处理的循环`。前者是目的，后者是方式。

试想一下，如果希望对集合中的元素进行筛选过滤：

1. 将集合A根据条件一过滤为子集B；
2. 然后再根据条件二过滤为子集C。

那怎么办？在Java 8之前的做法可能为：

```java
import java.util.ArrayList;
import java.util.List;
public class Demo02NormalFilter {
   public static void main(String[] args) {  
       List<String> list = new ArrayList<>();  
        list.add("张无忌");
        list.add("周芷若");
        list.add("赵敏");
        list.add("张强");
        list.add("张三丰");
        List<String> zhangList = new ArrayList<>();
        for (String name : list) {
            if (name.startsWith("张")) {
               zhangList.add(name);  
            }
        }
        List<String> shortList = new ArrayList<>();
        for (String name : zhangList) {
            if (name.length() == 3) {
               shortList.add(name);  
            }
        }
        for (String name : shortList) {
           System.out.println(name);  
        }
    }
}
```

这段代码中含有三个循环，每一个作用不同：
  1. 首先筛选所有姓张的人；
  2. 然后筛选名字有三个字的人；
  3. 最后进行对结果进行打印输出。  

每当我们需要对集合中的元素进行操作的时候，总是需要进行循环、循环、再循环。这是理所当然的么？不是。循环是做事情的方式，而不是目的。另一方面，使用线性循环就意味着只能遍历一次。如果希望再次遍历，只能再使用另一个循环从头开始。

那，Lambda的衍生物Stream能给我们带来怎样更加优雅的写法呢？

### Stream的更优写法 

下面来看一下借助Java 8的Stream API，什么才叫优雅：  

```java
import java.util.ArrayList;
import java.util.List;
public class Demo03StreamFilter {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("张无忌");
        list.add("周芷若");
        list.add("赵敏");
        list.add("张强");
        list.add("张三丰");
        list.stream()
           .filter(s ‐> s.startsWith("张"))  
            .filter(s ‐> s.length() == 3)
            .forEach(System.out::println);
    }
}
```

直接阅读代码的字面意思即可完美展示无关逻辑方式的语义：`获取流、过滤姓张、过滤长度为3、逐一打印`。代码中并没有体现使用线性循环或是其他任何算法进行遍历，我们真正要做的事情内容被更好地体现在代码中。

## 1.2 流式思想概述

注意：请暂时忘记对传统IO流的固有印象！

整体来看，流式思想类似于工厂车间的“生产流水线”。

当需要对多个元素进行操作（特别是多步操作）的时候，考虑到性能及便利性，我们应该首先拼好一个“模型”步骤方案，然后再按照方案去执行它。

`filter` 、 `map` 、 `skip `都是在对函数模型进行操作，集合元素并没有真正被处理。只有当终结方法 `count`执行的时候，整个模型才会按照指定策略执行操作。而这得益于Lambda的延迟执行特性。

> 备注：“Stream流”其实是一个集合元素的函数模型，它并不是集合，也不是数据结构，其本身并不存储任何元素（或其地址值）。

Stream（流）是一个来自数据源的元素队列

- 元素是特定类型的对象，形成一个队列。 Java中的Stream并不会存储元素，而是按需计算。   
-  数据源 流的来源。 可以是集合，数组 等。 

和以前的Collection操作不同， Stream操作还有两个基础的特征：  

- Pipelining: 中间操作都会返回流对象本身。 这样多个操作可以串联成一个管道， 如同流式风格（fluentstyle）。 这样做可以对操作进行优化， 比如延迟执行(laziness)和短路( short-circuiting)。
- 内部迭代： 以前对集合遍历都是通过Iterator或者增强for的方式, 显式的在集合外部进行迭代， 这叫做外部迭代。 Stream提供了内部迭代的方式，流可以直接调用遍历方法。

当使用一个流的时候，通常包括三个基本步骤：获取一个数据源（source）→ 数据转换→执行操作获取想要的结果，每次转换原有 Stream 对象不改变，返回一个新的 Stream 对象（可以有多次转换），这就允许对其操作可以像链条一样排列，变成一个管道。

## 1.3 获取流   

`java.util.stream.Stream<T>` 是Java 8新加入的最常用的流接口。（这并不是一个函数式接口。）获取一个流非常简单，有以下几种常用的方式：

- 所有的 `Collection` 集合都可以通过 `stream` 默认方法获取流；
- `Stream` 接口的静态方法 `of` 可以获取数组对应的流。  

### 根据Collection获取流 

首先， `java.util.Collection` 接口中加入了default方法 `stream` 用来获取流，所以其所有实现类均可获取流。

```java
import java.util.*;
import java.util.stream.Stream;
public class Demo04GetStream {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        // ...
        Stream<String> stream1 = list.stream();
        Set<String> set = new HashSet<>();
        // ...
        Stream<String> stream2 = set.stream();
        Vector<String> vector = new Vector<>();
        // ...
        Stream<String> stream3 = vector.stream();
    }
}
```

### 根据Map获取流

`java.util.Map` 接口不是 `Collection` 的子接口，且其K-V数据结构不符合流元素的单一特征，所以获取对应的流需要分key、value或entry等情况：

```java
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;
public class Demo05GetStream {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        // ...
        Stream<String> keyStream = map.keySet().stream();
        Stream<String> valueStream = map.values().stream();
        Stream<Map.Entry<String, String>> entryStream = map.entrySet().stream();
    }
}
```

### 根据数组获取流  

如果使用的不是集合或映射而是数组，由于数组对象不可能添加默认方法，所以 `Stream` 接口中提供了静态方法`of` ，使用很简单：

```java
import java.util.stream.Stream;
public class Demo06GetStream {
    public static void main(String[] args) {
        String[] array = { "张无忌", "张翠山", "张三丰", "张一元" };
        Stream<String> stream = Stream.of(array);
    }
}
```
> 备注： of 方法的参数其实是一个可变参数，所以支持数组。

## 1.4 常用方法

流模型的操作很丰富，这里介绍一些常用的API。这些方法可以被分成两种：

- 延迟方法：返回值类型仍然是 Stream 接口自身类型的方法，因此支持链式调用。（除了终结方法外，其余方法均为延迟方法。）

- 终结方法：返回值类型不再是 `Stream` 接口自身类型的方法，因此不再支持类似 `StringBuilder` 那样的链式调用。本小节中，终结方法包括 `count` 和 `forEach` 方法。

> 备注：本小节之外的更多方法，请自行参考API文档。

### 逐一处理：forEach 

虽然方法名字叫 `forEach` ，但是与for循环中的“for-each”昵称不同。 

```java
void forEach(Consumer<? super T> action);
```

该方法接收一个 `Consumer` 接口函数，会将每一个流元素交给该函数进行处理。

### 复习Consumer接口 

```java
java.util.function.Consumer<T>接口是一个消费型接口。
Consumer接口中包含抽象方法void accept(T t)，意为消费一个指定泛型的数据。
```

### 基本使用： 

```java
import java.util.stream.Stream;
public class Demo12StreamForEach {
    public static void main(String[] args) {
        Stream<String> stream = Stream.of("张无忌", "张三丰", "周芷若");
        stream.forEach(name‐> System.out.println(name));
    }
}
```

### 过滤：filter

可以通过 `filter` 方法将一个流转换成另一个子集流。方法签名：

```java
Stream<T> filter(Predicate<? super T> predicate);
```

该接口接收一个 `Predicate` 函数式接口参数（可以是一个Lambda或方法引用）作为筛选条件。

### 复习Predicate接口  

此前我们已经学习过 `java.util.stream.Predicate` 函数式接口，其中唯一的抽象方法为：

```java
boolean test(T t);
```

该方法将会产生一个boolean值结果，代表指定的条件是否满足。如果结果为true，那么Stream流的 `filter` 方法将会留用元素；如果结果为false，那么 `filter` 方法将会舍弃元素。


### 基本使用

Stream流中的 `filter` 方法基本使用的代码如：

```java
import java.util.stream.Stream;
public class Demo07StreamFilter {
    public static void main(String[] args) {
        Stream<String> original = Stream.of("张无忌", "张三丰", "周芷若");
        Stream<String> result = original.filter(s ‐> s.startsWith("张"));
    }
}
```

在这里通过Lambda表达式来指定了筛选的条件：必须姓张。

### 映射：map  

如果需要将流中的元素映射到另一个流中，可以使用 `map` 方法。方法签名：  

```java
<R> Stream<R> map(Function<? super T, ? extends R> mapper);
```

该接口需要一个 `Function` 函数式接口参数，可以将当前流中的T类型数据转换为另一种R类型的流。

### 复习Function接口 

此前我们已经学习过 `java.util.stream.Function` 函数式接口，其中唯一的抽象方法为：

```java
R apply(T t);
```

这可以将一种T类型转换成为R类型，而这种转换的动作，就称为“映射”。

### 基本使用 

Stream流中的 `map` 方法基本使用的代码如：

```java
import java.util.stream.Stream;
public class Demo08StreamMap {
    public static void main(String[] args) {
        Stream<String> original = Stream.of("10", "12", "18");
        Stream<Integer> result = original.map(str‐>Integer.parseInt(str));
    }
}
```

这段代码中， `map` 方法的参数通过方法引用，将字符串类型转换成为了int类型（并自动装箱为 `Integer` 类对象）。

```java
long count();
```

该方法返回一个long值代表元素个数（不再像旧集合那样是int值）。基本使用：

```java
import java.util.stream.Stream;
public class Demo09StreamCount {
    public static void main(String[] args) {
        Stream<String> original = Stream.of("张无忌", "张三丰", "周芷若");
        Stream<String> result = original.filter(s ‐> s.startsWith("张"));
        System.out.println(result.count()); // 2
    }
}
```

### 取用前几个：limit  

`limit` 方法可以对流进行截取，只取用前n个。方法签名：

```java
Stream<T> limit(long maxSize);
```

参数是一个long型，如果集合当前长度大于参数则进行截取；否则不进行操作。基本使用：

```java
import java.util.stream.Stream;
public class Demo10StreamLimit {
    public static void main(String[] args) {
        Stream<String> original = Stream.of("张无忌", "张三丰", "周芷若");
        Stream<String> result = original.limit(2);
        System.out.println(result.count()); // 2
    }
}
```

### 跳过前几个：skip 

如果希望跳过前几个元素，可以使用 skip 方法获取一个截取之后的新流：

```java
Stream<T> skip(long n);
```

如果流的当前长度大于n，则跳过前n个；否则将会得到一个长度为0的空流。基本使用：

```java
import java.util.stream.Stream;
public class Demo11StreamSkip {
    public static void main(String[] args) {
        Stream<String> original = Stream.of("张无忌", "张三丰", "周芷若");
        Stream<String> result = original.skip(2);
        System.out.println(result.count()); // 1
    }
}
```

### 组合：concat

如果有两个流，希望合并成为一个流，那么可以使用 `Stream` 接口的静态方法 `concat` ：

```java
static <T> Stream<T> concat(Stream<? extends T> a, Stream<? extends T> b)
```

> 备注：这是一个静态方法，与 java.lang.String 当中的 concat 方法是不同的。

该方法的基本使用代码如：

```java
import java.util.stream.Stream;
public class Demo12StreamConcat {
    public static void main(String[] args) {
        Stream<String> streamA = Stream.of("张无忌");
        Stream<String> streamB = Stream.of("张翠山");
        Stream<String> result = Stream.concat(streamA, streamB);
    }
}
```

## 1.5 练习：集合元素处理（传统方式）

### 题目

现在有两个 ArrayList 集合存储队伍当中的多个成员姓名，要求使用传统的for循环（或增强for循环）依次进行以下若干操作步骤：

1. 第一个队伍只要名字为3个字的成员姓名；存储到一个新集合中。
2. 第一个队伍筛选之后只要前3个人；存储到一个新集合中。
3. 第二个队伍只要姓张的成员姓名；存储到一个新集合中。
4. 第二个队伍筛选之后不要前2个人；存储到一个新集合中。
5. 将两个队伍合并为一个队伍；存储到一个新集合中。
6. 根据姓名创建 Person 对象；存储到一个新集合中。
7. 打印整个队伍的Person对象信息。

两个队伍（集合）的代码如下：

```java
import java.util.ArrayList;
import java.util.List;
public class DemoArrayListNames {
    public static void main(String[] args) {
       //第一支队伍
        ArrayList<String> one = new ArrayList<>();
        one.add("迪丽热巴");
        one.add("宋远桥");
        one.add("苏星河");
        one.add("石破天");
        one.add("石中玉");
        one.add("老子");
        one.add("庄子");
        one.add("洪七公");
        //第二支队伍
        ArrayList<String> two = new ArrayList<>();
        two.add("古力娜扎");
        two.add("张无忌");
        two.add("赵丽颖");
        two.add("张三丰");
        two.add("尼古拉斯赵四");
        two.add("张天爱");
        two.add("张二狗");
// ....        
    }
}
```

而 `Person` 类的代码为：

```java
public class Person {
   
    private String name;
    public Person() {}
    public Person(String name) {
        this.name = name;
    }
    @Override
    public String toString() {
        return "Person{name='" + name + "'}";
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
```

### 解答  

既然使用传统的for循环写法，那么：

```java
public class DemoArrayListNames {
    public static void main(String[] args) {
        List<String> one = new ArrayList<>();
        // ...
        List<String> two = new ArrayList<>();
        // ...
        // 第一个队伍只要名字为3个字的成员姓名；
        List<String> oneA = new ArrayList<>();
        for (String name : one) {
            if (name.length() == 3) {
                oneA.add(name);
            }
        }
        // 第一个队伍筛选之后只要前3个人；
        List<String> oneB = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            oneB.add(oneA.get(i));
        }
        // 第二个队伍只要姓张的成员姓名；
        List<String> twoA = new ArrayList<>();
        for (String name : two) {
            if (name.startsWith("张")) {
                twoA.add(name);
            }
        }
        // 第二个队伍筛选之后不要前2个人；
        List<String> twoB = new ArrayList<>();
        for (int i = 2; i < twoA.size(); i++) {
            twoB.add(twoA.get(i));
        }
        // 将两个队伍合并为一个队伍；
        List<String> totalNames = new ArrayList<>();
        totalNames.addAll(oneB);
        totalNames.addAll(twoB);
        // 根据姓名创建Person对象；
        List<Person> totalPersonList = new ArrayList<>();
        for (String name : totalNames) {
            totalPersonList.add(new Person(name));
        }
        // 打印整个队伍的Person对象信息。
        for (Person person : totalPersonList) {
            System.out.println(person);
        }
    }
}
```

运行结果为：

```java
Person{name='宋远桥'}
Person{name='苏星河'}
Person{name='石破天'}
Person{name='张天爱'}
Person{name='张二狗'}
```

## 1.6 练习：集合元素处理（Stream方式）

### 题目 

将上一题当中的传统for循环写法更换为Stream流式处理方式。两个集合的初始内容不变， Person 类的定义也不
变。

### 解答

等效的Stream流式处理代码为：

```java
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
public class DemoStreamNames {
    public static void main(String[] args) {
        List<String> one = new ArrayList<>();
        // ...
        List<String> two = new ArrayList<>();
        // ...
        // 第一个队伍只要名字为3个字的成员姓名；
        // 第一个队伍筛选之后只要前3个人；
        Stream<String> streamOne = one.stream().filter(s ‐> s.length() == 3).limit(3);
        // 第二个队伍只要姓张的成员姓名；
        // 第二个队伍筛选之后不要前2个人；
        Stream<String> streamTwo = two.stream().filter(s ‐> s.startsWith("张")).skip(2);
        // 将两个队伍合并为一个队伍；
        // 根据姓名创建Person对象；
        // 打印整个队伍的Person对象信息。
        Stream.concat(streamOne, streamTwo).map(Person::new).forEach(System.out::println);
    }
}
```

运行效果完全一样：

```java
Person{name='宋远桥'}
Person{name='苏星河'}
Person{name='石破天'}
Person{name='张天爱'}
Person{name='张二狗'}
```

# 第二章 方法引用

在使用Lambda表达式的时候，我们实际上传递进去的代码就是一种解决方案：拿什么参数做什么操作。那么考虑
一种情况：如果我们在Lambda中所指定的操作方案，已经有地方存在相同方案，那是否还有必要再写重复逻辑？

## 2.1 冗余的Lambda场景

来看一个简单的函数式接口以应用Lambda表达式：

```java
@FunctionalInterface
public interface Printable {
   void print(String str);  
}
```

在 `Printable` 接口当中唯一的抽象方法 `print` 接收一个字符串参数，目的就是为了打印显示它。那么通过Lambda
来使用它的代码很简单：

```java
public class Demo01PrintSimple {
    private static void printString(Printable data) {
       data.print("Hello, World!");  
    }
    public static void main(String[] args) {
       printString(s ‐> System.out.println(s));  
    }
}
```

其中 `printString` 方法只管调用 `Printable` 接口的 `print` 方法，而并不管 `print` 方法的具体实现逻辑会将字符串
打印到什么地方去。而 `main` 方法通过Lambda表达式指定了函数式接口 `Printable` 的具体操作方案为：拿到
String（类型可推导，所以可省略）数据后，在控制台中输出它。

## 2.2 问题分析 

这段代码的问题在于，对字符串进行控制台打印输出的操作方案，明明已经有了现成的实现，那就是 System.out
对象中的 println(String) 方法。既然Lambda希望做的事情就是调用 println(String) 方法，那何必自己手动调
用呢？

## 2.3 用方法引用改进代码

能否省去Lambda的语法格式（尽管它已经相当简洁）呢？只要“引用”过去就好了：  

```java
public class Demo02PrintRef {
    private static void printString(Printable data) {
        data.print("Hello, World!");
    }
    public static void main(String[] args) {
       printString(System.out::println);  
    }
}
```
请注意其中的双冒号 :: 写法，这被称为“方法引用”，而双冒号是一种新的语法。

## 2.4 方法引用符 

双冒号` :: `为引用运算符，而它所在的表达式被称为方法引用。如果Lambda要表达的函数方案已经存在于某个方
法的实现中，那么则可以通过双冒号来引用该方法作为Lambda的替代者。

### 语义分析  
例如上例中， `System.out` 对象中有一个重载的 `println(String)` 方法恰好就是我们所需要的。那么对于
`printString` 方法的函数式接口参数，对比下面两种写法，完全等效：

- Lambda表达式写法： `s -> System.out.println(s);`
- 方法引用写法： `System.out::println`

第一种语义是指：拿到参数之后经Lambda之手，继而传递给 `System.out.println` 方法去处理。

第二种等效写法的语义是指：直接让 `System.out` 中的 `println` 方法来取代Lambda。两种写法的执行效果完全一
样，而第二种方法引用的写法复用了已有方案，更加简洁。

注:Lambda 中 传递的参数 一定是方法引用中 的那个方法可以接收的类型,否则会抛出异常

### 推导与省略 

如果使用Lambda，那么根据**“可推导就是可省略”**的原则，无需指定参数类型，也无需指定的重载形式——它们都
将被自动推导。而如果使用方法引用，也是同样可以根据上下文进行推导。


函数式接口是Lambda的基础，而方法引用是Lambda的孪生兄弟。

下面这段代码将会调用 `println` 方法的不同重载形式，将函数式接口改为int类型的参数：

```java
@FunctionalInterface
public interface PrintableInteger {
   void print(int str);  
}
```

由于上下文变了之后可以自动推导出唯一对应的匹配重载，所以方法引用没有任何变化：

```java
public class Demo03PrintOverload {
    private static void printInteger(PrintableInteger data) {
       data.print(1024);  
    }
    public static void main(String[] args) {
       printInteger(System.out::println);  
    }
}
```
这次方法引用将会自动匹配到 `println(int)` 的重载形式。

## 2.5 通过对象名引用成员方法

这是最常见的一种用法，与上例相同。如果一个类中已经存在了一个成员方法：

```java
public class MethodRefObject {
    public void printUpperCase(String str) {
       System.out.println(str.toUpperCase());  
    }
}
```

函数式接口仍然定义为：

```java
@FunctionalInterface
public interface Printable {
   void print(String str);  
}
```

那么当需要使用这个 `printUpperCase` 成员方法来替代` Printable` 接口的Lambda的时候，已经具有了
`MethodRefObject` 类的对象实例，则可以通过对象名引用成员方法，代码为：

```java
public class Demo04MethodRef {
    private static void printString(Printable lambda) {
       lambda.print("Hello");  
    }
    public static void main(String[] args) {
        MethodRefObject obj = new MethodRefObject();
        printString(obj::printUpperCase);
    }
}
```

## 2.6 通过类名称引用静态方法

由于在 `java.lang.Math` 类中已经存在了静态方法 `abs` ，所以当我们需要通过Lambda来调用该方法时，有两种写
法。首先是函数式接口：

```java
@FunctionalInterface
public interface Calcable {
   int calc(int num);  
}
```

第一种写法是使用Lambda表达式：

```java
public class Demo05Lambda {
    private static void method(int num, Calcable lambda) {
       System.out.println(lambda.calc(num));  
    }
    public static void main(String[] args) {
       method(‐10, n ‐> Math.abs(n));  
    }
}
```

但是使用方法引用的更好写法是：

```java
public class Demo06MethodRef {
    private static void method(int num, Calcable lambda) {
       System.out.println(lambda.calc(num));  
    }
    public static void main(String[] args) {
       method(‐10, Math::abs);  
    }
}
```

在这个例子中，下面两种写法是等效的：
- Lambda表达式： `n -> Math.abs(n)`  
- 方法引用： `Math::abs`

## 2.7 通过super引用成员方法 
如果存在继承关系，当Lambda中需要出现super调用时，也可以使用方法引用进行替代。首先是函数式接口：

```java
@FunctionalInterface
public interface Greetable {
   void greet();  
}
```

然后是父类 `Human` 的内容：

```java
public class Human {
    public void sayHello() {
       System.out.println("Hello!");  
    }
}
```

最后是子类 `Man` 的内容，其中使用了Lambda的写法：

```java
public class Man extends Human {
    @Override
    public void sayHello() {
        System.out.println("大家好,我是Man!");
    }
    //定义方法method,参数传递Greetable接口
    public void method(Greetable g){
        g.greet();
    }
    public void show(){
        //调用method方法,使用Lambda表达式
        method(()‐>{
            //创建Human对象,调用sayHello方法
            new Human().sayHello();
        });
        //简化Lambda
        method(()‐>new Human().sayHello());
        //使用super关键字代替父类对象
        method(()‐>super.sayHello());
    }
}
```

但是如果使用方法引用来调用父类中的 `sayHello` 方法会更好，例如另一个子类 `Woman` ：

```java
public class Man extends Human {
    @Override
    public void sayHello() {
        System.out.println("大家好,我是Man!");
    }
    //定义方法method,参数传递Greetable接口
    public void method(Greetable g){
        g.greet();
    }
    public void show(){
        method(super::sayHello);
    }
}
```

在这个例子中，下面两种写法是等效的：

- Lambda表达式： `() -> super.sayHello()`
- 方法引用： `super::sayHello`

## 2.8 通过this引用成员方法

this代表当前对象，如果需要引用的方法就是当前类中的成员方法，那么可以使用`this::成员方法`的格式来使用方
法引用。首先是简单的函数式接口：

```java
@FunctionalInterface
public interface Richable {
   void buy(); 
}
```

下面是一个丈夫 `Husband` 类：

```java
public class Husband {
    private void marry(Richable lambda) {
       lambda.buy();  
    }
    public void beHappy() {
       marry(() ‐> System.out.println("买套房子"));  
    }
}
```

开心方法 `beHappy` 调用了结婚方法 `marry` ，后者的参数为函数式接口 `Richable` ，所以需要一个Lambda表达式。
但是如果这个Lambda表达式的内容已经在本类当中存在了，则可以对 `Husband` 丈夫类进行修改：

```java
public class Husband {
    private void buyHouse() {
       System.out.println("买套房子");  
    }
    private void marry(Richable lambda) {
       lambda.buy();  
    }
    public void beHappy() {
       marry(() ‐> this.buyHouse());  
    }
}
```

如果希望取消掉Lambda表达式，用方法引用进行替换，则更好的写法为：

```java
public class Husband {
    private void buyHouse() {
       System.out.println("买套房子");  
    }
    private void marry(Richable lambda) {
       lambda.buy();  
    }
    public void beHappy() {
       marry(this::buyHouse);  
    }
}
```

在这个例子中，下面两种写法是等效的：

- Lambda表达式： `() -> this.buyHouse()`
- 方法引用： `this::buyHouse`

## 2.9 类的构造器引用

由于构造器的名称与类名完全一样，并不固定。所以构造器引用使用 类名称`::new` 的格式表示。首先是一个简单
的 `Person` 类：

```java
public class Person {
    private String name;
    public Person(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
```

然后是用来创建 `Person` 对象的函数式接口：

```java
public interface PersonBuilder {
    Person buildPerson(String name);
}
```

要使用这个函数式接口，可以通过Lambda表达式：

```java
public class Demo09Lambda {
    public static void printName(String name, PersonBuilder builder) {
       System.out.println(builder.buildPerson(name).getName());  
    }
    public static void main(String[] args) {
       printName("赵丽颖", name ‐> new Person(name));  
    }
}
```

但是通过构造器引用，有更好的写法：

```java
public class Demo10ConstructorRef {
    public static void printName(String name, PersonBuilder builder) {
       System.out.println(builder.buildPerson(name).getName());  
    }
    public static void main(String[] args) {
       printName("赵丽颖", Person::new);  
    }
}
```
在这个例子中，下面两种写法是等效的：
- Lambda表达式： `name -> new Person(name)`
- 方法引用： `Person::new`

## 2.10 数组的构造器引用 
数组也是 `Object` 的子类对象，所以同样具有构造器，只是语法稍有不同。如果对应到Lambda的使用场景中时，
需要一个函数式接口：

```java
@FunctionalInterface
public interface ArrayBuilder {
   int[] buildArray(int length);  
}
```

在应用该接口的时候，可以通过Lambda表达式：

```java
public class Demo11ArrayInitRef {  
    private static int[] initArray(int length, ArrayBuilder builder) {
       return builder.buildArray(length);  
    }
    public static void main(String[] args) {
       int[] array = initArray(10, length ‐> new int[length]);  
    }
}
```

但是更好的写法是使用数组的构造器引用：

```java
public class Demo12ArrayInitRef {
    private static int[] initArray(int length, ArrayBuilder builder) {
       return builder.buildArray(length);  
    }
    public static void main(String[] args) {
       int[] array = initArray(10, int[]::new);  
    }
}
```

在这个例子中，下面两种写法是等效的：
- Lambda表达式： `length -> new int[length]`
- 方法引用： `int[]::new`

















































































