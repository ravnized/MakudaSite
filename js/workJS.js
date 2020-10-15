gsap.registerPlugin(CSSRulePlugin)
var generalItem = $('.workBlockContainer');
var imageVideo = generalItem.find('.imageVideo')
var textVideo = generalItem.find('p');
var arrayListElement = $('.workListItem');
var heightElements = 0;
var halfWindowHeight = 0;
var halfWindowWidth = 0;
var thisPrec;
var allHeight = 0;

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
imageVideo.one('click',function () {
    let navBarHeight = $('nav').height(),
        positionImageVideo = imageVideo.offset(),
        leftImagePos = positionImageVideo.left,
        topImagePos = positionImageVideo.top,
        workListItem = $(this).parent().parent().parent().parent(),
        workList = $(this).parent().parent().parent().parent().parent(),
        idElement = workListItem.attr('id'),
        fileNameRedirect = workListItem.attr('data-file-name'),
        imageHeight = imageVideo.height(),
        imageWidth = imageVideo.width(),
        workBlockImageSub = $(this).parent(),
        containerTitle = workListItem.find('.container'),
        workBlockTitle = workListItem.find('.workBlockTitle');

    console.log(fileNameRedirect)
    thisPrec = this;

    var totalHeight = 0,
        tl = gsap.timeline(),
        cycle = 0,
        topTotalHeight = 0,
        centerImageLeft = 0,
        centerImageTop = 0,
        scrollTop = 0,
        heightContainer = containerTitle.height();
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
    var arrayListElementHeight = $(arrayListElement[0]).height()
    console.log(arrayListElementHeight)
    workListItem.css({'top':(totalHeight)+'px'})
    $('.descVideo').css({'display':'block'})
    containerTitle.css({'top':arrayListElementHeight+'px'})

    //'top':($(arrayListElement[0]).height()-(scrollTop))+'px'
    console.log(heightContainer,workList.height())
    workList.css({'height':((arrayListElementHeight+heightContainer)*2+totalHeight)+'px'})




    halfWindowHeight = ((($(window).height() / 2 - topTotalHeight) - centerImageTop) + scrollTop)
    halfWindowWidth = ($(window).width() / 2 - leftImagePos) - centerImageLeft;
    for (let i = 0; i < arrayListElement.length; i++) {
        if (idElement !== $(arrayListElement[i]).attr('id')) {
            $(arrayListElement[i]).remove();
        }
    }
    tl.set(containerTitle,{css:{x:halfWindowWidth-leftImagePos}})
    tl.to(this, {
        duration: 1,
        ease: "power3.in",
        css: {x: halfWindowWidth, y: halfWindowHeight, transformOrigin: "center center", scale: 1.5, zIndex: 1},
    }, 'startAnimation')
    tl.to(containerTitle, {
        duration: 1,
        ease: "power3.in",
        onComplete: function () {
            $(this).get(0).play();
            containerTitle.removeClass('hide');
            workBlockTitle.remove();
        }
    }, 'startAnimation')
    tl.to(workListItem,{duration:0.5,delay:2,css:{top:0}},'startAnimation')
    tl.to(window,{duration:0.5,delay:2,scrollTo:{x:0,y:0}},'startAnimation')
    tl.to(this, {duration:0.5,delay:2,y:heightContainer},'startAnimation')
    tl.to(workListItem,{duration:0.5,delay:2,css:{height:(arrayListElementHeight+heightContainer)}},'startAnimation')
    tl.to(workList,{duration:0.5,delay:2,css:{height:(arrayListElementHeight+heightContainer)*2}},'startAnimation')
    //tl.to(workBlockImageSub,{duration:0.5,delay:2,css:{top:-scrollTop}},'startAnimation')
    //tl.to(workListItem,{duration:0.5,css:{top:}})
    tl.to('.tVideo', {x: 0, opacity: 1}, 'animationStart')
    tl.to('.subVideo', {x: 0, opacity: 1}, 'animationStart')
    tl.to('.descVideo', {y: 0, opacity: 1, blur: 0}, 'animationStart')
    if (fileNameRedirect === 'toyaMerda') {
        $('.muteButton').removeClass('hide')
        tl.to('.is-floating-left', {x: 0, opacity: 1}, 'animationStart')
    }
    console.log(topTotalHeight, centerImageTop, leftImagePos, centerImageLeft, scrollTop)
})

var muted = true;
$('.muteButton').on('click', function () {
    if ($(thisPrec).is('video')) {
        console.log('eiueueue')
        if (muted === true) {
            $(this).append('<i class="fas fa-volume-mute"></i>')
            $('.fa-volume-up').remove()
            $(thisPrec).get(0).muted = false;
            muted = false;
        } else {
            $(this).append('<i class="fas fa-volume-up"></i>')
            $('.fa-volume-mute').remove()
            $(thisPrec).get(0).muted = true;
            muted = true;
        }
    }




})
