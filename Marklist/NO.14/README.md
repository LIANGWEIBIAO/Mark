<!-- GFM-TOC -->
* [一、Java开发入门](#一、Java开发入门)
  * [Java语言特点](##Java语言特点) 
  * [Java安装JDK与环境配置](##Java环境准备)
  * [JVM JDK 和 JRE 最详细通俗的解答](##-JVM-JDK-和-JRE-最详细通俗的解答)
  * [第一个java程序](##第一个java程序) 
  * [命名规则和规约](##命名规则和规约)   
* [二、数据类型](#二数据类型)
  * [基本数据类型](#基本数据类型)
  * [引用数据类型](##引用数据类型)
  * [常量与变量](##常量与变量)  
<!-- GFM-TOC -->
  
  
## Java语言特点  
1. 简单易学；
2. 面向对象（封装，继承，多态）；
3. 平台无关性（ Java 虚拟机实现平台无关性）；
4. 可靠性；
5. 安全性；
6. 支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）；
7. 支持网络编程并且很方便（ Java 语言诞生本身就是为简化网络编程设计的，因此 Java 语言不仅支持网络编程而且很方便）；
8. 编译与解释并存；

## Java环境准备   
安装jdk 1.8 (jre jvm)

C:\Program Files\Java\jdk1.8.0_202\bin
路径下存在一个`javac.exe编译工具`和`java.exe执行器`   




## JVM JDK 和 JRE 最详细通俗的解答   
### JVM

Java虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。     



### JVM

Java虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。

**什么是字节码?采用字节码的好处是什么?**

> 在 Java 中，JVM可以理解的代码就叫做`字节码`（即扩展名为 `.class` 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java程序无须重新编译便可在多种不同操作系统的计算机上运行。

**Java 程序从源代码到运行一般有下面3步：**

![Java程序运行过程](https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/Java%20%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E8%BF%87%E7%A8%8B.png)

我们需要格外注意的是 .class->机器码 这一步。在这一步 JVM 类加载器首先加载字节码文件，然后通过解释器逐行解释执行，这种方式的执行速度会相对比较慢。而且，有些方法和代码块是经常需要被调用的(也就是所谓的热点代码)，所以后面引进了 JIT 编译器，而JIT 属于运行时编译。当 JIT 编译器完成第一次编译后，其会将字节码对应的机器码保存下来，下次可以直接使用。而我们知道，机器码的运行效率肯定是高于 Java 解释器的。这也解释了我们为什么经常会说 Java 是编译与解释共存的语言。

> HotSpot采用了惰性评估(Lazy Evaluation)的做法，根据二八定律，消耗大部分系统资源的只有那一小部分的代码（热点代码），而这也就是JIT所需要编译的部分。JVM会根据代码每次被执行的情况收集信息并相应地做出一些优化，因此执行的次数越多，它的速度就越快。JDK 9引入了一种新的编译模式AOT(Ahead of Time Compilation)，它是直接将字节码编译成机器码，这样就避免了JIT预热等各方面的开销。JDK支持分层编译和AOT协作使用。但是 ，AOT 编译器的编译质量是肯定比不上 JIT 编译器的。

**总结：**

Java虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。字节码和不同系统的 JVM  实现是 Java 语言“一次编译，随处可以运行”的关键所在。 

### JDK 和 JRE

JDK是Java Development Kit，它是功能齐全的Java SDK。它拥有JRE所拥有的一切，还有编译器（javac）和工具（如javadoc和jdb）。它能够创建和编译程序。

JRE 是 Java运行时环境。它是运行已编译 Java 程序所需的所有内容的集合，包括 Java虚拟机（JVM），Java类库，java命令和其他的一些基础构件。但是，它不能用于创建新程序。

如果你只是为了运行一下 Java 程序的话，那么你只需要安装 JRE 就可以了。如果你需要进行一些 Java 编程方面的工作，那么你就需要安装JDK了。但是，这不是绝对的。有时，即使您不打算在计算机上进行任何Java开发，仍然需要安装JDK。例如，如果要使用JSP部署Web应用程序，那么从技术上讲，您只是在应用程序服务器中运行Java程序。那你为什么需要JDK呢？因为应用程序服务器会将 JSP 转换为 Java servlet，并且需要使用 JDK 来编译 servlet。     

## 第一个java程序  
源文件 HelloWorld.java
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}  
```   

利用工具来进行编译和执行 
编译 HelloWorld.java(源码件) ==>  生成 HelloWorld.class(字节码文件) => 执行 字节码文件
```   
javac HelloWorld.java
java  HelloWorld  
```


## 命名规则和规约   

### 规则  
名字中可以含有如下的信息   
* 字母(区分大小写，对大小写敏感，可用52个)  
* 数字(0-9可以用，不能用作开头)   
* 符号(_ $)  
* 中文(强烈不推荐)   


### 规约  
类名字首字母大写`TestOne`    

# 二、数据类型 
数据类型：分为基本数据类型和引用数据类型   

# 基本数据类型  
- 4整型 byte/8 short/16 int/32 long/64  
- 2浮点型 float/32 double/64    
- 1字符型 char/16 
- 1布尔型 boolean/1     

## 引用数据类型    
- 数组[]    
- 类class(抽象类abstract class)    
- 接口interface    
- 枚举enum    
- 注解@interface     

## 常量与变量   

### 常量    
常量是一个值,在程序运行的过程中不能再次发生改变   
基本类型的值都可以认为是常量 4 3.4 ‘a’ true   
String类是引用数据类型，String类的值“abc”可以视为常量   
常量存储在常量缓存区(常量池)中，有且只有一份    
量池中的值默认空间大小，32bit--int 64bit--double    

### 变量   
变量是一个内存空间(小容器)，在栈(stack)内存中开辟的一块内存空间   
空间在开辟(变量声明)必须指定***类型***和***名字***(规则规约)  
变量空间内容有且只有一个(只能存一份值和引用)     

### 声明变量时需要注意的问题   
java整数的默认的数据类型是`int`,你超过了int最大值,程序以为你出错误了，所以编译不过。
不超过可以不加L，但是***float***必须加***F***.

```java
public class Test{
	public static void main(String[] args){
		byte a = 1;
		short b = 2;
		int c = 3;//-2147483648    2147483647
		long d = 2147483648L;//内存中数字是int的，你超过了int最大值，程序以为你出错误了，所以编译不过。不超过可以不加L，但是float必须加F
		//float e = 3.4;//报错
		float e = 3.4F;
		double f = 4.5;
		char g = 'a';
		boolean h = true;
		String i = "abc";//String是一个引用数据类型，它的值很特殊  可以简单的视为常量
	}
}
```  

### 问题  
#### 那为什么byte和short类型后面不用加东西？  
java整型默认为int，且java会自动向下转型，byte和short都可以由int自动向下转型，但是long类型的不能自动向上转型，所以要加L，转为long类型


