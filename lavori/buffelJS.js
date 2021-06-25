var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

$.fn.scrollEnd = function(callback, timeout = 100) {          
    $(this).on('scroll', function(){
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback,timeout));
    });
};

function isFullScreen() {
    let doc = window.document;
    return doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;
}

function enableFullScreen() {
    if (isFullScreen())
        return;

    let doc = window.document;
    let docEl = doc.documentElement;
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    requestFullScreen.call(docEl);
}

function disableFullScreen() {
    if (!isFullScreen())
        return;

    let doc = window.document;
    let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    cancelFullScreen.call(doc);
}

function toggleFullScreen() {
    let doc = window.document;
    let docEl = doc.documentElement;

    let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
    else {
        cancelFullScreen.call(doc);
    }
}

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

var oldWidth = 0;
var isAutoScrolling = 0;
var actualBriocheStep = 0; //Da 0 a 2
var lastScrollTop = 0;
var currentFrame = 0;
var did = false;
var did2 = false;
// var maxScrollDelta = 0;
var brioche;
var scrollEnabled = true;
var scrollTimer;

// $(window).on("resize", function (e)) {

// }

$(window).on("resize", function() {
    did2 = false;
    
    if (window.innerWidth == oldWidth)
        return;

    if (window.innerWidth > 720 && oldWidth <= 720)
    {
        $(".img-slide #img1").css("background-image", "url(/media/img/lavori/3_mille_giri/1.jpg)");
        $(".img-slide #img2").css("background-image", "url(/media/img/lavori/3_mille_giri/2.jpg)");
        $(".img-slide #img3").css("background-image", "url(/media/img/lavori/3_mille_giri/3.jpg)");

        $("#video-compare-container #video1 source").attr("src", "/media/video/works/Buffel_NoVFX.mp4");
        $("#video-compare-container #video2 source").attr("src", "/media/video/works/Buffel_VFX.mp4");
    }
    else if (window.innerWidth <= 720 && oldWidth > 720)
    {
        $(".img-slide #img1").css("background-image", "url(/media/img/lavori/3_mille_giri/1_small.jpg)");
        $(".img-slide #img2").css("background-image", "url(/media/img/lavori/3_mille_giri/2_small.jpg)");
        $(".img-slide #img3").css("background-image", "url(/media/img/lavori/3_mille_giri/3_small.jpg)");

        $("#video-compare-container #video1 source").attr("src", "/media/video/works/Buffel_NoVFX_small.mp4");
        $("#video-compare-container #video2 source").attr("src", "/media/video/works/Buffel_VFX_small.mp4");
    }

    oldWidth = window.innerWidth;
});

$(window).on("scroll touchmove", function() {
    $("#elfsight-script > div > a").remove();
});

// $(window).scrollEnd(function() {
//     scrollEnabled = true;
// });

$(window).on("scroll", function (e) {
    if (!did2)
    {
        if (actualBriocheStep == 0)
            $("#containerBrioche").css("top", $("#containerBriocheEmpty").offset().top);
        else if (actualBriocheStep == 2)
            $("#containerBrioche").css("top",
                $("#containerBriocheEmpty").offset().top +
                $("#containerBriocheEmpty").height() -
                $("#containerBrioche").height()
            );
    }
    
    if (brioche == undefined)
        return;

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
                document.getElementById("video1").play();
                document.getElementById("video2").play();
                newFrame = 44;
                break;
        }
        disableScroll();
        scrollEnabled = false;
        isAutoScrolling++;
        let x = window.innerWidth < 1280 || newBriocheStep == 1 ? "0" : "0";
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
    else if (
        (newBriocheStep < 0 || newBriocheStep > 3) &&
        isAutoScrolling == 0 &&
        !did
    ) {
        did = true;

        let tmp = $("#containerBrioche").offset().top;
        $("#containerBrioche").removeClass("centerVerticallyFixed");
        // $("#containerBrioche").css("top", parseInt(tmp) + "px");

        if (window.innerWidth <= 720)
            tmp -= 60;

        if (newBriocheStep < 0)
            document.getElementById("containerBrioche").style.top = $("#containerBriocheEmpty").offset().top + "px";
        else
            document.getElementById("containerBrioche").style.top = parseInt(tmp) + "px";
    }
    if(isAutoScrolling == -1)
        isAutoScrolling = 0;

    // let h = $("#didascalia-3").offset().top + $("#didascalia-3").height() + 100 - $("#containerBriocheEmpty").offset().top;
    // $("#containerBriocheEmpty").css("height", h);
    
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
        if (window.innerWidth <= 720)
            $("#containerBriocheEmpty").css("min-height", "372vh");
        else
            $("#containerBriocheEmpty").css("min-height", "386vh");
        brioche.move_to(currentFrame);
    });

    if (window.innerWidth > 720)
    {
        $(".img-slide #img1").css("background-image", "url(/media/img/lavori/3_mille_giri/1.jpg)");
        $(".img-slide #img2").css("background-image", "url(/media/img/lavori/3_mille_giri/2.jpg)");
        $(".img-slide #img3").css("background-image", "url(/media/img/lavori/3_mille_giri/3.jpg)");

        $("#video-compare-container #video1 source").attr("src", "/media/video/works/Buffel_NoVFX.mp4");
        $("#video-compare-container #video2 source").attr("src", "/media/video/works/Buffel_VFX.mp4");
    }
});


