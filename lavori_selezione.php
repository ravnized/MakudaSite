<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <title>Lavori - Makuda Consulting</title>

    <?php require './components/common_libraries.php' ?>
    <link href="css/pre_works.css" rel="stylesheet" type="text/css"/>
    <link href="css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="css/menu.css" rel="stylesheet" type="text/css"/>

</head>
<body style="background-color:#111">
<?php require('./components/libraries_after_body.php') ?>

<?php require "components/loader.html"; ?>

<?php require "components/navbar.php"; ?>

<?php require "components/menu.php"; ?>

<style>
    .makuda-home-link--works.is-loaded .makuda-home-link.is-hover span:first-child {
        transform: translateX(-50px) !important;
        color: rgba(255, 197, 32, 1);
    }

    .makuda-home-link--works.is-loaded .makuda-home-link.is-hover span:last-child {
        transform: translateX(-50px) !important;
        color: rgba(255, 197, 32, 1);
    }


    .makuda-home-link--contacts.is-loaded .makuda-home-link.is-hover span:first-child {
        color: rgba(255, 197, 32, 1);
        transform: translateX(-40px) !important;
    }

    .makuda-home-link--contacts.is-loaded .makuda-home-link.is-hover span:last-child {
        transform: translateX(-40px) !important;
        color: rgba(255, 197, 32, 1);
    }


</style>

<div id='mainSection' class="grained">
    <header>
        <div class="makuda-home-link--works makuda-home-link-wrap is-loaded" style="top: 100%;">
            <div class="makuda-home-link makuda-home-link-works is-link ">
                <a id="text-case-study">
                    <span class='noWrap'>strategia, branding, management, social media</span>
                    <span class='noWrap'>case study</span>
                </a>
            </div>
        </div>
    </header>
    <header>
        <div class="makuda-home-link--contacts makuda-home-link-wrap is-loaded" style="top: 100%;">
            <div class="makuda-home-link is-link ">
                <a id="text-produzioni">
                    <span class='noWrap'>PRODUZIONI</span>
                    <span class='noWrap'>cinematic & spot adv, shooting, 3D VFX</span>
                </a>
            </div>
        </div>
    </header>


    <div id="video-compare-container">
        <div class="mask">
            <video id="video2"
                   preload="auto"
                   loop
                   muted
                   autoplay
                   playsinline
            >
                <source
                        src='/media/video/Toia_preWork.m4v'>

            </video>
        </div>

        <div id="video-clipper">
            <video id="video1"
                   preload="auto"
                   loop
                   muted
                   autoplay
                   playsinline
            >
                <source
                        src='/media/video/Suites_preWork.m4v'>

            </video>
        </div>
    </div>
</div>
<script src="js/CSSRulePlugin.min.js" type="text/javascript"></script>
<script src="js/menu.js" type="text/javascript"></script>
<script src='js/pre_works.js' type='text/javascript'></script>
</body>
</html>
