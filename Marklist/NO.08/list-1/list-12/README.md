# vue缓存之keep-alive，设置想要缓存的页面

方法1

a页面通过学期按钮切换学期，该学期里more进入b页面，返回a页面，返回回到对应a页面进入的高亮按钮
设置想要缓存的页面

``` javascript
<!-- 缓存所有的页面 -->
<keep-alive>
 <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>

```
需要缓存的页面在路有的meta里面设置keepAlive为true即可，不需要缓存的不设置也可以
```  javascript
meta: { keepAlive: true // true 表示需要使用缓存 }
```
方法2

所有的路由度用<keep-alive>包裹上
里面有参数传递的页面，通过watch去监听参数的变化（个人觉得比较麻烦，推荐方法1）

