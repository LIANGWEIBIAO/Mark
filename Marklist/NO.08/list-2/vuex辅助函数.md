# mapState，mapMutations和mapGetters辅助函数     
这里，我首先想说明的是：
一切都是语法糖，如果在实际应用中，你有什么地方不太了解，那只是对某个语法糖不太了解而已！因此，要多看，多学，最重要的，是多实践！自己多敲几遍代码，也就熟悉了。

## mapState获取store中的值
我们获取`vuex`的`state对象`中属性的方法，即在插值表达式中用`this.$store.state.count`来获取   
而在实际应用中，还存在着其他一些写法，最常见的有以下三种，但无论怎么写，都需要依赖vue的computed计算属性来实现。    

### 方法一   
在computed中定义一个方法，并return出state对象中的属性及其状态：   
```javascript
computed:{
    count(){
        return this.$store.state.count;
    }
}
```    


### 方法二    
利用vuex的mapState方法来获取vuex的state对象中属性，它有两种写法：  

#### 写法1（mapState中用对象的形式获取）：    
如果你想将一个 state 属性另取一个名字，使用对象形式：：   
 
```javascript
import { mapState } from 'vuex' 

computed:{
    mapState({
        count:state => state.count   //使用ES6的箭头函数来给count赋值
    })
}
```

#### 写法2（mapState中用数组的形式获取）：    

```javascript
import { mapState } from 'vuex'

export default {
    computed:
        ...mapState(['count'])
    }
}

```     

## mapMutations 和 mapGetters
我们知道，在`vuex`中`mutations`是专门用来修改state中属性状态的`方法`集合（对象），同时，我们也了解到，在组件中可以使用`$store.commit('方法名'，传参)`来提交修改请求。这种方法比较简单。下面我们再看一种写法：    
（这里，不禁又让我想起那句话：一切，都是语法糖...）    
`mapMutations`的写法和`mapState`的写法基本一致，这里我们主要使用数组的形式来说明：    
 
在组件中调用的时候这样写：  
```html
<button @click='add'>加</button>
<button @click='reduce'>减</button>
```  

```javascript     
import { mapState,mapMutations,mapGetters } from 'vuex'

export default {
    methods:{
    ...mapMutations(['add','reduce']),
    },
    computed:{
        ...mapState(['count'])
        ...mapGetters([
              'doneTodosCount',
              'anotherGetter',
        ])
    }
}

```

