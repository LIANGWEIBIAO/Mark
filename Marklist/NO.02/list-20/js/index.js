/*注册表单验证*/
/*
1.必须通过form表单来布局

*/
//添加自定义验证规则
jQuery.validator.addMethod("phone_number", function(value, element) {
    var length = value.length;
    var phone_number = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/
    return this.optional(element) || (length == 11 && phone_number.test(value));
}, "手机号码格式错误");

jQuery.validator.addMethod("user_name", function(value, element) {
    var reg = /^[\u4e00-\u9fa5]{2,4}$/;
    return this.optional(element) || reg.test(value)
}, "请输入2-4位字母组成的用户名");

jQuery.validator.addMethod("checkID", function(value, element) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return this.optional(element) || reg.test(value)
}, "请输入正确身份证号码");
jQuery.validator.addMethod("password", function(value, element) {
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
    return this.optional(element) || reg.test(value)
}, "密码需要6-18个字符，且包含字母和数字");



validateForm()

function validateForm() {
    return $(".list_4").validate({
        rules: {
            username: {
                required: true,
                user_name: true, //自定义的规则
            },
            school: {
                required: true,
                minlength: 3
            },
            phone_number: {
                required: true,
                phone_number: true, //自定义的规则
            },
            checkID: {
                required: true,
                checkID: true
            },
            email: {
                required: true,
                email: true
            },
            code: {
                required: true,
            },
            password: {
                required: true,
                password:true,
                minlength: 6,
                maxlength: 32,
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: '.password1'
            }

        },
        messages: {
            username: {
                required: "请输入用户名"
            },
            school: {
                required: "请输入学校",
                minlength: "学校名称最少3个字符"
            },
            phone_number: {
                required: "请输入手机号码",
            },
            email: {
                required: '请输入邮箱',
                email: "请输入正确的邮箱号码"
            },
            checkID: {
                required: "请输入身份证"
            },
            code: {
                required: "请输入验证码",
            },
            password: {
                required: "必须填写密码",
                minlength: "密码至少为6个字符",
                maxlength: "密码至多为32个字符",
            },
            confirm_password: {
                required: "请输入密码",
                minlength: "确认密码不能少于6个字符",
                equalTo: "两次输入密码不一致", //与另一个元素相同
            },
        }
    });
}

$(".submitBtn").on("click",function(){
    if(validateForm().form()){
        console.log("通过验证")
    }else{
        console.log("没有通过验证")
    }
})