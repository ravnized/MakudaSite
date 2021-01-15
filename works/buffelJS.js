ScrollTrigger.saveStyles(".container-hero div")

$(function () {
    var targets = document.querySelectorAll(".container-hero div");



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

    gsap.to(airpods, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
            trigger: "#hero-lightpass",
            start:'-200px',
            end: '+=1000',
            markers: true,
            scrub: 0.5,
            pin: true,
            
        },
        onUpdate: render
    });
    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[airpods.frame], 0, 0);
    }

// Timeline for scaling the image when scrolling begins




})
// setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
// These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
// Timeline for fading in and fading out the text

