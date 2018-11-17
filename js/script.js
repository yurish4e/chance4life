 $(document).ready(function () {
     $('.chance_slide').slick({ 
         autoplay: true,
         dots: true,
         arrows: false,
         fade: true,
         autoplaySpeed: 1500
                              });
     $('.unit_left').slick({ 
         autoplay: true,
         dots: true,
         arrows: true,
         fade: true,
         autoplaySpeed: 1500
                              });
     $('.personal_info').click(function () {
         $(".personal_full").toggleClass("personal_show", 250, "easeOutSine");
     });
     $('.menu_open').click(function () {
         $(".menu").toggleClass("menu_visible");
     });
 });

