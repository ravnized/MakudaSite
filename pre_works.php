<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>Works</title>
    <link href="css/bulma.min.css" rel="stylesheet" />
    <link href="css/pre_works.css" rel="stylesheet" type="text/css" />
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


    <header>
<div class="makuda-home-link--works makuda-home-link-wrap is-loaded" style="top: 100%;">

    <div class="makuda-home-link makuda-home-link-works is-link ">
               <a>
        <span>My Photo Portfolio</span>
        <span>Explore Works</span>
                </a>

    </div>
</div>
</header>
<header>
<div class="makuda-home-link--contacts makuda-home-link-wrap is-loaded" style="top: 100%;">
    <div class="makuda-home-link is-link ">
        <a>
            <span>How to find me</span>
            <span>My Contacts</span>
        </a>
    </div>
</div>
</header>


    <div id="video-compare-container">
    <video id="video2"
      autoplay
      loop
      muted
    >
      <source
      src='/media/video/Suite_&_Atelier_Finalev2.mp4'>

    </video>
    <div id="video-clipper">
      <video id="video1"
        autoplay
        loop
        muted
      >
        <source
        src='/media/video/A_Story_Of_Matteo_Toia.mp4'>

      </video>
    </div>
  </div>
</div>

    <script
      crossorigin="anonymous"
      integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script>
    <script src="js/menu.js" type="text/javascript"></script>
    <script src='js/pre_works.js' type='text/javascript'></script>
  </body>
</html>
