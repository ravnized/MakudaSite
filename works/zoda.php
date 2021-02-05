<!DOCTYPE html>
<?php
require('workPHP.php');
$view = ButtonBeforeAfter("ZODA");
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>Zoda</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>

</head>

<body style="background-color:#111;">
<style>

    #imgRectangle_3 {
        background-image: url(/media/img/works/piantanida_1.JPG);
        background-size: contain;
        padding: 20px;
    }

    #img1 {
        background-image: url(/media/img/works/zoda_1.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/zoda_2.jpg);


    }

    #img3 {
        background-image: url(/media/img/works/zoda_3.jpg);
    }

    #img4 {
        background-image: url(/media/img/works/zoda_4.jpg);
    }

    #img5 {
        background-image: url(/media/img/works/zoda_5.jpg);
    }

    #img6 {
        background-image: url(/media/img/works/zoda_6.jpg);
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
                                        <source src="/media/video/works/Oh%20Madre%20Mia%20Finale-1web.m4v"
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
                        <br/>
                        <br/>
                        <p class="subVideo">Messaggio</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Raccontare Il passaggio turbolento e difficile da uno stile di vita afflitto da
                                    dipendenze e falsa gioia ad uno più cosciente e pulito. Il messaggio ha
                                    un'importanza vitale per il target giovanile del cantante, che mira ad esprimere le
                                    proprie difficoltà e ad aprirsi ai propri ascoltatori.
                                </p>
                            </div>
                            <div class="column subVideoDescription">
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Cliente: </p></div>
                                    <div class="column"><p>Daniele "Zoda" Sodano</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Direct: </span></p>
                                    </div>
                                    <div class="column"><p> Simone
                                            Santacroce <br> Taras Snegovoy</p></div>
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
    <div class="works-band"></div>
    <div class="container">
        <p class="title" style="margin-bottom:10px;padding-top:40px;">
            Il Processo <span class="black-font">Creativo</span>
        </p>
        <p class="frase">
            Tutto il processo, a partire dall'idea, avviene a stretto contatto con l'artista, al fine di garantire una
            corretta interpretazione del messaggio centrale ed avere una constante comunicazione efficace.
        </p>
        <br>
        <div class="parallax-image" id="imgRectangle_3"></div>
        <div class="gif-zoda columns" data-animated="true">
            <div class="column"
                 style="margin-top: 120px; transform: scale(1.2); transition: transform 0.8s;">
                <div class="parallax-spacing"></div>
                <div class="parallax-container">
                    <div class="gif-cellulare" style="height: 800px;">
                        <p class="numberRectangle" style="top:100px;">1</p>
                        <p class="titleRectangle">Pre-Produzione</p>
                        <p class="textRectangle">
                            Il prodotto in fase pre produttiva è stato sviluppato in poche settimane interfacciandosi e
                            collaborando con l'artisa constantemente, al fine di comprendere perfettamente l'espressione
                            artistica del cliente.<br><br>
                            - Scrittura <br>
                            - Studio di una migliore soluzione di noleggio <br>
                            - Scenografia <br>
                            - Casting
                        </p>
                    </div>
                </div>
            </div>
            <div class="separator">
                <div class="separator-yellow"></div>
                <div class="separator-black"></div>
            </div>
            <div class="column"
                 style="margin-top: 220px; transform: scale(1); transition: transform 0.8s;">
                <div class="parallax-container"
                >
                    <div class="gif-cellulare" style="height: 800px;">
                        <p class="numberRectangle" style="margin-right: 0; margin-top: -200px">2</p>
                        <p class="titleRectangle">Produzione</p>
                        <p class="textRectangle">
                            La fase produttiva ed esecutiva é stata portata con successo in soli due giorni realizzando
                            comunque una notevole quantitá di scene. <br>
                            Le riprese si sono svolte in 3 principali location ricercate con cura. <br>
                            Macchine e Strumenti tecnici: <br><br>
                            - Blackmagic URSA 4 <br>
                            - 6K G2 per una qualitá professionale <br>
                            - Kit delle lenti ZEISS CP3 <br>
                            - Lente 'PROBE' per filmare dettagli a pochi millimetri di distanza
                        </p>
                    </div>
                </div>

            </div>
            <div class="separator">
                <div class="separator-yellow"></div>
                <div class="separator-black"></div>
            </div>
            <div class="column"
                 style="margin-top: 120px; transform: scale(1.2); transition: transform 0.8s;">
                <div class="parallax-spacing"></div>
                <div class="parallax-container"
                >
                    <div class="gif-cellulare" style="height: 800px;">
                        <p class="numberRectangle" style="margin-right: 0; margin-top: -200px;top:100px;">3</p>
                        <p class="titleRectangle">Post-Produzione</p>
                        <p class="textRectangle">
                            Seguendo lo storyboard le scene sono state montate con: <br>
                            - Effettistica mirata a suscitare l'emozione di "confusione" e di alterazione dello stato
                            mentale dell'artista <br>
                            - Tecniche di editing mirate al messagio <br>
                            - Studio ad hoc del colore su Da Vinci Resolve <br>
                            - Color Grade su piú di 80 clip.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
        <p class="title makuda-color" style="margin-bottom:10px;">
            I Risultati
        </p>
        <p class="frase" style="color: white">
            Dopo sole due settimane dalla pubblicazione del video, sono state raggiunte piú di <span
                    style="color: white; font-weight: 800">180'000
                visulizzazioni</span> <br>
            <br>
            Campagna promo pubblicazione: <br><br>
            Diversi Teaser
        </p>
        <br/>
        <br><br>
        <p class="title" style="margin-bottom:10px;">
            Qualche Nostro <span class="makuda-color">Scatto</span>
        </p>
        <p class="frase" style="color: white">
            Ecco qualche nostro scatto realizzato per i profili social dell'artista che lo ritraggono sul set, abbiamo
            approfittato di questo progetto per aggiungere qualche nostra foto BTS, riuscendo cosí a mostrare
            l'attrezzatura e i set da noi utilizzati.
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
button('ZODA');
?>

<?php require "../components/footer.php" ?>

<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
</body>

</html>