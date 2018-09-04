# 组件传递数据的方法

小程序组件传递数据是通过`properties`设置`组件属性`
``` javascript
//like组件
Component({
  properties:{ //组件属性
    like:{
      type:Boolean
    },
    count:{
      type:Number
    }
  }
})
```
外部通过组件属性传递数据。
``` html
<v-like like={{classic.like_status}} count={{classic.like_count}}> </v-like>
```

``` javascript
data:{
  classic:null
},
onload : function(){
    //请求回来的数据
    request(ulr,{},(res)=>{
        //通过setDate更新数据
        this.setDate({
            classic : res
        })
    })
}
```