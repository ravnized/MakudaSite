gsap.registerPlugin(CSSRulePlugin)
var generalItem = $('.workBlockContainer');
var imageVideo = generalItem.find('img')
var textVideo = generalItem.find('p');
var arrayListElement = $('.workListItem');
var heightElements = 0;
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


console.log(textVideo)
imageVideo.click(function () {
    let navBarHeight = $('nav').height(),
        positionImageVideo = imageVideo.offset(),
        leftImagePos = positionImageVideo.left,
        topImagePos = positionImageVideo.top,
        workListItem = $(this).parent().parent().parent().parent(),
        idElement = workListItem.attr('id'),
        imageHeight = imageVideo.height(),
        imageWidth = imageVideo.width();

    var totalHeight = 0,
        tl = gsap.timeline(),
        cycle = 0,
        topTotalHeight = 0,
        centerImageLeft = 0,
        centerImageTop = 0;
    console.log(leftImagePos, topImagePos);

    centerImageLeft = imageWidth / 2;
    centerImageTop = imageHeight / 2;

    console.log('centerx: ' + centerImageLeft + ' centery: ' + centerImageTop)

    while (idElement !== $(arrayListElement[cycle]).attr('id')) {
        totalHeight += $(arrayListElement[cycle]).height();
        cycle++;
    }
    topTotalHeight = totalHeight + topImagePos;

    console.log(topTotalHeight);
    //calcolare il center dell'immagine

    tl.to(textVideo, {duration: 0.5, ease: "power1.out", css: {opacity: 0}, blur: 10})

    for (let i = 0; i < arrayListElement.length; i++) {

        if (idElement !== $(arrayListElement[i]).attr('id')) {

            tl.to(arrayListElement[i], {duration: 0.2, css: {opacity: 0}})

        }
    }
    var halfWindowHeight = (($(window).height() / 2 - topTotalHeight) - centerImageTop) + $(window).scrollTop()
    var halfWindowWidth = ($(window).width() / 2 - leftImagePos) - centerImageLeft


    tl.to(this, {duration: 1.5, ease: "power2.in", css: {x: halfWindowWidth, y: halfWindowHeight}})
    tl.to(this, {
        duration: 2, ease: "power3.in", css: {transformOrigin: "center center", scale: 1.5}, onComplete: function () {
            console.log('inizio ciclo')
            for (let i = 0; i < arrayListElement.length; i++) {
                console.log('inizio ciclo')
                if (idElement !== $(arrayListElement[i]).attr('id')) {
                    console.log('trovato')

                    if (i !== 0) {
                        console.log('rimosso')
                        $(arrayListElement[i]).remove();
                    }


                }
            }


        }
    })


    /*
        let elementCssElementlist=$(this).parent().parent().parent().parent();
        let elementCssElementImageSub=$(this).parent();
        tl.to(elementCssElementlist,{duration:0.5,ease:"power2.in",css:{height:'100vh'}},'-=4')
        tl.to(elementCssElementImageSub,{duration:0.5,ease:"power2.in",css:{height:'100vh'}},'-=4')

*/


})




