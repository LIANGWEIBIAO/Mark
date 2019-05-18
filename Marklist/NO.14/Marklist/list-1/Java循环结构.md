# Java 循环结构   
顺序结构的程序语句只能被执行一次。如果您想要同样的操作执行多次,，就需要使用循环结构。

## while 循环   
while是最基本的循环，它的结构为：   
```java
while( 布尔表达式 ) {
  //循环内容
}
```   
只要布尔表达式为 true，循环就会一直执行下去。

实例

```java
public class Test {
   public static void main(String args[]) {
      int x = 10;
      while( x < 20 ) {
         System.out.println("value of x : " + x );
         x++;
      }
   }
} 
```   

## for循环   
虽然所有循环结构都可以用 while 或者 do...while表示，但 Java 提供了另一种语句 —— for 循环，使一些循环结构变得更加简单。

for循环执行的次数是在执行前就确定的。语法格式如下：  

```java
for(初始化; 布尔表达式; 更新) {
    //代码语句
}
```   
实例
```java
public class Test {
   public static void main(String args[]) {
 
      for(int i = 0; x <= 20; i++) {
         System.out.print("value of x : " + i );
         System.out.print("\n");
      }
   }
}
```   
## continue 关键字
`continue` 适用于任何循环控制结构中，终止本次循环,执行下一次。  
```java
public class Test {
   public static void main(String args[]) {
      int [] numbers = {10, 20, 30, 40, 50};
 
      for(int x : numbers ) {
         if( x == 30 ) {
        continue;
         }
         System.out.println( x );
      }
   }
}

以上实例编译运行结果如下：
10
20
40
50

```   

## break 关键字  
`break` 主要用在循环语句或者 `switch` 语句中，用来跳出`整个语句块`。
添加标号，跳出指定循环；
```java
class Demo {
    public static volid main(String[] args){
        a:for(int i = 1; i<=10; i++){
            System.out.println("i =" + i);
            b:for(int j=1; j<=10;j++){
                System.out.println("j =" +  j);
                break b;
            }
        }
    }

}
```



## 练习案例  

### 水仙花
```java
package com.xt.homework.hw09;
/**
 * 
 * 输出所有水仙花数（如果一个3位正整数的各个位数立方和等于这个数本身，称为水仙花数）。
 * 
 **/
public class HomeWork06 {
    public static void main(String[] args){
        int num,sd,td,hd;
        for(num=100;num<1000;num++)
        {
            hd=num/100;
            td=(num-100*hd)/10;
            sd=num%10;
            if(num==hd*hd*hd+td*td*td+sd*sd*sd)
            {
                System.out.print("水仙花数字:"+num+"\n");
            }
        }
    }
}
```
### 4行5列星星
```java
1.请输出一个4行5列的星星(*)图案。

*****
*****
*****
*****
```

```java
for(int i = 1;i<=4;i++){
    for(int j = 1;j <= 5;j++){
        System.out.print("x");
    }
    System.out.println();
}
```


```java
//改变形状
*
**
***
****
*****
```
```java
for(int i = 1;i<=4;i++){  //控制行
    for(int j = 1;j <= i;j++){ //控制列
        System.out.print("x");
    }
    System.out.println();
}
```   

九九乘法表

```java
for(int i = 1;i<=9;i++){                 //行数
    for(int j = 1;j <= i;j++){           //列数
        System.out.print(j + "*" + i + "=" + (i*j) + '\t');
    }
    System.out.println();
}
```