$(document).ready(function () {

    var current = 0;
    var setIntervalId;

    // $('.btn button').click(function (e) {
    //     e.preventDefault();
    //     var i = $(this).index();
    //     move(i);
    // });



    $('.web_mn').mouseover(function () {
        clearInterval(setIntervalId);
    });
    $('.web_mn').mouseleave(function () {
        timer();
    });



    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 5) {

                n = 0;
            };

            move(n);
        }, 3000);
    };

    function move(i) {
        if (i == current) return;

        var currentEl = $('.web_mn img').eq(current);
        var nextEl = $('.web_mn img').eq(i);

        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });
        current = i;

        // $('.btn > button').removeClass('act');
        // $('.btn > button').eq(i).addClass('act');
    };


});