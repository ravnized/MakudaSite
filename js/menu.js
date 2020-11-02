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


let letters = document.querySelectorAll(".letterWrapper");
letters.forEach(item => {
    item.tl = gsap.timeline()
    item.isFinished = false
    item.addEventListener('mouseenter', (event) => {
        item.lettersLength = $(item).find('.letter').length;
        item.numberGenerate = 0;
        item.numberGenerated = [];

        if(item.tl.isActive()){
            return
        }

        for (item.i = 0; item.i < item.lettersLength; item.i++) {

            do {
                item.uscire = false
                item.numberGenerate = Math.floor(Math.random() * (item.lettersLength));
                if (!item.numberGenerated.includes(item.numberGenerate)) {
                    item.numberGenerated.push(item.numberGenerate);
                    item.uscire = true;
                }
            } while (!item.uscire)
            item.numberGeneratedI = item.numberGenerated[item.i].toFixed(0)

            item.delay = '0.1' * item.i;
            console.log(item.delay)

            item.tl.to($(item).children().children()[item.numberGeneratedI], {
                delay: item.delay,
                duration: 0.5,
                rotationX: 100,
                z: -200,
                transformOrigin: '50% 50% -26rem',
                ease: 'Power4.easeIn',
            } ,'startAnimation')


            item.tl.set($(item).children().children()[item.numberGeneratedI], {
                delay: item.delay+0.5,
                rotationX: -90,
                z: -200,
                transformOrigin: '50% 50% -26rem',
                ease: 'Power4.easeOut',
            },'startAnimation')
            item.tl.to($(item).children().children()[item.numberGeneratedI], {
                delay: item.delay+0.5,
                duration: 0.7,
                rotationX: 0,
                z: 0,
                transformOrigin: '50% 50% -26rem',
                ease: 'Power4.easeOut',
                onComplete: function () {
                    item.tl.clear()
                    item.isFinished = true
                }
            },'startAnimation')

        }

    })


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
        .to('.letter', {duration: 0.5, blur: 0, translateX: 0, autoAlpha: 1})

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
    for (let i = 0; i < button.length - 1; i++) {
        $(button[i]).css({'padding-right': buttonWidth / 5 + 'px'})
        console.log($(button[i]).outerWidth())
    }
    for (let i = 0; i < button.length; i++) {
        $(button[i]).css({'font-size': buttonWidth / 5 + 'px'})
        $(button[i]).css({'transform': 'scale(0.9)', 'transform-origin': '50% 50%'})
    }
    $(button[3]).css('margin-right', '2rem')


}

menuSize()
$(window).on('resize', function () {

    menuSize()
})


