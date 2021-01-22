<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <title>Works</title>
    <?php require('./components/common_libraries.php') ?>
    <link href="css/work.css" rel="stylesheet" type="text/css"/>
    <link href="css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="css/pre_works.css" rel="stylesheet" type="text/css"/>
</head>
<body style="background-color: #111">

<style>.makuda-home-link--contacts.is-loaded .makuda-home-link.is-hover span:first-child {
        color: rgba(255, 197, 32, 1);
        transform: translateX(-70px) !important;
    }

    .makuda-home-link--contacts.is-loaded .makuda-home-link.is-hover span:last-child {
        transform: translateX(0) !important;
        color: rgba(255, 197, 32, 1);
    }
</style>

<?php require "components/navbar.php"; ?>

<?php require "components/menu.php"; ?>

<div class="progress_wrap">
    <div class="progress">
        <div class="progress_w_in">
            <div class="progress_in_selected"></div>
            <div class="progress_in"></div>
        </div>
        <div class="progress_subtitle">
            <p>Scroll</p>
        </div>
    </div>
</div>
<div class="rightBandSign" data-link="/work_prod.php"></div>
<div class="full-screen-carousel-control right" style=" top: 0;
    position: fixed;
    ">
    <div class="full-screen-carousel-arrow right">
        <i class="bi bi-chevron-right makuda-color" style="font-size: 40px;
"></i>
    </div>
</div>

<div class="makuda-home-link--contacts makuda-home-link-wrap is-loaded" style="top: 100%;">
    <div class="makuda-home-link is-link ">
        <a id="text-produzioni" style="cursor: default;">
            <span class='noWrap' style="font-size: 4em">PRODUZIONI</span>
            <span class='noWrap' style="font-size: 1.5em"> cinematic & spot adv, shooting, 3D VFX</span>
        </a>
    </div>
</div>
<div class="mainSection">

    <div class="blackScreenLeft"></div>
    <p class="title" style="padding-top:30px; font-size: 4em;">
        CASE <span class="makuda-color">STUDY</span>
    </p>


    <section class="sectionFullWorks">
        <div class="workList">
            <?php
            $myfile = fopen("media/json/home-works.json", "r") or die("Unable to open file!");
            $to_parse = fread($myfile, filesize("media/json/home-works.json"));
            fclose($myfile);
            $parsed = json_decode($to_parse, true);
            $c = 1;
            foreach ($parsed as $view) {
                if (!$view['case-study']) continue;
                $id = $c . "";
                $linkPage = "/works/$view[link]";
                $srcImg = "/media/img/works/$view[image]";
                $title = $view["title"];
                $subTitle = $view['subtitle'];
                $c++;
                include './components/workListTemplate.php';
            }
            ?>
        </div>
    </section>
</div>

<?php require "components/footer.php" ?>


<script src="js/utils.js" type="text/javascript"></script>
<script src="js/workJS.js" type="text/javascript"></script>
<script src="js/menu.js" type="text/javascript"></script>
</body>
</html>
