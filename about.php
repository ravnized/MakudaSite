<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <title>About Us</title>
    <link href="css/bulma.min.css" rel="stylesheet"/>
    <link href="css/about.css" rel="stylesheet" type="text/css"/>
    <link href="css/menu.css" rel="stylesheet"/>
    <link href="css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="css/animations.css" rel="stylesheet" type="text/css"/>
    <link href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/css/bulma-carousel.min.css" rel="stylesheet"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
</head>

<body style="background-color: #111">

<?php require("components/navbar.php"); ?>

<?php require("components/menu.php"); ?>

<div class="container has-text-centered" style="margin-bottom: 10px;">
    <p class="boldBig makuda-color">WE ARE</p>
</div>
<hr class="separation-line">
<div class="has-text-centered" style="margin-top: 20px;">
    <div class="container">
        <p class="boldBig makuda-color we-are-title"> MISSION </p>
        <p class="start-text" style="font-style: italic; margin-bottom: 25px;">
            “Trasmettere un modo nuovo di vedere i colori della vita quotidiana,<br>
            per raggiungere i propri obiettivi senza timore degli ostacoli”
        </p>
        <p class="start-text text-light">
            Makuda è in un processo di costante crescita che ci porta ad affrontare
            ogni realtà in maniera positiva.<br>
            Crescere per noi è imparare a saper offrire le giuste sfumature di colore
            per un obiettivo finale<br>
            concreto, che sia sempre di successo e di qualità.
        </p>
    </div>
    <div class="" id="valori-container" style="margin-top: 30px; margin-bottom: 30px;">
        <p class="boldBig makuda-color we-are-title"> VALORI </p>
        <p id="subtitle-valore"> “Makuda significa tutto nero in lingua Shona” </p>
        <div>
            <span class="valori-title"> Trasparenza </span>
            <hr class="valori-line">
            <span class="valori-title"> Curiosità </span>
            <hr class="valori-line">
            <span class="valori-title"> Creazione </span>
            <hr class="valori-line">
            <span class="valori-title"> Crescita </span>
        </div>
        <div id="valori-text-container">
            <div class="valori-vertical-line" id="valori-vertical-line"></div>
            <div class="valori-vertical-line" style="position: relative;"></div>
            <div style="flex: 1"></div>
            <p id="valori-text">
                Makuda crede che il proprio operato debba essere un esempio
                di una consulenza chiara e trasparente in ogni step, nel
                rispetto dei ruoli e degli obiettivi.
            </p>
        </div>
    </div>
</div>
<hr class="separation-line" style="margin: 0 auto 40px auto;">
<div class="container has-text-centered">
    <p class="boldBig white-font" style="font-size: 25px;">IL NOSTRO <span class="makuda-color">
                TEAM </span>
    </p>
</div>
<div class="container" style="margin-top: 25px;
    min-height: 50vh;">
    <div id="team-container">
        <div class="person-container">
            <img src="/media/img/team/1.jpg" class="person-image">
            <ul class="person-links">
                <li><a class="person-link" href="#">Facebook</a></li>
                <li><a class="person-link" href="#">LinkedIn</a></li>
            </ul>
            <div style="flex: 1"></div>
            <div class="person-infos">
                <h5 style="font-size: 30px;">Stefano D'onofrio</h5>
                <h6 style="font-size: 26px;">Founder & Manager</h6>
            </div>
        </div>
        <div class="person-container">
            <img src="/media/img/team/2.jpg" class="person-image">
            <ul class="person-links">
                <li><a class="person-link" href="#">Instagram</a></li>
                <li><a class="person-link" href="#">LinkedIn</a></li>
            </ul>
            <div style="flex: 1"></div>
            <div class="person-infos">
                <h5 style="font-size: 30px;">Simone Santacroce</h5>
                <h6 style="font-size: 26px;">Founder & Director</h6>
            </div>
        </div>
        <div class="person-container">
            <img src="/media/img/team/3.jpg" class="person-image">
            <ul class="person-links">
                <li><a class="person-link" href="#">LinkedIn</a></li>
            </ul>
            <div style="flex: 1"></div>
            <div class="person-infos">
                <h5 style="font-size: 30px;">Simone Bioli</h5>
                <h6 style="font-size: 26px;">Photografer & Videomaker</h6>
            </div>
        </div>
        <div class="person-container">
            <img src="/media/img/team/4.jpg" class="person-image">
            <ul class="person-links">
                <li><a class="person-link" href="#">Instagram</a></li>
                <li><a class="person-link" href="#">LinkedIn</a></li>
            </ul>
            <div style="flex: 1"></div>
            <div class="person-infos">
                <h5 style="font-size: 30px;">Taras Snegovoy</h5>
                <h6 style="font-size: 26px;">Director & 3D Generalist</h6>
            </div>
        </div>
        <div class="person-container">
            <img src="/media/img/team/5.jpg" class="person-image">
            <ul class="person-links">
                <li><a class="person-link" href="#">LinkedIn</a></li>
            </ul>
            <div style="flex: 1"></div>
            <div class="person-infos">
                <h5 style="font-size: 30px;">Riccardo Vitonto</h5>
                <h6 style="font-size: 26px;">Designer</h6>
            </div>
        </div>
        <div class="person-container">
            <img src="/media/img/team/6.jpg" class="person-image">
            <ul class="person-links">
                <li><a class="person-link" href="#">Instagram</a></li>
                <li><a class="person-link" href="#">LinkedIn</a></li>
            </ul>
            <div style="flex: 1"></div>
            <div class="person-infos">
                <h5 style="font-size: 30px;">Armando Aspesani</h5>
                <h6 style="font-size: 26px;">Project Manager</h6>
            </div>
        </div>
    </div>
</div>
</div>
<div class="makuda-bgcolor has-text-centered significato-makuda">
    <div class="container">
        <p class="whiteText quote">
            “Makuda significa tutto nero in lingua Shona, originaria dell’Africa
            meridionale.”
        </p>
    </div>
</div>
<div class="container" style="padding: 60px 0;">
    <div style="display: flex;">
        <div style="flex: 1"></div>
        <div style="display: flex;">
            <div class="counter-box">
                <span class="counter" data-count='249'>0</span>
                <p class="italian-counter">PROGETTI COMPLETATI</p>
            </div>
            <div class="counter-box">
                <span class="counter" data-count='249'>0</span>
                <p class="italian-counter">CLIENTI SODDISFATTI</p>
            </div>
            <div class="counter-box">
                <span class="counter" data-count='249'>0</span>
                <p class="italian-counter">POST - IT ATTACCATI</p>
            </div>
            <div class="counter-box">
                <span class="counter" data-count='249'>0</span>
                <p class="italian-counter">CAFFÈ BEVUTI</p>
            </div>
        </div>
        <div style="flex: 1"></div>
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