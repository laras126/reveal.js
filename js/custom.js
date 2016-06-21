$(document).ready( function() {

  $('body').keydown(function(e) {
    if (e.keyCode == 49) {
      $('.nl-fade-1').fadeIn(300);
    }
  });

  $('.nl-fade-2').keydown(function(e) {
    if (e.keyCode == 50) {
      $(this).fadeIn(300);
    }
  });

});
