<!DOCTYPE html>

<?php
require('workPHP.php');
$view = ButtonBeforeAfter("DSQUARED2");
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>DSQUARED</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>

</head>

<body style="background-color:#111;">

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
                                        <source src="/media/video/works/Dsquared2%20Deff%20web.m4v" type="video/mp4"/>
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

                        </div><br/>
                        <p class="subVideo">STRATEGIA</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Grazie al noto DJ Herca abbiamo realizzato questo After Movie del 55esimo compleanno
                                    dei fratelli Dean e Dan Caten fondatori della casa di moda Dsquared.
                                    Questo video oltre all’aspetto celebrativo ha come scopo quello raccontare in chiave
                                    fresca e ritmata una festa anni 80 nelle rinomate
                                    Palestre Ceresio 7.
                                    Presenti nel video troviamo personaggi celebri provenienti da tutti i settori, dal
                                    mondo della moda come Neil Barret, a quello dell’estetica come Aldo coppola e quello
                                    della fotografia come Giampaolo Sgrua.
                                </p>
                            </div>
                            <div class="column subVideoDescription">
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Cliente: </p></div>
                                    <div class="column"><p>DSQuared</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Direct: </span></p>
                                    </div>
                                    <div class="column"><p> Simone Santacroce</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Anno: </span></p>
                                    </div>
                                    <div class="column"><p> 2020</p></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="pubblicazione-social" style="background-color:#FFBF1B;padding-bottom: 50px;">
    <div class="container">
        <br/>
        <p class="title" style="margin-bottom:10px;">
            Altri Lavori <span class="black-font">Insieme</span>
        </p>
        <p class="frase">
            Abbiamo deciso di partecipare attivamente all’iniziativa ideata da Cora Lin e da Herca, iniziativa che aveva
            come scopo quello di aiutare 50
            senzatetto donando ad ognuno un sacchetto contenente un pasto caldo, indumenti termici ecc…

        </p>
        <br/>
        <div class="container is-max-desktop">
            <video autoplay class=" video-js vjs-default-skin vjs-16-9"
                   data-setup='{"controls":true}' loop muted preload="none">
                <source src="/media/video/works/Herca%20Final-1web.m4v" type="video/mp4"/>
                <p class="vjs-no-js">
                    To view this video please enable JavaScript, and
                    consider upgrading to a web browser that
                    <a href="https://videojs.com/html5-video-support/"
                       target="_blank">supports HTML5 video</a>
                </p>
            </video>
        </div>
        <p class="frase" style="padding-top: 30px; padding-bottom: 30px;">
            Presenti e partecipanti in questa iniziativa troviamo : i fratelli Dsquared2, Frank, Felisja in arte
            Fishball e lo chef Nicola Ferrelli.

        </p>

    </div>
    <br><br>
    <?php
    button('DSQUARED2');
    ?>
</div>


<?php require "../components/footer.php" ?>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>

</body>

</html>