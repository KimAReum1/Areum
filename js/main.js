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




    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        if (sct > 250 && scene01 == true) {
            scene01 = false;
            $('.box .box1').stop().delay(300).animate({ left: '300px', opacity: '1' });
            $('.box .box2').stop().delay(300).animate({ left: '1100px', opacity: '1' });
        } else if (sct < 245 && scene01 == false) {
            scene01 = true;
            $('.box .box1').stop().delay(0).animate({ left: '50px', opacity: '0' });
            $('.box .box2').stop().delay(0).animate({ left: '1400px', opacity: '0' });
        }
        console.log(scroll)
    });



});