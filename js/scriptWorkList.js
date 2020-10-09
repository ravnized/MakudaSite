

    var topTotalHeight = sessionStorage.getItem('topTotalHeight'),
        centerImageTop = sessionStorage.getItem('centerImageTop'),
        leftImagePos = sessionStorage.getItem('leftImagePos'),
        centerImageLeft = sessionStorage.getItem('centerImageLeft'),
        scrollTop = sessionStorage.getItem('scrollTop');

    var navbarHeight = $('nav').height();
    if(!scrollTop || !topTotalHeight){
        scrollTop = 0;
        topTotalHeight = 0;
    }


    $('img').css('top',(topTotalHeight-navbarHeight)+'px')
    window.scrollTo(0, scrollTop)
    console.log(topTotalHeight, centerImageTop, leftImagePos, centerImageLeft,scrollTop)

    var halfWindowHeight = ((($(window).height() / 2 - topTotalHeight) - centerImageTop) + scrollTop)
    var halfWindowWidth = ($(window).width() / 2 - leftImagePos) - centerImageLeft;





    let tl = gsap.timeline();

    tl.to($('.workBlockImageSub').children(), {
        duration: 0.5,
        ease: "power3.in",
        css: {x: halfWindowWidth, y: halfWindowHeight, transformOrigin: "center center", scale: 1.5, zIndex: 99}
    })

     
