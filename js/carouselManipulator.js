$(document).ready(function ($) {
    var currentSlideIDReview = 1;
    var currentSlideIDVideo = 1;
    var carouselFinderReview = $('#carousel1');
    var carouselFinderVideo = $('#carousel2');
    var sliderNavigationPrevious = carouselFinderReview.find('.slider-navigation-previous');
    var sliderNavigationNext = carouselFinderReview.find('.slider-navigation-next');
    var sliderNavigationPrevious2 = carouselFinderVideo.find('.slider-navigation-previous');
    var sliderNavigationNext2 = carouselFinderVideo.find('.slider-navigation-next');

    sliderNavigationNext2.click(function (event) {
        event.preventDefault();
        currentSlideIDVideo += 1;
        videoNextPrevious();
    })

    sliderNavigationPrevious2.click(function (event) {
        event.preventDefault();
        currentSlideIDVideo -= 1;
        videoNextPrevious();
    })

    sliderNavigationNext.click(function (event) {
        event.preventDefault();
        currentSlideIDReview += 1;
        reviewNextPrevious();
    })

    sliderNavigationPrevious.click(function (event) {
        event.preventDefault();
        currentSlideIDReview -= 1;
        reviewNextPrevious();
    })

    function reviewNextPrevious() {
        var currentSlideReview = carouselFinderReview.find('[data-slider-index="' + currentSlideIDReview + '"]');
        var previousSlideIDReview = currentSlideIDReview - 1;
        var previousSlideReview = carouselFinderReview.find('[data-slider-index="' + previousSlideIDReview + '"]');
        var nextSlideIDReview = currentSlideIDReview + 1;
        var nextSlideReview = carouselFinderReview.find('[data-slider-index="' + nextSlideIDReview + '"]');
        var elementTestimonial = currentSlideReview.find('.makuda-testimonials-item');
        var elementTestimonialGradient = currentSlideReview.find('.testimonials-gradient');
        var elementTestimonialPrevious = previousSlideReview.find('.makuda-testimonial-item');
        var elementTestimonialGradientPrevious = previousSlideReview.find('.testimonials-gradient');
        var elementTestimonialNext = nextSlideReview.find('.makuda-testimonial-item');
        var elementTestimonialGradientNext = nextSlideReview.find('.testimonials-gradient');
        elementTestimonialGradient.removeClass('testimonial-prima');
        elementTestimonialGradient.removeClass('testimonial-dopo');
        elementTestimonialGradientPrevious.addClass("testimonial-prima");
        elementTestimonialGradientNext.addClass("testimonial-dopo");
    }

    function videoNextPrevious() {
        var currentSlideVideo = $('[data-slider-index="' + currentSlideIDVideo + '"]');
        var previousSlideIDVideo = currentSlideIDVideo - 1;
        var previousSlideVideo = $('[data-slider-index="' + previousSlideIDVideo + '"]');
        var nextSlideIDVideo = currentSlideIDVideo + 1;
        var nextSlideVideo = $('[data-slider-index="' + nextSlideIDVideo + '"]');
        var elementVideo = currentSlideVideo.find('video');
        var elementGradient = currentSlideVideo.find('.gradient-video');
        var elementVideoPrevious = previousSlideVideo.find('video');
        var elementGradientPrevious = previousSlideVideo.find('.gradient-video');
        var elementVideoNext = nextSlideVideo.find('video');
        var elementGradientNext = nextSlideVideo.find('.gradient-video');
        console.log('current: ' + currentSlideIDVideo)
        console.log('previous: ' + previousSlideIDVideo)
        console.log('next: ' + nextSlideIDVideo)
        elementVideo[0].play();
        elementGradient.removeClass('video-prima');
        elementGradient.removeClass('video-dopo');
        if (elementVideoPrevious.length) {
            elementVideoPrevious[0].pause();
        }
        if (elementVideoNext.length) {
            elementVideoNext[0].pause();
        }
        elementGradientPrevious.addClass("video-prima");
        elementGradientNext.addClass("video-dopo");
    }

    videoNextPrevious();
    reviewNextPrevious();


});