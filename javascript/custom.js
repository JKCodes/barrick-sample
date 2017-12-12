var app = {};

(function($) {

  app.body = {
    init: function(){
      app.body.shrinkMenu();
      app.body.toggleMenu();
    },

    shrinkMenu: function() {
      $(document).on("scroll", function(){
        if
          ($(document).scrollTop() > 100){
          $("header").addClass("shrink");
        }
        else
        {
          $("header").removeClass("shrink");
        }
      });
    },

    toggleMenu: function() {
      $("#menu-trigger").click(function() {
        $("#menu-trigger").toggleClass("clicked");
        $("#logo").toggleClass("show");
        $("#main-nav").toggleClass("show");
        $("#proxy").toggleClass("show");
        $("#annual").toggleClass("show");
        $("header .button").toggleClass("show");
      })
    }
  };

  app.documentOnReady = {

    init: function(){
      app.body.init();
      app.documentOnReady.windowscroll();
      app.documentOnReady.responsive();
    },

    windowscroll: function(){
      $(window).on('scroll', function(){
        app.body.shrinkMenu();
      });
    },

    responsive: function() {

      if (($(window).width() < 977) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $("#menu-trigger").addClass("show")
        $("#main-nav").removeClass("show")          
      } else {
        $("#menu-trigger").removeClass("show")
        $("#main-nav").addClass("show")
        $("#logo").addClass("show")
        $("#proxy").addClass("show");
        $("#annual").addClass("show");
        $("header .button").addClass("show");
      }

      if(  ) {
 

      $(window).resize(function() {
        if (($(window).width() < 977) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
          if (!$("#menu-trigger").hasClass("clicked")) {
            $("#menu-trigger").addClass("show");
            $("#main-nav").removeClass("show")
          } else {
            $("#menu-trigger").addClass("show");
            $("#logo").removeClass("show");
            $("#proxy").removeClass("show");
            $("#annual").removeClass("show");
            $("header .button").removeClass("show");
          }
        } else {
          $("#menu-trigger").removeClass("show")
          $("#main-nav").addClass("show")
          $("#logo").addClass("show")
          $("#proxy").addClass("show");
          $("#annual").addClass("show");
          $("header .button").addClass("show");
        }
      })
    }

  };

  $(document).ready( app.documentOnReady.init );
})(jQuery);