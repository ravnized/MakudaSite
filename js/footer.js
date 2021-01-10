$(document).ready(function () {
    var footerAnimation = false;

    $(window).on("scroll resize", function() {    
        if (!footerAnimation && isScrolledIntoView($("footer .container"), false, 150))
        {
            footerAnimation = true;
            animateFadeIn($("#get-in-touch"), 400);

            setTimeout(function () {
                animateFadeIn($("#main-block-footer"), 400);
            }, 150);
        }
    });
});