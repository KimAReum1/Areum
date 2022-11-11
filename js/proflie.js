$(document).ready(function () {

    var scene01 = true;

    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        if (sct > 250 && scene01 == true) {
            scene01 = false;
            $('.box .box1').stop().delay(300).animate({ left: '500px', opacity: '1' });
            $('.box .box2').stop().delay(300).animate({ left: '1000px', opacity: '1' });
        } else if (sct < 245 && scene01 == false) {
            scene01 = true;
            $('.box .box1').stop().delay(0).animate({ left: '50px', opacity: '0' });
            $('.box .box2').stop().delay(0).animate({ left: '1400px', opacity: '0' });
        }
        console.log(scroll)
    });



});