  jQuery(document).ready(function( $ ) {
    
   
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