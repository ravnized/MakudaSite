<!DOCTYPE html>
<?php
require('workPHP.php');
$view = ButtonBeforeAfter("CIROC");
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>CIROC</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>

</head>

<body style="background-color:#111"><?php require('../components/libraries_after_body.php') ?>

<?php require("../components/navbar.php"); ?>

<?php require("../components/menu.php"); ?>
<style>
    @media only screen and (max-width: 1024px) {
        .subTitleVideo:before {
            content: '\a';
            white-space: pre;
        }
    }

    #img1 {
        background-image: url(/media/img/works/ciroc_3.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/ciroc_2.jpg);


    }

    #img3 {
        background-image: url(/media/img/works/ciroc_1.jpg);
    }


</style>
<div class="mainSection">
    <section class="sectionFullWorks">
        <div class="workList">
            <div class="workListItem">
                <div class="container">
                    <div class="workBlockContainer">
                        <div class="workBlock">
                            <div class="workBlockImageSub" style="opacity: 100%">
                                <div class="container is-max-desktop">
                                    <video autoplay class=" video-js vjs-default-skin vjs-16-9"
                                           data-setup='{"controls":true}' loop muted preload="none">
                                        <source src="/media/video/works/Ciroc.m4v" type="video/mp4" label='1080p'/>
                                        <source src="/media/video/works/Ciroc-720p.m4v" type="video/mp4" label="720p" selected="true"/>
                                        <p class="vjs-no-js">
                                            To view this video please enable JavaScript, and
                                            consider upgrading to a web browser that
                                            <a href="https://videojs.com/html5-video-support/"
                                               target="_blank">supports HTML5 video</a>
                                        </p>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container textContainer">
                        <div class='singleWorkBlockTitle'>
                            <p class="titleVideo noWrap" style="font-size: 5em">
                                <?= $view["title"] ?>
                                <span class="subTitleVideo makuda-color"
                                      style="font-size:0.5em;"><?= $view["subtitle"] ?></span>
                            </p>
                        </div>
                        <br/>
                        <div id="description">
                        </div>
                        <br/>
                        <p class="subVideo">CONCEPT</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Destinato alla pubblicazione social, abbiamo realizzato questo video per valorizzare
                                    la partnership fra il rinomato brand francese Ciroc e il locale De Cube Club.
                                    Abbiamo deciso di non realizzare il classico video incentrato esclusivamente sul
                                    prodotto, valorizzando invece la preparazione di un ottimo drink utilizzando come
                                    materia prima la Vodka Ciroc.
                                    Per risaltare maggiormente la preparazione abbiamo deciso di utilizzare come stile
                                    di girato e montato: quello del B-roll, stile che in America sta riscontrando
                                    molto successo.
                                </p>
                            </div>
                            <div class="column subVideoDescription">
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Cliente: </p></div>
                                    <div class="column"><p>Ciroc</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Regia: </span></p>
                                    </div>
                                    <div class="column"><p> Simone Santacroce</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Anno: </span></p>
                                    </div>
                                    <div class="column"><p> 2020</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Tecnica: </span></p>
                                    </div>
                                    <div class="column"><p>B-Roll</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="pubblicazione-social" style="padding:50px 0;background-color:#FFBF1B;">
    <div class="container">
        <p class="title" style="margin-bottom:10px;">
            L'importanza del<span class="black-font">Sound Design</span>
        </p>
        <div id="waveform"></div>
        <div class="columns is-centered">
            <div class="column">
                <div class="buttons is-centered">
                    <button class="button bi bi-play is-medium playMakuda"></button>
                </div>
            </div>
        </div>

        <p class="frase">
            Il suono sicuramente ricopre una delle peculiarità più importanti per la riuscita di un buon B-Roll.
            Abbiamo deciso di emulare con una banca suoni virtuale tutti i rumori presenti sul set durante le riprese,
            coinvolgendo così lo spettatore in maniera attiva nell’osservare il processo di composizione del Drink.
        </p>
        <br/>
        <p class="title" style="margin-bottom:10px;">
            Qualche Nostro <span class="black-font">Scatto</span>
        </p>
        <p class="frase">
            Ecco qualche nostro scatto realizzato per i profili social Ciroc e del locale De Cube Club.
        </p>
        <br/>

        <div class="container imgs-slide">


            <div class="columns is-mobile gif-photo">
                <div class="column is-one-third-desktop">
                    <div class="img-slide">
                        <div id="img1" class="small-image image-div"></div>
                    </div>
                </div>
                <div class="column is-one-third-desktop">
                    <div class="img-slide ">
                        <div id="img2" class="big-image image-div"></div>
                    </div>
                </div>
                <div class="column is-one-third-desktop">
                    <div class="img-slide">
                        <div id="img3" class="small-image image-div"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <br><br>
    <?php
    button('CIROC');
    ?>
</div>

<div class="full-screen-carousel" style="display:none;">
    <div class="full-screen-carousel-background"></div>
    <div class="full-screen-carousel-container">
        <div id="img1" class="full-screen-carousel-image"></div>
        <div id="img2" class="full-screen-carousel-image"></div>
        <div id="img3" class="full-screen-carousel-image"></div>


    </div>
    <div class="full-screen-carousel-control left">
        <div class="full-screen-carousel-arrow">
            <i class="fas fa-chevron-left"></i>
        </div>
    </div>
    <div class="full-screen-carousel-control right">
        <div class="full-screen-carousel-arrow right">
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>

    <a class='cross'>
        <i class="bi bi-plus" style="font-size: 3em"></i>
    </a>

</div>

<?php require "../components/footer.php" ?>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
<script src="https://unpkg.com/wavesurfer.js"></script>
<script>

    $(function () {


        let wavesurfer;

        var AudioContext = window.AudioContext // Default
            || window.webkitAudioContext // Safari and old versions of Chrome
            || false;

        if (AudioContext) {
            var buttonPlay = $('.playMakuda');
            wavesurfer = WaveSurfer.create({
                container: '#waveform',
                waveColor: 'black',
                progressColor: 'black'
            });
            wavesurfer.load('/media/Audio/AudioCiroc.mp3');
            buttonPlay.on('click', function () {
                var context = new AudioContext();
                context.resume().then(() => {
                    wavesurfer.playPause();
                    buttonPlay.toggleClass('bi-play bi-pause');
                })
            });
        } else {
            var buttonPlay = $('.playMakuda');
            wavesurfer = WaveSurfer.create({
                container: '#waveform',
                waveColor: 'black',
                progressColor: 'black'
            });
            wavesurfer.load('/media/Audio/AudioCiroc.mp3');
            buttonPlay.on('click', function () {
                wavesurfer.playPause();
                buttonPlay.toggleClass('bi-play bi-pause');
            })
        }
    })


</script>
</body>

</html>