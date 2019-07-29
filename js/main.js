jQuery(document).ready(function() {

  "use strict";

  $(window).scroll(function() {
    let top = $(window).scrollTop();
    if(top >= 60) {
      $("nav").addClass('sticky');
    } else {
      $("nav").removeClass('sticky');
    }
  });

  $('.portfolio-carousel').carouFredSel({
    responsive: true,
    width: '100%',
    circular: true,
    prev: '#prev',
    next: '#next',
    scroll: {
      items: 1,
      duration: 500,
      pauseOnHover: true
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 4
      },
      height: "variable"
    }
  });

  $('.team-carousel').carouFredSel({
    responsive: true,
    width: '100%',
    circular: true,
    prev: '#team-prev',
    next: '#team-next',
    scroll: {
      items: 1,
      duration: 500,
      pauseOnHover: true
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 4
      },
      height: "variable"
    }
  });

  $('.testimonials-carousel').carouFredSel({
    responsive: true,
    width: '100%',
    circular: true,
    scroll: {
      items: 1,
      duration: 500,
      pauseOnHover: true
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 1
      },
      height: "variable"
    },
    pagination: {
      container: '.testipager',
      anchorBuilder: false
    }
  });

  $('.animation').each(function() {
    var waypoint = new Waypoint({
      element: this,
      handler: function(direction) {
        var animation = $(this.element).attr('data-animation');
        $(this.element).css('opacity','1');
        $(this.element).addClass("animated " + animation);
      },
      offset: '75%' 
    })
  });

  // For Smooth Scrolling
  $('a').smoothScroll();

});