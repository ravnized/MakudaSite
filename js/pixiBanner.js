
window.onload = function() {
    var app;
    var video =  document.createElement('video');
    video.loop = true;
    video.crossOrigin = 'anonymous';
    video.preload = 'auto';
    video.src = 'media/video/VideoNoText.mp4';
    video.autoload = true;
    video.muted = true;
    video.playsinline="playsinline";
    var divVideo = document.querySelector('#divVideo');


    var testo = $('textOverlay');
    function initPixi() {
        app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight, resizeTo: window});
        var videoSprite = new PIXI.Sprite.from(video);
        videoSprite.width = window.innerWidth;
        videoSprite.height = window.innerHeight;
        app.stage.addChild(videoSprite);
        var displacementSprite = new PIXI.Sprite.from("media/img/clouds.jpg");
        var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        app.stage.addChild(displacementSprite);
        app.stage.filters = [displacementFilter];
        app.renderer.view.style.transform = 'scale(1)';
        displacementSprite.scale.x = 0;
        displacementSprite.scale.y = 0;

        animate(displacementFilter , displacementSprite);

    }



    function animate(displacementFilter , displacementSprite) {
        var controller = new ScrollMagic.Controller();

        var action = gsap.timeline()
            .to( displacementSprite.scale, 1, { x: 1  , y: 1, ease: Power0.easeInOut, duration: 10})
            .to( displacementFilter.scale, 2, { x: "+="+900  , y: "+="+900, ease: Power0.easeInOut , duration: 15})
            .to('.hero-video', 3, {css: {opacity: 0}, duration: 5})



        var action2 = gsap.timeline()
            .to('#textOverlay', 1, {css: {opacity: 0}, duration: 5})

        var scene = new ScrollMagic.Scene({
            duration: '25%',
            triggerHook: 'onEnter',
        })

            .setPin("#sectionVideo")
            .setTween(action)
            .addTo(controller)
        var scene2 = new ScrollMagic.Scene({
            duration: '15%',
            triggerHook: 'onEnter',
        })
            .setTween(action2)
            .addTo(controller)


    }


    function animateMakudaElement(){
        var controller = new ScrollMagic.Controller();
        var actionFindMe = gsap.timeline()
            .to('#findMe', 3 , {x:"+=100"})
        var actionContacs = gsap.timeline()
            .to('#myContacts', 3 , {x:"+=-100"})

        var actionRightBar = gsap.timeline()
            .to('.makuda-home-link-wrap', 3 , {css: {opacity: 0 }, duration: 10})

        var sceneActionRight = new ScrollMagic.Scene({
            duration: '25%',
            triggerHook: 'onEnter',
        })
            .setTween(actionRightBar)
            .addTo(controller)


        var sceneContact = new ScrollMagic.Scene({
            duration: '25%',
            triggerHook: 'onEnter',
        })
            .setTween(actionContacs)
            .addTo(controller)


        var sceneFindMe = new ScrollMagic.Scene({
            duration: '25%',
            triggerHook: 'onEnter',
        })
            .setTween(actionFindMe)
            .addTo(controller)



    }

    function animateMakudaElementLeft(){
        var controller = new ScrollMagic.Controller();
        var actionPhoto = gsap.timeline()
            .to('#photoPortofolio', 3 , {x:"+=100"})
        var actionWorks = gsap.timeline()
            .to('#exploreWorks', 3 , {x:"+=-100"})


        


        var sceneWorks = new ScrollMagic.Scene({
            duration: '25%',
            triggerHook: 'onEnter',
        })
            .setTween(actionWorks)
            .addTo(controller)


        var scenePhoto = new ScrollMagic.Scene({
            duration: '25%',
            triggerHook: 'onEnter',
        })
            .setTween(actionPhoto)
            .addTo(controller)



    }



/*
    function scrollspy(id, duration, triggerHook,classesBefore, classesAfter) {
        $(id).addClass(classesBefore);
        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: ''+id,
            duration: duration,
            triggerHook: ''+triggerHook,

        })
            .addIndicators()
            .setClassToggle(id, classesAfter)
            .addTo(controller)
    }


    scrollspy('#firstImage',800,'onEnter','hiddenElement','visible');



 */
    initPixi();


    var text = document.getElementById('textOverlay');
    var animationDelay = 6;


    animateMakudaElement();
    animateMakudaElementLeft();


    divVideo.appendChild(app.view);



}

