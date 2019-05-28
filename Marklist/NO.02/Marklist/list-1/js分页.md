# 

```javascript
<view class="load_more">
    <view hidden="{{!hasMore}}" class="load_loading"></view>
    <view class="load-tips">{{hasMore ? '正在加载……' : '没有更多数据……'}}</view>
</view>
```  

```javascript
import { Http } from '../../utils/http.js'


Page({
  data: {
    loading: false, //请求中(停止触发加载，防止多次触发接口) 默认false 允许加载
    hasMore: true, //是否加载更多数据  默认ture 有更多数据加载
    page: 1,
    list: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadMore()
  },

  _checkMore(data) { //检测是否还有更多数据
    if (+data.currentPage >= data.totalPage) {
      this.setData({
        hasMore: false
      })
    }
  },
  
  loadMore() { 
    //请求中或没有数据的时候返回
    if (!this.data.hasMore || this.data.loading) {
      return;
    }

    this.setData({ //设置请求中状态...
      loading: true
    })


    Http('/api/distribution/incomeLog', {
      page:this.data.page
    }).then(res => {
    
      this.setData({
        loading: false, //请求完成
        list: this.data.list.concat(res.data.list), //合并数据
        page: ++page
      })
      
      //检测是否还有更多数据
      this._checkMore(res.data);
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.loadMore();
  },
})
```