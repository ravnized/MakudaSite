<!DOCTYPE html>
<?php
require('workPHP.php');
$view = ButtonBeforeAfter("DECUBE");

?>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>De cube</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>

</head>
<body style="background-color: #111; min-height: 100vh">

<style>
    #img1 {
        background-image: url(/media/img/works/deCube/decube_1.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/deCube/decube_2.jpg);

    }

    #img3 {
        background-image: url(/media/img/works/toia_3.JPG);
    }

    #img4 {
        background-image: url(/media/img/works/toia_4.JPG);
    }

    #img5 {
        background-image: url(/media/img/works/toia_5.JPG);
    }

    #img6 {
        background-image: url(/media/img/works/toia_6.JPG);
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
                                        <source src="/media/video/works/Habitat%20De%20Cube-web.m4v" type="video/mp4"/>
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
                        <p class="subVideo">Il Risultato delle PR</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Una delle sfide più interessanti e complesse, come dʼaltronde è il momento storico
                                    delle discoteche, settore in forte crisi da ormai diversi anni. Ogni business ha la
                                    propria strada da seguire per arrivare al successo. In questo caso lʼazienda ha
                                    scelto di dare priorità alle pubbliche relazione rispetto a tutto il resto.
                                </p>
                            </div>
                            <div class="column">
                                <p><span class="boldOrange">Cliente: </span>De Cube</p>
                                <p><span class="boldOrange">Anno:</span> Inizio 2019</p>
                                <div class="columns">
                                    <div class="column is-one-third"><p><span class="boldOrange">Consulenti:</span></p>
                                    </div>
                                    <div class="column" style="padding-left: 0;margin-left: -10px;"><p> Stefano
                                            D'onofrio <br> Armando Aspesani <br> Simone Santacroce</p></div>
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
    <div class="works-band" style="height: 150%"></div>
    <div class="container">
        <p class="title" style="margin-bottom:10px;padding-top:40px;">
            <span class="black-font">QUESTO È NETWORK</span>
        </p>
        <p class="frase">
            Qualsiasi azione pensata per DE CUBE ha avuto come obiettivo il coinvolgimento di più persone possibili.
            Dal personale allʼartistico, dai fornitori alle grafiche, fino agli scatti alla comunicazione. Lʼobiettivo è
            stato chiaro fin da subito: il locale deve essere il centro del network creato.

        </p>
        <br>
        <div class="container">
            <div class="columns gif-photo">
                <div class="column is-2">
                </div>
                <div class="column ">
                    <div class="img-slide">
                        <div id="img1" class="big-image image-div" style="background-position: top; background-size: contain; background-repeat: no-repeat "></div>
                    </div>
                </div>
                <div class="column">
                    <div class="img-slide">
                        <div id="img2" class="big-image image-div" style="background-position: top; background-size: contain; background-repeat: no-repeat"></div>
                    </div>
                </div>
                <div class="column is-2">
                </div>

            </div>
        </div>


        <br><br><br>
        <p class="frase">
            Per lanciare l’apertura del locale invernale ci siamo ispirati alla rinomata serie Sky: “Il Trono Di Spade”
            creando uno shooting per tutto il personal pr e influencer che potesse ricordare la suddetta serie. <br>
        </p>
        <br>
        <div class="container is-max-desktop">
            <video autoplay class=" video-js vjs-default-skin vjs-16-9"
                   data-setup='{"controls":true}' loop muted preload="none">
                <source src="/media/video/works/Teaser%20De%20Cube-1web.m4v" type="video/mp4"/>
                <p class="vjs-no-js">
                    To view this video please enable JavaScript, and
                    consider upgrading to a web browser that
                    <a href="https://videojs.com/html5-video-support/"
                       target="_blank">supports HTML5 video</a>
                </p>
            </video>
        </div>
        <br><br>
        <p class="title" style="margin-bottom:10px;">
            Qualche Nostro <span class="makuda-color">Scatto</span>
        </p>
        <p class="frase" style="color: white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel ultricies. <br>
            Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et arcu maximus
            condimentum a non ex.<br>
        </p>

        <div class="container imgs-slide">
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
<?php

button('DECUBE');

?>
<?php require "../components/footer.php" ?>

<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
</body>
</html>
