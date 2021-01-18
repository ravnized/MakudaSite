<!DOCTYPE html>
<?php

require('workPHP.php');
$view = ButtonBeforeAfter("BUFFEL");


?>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>BUFFEL</title>
    <link href="/css/work.css" rel="stylesheet" type="text/css"/>
    <link href="/css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="/css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="/css/animations.css" rel="stylesheet" type="text/css"/>
    <?php require('../components/common_libraries.php') ?>
</head>
<body style="background-color: #111; min-height: 100vh">
<style>
    #img1 {
        background-image: url(/media/img/works/3_mille_giri/1.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/3_mille_giri/2.jpg);
    }

    #img3 {
        background-image: url(/media/img/works/3_mille_giri/3.jpg);
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
                            <div class="workBlockImageSub">
                                <div class="container is-max-desktop">
                                    <video autoplay class=" video-js vjs-default-skin vjs-16-9"
                                           data-setup='{"controls":true}' loop muted preload="none">
                                        <source src="/media/video/works/Buffel_2.0.mp4" type="video/mp4"/>
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
                        <p class="subVideo">Dal Brand al Prodotto</p>
                        <br/>
                        <div class="columns is-6">
                            <div class="column is-two-thirds">
                                <p style="color: white;">





                                </p>
                            </div>
                            <div class="column">
                                <p><span class="boldOrange">Cliente:</span> Buffel</p>
                                <p><span class="boldOrange">Anno:</span> Inizio 2020</p>
                                <div class="columns">
                                    <div class="column is-one-third"><p><span class="boldOrange">Consulenti:</span></p>
                                    </div>
                                    <div class="column" style="padding-left: 0;margin-left: -10px;"><p> Stefano
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

<div class="pubblicazione-social">
    <div class="works-band" style="height: 80%"></div>
    <div class="container">
        <p class="title" style="margin-bottom:10px;padding-top:40px;">L'importanza dell'
            <span class="black-font">IdentitÁ</span>
        </p>

        <div class="gif-firstSection">

            <div class="columns" style="padding-top: 50px; ">
                <div class="column">
                    <p class="frase" style="text-align: right;padding-right: 50px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel
                        ultricies. <br>
                        Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et
                        arcu maximus
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel
                        ultricies. <br>
                        Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et
                        arcu maximus
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel
                        ultricies. <br>
                        Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et
                        arcu maximus
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel
                        ultricies. <br>
                        Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et
                        arcu maximus
                    </p>
                </div>
                <div class="column">
                    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                    <div class="elfsight-app-c2df58ca-e01b-4a25-a267-584f337a176c"></div>
                </div>
            </div>

        </div>

        <br><br>
        <p class="title" style="margin-bottom:10px;">
            Andiamo a <span class="makuda-color">Mille</span>
        </p>
        <p class="frase" style="color: white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel ultricies. <br>
            Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et arcu maximus
            condimentum a non ex.<br>
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

            <p class="frase" style="color: white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel ultricies.
                <br>
                Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et arcu
                maximus
                condimentum a non ex.<br>
            </p>
            <br><br>

        </div>


    </div>
</div>

<div class="pubblicazione-social makuda-bgcolor" id="makudaContainer">

    <div class="container">
        <p class="title" style="padding-bottom:10px;padding-top: 10px;">
            Innovazione
        </p>
        <div id="containerBrioche" class="columns is-vcentered">
            <div class="column" style="position:absolute;">
                <p class="title" style="margin-bottom:10px;">
                    Brioche<span class="black-font">3D WOW</span>
                </p>
            </div>
            <div class="column">
                <canvas id="hero-lightpass" style="width: 1400px"></canvas>
            </div>
            <div class="column" style="position:absolute; right: 0">
                <p class="title" id="titleOne" style="transform: translateX(600px)">
                    DUDU <span class="black-font">WOW</span>
                </p>
                <p class="title" id="titleTwo">
                    SECONDO <span class="black-font">WOW</span>
                </p>
                <div class="title" id="titleThree" style="width: 150%">
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


<!--
<div class="container imgs-slide">
    <div class="columns gif-photo">
        <div class="column">
            <div class="img-slide">
                <div id="img4" class="small-image image-div"></div>
            </div>
        </div>
        <div class="column">
            <div class="img-slide">
                <div id="img5" class="big-image image-div"></div>
            </div>
        </div>
        <div class="column">
            <div class="img-slide">
                <div id="img6" class="small-image image-div"></div>
            </div>
        </div>
    </div>

    <div class="columns gif-photo">
        <div class="column">
            <div class="img-slide">
                <div id="img7" class="small-image image-div"></div>
            </div>
        </div>
        <div class="column">
            <div class="img-slide">
                <div id="img8" class="big-image image-div"></div>
            </div>
        </div>
        <div class="column">
            <div class="img-slide">
                <div id="img9" class="small-image image-div"></div>
            </div>
        </div>
    </div>
</div>

-->
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
<script src="buffelJS.js" type="text/javascript"></script>
<script>
    setTimeout(() => {
        $('.eapps-link').remove();
    }, 2000);

</script>
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
