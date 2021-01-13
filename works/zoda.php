<!DOCTYPE html>

<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>Zoda</title>
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

<body style="background-color:#111;">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
<style>

    #imgRectangle_1 {
        background-image: url(/media/img/works/piantanida_1.JPG);
        background-size: contain;
        padding: 20px;
    }

    #imgRectangle_2 {
        background-image: url(/media/img/works/piantanida_1.JPG);
        background-size: contain;
        padding: 20px;
    }

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

<?php
require('workPHP.php');
$view = ButtonBeforeAfter("ZODA");

?>

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
                        <!-- <h1 class="tVideo">GELATERIA BUFFEL</h1> -->
                        <br/><br/>
                        <p class="subVideo">STRATEGIA</p>
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
                                <p><span class="boldOrange">Cliente:</span> Daniele "Zoda" Sodano</p>
                                <div class="columns">
                                    <div class="column is-one-fifth"><p><span class="boldOrange">Direct:</span></p>
                                    </div>
                                    <div class="column"><p> Simone Santacroce <br> Taras Snegovoy</p></div>
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
    <div class="works-band" style="height: 110vh"></div>
    <div class="container">
        <p class="title" style="margin-bottom:10px;padding-top:40px;">
            Color <span class="black-font">Grading</span>
        </p>
        <p class="frase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel ultricies. <br>
            Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et arcu maximus
            condimentum a non ex.<br> Aenean eget purus vestibulum, molestie neque eget, molestie tellus.
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
                        <p class="textRectangle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
                            sagittis tellus vel
                            ultricies. <br>
                            Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et
                            arcu maximus
                            condimentum a non ex.<br> Aenean eget purus vestibulum, molestie neque eget, molestie tellus.
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
                        <p class="textRectangle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
                            sagittis tellus vel
                            ultricies. <br>
                            Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et
                            arcu maximus
                            condimentum a non ex.<br> Aenean eget purus vestibulum, molestie neque eget, molestie tellus.
                        </p>
                    </div>
                </div>
                <div class="parallax-spacing" style="background-color: #111;"></div>
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
                        <p class="textRectangle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
                            sagittis tellus vel
                            ultricies. <br>
                            Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et
                            arcu maximus
                            condimentum a non ex.<br> Aenean eget purus vestibulum, molestie neque eget, molestie tellus.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel ultricies. <br>
            Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et arcu maximus
            condimentum a non ex.<br>
        </p>
        <br/>
        <br><br>
        <p class="title" style="margin-bottom:10px;">
            Qualche Nostro <span class="makuda-color">Scatto</span>
        </p>
        <p class="frase" style="color: white">
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

<?php require "../components/footer.php" ?>

<script src="https://vjs.zencdn.net/7.10.2/video.js"></script>
<script crossorigin="anonymous"
        integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
</body>

</html>