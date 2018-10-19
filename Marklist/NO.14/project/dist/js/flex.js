'use strict';

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function recalc() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 750) {
            docEl.style.fontSize = '100px';
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if (r != null) return unescape(r[2]);
    //不存在时返回null
    return null;
}

//过滤html标签
function filterHtml(s) {
    return s.replace(/<\/?.+?>/g, "").replace(/ /g, "").replace(/&nbsp;/ig, "").replace('您的浏览器不支持video标签。', "");
}

//获取文本src地址
function getImageSrc(string) {
    var str = string;

    var imgReg = /<img.*?(?:>|\/>)/gi;
    var imgArr = [];
    var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    var arr = str.match(imgReg);
    for (var i = 0; i < arr.length; i++) {
        var src = arr[i].match(srcReg);
        if (src[1]) {
            imgArr.push(src[1]);
        }
    }
    return imgArr;
}

function getBanner(classify) {
    $.ajax({
        url: 'http://wx.sdejp.com/home/index/detail',
        type: 'post',
        data: {
            cate_id: classify
        },
        success: function success(data) {
            var banner_list = data.data.banner_list;
            $(".banner_bg img").attr("src", banner_list[0].thumb);
            $(".sm_banner_bg img").attr("src", banner_list[1].thumb);
        }
    });
}

$(function () {
    //导航条渲染数据
    new Vue({
        el: '.header_wrap',
        data: {
            indexNavList: []
        },
        mounted: function mounted() {
            var _this = this;

            $.ajax({
                url: 'http://wx.sdejp.com/home/index/cate',
                type: 'post',
                success: function success(data) {
                    _this.indexNavList = data.data.list;
                    _this.$nextTick(function () {
                        index_dom();
                    });
                }
            });
        }
    });

    function index_dom() {
        //pc端导航条hover功能。
        var list = $('.nav_link>li');
        list.hover(function () {
            $(this).find('.drop_menu').fadeIn(200);
            $(this).addClass('active1');
        }, function () {
            $(this).find('.drop_menu').hide();
            $(this).removeClass('active1');
        });

        //手机导航头显示隐藏功能
        $('.am-nav>ul>li').on("click", function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.am-dropdown').hide();
            $(this).find(".am-dropdown").fadeIn();
        });

        $(".header_logo .right").on("click", function () {
            $(".am-nav").slideToggle(150);
        });

        //目标路由添加actie样式
        var fileName = getHtmlDocName();
        var nav_link_list = $('.nav_link li');
        if (fileName == 'fly' || fileName == 'learncar') {
            nav_link_list.eq(1).addClass('active');
        } else if (fileName == 'site' || fileName == 'flybase') {
            nav_link_list.eq(2).addClass('active');
        } else if (fileName == 'strategy') {
            nav_link_list.eq(3).addClass('active');
        } else if (fileName == 'elegant') {
            nav_link_list.eq(4).addClass('active');
        } else if (fileName == 'about') {
            nav_link_list.eq(5).addClass('active');
        } else if (fileName == 'index') {
            nav_link_list.eq(0).addClass('active');
        }
    }

    function getHtmlDocName() {
        var str = window.location.href;
        str = str.substring(str.lastIndexOf("/") + 1);
        str = str.substring(0, str.lastIndexOf("."));
        return str;
    }

    //返回头部
    $(window).scroll(function () {
        var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
        if (scrollTop > 800) {
            $('.back-top-btn').fadeIn();
        } else {
            $('.back-top-btn').fadeOut();
        }
    });
    $(".back-top-btn").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 400);
    });
});