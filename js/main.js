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








});