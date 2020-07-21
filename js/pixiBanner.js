var elementInsideUS = "<div class=\"container containerDaLevare\" id=\"containerDaLevare\">\n        <div class=\"card\" >\n            <div class=\"container colorContainer\">\n                <div class=\"columns is-vcentered\">\n                    <div class=\"column is-half\">\n                        <div class=\"margin-topCard\">\n                            <figure class=\"image is-square\">\n                                <img src=\"media/img/73401809_390252275190258_686177937147393055_n.jpg\" alt=\"...\" width=\"1000\" height=\"1000\">\n                            </figure>\n                        </div>\n\n                    </div>\n                    <div class=\"column margin-left-right\">\n                        <div>\n                            <h2 class=\"has-text-light is-size-1 makuda-spacing \">INSIDE <span style=\"color: #f6b600\" class=\"makuda-spacing\">US</span></h2>\n                            <p class=\"has-text-light is-size-6\">\n                                <strong style=\"color: #f6b600\">Makuda</strong> è un team di giovani in forte crescita specializzato in <strong style=\"color: #f6b600\">management, marketing & creazione di contenuti.</strong><br>\n                                Aiutiamo chi vuole avere successo con i propri obiettivi migliorando la strategia e <strong style=\"color: #f6b600\">l\'immagine dell’azienda.</strong><br>\n                                Come facciamo? Agiamo insieme all\'azienda fin dall\'inizio, con <strong style=\"color: #f6b600\">progetti di marketing e comunicazione</strong> condivisi e monitorati.<br>\n                                Questo perchè preferiamo partire dalle basi, creando e crescendo assieme.<br>\n                                Il nostro spirito? Non ci limitiamo ad essere commissionati e non ci limitiamo nella <strong style=\"color: #f6b600\">creatività.</strong><br>\n                                <strong style=\"color: #f6b600\">Makuda</strong> progetta il futuro dell’azienda in maniera ambiziosa, esclusiva e di successo migliorando l’esperienza di ogni imprenditore.\n                                <br>\n                                PERCHÈ SCEGLIERE <strong style=\"color: #f6b600\">MAKUDA</strong>?\n\n\n\n                            </p>\n                        </div>\n                        <br>\n                        <div class=\"columns\" id=\"bar\">\n                            <div class=\"column\">\n                                <h2 class=\"h2OverProgress\">Strategia</h2>\n                                <div class=\"h3OverProgress\"></div>\n                                <progress class=\"progress is-makuda\" id=\"progress-graphics\" value=\"0\" max=\"100\"></progress>\n                                <p class=\"pUnderProgress\">Troviamo la strategia migliore in risposta alla complessità dei mercati e alle molteplici attività aziendali.</p>\n                            </div>\n                            <div class=\"column\">\n                                <h2 class=\"h2OverProgress\">Obbiettivo</h2>\n                                <progress class=\"progress is-makuda\" id=\"progress-photography\" value=\"0\" max=\"100\"></progress>\n                                <p class=\"pUnderProgress\">Basiamo la strategia su obiettivi ambiziosi e concreti.</p>\n\n                            </div>\n                        </div>\n                        <div class=\"columns\">\n                            <div class=\"column\">\n                                <h2 class=\"h2OverProgress\">Identità</h2>\n                                <progress class=\"progress is-makuda\" id=\"progress-videography\" value=\"0\" max=\"100\"></progress>\n                                <p class=\"pUnderProgress\">Creiamo e rafforziamo l\'identità aziendale.</p>\n\n                            </div>\n                            <div class=\"column\">\n                                <h2 class=\"h2OverProgress\">Guida</h2>\n                                <progress class=\"progress is-makuda\" id=\"progress-marketing\" value=\"0\" max=\"100\"></progress>\n                                <p class=\"pUnderProgress\">Guidiamo e ampliamo una community aziendale di imprenditori.</p>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>";
var elementHeroBody = "<div class=\"container\" id=\"containerText\">\n" +
    "                <div id=\"textOverlay\" class=\"textOverlay\">\n" +
    "                    <h2 id=\"weAre\" class=\"is-size-1 \">WE ARE <img class=\"makuda-logo\" src=\"media/img/Logo_PNG_Negativo-2-1024x94.png\" alt=\"Makuda\"/></h2>\n" +
    "                    <h2 style=\"text-align: center; letter-spacing: 2em; font-size: medium;\">CONSULTING</h2>\n" +
    "                </div>\n" +
    "            </div>"
var varCounter = false;
var varCounterText = false;
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
            .to( displacementSprite.scale, 10, { x: 1  , y: 1, ease: Power0.easeInOut})
            .to( displacementFilter.scale, 10, { x: "+="+900  , y: "+="+900, ease: Power0.easeInOut},'-=10')
            .to('.hero-video', 10, {css: {opacity: 0}, duration: 5})
            .to('.hero-body',10 ,{css: {opacity: 0}, autoAlpha: 0},'-=5')

            .add(function () {
                $('#replacement').css("margin-top","0");
            })

            .add(function () {
                $('#replacement').css("margin-top","10vh");
            })


            .add(function () {
                if (varCounter === true){
                    $('.containerDaLevare').remove();
                    $('#hero-body').removeClass('hide');
                    $('#makudaElement').removeClass('hide');
                    $('#makudaElement2').removeClass('hide');
                    $('#hero-body').append(elementHeroBody);
                    varCounter = false;
                }
            })
            .add( function() {
                if (varCounter === false){
                    $('#containerText').remove();
                    $('#hero-body').addClass('hide');
                    $('#makudaElement').addClass('hide');
                    $('#makudaElement2').addClass('hide');
                    $('#replacement').append(elementInsideUS)
                    varCounter = true
                }

            })
            .to('#replacement', 200,{css: {scaleX: 1, scaleY: 1,opacity: 1},ease: "back.out(4)",autoAlpha: 1})




        var scene = new ScrollMagic.Scene({
            duration: '150%',
            triggerHook: 'onEnter',
        })

            .setPin("#sectionVideo")
            .setTween(action)
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
            .on("progress", function (e) {
                const element = document.querySelector('#exploreWorks');

                function getTranslate3d (el) {
                    var values = el.style.transform.split(/\w+\(|\);?/);
                    if (!values[1] || !values[1].length) {
                        return [];
                    }
                    return values[1].split(/,\s?/g);
                }
                var resultElement = getTranslate3d(element)
                if (resultElement[0]==='0px'){
                    $('#exploreWorks').removeAttr( 'style' );
                    $('#findMe').removeAttr( 'style' );
                    $('#myContacts').removeAttr( 'style' );
                }



            });





        var scenePhoto = new ScrollMagic.Scene({
            duration: '25%',
            triggerHook: 'onEnter',
        })
            .setTween(actionPhoto)
            .addTo(controller)
            .on("progress" ,function (e) {
                const elementPhoto = document.querySelector('#photoPortofolio');

                function getTranslate3d (el) {
                    var values = el.style.transform.split(/\w+\(|\);?/);
                    if (!values[1] || !values[1].length) {
                        return [];
                    }
                    return values[1].split(/,\s?/g);
                }
                var resultElementPhoto = getTranslate3d(elementPhoto);
                if (parseInt(resultElementPhoto[0],10) < 50){
                    $('#photoPortofolio').removeAttr( 'style' );
                }

            })


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

