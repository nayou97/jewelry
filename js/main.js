$(document).ready(function () {

    /* toglle btn animation */
    $(".h_left").on('click', function () {
        $(this).find(".ham .bar").toggleClass("active");


        if ($(this).find(".bar").hasClass("active")) {
            posY = $(window).scrollTop();
            $("html, body").addClass("not_scroll");
            $(".nav_wrap").css("display", "block");
            $(".black_box").css("display", "block");
            $(".cont").css("top", -posY);
        } else {
            $("html, body").removeClass("not_scroll");
            $(".nav_wrap").css("display", "none");
            $(".black_box").css("display", "none");
            posY = $(window).scrollTop(posY);
        }
    });

    
    /* navigation on */
    $(".shop").on('click', function () {
        $(this).toggleClass("on");

        if ($(this).hasClass("on")) {
            $(this).siblings(".sub").slideDown();

        } else {
            $(this).siblings(".sub").slideUp();

        }
    });
    
    
    /* popup */
    $(".close").on('click', function () {
        $(".popup").hide();
    });
    
    //animation
    var newSub = $('#dresses');
    var newItem = $('.cls-1');

    $(window).scroll(function(){
        var scrollAni=$(this).scrollTop();
               
        if(scrollAni>=720){
            newItem.addClass('activeAni');
        }else{
            newItem.removeClass('activeAni');
        }
    });

    var keep_height = function keep_height() {
        var ww = $(window).width();
        var kw = $("#keep .inner").width();
        var kh= $("#keep").height() - $("#keep .inner").height();
        var h_result = kh / 2; 

        if(ww>500) {
            $("#keep>span").css({"right": kw - 144 + 'px',"top": h_result + 60 + 'px'});
        } else {
            $("#keep>span").css({"right": "auto","left": "20px","top": h_result - 60 + 'px'});
        }
    }

    keep_height();
    
    $(window).resize(function(){
        keep_height();
    });
})