var elementInsideUS = $('#containerDaLevare')
var elementHeroBody = $('#containerText')

$(document).ready(function () {
    window.scrollTo(0, 0)


    var app,
        video = document.createElement('video'),
        divVideo = document.querySelector('#divVideo'),
        oneTime = false;
    video.loop = true;
    video.crossOrigin = 'anonymous';
    video.preload = 'auto';
    video.src = 'media/video/VideoNoText.mp4';
    video.autoload = true;
    video.muted = true;
    video.playsinline = "playsinline";


    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    function enableScroll() {
        document.body.style.overflow = '';
    }


    function initPixi() {
        var isFinished = false;
        app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight, resizeTo: window});
        var videoSprite = new PIXI.Sprite.from(video);
        const container = new PIXI.Container();
        videoSprite.width = app.screen.width;
        videoSprite.height = app.screen.height;
        app.stage.addChild(container);
        container.addChild(videoSprite)
        displacementSprite = new PIXI.Sprite.from("media/img/clouds.jpg");
        displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        app.stage.addChild(displacementSprite);
        app.stage.filters = [displacementFilter];
        app.renderer.view.style.transform = 'scale(1)';
        displacementSprite.scale.x = 0;
        displacementSprite.scale.y = 0;
        displacementSprite.position.x = app.screen.width / 2;
        displacementSprite.position.y = app.screen.height / 2;

        app.ticker.add((delta) => {
            $(window).resize(function () {
                videoSprite.width = app.screen.width;
                videoSprite.height = app.screen.height;
            })
        });


        var scrollTrigger = ScrollTrigger.create({
            trigger: "#section-animated",
            start: '1',
            end: '3000',
            markers: false,
            pin: true,
            scrub: false,
            onEnter: self => {
                var tl = gsap.timeline();
                tl.add(function () {
                    disableScroll()
                })
                    .to(window, {duration: 1, scrollTo: {x: 0, y: 3005}})
                    .to(displacementSprite.scale, {duration: 1, x: '+=10', y: '+=10', ease: Power0.easeInOut}, 0)
                    .to(displacementFilter.scale, {duration: 1, x: "+=900", y: "+=900", ease: Power0.easeInOut}, 0)
                    .to('.hero-video', {css: {opacity: 0}, duration: 1}, 0.7)
                    .to('.hero-body', {css: {opacity: 0}, duration: 1}, 0.7)
                    .add(function () {
                        if (isFinished === false) {
                            $('.hero-body').addClass('hide');
                            $('#containerText').remove();
                            $('#replacement').append(elementInsideUS)
                            isFinished = true;

                        }

                    })
                    .to('#replacement', {duration: 1, css: {scaleX: 1, scaleY: 1, opacity: 1}, ease: "power4.out"},1.3)
                    .add(function () {
                        if (oneTime === false) {
                            animateElements()
                            oneTime = true;

                        }

                        enableScroll()

                    })
            },
            onEnterBack: self => {
                var tl2 = gsap.timeline();
                tl2.add(function () {
                    disableScroll()
                })
                    .to(window, {duration: 1, scrollTo: {x: 0, y: 0}})
                    .to('#replacement', {
                        duration: 1,
                        css: {scaleX: 0.2, scaleY: 0.2, opacity: 0},
                        ease: "power4.out"
                    }, 0)
                    .add(function () {
                        if (isFinished === true) {
                            console.log('animateBack')
                            console.log(isFinished)
                            $('#containerDaLevare').remove();
                            $('.hero-body').append(elementHeroBody);
                            $('.hero-body').removeClass('hide');
                            isFinished = false;
                        }
                    })
                    .to('.hero-video', {css: {opacity: 1}, duration: 1}, 0.5)
                    .to('.hero-body', {css: {opacity: 1}, duration: 1}, 0.5)
                    .to(displacementSprite.scale, {duration: 1, x: '-=10', y: '-=10', ease: Power0.easeInOut}, 1)
                    .to(displacementFilter.scale, {duration: 1, x: "-=900", y: "-=900", ease: Power0.easeInOut}, 1)
                    .add(function () {
                        enableScroll()
                    })

            },
        })


    }

    var finished = false
    const tl3 = gsap.timeline();

    if (!sessionStorage.getItem('doNotShow')) {
        //sessionStorage.setItem( 'doNotShow', true );
        loader()
    } else {
        tl3.to('.pageloader', {
            duration: 0.5, opacity: 0, onComplete: function () {
                $('.pageloader').hide();
            }
        })

        if ($(window).width() > 1024) {
            initPixi();
            divVideo.appendChild(app.view);
        } else {
            animateElements()
            $('.gradient-video').css('height', $('.cardinoVideo').height() + 'px')
        }
    }

    function loader() {
        var pageloader;
        pageloader = $('.pageloaderLogo').find('circle')
        for (let i = 0; i < 20; i+=2) {

            for (let k = 0; k<20; k++){
                var cx2 = $(pageloader[k]).attr('cx'),
                    cy2 = $(pageloader[k]).attr('cy');
                tl3.set(pageloader[k], {attr: {style: 'transform-origin: ' + cx2 + 'px ' + cy2 + 'px'}})
            }
            tl3.to(pageloader[i], {duration: 0.1, attr: {transform: 'matrix(1,0,0,1,0,0)'}, ease: 'power2.in'});
            tl3.to(pageloader[i+1], {duration: 0.1, attr: {transform: 'matrix(1,0,0,1,0,0)'}, ease: 'power2.in'});
            if (i === 20) {
                finished = true
            }
        }

        var makuda = ['M', 'A_2', 'K', 'U', 'D', 'A', 'triangle']
        for (let k = 0; k < makuda.length; k++) {

            tl3.to('#' + makuda[k], {
                duration: 0, opacity: 1, onComplete: function () {

                    //$('#pageloaderImg').css('opacity','1')
/*
                    $(pageloader).remove()
                    for (let l = 5;l>2;l--){
                        tl3.to('#'+makuda[l],{duration:0.2 ,scaleY:0, ease: 'power2.in'})
                    }
                    for (let z = 0;z<2;z++){
                        tl3.to('#'+makuda[z],{duration:0.2,scaleY:0, ease: 'power2.in'})
                    }


 */

                }
            })


        }




        if ($(window).width() > 1024) {
            tl3.add(function () {
                initPixi();
                divVideo.appendChild(app.view);
            }, 3);
        } else {
            animateElements()
            $('.gradient-video').css('height', $('.cardinoVideo').height() + 'px')
        }

            tl3.to('.pageloader', {duration: 1, css: {opacity: 0}})
            tl3.to('.pageloader', {duration: 1, css: {display: 'none'}});






    }


})


