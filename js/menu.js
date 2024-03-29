var heightTotal = $(window).height() / 2;

let letters = document.querySelectorAll(".letterWrapper");
letters.forEach((item) => {
    item.tl = gsap.timeline();
    item.isFinished = false;
    item.addEventListener("mouseenter", (event) => {
        item.lettersLength = $(item).find(".letter").length;
        item.numberGenerate = 0;
        item.numberGenerated = [];

        if (item.tl.isActive()) {
            return;
        }

        for (item.i = 0; item.i < item.lettersLength; item.i++) {
            do {
                item.uscire = false;
                item.numberGenerate = Math.floor(Math.random() * item.lettersLength);
                if (!item.numberGenerated.includes(item.numberGenerate)) {
                    item.numberGenerated.push(item.numberGenerate);
                    item.uscire = true;
                }
            } while (!item.uscire);
            item.numberGeneratedI = item.numberGenerated[item.i].toFixed(0);

            item.delay = "0.1" * item.i;

            item.tl.to(
                $(item).children().children()[item.numberGeneratedI],
                {
                    delay: item.delay,
                    duration: 0.5,
                    rotationX: 100,
                    z: -200,
                    transformOrigin: "50% 50% -26rem",
                    ease: "Power4.easeIn",
                },
                "startAnimation"
            );

            item.tl.set(
                $(item).children().children()[item.numberGeneratedI],
                {
                    delay: item.delay + 0.5,
                    rotationX: -90,
                    z: -200,
                    transformOrigin: "50% 50% -26rem",
                    ease: "Power4.easeOut",
                },
                "startAnimation"
            );
            item.tl.to(
                $(item).children().children()[item.numberGeneratedI],
                {
                    delay: item.delay + 0.5,
                    duration: 0.7,
                    rotationX: 0,
                    z: 0,
                    transformOrigin: "50% 50% -26rem",
                    ease: "Power4.easeOut",
                },
                "startAnimation"
            );
        }
        item.tl.call(function () {
            item.tl.clear();
            item.isFinished = true;
        });
    });
});
$(document).ready(function () {
    // Check for click events on the navbar burger icon
    $(".navbarBurgerMain").hover(function () {
        let timeline = gsap.timeline();
        let navbarChildren = $(".navbarBurgerMain").children();
        Array.from(navbarChildren).forEach(function (element) {
            var random = Math.floor(Math.random() * 3);
            timeline.to(element, {duration: 0.2, width: 0});
            timeline.to(element, {duration: 0.2, width: 16});
        });
    });
});

function animateMenu() {
    let tl = gsap.timeline();

    tl.to(
        ".menu-background",
        {
            duration: 1,
            translateX: "-20%",
            ease: "expo.in",
        },
        0
    )
        .to(".menuWrapper", {
            duration: 0.2,
            autoAlpha: 1,
            display: "flex",
        })
        .fromTo(".letter",{
          x:"-45%",
        }, {
            duration: 0.5,
            x: 0,
            autoAlpha: 1,
        });
}

function animateMenuReverse() {
    let tl = gsap.timeline();
    tl.fromTo(
        ".letter",
        {x: 0},
        {
            duration: 0.5,
            autoAlpha: 0,
            x: "+45%",
        },
        0
    )
        .to(".menuWrapper", {
            duration: 0.2,
            autoAlpha: 0,
            display: "none",
        })
        .to(
            ".menu-background",
            {
                duration: 1,
                translateX: "50%",
                scale: 1,
                ease: "expo.in",
            },
            "-=0.5"
        )
        .to(".letter", {
            x: "-45%",
        });
    tl.add(function () {
        $(".menu-background").removeAttr("style");
        $(".menuWrapper").removeAttr("style");
    });
}

function menuSize() {
    let button = $(".buttonMenu");
    let buttonWidth = $(window).width() / button.length + 1;
    let lettersHeight = $(".letter").width();
    for (let i = 0; i < button.length - 1; i++) {
        $(button[i]).css({
            "padding-right": buttonWidth / 5 + "px",
        });
        $(button[i]).outerWidth();
    }
    for (let i = 0; i < button.length; i++) {
        $(button[i]).css({
            "font-size": buttonWidth / 5 + "px",
        });
        $(button[i]).css({
            transform: "scale(0.9)",
            "transform-origin": "50% 50%",
        });
    }
    $(button[3]).css("margin-right", "2rem");
}

function unloadScrollBars() {
    document.documentElement.style.overflow = "hidden"; // firefox, chrome
    document.body.scroll = "no"; // ie only
}

function reloadScrollBars() {
    document.documentElement.style.overflow = "auto"; // firefox, chrome
    document.body.scroll = "yes"; // ie only
}

menuSize();
$(window).on("resize", function () {
    menuSize();
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
window.onpageshow = function (evt) {
    // If persisted then it is in the page cache, force a reload of the page.
    if (evt.persisted) {
        document.body.style.display = "none";
        location.reload();
    }
};
