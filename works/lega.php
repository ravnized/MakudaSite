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
                                        <source src="/media/video/works/" type="video/mp4"/>
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
                                <p><span class="boldOrange">Cliente:</span> DSQuared</p>
                                <p><span class="boldOrange">Direct:</span> Simone Santacroce</p>
                                <p><span class="boldOrange">Anno:</span> 2020</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="pubblicazione-social" style="background-color:#FFBF1B;">
    <div class="container">
        <br/>
        <p class="title" style="margin-bottom:10px;">
            Altri Lavori <span class="black-font">Insieme</span>
        </p>
        <p class="frase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
            Aliquam volutpat eros et blandit maximus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
            Aliquam volutpat eros et blandit maximus.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
            Aliquam volutpat eros et blandit maximus.

        </p>

    </div>
</div>
<br><br>
<?php
button('DSQUARED2');
?>

<?php require "../components/footer.php" ?>
<script src="workJS.js" type="text/javascript"></script>
<script src="/js/menu.js" type="text/javascript"></script>
<script src="/js/aboutJS.js" type="text/javascript"></script>

</body>

</html>