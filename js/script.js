var $target = false;

$(window).resize(function () { 
  if (window.innerWidth <= 992) {
    $(".navbar").css("display", "block");
  } else {
    if ( $(window).scrollTop() >= 100 ) {
      $(".navbar").css("display", "block");
    } else {
      $(".navbar").css("display", "none");
    }
  }
});

$(".about").waypoint(function(direction) {
  if (window.innerWidth > 992) {
    if(direction == "down") {
      $(".navbar").fadeToggle();
    } else {
      $(".navbar").fadeToggle();
    }
  }
}, { offset: 50 });

$(".about").waypoint(function(direction) {
  if(!$target) {
    if(direction == "down") {
      $(".navbar").find("li:contains('About')").addClass("active");
    } else {
      $(".navbar").find("li:contains('About')").removeClass("active");
    }
  }
}, { offset: 200 });

$(".services").waypoint(function(direction) {
  if(!$target) {
    if(direction == "down") {
      $(".navbar").find("li:contains('About')").removeClass("active");
      $(".navbar").find("li:contains('Services')").addClass("active");
    } else {
      $(".navbar").find("li:contains('Services')").removeClass("active");
      $(".navbar").find("li:contains('About')").addClass("active");
    }
  } else if($target == "About" && direction == "up") {
    $target = false;
  } else if($target == "Portfolio" && direction == "down") {
    $target = false;
  }
}, { offset: 200 });

$(".portfolio").waypoint(function(direction) {
  if(!$target) {
    if(direction == "down") {
      $(".navbar").find("li:contains('Services')").removeClass("active");
      $(".navbar").find("li:contains('Portfolio')").addClass("active");
    } else {
      $(".navbar").find("li:contains('Portfolio')").removeClass("active");
      $(".navbar").find("li:contains('Services')").addClass("active");
    }
  } else if($target == "Services" && direction == "up") {
    $target = false;
  } else if($target == "Our team" && direction == "down") {
    $target = false;
  }
}, { offset: 200 });

$(".team").waypoint(function(direction) {
  if(!$target) {
    if(direction == "down") {
      $(".navbar").find("li:contains('Portfolio')").removeClass("active");
      $(".navbar").find("li:contains('Our team')").addClass("active");
    } else {
      $(".navbar").find("li:contains('Our team')").removeClass("active");
      $(".navbar").find("li:contains('Portfolio')").addClass("active");
    }
  } else if($target == "Portfolio" && direction == "up") {
    $target = false;
  } else if($target == "Contact" && direction == "down") {
    $target = false;
  }
}, { offset: 200 });

$(".contact").waypoint(function(direction) {
  if(!$target) {
    if(direction == "down") {
      $(".navbar").find("li:contains('Our team')").removeClass("active");
      $(".navbar").find("li:contains('Contact')").addClass("active");
    } else {
      $(".navbar").find("li:contains('Contact')").removeClass("active");
      $(".navbar").find("li:contains('Our team')").addClass("active");
    }
  } else if($target == "Our team" && direction == "up") {
    $target = false;
  }
}, { offset: 200 });

$(".navbar").find("li").click(function() {
  if(!$(this).hasClass("active")) {
    $(".navbar").find("li").removeClass("active");
    $(this).addClass("active");
    $target = $(this).find('a').text();
  }
});

$(".nav-pills").find("li").click(function() {
  $target = $(this).find('a').text();
  $(".navbar").find('li:contains("'+$target+'")').addClass("active");
});