ScrollTrigger.saveStyles(".container-hero div")

function redirect(URL) {
    window.location = '/works/buffel.php' + '#' + URL;
}

$(window).on("scroll resize", function () {
    if ($('#titleOne').length !== 0) {

        if ($('#titleOne').isOnScreen()) {
            gsap.to(
                '#titleOne',
                {duration: 1, x: 0},
            )
        }
    }
})

$(function () {
    const timeline = gsap.timeline();
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 79;
    const currentFrame = index => (
        `/media/img/Brioche/croissant5_1_${(index).toString().padStart(4, '0')}.png`
    );
    const images = [];
    const airpods = {
        frame: 20
    };
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }
    images[0].onload = render;

    timeline.to(airpods, {
        frame: 30,
        snap: "frame",
        onUpdate: (self) => {
            render();
        }
    }, 'first');

    timeline.fromTo(
        '#titleOne',
        {opacity: 1}, {duration: 0.5, opacity: 0, display: 'none'}, 'first'
    )
    timeline.fromTo(
        '#titleTwo',
        {x: 700}, {delay: 0.5, duration: 0.5, x: 0}, 'first'
    )
    timeline.to(airpods, {
        frame: 50,
        snap: "frame",
        onUpdate: (self) => {
            render();
        }
    }, 'second');
    timeline.fromTo(
        '#titleTwo',
        {x: 0, opacity: 1}, {duration: 0.5, x: 700, opacity: 0, display: 'none'}, 'second'
    )
    timeline.fromTo(
        '#titleThree', {
            opacity: 0,
        }, {
            delay: 0.5,
            duration: 0.5,
            opacity: 1,
        }, 'second'
    )

    timeline.to(airpods, {
        frame: frameCount - 1,
        snap: "frame",
        onUpdate: (self) => {
            render();
        }
    }, 'third');

    var scroller = ScrollTrigger.create({
        trigger: "#containerBrioche",
        start: '-200px',
        end: '+=100%',
        markers: true,
        scrub: 0.1,
        pin: true,
        animation: timeline,
        snap: {
            snapTo: 'labels',
            duration: 0.1,
        },
    });

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[airpods.frame], 0, 0);
    }

})

