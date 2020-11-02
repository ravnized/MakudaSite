var menuAnimationFinished = false;
var heightTrinagle = $('#triangleMenu').attr('height') / 2;
var heightTotal = ($(window).height() / 2) - heightTrinagle
$('#triangleMenu').css({'transform': 'translateY(' + heightTotal + 'px)' + ' rotate(-90deg) scale(5)'});

$(function () {
    (function () {
        const blurProperty = gsap.utils.checkPrefix("filter"),
            blurExp = /blur\((.+)?px\)/,
            getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

        gsap.registerPlugin({
            name: "blur",
            get(target) {
                return +(getBlurMatch(target)[1]) || 0;
            },
            init(target, endValue) {
                let data = this,
                    filter = gsap.getProperty(target, blurProperty),
                    endBlur = "blur(" + endValue + "px)",
                    match = getBlurMatch(target)[0],
                    index;
                if (filter === "none") {
                    filter = "";
                }
                if (match) {
                    index = filter.indexOf(match);
                    endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
                } else {
                    endValue = filter + endBlur;
                    filter += filter ? " blur(0px)" : "blur(0px)";
                }
                data.target = target;
                data.interp = gsap.utils.interpolate(filter, endValue);
            },
            render(progress, data) {
                data.target.style[blurProperty] = data.interp(progress);
            }
        });
    })();
})
var letters = $('.letterWrapper');
letters.on('mouseenter', function (event) {

    var lettersLength = $(this).find('.letter').length;
    var numberGenerate;
    var numberGenerated = [];
    for (let i = 0; i < lettersLength; i++) {
        var tl = gsap.timeline();

        do {
            var uscire = false
            numberGenerate = Math.floor(Math.random() * (lettersLength));
            if (!numberGenerated.includes(numberGenerate)) {
                numberGenerated.push(numberGenerate)
                uscire = true
            }
        } while (!uscire)
        var numberGeneratedI = numberGenerated[i].toFixed(0)

        tl.to($(this).children().children()[numberGeneratedI], {
            duration: 0.5,
            rotationX: 100,
            z: -200,
            transformOrigin: '50% 50% -26rem',
            ease: 'Power4.easeIn',
        }, '0.' + (i))


        tl.set($(this).children().children()[numberGeneratedI], {
            rotationX: -90,
            z: -200,
            transformOrigin: '50% 50% -26rem',
            ease: 'Power4.easeOut',
        })
        tl.to($(this).children().children()[numberGeneratedI], {
            duration: 0.7,
            rotationX: 0,
            z: 0,
            transformOrigin: '50% 50% -26rem',
            ease: 'Power4.easeOut',
        })
    }

})


function animateMenu() {
    var tl = gsap.timeline();
    tl.to('.menu-background', {
        duration: 1,
        translateX: '-' + $(window).width() + 'px',
        display: 'initial',
        ease: 'expo.in'
    }, 0)
        .to('.menuWrapper', {duration: 0.2, autoAlpha: 1, display: 'flex'})
        .to('.letter', {duration: 0.5, autoAlpha: 1, blur: 0, translateX: 0})

}

function animateMenuReverse() {
    var tl = gsap.timeline();
    tl.to('.letter', {duration: 0.5, autoAlpha: 0, blur: 10, translateX: '+45%'}, 0)
        .to('.menuWrapper', {duration: 0.2, autoAlpha: 0, display: 'none'})
        .to('.menu-background', {
            duration: 1,
            translateX: '30vw',
            scale: 1,
            display: 'none',
            ease: 'expo.in'
        }, '-=0.5')
        .to('.letter', {translateX: '-45%'})
}

function menuSize() {

    let button = $('.buttonMenu')
    let buttonWidth = $(window).width() / button.length + 1
    let lettersHeight = $('.letter').width()
    for (let i = 0; i < button.length; i++) {
        $(button[i]).css({'margin-left': buttonWidth/5 + 'px', 'font-size': buttonWidth / 6 + 'px'})
    }


}

menuSize()