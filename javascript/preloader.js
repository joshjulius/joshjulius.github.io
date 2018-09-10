$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
  });
  $(window).on('load', function() {
    $('.preloader-wrapper').fadeOut(750);
    $('body').removeClass('preloader-site');
  });