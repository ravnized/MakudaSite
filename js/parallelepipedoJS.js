$(document).ready(function ($) {
    var flag = [true, true, true, true, true]
    var parallelepipedo = $(".parallelepipedo");
    parallelepipedo.click(function (e) {
        let idElement = $(this).parent().attr("id"),
            tl = gsap.timeline(),
            parallelepipedParent = parallelepipedo.parent(),
            timer = 0;
        flag[idElement - 1] = false;
        let secondText = $(this).find(".secondText");
        let number = $(this).find(".numberParallelepipedo");
        for (let i = 4; i >= idElement; i--) {
            if (idElement !== $(parallelepipedParent[i]).attr("id")) {
                flag[$(parallelepipedParent[i]).attr("id") - 1] = true;
                tl.to(
                    parallelepipedParent[i],
                    {
                        duration: 0.5,
                        scale: 1,
                        x: +100 + timer * 100,
                        ease: "power2.in",
                        zIndex: timer,
                    },
                    0
                );
                tl.to(
                    $(parallelepipedParent[i]).find(".square"),
                    {
                        duration: 0.5,
                        opacity: 0,
                        width: -400,
                        translateX: 0 + "px",
                        display: "none",
                        ease: "power2.in",
                    },
                    0
                );
                tl.to($(parallelepipedParent[i]).find(".textInsideSquare"), {
                    duration: 0.5,
                    opacity: 0,
                    ease: "power2.in",
                }, 0);


                tl.to(
                    $(parallelepipedParent[i]).find('.secondText'),
                    {
                        duration: 0.5,
                        translateY: 600,
                        ease: "power2.in",
                    },
                    0
                );
                tl.to(
                    $(parallelepipedParent[i]).find('.numberParallelepipedo'),
                    {
                        opacity: 1,
                        color: '#4a4a4a',
                        duration: 0.1,
                        translateY: 0,
                        ease: "power2.in",
                    },
                    0
                );
                tl.to(
                    $(parallelepipedParent[i]).find('.secondText'),
                    {
                        duration: 0.2,
                        css: {
                            letterSpacing: 0 + "em",
                        },
                    },
                    0
                );
                tl.to($(parallelepipedParent[i]).find('.parallelepipedo'), {
                    duration: 0.5,
                    background: '#3b3b3b',
                }, 0)
                timer++;
            }
        }
        timer = 0;
        for (let i = 0; i < idElement; i++) {
            if (idElement !== $(parallelepipedParent[i]).attr("id")) {
                flag[$(parallelepipedParent[i]).attr("id") - 1] = true;
                tl.to(
                    parallelepipedParent[i],
                    {
                        duration: 0.5,
                        scale: 1,
                        x: -100 - timer * 100,
                        ease: "power2.in",
                        zIndex: timer,
                    },
                    0
                );
                tl.to(
                    $(parallelepipedParent[i]).find(".square"),
                    {
                        duration: 0.5,
                        opacity: 0,
                        width: -400,
                        translateX: 0 + "px",
                        display: "none",
                        ease: "power2.in",
                    },
                    0
                );
                tl.to($(parallelepipedParent[i]).find(".textInsideSquare"), {
                    duration: 0.5,
                    opacity: 0,
                    ease: "power2.in",
                }, 0);
                tl.to(
                    $(parallelepipedParent[i]).find('.secondText'),
                    {
                        duration: 0.5,
                        translateY: 600,
                        ease: "power2.in",
                    },
                    0
                );
                tl.to(
                    $(parallelepipedParent[i]).find('.numberParallelepipedo'),
                    {
                        opacity: 1,
                        color: '#4a4a4a',
                        duration: 0.1,
                        translateY: 0,
                        ease: "power2.in",
                    },
                    0
                );
                tl.to(
                    $(parallelepipedParent[i]).find('.secondText'),
                    {
                        duration: 0.2,
                        css: {
                            letterSpacing: 0 + "em",
                        },
                    },
                    0
                );
                tl.to($(parallelepipedParent[i]).find('.parallelepipedo'), {
                    duration: 0.5,
                    background: '#3b3b3b',
                }, 0)
                timer++;
            }
        }
        tl.to(
            $(this),
            {
                transform: 'skewY(-20deg) scale(1) translateY(0)',
                duration: 0.5,
                background: 'linear-gradient(#dcac02,#372d0a)',
                zIndex: 10,
            }, 0
        )

        tl.to(
            $(secondText),
            {
                duration: 0.5,
                translateY: 380,
                ease: "power2.in",
            },
            0
        );
        tl.to(
            $(number),
            {
                duration: 0.3,
                color: '#edca02',
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


        tl.to($(this).parent().find(".square"), {
            display: "flex",
            duration: 0.5,
            opacity: 1,
            width: 400,
            translateX: 170,
            ease: "power2.in",
        }, 0);
        tl.to($(this).parent().find(".textInsideSquare"), {
            duration: 0.5,
            opacity: 1,
            ease: "power2.in",
        });

    });


    parallelepipedo.hover(function (e) {
        var idElement = $(this).parent().attr("id");
        if (flag[idElement - 1]) {
            let secondText = $(this).find(".secondText");
            let number = $(this).find(".numberParallelepipedo");
            let tl = gsap.timeline();

            tl.to($(this), {
                duration: 0.1,
                transform: 'skewY(-20deg) scale(1.2) translateY(35px)',
                background: 'linear-gradient(#dcac02,#372d0a)',


            }, 0)

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
                    color: '#edca02',
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
        }
    });

    parallelepipedo.mouseleave(function (e) {
        var idElement = $(this).parent().attr("id");
        if (flag[idElement - 1]) {
            let number = $(this).find(".numberParallelepipedo");
            let secondText = $(this).find(".secondText");
            let tl = gsap.timeline();

            tl.to($(this), {
                duration: 0.1,
                transform: 'skewY(-20deg) scale(1) translateY(0)',
                background: '#3b3b3b',
            }, 0)

            tl.to(
                secondText,
                {
                    duration: 0.5,
                    translateY: 600,
                    ease: "power2.in",

                },
                0
            );
            tl.to(
                number,
                {
                    opacity: 1,
                    color: '#4a4a4a',
                    duration: 0.3,
                    translateY: 0,
                    ease: "power2.in",
                },
                0
            );
            tl.to(secondText, {css: {letterSpacing: 0}}, 0);
        }
    });
});