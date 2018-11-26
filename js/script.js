 $(document).ready(function () {
     $('.chance_slide').slick({ 
         autoplay: true,
         dots: true,
         arrows: false,
         fade: true,
         autoplaySpeed: 1500
                              });
     $('.chance_mobile_slider').slick({ 
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
     /*позиционирование меню*/
     $('#navigation_team').scrollLeft( 53 );
     $('#navigation_news').scrollLeft( 203 );
     $('#navigation_media').scrollLeft( 355 );
     $('#navigation_thanks').scrollLeft( 505 );
     $('#navigation_contacts').scrollLeft( 640 );
     $('#navigation_home').scrollLeft( 53 );
     $('#navigation_remember').scrollLeft( 300 );
     $('#navigation_order_2').scrollLeft( 140 );
     $('#navigation_order_3').scrollLeft( 350 );
     $('#navigation_order_4').scrollLeft( 530 );
     $('#navigation_home').scrollLeft( 53 );
     /*открывание детальной информации*/
     $('.personal_info_pc').click(function () {
         $(".personal_full_pc").toggleClass("personal_show", 250, "easeOutSine");
     });
     $('.personal_info_mobile').click(function () {
         $(".personal_full_mobile").toggleClass("personal_show", 250, "easeOutSine");
     });
     /*popup оплаты*/
     $('#chance_help').click(function () {
         $("#popup_index").addClass("popup_index_show", 250, "easeOutSine");
     });
     $('#popup_index_close').click(function () {
         $("#popup_index").toggleClass("popup_index_show", 250, "easeOutSine");
     });
     /*popup оплаты для мобильного*/
     $('#chance_help_mob').click(function () {
         $("#popup_index_mob").toggleClass("popup_index_mob_show", 250, "easeOutSine");
     });
     $('#popup_index_close_mob').click(function () {
         $("#popup_index_mob").toggleClass("popup_index_mob_show", 250, "easeOutSine");
     });
     /*popup оплаты для персональной страницы*/
     $('#personal_help').click(function () {
         $("#popup_personal").addClass("popup_personal_show", 250, "easeOutSine");
         $(".wrapper").addClass("blur", 250, "easeOutSine");
         $(".footer").addClass("blur", 250, "easeOutSine");
     });
     $('#personal_help_mob').click(function () {
         $("#popup_personal").addClass("popup_personal_show_mob", 250, "easeOutSine");
         $(".wrapper").addClass("blur", 250, "easeOutSine");
         $(".footer").addClass("blur", 250, "easeOutSine");
     });
     $('#popup_personal_close').click(function () {
         $("#popup_personal").removeClass("popup_personal_show", 250, "easeOutSine");
         $("#popup_personal").removeClass("popup_personal_show_mob", 250, "easeOutSine");
         $(".wrapper").toggleClass("blur", 250, "easeOutSine");
         $(".footer").toggleClass("blur", 250, "easeOutSine");
     });
     /*$('.menu_open').click(function () {
         $(".menu").toggleClass("menu_visible");
     });*/
     /*закрытие/открытие выбора языка*/
     $('.nav_lang').click(function () {
         $(".nav_close").addClass("nav_close_lang");
         $(".nav_lang_menu").toggleClass("nav_lang_menu_visible");
          $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#menu_visible"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 && $(".nav_lang")) { // и не по его дочерним элементам
			$(".nav_lang_menu").removeClass("nav_lang_menu_visible"); // скрываем его
            $(".nav_close").removeClass("nav_close_lang");
         $(".nav_close").removeClass("nav_close_menu");
		}
	});
     });
     /*закрытие/открытие меню*/
     $('.menu_open').click(function () {
         $(".nav_close").addClass("nav_close_menu");
         $(".menu").toggleClass("menu_visible");
          $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#menu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			$(".menu").removeClass("menu_visible"); // скрываем его
            $(".nav_close").removeClass("nav_close_menu");
         $(".nav_close").removeClass("nav_close_menu");
		}
	});
     });
       if ($(window).width() < 1024) {
         $(".news").toggleClass("container");
         $(".news_main_title").toggleClass("container");
         $(".news_wrapper").toggleClass("owl-carousel");
         /*$(".navigation").toggleClass("owl-carousel_inf");*/
         /*$(".navigation_kids").toggleClass("owl-carousel_inf");*/
     }
     
     $('.owl-carousel').slick({
        dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
         arrows: false
      });
     $('.owl-carousel_inf').slick({
        dots: false,
      infinite: true,
         cssEase: 'linear',
      speed: 200,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
         arrows: false,
         infinite: false
      });
 });

