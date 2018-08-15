# vue入门小实例(一)
### Vue是数据驱动
数据驱动这个是我觉得和jQuery不一样的地方。
jQuery是点一下，加个class,移个class。
Vue是点一下，数据记录，然后自动通知视图。
一个是把选中状态保存在了DOM，一个是把选中状态保存在了js数据模型里。
所以在看到了使用Vue然后获取DOM改class的行为，我及时制止了他。话说你都自己搞了，要Vue干嘛。。。

#### 数据驱动和之前的思想 在一起会怎么样？

数据驱动是一个数据到视图的过程，如果你只改视图不改数据。那么他在其他的地方刷新了数据，
就有可能导致视图不同步。比如写的时候写了，那么读的时候读出来的有可能不一样，为什么会这样？
因为有两个地方可以改呀，
Vue把DOM删了，新渲染的没有你写的状态，读的时候读个鬼。想想，这一个碰运气的东西，能好使吗？

``` javascript
<div id="tab">
    <div class="tab-tit">
        <!--点击设置curId的值  如果curId等于0，第一个a添加cur类名，如果curId等于1，第二个a添加cur类名，以此类推。添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
        <a href="javascript:;" @click="curId=0" :class="{'cur':curId===0}">html</a>
        <a href="javascript:;" @click="curId=1" :class="{'cur':curId===1}">css</a>
        <a href="javascript:;" @click="curId=2" :class="{'cur':curId===2}">javascript</a>
        <a href="javascript:;" @click="curId=3" :class="{'cur':curId===3}">vue</a>
    </div>
    <div class="tab-con">
        <!--根据curId的值显示div,如果curId等于0，第一个div显示，其它三个div不显示。如果curId等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div v-show="curId===0">
            html<br/>
        </div>
        <div v-show="curId===1">
            css
        </div>
        <div v-show="curId===2">
            javascript
        </div>
        <div v-show="curId===3">
            vue
        </div>
    </div>
</div>
</body>
<script src="vue.min.js"></script>
<script>
    new Vue({
        el: '#tab',
        data: {
            curId: 0
        },
        computed: {},
        methods: {},
        mounted: function () {
        }
    })
</script>
```

循环写法
``` javscript
<!--这里是html结构-->
<div id="app">
        <ul>
            <li 
            v-for="(item,index) in tabs" 
            :class="{active:index == num}"
             @click="tab(index)">{{item}}</li>
        </ul>
        <div class="tabCon">
            <div 
            v-for='(itemCon,index) in tabContents' 
            v-show=" index == num">{{itemCon}}</div>
        </div>
    </div>
<!--这里是js代码-->
<script type="text/javascript">
var vm = new Vue({
    el: '#app',
    data: {
        tabs: ["标题一", "标题二","标题三"],
        tabContents: ["内容一", "内容二","内容三"],
        num: 1
    },
    methods: {
        tab(index) {
            this.num = index;
        }
    }
});
</script>
```

- [demo](https://liangweibiao.github.io/v-mark/Marklist/NO.08/list-1/list-2/index.html)