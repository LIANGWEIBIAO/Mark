# 数组

java数组是静态的，必须经过初始化后才能使用，并且一旦初始化指定了数组的长度，该长度是不可变的。  
数组内部存储的元素可以***基本类型*** ，也可以是***引用类型***

## 两种初始化的方式：  
数组的长度一旦确定，不能再次改变。

## 定义/声明   
```
类型 [] 名字;
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