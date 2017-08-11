$(document).ready(function() {
  $('#menu-icon').on('click', function() {
    $('.navbar').toggleClass('expand');
    return false;
  })
});


$('.main-slider').slick({
  autoplay: true,
  dots: true,
  mobileFirst: true,
  dotsClass: 'slide-dots'
});
