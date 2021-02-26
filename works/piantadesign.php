<!DOCTYPE html>
<?php
require('workPHP.php');
$view = ButtonBeforeAfter("PIANTANIDA");
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>PIANTANIDA</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>

</head>


<body style="background-color:#111;">

<style>
    @media only screen and (max-width: 1024px) {
        .subTitleVideo:before {
            content: '\a';
            white-space: pre;
        }
    }
    #img1 {
        background-image: url(/media/img/works/piantanida_1.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/piantanida_2.jpg);
        background-size: contain;
        background-repeat: no-repeat;

    }

    #img3 {
        background-image: url(/media/img/works/piantanida_3.jpg);
    }

    #img4 {
        background-image: url(/media/img/works/piantanida_4.jpg);
    }

    #img5 {
        background-image: url(/media/img/works/piantanida_5.jpg);
    }

    #img6 {
        background-image: url(/media/img/works/piantanida_6.jpg);
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
                                           data-setup='{"controls":true}' loop muted preload="auto" playsinline>
                                        <source src="/media/video/works/Piantanida.m4v" type="video/mp4" label='1080p'/>
                                        <source src="/media/video/works/Piantanida-720p.m4v" type="video/mp4" label='720p'/>
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


                        <br/><div id="description">

                        </div><br/>

                        <p class="subVideo">CONCEPT</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Ferro, fuoco e passione, sono queste le componenti principali che abbiamo voluto
                                    trasmettere per raccontare questa opera d’arte, un prodotto artigianale made in
                                    italy.
                                    Il nostro scopo era quello di rappresentare attraverso questo video il processo di
                                    produzione attuato con dedizione e passione dal nostro cliente, un attento lavoro di
                                    precisione volto a realizzare un prodotto di qualità.
                                </p>
                            </div>
                            <div class="column subVideoDescription">
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Cliente: </p></div>
                                    <div class="column"><p>Piantanida</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Ph: </p></div>
                                    <div class="column"><p>Simone Bioli</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Anno: </p></div>
                                    <div class="column"><p>2020</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Tecnica: </p></div>
                                    <div class="column"><p>Video Corporate</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Agency: </span></p>
                                    </div>
                                    <div class="column"><p>
                                            In Partnership con think+++</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Regia: </span></p>
                                    </div>
                                    <div class="column"><p> Simone
                                            Santacroce <br> Simone Bioli</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="pubblicazione-social">
    <div class="makuda-bgcolor">

        <div class="container">
            <p class="title" style="margin-bottom:10px;padding-top:40px;">
                Color <span class="black-font">Grading</span>
            </p>
            <p class="frase">
                Grazie al profilo colore LOG della camera da presa abbiamo ottenuto un’ottima materia prima, bene
                esposta ed
                illuminata, è stata poi nostra premura riuscire a colorare le clip dando un feeling cinematico al
                prodotto
                finale.
            </p>
            <div class="gif-firstSection">

                <br><br>
                <div id="video-compare-container">
                    <div class="mask">
                        <video id="video2"
                               autoplay
                               loop
                               muted
                               playsinline
                               preload="auto"
                        >
                            <source

                                    src='/media/video/works/Piantanida_Color.mp4'>

                        </video>
                    </div>

                    <div id="video-clipper">
                        <video id="video1"
                               autoplay
                               loop
                               muted
                               playsinline
                               preload="auto"
                        >
                            <source
                                    src='/media/video/works/Piantanida_NoColor.mp4'>

                        </video>
                    </div>
                </div>
            </div>

            <br><br>
            <p class="title" style="margin-bottom:10px;">
                Qualche Nostro <span class="black-font">Scatto</span>
            </p>
            <p class="frase">
                Di seguito qualche nostro scatto BTS e qualche contenuto realizzato per i social del cliente.
                Il tutto realizzato durante i giorni di girato del video <br>
            </p>
            <br/>
        </div>
    </div>
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
            <div class="column is-one-third-desktop">
                <div class="img-slide">
                    <div id="img4" class="big-image image-div"></div>
                </div>
            </div>
            <div class="column is-one-third-desktop">
                <div class="img-slide">
                    <div id="img5" class="small-image image-div"></div>
                </div>
            </div>
            <div class="column is-one-third-desktop">
                <div class="img-slide">
                    <div id="img6" class="big-image image-div"></div>
                </div>
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
button('PIANTANIDA');
?>
<?php require "../components/footer.php" ?>

<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
<script>


    function trackLocation(e) {
        var rect = videoContainer.getBoundingClientRect(),
            position = ((e.pageX - rect.left) / videoContainer.offsetWidth) * 100;
        if (position <= 100) {
            videoClipper.style.width = position + "%";

        }
    }

    var videoContainer = document.getElementById("video-compare-container")

    var videoClipper = document.getElementById("video-clipper"),
        clippedVideo = videoClipper.getElementsByTagName("video")[0];
    videoContainer.addEventListener("mousemove", trackLocation, false);
    videoContainer.addEventListener("touchstart", trackLocation, false);
    videoContainer.addEventListener("touchmove", trackLocation, false);

</script>
</body>

</html>