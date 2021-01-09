function isScrolledIntoView (element, fullyInView, offset = 0) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.height();

    if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
    } else {
        return ((elementTop + offset <= pageBottom) && (elementBottom >= pageTop));
    }
}

function animateFadeIn(element, time, direction = null, margins = {top: 0, left: 0, bottom: 0, right: 0})
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
        element.animate({"opacity" : "1"}, time);
    else if (direction == AnimationDirection.top)
        element.animate({
            "opacity" : "1",
            "margin-top" : margins.top,
            "margin-bottom" : margins.bottom
        }, time);
    else if (direction == AnimationDirection.left)
        element.animate({
            "opacity" : "1",
            "margin-left" : margins.left,
            "margin-right" : margins.right
        }, time);
    else if (direction == AnimationDirection.bottom)
        element.animate({
            "opacity" : "1",
            "margin-top" : margins.top,
            "margin-bottom" : margins.bottom
        }, time);
    else if (direction == AnimationDirection.right)
        element.animate({
            "opacity" : "1",
            "margin-left" : margins.left,
            "margin-right" : margins.right
        }, time);
}

const AnimationDirection = {
    top: 0,
    left: 1,
    bottom: 2,
    right: 3,
};