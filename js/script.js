$(window).resize(function () { 
  if (window.innerWidth <= 992) {
    $(".home").find(".navbar").css("display", "block");
  } else {
    if ( $(window).scrollTop() >= 100 ) {
      $(".home").find(".navbar").css("display", "block");
    } else {
      $(".home").find(".navbar").css("display", "none");
    }
  }
});

$(".about").waypoint(function(direction) {
  if (window.innerWidth > 992) {
    if(direction == "down") {
      // $(".home").find(".navbar").css("visibility", "visible");
      $(".home").find(".navbar").fadeToggle();
    } else {
      $(".home").find(".navbar").fadeToggle();
    }
  }
});
