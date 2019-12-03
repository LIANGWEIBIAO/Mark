<!-- GFM-TOC -->
* [一、Java开发入门](#一java开发入门)
  * [Java语言特点](#Java语言特点) 
  * [Java安装JDK与环境配置](#java环境准备)
  * [JVM JDK 和 JRE 最详细通俗的解答](#jvm-jdk-和-jre-最详细通俗的解答)
  * [第一个java程序](#第一个java程序) 
  * [命名规则和规约](#命名规则和规约)   
* [二、数据类型](#二数据类型)
  * [基本数据类型](#基本数据类型)
  * [引用数据类型](#引用数据类型)
  * [常量](#常量)
  * [变量](#变量)
  * [声明变量计算机底层做了什么事情](#声明变量计算机底层做了什么事情)    
* [三、运算](#三运算)
    * [float 与 double](#float-与-double)
    * [隐式类型转换](#隐式类型转换)
    * [switch](#switch)  
 * [四、数组](#四数组) 
    * [定义/声明](#定义声明)
    * [静态初始化](#静态初始化)
    * [动态初始化](#动态初始化)
    * [数组引用传递](#数组引用传递)
    * [数组练习题](#数据练习题)
 * [类和对象](#类和对象) 
    * [面向对象之初识](#面向对象之初识)
    * [属性和方法](#属性和方法)
    * [方法重载](#方法重载 )
    * [构造函数](#构造函数)
    * [this关键字](#this关键字)
 
 
<!-- GFM-TOC -->
  
# 一、Java开发入门

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

所有的名字最好--->见名知意(增强可读性   层次关系缩进  见名知意  注释)

### 规则  
名字中可以含有如下的信息   
* 字母(区分大小写，对大小写敏感，可用52个)  
* 数字(0-9可以用，不能用作开头)   
* 符号(_ $)  
* 中文(强烈不推荐)   

### 规约  

类名字首字母大写`TestOne`    

---

# 二、数据类型 

数据类型可分为***基本数据类型***和***引用数据类型***   

### 基本数据类型  

基本数据类型可分八种，六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。

- 4整型 byte/8 short/16 int/32 long/64  
- 2浮点型 float/32 double/64    
- 1字符型 char/16 
- 1布尔型 boolean/1     

### 引用数据类型    

在Java中，引用类型的变量非常类似于C/C++的指针。引用类型指向一个对象，指向对象的变量是引用变量。这些变量在声明时被指定为一个特定的类型，比如 Employee、Puppy 等。变量一旦声明后，类型就不能被改变了。

- 数组[]    
- 类class(抽象类abstract class)    
- 接口interface    
- 枚举enum    
- 注解@interface     
  
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

### 声明变量计算机底层做了什么事情  
(1). 硬盘上创建了一个文件 Test.java    
(2). 文件中的内容是我们编写的源代码(跟计算机发送指令)   
```java  
public class Test{
	public static void main(String[] args){
		byte x;
		x = 1;
	}
}  
```   
(3).将Test.java源文件---->编译---->Test.class   
内容是我们看不懂 的 字节码 ，留给计算机识别    
(4).执行---->内存中执行   
将硬盘上的Test.class内容 加载 到内存里，这个内存是由JVM为我们开辟的一块内存。   
(5).我们写好的指令，执行内存的空间 赋值(常量是从常量池中复印一份出来的) ，变化…   

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/20191018151159324.png)   

---

# 三、运算   

### float 与 double

Java 不能隐式执行向下转型，因为这会使得精度降低。

1.1 字面量属于 double 类型，不能直接将 1.1 直接赋值给 float 变量，因为这是向下转型。

```java
// float f = 1.1;
```

1.1f 字面量才是 float 类型。

```java
float f = 1.1f;
```

### 隐式类型转换

因为字面量 1 是 int 类型，它比 short 类型精度要高，因此不能隐式地将 int 类型下转型为 short 类型。

```java
short s1 = 1;
// s1 = s1 + 1;
```

但是使用 += 或者 ++ 运算符可以执行隐式类型转换。

```java
s1 += 1;
// s1++;
```

上面的语句相当于将 s1 + 1 的计算结果进行了向下转型：

```java
s1 = (short) (s1 + 1);
```   
### switch

从 Java 7 开始，可以在 switch 条件判断语句中使用 String 对象。

```java
String s = "a";
switch (s) {
    case "a":
        System.out.println("aaa");
        break;
    case "b":
        System.out.println("bbb");
        break;
}
```

---

# 四、数组

java数组是静态的，必须经过初始化后才能使用，并且一旦初始化指定了数组的长度，该***长度是不可变的***。  
数组内部存储的元素可以***基本类型*** ，也可以是***引用类型***


### 定义/声明   
```
数据类型 [] 数组名；
```
### 静态初始化：  
动态初始化有长度，有元素 
```java
String[] names = new String[]{"孙猴子","唐僧","猪八戒"};
//也可以省略new关键字
String[] names = {"孙猴子","唐僧","猪八戒"};  
int[] age = {18,19,20}; 
```   

### 动态初始化   
动态初始化有长度，没有元素 
```java
String[] names = new String[3];
names[0]="孙猴子";
names[1]="唐僧";
names[2]="猪八戒";
```    

### 数组引用传递  

数组属于引用数据类型，那么也一定可以发生引用传递。      
引用传递的本质：同一块堆内存空间可以被不同的栈内存所指向。   

```java
public class ArrayDemo {
	public static void main(String args[]) {
		int data[] = null;
		int temp[] = null; //声明对象
		data = new int[2]; //开辟一个长度为3的数组
		data[0] = 10;
		data[1] = 20;
		temp = data;  //int temp[] = data;
		temp[0] = 99;
		System.out.println(data[0]);  // 99
	}
}！
``` 

### 数组练习题
- 创建一个数组，保存0-100的偶数
- 给定两个数组`a:{1,2,3,4} b:{5,6,7,8}` 将两个数组内的元素对应位置互换 
- 给定一个数组`a{1,2,3,4,5,6}`将这个数组中的元素头尾对应互换位置  
- 给定一个数组`a{1,2,3,4,5,6}` 计算数组所有元素的平均值  
- 给定一个数组`a{1,2,3,4,5,6}` 寻找数组中的最大值和最小值。
- 给定一个数组`a{1,2,3,9,4,5}` 按照数组中的最大值的位置，将数组拆分成两个{1,2,3} {4,5}  
- 给定一个数组`a{1,2,3,0,0,4,5,0,6,0,7}` 去掉数组中的0元素  
- 创建一个数组 存储2-100直接的素数(质数)  
- 数组元素的排序(冒泡 选择 插入 快速 希尔 堆排序 归并排序  递归....)



# 类和对象   

### 面向对象之初识  
- 类：具有相同特征行为的抽象描述的一类事物。 
  - 静态特征（描述）——属性
  - 动态行为（做事）——方法    
- 对象：具体的事物

### 属性和方法 

属性的结构：   
```java
权限修饰符 [特征修饰符] 数据类型 属性名字 [= 值];
```  

方法的结构  
```java
权限修饰符 [特征修饰符] 返回值类型 方法名字 (参数列表) [抛出异常]  [{
	方法体
}]
```   


### 方法重载  

Java 允许同一个类中定义多个同名方法，只要它们的形参列表不同即可。
如果同一个类中包含了两个或两个以上方法名相同的方法，但形参列表不同，这种情况被称为方法重载（overload）。

例如，在 JDK 的 java.io.PrintStream 中定义了十多个同名的 println() 方法。

```java
public void println(int i){…}
public void println(double d){…}
public void println(String s){…}  

System.out.println(102);    // 调用println(int i)方法
System.out.println(102.25);    // 调用println(double d)方法
System.out.println("价格为 102.25");    // 调用println(String s)方法
``` 

利用方法重载实现获取最大值
```java
public class OverloadDemo {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        getMax(a, b);

        float c = 5f;
        float d = 10f;
        getMax(c, d);
    }

    private static void getMax(int firstNum, int lastNum) {
        if (firstNum > lastNum) {
            System.out.println("较大的数是" + firstNum);
        } else if (firstNum < lastNum) {
            System.out.println("较大的数是" + lastNum);
        } else {
            System.out.println("两个数相等");
        }
    }

    //只有方法的返回类型不同不能算是重载
//    private static int getMax(int firstNum, int lastNum) {return 1;}

    private static void getMax(float firstNum, float lastNum) {
        if (firstNum > lastNum) {
            System.out.println("较大的数是" + firstNum);
        } else if (firstNum < lastNum) {
            System.out.println("较大的数是" + lastNum);
        } else {
            System.out.println("两个数相等");
        }
    }

    //只有方法的修饰符不同不能算是重载
//    public static void getMax(float firstNum, float lastNum) {}
}
```  

---

### 构造函数   

构造函数的作用是创建当前类的对象

#### 构造写法 

```java
权限修饰符  与类名一致的方法名 (参数列表) [抛出异常] {
	代码块
}
```   
```java 
public class ConstructorDemo {
    public static void main(String[] args) {
        Person p = new Person("小明", 25);
        System.out.println(p.speak());
    }
}
```

#### 构造方法的特点 

- 构造函数名和类名相同  
- 没有返回值类型，连void都没有(没有具体返回值)
- 在创建新对象时，系统自动的调用该类的构造函数 
- 一个类可以有多个构造函数   

---

### this关键字   
this:是当前类的对象引用。简单的记，它就代表当前类的一个对象。    
this的场景：解决局部变量隐藏成员变量     
谁调用这个方法，在该方法内部的this就代表谁。   

```java
class Student {
    private String name;
    private int age;

    public String getName() {
        return name; //这里其实是隐含了this
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

class StudentTest2 {
    public static void main(String[] args) {
        //创建一个对象
        Student s1 = new Student();
        s1.setName("林青霞");
        s1.setAge(27);
        System.out.println(s1.getName()+"---"+s1.getAge());

        //创建第二个对象
        Student s2 = new Student();
        s2.setName("刘意");
        s2.setAge(30);
        System.out.println(s2.getName()+"---"+s2.getAge());
    }
}
```



