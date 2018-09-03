$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 1180) { // When on the page, from page top, to add new class for styling
    $("nav").addClass("scrolling");
  } else {
    $("nav").removeClass("scrolling");
  }
});
