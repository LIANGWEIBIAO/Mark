"use strict";

var vtimer = null;
var toast = function toast(msg, duration, cb) {
    var duration = duration || 2000;
    $('.v-toast').remove();
    var $div = $("<div class='v-toast'>" + msg + "</div>");
    $('body').append($div);

    clearTimeout(vtimer);
    vtimer = setTimeout(function () {
        $('.v-toast').remove();
        vtimer = null;
        cb && cb();
    }, duration);
};