/**
 * utils 为工具函数，对原生API做兼容性处理及提取公共方法
 */
const utils = {
    // 鼠标滚轮事件
    getWheelDelta(event) {
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            // 兼容火狐
            return -event.detail;
        }
    },
    // 删除 类名
    deleteClassName(el, className) {
        if (el.classList.contains(className)) {
            el.classList.remove(className);
        }
    },
    // 防抖动函数，method 回调函数，context 上下文，event 传入的时间，delay 延迟函数
    // 调用的时候直接执行，注意和 throttle 在使用的时候的区别
    debounce(method, context, event, delay) {
        clearTimeout(method.tId);
        method.tId = setTimeout(() => {
            method.call(context, event);
        }, delay);
    },
    // 截流函数，method 回调函数，context 上下文，delay 延迟函数，
    // 返回的是一个函数
    throttle(method, context, delay) {
        let wait = false;
        return function (...args) {
            if (!wait) {
                method.apply(context, args);
                wait = true;
                setTimeout(() => {
                    wait = false;
                }, delay);
            }
        };
    }
}