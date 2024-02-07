
$(document).ready(function () {

    // change header while scrolling --------------------------- //

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });


    // ----------- === mobile menu === ------------ //
    $('.burger').on('click', function () {
        $('.header__nav').toggleClass('active');
        $('body').toggleClass('mob-menu');
        $(this).toggleClass('on');
    });


    // scroll to id
    $(".scroll-btn").on("click", function (event) {
        event.preventDefault();
        $('.header__nav').removeClass('active');
        $('body').removeClass('mob-menu');
        $('.burger').removeClass('on');

        var id = $(this).attr('href'),

            top = $(id).offset().top - 130;

        $('body,html').animate({
            scrollTop: top
        }, 700);
    });
});

AOS.init({
    disable: 'mobile',
    once: true, 
    duration: 1000,
  });