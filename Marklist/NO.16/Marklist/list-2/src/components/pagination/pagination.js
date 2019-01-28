function page(opt) {
    var _this = window;
    var $contain = opt.contain;
    var nowNum = opt.nowNum || 1;
    var allNum = opt.allNum || 5;
    var tag = '<span><span/>';
    var isJump = opt.isJump || false;
    var callBack = opt.callBack || function () {};

    if (allNum == 1) {
        return;
    }


    if (isJump) {
        var $homePage = $(tag);
        $homePage.attr('page-num', 1)
        $homePage.html('首页');
        $contain.append($homePage);
        if (nowNum <= 1) {
            $homePage.addClass('disable')
        }
    }



    var $oAPrev = $(tag);
    $oAPrev.attr('page-num', nowNum - 1)
    $oAPrev.html('上一页');
    $contain.append($oAPrev);
    if (nowNum <= 1) {
        $oAPrev.addClass('disable')
    }

    //总页小于5的情况
    if (allNum <= 5) {
        for (var i = 1; i <= allNum; i++) {
            var $oA = $(tag);
            $oA.attr('page-num', i)
            $oA.html(i)
            if (nowNum == i) {
                $oA.addClass('active')
            } else {
                $oA.removeClass('active');
            }
            $contain.append($oA);
        }
    } else {
        //生成5个A标签
        for (var i = 1; i <= 5; i++) {
            var $oA = $(tag);

            //1,2页作处理。
            if (nowNum == 1 || nowNum == 2) {

                $oA.attr('page-num', i)
                $oA.html(i)
                if (nowNum == i) {
                    $oA.addClass('active');
                }

                //最后两页作处理
            } else if ((allNum - nowNum) == 0 || (allNum - nowNum) == 1) {

                $oA.attr('page-num', allNum - 5 + i)
                $oA.html(allNum - 5 + i)

                if (allNum - 5 + i == nowNum) {
                    $oA.addClass('active');
                }

            } else {
                //如果当前页是4,那么生成2,3,[4],5,6页
                $oA.attr('page-num', nowNum - 3 + i)
                $oA.html(nowNum - 3 + i)

                if (i == 3) {
                    $oA.addClass('active')
                } else {
                    $oA.removeClass('active')
                }
            }
            $contain.append($oA);

        }

    }

    var $oANext = $(tag);
    $oANext.attr('page-num', nowNum + 1)
    $oANext.html('下一页')
    $contain.append($oANext);

    if ((allNum - nowNum) == 0) {
        $oANext.addClass('disable')
    }



    if (isJump) {
        var $endPage = $(tag);
        $endPage.attr('page-num', allNum)
        $endPage.html('尾页');
        $contain.append($endPage);
        if (nowNum == allNum) {
            $endPage.addClass('disable')
        }
    }


    callBack(nowNum, allNum);

    var oA = $contain.children();
    oA.each(function () {
        $(this).on("click", function () {
            if ($(this).hasClass('disable')) {
                return;
            }

            var nowNum = parseInt($(this).attr('page-num'));

            $contain.html("");

            _this.page({
                contain: opt.contain,
                nowNum: nowNum,
                allNum: allNum,
                isJump: isJump,
                callBack: callBack

            });

            return false;
        })
    })
}