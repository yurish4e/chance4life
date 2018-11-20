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
         $(".navigation").toggleClass("owl-carousel_inf");
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
      speed: 200,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
         arrows: false,
         infinite: false
      });
 });

