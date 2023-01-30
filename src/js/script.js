"use strict"

$(document).ready(function () {

    //слайдер
    const $center = $('.center');
    $center.slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="prev"> <div></div> </div>',
        nextArrow: '<div class="next"> <div></div> </div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
    });

    //всплывающее меню
    $(".house__info").hide();
    $(".slick-center .house__info").show();

    const $popup = $('#menu__popup');
    $('#menu__icon').click(function (){
        $popup.addClass('open');
    })
    $('#menu__popup *').each(function (item){
        $(this).on('click', function (){
            $popup.removeClass('open');
        })
    })

    //чекбокс
    $center.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".house__info").hide();
    });
    $center.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(".slick-center .house__info").show();
    });

    //показать еще проекты
    $(".main__projects").on('click', function (){
        const $projects = $(".projects__show");
        if ($projects.css('display') === 'block') {
            $projects.hide();
            $(".main__projects span").text("Посмотреть еще 3 проекта");
            $(".main__projects div").css('transform', 'rotate(0deg)')
        } else {
            $(".main__projects").addClass('show-projects');
            $(".main__projects span").text("Скрыть проекты");
            $(".main__projects div").css('transform', 'rotate(180deg)')
            $projects.show();
        }
    });

    //всплывающая галерея картинок
    $('.article__image a').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

});





