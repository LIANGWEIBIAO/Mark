# JAVA 数组在内存中的存储  

内存是计算机中的重要原件，临时存储区域，作用是运行程序。我们编写的程序是存放在硬盘中的，在硬盘中的程
序是不会运行的，必须放进内存中才能运行，运行完毕后会清空内存。   

Java虚拟机要运行程序，必须要对内存进行空间的分配和管理。   

```java
 public class Demo04 {
    public static void main(String[] args) {
        int[] arr = new int[3];
        System.out.println(arr); // [I@50cbc42f
        arr[1] = 2;
        System.out.println(arr[1]);
    }
}
```    
以上方法执行，输出的结果是`[I@5f150435`，这个是什么呢？是数组在内存中的地址。`new`出来的内容，都是在堆内存中存储的，而方法中的变量`arr`保存的是数组的地址。 输出`arr[0]`，就会输出`arr`保存的内存地址中数组中0索引上的元素.   

![](https://coding.net/u/lamber0808/p/Images/git/raw/master/2014820181011223743416.png)