<!DOCTYPE html>
<?php

require('workPHP.php');
$view = ButtonBeforeAfter("BUFFEL");


?>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>BUFFEL - Makuda Consulting</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>


</head>
<body style="background-color: #111; min-height: 100vh">
<?php require('../components/libraries_after_body.php') ?>
<style>
    #img1 {
        background-image: url(/media/img/lavori/3_mille_giri/1.jpg);
    }

    #img2 {
        background-image: url(/media/img/lavori/3_mille_giri/2.jpg);
    }

    #img3 {
        background-image: url(/media/img/lavori/3_mille_giri/3.jpg);
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
                                        <source src="/media/video/works/Buffel_2.0.mp4" type="video/mp4" label="2160p"/>
                                        <source src="/media/video/works/Buffel_2.0-1440p.m4v" type="video/mp4" label="1440p"/>
                                        <source src="/media/video/works/Buffel_2.0-1080p.m4v" type="video/mp4" label="1080p"/>
                                        <source src="/media/video/works/Buffel_2.0-720p.m4v" type="video/mp4" label="720p" selected="true"/>
                                        
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
                        <p class="subVideo">Dal Brand al Prodotto</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Lʼazienda nel 2020 si è rivolta a noi per far si che il brand Buffel fosse
                                    riconoscibile e acquistasse man mano nel tempo riconoscibilità. Per questa sfida ci
                                    siamo immersi nel mercato della pasticceria e gelateria preparando insieme alla
                                    proprietà un percorso che ad oggi sta cambiando la storia della società in
                                    questione.
                                </p>
                            </div>
                            <div class="column subVideoDescription">
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Cliente: </p></div>
                                    <div class="column"><p>Buffel</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Anno: </span></p>
                                    </div>
                                    <div class="column"><p>Inizio 2020</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Consulenti: </span></p>
                                    </div>
                                    <div class="column"><p>Stefano
                                            D'onofrio <br>Simone Santacroce <br> Armando Aspesani</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="container">
    <br><br>
    <p class="title" style="margin-bottom:10px;color: white">
        Andiamo a <span class="makuda-color">Mille</span>
    </p>
    <p class="frase" style="color: white">
        Lʼidentità di Buffel risiede molto nei propri prodotti. Ed è così che dopo un lungo periodo di ricerche
        abbiamo creato insieme alla proprietà la “Millegiri”. Si tratta di una brioche iper sfogliata croccante
        fuori e soffice dentro, decorata con colori diversi. Ad oggi da Buffel non si va a fare colazione per una
        brioche, ma si va per la propria “millegiri” preferita. Questo è solo il primo dei prodotto legati Buffel.
    </p>
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
    </div>
</div>

<div id="yellow-under-images" class="makuda-bgcolor" style="width: 100vw;"></div>

<div class="makuda-bgcolor" style="height:86vh;" id="containerBriocheEmpty"></div>

<div class="pubblicazione-social makuda-bgcolor" id="containerBrioche">
    <div class="container">
        <p class="title" id="innovazioneTitle">
            Innovazione
        </p>
        <p class="title titolo-brioche-small">
            <span class="black-font">CGI process</span>
            <span class=""></span>
        </p>
        <div class="columns-brioche">
            <div class="brioche">
                <div id="gif-brioche-div"><img id="gif-brioche" src="/media/gif/brioche.gif"/></div>
                <img src="/media/gif/loader.gif" id="brioche-loader"/>
            </div>
            <div class="columns is-vcentered">
                <div class="column">
                    <p class="title titolo-brioche">
                        CGI <span class="black-font">process</span> 
                    </p>
                </div>
                <div class="column">
                </div>
                <div class="column">
                    <div class="didascalie-brioche">
                        <div id="didascalia-1" class="didascalia-brioche">
                            <p class="title">
                                Modellazione
                                <span class="black-font wow-small">
                                    Dallo studio delle forme all'extrude e bevel.
                                    Il primo processo di creazione
                                </span>
                            </p>
                        </div>
                        <div id="didascalia-2" class="didascalia-brioche">
                            <p class="title">
                                Texturing
                                <span class="black-font wow-small">
                                    Il realismo nasce con lo studio dei materiali e la pittura digitale.
                                    Ogni piccolo dettaglio è importante affinchè il modello si inserisca
                                    bene nella scena
                                </span>
                            </p>
                        </div>
                        <div id="didascalia-3" class="didascalia-brioche">
                            <div>
                                <p class="title" id="video-wow">
                                    Final render
                                </p>
                                <div id="video-compare-container" style="padding-top: 250px; width: 400px">
                                    <div class="mask">
                                        <video id="video2"
                                            autoplay
                                            loop
                                            muted
                                        >
                                            <source

                                                    src='/media/video/works/Buffel_VFX.mp4'>

                                        </video>
                                    </div>

                                    <div id="video-clipper">
                                        <video id="video1"
                                            autoplay
                                            loop
                                            muted
                                        >
                                            <source
                                                    src='/media/video/works/Buffel_NoVFX.mp4'>

                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
<div class='container'>
    <div class="gif-firstSection">
        <div class="columns" style="padding-top: 50px; ">
            <div class="column">
                <p class="frase" style="text-align: right;padding-right: 50px">
                    Nel mondo sono presenti più di 100.000 gelaterie. Perché dovrebbero ricordarsi proprio di noi?
                    Questa è la domanda da cui abbiamo iniziato a lavorare. La risposta di Buffel è di unire il
                    mondo della pasticceria a quello della gelaterie, creando gusti variegati al momento differenti
                    dal mercato attuale. Sperimentare e sondare la risposta degli utenti tramite i social media è
                    stata la chiave e i risultati sono sorprendenti sotto il punto di vista del fatturato.
                </p>
            </div>
            <div class="column" style="min-height: 50vh">
                <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                <div class="elfsight-app-c2df58ca-e01b-4a25-a267-584f337a176c"></div>
            </div>
        </div>
    </div>
</div>
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



<br><br>
<?php
button('BUFFEL');
?>


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
<?php require "../components/works_libraries.php" ?>
<script src="/js/libgif.js" type="text/javascript"></script>
<script src="/js/rubbable.js" type="text/javascript"></script>
 <script src="buffelJS.js" type="text/javascript"></script>
<script src="/js/utils.js" type="text/javascript"></script>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>

<script>
    setTimeout(() => {
        $('.eapps-link').remove();
    }, 2000);

</script>
</body>
</html>
