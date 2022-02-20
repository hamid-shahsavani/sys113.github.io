/* --------------------------------------------------if load complete and show website ---------------------------------------- */
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
    $('body').addClass('loaded');
    $('body').css({"overflow":"visible"});
  }
}

/* --------------------------------------------------- notification close button ---------------------------------------------- */

jQuery(document).ready(function () {
  jQuery(".toast__close").click(function (e) {
    e.preventDefault();
    var parent = $(this).parent(".toast");
    parent.fadeOut("slow", function () {
      $(this).remove();
    });
  });
});

/* ------------------------------------------------------ comment slider slider --------------------------------------------------- */

var swiper = new Swiper(".blog-slider", {
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

/* ----------------------------------------------------------------- home background animation ------------------------------------------------- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 88,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 15,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0.15,
        sync: false,
      },
    },
    size: {
      value: 2.5,
      random: false,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.15,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: "#33b1f8",
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// ------------------------------------------- active sidebar item in scroll by element id -------------------------------------------

var $topOffset = [],
  $section = $(".section");

$(window)
  .resize(function () {
    $topOffset = [];
    $.each($section, function () {
      $topOffset.push($(this).offset().top);
    });
  })
  .trigger("resize");

$(window)
  .scroll(function () {
    var $browserTop = $(window).scrollTop();

    $.each($section, function (i) {
      if (
        $browserTop >= $topOffset[i] &&
        $browserTop < $topOffset[i] + $(this).height()
      ) {
        $(this).addClass("active");
        $('a[href^="#' + this.id + '"]').addClass("active");
      } else {
        $(this).removeClass("active");
        $('a[href^="#' + this.id + '"]').removeClass("active");
      }
    });
  })
  .trigger("scroll");

// ------------------------------------------------------- animation button to get element ------------------------------------------------------------

$("#scroll-down-to-comment").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#comment").offset().top,
    },
    0
  );
});

contributers;

$("#scroll-down-to-contributers").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contributers").offset().top,
    },
    0
  );
});

$("#scroll-down-to-main-category").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#main-category").offset().top,
    },
    0
  );
});

// ----------------------------------------------------------- contributers slider ----------------------------------------------------------------------

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  autoplay: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 270,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});