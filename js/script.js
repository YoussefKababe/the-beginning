$(window).resize(function () { 
  if (window.innerWidth <= 768) {
    $(".home").find(".navbar").css("visibility", "visible");
  } else {
    if ( $(window).scrollTop() >= 100 ) {
      $(".home").find(".navbar").css("visibility", "visible");
    } else {
      $(".home").find(".navbar").css("visibility", "hidden");
    }
  }
});

$(".navbar-pills").waypoint(function(direction) {
  if (window.innerWidth > 768) {
    if(direction == "down") {
      $(".home").find(".navbar").css("visibility", "visible");
    } else {
      $(".home").find(".navbar").css("visibility", "hidden");
    }
  }
});
