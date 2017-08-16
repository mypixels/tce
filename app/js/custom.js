$(document).ready(function() {
  $('#menu-icon').on('click', function() {
    $('.main-navbar').toggleClass('expand');
    return false;
  })
});

// Mouse SVG
$('.mouse-animate').animate({'top': '+=2em', 'opacity': '1'}, 1500);

// Index Slider Options
$('.main-slider').slick({
  autoplay: true,
  dots: true,
  mobileFirst: true,
  dotsClass: 'slide-dots'
});

//Gallery Slider Options
$("img").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
});
