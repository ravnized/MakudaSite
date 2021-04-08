// ScrollTrigger.saveStyles(".container-hero div")

function redirect(URL) {
    window.location = '/lavori/buffel.php' + '#' + URL;
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
var did = false;
var did2 = false;
// var maxScrollDelta = 0;
var brioche;

// $(window).on("resize", function (e)) {

// }

$(window).on("resize", function() {
    // if ($(window).width() <= 1030)
        did2 = false;
});

$(window).on("scroll resize", function (e) {
    if (!did2)
        if (actualBriocheStep == 0)
            $("#containerBrioche").css("top", $("#containerBriocheEmpty").offset().top);
        else if (actualBriocheStep == 2)
            $("#containerBrioche").css("top",
                $("#containerBriocheEmpty").offset().top +
                $("#containerBriocheEmpty").height() -
                $("#containerBrioche").height()
            );

    let s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    // let scrollDelta = Math.abs(lastScrollTop - s);
    // if(scrollDelta > maxScrollDelta && isAutoScrolling == 0 && scrollDelta < c / 3)
    //     maxScrollDelta = scrollDelta;
    var briocheContainerPos = $("#containerBriocheEmpty").offset().top - 70;
    let endBriocheContainer = $("#containerBriocheEmpty").height() - c + 150;
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
        $("#containerBrioche").addClass("centerVerticallyFixed");
        did = false;
        did2 = true;
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
        let x = window.innerWidth < 1280 || newBriocheStep == 1 ? "0" : "50px";
        let y = window.innerWidth < 1280 ? "0" : "50%";
        if(actualBriocheStep == 0 && newBriocheStep == 1)
            gsap.fromTo(
                "#didascalia-1",
                {x: "1000%", y: y, opacity: 0},
                {duration: animationTimer/1000, x: "0", y: y, opacity: 1, ease: "Power4.easeOut"}
            );
        else if(actualBriocheStep == 1 && newBriocheStep == 0)
            $(".didascalia-brioche:eq(0)").css("opacity", 0);
        else {
            goToFrame(newFrame);
            $(".didascalia-brioche:eq("+(actualBriocheStep-1)+")").css("opacity", 0);
            gsap.fromTo(
                "#didascalia-"+newBriocheStep,
                {x: "1000%", y: y, opacity: 0},
                {duration: animationTimer/1000, x: x, y: y, opacity: 1, ease: "Power4.easeOut"}
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
                    // let newPos = $(window).scrollTop() - briocheContainerPos;
                    // $("#innovazioneTitle, .titolo-brioche, .didascalie-brioche, .brioche").css("top", newPos);
                },
                complete: function() { 
                    enableScroll();
                    isAutoScrolling = -1;
                    brioche.pause();
                }
            }
        );
    }
    else if ((newBriocheStep < 0 || newBriocheStep > 3) && isAutoScrolling == 0 && !did)
    {
        did = true;

        let tmp = $("#containerBrioche").offset().top;
        console.log(tmp);
        $("#containerBrioche").removeClass("centerVerticallyFixed");
        // $("#containerBrioche").css("top", parseInt(tmp) + "px");
        document.getElementById("containerBrioche").style.top = parseInt(tmp) + "px";
    }
    if(isAutoScrolling == -1)
        isAutoScrolling = 0;
    lastScrollTop = s;
});

$(document).ready(()=>{
    brioche = new SuperGif({ 
        gif: document.getElementById('gif-brioche'),
        rubbable: false,
        auto_play: false
     } );
     brioche.load(()=>{
        $("#gif-brioche-div").css("opacity", "100%");
        $("#brioche-loader").css("opacity", "0");
        $("#containerBriocheEmpty").css("height", "380vh");
        brioche.move_to(currentFrame);
    });
});


