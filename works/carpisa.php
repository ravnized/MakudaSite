<!DOCTYPE html>
<?php
require('workPHP.php');
$view = ButtonBeforeAfter("CARPISA");
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>CARPISA</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>

</head>

<body style="background-color:#111"><?php require('../components/libraries_after_body.php') ?>
<style>
    #img1 {
        background-image: url(/media/img/works/carpisa_foto_1.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/carpisa_foto_2.jpg);

    }

    #img3 {
        background-image: url(/media/img/works/carpisa_foto_3.jpg);
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
                                    <video autoplay class="imageVideo video-js vjs-default-skin vjs-16-9"
                                           data-setup='{"controls":true}' loop muted preload="none">
                                        <source src="/media/video/works/carpisa.mp4" type="video/mp4" label='1080p'/>
                                        <source src="/media/video/works/carpisa-720p.m4v" type="video/mp4" label='720p' selected='true'/>
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
                            <p class="titleVideo noWrap">
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
                                    Inaugurazione apertura del negozio #GoCarpisa x #Helbitz Piazza Cordusio.
                                    Collaborazione che ha permesso all'Architetto e Ricercatore Alessandro Ciambrone di
                                    esprimere la sua visione attraverso un murales visibile salendo al secondo piano del
                                    negozio.
                                    Abbiamo documentato tutto il processo creativo e abbiamo poi postprodotto il girato
                                    per poter consetire la pubblicazione sulla Pagina @carpisaofficial e @gocarpisa
                                </p>
                            </div>
                            <div class="column subVideoDescription">
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Cliente: </p></div>
                                    <div class="column"><p>Carpisa</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Anno: </p></div>
                                    <div class="column"><p>2020</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Agency: </span></p>
                                    </div>
                                    <div class="column"><p>
                                            In Partnership con think+++</p></div>
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
            Pubblicazione <span class="black-font">Social</span>
        </p>
        <p class="frase">
            Le storie sono state pubblicate tutte in 3 giorni diversi in modo da raggiungere un maggior numero di utenti
            e rimarcarne l'efficacia.
        </p>
        <br/>
        <div class="gif-cellulari columns" data-animated="true">
            <div class="column"
                 style="margin-top: 220px; transform: scale(1.2); transition: transform 0.8s; opacity: 0;">
                <video id="video1" autoplay class="imageVideo video-js vjs-default-skin vjs-16-9 gif-cellulare"
                       data-setup='{"controls":false}' loop muted preload="none">
                    <source src="/media/video/works/carpisa_cellulare_3.mp4" type="video/mp4"/>
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and
                        consider upgrading to a web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
                </video>
            </div>
            <div class="column" style="margin-top: 180px; opacity: 0;">
                <video id="video2" autoplay class="imageVideo video-js vjs-default-skin vjs-16-9 gif-cellulare"
                       data-setup='{"controls":false}' loop muted preload="none">
                    <source src="/media/video/works/carpisa_cellulare_1.mp4" type="video/mp4"/>
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and
                        consider upgrading to a web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
                </video>
            </div>
            <div class="column"
                 style="margin-top: 220px; transform: scale(1.2); transition: transform 0.8s; opacity: 0;">
                <video id="video3" autoplay class="imageVideo video-js vjs-default-skin vjs-16-9 gif-cellulare"
                       data-setup='{"controls":false}' loop muted preload="none">
                    <source src="/media/video/works/carpisa_cellulare_2.mp4" type="video/mp4"/>
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and
                        consider upgrading to a web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
                </video>
            </div>
        </div>
    </div>
</div>

<div class="container imgs-slide">
    <p class="title" style="margin-bottom:10px;">
        Le Nostre <span class="makuda-color">FOTO</span>
    </p>
    <p class="frase" style="color: white; text-align:center;">
        Oltre alle produzioni video, abbiamo colto l'occasione per fare qualche scatto del processo creativo intrapreso.
    </p>
    <br><br>

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
<br><br>
<?php
button('CARPISA');
?>

<?php require "../components/footer.php" ?>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
</body>

</html>