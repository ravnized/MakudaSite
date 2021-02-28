<!DOCTYPE html>
<html class="has-navbar-fixed-top" lang="en">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>About Us</title>
    <?php require('./components/common_libraries.php') ?>
    <link href="css/about.css" rel="stylesheet" type="text/css"/>
    <link href="css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="css/animations.css" rel="stylesheet" type="text/css"/>


</head>

<body style="background-color:#111">
<?php require('./components/libraries_after_body.php') ?>

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
            <hr class="valori-line" id="noLine">
            <div id="brTime"></div>
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
<div class="container" id="heightJS" style="margin-top: 25px;
    min-height: 50vh;">
    <div id="team-container">
        <div class="person-container">
            <img src="/media/img/team/1.jpg" class="person-image">
            <ul class="person-links">
                <li><a class="person-link" href="https://www.facebook.com/sdon92">Facebook</a></li>
                <li><a class="person-link" href="https://www.linkedin.com/in/stefano-d%E2%80%99onofrio-8553661a3/">LinkedIn</a>
                </li>
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
                <li><a class="person-link" href="https://www.instagram.com/simone_santacroce_/">Instagram</a></li>
                <li><a class="person-link" href="https://www.linkedin.com/in/simone-santacroce-5a42431a4/">LinkedIn</a>
                </li>
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
                <li><a class="person-link" href="https://www.linkedin.com/in/simone-bioli-940176165/">LinkedIn</a></li>
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
                <li><a class="person-link" href="https://www.instagram.com/taras.film/">Instagram</a></li>
                <li><a class="person-link" href="https://www.linkedin.com/in/taras-snegovoy-924288203/">LinkedIn</a>
                </li>
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
                <li><a class="person-link" href="https://www.linkedin.com/in/riccardo-bitonto-1333471a9/">LinkedIn</a>
                </li>
            </ul>
            <div style="flex: 1"></div>
            <div class="person-infos">
                <h5 style="font-size: 30px;">Riccardo Bitonto</h5>
                <h6 style="font-size: 26px;">Designer</h6>
            </div>
        </div>
        <div class="person-container">
            <img src="/media/img/team/6.jpg" class="person-image">
            <ul class="person-links">
                <li><a class="person-link" href="https://www.instagram.com/armagaluf_/">Instagram</a></li>
                <li><a class="person-link" href="https://www.linkedin.com/in/armando-aspesani-4592a0129/">LinkedIn</a>
                </li>
            </ul>
            <div style="flex: 1"></div>
            <div class="person-infos">
                <h5 style="font-size: 30px;">Armando Aspesani</h5>
                <h6 style="font-size: 26px;">Strategic Marketing Specialist</h6>
            </div>
        </div>
    </div>
</div>

<div class=" has-text-centered makuda-bgcolor" style="margin-top: -100px" id="containerCounter">
    <div class="container">
        <div style="display: flex;">
            <div style="flex: 1"></div>
            <div class="containerBox" style="display: flex;">
                <div class="counter-box">
                    <span class="counter" data-count='170'>0</span>
                    <p class="italian-counter">PROGETTI <br> COMPLETATI</p>
                </div>
                <div class="counter-box">
                    <span class="counter" data-count='94'>0</span>
                    <p class="italian-counter">CLIENTI <br> SODDISFATTI</p>
                </div>
                <div class="counter-box">
                    <span class="counter" data-count='325'>0</span>
                    <p class="italian-counter">POST - IT <br> ATTACCATI</p>
                </div>
                <div class="counter-box">
                    <span class="counter" data-count='780'>0</span>
                    <p class="italian-counter">CAFFÈ <br> BEVUTI</p>
                </div>
            </div>
            <div style="flex: 1"></div>
        </div>
    </div>
</div>

<?php require("components/footer.php") ?>


<script src="js/aboutJS.js" type="text/javascript"></script>
<script src="/js/menu.js"></script>

</body>

</html>