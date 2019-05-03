'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PureFullPage = function () {
    function PureFullPage(options) {
        _classCallCheck(this, PureFullPage);

        // 默认配置
        var defaultOptions = {
            isShowNav: true,
            delay: 1000,
            definePages: function definePages() {}
        };

        // 合并自定义配置
        this.options = Object.assign(defaultOptions, options);

        // 将用户自定义函数绑定到实例 this
        this.options.definePages = this.options.definePages.bind(this);

        // 获取当前视图高度
        this.viewHeight = document.documentElement.clientHeight;
        // 获取翻页容器
        this.container = document.querySelector('#pureFullPage');
        // 获取总页数，创建右侧点导航时用
        this.pages = document.querySelectorAll('.page');
        this.pagesNum = this.pages.length;
        // 当前位置，负值表示相对视图窗口顶部向下的偏移量
        this.currentPosition = 0;
        // 检测滑动方向，只需要检测纵坐标
        this.startY = undefined;
    }

    // 页面跳转


    _createClass(PureFullPage, [{
        key: 'turnPage',
        value: function turnPage(height) {
            this.container.style.top = height + 'px';
        }
        // 随页面滚动改变样式

    }, {
        key: 'changeNavStyle',
        value: function changeNavStyle(height) {}
        // 鼠标滚动逻辑（全屏滚动关键逻辑）

    }, {
        key: 'scrollMouse',
        value: function scrollMouse(event) {
            var delta = utils.getWheelDelta(event);
            if (delta < 0) {
                this.goDown();
            } else {
                this.goUp();
            }
        }
        // 触屏事件

    }, {
        key: 'touchEnd',
        value: function touchEnd(event) {
            var endY = event.changedTouches[0].pageY;
            if (endY - this.startY < 0) {
                // 手指向上滑动，对应页面向下滚动
                this.goDown();
            } else {
                // 手指向下滑动，对应页面向上滚动
                this.goUp();
            }
        }
    }, {
        key: 'goUp',
        value: function goUp() {
            // 只有页面顶部还有页面时页面向上滚动
            if (-this.container.offsetTop >= this.viewHeight) {
                // 重新指定当前页面距视图顶部的距离 currentPosition，实现全屏滚动，currentPosition 为负值，越大表示超出顶部部分越少
                this.currentPosition = this.currentPosition + this.viewHeight;

                //跳转页面
                this.turnPage(this.currentPosition);
                //改变Dots样式
                this.changeNavStyle(this.currentPosition);
                // // 处理用户自定义函数
                // this.options.definePages();
            }
        }
    }, {
        key: 'goDown',
        value: function goDown() {
            if (-this.container.offsetTop <= this.viewHeight * (this.pagesNum - 2)) {
                // 重新指定当前页面距视图顶部的距离 currentPosition，实现全屏滚动，currentPosition 为负值，越小表示超出顶部部分越多
                this.currentPosition = this.currentPosition - this.viewHeight;
                //跳转页面
                this.turnPage(this.currentPosition);
                //改变Dots样式
                this.changeNavStyle(this.currentPosition);
                // 处理用户自定义函数
                // this.options.definePages();
            }
        }
        // 创建右侧点式导航

    }, {
        key: 'createNav',
        value: function createNav() {
            var _this = this;

            var nav = document.createElement('div');
            nav.className = 'nav';
            this.container.appendChild(nav);

            // 有几页，显示几个点
            for (var i = 0; i < this.pagesNum; i++) {
                nav.innerHTML += '<p class="nav-dot"><span></span></p>';
            }

            var navDots = document.querySelectorAll('.nav-dot');
            this.navDots = Array.prototype.slice.call(navDots);

            // 添加初始样式
            this.navDots[0].classList.add('active');

            // 添加点式导航点击事件
            this.navDots.forEach(function (el, i) {
                el.addEventListener('click', function () {
                    //页面跳转
                    _this.currentPosition = -(i * _this.viewHeight);
                    _this.turnPage(_this.currentPosition);

                    // 更改样式
                    _this.navDots.forEach(function (el) {
                        utils.deleteClassName(el, 'active');
                    });
                    el.classList.add('active');
                });
            });
        }
        // 随页面滚动改变样式

    }, {
        key: 'changeNavStyle',
        value: function changeNavStyle(height) {
            this.navDots.forEach(function (el) {
                utils.deleteClassName(el, 'active');
            });
            var i = -(height / this.viewHeight);
            this.navDots[i].classList.add('active');
        }
    }, {
        key: 'init',
        value: function init() {
            var _this2 = this;

            this.container.style.height = this.viewHeight + 'px';

            this.createNav();

            var handleMouseWheel = utils.throttle(this.scrollMouse, this, 1000);

            //鼠标滚轮监听，火狐鼠标滚动事件不同其他
            if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
                document.addEventListener('mousewheel', handleMouseWheel);
            } else {
                document.addEventListener('mousewheel', handleMouseWheel);
            }

            //手机触屏屏幕
            document.addEventListener('touchstart', function (event) {
                _this2.startY = event.touches[0].pageY;
            });

            var handleTouchEnd = utils.throttle(this.touchEnd, this, 500);

            document.addEventListener('touchend', handleTouchEnd);

            //为了避免下拉刷新，可以阻止 touchmove 事件的默认行为：
            document.addEventListener('touchmove', function (event) {
                event.preventDefault();
            });
        }
    }]);

    return PureFullPage;
}();