!(function(win, doc) {
    function setFontSize() {

        var winWidth = window.innerWidth;
        // doc.documentElement.style.fontSize = (winWidth / 750) * 100 + 'px' ;

        var size = (winWidth / 750) * 100;
        doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
    }

    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

    var timer = null;

    win.addEventListener(evt, function() {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 100);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 100);
        }
    }, false);

    // 初始化
    setFontSize();

}(window, document));