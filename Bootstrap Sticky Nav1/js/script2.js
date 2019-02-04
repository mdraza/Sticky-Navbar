$(function() {
    "use strict";
    //   Navbar
      $(window).on("scroll", function() {
        var t = $(".navbar");
        $(window).scrollTop() >= t.height() ? t.addClass("nav-scroll") : t.removeClass("nav-scroll")
    })
    });
    // End   
        