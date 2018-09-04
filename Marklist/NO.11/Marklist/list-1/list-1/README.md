## 小程序组件

### 自定义组件
在components下新建一个like组件，组件结构包含
```
index.js
index.json
index.wxml
index.wxss
```
### 组件数据绑定
小程序每次更新和绑定数据都需要`this.setData({})`方法，不能直接使用
`this.data.count`更改数据
index.wxml
``` html
<view bind:tap="onLike" class="container">
     <image src="{like?yesScr:noScr}">
     <text>like?count1:count2</text>
</view>
```
index.js
``` javascript
Component({
  properties:{ //组件属性
    like:{
      type:Boolean
    },
    count:{
      type:Number
    }
  }，
  data:{
     like:true
     count:99,
     yesScr:"mages/like.png"
     noScr:"images/like@dis.png"
  },
  methods:{
      onlike:function(){
         let like = this.properties.like;
         let count = this.properties.count;
        
         count = like?count-1:count+1;
         this.setData({
              count:count,
              like:!like
         }) 
      }
  }
})


```

### 组件引用
在classic父组件中`classic.json`写入自定义组件，注意路径。
```
{
   "usingComponents":{
      "v-like":"components/like/index"
   }
}
```

在`classic.wxml`文件既可以使用自定义组件。
``` html
<v-like> <v-like/>
```