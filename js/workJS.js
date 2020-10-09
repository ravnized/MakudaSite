gsap.registerPlugin(CSSRulePlugin)
var generalItem = $('.workBlockContainer');
var imageVideo = generalItem.find('img')
var textVideo = generalItem.find('p');
var arrayListElement = $('.workListItem');
var heightElements = 0;
var halfWindowHeight = 0;
var halfWindowWidth = 0;
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
    sessionStorage.setItem('clickOnImage', 'true')
    let navBarHeight = $('nav').height(),
        positionImageVideo = imageVideo.offset(),
        leftImagePos = positionImageVideo.left,
        topImagePos = positionImageVideo.top,
        workListItem = $(this).parent().parent().parent().parent(),
        idElement = workListItem.attr('id'),
        fileNameRedirect = workListItem.attr('data-file-name'),
        imageHeight = imageVideo.height(),
        imageWidth = imageVideo.width();

    console.log(fileNameRedirect)

    var totalHeight = 0,
        tl = gsap.timeline(),
        tl2 = gsap.timeline(),
        cycle = 0,
        topTotalHeight = 0,
        centerImageLeft = 0,
        centerImageTop = 0,
        scrollTop = 0;
    console.log(leftImagePos, topImagePos);
    scrollTop = $(window).scrollTop();
    centerImageLeft = imageWidth / 2;
    centerImageTop = imageHeight / 2;

    console.log('centerx: ' + centerImageLeft + ' centery: ' + centerImageTop)

    while (idElement !== $(arrayListElement[cycle]).attr('id')) {
        totalHeight += $(arrayListElement[cycle]).height();
        cycle++;
    }
    topTotalHeight = totalHeight + topImagePos;


    tl.to(textVideo, {duration: 0.2, css: {opacity: 0}, blur: 10})
    //calcolare il center dell'immagine


    for (let i = 0; i < arrayListElement.length; i++) {

        if (idElement !== $(arrayListElement[i]).attr('id')) {
            tl.to(arrayListElement[i], {duration: 0.2, css: {opacity: 0}})
        }
    }
    sessionStorage.setItem("topTotalHeight",topTotalHeight)
    sessionStorage.setItem("previousItem",this);
    sessionStorage.setItem("centerImageTop",centerImageTop);
    sessionStorage.setItem("leftImagePos",leftImagePos);
    sessionStorage.setItem("centerImageLeft",centerImageLeft);
    sessionStorage.setItem("scrollTop",scrollTop);
    console.log(topTotalHeight,centerImageTop,leftImagePos,centerImageLeft,scrollTop)
    tl.add(function () {
        setTimeout(function () {
            window.location.href = ""+fileNameRedirect+".html";
        }, 0);

    })






    /*
    tl2.delay(5)
    tl2.add(function () {
        console.log('aaaaaaa')
        $('.imageVideo').remove()
        $('.workBlockImageSub').append(element)
        $("video").prop('muted', true);
    })
    console.log(imageHeight, imageWidth);

    tl2.to('video', {
        css: {x: halfWindowWidth, y: halfWindowHeight, transformOrigin: "center center", scale: 1.5, zIndex: 99},
        delay: 2
    })

*/




    /*



         for (let i = 0; i < arrayListElement.length; i++) {
             if (idElement !== $(arrayListElement[i]).attr('id')) {
                 if (i !== 0) {
                     $(arrayListElement[i]).remove();
                 }


             }
         }
         */


    /*
        let elementCssElementlist=$(this).parent().parent().parent().parent();
        let elementCssElementImageSub=$(this).parent();
        tl.to(elementCssElementlist,{duration:0.5,ease:"power2.in",css:{height:'100vh'}},'-=4')
        tl.to(elementCssElementImageSub,{duration:0.5,ease:"power2.in",css:{height:'100vh'}},'-=4')

*/


})




