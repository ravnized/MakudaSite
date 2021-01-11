$(function () {
    var tl = gsap.timeline();
    $(".descVideo").css({display: "block"});
    tl.to('.workListItem',{duration: 0.5, opacity: 1})
    tl.to(window, {duration: 0.5, scrollTo: {x: 0, y: 0}})
    tl.to(".tVideo", {x: 0, autoAlpha: 1}, "animationStart");
    tl.to(".subVideo", {x: 0, autoAlpha: 1}, "animationStart");
    tl.to(
        ".descVideo",
        {
            y: 0,
            autoAlpha: 1,
            blur: 0,
        },
        "animationStart"
    );
})