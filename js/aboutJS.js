$.fn.isOnScreen = function () {
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = this.offset().top;
    bounds.bottom = bounds.top + this.outerHeight();
    return bounds.top <= viewport.bottom && bounds.bottom >= viewport.top;
};
$(window).scrollTop(1);
document.addEventListener("scroll", function (e) {
    $(".counter").each(function () {
        var $this = $(this),
            countTo = $this.attr("data-count");
        if ($(this).isOnScreen()) {
            $({countNum: $this.text()}).animate(
                {
                    countNum: countTo,
                },
                {
                    duration: 3000,
                    easing: "linear",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    },
                }
            );
        }
    });
});

var hidingAnimation = false;
var peopleAnimation = [false, false, false, false, false, false];
let currentValoriAnimation = -1;
let valoriTexts = [
    "Makuda crede che il proprio operato debba essere un esempio<br>\
    di una consulenza chiara e trasparente in ogni step, nel<br>\
    rispetto dei ruoli e degli obiettivi.",
    "Se il nero rappresenta l'oscurità, l'inesplorato allora<br>\
    rappresenta anche tutto ciò che la curiosità ti porta<br>\
    ad esplorare.",
    "Perché il nero rappresenta l'attimo prima del<br>\
    processo di creazione, l'attimo prima che si<br>\
    accenda la lampadina.",
    "Qualsiasi sia il valore che si sà al nero esso rappresenta anche<br>\
    un punto di arrivo. Se è vero che il nero è un non colore, è anche<br>\
    vero che esso è l'insieme di tutti i colori. È solo esplorando tutte<br>\
    le sfumature che è possibile crescere."
];

$(document).ready(function () {
    resizeTeam(false);

    $(window).on("scroll resize", function () {
        resizeTeam();
    });

    $(".person-container").hover(
        function () { //MouseEnter
            $(this).find("img").css({"transform": "scale(1.1)"});
            animateFadeIn($(this).find(".person-links"), 1000, AnimationDirection.bottom);
            animateFadeIn($(this).find(".person-infos"), 1000, AnimationDirection.top);
        },
        function () { //MouseLeave
            $(this).find("img").css({"transform": "scale(1.0)"});
            animateFadeOut($(this).find(".person-links"), 1000, AnimationDirection.top, {top: 15, bottom: 0});
            animateFadeOut($(this).find(".person-infos"), 1000, AnimationDirection.bottom, {top: 0, bottom: 15});
        }
    );

    $(".valori-title").hover(
        function () {
            animateShowValori($(this).index(".valori-title"));
        },
        function () {

        }
    );

    $("#valori-container").mouseleave(async function () {
        $(".valori-title").css("color", "white");
        if (currentValoriAnimation != -1) {
            setTimeout(function () {
                animateWithQueue([
                    [
                        $("#subtitle-valore"),
                        400,
                        {"height": "38px"}
                    ],
                    [
                        $("#subtitle-valore"),
                        400,
                        {"opacity": "1"}
                    ]
                ]);
            }, 600);
            await animateHideValori(currentValoriAnimation, true);
        }
        currentValoriAnimation = -1;
    });
});

async function waitHidingAnimation() {
    if (hidingAnimation == false)
        return true;

    return new Promise(function (resolve) {
        setTimeout(async function () {
            await waitHidingAnimation();
            resolve();
        }, 50);
    });
}

let instancesAnimations = [0, 0, 0, 0];

async function animateShowValori(index) {
    let cva = currentValoriAnimation;
    currentValoriAnimation = index;

    if (instancesAnimations[index] > 0)
        return;

    instancesAnimations[index]++;

    if (hidingAnimation)
        await waitHidingAnimation();
    else if ($("#subtitle-valore").css("opacity") != 0) {
        animateWithQueue([
            [
                $("#subtitle-valore"),
                400,
                {"opacity": "0"}
            ],
            [
                $("#subtitle-valore"),
                400,
                {"height": "0"}
            ]
        ]);
    } else {
        await animateHideValori(cva);
    }

    if (currentValoriAnimation != index) {
        instancesAnimations[index]--;
        return;
    }

    stopAllAnimations();

    $("#valori-text").stop();
    $(".valori-vertical-line").stop();

    $("#valori-text").html(valoriTexts[index]);

    let containerLeft = $("#valori-container").offset().left;
    let containerWidth = $("#valori-container").width();
    let marginLeft = containerLeft + 60;
    let textWidth = $("#valori-text").width();
    let textHeight = $("#valori-text").height();

    $(".valori-title").css("color", "white");
    $(".valori-title:eq(" + index + ")").css("color", "#f6b600");

    let marginLeftLine;
    let widthLine;
    let marginLeftText;
    let textAlignText;
    let borderLeftText;
    let borderRightText;

    switch (index) {
        case 0:
            widthLine = marginLeft;
            marginLeftLine = -containerLeft - 60;
            marginLeftText = -50;
            textAlignText = "left";
            borderLeftText = "none";
            borderRightText = "3px solid white";
            break;
        case 1:
            if ($(window).width() < 1024) {
                console.log('left');
                widthLine = marginLeft;
                marginLeftLine = -containerLeft - 60;
                marginLeftText = -50;
                textAlignText = "left";
                borderLeftText = "none";
                borderRightText = "3px solid white";
            } else {
                widthLine = marginLeft;
                marginLeftLine = -containerLeft + 205 - 60;
                marginLeftText = 205 - 50;
                textAlignText = "left";
                borderLeftText = "none";
                borderRightText = "3px solid white";
            }
            break;
        case 2:
            if ($(window).width() < 1024) {
                marginLeftLine = $(window).width() - containerLeft * 2 - 60 + 60;
                marginLeftText = containerWidth - textWidth + 50;
                textAlignText = "right";
                borderLeftText = "none";
                borderRightText = "3px solid white";
            } else {
                widthLine = 2000;
                marginLeftLine = $(window).width() - containerLeft * 2 - 220 + 60;
                marginLeftText = containerWidth - textWidth - 110;
                textAlignText = "right";
                borderLeftText = "3px solid white";
                borderRightText = "none";
            }
            break;
        case 3:
            if ($(window).width() < 1024) {

                marginLeftLine = $(window).width() - containerLeft * 2 - 60 + 60;
                marginLeftText = containerWidth - textWidth + 50;
                textAlignText = "right";
                borderLeftText = "none";
                borderRightText = "3px solid white";
            } else {
                widthLine = 2000;
                marginLeftLine = $(window).width() - containerLeft * 2 - 60 + 60;
                marginLeftText = containerWidth - textWidth + 50;
                textAlignText = "right";
                borderLeftText = "3px solid white";
                borderRightText = "none";
            }
            break;
    }

    if (currentValoriAnimation != index) {
        instancesAnimations[index]--;
        return;
    }
    if (hidingAnimation)
        return;

    $(".valori-vertical-line").css({
        "width": widthLine + "px",
        "margin-left": marginLeftLine + "px",
        "border-right": borderRightText,
        "border-left": borderLeftText
    });
    $("#valori-text").css({
        "margin-left": marginLeftText + "px",
        "opacity": "0",
        "text-align": textAlignText
    });

    zoomInValoriLines(index);

    if (currentValoriAnimation != index) {
        instancesAnimations[index]--;
        return;
    }
    if (hidingAnimation) {
        instancesAnimations[index]--;
        return;
    }

    return new Promise(async function (resolve) {
        if (index < 2) {
            await animateCustom(
                $(".valori-vertical-line"),
                400,
                {
                    "height": textHeight + "px",
                    // "margin-left": (marginLeftLine - 60) + "px"
                }
            );
            if (currentValoriAnimation != index) {
                instancesAnimations[index]--;
                return;
            }
            if (hidingAnimation) {
                instancesAnimations[index]--;
                return;
            }
            await animateCustom(
                $("#valori-text"),
                600,
                {
                    "margin-left": (marginLeftText + 60) + "px",
                    "opacity": "1"
                },
                "easeOutCubic"
            );
        } else {
            await animateCustom(
                $(".valori-vertical-line"),
                400,
                {
                    "height": textHeight + "px",
                    // "margin-left": (marginLeftLine + 65) + "px"
                }
            );
            if (currentValoriAnimation != index) {
                instancesAnimations[index]--;
                return;
            }
            if (hidingAnimation) {
                instancesAnimations[index]--;
                return;
            }
            await animateCustom(
                $("#valori-text"),
                600,
                {
                    "margin-left": (marginLeftText - 60) + "px",
                    "opacity": "1"
                },
                "easeOutCubic"
            );
        }

        instancesAnimations[index]--;
        resolve(true);
    });
}

async function animateHideValori(index, zoomOutLines = false) {
    // currentValoriAnimation = index;
    // if (currentValoriAnimation != index)
    //   return;
    if (hidingAnimation)
        return;
    hidingAnimation = true;

    let containerLeft = $("#valori-container").offset().left;
    let containerWidth = $("#valori-container").width();
    let textWidth = $("#valori-text").width();

    let marginLeftLine;
    let marginLeftText;

    switch (index) {
        case 0:
            marginLeftLine = -containerLeft;
            marginLeftText = -50;
            break;
        case 1:
            if ($(window).width() < 1024) {
                marginLeftLine = -containerLeft;
                marginLeftText = -50;
            } else {
                marginLeftLine = -containerLeft + 205;
                marginLeftText = 205 - 50;
            }

            break;
        case 2:
            if ($(window).width() < 1024) {
                marginLeftLine = -containerLeft;
                marginLeftText = -50;
            } else {
                marginLeftLine = $(window).width() - containerLeft * 2 - 220;
                marginLeftText = containerWidth - textWidth - 110;
            }
            break;
        case 3:
            if ($(window).width() < 1024) {
                marginLeftLine = -containerLeft;
                marginLeftText = -50;
            } else {
                marginLeftLine = $(window).width() - containerLeft * 2 - 60;
                marginLeftText = containerWidth - textWidth + 50;
            }
            break;
    }


    await animateCustom(
        $("#valori-text"),
        600,
        {
            "margin-left": marginLeftText + "px",
            "opacity": "0"
        },
        "easeInCubic",
        false
    );
    if (zoomOutLines)
        zoomOutValoriLines();
    await animateCustom(
        $(".valori-vertical-line"),
        400,
        {
            "height": 0 + "px",
            // "margin-left": marginLeftLine + "px"
        }
    );

    $(".valori-title:eq(" + index + ")").css("color", "white");

    hidingAnimation = false;
}

async function zoomInValoriLines(index) {
    if (index < 2) {
        animateCustom($(".valori-line:eq(" + index + ")"), 400, {"width": "100px"});
        animateCustom($(".valori-line:eq(" + (index + 1) + ")"), 400, {"width": "40px"});
        animateCustom($(".valori-line:eq(" + ((index + 2) % 3) + ")"), 400, {"width": "10px"});
    } else {
        animateCustom($(".valori-line:eq(" + (index - 1) + ")"), 400, {"width": "100px"});
        animateCustom($(".valori-line:eq(" + (index - 2) + ")"), 400, {"width": "40px"});
        animateCustom($(".valori-line:eq(" + (index - 3) + ")"), 400, {"width": "10px"});
    }
}

async function zoomOutValoriLines() {
    await animateCustom($(".valori-line"), 400, {"width": "10px"});
}

async function resizeTeam(animation = true) {
    if (animation == false)
        $(".person-container").css({"transition": "none"});
    else
        $(".person-container").css({"transition": "all 0.8s ease"});

    const originalSize1 = {width: 800, height: 800};
    const originalSize2 = {width: 600, height: 800};
    let newWidth = $("#team-container").width() / 3.0;
    if ($(window).width() < 1024) {
        newWidth = $("#team-container").width() / 2.0;
    }

    let newSize1 = {width: newWidth, height: newWidth * originalSize1.height / originalSize1.width};
    let newSize2 = {width: newWidth, height: newWidth * originalSize2.height / originalSize2.width};

    $("#team-container").css({"height": (newSize1.height + newSize2.height - 125) + "px"});

    $(".person-container:eq(0), .person-container:eq(2), .person-container:eq(4)").css({
        "width": newSize1.width + "px",
        "height": newSize1.height + "px"
    });
    $(".person-container:eq(1), .person-container:eq(3), .person-container:eq(5)").css({
        "width": newSize2.width + "px",
        "height": newSize2.height + "px"
    });
    $(".person-container:eq(1), .person-container:eq(4)").css({"left": newWidth + "px"});
    $(".person-container:eq(2), .person-container:eq(5)").css({"left": (newWidth * 2) + "px"});
    $(".person-container:eq(3), .person-container:eq(5)").css({"top": newSize1.height + "px"});
    $(".person-container:eq(4)").css({"top": newSize2.height + "px"});
    if ($(window).width() < 1024) {
        $(".person-container:eq(1), .person-container:eq(2)").css({"left": newWidth + "px"});
        $(".person-container:eq(4)").css({"left": (newWidth * 2) + "px"});
        $(".person-container:eq(3)").css({"top": newSize1.height + "px"});
        $(".person-container:eq(2)").css({"top": newSize2.height + "px"});
        $(".person-container:eq(4),.person-container:eq(5)").css({"top": newSize2.height + newSize1.height + "px"});
        $('.person-container:eq(4)').css({"left": 0});
        $('.person-container:eq(5)').css({"left": newWidth + "px"});
        $('#heightJS').css({"height": newSize2.height*2 + newSize1.height+ 250 + 'px'})
    }


    $(".person-container").each(function (index, element) {
        if (!peopleAnimation[index] && isScrolledIntoView($(element), false, 10)) {
            peopleAnimation[index] = true;
            animateFadeIn($(element), 200, AnimationDirection.top);
        }
    });
}