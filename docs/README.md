# LWB的笔记

<div id="oneyan"></div> 

 <script>var reloaded=false;$(function () { $.get("https://api.ooopn.com/ciba/api.php", function (r) { if (r.code == 200) { console.log(r); $("#oneyan").html("<small>" + r.date + "</small><p>" + r.ciba + "</p><p>" + r["ciba-en"] + '</p><p><img src="' + r.imgurl + '" height="480" width="330" onerror="javascript:this.src=\'https://api.ixiaowai.cn/gqapi/gqapi.php\';this.onerror = null;this.removeAttribute(\'height\');this.removeAttribute(\'width\')"></img></p><p></p>').css("text-indent", "2em") } }, "json"); });</script>

