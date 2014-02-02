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
}, { offset: 51 });

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
}, { offset: 250 });

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
}, { offset: 250 });

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
}, { offset: 250 });

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
}, { offset: 250 });

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
}, { offset: 250 });

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

$(".service.img-right").waypoint(function(){
  if (window.innerWidth > 992) {
    $(this).find('img').css({"left": "0", "opacity": "1"});
    $(this).find('.well').css({"right": "0", "opacity": "1"});
  }
}, { offset: 500 });

$(".service.img-left").waypoint(function(){
  if (window.innerWidth > 992) {
    $(this).find('img').css({"right": "0", "opacity": "1"});
    $(this).find('.well').css({"left": "0", "opacity": "1"});
  }
}, { offset: 500 });

$(".service").waypoint(function(){
  if (window.innerWidth <= 992) {
    $(this).find('img').css({"top": "0", "opacity": "1"});
    $(this).find('.well').css({"top": "0", "opacity": "1"});
  }
}, { offset: 500 });

$(".about").waypoint(function() {
  $(this).find('.prim-well').css({"opacity": "1", "left": "0"});
  $(this).find('.about-img').css({"opacity": "1", "top": "0"});
  $(this).find('.about-icon').css({"opacity": "1", "top": "0"});
}, { offset: 100 });

$("section").find(".section-footer-bg").waypoint(function() {
  $(this).find('.section-footer').css("opacity", "1");
}, { offset: 300 });

$(".team").waypoint(function() {
  $(this).find(".container").css({"opacity": "1", "transform": "scale(1,1)"});
}, { offset: 150 });

$(".clients").waypoint(function() {
  $(this).find(".client").css({"opacity": "1", "transform": "scale(1,1)"});
}, { offset: 300 });

$(".contact").waypoint(function() {
  $(this).find(".panel").css("opacity", "1");
}, { offset: 200 });