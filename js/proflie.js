$(document).ready(function () {

    var scene01 = true;

    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        if (sct > 205 && scene01 == true) {
            scene01 = false;
            $('.box .box1').stop().delay(100).animate({ left: '460px', opacity: '1' });
            $('.box .box2').stop().delay(100).animate({ left: '800px', opacity: '1' });
        } else if (sct < 200 && scene01 == false) {
            scene01 = true;
            $('.box .box1').stop().delay(0).animate({ left: '400px', opacity: '0' });
            $('.box .box2').stop().delay(0).animate({ left: '700px', opacity: '0' });
        }
        console.log(scroll)
    });







});