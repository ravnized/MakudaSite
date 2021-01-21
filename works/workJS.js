$(function () {
    var tl = gsap.timeline();
    $(".descVideo").css({display: "block"});
    tl.to('.workListItem', {duration: 0.5, opacity: 1});
    tl.to(window, {duration: 0.5, scrollTo: {x: 0, y: 0}});
});
gsap.registerPlugin(CSSRulePlugin);
$(".img-slide").on("mouseenter", function () {
    $(".img-slide").css("opacity", "60%");
    $(this).css("opacity", 1);
});
$(".img-slide").on("mouseleave", function () {
    $(".img-slide").css("opacity", 1);
});
$(window).on("scroll", function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    //     var animatedPhone = $(".gif-cellulari").attr("data-animated");
    //     if(s + c > parseInt($(".gif-cellulari").offset().top) && animatedPhone == "true"){
    //         $(".gif-cellulari").attr("data-animated", "false");
    //         gsap.fromTo(
    //             "#video2",
    //             {
    //               opacity: 0,
    //             },
    //             {
    //               opacity: 1,
    //               duration: 1,
    //               delay: 0.5
    //             },
    //           );
    //         // gsap.fromTo(
    //         //     ".gif-cellulare:nth-child(even)",
    //         //     {
    //         //         opacity: 0,
    //         //     },
    //         //     {
    //         //         duration: 3,
    //         //         opacity: 1,
    //         //         delay: 0.5
    //         //     },
    //         // );
    //     }
});
$(".image-div").on("click", function () {
    $(".full-screen-carousel").css("display", "block");
    $(".full-screen-carousel-image#" + $(this).attr("id")).addClass("selected");
    disableScroll();
    setTimeout(() => {
        $(".full-screen-carousel").addClass("open");
    }, 100);
});
$(".full-screen-carousel-background, .full-screen-carousel-container , .cross").on(
    "click",
    function () {
        $(".full-screen-carousel").removeClass("open");
        $(".full-screen-carousel-image.selected").removeClass("selected");
        enableScroll();
        setTimeout(() => {
            $(".full-screen-carousel").css("display", "none");
        }, 1000);
    }
);
$(".full-screen-carousel-control").on("click", function () {
    let selected = $(".full-screen-carousel-image.selected");
    let selectedIndex = selected.index();
    let totalIndexes = $(".full-screen-carousel-image").length;
    let newIndex = selectedIndex + 1;
    if ($(this).hasClass("left")) {
        newIndex = selectedIndex - 1;
    }
    newIndex = newIndex == -1 ? totalIndexes - 1 : newIndex;
    newIndex = newIndex == totalIndexes ? 0 : newIndex;
    newIndex++;
    $(".full-screen-carousel-image.selected").removeClass("selected");
    $(".full-screen-carousel-image:nth-child(" + newIndex + ")").addClass(
        "selected"
    );
});
var tl = gsap.timeline();
if ($(".gif-firstSection").length !== 0) {
    tl.set($(".gif-firstSection"), {
        css: {
            marginTop: 220,
            scale: 1.2,
            opacity: 0,
        }

    })
}


$('#buttonLeft').on('click',function(e){
    var timeline = gsap.timeline();
    let url = $(this).attr("data-link");
    timeline.to('footer',{
        duration: 0.5,
        y: '+100%',
        },0);
    timeline.to('.pubblicazione-social',{
        duration: 0.5,
        x: '+100%',
    },0)
    timeline.to('nav',{
        duration: 0.5,
        y: '-100%',
    },0)
    timeline.add(function(){
        console.log('redirect');
        window.location.href = url;
    },1)
})
$('#buttonRight').on('click',function(e){
    var timeline = gsap.timeline();
    let url = $(this).attr("data-link");
    timeline.to('footer',{
        duration: 0.5,
        y: '+100%',
    },0);
    timeline.to('.pubblicazione-social',{
        duration: 0.5,
        x: '-100%',
    },0)
    timeline.to('nav',{
        duration: 0.5,
        y: '-100%',
    },0)
    timeline.add(function(){
        console.log('redirect');
        window.location.href = url;
    },1)
})


$(window).on("scroll resize", async function () {
        if ($(".separator-yellow").length !== 0) {
            console.log('separator')
            $(".separator-yellow").css("height", $(".works-band").height() - $(".gif-zoda").position().top + "px");

        }


        if ($(".gif-firstSection").length !== 0) {
            if (($(".gif-firstSection").isOnScreen())) {


                tl.to($(".gif-firstSection"),
                    {
                        duration: 0.8,
                        css: {

                            marginTop: 0,
                            scale: 1,
                            opacity: 1,
                        },
                        ease: 'expo.out'
                    })
            }
        }

        if ($(".gif-photo").length !== 0) {
            var children = $(".gif-photo").children();
            Array.prototype.forEach.call(children, element => {
                if (($(element).isOnScreen())) {

                    gsap.to($(element),
                        {
                            duration: 2,
                            css: {

                                marginTop: 0,
                                scale: 1,
                                opacity: 1,
                            },
                            ease: 'expo.out'
                        })
                }
            });

        }

        if ($(".gif-cellulari").length !== 0) {
            if (($(".gif-cellulari").isOnScreen())) {
                console.log('aa')
                animateCustom(
                    $(".gif-cellulari .column:eq(1)"),
                    850,
                    {"margin-top": "0"},
                    "easeOutCubic",
                    true
                );
                await animateFadeIn($(".gif-cellulari .column:eq(1)"), 500);
                animateFadeIn($(".gif-cellulari .column:eq(0)"), 500);
                animateCustom(
                    $(".gif-cellulari .column:eq(0)"),
                    850,
                    {"margin-top": "0"},
                    "easeOutCubic",
                    true
                );
                $(".gif-cellulari .column:eq(0)").css("transform", "scale(1)");
                animateFadeIn($(".gif-cellulari .column:eq(2)"), 500);
                animateCustom(
                    $(".gif-cellulari .column:eq(2)"),
                    850,
                    {"margin-top": "0"},
                    "easeOutCubic",
                    true
                );
                $(".gif-cellulari .column:eq(2)").css("transform", "scale(1)");
            }
        }


        if ($(".gif-zoda").length !== 0) {
            if (($(".gif-zoda").isOnScreen())) {

                animateCustom(
                    $(".gif-zoda .column:eq(1)"),
                    850,
                    {"margin-top": "0"},
                    "easeOutCubic",
                    true
                );
                $(".gif-zoda .gif-cellulare").css("background", "transparent");
                await animateFadeIn($(".gif-zoda .column:eq(1)"), 500);
                animateFadeIn($(".gif-zoda .column:eq(0)"), 500);
                animateCustom(
                    $(".gif-zoda .column:eq(0)"),
                    850,
                    {"margin-top": "0"},
                    "easeOutCubic",
                    true
                );
                $(".gif-zoda .column:eq(0)").css("transform", "scale(1)");
                animateFadeIn($(".gif-zoda .column:eq(2)"), 500);
                animateCustom(
                    $(".gif-zoda .column:eq(2)"),
                    850,
                    {"margin-top": "0"},
                    "easeOutCubic",
                    true
                );
                $(".gif-zoda .column:eq(2)").css("transform", "scale(1)");
                animateFadeIn($(".gif-zoda .column:eq(0)"), 500);
                animateFadeIn($(".parallax-image"), 500);
            }
        }

    }
);

/*
$(window).on("scroll resize", async function () {
    if (isScrolledIntoView($(".gif-photo"), false, 0)) {

        var children = $(".gif-photo").children();

        for (var i = 0; i < children.length; i++) {
            console.log(children[i])
            animateFadeIn($(children[i]), 500);
            animateCustom(
                $(children[i]),
                850,
                {"margin-top": "0"},
                "easeOutCubic",
                true
            );
            $(children[i]).css("transform", "scale(1)");

        }


    }
});
*/
