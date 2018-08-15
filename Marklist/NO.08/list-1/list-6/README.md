# VUE使用笔记

----------------------------------------

- 把axios对象挂载Vue原型身上。

``` javascript
Vue.prototype.$http = axios;

this.$http.get();
```

### 关于类名的操作
- 偶数行的时候显示line-last这个类名。

``` javascript
:class= "{'line-last': index % 2 == 0 }"
```

- 把列表做成变量。
``` javascript
:class = " 'index-board-' + item.id "
```

- 也可以用数组合写。
``` javascript
:class= "{[ 'line-last': index % 2 == 0 , 'index-board-' + item.id ]}"
```

- 添加焦点类名
``` javascript
checkActive(index){
    return this.nowIndexes.indexOf(index) !== -1;
}
```

### vue-router

- router-active-class

``` javascript
<router-link active-class="active"> <router-link>
``` 

### 父向子组件传递数据props
``` javascript
props:{
     selections:{
        type:Array,
        default:[{
          lable:"test",
          value:0
        }]
     }
}
``` 


- 多选操作

``` javascript
<li @toggleSelection(index) :class="{active:cheackActive(index)}"></li>

this.newIndexes = [];

toggleSelection(index) {

  if(this.newIndexes.indexOf(index) == -1){
      this.newIndexes.push(index)
  }else{
      //删除数组某一项
  }
```
  
- 输入框只能输入数字

``` javascript
fixNumber () {
    left fix;
    if(type this.numb er === "string" ){
       fix  = Number(this.number.replace(/\d/g),"");
    }else{
       fix = this.number;
    }
}
```

### 自定义事件
``` javascript
子组件
this.$emit("on-change",this.nowIndexes)

//父组件接受
@on-change="onParamChange"

//如果页面多个组件，要区分赋值；

//$event 是传出来的数据。

@on-change="onParamChange('buyType',$event)"

@on-change="onParamChange('buyNum',$event)"

data(){
   return{
       buyNum:0,
       buyType:{}
   }
}

methods:{
   //val = $event
   onParamChange(attr,val){
      this[attr] = val;
   }
}

```

### dom元素操作
- 获取组件的元素方法
``` javascript
<div class="slider-group" ref="sliderGroup">
this.$refs.sliderGroup.children;

```
- 调用子组件的方法
``` javascript
<scroll ref="scroll"> <scroll>

loadImage(){
       this.$refs.scroll.refresh();
}
```

- 有数据的时候才初始化组件，否则没有数据，组件初始化不正确。

``` javascript
<div v-if="recoomend.length"><div>
```
### 动画
注意：只有vue2.8才支持`slide-leave-to`写法。
``` javascript
<transition name="slide">
      <div class="singer-datail"></div>
</transition>

.slider-enter-active,.slide-leave-active{
    transition:all 0.3s;
}

.slide-enter,.slide-leave-to{
    //进来的时候从100%进来。
    //出去的时候到100%位置。
    transform:translate3d(100%,0,0);
}
```


