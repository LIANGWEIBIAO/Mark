/*
函数节流
 */
import $ from 'jquery'

//原理很简单，利用定时器，让函数执行延迟500毫秒，在500毫秒内如果有函数又被调用则删除上一次调用，这次调用500毫秒后执行，如此往复。这样我刚才的代码可以改为
let throttle=function(fun,maxTime){
  let timer;
  return function(){
    if(timer){
      clearTimeout(timer);
    }
    timer=setTimeout(fun,maxTime);
  }
}

let mapStringToHanzi=function(string){
  const mapObj={
    'all':'全部',
    'good':'精华',
    'share':'分享',
    'job':'工作',
    'ask':'问答'
  }
  return mapObj[string];
}

let showOrHideScroll=function(top){
  let defaulTop=top||500;
  let scrollTop=$(window).scrollTop();
  if(scrollTop>defaulTop)
      this.$backToTop().show();
  else
      this.$backToTop().hide();
}
export default{
  throttle:throttle,
  mapStringToHanzi:mapStringToHanzi,
  showOrHideScroll:showOrHideScroll,
}
