unloadScrollBars()


$('<style>.makuda-home-link--works:before{width: 100%}</style>').appendTo('head');
$('<style>.makuda-home-link--contacts:before{width: 100%}</style>').appendTo('head');
var isFinished = false;
$('#video2').get(0).currentTime = 5;
$('#video1').get(0).currentTime = 5;

var promise1 = $('#video1').get(0).play();
if (promise1 !== undefined) {
    promise1.catch(error => {
        console.log(error)
    }).then(() => {
        console.log('Autoplay Started');
    })
}
var promise2 = $('#video2').get(0).play();
if (promise2 !== undefined) {
    promise2.catch(error => {
        console.log(error)
    }).then(() => {
        console.log('Autoplay Started');
    })
}


window.addEventListener('touchmove', function (e) {

    e.preventDefault();

}, false);


function video1Enter() {
    if (isFinished) {
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

}

function video1Leave() {
    if (isFinished) {
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


}

function video2Enter() {
    if (isFinished) {
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

}

function video2Leave() {
    if (isFinished) {
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

}

function animationStart() {
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


}


const tl3 = gsap.timeline();

function loader() {
    unloadScrollBars();
    var pageloader;
    pageloader = $(".pageloaderLogo").find("circle");
    for (let i = 0; i < 20; i += 2) {
        tl3.add(function () {
            $(pageloader[i]).addClass("circleScale");
            $(pageloader[i]).removeClass("circleInit");
            $(pageloader[i + 1]).addClass("circleScale");
            $(pageloader[i + 1]).removeClass("circleInit");
        }, "+=0.1");

        if (i === 20) {
            finished = true;
        }
    }
    var tlStart = gsap.timeline();

    if ($(window).width() > 1024) {
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
            {
                duration: 1, x: 100, onComplete: function () {
                    isFinished = true;
                }
            },
            0
        );
    } else {
        var leftBand = $('.makuda-home-link--works.makuda-home-link-wrap');
        var navBar = $('nav').height();
        leftBand.css('width', $(window).height() - navBar + 'px');
        var rightBand = $('.makuda-home-link--contacts.makuda-home-link-wrap');
        rightBand.css('left', $(window).width() - 80 + 'px');
        tlStart.fromTo(
            $(".makuda-home-link--contacts.is-loaded span:first-child "),
            {
                duration: 1,
                x: -1000,
            },
            {duration: 1, x: 0},
            0
        );
        tlStart.fromTo(
            $(".makuda-home-link--works.is-loaded span:last-child "),
            {
                duration: 1,
                x: 1000,
            },
            {duration: 1, x: 0},
            0
        );
        $(window).resize(function () {
            var leftBand = $('.makuda-home-link--works.makuda-home-link-wrap');
            leftBand.css('width', $(window).height() + 'px');
            var rightBand = $('.makuda-home-link--contacts.makuda-home-link-wrap');
            rightBand.css('left', $(window).width() - 80 + 'px');


        });
    }

    var makuda = ["M", "A_2", "K", "U", "D", "A", "triangle"];

    for (let k = 0; k < makuda.length; k++) {
        tl3.to("#" + makuda[k], {duration: 0, autoAlpha: 1, delay: 0.1});
    }
    tl3.to(".pageloader", {
        duration: 0.5,
        autoAlpha: 0,
        onComplete: function () {
            animationStart();
            $(".pageloader").hide();
        },
    });
}

loader();

