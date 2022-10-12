(function ($) {
  $(document).on('ready', function () {
    var db = new Object();
    db.preLoad = function () {
      $('.page-loader').delay(900).fadeOut(700, function () {
        $('body').fadeIn();
      });
    }
    db.menu = function () {
      $('.menu-icon').click(function () {
        $('body').toggleClass("open-menu");
      });
      $('.menu-mobile li.has-child a').click(function () {
        var content = $(this).parent().find("ul");
        if ($(content).is(":visible")) {
          $(content).slideUp();
          $(content).removeClass("active");
          $(this).removeClass("active");
        } else {
          $(content).slideDown();
          $(content).addClass("active");
          $(this).addClass("active");
        }
        return false;
      });



      function goToByScroll(id) {
        // Remove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
          scrollTop: $(id).offset().top
        }, 1200);
      }

      $(".menu > ul > li > a").click(function (e) {
        // Prevent a page reload when a link is pressed
        //e.preventDefault();
        // Call the scroll function
        //    goToByScroll($(this).attr("data-id"));
      });




      $(".landing-hero .button-brand").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("data-id"));
      });
      $(".monthly .button-second").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("data-id"));
      });
      $(".learn .button-brand").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("data-id"));
      });


    }


    db.sliderSkills = function () {
      if ($('.owl-skill').length) {
        $('.owl-skill').owlCarousel({
          loop: true,
          margin: 40,
          nav: true,
          autoplay: true,
          smartSpeed: 700,
          autoplayTimeout: 4000,
          navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 1,
              loop: true,
            },
            576: {
              items: 2,
              loop: true,
            },
            992: {
              items: 3,
              loop: true,
            },
            1299: {
              items: 4,
              loop: true,
            }
          }
        })

      }

    }






    db.preLoad();
    db.menu();
    db.sliderSkills();
  });
})(jQuery);
