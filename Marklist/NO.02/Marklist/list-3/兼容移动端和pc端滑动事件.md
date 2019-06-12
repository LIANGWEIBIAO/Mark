```javascript
 function addEvent(el, type, fn, capture) {
     el.addEventListener(type, fn, {
         passive: false,
         capture: !!capture
     })
 }

 //_handleDOMEvents主要是调用了addEventListener添加事件监听回调。
 BScroll.prototype._handleDOMEvents = function (eventOperation) {
     const ua = navigator.userAgent.toLowerCase()
     const isWeChatDevTools = /wechatdevtools/.test(ua)
     const hasTouch = 'ontouchstart' in window || isWeChatDevTools

     //当在移动端环境（支持 touch 事件），disableMouse 会计算为 true，这样就不会监听鼠标相关的事件，而在 PC 环境，disableMouse 会计算为 false，就会监听鼠标相关事件，
     if (!hasTouch) {
         eventOperation(this.wrapper, 'mousedown', this)
         eventOperation(target, 'mousemove', this)
         eventOperation(target, 'mousecancel', this)
         eventOperation(target, 'mouseup', this)
     }

     if (hasTouch) {
         eventOperation(this.wrapper, 'touchstart', this)
         eventOperation(target, 'touchmove', this)
         eventOperation(target, 'touchcancel', this)
         eventOperation(target, 'touchend', this)
     }


 }

 BScroll.prototype.handleEvent = function (e) {
     switch (e.type) {
         case 'touchstart':
         case 'mousedown':
             this._start(e)
             break
         case 'touchmove':
         case 'mousemove':
             this._move(e)
             break
         case 'touchend':
         case 'mouseup':
         case 'touchcancel':
         case 'mousecancel':
             this._end(e)
             break
         case 'orientationchange':
         case 'resize':
             this._resize()
             break
         case 'transitionend':
         case 'webkitTransitionEnd':
         case 'oTransitionEnd':
         case 'MSTransitionEnd':
             this._transitionEnd(e)
             break
     }
 }
 BScroll.prototype._start = function (e) {}
 BScroll.prototype._move = function (e) {}
 BScroll.prototype._end = function (e) {}

 //添加pc和移动事件
 this._handleDOMEvents(addEvent);
 ```