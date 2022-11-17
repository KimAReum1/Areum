// $(document).ready(function () {
//     var scene01Num = 1;

//     $(window).scroll(function () {
//         var scrollTop = $(document).scrollTop();
//         if (scrollTop > 10 && scene01Num == 1) {
//             scene01Num = 0;
//             $('#skill_m .in_box01').stop().delay(0).css({ top: '100px' }).animate({ top: '20px', opacity: '1' }, 1000);
//             $('#skill_m .in_box02').stop().delay(500).css({ top: '100px' }).animate({ top: '30px', opacity: '1' }, 1000);
//             $('#skill_m .in_box03').stop().delay(1000).css({ top: '100px' }).animate({ top: '70px', opacity: '1' }, 1000);
//             $('#skill_m .in_box04').stop().delay(1500).css({ top: '100px' }).animate({ top: '60px', opacity: '1' }, 1000);
//         }
//         else if (scrollTop < 5 && scene01Num == 0) {
//             scene01Num = 1;
//             $('#skill_m .in_box01').stop().css({ top: '20px', opacity: '1' }).animate({ top: '100px' }, 1000);
//             $('#skill_m .in_box02').stop().css({ top: '30px', opacity: '1' }).animate({ top: '100px' }, 1000);
//             $('#skill_m .in_box03').stop().css({ top: '70px', opacity: '1' }).animate({ top: '100px' }, 1000);
//             $('#skill_m .in_box04').stop().css({ top: '60px', opacity: '1' }).animate({ top: '100px' }, 1000);

//         }
//     });
//});