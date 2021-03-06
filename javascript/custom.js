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

      if ($(window).width() < 1024) {
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

      if ($(window).width() < 1184) {
        $(".col_large").remove().insertAfter($(".col_last"));
      } else {
        $(".col_large").remove().insertBefore($(".col_last"));
      }

      $(window).resize(function() {
        if ($(window).width() < 1024) {
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

        if ($(window).width() < 1184) {
          $(".col_large").remove().insertAfter($(".col_last"));
        } else {
          $(".col_large").remove().insertBefore($(".col_last"));
        }
      })
    }

  };

  $(document).ready( app.documentOnReady.init );
})(jQuery);