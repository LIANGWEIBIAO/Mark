import {get} from './http/http.js';
import utils from './utils.js';

//用axios 
function wxshare(data) { 
  //检测是否微信浏览器 
  if(!utils.isWeixinBrowser()) return false;
  //获取签名验证信息
  get("/api/index/wxShare", {
    url: utils.base64encode(location.href.split('#')[0])
  }).then(res => {
    var share_data = res.data.js_data
    var data = res.data.share_data

    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
    // 则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中
    wx.config({
      debug: false, ////生产环境需要关闭debug模式
      appId: share_data["appid"], //appId通过微信服务号后台查看
      timestamp: share_data["timestamp"], //生成签名的时间戳
      nonceStr: share_data["noncestr"], //生成签名的随机字符串
      signature: share_data["signature"], //签名
      jsApiList: [ //需要调用的JS接口列表
        'onMenuShareTimeline', //分享给好友
        'onMenuShareAppMessage' //分享到朋友圈
      ]
    });

    setTimeout(() => {
      wx.ready(function () {
        var shareData = {
          title: document.title, //分享标题
          desc: data["wx_share_desc"], // 分享描述
          imgUrl: data["wx_share_img"], // 分享图标
          link: window.location.href //分享链接
        };
        //分享朋友圈
        wx.onMenuShareTimeline(shareData);
        //分享个人
        wx.onMenuShareAppMessage(shareData);
      });
    }, 1000)
  });
}

export default wxshare
