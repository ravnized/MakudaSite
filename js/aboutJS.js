
$( document ).ready(function() {

    var controller = new ScrollMagic.Controller();
    var increment = function() {
        $('.counter-count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
    var animationOn = true;
    var scene = new ScrollMagic.Scene({
        triggerElement: '#containerCounter',
        duration: '25%',
        triggerHook: 'onEnter',
    })
        .on('enter', increment())
        .addTo(controller)
});


