var utils = {};

/** 
 *获取指定的参数值
 *
 * @param {*} name 参数名称
 */

utils.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/* 是否微信浏览器 */
utils.isWeixn = function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}

/* 注意这是es6对象简写 */
utils.storage = {
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



/* 表单验证 */
utils.empty = function (_this, str) {
    str = str || "请输入";
    var value = _this.val()
    if (value.length == 0) {
        toast(str)
        return false;
    } else {
        return true;
    }
}
utils.cheackPhone = function (_this, success, error) {
    var value = _this.val()
    let lawful = /^(0[0-9]{2,3}[-]?)?[0-9]{7,8}(-[0-9]{1,8})?$/.test(value) || /^1[3578]{1}[0-9]{9}$/.test(value);
    if (lawful) {
        success && success()
        return true;
    } else {
        toast('手机号码不正确')
        error && error()
        return false;
    }
}

utils.cheackUser = function (_this, success, error) {
    //要求3-8位由字母、数字、_或汉字组成
    var reg = /^[\u4e00-\u9fff\w]{2,8}$/;
    var value = _this.val()
    if (value.length == "") {
        toast('请输入用户名')
        return false;
    } else if (!reg.test(value)) {
        toast('请输入2-8位字母组成的用户名')
        return false
    } else {
        return true;
    }
}
utils.checkEmail = function (_this, success, error) {
    //验证邮箱号码
    var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    var value = _this.val()
    if (reg.test(value)) {
        success && success()
        return true;
    } else {
        toast('请输入正确邮箱号码')
        error && error()
        return false;
    }
}
utils.checkID = function (_this, success, error) {
    //身份证
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    var value = _this.val()
    if (reg.test(value)) {
        success && success()
        return true;
    } else {
        toast('请输入正确身份证号码')
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
utils.getCode = function (Btn, className) {
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
              utils.getCode(Btn, className)
            },
            1000)
    }
}