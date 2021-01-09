<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>About Us</title>
    <link href="css/bulma.min.css" rel="stylesheet" />
    <link href="css/about.css" rel="stylesheet" type="text/css" />
    <link href="css/menu.css" rel="stylesheet" />
    <link href="css/bello.css" rel="stylesheet" type="text/css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/css/bulma-carousel.min.css"
      rel="stylesheet"
    />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
  </head>
  <body style="background-color: #111">

    <?php require("components/navbar.php"); ?>

    <?php require("components/menu.php"); ?>

    <div class="container has-text-centered">
      <p class="boldBig makuda-color">WE ARE</p>
      <p class="light-font white-font">Il tuo progetto nelle migliori mani</p>
    </div>
    <div class="makuda-bgcolor has-text-centered significato-makuda">
      <div class="container">
        <p class="whiteText quote">
          “Makuda significa tutto nero in lingua Shona, originaria dell’Africa
          meridionale.”
        </p>
      </div>
    </div>
    <?php require("components/footer.php") ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"></script>

    <script src="js/menu.js"></script>
    <script src="js/aboutJS.js" type="text/javascript"></script>

    <script src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/js/bulma-carousel.min.js"></script>
    <script>
      var carousel1 = bulmaCarousel.attach("#carousel1");
      var carousel = bulmaCarousel.attach(".carousel");
    </script>
    <script src="js/carouselManipulator.js"></script>

    <script src="js/parallelepipedoJS.js"></script>
  </body>
</html>
