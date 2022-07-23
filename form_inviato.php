<!DOCTYPE html>
<html lang="en">
  <head>
    <?php require './components/common_libraries.php' ?>
    <!-- Event snippet for Website lead conversion page -->
    <!-- <script> gtag('event', 'conversion', {'send_to': 'AW-397981285/K_ReCN_18vwBEOXs4r0B'}); </script> -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Makuda Consulting</title>
    <meta name="description" content="Grazie per averci contattato">
    <link href="css/pre_works.css" rel="stylesheet" type="text/css"/>
    <link href="css/menu.css" rel="stylesheet" type="text/css"/>
    <link href="css/bello.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/contacts.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css"
      type="text/css"
    />
    <script
      src="https://kit.fontawesome.com/9eeab300fc.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/openlayers/4.6.5/ol.js"
      integrity="sha512-O7kHS9ooekX8EveiC94z9xSvD/4xt10Qigl6uEKvspYykdux3Ci5QNu5fwi4ca0ZkZI/oCgx5ja8RklWUEqzxQ=="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"
      integrity="sha512-UdIMMlVx0HEynClOIFSyOrPggomfhBKJE28LKl8yR3ghkgugPnG6iLfRfHwushZl1MOPSY6TsuBDGPK2X4zYKg=="
      crossorigin="anonymous"
    ></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <style>
      .h1Big {
        font-size: 4em;
        line-height: 1.2em;
        margin-bottom: 10px;
      }
      .h1Small {
        font-size: 1.5em;
      }
      .video {
        width: 80vw;
        max-width: 1370px;
        margin-bottom: 30px;
      }

      @media only screen and (max-width: 1024px) {
        .h1Big {
          font-size: 3em;
        }
        .h1Small {
          font-size: 1.2em;
        }
      }

      @media only screen and (max-width: 915px) {
        .h1Big {
          font-size: 3em;
        }
        .h1Small {
          font-size: 1.2em;
        }
      }

      @media only screen and (max-width: 768px) {
        .h1Big {
          font-size: 2em;
          margin-top: 8px;
          margin-bottom: 20px;
        }
        .h1Small {
          font-size: 0.9em;
        }
      }
    </style>
  </head>
  <body style="background-color:#111; max-height: unset !important;">
    <?php require('./components/libraries_after_body.php') ?>

    <?php require("./components/navbar.php"); ?>

    <?php require("./components/menu.php"); ?>

    <div class="container startContainer" style="min-height: unset; margin-bottom: 20px;">
      <div class="columns" style="margin-top: 3em">
        <div class="column" style="text-align: center; padding-bottom: 10px;">
          <img
            src="/media/img/LogoIcona_PNG_Negativo(1).png"
            height="100px"
            width="100px"
            alt=""
          />
          <h1 class="h1Big"> Grazie per averci contattato! </h1>
          <h2 class="h1Small"> Risponderemo tempestivamente al tuo messaggio. </h2>
          <br><br>
          <h2 class="h1Small"> Dai un'ulteriore occhiata ai nostri lavori: </h3>
        </div>
      </div>
    </div>

    <div style="display: flex; justify-content: center;">
      <a href="/lavori_selezione">
        <video
          class="video"
          preload="auto"
          loop
          muted
          autoplay
          playsinline
        >
          <source
            src='/media/video/Suites_preWork.m4v'>
        </video>
      </a>
    </div>
    
    <?php require("./components/footer.php") ?>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"
      integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
      crossorigin="anonymous"
    ></script>

    <script src="js/menu.js"></script>
    <script src="js/contactJS.js"></script>
  </body>
</html>
