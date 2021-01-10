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
    <link href="css/animations.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/css/bulma-carousel.min.css" rel="stylesheet" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
</head>

<body style="background-color: #111">

    <?php require("components/navbar.php"); ?>

    <?php require("components/menu.php"); ?>

    <div class="container has-text-centered">
        <p class="boldBig makuda-color">WE ARE</p>
    </div>
    <div style="margin: 60px 5%;">
        <div class="container">
            <p class="boldBig makuda-color titleInsideSquare" style="font-size: 17px;"> MISSION </p>
            <p class="start-text">
                “Trasmettere un modo nuovo di vedere i colori della vita quotidiana,
                per raggiungere i propri obiettivi senza timore degli ostacoli”. Makuda è
                in un processo di costante crescita che ci porta ad affrontare ogni realtà
                in maniera positiva aggiungendo nuove competenze. Crescere per noi è imparare
                a saper offrire le giuste sfumature di colore per un obiettivo finale concreto,
                che sia sempre di successo e di qualità.
            </p>
        </div>
        <div class="container" style="margin-top: 30px;">
            <p class="boldBig makuda-color" style="font-size: 17px;"> VALORI </p>
            <p class="start-text">
                Curiosità: Se il nero rappresenta l'oscurità, l'inesplorato allora rappresenta anche
                tutto ciò che la curiosità ti porta ad esplorare.
            </p>
            <br>
            <p class="start-text">
                Creazione: Perché il nero rappresenta l'attimo prima del processo di creazione, l'attimo prima
                che si accenda la lampadina.
            </p>
            <br>
            <p class="start-text">
                Crescita: Qualsiasi sia il valore che si dà al nero esso rappresenta anche un punto di arrivo.
                Se è vero che il nero è un non colore, è anche vero che esso è l'insieme di tutti i colori.
                È solo esplorando tutte le sfumature che è possibile crescere.
            </p>
        </div>
    </div>
    <div class="container has-text-centered">
        <p class="boldBig white-font" style="font-size: 25px; padding-top: 30px;">IL NOSTRO <span class="makuda-color">
                TEAM </span>
        </p>
        <p class="white-font" style="line-height: 25px;">Il tuo progetto nelle migliori mani</p>
    </div>
    <div class="container" style="margin-top: 25px;">
        <div id="team-container">
            <div class="person-container">
                <img src="/media/img/team/1.jpg" class="person-image">
                <ul class="person-links">
                    <li><a class="person-link" href="#">Twitter</a></li>
                    <li><a class="person-link" href="#">Instagram</a></li>
                    <li><a class="person-link" href="#">Behance</a></li>
                </ul>
                <div style="flex: 1"> </div>
                <div class="person-infos">
                    <h5 style="font-size: 30px;">Herald Johnson</h5>
                    <h6 style="font-size: 26px;">Backend</h6>
                </div>
            </div>
            <div class="person-container">
                <img src="/media/img/team/1b.jpg" class="person-image">
                <ul class="person-links">
                    <li><a class="person-link" href="#">Twitter</a></li>
                    <li><a class="person-link" href="#">Instagram</a></li>
                    <li><a class="person-link" href="#">Behance</a></li>
                </ul>
                <div style="flex: 1"> </div>
                <div class="person-infos">
                    <h5 style="font-size: 30px;">Jake Thompson</h5>
                    <h6 style="font-size: 26px;">UX Desing</h6>
                </div>
            </div>
            <div class="person-container">
                <img src="/media/img/team/2.jpg" class="person-image">
                <ul class="person-links">
                    <li><a class="person-link" href="#">Twitter</a></li>
                    <li><a class="person-link" href="#">Instagram</a></li>
                    <li><a class="person-link" href="#">Behance</a></li>
                </ul>
                <div style="flex: 1"> </div>
                <div class="person-infos">
                    <h5 style="font-size: 30px;">Tobias Dupré</h5>
                    <h6 style="font-size: 26px;">Illustration</h6>
                </div>
            </div>
            <div class="person-container">
                <img src="/media/img/team/2b.jpg" class="person-image">
                <ul class="person-links">
                    <li><a class="person-link" href="#">Twitter</a></li>
                    <li><a class="person-link" href="#">Instagram</a></li>
                    <li><a class="person-link" href="#">Behance</a></li>
                </ul>
                <div style="flex: 1"> </div>
                <div class="person-infos">
                    <h5 style="font-size: 30px;">Liam Kim</h5>
                    <h6 style="font-size: 26px;">Frontend</h6>
                </div>
            </div>
            <div class="person-container">
                <img src="/media/img/team/3.jpg" class="person-image">
                <ul class="person-links">
                    <li><a class="person-link" href="#">Twitter</a></li>
                    <li><a class="person-link" href="#">Instagram</a></li>
                    <li><a class="person-link" href="#">Behance</a></li>
                </ul>
                <div style="flex: 1"> </div>
                <div class="person-infos">
                    <h5 style="font-size: 30px;">Lin Becker</h5>
                    <h6 style="font-size: 26px;">Marketing</h6>
                </div>
            </div>
            <div class="person-container">
                <img src="/media/img/team/3b.jpg" class="person-image">
                <ul class="person-links">
                    <li><a class="person-link" href="#">Twitter</a></li>
                    <li><a class="person-link" href="#">Instagram</a></li>
                    <li><a class="person-link" href="#">Behance</a></li>
                </ul>
                <div style="flex: 1"> </div>
                <div class="person-infos">
                    <h5 style="font-size: 30px;">Ronald Duncan</h5>
                    <h6 style="font-size: 26px;">Photography</h6>
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
                    <p class="counter">2451</p>
                    <p class="italian-counter">PROGETTI COMPLETATI</p>
                </div>
                <div class="counter-box">
                    <p class="counter">1245</p>
                    <p class="italian-counter">CLIENTI SODDISFATTI</p>
                </div>
                <div class="counter-box">
                    <p class="counter">870</p>
                    <p class="italian-counter">POST - IT ATTACCATI</p>
                </div>
                <div class="counter-box">
                    <p class="counter">2451</p>
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
    <script src="js/animations.js"></script>
</body>

</html>