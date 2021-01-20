var generalItem = $(".workBlockContainer"),
    imageVideo = generalItem.find(".imageVideo"),
    textVideo = generalItem.find("p"),
    workBlockImageSub = generalItem.find(".workBlockImageSub"),
    arrayListElement = $(".workListItem"),
    halfWindowHeight = 0,
    halfWindowWidth = 0,
    insideAWork = false;
let footer = $("footer");

$(function () {
    var workListItem = $($(".workListItem").get().reverse());
    gsap.to($(window), {duration: 0.5, scrollTo: 0}, 0);
    gsap.fromTo(
        workListItem,
        {
            opacity: 0,
        },
        {
            duration: 1,
            opacity: 1,
            delay: 0.5
        },
    );
    gsap.fromTo(
        ".workListItem:nth-child(1)",
        {
            y: 200,
        },
        {
            duration: 0.3,
            y: 0,
            delay: 0.5
        },
    );
    gsap.fromTo(
        ".workListItem:nth-child(2)",
        {
            y: 200,
        },
        {
            duration: 0.8,
            y: 0,
            delay: 0.5
        },
    );
    gsap.fromTo(
        ".workListItem:nth-child(3)",
        {
            y: 200,
        },
        {
            duration: 1.4,
            y: 0,
            delay: 0.5
        },
    );
    gsap.fromTo(
        ".progress_in",
        {
            height: 0,
        },
        {
            duration: 1.5,
            height: "80%",
            delay: 1.5
        },
    );
});
$(window).on("scroll", function () {

    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;
    $(".progress_in_selected").css("height", scrollPercent + "%");
    //NAPO
    var body = document.body,
        html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    if (s > height - $(window).height() - footer.height())
        $(".progress_wrap").css("bottom", s - (height - $(window).height() - footer.height()) + 100);
    else
        $(".progress_wrap").css("bottom", "0");
});

imageVideo.mousemove(function (e) {
    var timeline = gsap.timeline();
    var offset = $(this).offset();
    var relativeX = e.pageX - offset.left;
    var relativeY = e.pageY - offset.top;
    var cX = $(this).width() / 2;
    var cY = $(this).height() / 2;
    var cxRelative = (cX - relativeX) / 20;
    var cyRelative = (cY - relativeY) / 20;
    if (insideAWork === false) {
        timeline.to($(this).closest(".workBlockImageSub"), {
            duration: 0.5,
            rotateX: cyRelative,
            rotateY: cxRelative,
        });
        timeline.to(
            $(this).closest(".workBlock").find('.workBlockTitle'),
            {
                duration: 0.5,
                rotateX: cyRelative,
                rotateY: cxRelative,
                translateZ: 100,
            },
            "-=0.5"
        );
    }
});
imageVideo.mouseleave(function (event) {
    var timeline = gsap.timeline();

    timeline.to($(this).closest(".workBlockImageSub"), {
        duration: 1,
        rotateX: 0,
        rotateY: 0,
    });

    timeline.to(
        $(this).closest(".workBlock").find('.workBlockTitle'),
        {
            duration: 1,
            rotateX: 0,
            rotateY: 0,
            translateZ: 0,
        },
        "-=1"
    );
});

$(function () {
    var timeline = gsap.timeline({paused: true});
    var rule1 = CSSRulePlugin.getRule(".makuda-home-link--contacts:before");
    var rightBandSign = $('.rightBandSign');
    timeline.set('.blackScreenLeft', {zIndex: 10})
    timeline.fromTo(
        rule1,
        {
            duration: 0.5,
            width: 0 + '%',
        },
        {
            duration: 0.5,
            width: 100 + '%',
        }, 'start'
    );
    timeline.fromTo(
        '.blackScreenLeft',
        {
            delay: 0.1,
            duration: 0.5,
            opacity: 0,
        },
        {
            duration: 0.5,
            opacity: 1,
        }
        , 'start');


    rightBandSign.mouseover(
        function (e) {
            console.log('mouseover')
            timeline.play();
            $(".makuda-home-link").addClass(
                "is-hover"
            );
        }
    );
    rightBandSign.mouseleave(
        function (e) {
            console.log('mouseleave')
            timeline.reverse();
            $(".makuda-home-link").removeClass("is-hover"
            );
        }
    );


})

$(workBlockImageSub).one("click", function () {
    unloadScrollBars()
    let positionImageVideo = imageVideo.offset(),
        leftImagePos = positionImageVideo.left,
        topImagePos = $(".workListItem").offset().top,
        workListItem = $(this).closest('.workListItem'),
        workList = $(this).closest('.workList'),
        idElement = workListItem.attr("id"),
        imageHeight = $(this).height(),
        imageWidth = $(this).width(),
        arrayListElementHeight,
        totalHeight = 0,
        tl = gsap.timeline(),
        cycle = 0,
        topTotalHeight,
        centerImageLeft,
        scrollTop,
        url = $(this).find('a').attr("data-link");
    centerImageLeft = imageWidth / 2;
    arrayListElementHeight = $(arrayListElement[0]).height();
    scrollTop = $(window).scrollTop();
    while (idElement !== $(arrayListElement[cycle]).attr("id")) {
        totalHeight += $(arrayListElement[cycle]).height();
        cycle++;
    }
    topTotalHeight = totalHeight + topImagePos;
    tl.to(
        ".workBlockTitle",
        {duration: 0.5, css: {autoAlpha: 0}},
        0
    );
    tl.to("footer, .title, .progress_wrap, .full-screen-carousel-control, .makuda-home-link--contacts", {
        duration: 0.5,
        css: {autoAlpha: 0}
    }, 0);

    workListItem.css({top: totalHeight + "px"});
    workList.css({
        height: arrayListElementHeight * 2 + totalHeight + "px",
    });

    for (let i = 0; i < arrayListElement.length; i++) {
        if ($(arrayListElement[i]).attr("id") !== idElement) {
            tl.to(arrayListElement[i], {duration: 1, opacity: 0}, 0);
            $(arrayListElement[i]).remove();
        }
    }

    halfWindowHeight =
        $(window).height() / 2 - topTotalHeight - imageHeight + scrollTop;
    halfWindowWidth = $(window).width() / 2 - leftImagePos - centerImageLeft;

    tl.to(
        workBlockImageSub,
        {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
        },
        "startAnimation"
    );

    tl.to(
        this,
        {
            duration: 1,
            ease: "power3.in",
            x: halfWindowWidth,
            y: halfWindowHeight,
            transformOrigin: "center center",
            scale: 1.5,
        },
        "startAnimation"
    );
    tl.to(
        this,{
            duration: 0.1,
            opacity: 0,
            ease: 'expo.out'
        }
    )
    tl.add(function () {
        console.log('redirect');
        window.location.href = url;
    })

});

