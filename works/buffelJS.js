ScrollTrigger.saveStyles(".container-hero div")

function redirect(URL) {
    window.location = '/works/buffel.php' + '#' + URL;
}

var animationTimer = 750;
async function goToFrame(frameIndex){
    let toDo = frameIndex - currentFrame;
    let toAdd = 1;
    if(frameIndex < currentFrame){
        toAdd = -1;
        toDo = currentFrame - frameIndex;
    }
    for(let i = 0; i < toDo; i++){
        brioche.move_relative(toAdd);
        currentFrame += toAdd;
        await sleep(animationTimer / toDo);
    }
}
var isAutoScrolling = 0;
var actualBriocheStep = 0; //Da 0 a 2
var lastScrollTop = 0;
var currentFrame = 0;
// var maxScrollDelta = 0;
$(window).on("scroll", function (e) {
    let s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    // let scrollDelta = Math.abs(lastScrollTop - s);
    // if(scrollDelta > maxScrollDelta && isAutoScrolling == 0 && scrollDelta < c / 3)
    //     maxScrollDelta = scrollDelta;
    var briocheContainerPos = $("#containerBrioche").offset().top - 70;
    let endBriocheContainer = $("#containerBrioche").height() - c + 150;
    let posFromContainer = s - briocheContainerPos;
    let percScrollBrioche = (posFromContainer * 100) / endBriocheContainer;
    let isScrollingDown = s > lastScrollTop;
    let newBriocheStep = actualBriocheStep + (isScrollingDown ? 1 : - 1);
    if(
        !brioche.get_loading() && 
        isAutoScrolling == 0 && 
        newBriocheStep >= 0 && 
        newBriocheStep <= 3 && 
        percScrollBrioche > 0 && 
        percScrollBrioche < 100
    ){
        let newFrame = 0;
        switch(newBriocheStep){
            case 0:
            case 1:
                newFrame = 0;
                break;
            case 2:
                newFrame = 26;
                break;
            case 3:
                newFrame = 44;
                break;
        }
        disableScroll();
        isAutoScrolling++;
        if(actualBriocheStep == 0 && newBriocheStep == 1)
            gsap.fromTo(
                "#didascalia-1",
                {x: "1000%", y: "50%", opacity: 0},
                {duration: animationTimer/1000, x: "50%", y: "50%", opacity: 1, ease: "Power4.easeOut"}
            );
        else if(actualBriocheStep == 1 && newBriocheStep == 0)
            $(".didascalia-brioche:eq(0)").css("opacity", 0);
        else {
            goToFrame(newFrame);
            $(".didascalia-brioche:eq("+(actualBriocheStep-1)+")").css("opacity", 0);
            gsap.fromTo(
                "#didascalia-"+newBriocheStep,
                {x: "1000%", y: "50%", opacity: 0},
                {duration: animationTimer/1000, x: "50%", y: "50%", opacity: 1, ease: "Power4.easeOut"}
            );
        }
        actualBriocheStep = newBriocheStep;
        var newY = briocheContainerPos + (actualBriocheStep * (c * 0.95));
        $('html, body').stop().animate(
            {
                scrollTop: newY
            },
            {
                duration: animationTimer,
                step: function() { 
                    disableScroll();
                    let newPos = $(window).scrollTop() - briocheContainerPos;
                    $("#innovazioneTitle, .titolo-brioche, .didascalie-brioche, .brioche").css("top", newPos);
                },
                complete: function() { 
                    enableScroll();
                    isAutoScrolling = -1;
                    brioche.pause();
                }
            }
        );
    }
    if(isAutoScrolling == -1)
        isAutoScrolling = 0;
    lastScrollTop = s;
});
var brioche;
$(document).ready(()=>{
    brioche = new SuperGif({ 
        gif: document.getElementById('gif-brioche'),
        rubbable: false,
        auto_play: false
     } );
     brioche.load(()=>{
        $("#gif-brioche-div").css("opacity", "100%");
        $("#brioche-loader").css("opacity", "0");
        $("#containerBrioche").css("height", "380vh");
        brioche.move_to(currentFrame);
    });
});

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
    /*
        var scroller = ScrollTrigger.create({
            trigger: "#containerBrioche",
            start: 'top middle',
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
    */

    var lethargy = new Lethargy();

    // Bind all mousewheel events and pass it to Lethargy.check()
    $(window).bind('mousewheel DOMMouseScroll wheel MozMousePixelScroll', function (e) {
        e.preventDefault()
        e.stopPropagation();
        var scrollPosition = 0;
        // Lethargy.check() must only be called once per mouse event
        // If you need to use the result in more than one place
        // you MUST store it as a variable and use that variable instead
        // See https://github.com/d4nyll/lethargy/issues/5
        var result = lethargy.check(e);

        // false means it's not a scroll intent, 1 or -1 means it is
        console.log(result);
        if(result === 1){
            scrollPosition++;
        }
    });


    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[airpods.frame], 0, 0);
    }

})

