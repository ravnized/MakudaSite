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
    <div class="mainSection">
      <section class="sectionFullWorks">
        <div class="workList">
<?php
$myfile = fopen("media/json/home-works.json", "r") or die("Unable to open file!");
$to_parse = fread($myfile, filesize("media/json/home-works.json"));
fclose($myfile);
$parsed = json_decode($to_parse, true);
$c = 1;
foreach ($parsed as $view) {
    $id = $c . "";
    $linkPage = "/works/$view[link]";
    $srcImg = "/media/img/$view[image]";
    $title = $view["title"];
    $subTitle = $view['subtitle'];
    $c++;

    include './components/workListTemplate.php';
}
?>
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
