### 控制台打印输出Hello World
/**
 * 功能：控制台打印输出Hello World。
 * 确认java配置，开始java之旅
 * 说明：
 *  Hello World.java -- java源文件
 *      |
 *      |   javac HelloWorld.java
 *      |
 *  Hello World.class -- idea里在target的对应包下，编译后的字节码文件
 *      |
 *      |   java HelloWorld
 *      |
 *  JVM -- java虚拟机，字节码文件在java虚拟机中执行
 *      |
 *      |
 *  > Hello World!
 */
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}  

### HelloWorld运行过程  
1.编写`HelloWorld.java`文件时，会生成一个java文件，里面有源代码。
2.通过java编译器即`javac.exe`，把java文件编译成java字节码文件(.class文件)，命令是`javac HelloWorld.java`。会在同级目录下生成一个`HelloWorld.class`文件 
3.然后通过解释执行器即`java.exe`，将字节码文件加载到java虚拟机中，运行这个程序。命令是`java HelloWorld`。输出Hello World。
java虚拟机可以运行在Mac,Windows,Linux等系统中。