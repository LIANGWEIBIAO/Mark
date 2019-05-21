# Java 数组

java数组是静态的，必须经过初始化后才能使用，并且一旦初始化指定了数组的长度，该长度是不可变的。  

## 两种初始化的方式：  


### 静态初始化：  
初始化时由程序猿显示指定每个数组元素的初始值，由系统决定`数组的长度` 
```java
String[] names = new String[]{"孙猴子","唐僧","猪八戒"};
String[] names = {"孙猴子","唐僧","猪八戒"};  //也可以省略new关键字
```   

### 动态初始化   
动态初始化就是在初始化的时候指定数组长度（这时已经分配内存）   
```java
String[] names = new String[3];
names[0]="孙猴子";
names[1]="唐僧";
names[2]="猪八戒";
```    

## 数组引用传递  

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