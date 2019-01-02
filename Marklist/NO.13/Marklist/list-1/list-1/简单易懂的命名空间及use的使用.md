
第一个文件 A.php，里边有两个类，命名空间是 a\b\c;

```php
<?php
namespace a\b\c;
class Apply{
　　function get_info(){
　　　　echo 'this is A Apply';
　　}
}
class C{
　　function info(){
　　　　echo 'this is info';
　　}
}
```   
第二个文件 B.php  命名空间 a\b\d;   
```php
<?php
namespace a\b\d;

class Apply{
　　function get_info(){
　　　　echo 'this is B Apply';
　　}
}
```   
第三个文件 `index.php` ，用来使用上边两个文件的类。   
比方说我们现在想实例化A.php里的类，该怎么实现呢？   
首先要包含这个文件 `require_once('A.php')`;   
然后 `use a\b\c`? 还是`a\b\c\A`?   起初我也是这么认为的。其实这是错的，use应该是这样的，命名空间\这个空间下你要实例化类的类名。比方说我们要实例化 A.php里的Apply类，那么 `use a\b\c\Apply`;  这就相当于引入这个类，接下来再  `new Apply()`;调用里边的方法，跟平常是一样的。如果要实例化类C,就 `use a\b\c\C`;   

**注意**：use不等于require_once或者include,use的前提是已经把文件包含进当前文件。

顺便提一句，在MVC模式中，类名和文件名是相同的，所以use的时候会让不了解的人以为use后面跟的是文件名，我之前就这么以为的。其实use的还是类名。    

有的人可能问了，那我不同的命名空间下，有相同的类名，在同一个文件中使用怎么办？比方说我们上边的`index.php`,把`A.php`和`B.php`都包含进来，然后`new Apply()`;这个时候是会报错的，解决方案就是起别名，比方说 `use a\b\d\Apply as b`;  此时我们new 的时候不应该写成 `new Apply()`;而是`new b()`;这样就不会发生冲突了。