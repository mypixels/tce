$(document).ready(function() {
  $('#menu-icon').on('click', function() {
    $('.navbar').toggleClass('expand');
    return false;
  })
});

// Mouse SVG
$('.mouse-animate').animate({'top': '+=2em', 'opacity': '1'}, 1500);

// Slider Options
$('.main-slider').slick({
  autoplay: true,
  dots: true,
  mobileFirst: true,
  dotsClass: 'slide-dots'
});
