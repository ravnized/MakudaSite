$(function () {
    var tl = gsap.timeline();
    tl.to('.pageloader',{duration: 1,delay:3,css:{opacity:0}},0);
    tl.to('.pageloader',{duration: 1,css:{y: -100+'%'}});
    document.querySelector('.pageloader').addEventListener('touchstart touchmove touchend', function (e) {
        e.preventDefault();
    });
})