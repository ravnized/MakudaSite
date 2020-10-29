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

function animateMenu() {
    var tl = gsap.timeline();
    tl.to('.menu-background', {duration: 1, translateX: '-90vw', translateY: '90vh', scale: 50, ease: 'power4.in'})
        .to('.menuWrapper', {duration: 0.2, opacity: 1, display: 'flex'})
        .to('.buttonMenu', {duration: 0.2, translateY: '45%'})
        .to('.letter', {duration: 0.5, opacity: 1, blur: 0, translateY: 0})


    tl.add(function () {
        var letters = $('.letterWrapper');
        letters.one('mouseover', function (event) {
            var lettersLength = $(this).find('.letter').length;
            var numberGenerate;
            var numberGenerated = [];
            for (let i = 0; i < lettersLength; i++) {
                tl = gsap.timeline();

                do {
                    var uscire = false
                    numberGenerate = Math.floor(Math.random() * (lettersLength));
                    if (!numberGenerated.includes(numberGenerate)) {
                        numberGenerated.push(numberGenerate)
                        uscire = true
                    }
                } while (!uscire)
                var numberGeneratedI = numberGenerated[i].toFixed(0)
                tl.to($(this).children()[numberGeneratedI], {
                    duration: 0.3,
                    translateY: '40%',
                    rotateX: 60,
                    transformOrigin: "center center",
                }, '0.' + (i))
                tl.to($(this).children()[numberGeneratedI], {
                    duration: 0.3,
                    opacity: 0,
                    scaleY: 0.2,
                }, '-=0.25')
                tl.set($(this).children()[numberGeneratedI], {
                    translateY: '-30%',
                    opacity: 0,
                    transformOrigin: "center center"
                })
                tl.to($(this).children()[numberGeneratedI], {duration: 0.3, scaleY: 1})
                tl.to($(this).children()[numberGeneratedI], {
                    duration: 0.3,
                    translateY: 0,
                    rotateX: 0,
                    opacity: 1,
                    transformOrigin: "center center",
                }, '-=0.25')
            }
        })
    })
}

function animateMenuReverse() {
    var tl = gsap.timeline();
        tl.to('.letter', {duration: 0.5, opacity: 0, blur: 10, translateY: '-45%'},0)
            .to('.buttonMenu', {duration: 0.2, translateY: '0%'})
            .to('.menuWrapper', {duration: 0.2, opacity: 0 ,display: 'none'})
            .to('.menu-background', {duration: 1, translateX: '100%', translateY: '-100%', scale: 1, ease: 'power4.out'})

}