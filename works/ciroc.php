<!DOCTYPE html>
<?php
$myfile = fopen("../media/json/home-works.json", "r") or die("Unable to open file!");
$to_parse = fread($myfile, filesize("../media/json/home-works.json"));
fclose($myfile);
$parsed = json_decode($to_parse, true);
$view = [];
foreach ($parsed as $v)
    if ($v["id"] == "CIROC")
        $view = $v;
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <title>Ciroc</title>
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

<?php require("../components/navbar.php"); ?>

<?php require("../components/menu.php"); ?>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
<style>
    #img1 {
        background-image: url(/media/img/works/ciroc_3.jpg);
    }

    #img2 {
        background-image: url(/media/img/works/ciroc_2.jpg);


    }

    #img3 {
        background-image: url(/media/img/works/Ciroc.png);
    }


</style>
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
                                        <source src="/media/video/works/Ciroc%20B%20Roll-1%20web.m4v" type="video/mp4"/>
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
                                <p><span class="boldOrange">Cliente:</span> Ciroc</p>
                                <p><span class="boldOrange">Direct:</span> Simone Santacroce</p>
                                <p><span class="boldOrange">Anno:</span> 2020</p>
                                <p><span class="boldOrange">Tecnica:</span> B-Roll</p>
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
            L'importanza del<span class="black-font">Sound Design</span>
        </p>
        <div id="waveform"></div>
        <div class="columns is-centered">
            <div class="column">
                <div class="buttons is-centered">
                    <button class="button is-dark bi bi-play is-medium playMakuda"></button>
                </div>
            </div>
        </div>

        <p class="frase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
            Aliquam volutpat eros et blandit maximus.
        </p>
        <br/>
        <p class="title" style="margin-bottom:10px;">
            Qualche Nostro <span class="black-font">Scatto</span>
        </p>
        <p class="frase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
            Aliquam volutpat eros et blandit maximus.
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
<?php require "../components/footer.php" ?>
<script src="https://unpkg.com/wavesurfer.js@4.3.0/dist/wavesurfer.js"></script>
<script src="https://vjs.zencdn.net/7.10.2/video.js"></script>
<script crossorigin="anonymous"
        integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>
<script>

    $(function () {
        var buttonPlay = $('.playMakuda');
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'black',
            progressColor: 'black'
        });
        wavesurfer.load('/media/Audio/AudioCiroc.mp3');
        buttonPlay.on('click', function () {
            var context = new AudioContext();
            context.resume().then(() => {
                wavesurfer.playPause();
                buttonPlay.toggleClass('bi-play bi-pause');
            })
        });
    });
</script>
</body>

</html>