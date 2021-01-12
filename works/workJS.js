$(function () {
    var tl = gsap.timeline();
    $(".descVideo").css({display: "block"});
    tl.to(window, {duration: 0.5, scrollTo: {x: 0, y: 0}})
    // tl.to(".tVideo", {x: 0, autoAlpha: 1}, "animationStart");
    // tl.to(".subVideo", {x: 0, autoAlpha: 1}, "animationStart");
    // tl.to(
    //     ".descVideo",
    //     {
    //         y: 0,
    //         autoAlpha: 1,
    //         blur: 0,
    //     },
    //     "animationStart"
    // );
});
gsap.registerPlugin(CSSRulePlugin);
$(window).on("scroll", function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        
    var animatedPhone = $(".gif-cellulari").attr("data-animated");
    if(s + c > parseInt($(".gif-cellulari").offset().top) && animatedPhone == "true"){
        $(".gif-cellulari").attr("data-animated", "false");
        gsap.fromTo(
            "#video2",
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 1,
              delay: 0.5
            },
          );
        // gsap.fromTo(
        //     ".gif-cellulare:nth-child(even)",
        //     {
        //         opacity: 0,
        //     },
        //     {
        //         duration: 3,
        //         opacity: 1,
        //         delay: 0.5
        //     },
        // );
    }
});