$('#carouselExampleFade').carousel({
  interval: 5000
});

$(window).scroll(function() {
  if ($("#menu").offset().top > 56) {
      $("#menu").addClass("bg-dark");
  } else {
      $("#menu").removeClass("bg-dark");
  }
});
