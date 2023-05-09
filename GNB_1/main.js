$(document).ready(function () {
    var isDone = true;
    var bgColor = $('#gnb>li>ul').find('a').css('background-color')

    //1depth의 버튼 활성화와 비활성화에 대한 코드
    $('#gnb>li').on('mouseenter',function(){
        $(this).children('a').addClass('on')
        //find vs children의 차이점
        //find는 모두 찾음 children 직계자식만 찾음
    });
    $('#gnb>li').on('mouseleave',function(){
        $(this).children('a').removeClass('on')
    });

    //gnb에 마우스를 올린 상태라면, bgGnb를 만들어 달라는 코드
    $('#gnb').on('mouseenter',function(){

        //무한 반복해서 .bgGnb를 생성하지 않도록 변수로 해당클래스의 여부를
        //담은 뒤 if문으로 해당 클래스의 존재에 따라서 한번만 생성하도록 코드를 작성
        var isBgGnb = $('.bgGnb').length;
        if (!isBgGnb) {
            $('.headerWrap').prepend(
                $('<div class="bgGnb"></div>').css({
                    width : '100%' , height:200 , backgroundColor : bgColor,
                    position: 'absolute', top:150, left:0, display:'none'
                })
            );
        }
        if(isDone){
            isDone = false;
            $('#gnb>li>ul').stop().slideDown();
            $('.bgGnb').stop().slideDown();
        }        
    })

    $('#gnb').on('mouseleave',function(){
        $('#gnb>li>ul').slideUp();
        $('.bgGnb').slideUp(function(){
            $(this).remove()
            isDone= true
        });
    })
})