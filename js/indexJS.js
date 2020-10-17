var elementInsideUS = "<div class=\"container containerDaLevare\" id=\"containerDaLevare\">\n        <div class=\"card\" >\n            <div class=\"container colorContainer\">\n                <div class=\"columns is-vcentered\">\n                    <div class=\"column is-half\">\n                        <div class=\"margin-topCard\">\n                            <figure class=\"image is-square\">\n                                <img src=\"media/img/73401809_390252275190258_686177937147393055_n.jpg\" alt=\"...\" width=\"1000\" height=\"1000\">\n                            </figure>\n                        </div>\n\n                    </div>\n                    <div class=\"column margin-left-right\">\n                        <div>\n                            <h2 class=\"has-text-light is-size-1 makuda-spacing \">INSIDE <span style=\"color: #f6b600\" class=\"makuda-spacing\">US</span></h2>\n                            <p class=\"has-text-light is-size-6\">\n                                <strong style=\"color: #f6b600\">Makuda</strong> è un team di giovani in forte crescita specializzato in <strong style=\"color: #f6b600\">management, marketing & creazione di contenuti.</strong><br>\n                                Aiutiamo chi vuole avere successo con i propri obiettivi migliorando la strategia e <strong style=\"color: #f6b600\">l\'immagine dell’azienda.</strong><br>\n                                Come facciamo? Agiamo insieme all\'azienda fin dall\'inizio, con <strong style=\"color: #f6b600\">progetti di marketing e comunicazione</strong> condivisi e monitorati.<br>\n                                Questo perchè preferiamo partire dalle basi, creando e crescendo assieme.<br>\n                                Il nostro spirito? Non ci limitiamo ad essere commissionati e non ci limitiamo nella <strong style=\"color: #f6b600\">creatività.</strong><br>\n                                <strong style=\"color: #f6b600\">Makuda</strong> progetta il futuro dell’azienda in maniera ambiziosa, esclusiva e di successo migliorando l’esperienza di ogni imprenditore.\n                                <br>\n                                PERCHÈ SCEGLIERE <strong style=\"color: #f6b600\">MAKUDA</strong>?\n\n\n\n                            </p>\n                        </div>\n                        <br>\n                        <div class=\"columns\" id=\"bar\">\n                            <div class=\"column\">\n                                <h2 class=\"h2OverProgress\">Strategia</h2>\n                                <div class=\"h3OverProgress\"></div>\n                                <progress class=\"progress is-makuda\" id=\"progress-graphics\" value=\"0\" max=\"100\"></progress>\n                                <p class=\"pUnderProgress\">Troviamo la strategia migliore in risposta alla complessità dei mercati e alle molteplici attività aziendali.</p>\n                            </div>\n                            <div class=\"column\">\n                                <h2 class=\"h2OverProgress\">Obbiettivo</h2>\n                                <progress class=\"progress is-makuda\" id=\"progress-photography\" value=\"0\" max=\"100\"></progress>\n                                <p class=\"pUnderProgress\">Basiamo la strategia su obiettivi ambiziosi e concreti.</p>\n\n                            </div>\n                        </div>\n                        <div class=\"columns\">\n                            <div class=\"column\">\n                                <h2 class=\"h2OverProgress\">Identità</h2>\n                                <progress class=\"progress is-makuda\" id=\"progress-videography\" value=\"0\" max=\"100\"></progress>\n                                <p class=\"pUnderProgress\">Creiamo e rafforziamo l\'identità aziendale.</p>\n\n                            </div>\n                            <div class=\"column\">\n                                <h2 class=\"h2OverProgress\">Guida</h2>\n                                <progress class=\"progress is-makuda\" id=\"progress-marketing\" value=\"0\" max=\"100\"></progress>\n                                <p class=\"pUnderProgress\">Guidiamo e ampliamo una community aziendale di imprenditori.</p>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>";
var elementHeroBody = "<div class=\"container\" id=\"containerText\">\n" +
    "                <div id=\"textOverlay\" class=\"textOverlay\">\n" +
    "                    <h2 id=\"weAre\" class=\"is-size-1 \">WE ARE <img class=\"makuda-logo\" src=\"media/img/Logo_PNG_Negativo-2-1024x94.png\" alt=\"Makuda\"/></h2>\n" +
    "                    <h2 style=\"text-align: center; letter-spacing: 2em; font-size: medium;\">CONSULTING</h2>\n" +
    "                </div>\n" +
    "            </div>"


$(document).ready(function () {


    var tl = gsap.timeline(),
        tl2 = gsap.timeline(),
        app,
        video = document.createElement('video'),
        isFinished = false,
        divVideo = document.querySelector('#divVideo'),
        progressArr = [0, 100];

    video.loop = true;
    video.crossOrigin = 'anonymous';
    video.preload = 'auto';
    video.src = 'media/video/VideoNoText.mp4';
    video.autoload = true;
    video.muted = true;
    video.playsinline = "playsinline";


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    function enableScroll() {
        document.body.style.overflow = '';
    }


    function fillProgress() {
        progressArr.forEach(function (num, index) {
            setTimeout(async function () {

                $('#progress-graphics').val(num);
                await sleep(100);
                $('#progress-photography').val(num);
                await sleep(100);
                $('#progress-videography').val(num);
                await sleep(100);
                $('#progress-marketing').val(num);
                await sleep(100);

            }, 1000 * index);
        });
    }

    ScrollTrigger.create({
        trigger: "#section-animated",
        start: 'top',
        end: '+=3000',
        markers: false,
        pin: true,
        scrub: false,
        onEnter: self => {
            disableScroll();
            animate();

        },
        onEnterBack: self => {
            disableScroll();
            animateBackwards();
        },
    })

    function initPixi() {

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


    }

    function animateBackwards() {
        tl2.to(window, {duration: 1, scrollTo: {x: 0, y: 0}})
            .to('#replacement', {duration: 1, css: {scaleX: 0, scaleY: 0, opacity: 0}, ease: "power2.out"}, 0)
            .add(function () {
                if (isFinished === true) {
                    $('.containerDaLevare').remove();
                    $('#hero-body').removeClass('hide');
                    $('#hero-body').append(elementHeroBody);
                    isFinished = false;
                }
            })
            .to('.hero-body', {css: {opacity: 1}, duration: 1}, 1)
            .to('.hero-video', {css: {opacity: 1}, duration: 1}, 1)
            .to(displacementSprite.scale, {duration: 0.5, x: '-=10', y: '-=10', ease: Power0.easeInOut}, 1)
            .to(displacementFilter.scale, {duration: 0.5, x: "-=" + 900, y: "-=" + 900, ease: Power0.easeInOut}, 1)
            .add(enableScroll())
    }

    function animate() {
        tl.to(window, {duration: 1, scrollTo: {x: 0, y: '3000'}})
            .to(displacementSprite.scale, {duration: 1, x: '+=10', y: '+=10', ease: Power0.easeInOut}, 0)
            .to(displacementFilter.scale, {duration: 1, x: "+=" + 900, y: "+=" + 900, ease: Power0.easeInOut}, 0)
            .to('.hero-video', {css: {opacity: 0}, duration: 1}, 1)
            .to('.hero-body', {css: {opacity: 0}, duration: 1}, 1)
            .add(function () {
                if (isFinished === false) {
                    $('#containerText').remove();
                    $('#hero-body').addClass('hide');
                    $('#replacement').append(elementInsideUS)
                    isFinished = true;
                }

            })
            .to('#replacement', {duration: 1, css: {scaleX: 1, scaleY: 1, opacity: 1}, ease: "power2.out"})
            .add(function () {
                fillProgress()
            })
            .to(window, {duration: 0.5, scrollTo: {x: 0, y: 3100}})
            .add(enableScroll())
    }


    const tl3 = gsap.timeline();
    tl3.add(function () {
        initPixi();
        divVideo.appendChild(app.view);
    }, 3);
    tl3.to('.pageloader', {duration: 1, delay: 3, css: {opacity: 0}}, 0);

    tl3.to('.pageloader', {duration: 1, css: {y: -100 + '%'}});

})


