var $target = false;
var $nav_status = "hidden";

$(window).resize(function () { 
  if (window.innerWidth <= 992) {
    $(".navbar").css("top", "0");
  } else {
    if($nav_status == "hidden") {
      $(".navbar").css("top", "-52px");
    } else {
      $(".navbar").css("top", "0");
    }
  }
});

$(".about").waypoint(function(direction) {
  if (window.innerWidth > 992) {
    if(direction == "down") {
      $(".navbar").css("top", "0");
      $nav_status = "shown";
    } else {
      $(".navbar").css("top", "-52px");
      $nav_status = "hidden";
    }
  } else {
    if(direction == "down") {
      $nav_status = "shown";
    } else {
      $nav_status = "hidden";
    }
  }
}, { offset: 50 });

$(".about").waypoint(function(direction) {
  if(!$target) {
    if(direction == "down") {
      $(".navbar").find("li:contains('About')").addClass("active");
      $(".navbar").find('li:contains("Home")').removeClass("active");
    } else {
      $(".navbar").find("li:contains('About')").removeClass("active");
      $(".navbar").find('li:contains("Home")').addClass("active");
    }
  } else if($target == "Home" && direction == "up") {
    $target = false;
  } else if($target == "Services" && direction == "down") {
    $target = false;
  } else if($target == "About") {
    $target = false;
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
  } else if($target == "Services") {
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
  } else if($target == "Portfolio") {
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
  } else if($target == "Our team") {
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
  } else if($target == "Contact") {
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
  $(".navbar").find("li").removeClass("active");
  $(".navbar").find('li:contains("'+$target+'")').addClass("active");
});