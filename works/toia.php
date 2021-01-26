<!DOCTYPE html>
<?php
require('workPHP.php');
$view = ButtonBeforeAfter("TOIA");
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>TOIA</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>

</head>
<body style="background-color: #111; min-height: 100vh">

<style>
    #img1 {
        background-image: url(/media/img/works/toia_1.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/toia_2.jpg);

    }

    #img3 {
        background-image: url(/media/img/works/toia_3.jpg);
    }

    #img4 {
        background-image: url(/media/img/works/toia_4.jpg);
    }

    #img5 {
        background-image: url(/media/img/works/toia_5.jpg);
    }

    #img6 {
        background-image: url(/media/img/works/toia_6.jpg);
    }
</style>
<?php require("../components/navbar.php"); ?>

<?php require("../components/menu.php"); ?>

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
                                        <source src="/media/video/A_Story_Of_Matteo_Toia.mp4" type="video/mp4"/>
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
                        <!-- <h1 class="tVideo">GELATERIA BUFFEL</h1> -->
                        <br/><br/>
                        <p class="subVideo">STRATEGIA</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Un semplice branded storytelling non sarebbe bastato a creare un legame emotivo
                                    all’immagine del
                                    cliente, dunque abbiamo scritto una sceneggiatura simil cortometraggio con
                                    l’intenzione di rendere
                                    protagonista un bambino, ossia il cliente da giovane. Un personaggio nel quale
                                    ognuno è in grado di
                                    riconoscersi. Un protagonista che si pone come obiettivo quello dell’aiutare
                                    inizialmente amici e
                                    parenti, per dedicarsi successivamente alle piccole e grandi aziende.
                                </p>
                            </div>
                            <div class="column">
                                <p><span class="boldOrange">Cliente:</span> Matteo Toia</p>
                                <p><span class="boldOrange">Direct:</span> Simone Santacroce & Taras Snegovoy</p>
                                <p><span class="boldOrange">Anno:</span> 2020</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="pubblicazione-social makuda-bgcolor">

    <div class="container">
        <p class="title" style="margin-bottom:10px;padding-top:40px;">
            PRODUZIONE E
            <span class="black-font">MONTAGGIO</span>
        </p>
        <p class="frase">
            Per regalare allo spettatore un feeling cinematico abbiamo montato lenti anamorfiche su una Blackmagic
            pocket cinema camera 4k, mantenendo così un aspect ratio 2.4:1, ossia ciò che vi trovereste a vedere
            normalmente ad hollywood.<br><br>
            Abbiamo realizzato un montaggio narrativo seguendo lo storyboard,<br> aggiungendo un pizzico di sperimentazione, una manciata di VFX, sound design e color grading professionale,<br> esportando il video in PRORES per rispettare l’eccelsa qualità alla quale abbiamo puntato fin dall’inizio.
        </p>
        <div class="gif-firstSection">

            <div class="columns" style="padding-top: 50px">
                <div class="column">
                    <video autoplay class=" video-js vjs-default-skin vjs-16-9"
                           data-setup='{"controls":false}' loop muted preload="none">
                        <source src="/media/video/works/BackstageMakuda%20for%20web.mp4" type="video/mp4"/>
                        <p class="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a href="https://videojs.com/html5-video-support/"
                               target="_blank">supports HTML5 video</a>
                        </p>
                    </video>
                    <p class="frase" style="padding-top: 20px">
                        Video Backstage realizzato da Mattia Oliva
                        <br>

                    </p>
                </div>
                <div class="column">
                    <video autoplay class=" video-js vjs-default-skin vjs-16-9"
                           data-setup='{"controls":false}' loop muted preload="none"
                           style="background-color: transparent;">
                        <source src="/media/video/works/Time%20Line%2016-9web.mp4"
                                type="video/mp4"/>
                        <p class="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a href="https://videojs.com/html5-video-support/"
                               target="_blank">supports HTML5 video</a>
                        </p>
                    </video>
                    <p class="frase" style="padding-top: 20px">
                        La complessa timeline del progetto
                        <br>
                    </p>
                </div>
            </div>

        </div>
        <br>
        <br>
        <p class="title" style="margin-bottom:10px;">
            Sound<span class="black-font">Track</span>
        </p>

        <br>
        <div id="waveform"></div>
        <div class="columns is-centered">
            <div class="column">
                <div class="buttons is-centered">
                    <button class="button bi bi-play is-medium playMakuda"></button>
                </div>
            </div>
        </div>
        <p class="frase">
            Una completa esperienza visiva è tale solo se unita ad una ricca composizione audio. Proprio per questo ci
            siamo rivolti ad Andy Bruss, compositore e musicista, per creare una colonna sonora inedita appositamente
            per il progetto!<br>
        </p>
        <br><br>


    </div>
</div>




<div class="container imgs-slide">
    <p class="title" style="margin-bottom:10px;">
        Qualche Nostro <span class="makuda-color">Scatto</span>
    </p>
    <p class="frase" style='color: white; text-align:center'>
        Eccoci in azione, di seguito qualche nostro scatto del BTS del video.
    </p>
    <br/>
    <div class="columns gif-photo">
        <div class="column">
            <div class="img-slide">
                <div id="img1" class="small-image image-div"></div>
            </div>
        </div>
        <div class="column">
            <div class="img-slide">
                <div id="img2" class="big-image image-div"></div>
            </div>
        </div>
        <div class="column">
            <div class="img-slide">
                <div id="img3" class="small-image image-div"></div>
            </div>
        </div>
    </div>
    <div class="columns gif-photo">
        <div class="column">
            <div class="img-slide">
                <div id="img4" class="big-image image-div"></div>
            </div>
        </div>
        <div class="column">
            <div class="img-slide">
                <div id="img5" class="small-image image-div"></div>
            </div>
        </div>
        <div class="column">
            <div class="img-slide">
                <div id="img6" class="big-image image-div"></div>
            </div>
        </div>
    </div>
</div>

<div class="full-screen-carousel" style="display:none;">
    <div class="full-screen-carousel-background"></div>
    <div class="full-screen-carousel-container">
        <div id="img1" class="full-screen-carousel-image"></div>
        <div id="img2" class="full-screen-carousel-image"></div>
        <div id="img3" class="full-screen-carousel-image"></div>
        <div id="img4" class="full-screen-carousel-image"></div>
        <div id="img5" class="full-screen-carousel-image"></div>
        <div id="img6" class="full-screen-carousel-image"></div>

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
<br><br>
<?php
button('TOIA');
?>

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
            wavesurfer.load('/media/Audio/AudioToia.mp3');
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
