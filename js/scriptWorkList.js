var halfWidth = sessionStorage.getItem('halfWidth'),
    halfHeight = sessionStorage.getItem('halfHeight');


$(document).ready(function () {
    var muted = true;
    var navBarHeight = $('nav').height();
    var imageVideo = $('.imageVideo');
    console.log(halfWidth, halfHeight)


    let tl = gsap.timeline();

    tl.to('body', {
        duration: 1, ease: "power3.in", height: 0, onComplete: function () {
            imageVideo.get(0).play()
            imageVideo.get(0).autoplay = true;
        }
    }, 0)
    $('.container').css({'top': $('.workBlockImageSub').height() * 1.5})





});







