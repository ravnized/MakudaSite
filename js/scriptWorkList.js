var topTotalHeight = sessionStorage.getItem('topTotalHeight'),
    centerImageTop = sessionStorage.getItem('centerImageTop'),
    leftImagePos = sessionStorage.getItem('leftImagePos'),
    centerImageLeft = sessionStorage.getItem('centerImageLeft'),
    scrollTop = sessionStorage.getItem('scrollTop');

var scrollNav = (parseInt(scrollTop) * 2) + parseInt(topTotalHeight);


$(document).ready(function () {
    var navBarHeight = $('nav').height(),
        imageVideo = $('.imageVideo');
    imageVideo.css('top', (parseInt(topTotalHeight) - navBarHeight) + 'px')
    $('body').css('height', scrollNav + 'px')
    window.scrollTo(0, parseInt(scrollTop))
    console.log(topTotalHeight, centerImageTop, leftImagePos, centerImageLeft, scrollTop)
    var halfWindowHeight = ((($(window).height() / 2 - topTotalHeight) - centerImageTop) + scrollTop)
    var halfWindowWidth = ($(window).width() / 2 - leftImagePos) - centerImageLeft;

    let tl = gsap.timeline();
    tl.to(window, {duration: 1, ease: "power3.in", scrollTo: 0}, 0);
    tl.to(imageVideo, {
        duration: 1,
        ease: "power3.in",
        css: {x: halfWindowWidth, y: halfWindowHeight, transformOrigin: "center center", scale: 1.5, zIndex: 99}
    }, 0)

    tl.to('body', {
        duration: 1, ease: "power3.in", height: 0, onComplete: function () {
            imageVideo[0].controls = true;
            imageVideo[0].autoplay = true;
            imageVideo[0].muted = false;
        }
    }, 0)
    $('.container').css({'top': $('.workBlockImageSub').height() * 1.5})


    tl.to('.titleVideo', {x: 0, opacity: 1}, 'animationStart')
    tl.to('.subTitleVideo', {x: 0, opacity: 1}, 'animationStart')
    tl.to('.descriptionVideo', {y: 0, opacity: 1}, 'animationStart')


});







