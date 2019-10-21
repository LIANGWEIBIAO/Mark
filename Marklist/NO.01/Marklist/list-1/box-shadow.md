# box-shadow

### 语法
```css
box-shadow:h-shadow v-shadow blur spread color inset;
```

### 参数    
h-shadow(必需):水平阴影的位置，允许负值。      
v-shadow(必需):垂直阴影的位置，允许负值。     
blur(可选):模糊距离。      
spread(可选):阴影的尺寸(一般不推荐设置)。     
color(可选):阴影的颜色。     
inset(可选):讲外部阴影(outset)改为内部阴影。  

### 功能   
添加一个或多个阴影   
```css  
.effect{
    box-shadow:0px 1px 4px rgba(0,0,0,0.3),20px 40px 10px rgba(0,0,0,0.3) inset;
}
```     

### 注意
`h-shadow`和`v-shadow`设置为0，那么四个边都会有阴影。   

![此处输入图片的描述][1]
![Alt text](图片链接 "https://coding.net/u/lamber0808/p/Images/git/raw/master/20191016102212.png")

