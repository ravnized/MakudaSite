<!DOCTYPE html>
<?php

require('workPHP.php');
$view = ButtonBeforeAfter("PEDAVENA");


?>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>PEDAVENA</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>


</head>
<body style="background-color: #111; min-height: 100vh">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

<style>
    #img1 {
        background-image: url(/media/img/works/FDP/1.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/FDP/2.jpg);

    }

    #img3 {
        background-image: url(/media/img/works/FDP/3.jpg);
    }

    #img4 {
        background-image: url(/media/img/works/FDP/4.jpg);
    }

    #img5 {
        background-image: url(/media/img/works/FDP/5.jpg);
    }

    #img6 {
        background-image: url(/media/img/works/FDP/6.jpg);
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
                                        <source src="/media/video/works/Pedavena%20Joker-1web.m4v" type="video/mp4"/>
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
                        <p class="subVideo">200 posti da valorizzare</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Siamo stati contattati da uno dei ristoranti più grandi nella zona dellʼalto
                                    milanese che conta più di 200 posti a sedere. La richiesta è stata semplice e
                                    diretta. Aumentare il fatturato soprattutto nei giorni feriali dove non è sfruttata
                                    completamente la potenzialità del locale.
                                </p>
                            </div>
                            <div class="column">
                                <p><span class="boldOrange">Cliente:</span> Fabbrica di Pedavena</p>
                                <p><span class="boldOrange">Anno:</span> Inizio 2019 - Fine 2020</p>
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
    <div class="works-band" style="height: 140%"></div>
    <div class="container">
        <p class="title" style="margin-bottom:10px;padding-top:40px;">
            <span class="black-font">Seguire la Tendenza</span>
        </p>
        <p class="frase">
            Quando il prodotto è valido ed è ben posizionato sul mercato la strada è sicuramente in discesa. Cʼè stato
            solo bisogno di potenziale al massimo la comunicazione digitale per far si che il posto fosse visibili agli
            occhi dei potenziali futuri clienti. E per fare questo occorre un prodotto diverso dal solito. Date
            unʼocchiata.
        </p>
        <div class="gif-firstSection">

            <div class="columns" style="padding-top: 50px">
                <div class="column">
                    <video autoplay class=" video-js vjs-default-skin vjs-16-9"
                           data-setup='{"controls":false}' loop muted preload="none">
                        <source src="/media/video/works/JokerFilm.mp4" type="video/mp4"/>
                        <p class="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a href="https://videojs.com/html5-video-support/"
                               target="_blank">supports HTML5 video</a>
                        </p>
                    </video>

                </div>
                <div class="column">
                    <video autoplay class=" video-js vjs-default-skin vjs-16-9"
                           data-setup='{"controls":false}' loop muted preload="none">
                        <source src="/media/video/works/Pedavena%20Joker.mp4" type="video/mp4"/>
                        <p class="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a href="https://videojs.com/html5-video-support/"
                               target="_blank">supports HTML5 video</a>
                        </p>
                    </video>

                </div>

            </div>
            <p class="frase" style="padding-top: 20px">
                Abbiamo sfruttato lʼuscita del film del momento “Joker” e abbiamo scelto di riprendere una delle scene che sarebbe diventata cult nel giro di poco tempo, ovvero la danza del protagonista sulle scale. In maniera scherzosa lʼabbiamo reinterpretata; questo è il risultato finale.
            </p>
        </div>

        <br><br>
        <p class="title" style="margin-bottom:10px;">
            Qualche Nostro <span class="black-font">Scatto</span>
        </p>
        <p class="frase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel ultricies. <br>
            Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et arcu maximus
            condimentum a non ex.<br>
        </p>
        <br/>

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
<br><br>
<?php
button('PEDAVENA');
?>
<?php require "../components/footer.php" ?>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
</body>
</html>
