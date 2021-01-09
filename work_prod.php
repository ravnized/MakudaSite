<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>Works</title>
    <link href="css/bulma.min.css" rel="stylesheet" />
    <link href="css/work.css" rel="stylesheet" type="text/css" />
    <link href="css/bello.css" rel="stylesheet" type="text/css" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css"
      rel="stylesheet"
    />
    <link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet" />
    <script
      crossorigin="anonymous"
      src="https://kit.fontawesome.com/9eeab300fc.js"
    ></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
  </head>
  <body style="background-color: #111">

    <?php require "components/navbar.php";?>

    <?php require "components/menu.php";?>

    <div class="mainSection" style="transform: translateY(600px); opacity: 0">
      <section class="sectionFullWorks">
        <div class="workList">
        <?php $id = '1';
$linkPage = '/works/Works_Toia.php';
$srcImg = '/media/img/Matteo_Toia.jpg';
$title = 'Zoda';
$subTitle;
include './components/workListTemplate.php';?>

<?php $id = '2';
$linkPage = '/works/Works_Toia.php';
$srcImg = '/media/img/Matteo_Toia.jpg';
$title = 'DSQuared2';
$subTitle;
include './components/workListTemplate.php';?>

<?php $id = '3';
$linkPage = '/works/Works_Toia.php';
$srcImg = '/media/img/Matteo_Toia.jpg';
$title = 'Carpisa';
$subTitle;
include './components/workListTemplate.php';?>

<?php $id = '4';
$linkPage = '/works/Works_Toia.php';
$srcImg = '/media/img/Matteo_Toia.jpg';
$title = 'MATTEO TOIA';
$subTitle;
include './components/workListTemplate.php';?>

<?php $id = '5';
$linkPage = '/works/Works_Toia.php';
$srcImg = '/media/img/Matteo_Toia.jpg';
$title = 'PIANTANIDA DESIGN';
$subTitle = 'quello che mi deve il $';
include './components/workListTemplate.php';?>


        </div>
      </section>
    </div>

    <?php require "components/footer.php"?>

    <script src="https://vjs.zencdn.net/7.10.2/video.js"></script>
    <script
      crossorigin="anonymous"
      integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script>
    <script src="js/workJS.js" type="text/javascript"></script>
    <script src="js/menu.js" type="text/javascript"></script>
  </body>
</html>
