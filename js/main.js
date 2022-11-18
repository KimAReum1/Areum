$(document).ready(function () {
    var scene01 = true;

    timer();
    function timer() {
        setTimeout(function () {
            $('#main h1').css({
                opacity: '0'
            }).animate({ opacity: '1' })
        }, 700);
    }


    const menu = $('#header #nav li');
    const menu_x = $('.fixnav .fix_mn li  ');
    const contents = $('#wrap > section');



    menu.click(function (e) {
        e.preventDefault();
        let i = $(this).index();
        let section = $(contents).eq(i);

        let tg = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tg });
    });

    menu_x.click(function (e) {
        e.preventDefault();
        i = $(this).index();
        section = $(contents).eq(i);

        tg = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tg });
    });








});