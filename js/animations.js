function isScrolledIntoView (element, fullyInView, offset = 0) {
    let pageTop = $(window).scrollTop();
    let pageBottom = pageTop + $(window).height();
    let elementTop = element.offset().top;
    let elementBottom = elementTop + element.height();

    if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
    } else {
        return ((elementTop + offset <= pageBottom) && (elementBottom >= pageTop));
    }
}

function animateFadeIn(element, time, direction = null, margins = {top: 0, left: 0, bottom: 0, right: 0}, easing = "easeOutExpo", queue = false)
{
    if (margins.top == undefined)
        margins.top = 0;
    if (margins.left == undefined)
        margins.left = 0;
    if (margins.right == undefined)
        margins.right = 0;
    if (margins.bottom == undefined)
        margins.bottom = 0;

    if (direction == null)
        element.animate({"opacity" : "1"}, {
            duration: time,
            queue: queue
        });
    else if (direction == AnimationDirection.top)
        element.animate({
            "opacity" : "1",
            "margin-top" : margins.top,
            "margin-bottom" : margins.bottom
        }, {
            duration: time,
            easing: easing,
            queue: queue
        });
    else if (direction == AnimationDirection.left)
        element.animate({
            "opacity" : "1",
            "margin-left" : margins.left,
            "margin-right" : margins.right
        }, {
            duration: time,
            easing: easing,
            queue: queue
        });
    else if (direction == AnimationDirection.bottom)
        element.animate({
            "opacity" : "1",
            "margin-top" : margins.top,
            "margin-bottom" : margins.bottom
        }, {
            duration: time,
            easing: easing,
            queue: queue
        });
    else if (direction == AnimationDirection.right)
        element.animate({
            "opacity" : "1",
            "margin-left" : margins.left,
            "margin-right" : margins.right
        }, {
            duration: time,
            easing: easing,
            queue: queue
        });
}

function animateFadeOut(element, time, direction = null, margins = {top: 0, left: 0, bottom: 0, right: 0}, easing = "easeOutExpo", queue = false)
{
    if (margins.top == undefined)
        margins.top = 600;
    if (margins.left == undefined)
        margins.left = 800;
    if (margins.right == undefined)
        margins.right = 800;
    if (margins.bottom == undefined)
        margins.bottom = 600;

    if (direction == null)
        element.animate({"opacity" : "0"}, {
            duration: time,
            queue: queue
        });
    else if (direction == AnimationDirection.top)
        element.animate({
            "opacity" : "0",
            "margin-top" : -margins.top,
            "margin-bottom" : margins.bottom
        }, {
            duration: time,
            easing: easing,
            queue: queue
        });
    else if (direction == AnimationDirection.left)
        element.animate({
            "opacity" : "0",
            "margin-left" : -margins.left,
            "margin-right" : margins.right
        }, {
            duration: time,
            easing: easing,
            queue: queue
        });
    else if (direction == AnimationDirection.bottom)
        element.animate({
            "opacity" : "0",
            "margin-top" : margins.top,
            "margin-bottom" : -margins.bottom
        }, {
            duration: time,
            easing: easing,
            queue: queue
        });
    else if (direction == AnimationDirection.right)
        element.animate({
            "opacity" : "0",
            "margin-left" : margins.left,
            "margin-right" : -margins.right
        }, {
            duration: time,
            easing: easing,
            queue: queue
        });
}

function setElementForScrollDelay(element)
{
    elementsForScrollDelay.push({element: element, offset: element.offset().top});
}

const AnimationDirection = {
    top: 0,
    left: 1,
    bottom: 2,
    right: 3,
};

const elementsForScrollDelay = [];
var pos;

$(document).ready(function() {
    $(document).on("scroll", function() {
        elementsForScrollDelay.forEach(function (e) {
            pos = e.offset - $(window).scrollTop() - $(window).height();
            e.element.css({"top": pos + "px", "transform": "translateY(" + -pos + "px)"});
        });
    });
})