<!DOCTYPE html>
<?php

require('workPHP.php');
$view = ButtonBeforeAfter("BUFFEL");


?>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>BUFFEL</title>
    <link href="../css/bulma.min.css" rel="stylesheet"/>
    <link href="../css/work.css" rel="stylesheet" type="text/css"/>
    <link href="../css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="../css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="../css/animations.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css" rel="stylesheet"/>
    <link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet"/>
    <script crossorigin="anonymous" src="https://kit.fontawesome.com/9eeab300fc.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

</head>
<body style="background-color: #111; min-height: 100vh">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

<style>
    #img1 {
        background-image: url(/media/img/works/toia_1.JPG);
    }

    #img2 {
        background-image: url(/media/img/works/toia_2.JPG);

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
                                    Sed ex nisi, condimentum
                                    non magna sollicitudin, imperdiet pellentesque lorem. Cras eget leo
                                    purus. Vivamus a metus eu arcu venenatis venenatis. In volutpat vel
                                    enim non interdum.
                                    Sed ex nisi, condimentum
                                    non magna sollicitudin, imperdiet pellentesque lorem. Cras eget leo
                                    purus. Vivamus a metus eu arcu venenatis venenatis. In volutpat vel
                                    enim non interdum.
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
<div class="pubblicazione-social makuda-bgcolor">
<div class="container">
    <p class="title" style="margin-bottom:10px;padding-top: 10px;">
        Innovazione
    </p>
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

<script src="https://vjs.zencdn.net/7.10.2/video.js"></script>
<script crossorigin="anonymous"
        integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
<script>
    setTimeout(() => {
        $('.eapps-link').remove();
    }, 2000);

</script>
</body>
</html>
