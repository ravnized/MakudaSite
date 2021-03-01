<!DOCTYPE html>

<?php
require('workPHP.php');
$view = ButtonBeforeAfter("LEGABASKET");
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>LEGABASKET</title>
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
                                        <source src="/media/video/works/LBA.mp4" type="video/mp4" label='720p' selected='true'/>
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
                        <p class="subVideo">STRATEGIA</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Grazie a Gaia Accoto, anchor woman della Lega Basket Serie A, abbiamo realizzato
                                    vari prodotti videografici per la federazione.
                                    Dai social media alla web tv e in quest’ultimo caso anche canali televisivi come Rai
                                    Sport.
                                    Tutti i contenuti da noi realizzati sono visibili sui social di Gaia Accoto e della
                                    Lega Basket Serie A sul loro sito web ufficiale.
                                </p>
                            </div>
                            <div class="column subVideoDescription">
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Cliente: </p></div>
                                    <div class="column"><p>LBA</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Regia: </span></p>
                                    </div>
                                    <div class="column"><p>
                                            Simone Bioli <br> Riccardo Bitonto</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Anno: </p></div>
                                    <div class="column"><p>Inzio 2019 - In Corso</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<br><br>
<?php
button('LEGABASKET');
?>



<?php require "../components/footer.php" ?>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>

</body>

</html>