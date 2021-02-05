<!DOCTYPE html>
<?php
require('workPHP.php');
$view = ButtonBeforeAfter("DANZA");

?>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>CAD</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>

</head>
<body style="background-color: #111; min-height: 100vh">
<style>
    #img3 {
        background-image: url(/media/img/works/cad_1.png);
    }

    #img2 {
        background-image: url(/media/img/works/cad_2.png);

    }

    #img1 {
        background-image: url(/media/img/works/cad_3.png);
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
                                        <source src="/media/video/works/Video%20Intervista%20Ballerino%20Deff-1web.m4v"
                                                type="video/mp4"/>
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
                        <p class="subVideo">L'importanza dell' Analisi</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Una scuola storica ha bisogno di rimanere al passo con i tempi in tutti i sensi. La
                                    richiesta del cliente è stata di trasferire la loro offerta anche sul web e di farla
                                    percepire nel modo più aderente possibile alla qualità del servizio offerto. La
                                    chiave in questo caso sono stati i sondaggi interni ed esterni alla struttura che
                                    hanno permesso di individuare facilmente gli obiettivi.
                                </p>
                            </div>
                            <div class="column">
                                <p><span class="boldOrange">Cliente: </span>Centro Arti Danza</p>
                                <p><span class="boldOrange">Anno:</span> Inizio 2019 - Fine 2020</p>
                                <div class="columns">
                                    <div class="column is-two-fifths noPadding"><p><span class="boldOrange">Consulenti:</span></p>
                                    </div>
                                    <div class="column noPadding noPaddingTop marginLeft" style="padding-left: 0;margin-left: -10px;"><p> Stefano
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
    <div class="works-band" style="height: 110%"></div>
    <div class="container">
        <p class="title" style="margin-bottom:10px;padding-top:40px;">
            <span class="black-font">Bello e semplice</span>
        </p>
        <p class="frase">
            Il mood scelto per Centro arti Danza è stato il pulito. Dalla scelta della linea grafica alla attenzione
            sullo scatto fino alla creazione del sito web, la coerenza è stata la mossa vincente per seguire lʼidentità
            della scuola.

        </p>
        <br>
        <div class="container">
            <div class="columns gif-photo is-mobile">
                <div class="column">
                    <div class="img-slide">
                        <div id="img1" class="small-image image-div" style="background-position: top; background-size: contain; background-repeat: no-repeat"></div>
                    </div>
                </div>
                <div class="column">
                    <div class="img-slide">
                        <div id="img2" class="big-image image-div"></div>
                    </div>
                </div>
                <div class="column">
                    <div class="img-slide">
                        <div id="img3" class="small-image image-div" style="background-position: top; background-size: contain; background-repeat: no-repeat"></div>
                    </div>
                </div>
            </div>
        </div>


    </div>


</div>
<?php
button('DANZA');
?>
<?php require "../components/footer.php" ?>

<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
</body>
</html>
