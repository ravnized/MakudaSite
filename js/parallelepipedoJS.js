$(document).ready(function ($) {
    let disable = [false, false, false, false, false, false];
    var parallelepipedo = $(".parallelepipedo");
    var parentParallelepipedo = parallelepipedo.parent();

    parentParallelepipedo.find(".cross").click(function (e) {
        let tl = gsap.timeline(),
            parallelepipedParent = parallelepipedo.parent(),
            timer = 0;


        for (let i = 0; i < parallelepipedParent.length; i++) {
            disable[i] = false;

            tl.to(
                $(parallelepipedParent[i]).find(".square"),
                {
                    duration: 0.5,
                    width: 0,
                    ease: "power2.in",
                    opacity: 0,
                    display: "none",
                },
                0
            );
            tl.to(
                $(parallelepipedParent[i]),
                {
                    duration: 0.5,
                    scale: 1,
                    x: 0,
                    ease: "power2.in",
                    zIndex: timer,
                },
                0.2
            );
            tl.to(
                $(parallelepipedParent[i]).find(".textInsideSquare"),
                {
                    duration: 0.5,
                    opacity: 0,
                    ease: "power2.in",
                },
                0.2
            );

            tl.to(
                $(parallelepipedParent[i]).find(".secondText"),
                {
                    duration: 0.5,
                    translateY: 650,
                    ease: "power2.in",
                },
                0.2
            );
            tl.to(
                $(parallelepipedParent[i]).find(".numberParallelepipedo"),
                {
                    opacity: 1,
                    color: "#4a4a4a",
                    duration: 0.1,
                    translateY: 0,
                    ease: "power2.in",
                },
                0.2
            );
            tl.to(
                $(parallelepipedParent[i]).find(".secondText"),
                {
                    duration: 0.2,
                    css: {
                        letterSpacing: 0 + "em",
                    },
                },
                0.2
            );
            tl.to(
                $(parallelepipedParent[i]).find(".parallelepipedo"),
                {
                    duration: 0.5,
                    background: "linear-gradient(#3b3b3b,#3b3b3b)",
                },
                0.2
            );
            timer++;
        }
    });

    parallelepipedo.click(function (e) {
        let idElement = $(this).parent().attr("id"),
            tl = gsap.timeline(),
            parallelepipedParent = parallelepipedo.parent(),
            timer = 0;
        disable[idElement - 1] = true;
        let secondText = $(this).find(".secondText");
        let number = $(this).find(".numberParallelepipedo");


        for (let i = parallelepipedParent.length - 1; i >= idElement; i--) {
            var timelineBefore = gsap.timeline();
            if (idElement !== $(parallelepipedParent[i]).attr("id")) {
                disable[$(parallelepipedParent[i]).attr("id") - 1] = false;
                timelineBefore.to(
                    $(parallelepipedParent[i]),
                    {
                        duration: 0.5,
                        scale: 1,
                        x: +100 + timer * 100,
                        ease: "power2.in",
                        zIndex: timer,
                    },
                    0
                );
                timelineBefore.to(
                    $(parallelepipedParent[i]).find(".square"),
                    {
                        duration: 0.2,
                        opacity: 0,
                        width: 0,
                        x: 0,
                        ease: "power2.in",
                        zIndex: 0,
                    },
                    0.2
                );
                timelineBefore.to(
                    $(parallelepipedParent[i]).find(".textInsideSquare"),
                    {
                        duration: 0.5,
                        opacity: 0,
                        ease: "power2.in",
                    },
                    0
                );
                timelineBefore.to(
                    $(parallelepipedParent[i]).find(".secondText"),
                    {
                        duration: 0.5,
                        translateY: 650,
                        ease: "power2.in",
                    },
                    0
                );
                timelineBefore.to(
                    $(parallelepipedParent[i]).find(".numberParallelepipedo"),
                    {
                        opacity: 1,
                        color: "#4a4a4a",
                        duration: 0.1,
                        translateY: 0,
                        ease: "power2.in",
                    },
                    0
                );
                timelineBefore.to(
                    $(parallelepipedParent[i]).find(".secondText"),
                    {
                        duration: 0.2,
                        css: {
                            letterSpacing: 0 + "em",
                        },
                    },
                    0
                );
                timelineBefore.to(
                    $(parallelepipedParent[i]).find(".parallelepipedo"),
                    {
                        duration: 0.5,
                        background: "linear-gradient(#3b3b3b,#3b3b3b)",
                    },
                    0
                );
                timer++;
            }
        }
        timer = 0;
        for (let i = 0; i < idElement; i++) {
            let timelineAfter = gsap.timeline();
            if (idElement !== $(parallelepipedParent[i]).attr("id")) {
                disable[$(parallelepipedParent[i]).attr("id") - 1] = false;

                timelineAfter.to(
                    $(parallelepipedParent[i]),
                    {
                        duration: 0.2,
                        scale: 1,
                        x: -100 - timer * 100,
                        ease: "power2.in",
                        zIndex: timer,
                    },
                    0
                );
                timelineAfter.to(
                    $(parallelepipedParent[i]).find(".square"),
                    {
                        duration: 0.2,
                        opacity: 0,
                        width: 0,
                        x: 0,
                        ease: "power2.in",
                        zIndex: 0,
                    },
                    0.2
                );
                timelineAfter.to(
                    $(parallelepipedParent[i]).find(".textInsideSquare"),
                    {
                        duration: 0.5,
                        opacity: 0,
                        ease: "power2.in",
                    },
                    0
                );
                timelineAfter.to(
                    $(parallelepipedParent[i]).find(".secondText"),
                    {
                        duration: 0.5,
                        translateY: 650,
                        ease: "power2.in",
                    },
                    0
                );
                timelineAfter.to(
                    $(parallelepipedParent[i]).find(".numberParallelepipedo"),
                    {
                        opacity: 1,
                        color: "#4a4a4a",
                        duration: 0.1,
                        translateY: 0,
                        ease: "power2.in",
                    },
                    0
                );
                timelineAfter.to(
                    $(parallelepipedParent[i]).find(".secondText"),
                    {
                        duration: 0.2,
                        css: {
                            letterSpacing: 0 + "em",
                        },
                    },
                    0
                );
                timelineAfter.to(
                    $(parallelepipedParent[i]).find(".parallelepipedo"),
                    {
                        duration: 0.5,
                        background: "linear-gradient(#3b3b3b,#3b3b3b)",
                    },
                    0
                );
                timer++;
            }
        }
        tl.to(
            this,
            {
                transform: "skewY(-20deg) scale(1) translateY(0)",
                duration: 0.5,
                background: "linear-gradient(#dcac02,#372d0a)",
                zIndex: 10,
            },
            0
        );

        tl.to(
            secondText,
            {
                duration: 0.5,
                translateY: 380,
                ease: "power2.in",
            },
            0
        );
        tl.to(
            number,
            {
                duration: 0.3,
                color: "#edca02",
                opacity: 0.3,
                translateY: -50,
                ease: "power2.in",
            },
            0
        );
        tl.to(
            secondText,
            {
                duration: 0.2,
                css: {
                    letterSpacing: 0.3 + "em",
                },
            },
            0
        );
        tl.to(
            $(this).parent(),
            {
                duration: 0.5,
                x: -idElement * 100,
                ease: "power2.in",
                zIndex: 10,
                scale: 1.2,
            },
            0
        );

        tl.to(
            $(this).parent().find(".square"),
            {
                display: "flex",
                duration: 0.4,
                opacity: 1,
                width: 400,
                translateX: 170,
                ease: "power2.in",
                zIndex: 0,
            },
            0.5
        );
        tl.to($(this).parent().find(".textInsideSquare"), {
            duration: 0.5,
            opacity: 1,
            ease: "power2.in",
        });
    });

    gsap.utils.toArray(".parallelepipedo").forEach((parallelepipedo) => {
        parallelepipedo.idElement = $(parallelepipedo).parent().attr("id");
        parallelepipedo.secondText = $(parallelepipedo).find(".secondText");
        parallelepipedo.number = $(parallelepipedo).find(".numberParallelepipedo");
        parallelepipedo.tl = gsap.timeline({paused: true});
        parallelepipedo.tl.fromTo(
            $(parallelepipedo),
            {
                duration: 0.3,
                background: "linear-gradient(#3b3b3b,#3b3b3b)",
            },
            {
                duration: 0.3,
                background: "linear-gradient(#dcac02,#372d0a)",
            },
            "mouseEnter"
        );
        parallelepipedo.tl.to(
            $(parallelepipedo).parent(),
            {
                duration: 0.3,
                scaleX: 1.2,
                scaleY: 1.2,
                ease: "power3",
            },
            "mouseEnter"
        );

        parallelepipedo.tl.to(
            parallelepipedo.secondText,
            {
                duration: 0.3,
                y: 380,
                ease: "power2.in",
            },
            "mouseEnter"
        );
        parallelepipedo.tl.to(
            parallelepipedo.number,
            {
                duration: 0.3,
                color: "#edca02",
                opacity: 0.3,
                translateY: -50,
                ease: "power2.in",
            },
            "mouseEnter"
        );
        parallelepipedo.tl.to(
            parallelepipedo.secondText,
            {
                duration: 0.3,
                css: {
                    letterSpacing: 0.3 + "em",
                },
            },
            "mouseEnter"
        );

        parallelepipedo.addEventListener(
            "mouseenter",

            function () {

                parallelepipedo.tl.play();
            }
        );

        parallelepipedo.addEventListener(
            "mouseleave",

            function () {

                if (disable[parallelepipedo.idElement - 1] !== true) {
                    parallelepipedo.tl.reverse();
                }
            }
        );
    });
});
