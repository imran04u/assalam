  jQuery(document).ready(function( $ ) {
    
   // Mobile Menu
   if($(window).width() <= 991){
     $("#menu").mmenu({
       "offCanvas": {
         "position": "right"
       }
     });
   }

   $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 50) {
      $('.header').addClass('header-fixed');
    }
    else if (height < 49) {
      $('.header').removeClass('header-fixed');
    }
  });


 });