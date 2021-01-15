ScrollTrigger.saveStyles(".container-hero div")

function redirect(URL) {
    window.location = '/works/buffel.php' + '#' + URL;
}

$(function () {
    const timeline = gsap.timeline();
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 28;
    const currentFrame = index => (
        `/media/img/Brioche/croissant3_1_${(index).toString().padStart(4, '0')}.png`
    );
    const images = [];
    const airpods = {
        frame: 0
    };
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }
    images[0].onload = render;
    timeline.addLabel('first');
    timeline.to(airpods, {
        frame: 10,
        snap: "frame",
        onUpdate: (self) => {
            render();
        }
    });
    timeline.addLabel('second');
    timeline.to(airpods, {
        frame: 20,
        snap: "frame",
        onUpdate: (self) => {
            render();
        }
    });
    timeline.addLabel('third');
    timeline.to(airpods, {
        frame: frameCount-1,
        snap: "frame",
        onUpdate: (self) => {
            render();
        }
    });
    timeline.addLabel('last');

    var scroller = ScrollTrigger.create({
        trigger: "#containerBrioche",
        start: '-200px',
        end: '+=300%',
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

