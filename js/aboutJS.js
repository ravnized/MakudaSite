$.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function ($) {
    $(".counter-count").each(function (index) {
        if ($(this).isInViewport()) {
            $(this)
                .prop("Counter", 0)
                .animate(
                    {
                        Counter: $(this).text(),
                    },
                    {
                        duration: 1000,

                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        },
                    }
                );
        }
    });

    var images = $(".imagesStudio");
    images.mousemove(function (e) {
        var timeline = gsap.timeline();
        var offset = $(this).offset();
        var relativeX = e.pageX - offset.left;
        var relativeY = e.pageY - offset.top;
        var cX = $(this).width() / 2;
        var cY = $(this).height() / 2;
        console.log(relativeX, relativeY);
        console.log(cX, cY);
        var cxRelative = (cX - relativeX) / 20;
        var cyRelative = (cY - relativeY) / 20;
        timeline.to($(this).parent(), {
            duration: 0.2,
            rotateX: cyRelative,
            rotateY: cxRelative,
        });
    });
    images.mouseleave(function (event) {
        var timeline = gsap.timeline();

        timeline.to($(this).parent(), {duration: 1, rotateX: 0, rotateY: 0});
    });
    var alreadyClicked = false;
});
