function video1Enter() {
    var tl = gsap.timeline();

    tl.to(
        $("#video-clipper"),
        {duration: 0.5, width: "75%"},
        "filterAnimation"
    );
    tl.to(
        $(".mask"),
        {duration: 0.5, width: "25%"},
        "filterAnimation"
    );
    tl.to(
        $("#video1"),
        {
            duration: 1,
            css: {filter: "grayscale(0%)", "-webkit-filter": "grayscale(0%)"},
        },
        "filterAnimation"
    );

    $(".makuda-home-link--works.is-loaded .makuda-home-link ").addClass(
        "is-hover"
    );
}

function video1Leave() {
    var tl = gsap.timeline();
    $(".makuda-home-link--works.is-loaded .makuda-home-link ").removeClass(
        "is-hover"
    );
    tl.to(
        $("#video1"),
        {
            duration: 0.5,
            css: {filter: "grayscale(100%)", "-webkit-filter": "grayscale(100%)"},
        },
        "filterAnimation"
    );

}

function video2Enter() {
    var tl = gsap.timeline();
    tl.to(
        $("#video2"),
        {
            duration: 1,
            css: {filter: "grayscale(0%)", "-webkit-filter": "grayscale(0%)"},
        },
        "filterAnimation"
    );
    tl.to(
        $("#video-clipper"),
        {duration: 0.5, width: "25%"},
        "filterAnimation"
    );
    tl.to(
        $(".mask"),
        {duration: 0.5, width: "75%"},
        "filterAnimation"
    );
    $(".makuda-home-link--contacts.is-loaded .makuda-home-link").addClass(
        "is-hover"
    );
}

function video2Leave() {
    var tl = gsap.timeline();
    $(".makuda-home-link--contacts.is-loaded .makuda-home-link").removeClass(
        "is-hover"
    );
    tl.to(
        $("#video2"),
        {
            duration: 1,
            css: {filter: "grayscale(100%)", "-webkit-filter": "grayscale(100%)"},
        },
        "filterAnimation"
    );
}

$(document).ready(function () {
    $("#video1").on("mouseenter", function () {
        video1Enter();
        video2Leave();
    });
    $(".makuda-home-link--works").on("mouseenter", function () {
        video1Enter();
    });
    $("#video1,#text-case-study").on("click", function () {
        location.href = "/work_case.php";
    });
    $("#video2").on("mouseenter", function () {
        video2Enter();
        video1Leave();
    });
    $("#video2,#text-produzioni").on("click", function () {
        location.href = "/work_prod.php";
    });
    $(".makuda-home-link--contacts").on("mouseenter", function () {
        video2Enter();
    });

    $("#mainSection").on("mouseleave", function () {
        var tl = gsap.timeline();
        video1Leave();
        video2Leave();

        tl.to(
            $("#video-clipper"),
            {duration: 0.5, width: "50%"},
            "filterAnimation"
        );
        tl.to(
            $(".mask"),
            {duration: 0.5, width: "50%"},
            "filterAnimation"
        );
    });
    $('#video2').get(0).currentTime = 5;
    $('#video1').get(0).play();
    $('#video2').get(0).play();
    var tlStart = gsap.timeline();
    tlStart.fromTo(
        $("#video-clipper"),
        {

            left: 50+'%',
            width: 0,
        },
        {
            delay: 1,
            duration: 2,
            left: 0+'%',
            width: 50+'%',
            ease: 'power4.out'
        },
        0
    );

    tlStart.fromTo($(".mask"),
        {
            right: 50+'%',
            width: 0,
        },
        {
            delay: 1,
            duration: 2,
            right: 0+'%',
            width: 50+'%',
            ease: 'power4.out'
        },
        0);
    tlStart.add(function () {

    })
    tlStart.fromTo(
        $(".makuda-home-link--contacts.is-loaded span:first-child "),
        {
            duration: 1,
            x: -1000,
        },
        {duration: 1, x: -100},
        0
    );
    tlStart.fromTo(
        $(".makuda-home-link--contacts.is-loaded span:last-child"),
        {
            duration: 1,
            x: 1000,
        },
        {duration: 1, x: 100},
        0
    );
    tlStart.fromTo(
        $(".makuda-home-link--works.is-loaded span:first-child "),
        {
            duration: 1,
            x: 1000,
        },
        {duration: 1, x: -100},
        0
    );
    tlStart.fromTo(
        $(".makuda-home-link--works.is-loaded span:last-child"),
        {
            duration: 1,
            x: -1000,
        },
        {duration: 1, x: 100},
        0
    );
});
