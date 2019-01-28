
/*alert*/
var valert = function (content, cb, confirmText) {
    var confirmText = confirmText || '确定'
    var content = content || "输入点内容"
    var ctrls = '';
    var contentHtml = '';

    // 确定按钮
    ctrls = '<button class="btn-alert">' + confirmText + '</button>'
    contentHtml = _getMsgHtml(content, ctrls)

    $('body').append(contentHtml);

    $(".btn-alert").on("click", function () {
        $(".v-msg").remove();
        cb && cb()
    })
}

/*confirm*/
var vconfirm = function (opts) {
    var content = opts.content || "请输入内容"
    var ctrls = '';

    // 确定和取消按钮
    ctrls =
        `<input type="button" class="btn-confirm-sure" value="确定">
         <div class="btn-confirm-line"></div>
         <input type="button" class="btn-confirm-cancel" value="取消">`
    var contentHtml = _getMsgHtml(content, ctrls)

    $('body').append(contentHtml);

    $(".btn-confirm-sure").on("click", function () {
        $(".v-msg").remove();
        opts.sureCb && opts.sureCb();
    })

    $(".btn-confirm-cancel").on("click", function () {
        $(".v-msg").remove();
        opts.cancelCb && opts.cancelCb();
    })

}

function _getMsgHtml(content, ctrls) {
    return `<div class="v-msg">
               <div class="pnl">
                  <div class="msg-content">${content}</div>
                  <div class="ctrls tpx">
                       ${ctrls}
                  </div>
               </div>
            </div>`
}

