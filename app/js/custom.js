$(document).ready(function() {
  $('#menu-icon').on('click', function() {
    $('.navbar').toggleClass('expand');
    return false;
  })
});

$('.mouse-animate').animate({'top': '+=5%', 'opacity': '1'}, 1500);


$('.main-slider').slick({
  autoplay: true,
  dots: true,
  mobileFirst: true,
  dotsClass: 'slide-dots'
});
