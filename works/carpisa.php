<!DOCTYPE html>
<?php
$myfile = fopen("../media/json/home-works.json", "r") or die("Unable to open file!");
$to_parse = fread($myfile, filesize("../media/json/home-works.json"));
fclose($myfile);
$parsed = json_decode($to_parse, true);
$view = [];
foreach ($parsed as $v) 
  if($v["id"] == "CARPISA")
    $view = $v;
?>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Carpisa - Cordusio</title>
    <link href="../css/bulma.min.css" rel="stylesheet" />
    <link href="../css/work.css" rel="stylesheet" type="text/css" />
    <link href="../css/bello.css" rel="stylesheet" type="text/css" />
    <link href="../css/menu.css" rel="stylesheet" type="text/css" />
    <link href="../css/animations.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css" rel="stylesheet" />
    <link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet" />
    <script crossorigin="anonymous" src="https://kit.fontawesome.com/9eeab300fc.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
</head>

<body style="background-color:#111;">

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
                                        <video autoplay class="imageVideo video-js vjs-default-skin vjs-16-9"
                                            data-setup='{"controls":true}' loop muted preload="none">
                                            <source src="../media/video/works/carpisa.mp4" type="video/mp4" />
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
                                    <?=$view["title"]?>
                                    <span class="subTitleVideo makuda-color"
                                        style="font-size:0.5em;"><?=$view["subtitle"]?></span>
                                </p>
                            </div>
                            <!-- <h1 class="tVideo">GELATERIA BUFFEL</h1> -->
                            <br /><br />
                            <p class="subVideo">STRATEGIA</p>
                            <br />
                            <div class="columns is-6">
                                <div class="column is-two-thirds">
                                    <p style="color: white;">
                                        Sed ex nisi, condimentum
                                        non magna sollicitudin, imperdiet pellentesque lorem. Cras eget leo
                                        purus. Vivamus a metus eu arcu venenatis venenatis. In volutpat vel
                                        enim non interdum.
                                    </p>
                                </div>
                                <div class="column">
                                    <p><span class="boldOrange">Cliente:</span> Carpisa</p>
                                    <p><span class="boldOrange">Anno:</span> 2020</p>
                                    <p>
                                        <span class="boldOrange">Agency:</span> Think Soluzioni Creative
                                    </p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                Aliquam volutpat eros et blandit maximus.
            </p>
            <br />
            <div class="gif-cellulari columns" data-animated="true">
                <div class="column"
                    style="margin-top: 220px; transform: scale(1.2); transition: transform 0.8s; opacity: 0;">
                    <video id="video1" autoplay class="imageVideo video-js vjs-default-skin vjs-16-9 gif-cellulare"
                        data-setup='{"controls":false}' loop muted preload="none">
                        <source src="/media/video/works/carpisa_cellulare_3.mp4" type="video/mp4" />
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
                        <source src="/media/video/works/carpisa_cellulare_1.mp4" type="video/mp4" />
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
                        <source src="/media/video/works/carpisa_cellulare_2.mp4" type="video/mp4" />
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
        <div class="columns">
            <div class="column">
                <div class="img-slide">
                    <div id="img1" class="small-image" data-toggle="modal" data-target="#myModal"></div>
                </div>
            </div>
            <div class="column">
                <div class="img-slide">
                    <div id="img2" class="big-image"></div>
                </div>
            </div>
            <div class="column">
                <div class="img-slide">
                    <div id="img3" class="small-image"></div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="img-slide">
                    <div id="img4" class="big-image"></div>
                </div>
            </div>
            <div class="column">
                <div class="img-slide">
                    <div id="img5" class="small-image"></div>
                </div>
            </div>
            <div class="column">
                <div class="img-slide">
                    <div id="img6" class="big-image"></div>
                </div>
            </div>
        </div>
        <?php require "../components/footer.php"?>

        <script src="https://vjs.zencdn.net/7.10.2/video.js"></script>
        <script crossorigin="anonymous"
            integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script>
        <script src="workJS.js" type="text/javascript"></script>
        <script src="/js/menu.js" type="text/javascript"></script>
        <script src="/js/aboutJS.js" type="text/javascript"></script>
        <script src="/js/animations.js" type="text/javascript"></script>
</body>

</html>