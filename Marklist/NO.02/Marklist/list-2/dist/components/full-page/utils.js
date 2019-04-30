"use strict";

/**
 * utils 为工具函数，对原生API做兼容性处理及提取公共方法
 */
var utils = {
    // 鼠标滚轮事件
    getWheelDelta: function getWheelDelta(event) {
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            // 兼容火狐
            return -event.detail;
        }
    },

    // 删除 类名
    deleteClassName: function deleteClassName(el, className) {
        if (el.classList.contains(className)) {
            el.classList.remove(className);
        }
    },

    // 防抖动函数，method 回调函数，context 上下文，event 传入的时间，delay 延迟函数
    // 调用的时候直接执行，注意和 throttle 在使用的时候的区别
    debounce: function debounce(method, context, event, delay) {
        clearTimeout(method.tId);
        method.tId = setTimeout(function () {
            method.call(context, event);
        }, delay);
    },

    // 截流函数，method 回调函数，context 上下文，delay 延迟函数，
    // 返回的是一个函数
    throttle: function throttle(method, context, delay) {
        var wait = false;
        return function () {
            if (!wait) {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                method.apply(context, args);
                wait = true;
                setTimeout(function () {
                    wait = false;
                }, delay);
            }
        };
    }
};