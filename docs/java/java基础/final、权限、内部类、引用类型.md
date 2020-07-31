# 【final、权限、内部类、引用类型】

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