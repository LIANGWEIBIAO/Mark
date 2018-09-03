# flex布局

``` css
flex container  //父容器
flex item

.container{
    display:flex;  //设置弹性盒子
    flex-direction:row;
    flex-direction:column; //排列方式，设置主轴
    justify-content:center; //居中     主轴居中
    justify-content:flex-start; //相对于left top 相对于主轴
    justify-content:flex-end; //相对于right 
    align-items: center;    //居中      交叉轴居中
    justify-content:space-between; //平均分布
    justify-content:space-around;  //等距分布
}
```