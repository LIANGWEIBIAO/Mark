var util = {};

/**
 *获取指定的参数值
 *
 * @param {*} name 参数名称
 */

util.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/* 是否微信浏览器 */
util.isWeixn = function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}

/* 注意这是es6对象简写 */
util.storage = {
    //存储
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    //取出数据
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    // 删除数据
    remove(key) {
        localStorage.removeItem(key);
    }
}

/**
 * 动态加载JS
 * @param {string} url 脚本地址
 * @param {function} callback  回调函数
 */
util.dynamicLoadJs = function (url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if (typeof (callback) == 'function') {
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                callback();
                script.onload = script.onreadystatechange = null;
            }
        };
    }
    head.appendChild(script);
}

/**
 * 动态加载CSS
 * @param {string} url 样式地址
 */
util.dynamicLoadCss = function (url) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}

/* 
 1.简单写入一条 Cookie 信息: cookie("user", "baidu");
    2.写入一条 Cookie 信息，并且设置更多选项
       cookie("user", "baidu", {
           expires: 10, // 有效期为 10 天
           path: "/", // 整个站点有效
           domain: "www.xiaobiao.com", // 有效域名
           secure: true // 加密数据传输
       });
    3.删除Cookie信息：cookie("user", null); 
  */

util.cookie = function (name, value, options) {
    // 如果第二个参数存在
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            // 设置失效时间
            options.expires = -1;
        }
        var expires = '';
        // 如果存在事件参数项，并且类型为 number，或者具体的时间，那么分别设置事件
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + options.path : '', // 设置路径
            domain = options.domain ? '; domain=' + options.domain : '', // 设置域
            secure = options.secure ? '; secure' : ''; // 设置安全措施，为 true 则直接设置，否则为空

        // 把所有字符串信息都存入数组，然后调用 join() 方法转换为字符串，并写入 Cookie 信息
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // 如果第二个参数不存在
        var CookieValue = null;
        if (document.cookie && document.cookie != '') {
            var Cookies = document.cookie.split(';');
            for (var i = 0; i < Cookies.length; i++) {
                var Cookie = (Cookies[i] || "").replace(/^\s+|\s+$/g, "");
                if (Cookie.substring(0, name.length + 1) == (name + '=')) {
                    CookieValue = decodeURIComponent(Cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return CookieValue;
    }
}

/* 表单验证 */
util.empty = function (_this, str) {
    str = str || "请输入";
    var value = _this.val()
    if (value.length == 0) {
        layer.msg(str)
        return false;
    } else {
        return true;
    }
}
util.cheackPhone = function (_this, success, error) {
    var value = _this.val()
    let lawful = /^(0[0-9]{2,3}[-]?)?[0-9]{7,8}(-[0-9]{1,8})?$/.test(value) || /^1[3578]{1}[0-9]{9}$/.test(value);
    if (lawful) {
        success && success()
        return true;
    } else {
        layer.msg('请输入正常的手机号码')
        error && error()
        return false;
    }
}

util.verifyUser = function (_this, success, error) {
    //要求3-8位由字母、数字、_或汉字组成
    var reg = /^[\u4e00-\u9fff\w]{2,8}$/;
    var value = _this.val()
    if (value.length == "") {
        layer.msg('请输入用户名')
        return false;
    } else if (!reg.test(value)) {
        layer.msg('请输入2-8位字母组成的用户名')
        return false
    } else {
        return true;
    }
}
util.checkEmail = function (_this, success, error) {
    //验证邮箱号码
    var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    var value = _this.val()
    if (reg.test(value)) {
        success && success()
        return true;
    } else {
        layer.msg('请输入正确邮箱号码')
        error && error()
        return false;
    }
}
util.checkID = function (_this, success, error) {
    //身份证
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    var value = _this.val()
    if (reg.test(value)) {
        success && success()
        return true;
    } else {
        layer.msg('请输入正确身份证号码')
        error && error()
        return false;
    }
}


/**
 *获取验证码
 *
 * @param {*} Btn 验证码按钮
 * @param {*} className 等待中样式
 */
var _wait = 60;
verify.getCode = function (Btn, className) {
    if (_wait == 0) {
        Btn.removeClass(className)
        Btn.removeAttr("disabled"); 
        Btn.val('获取验证码')
        _wait = 60;
    } else {
        Btn.addClass(className)
        Btn.attr("disabled", true);
        Btn.val(_wait + " S")
        _wait--;
        setTimeout(function () {
                verify.getCode(Btn, className)
            },
            1000)
    }
}