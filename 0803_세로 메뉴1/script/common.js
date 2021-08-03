$(document).ready(function () {

    $(".menu > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });

    $(".menu > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

        
});

//popup
$(document).ready(function () {

    $(".notice li:first").click(function () {
        $(".layer").show();
        $(".layer-bg").show();
       
    });

    $(".close-btn").click(function () {
        $(".layer").hide();
        $(".layer-bg").hide();
        
    });
});