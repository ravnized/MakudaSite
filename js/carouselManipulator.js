var currentSlideIDReview = 1;
var currentSlideIDVideo = 1;
var carouselFinderReview = $("#carousel1");
var carouselFinderVideo = $("#carousel2");
var sliderNavigationPrevious = carouselFinderReview.find(
  ".slider-navigation-previous"
);
var sliderNavigationNext = carouselFinderReview.find(".slider-navigation-next");
var sliderNavigationPrevious2 = carouselFinderVideo.find(
  ".slider-navigation-previous"
);
var sliderNavigationNext2 = carouselFinderVideo.find(".slider-navigation-next");

sliderNavigationNext2.click(function (event) {
  event.preventDefault();
  currentSlideIDVideo += 1;
  videoNextPrevious();
});

sliderNavigationPrevious2.click(function (event) {
  event.preventDefault();
  currentSlideIDVideo -= 1;
  videoNextPrevious();
});

sliderNavigationNext.click(function (event) {
  event.preventDefault();
  currentSlideIDReview += 1;
  reviewNextPrevious();
});

sliderNavigationPrevious.click(function (event) {
  event.preventDefault();
  currentSlideIDReview -= 1;
  reviewNextPrevious();
});

function reviewNextPrevious() {
  var tl = gsap.timeline();
  var currentSlideReview = carouselFinderReview.find(
    '[data-slider-index="' + currentSlideIDReview + '"]'
  );
  var previousSlideIDReview = currentSlideIDReview - 1;
  var previousSlideReview = carouselFinderReview.find(
    '[data-slider-index="' + previousSlideIDReview + '"]'
  );
  var nextSlideIDReview = currentSlideIDReview + 1;
  var nextSlideReview = carouselFinderReview.find(
    '[data-slider-index="' + nextSlideIDReview + '"]'
  );
  var elementTestimonial = currentSlideReview.find(".wrapper-testimonial");
  var elementTestimonialGradient = currentSlideReview.find(
    ".testimonials-gradient"
  );
  var elementTestimonialPrevious = previousSlideReview.find(
    ".wrapper-testimonial"
  );
  var elementTestimonialGradientPrevious = previousSlideReview.find(
    ".testimonials-gradient"
  );
  var elementTestimonialNext = nextSlideReview.find(".wrapper-testimonial");
  var elementTestimonialGradientNext = nextSlideReview.find(
    ".testimonials-gradient"
  );
  tl.to($(elementTestimonial), { duration: 1, scaleX: 1, scaleY: 1 }, 0);
  if (elementTestimonialPrevious.length !== 0) {
    if($(window).width() >= 1024) {
      tl.to(
          $(elementTestimonialPrevious),
          {duration: 1, scaleX: 0.7, scaleY: 0.7, transformOrigin: 'right'},
          0
      );
    }
  }
  if (elementTestimonialNext.length !== 0) {
    if($(window).width() >= 1024) {
      tl.to(
          $(elementTestimonialNext),
          {duration: 1, scaleX: 0.7, scaleY: 0.7, transformOrigin: 'left'},
          0
      );
    }
  }

  elementTestimonialPrevious.parent().addClass("testimonial-prima");
  elementTestimonialNext.parent().addClass("testimonial-dopo");
  elementTestimonial.parent().removeClass("testimonial-prima");
  elementTestimonial.parent().removeClass("testimonial-dopo");
}
reviewNextPrevious();

function videoNextPrevious() {
  var tl = gsap.timeline();
  var currentSlideVideo = $(
    '[data-slider-index="' + currentSlideIDVideo + '"]'
  );
  var previousSlideIDVideo = currentSlideIDVideo - 1;
  var previousSlideVideo = $(
    '[data-slider-index="' + previousSlideIDVideo + '"]'
  );
  var nextSlideIDVideo = currentSlideIDVideo + 1;
  var nextSlideVideo = $('[data-slider-index="' + nextSlideIDVideo + '"]');
  var elementVideo = currentSlideVideo.find(".cardinoVideo");
  var elementGradient = currentSlideVideo.find(".gradient-video");
  var elementVideoPrevious = previousSlideVideo.find(".cardinoVideo");
  var elementGradientPrevious = previousSlideVideo.find(".gradient-video");
  var elementVideoNext = nextSlideVideo.find(".cardinoVideo");
  var elementGradientNext = nextSlideVideo.find(".gradient-video");
  console.log("current: " + currentSlideIDVideo);
  console.log("previous: " + previousSlideIDVideo);
  console.log("next: " + nextSlideIDVideo);
  tl.to($(elementVideo), { duration: 1, scaleX: 1, scaleY: 1 }, 0);
  if (elementVideoPrevious.length != 0) {
    if($(window).width() >= 1024){
      tl.to(
          $(elementVideoPrevious),
          { duration: 1, scaleX: 0.7, scaleY: 0.7 },
          0
      );
    }

  }
  if (elementVideoNext.length != 0) {
    if($(window).width() >= 1024) {
      tl.to($(elementVideoNext), {duration: 1, scaleX: 0.7, scaleY: 0.7}, 0);
    }
  }
}
