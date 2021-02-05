<!DOCTYPE html>
<?php
require('workPHP.php');
$view = ButtonBeforeAfter("SUITES");
?>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>SUITES</title>
    <?php require('../components/common_libraries.php') ?>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>

</head>
<body style="background-color: #111; min-height: 100vh">


<style>
    @media only screen and (max-width: 1024px) {
        .pubblicazione-social{
            padding-bottom: 50px;
        }
    }
    #img1 {
        background-image: url(/media/img/works/Suite&Atelier/1.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/Suite&Atelier/2.jpg);

    }

    #img3 {
        background-image: url(/media/img/works/Suite&Atelier/3.jpg);
    }

    #img4 {
        background-image: url(/media/img/works/Suite&Atelier/4.jpg);
    }

    #img5 {
        background-image: url(/media/img/works/Suite&Atelier/5.jpg);
    }

    #img6 {
        background-image: url(/media/img/works/Suite&Atelier/6.jpg);
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
                                        <source src="/media/video/Suite_&_Atelier_Finalev2.mp4"
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
                        <div id="description">
                        </div>
                        <br/>
                        <p class="subVideo">Il Lusso della nicchia</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">
                                    Suites & Atelier è il risultato dellʼincontro di arte ed eleganza, la residenza di
                                    un artista trasformata in un alloggio (5 suites) vicino la riva del lago di Como.
                                    Richiesta: avviare la presenza digitale dellʼattività curando in particolare modo la
                                    storia della struttura.
                                </p>
                            </div>
                            <div class="column subVideoDescription">
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Cliente: </p></div>
                                    <div class="column"><p>Suites & Artelier</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p><span class="boldOrange">Anno: </span></p>
                                    </div>
                                    <div class="column"><p>
                                            2020</p></div>
                                </div>
                                <div class="columns is-mobile">
                                    <div class="column"><p class="boldOrange">Consulenti: </p></div>
                                    <div class="column"><p>Stefano
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
<div class="pubblicazione-social" style="background-color:rgb(255,204,37)">
    <div class="container">
        <p class="title" style="margin-bottom:10px;padding-top:40px;">L'importanza della vendita
            <span class="black-font"> online</span>
        </p>

        <br>
        <div class="container">
            <div class="columns gif-photo">
                <div class="column">
                    <video autoplay class=" video-js vjs-default-skin"
                           style="height: 400px; width: auto; background-color: unset;"
                           data-setup='{"controls":false}' loop muted preload="none">
                        <source src="/media/video/works/Suites%20&%20Atelier%20web.mp4"
                                style="width: auto; height: 600px;"
                                type="video/mp4"/>
                        <p class="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a href="https://videojs.com/html5-video-support/"
                               target="_blank">supports HTML5 video</a>
                        </p>
                    </video>

                </div>
                <div class="column" style="margin-left: -300px">
                    <p class="frase" style="text-align:left;">
                        Al giorno dʼoggi strutture così curate possono permettersi di gestire pochi canali di vendita.
                        La struttura presenta la sua offerta esclusivamente online; avendo riscosso da subito un grande
                        successo la proprietà ha deciso di dedicarsi anche ad eventi di cultura programmando mostre
                        allʼinterno dei propri spazi.
                    </p>
                </div>
            </div>
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
    <br><br>
    <?php
    button('SUITES');
    ?>

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

<?php require "../components/footer.php" ?>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
</body>
</html>
