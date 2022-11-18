$(document).ready(function () {


    const menu = $('#header #nav li');
    const menu_x = $('.m_fixnav .m_fix_mn li  ');
    const contents = $('#wrap .mobile');



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