//intro-show will appear as you scroll
$(window).scroll( function() {
  if ($(this).scrollTop()>100){
    $('.intro-show').fadeIn();
  }
});
