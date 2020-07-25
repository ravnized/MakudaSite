$(document).ready(function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var progressArr = [0, 100];

    function fillProgress() {
        progressArr.forEach(function (num, index) {
            setTimeout(async function () {
                $('#progress-graphics').val(num);

                await sleep(100);
                $('#progress-photography').val(num);
                await sleep(100);
                $('#progress-videography').val(num);
                await sleep(100);
                $('#progress-marketing').val(num);
                await sleep(100);
            }, 1000 * index);
        });
    }

    var action = gsap.timeline()
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        duration: '50%',
        triggerHook: 'onEnter',
        triggerElement: '#triggerElement',
        offset: '10rem'
    })
        .on('start', function () {
            fillProgress();
        })
        .addTo(controller)

});


