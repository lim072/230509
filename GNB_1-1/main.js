$(document).ready(function () {
    // hover(함수, 함수)
    $('#gnb>li').hover(function () {
        $('.nav_bg, #gnb>li>ul').stop().slideDown();
    }, function () {
        $('.nav_bg, #gnb>li>ul').stop().slideUp();
    })
});