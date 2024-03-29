<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <title>Works - Makuda Consulting</title>
    <?php require('./components/common_libraries.php') ?>
    <link href="css/work.css" rel="stylesheet" type="text/css"/>
    <link href="css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="css/pre_works.css" rel="stylesheet" type="text/css"/>
</head>
<body style="background-color:#111">
<?php require('./components/libraries_after_body.php') ?>

<style>
    .makuda-home-link--contacts.is-loaded .makuda-home-link.is-hover span:first-child {
        color: rgba(255, 197, 32, 1);
        transform: translateX(-250px) !important;
    }

    .makuda-home-link--contacts.is-loaded .makuda-home-link.is-hover span:last-child {
        transform: translateX(-100px) !important;
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
            <p class="makuda-color">Scroll</p>
        </div>
    </div>
</div>
<div class="rightBandSign" data-link="/case_study">
</div>
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
            <span class='noWrap' style="font-size: 4em">CASE STUDY</span>
            <span class='noWrap' style="font-size: 1.5em">strategia, branding, management, social media</span>
        </a>
    </div>
</div>

<div class="mainSection">
    <div class="blackScreenLeft"></div>
    <p class="title" style="padding-top:30px; font-size: 4em;">
        <span class="makuda-color">PRODUZIONI</span>
    </p>


    <section class="sectionFullWorks">
        <div class="workList">
            <?php
            $myfile = fopen("media/json/home-lavori.json", "r") or die("Unable to open file!");
            $to_parse = fread($myfile, filesize("media/json/home-lavori.json"));
            fclose($myfile);
            $parsed = json_decode($to_parse, true);
            $c = 1;
            foreach ($parsed as $view) {
                if (!$view['produzione']) continue;
                $id = $c . "";
                $linkPage = "/lavori/$view[link]";
                $srcImg = "/media/img/lavori/$view[image]";
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css">
<script src="js/utils.js" type="text/javascript"></script>
<script src="js/workJS.js" type="text/javascript"></script>
<script src="js/menu.js" type="text/javascript"></script>
<script src="/js/ScrollToPlugin.min.js"></script>
<script src="js/CSSRulePlugin.min.js" type="text/javascript"></script>
</body>
</html>
