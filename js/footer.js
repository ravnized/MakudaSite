$(document).ready(function () {
    var footerAnimation = false;

    $(window).on("scroll resize", function() {    
        if (!footerAnimation && isScrolledIntoView($("footer .container"), false, 150))
        {
            footerAnimation = true;
            animateFadeIn($("#get-in-touch"), 250, AnimationDirection.top, {bottom: "54px"});

            setTimeout(function () {
                animateFadeIn($("#main-block-footer"), 250, AnimationDirection.top);
            }, 250);
        }
    });
});