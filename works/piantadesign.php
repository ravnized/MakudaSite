<!DOCTYPE html>
<?php
$myfile = fopen("../media/json/home-works.json", "r") or die("Unable to open file!");
$to_parse = fread($myfile, filesize("../media/json/home-works.json"));
fclose($myfile);
$parsed = json_decode($to_parse, true);
$view = [];
foreach ($parsed as $v)
    if ($v["id"] == "PIANTANIDA")
        $view = $v;
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>Piantanida</title>
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

    #img1 {
        background-image: url(/media/img/works/piantanida_1.JPG);
    }

    #img2 {
        background-image: url(/media/img/works/piantanida_2.JPG);
        background-size: contain;

    }

    #img3 {
        background-image: url(/media/img/works/piantanida_3.JPG);
    }

    #img4 {
        background-image: url(/media/img/works/piantanida_4.JPG);
    }

    #img5 {
        background-image: url(/media/img/works/piantanida_5.JPG);
    }

    #img6 {
        background-image: url(/media/img/works/piantanida_6.JPG);
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
                                        <source src="/media/video/works/Piantanida%20Deff-1web.m4v" type="video/mp4"/>
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
                                <p><span class="boldOrange">Cliente:</span> Piantanida</p>
                                <p><span class="boldOrange">Direct:</span> Simone Santacroce & Simone Bioli</p>
                                <p><span class="boldOrange">Ph:</span> Simone Bioli</p>
                                <p><span class="boldOrange">Anno:</span> 2020</p>
                                <p><span class="boldOrange">Tecnica:</span>Video Corporate</p>
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
            Color <span class="black-font">Grading</span>
        </p>
        <p class="frase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sagittis tellus vel ultricies. <br>
            Nullam neque lectus, laoreet a efficitur eget, rhoncus gravida quam. Fusce venenatis diam et arcu maximus
            condimentum a non ex.<br> Aenean eget purus vestibulum, molestie neque eget, molestie tellus.
        </p>
        <div class="gif-firstSection">

            <br><br>
            <div id="video-compare-container">
                <div class="mask">
                    <video id="video2"
                           autoplay
                           loop
                           muted
                    >
                        <source

                                src='/media/video/works/Piantanida_Color.mp4'>

                    </video>
                </div>

                <div id="video-clipper">
                    <video id="video1"
                           autoplay
                           loop
                           muted
                    >
                        <source
                                src='/media/video/works/Piantanida_NoColor.mp4'>

                    </video>
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