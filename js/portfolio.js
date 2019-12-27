
if ($(window).width() < 750) {
  $('.port').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  });
} else if ($(window).width() < 970) {
  $('.port').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
  });
}
else {
  $('.port').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
  });
};









