$(() => {
    var scroll_box = $(".picker_wrap");
    var slider = $('.scroll_box')

    var topY = 0;
    var startX = 0; //记录手机按下的位置。
    var moveX = 0; //记录手指滑动坐标。
    var distanceX = 0; //单次滑动产生的距离 moveX - startX;
    scroll_box.on("touchstart", function (e) {
        e.preventDefault();
        // e.stopPropagation();
        startX = e.touches[0].clientY;
        console.log(startX);

    })

    scroll_box.on("touchmove", function (e) {
        e.preventDefault();
        moveX =  e.touches[0].clientY;
        distanceX = moveX - startX;
        var tem_topY = topY+distanceX;
        setTranform(tem_topY)
        console.log('这次滑动的距离为' + distanceX);

    })
    scroll_box.on("touchend", function (e) {
        topY = topY+distanceX;
        e.preventDefault();
        startX = 0;
        moveX = 0;
        distanceX = 0;
       
    })
    //设置偏移位置
    function setTranform(distance) {
        slider[0].style.webkitTransform = "translateY(" + distance + "px)";
        slider[0].style.transform = "translateY(" + distance + "px)";
    }
    //封装开启过渡的方法
    function addTransition() {
        slider[0].style.webkitTransition = "all 0.2s";
        slider[0].style.transition = "all 0.2s";
    }
     //封装关闭过渡的方法
     function removeTransition() {
        slider[0].style.webkitTransition = "none";
        slider[0].style.transition = "none";
    }
})