<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Homepage - Makuda</title>
    <meta name="description" content="Strategia, produzione e innovazione sono i 3 criteri 
        sulla quale è stata fondata Makuda; affida la tua azienda ad una singola realtà
        capace di unire la consulenza manageriale alla produzione di contenuti multimediali.">
    <?php require './components/common_libraries.php' ?>
    <link href="css/index.css" rel="stylesheet" type="text/css"/>
    <link href="css/bello.css" rel="stylesheet" type="text/css"/>
    <link href="css/animations.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="js/pixi.min.js"></script>
</head>

<body>
<?php require('./components/libraries_after_body.php') ?>
<?php require "components/loader.html"; ?>

<?php require "components/navbar.php"; ?>

<?php require "components/menu.php"; ?>

<div id="section-animated">
    <section class="hero is-fullheight video" id="sectionVideo">
        <div class="hero-video">
            <div id="divVideo">

            </div>
        </div>
        <div class="hero-body grained" id="hero-body">
            <div class="container" id="containerText">
                <div class="textOverlay" id="textOverlay">
                    <h2 class="is-size-1" id="weAre">
                        <span>WE ARE</span>
                        <img
                                alt="Makuda"
                                class="makuda-logo"
                                src="media/img/Logo_PNG_Negativo-2-1024x94.png"
                        />
                    </h2>
                    <h2 class="consultingText">CONSULTING</h2>

                    <a href="/lavori_selezione" style="display: block">
                        <div class="animatedBtn" style="opacity: 0">
                            <svg
                                    height="50"
                                    width="320"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect class="shape" height="50" width="320"/>
                            </svg>
                            <div class="text">VISUALIZZA LAVORI</div>
                        </div>
                    </a>
                </div>

            </div>
            <div class="scrolldown-wrapper" style="    bottom: 50%;" id="rotellinaVideo">
                <div class="scrolldown">
                    <svg height="30" width="10">
                        <circle class="scrolldown-p1" cx="5" cy="15" r="2"/>
                        <circle class="scrolldown-p2" cx="5" cy="15" r="2"/>
                    </svg>
                </div>
            </div>
        </div>

        <div id="replacement">
            <div class="home-band grained">
                <div id="g0" class="band-view" style="display:block;">
                    <p class="makuda-bold" style="font-size: 7em;">
                        <span id="s0" style="opacity:100%;">STRATEGIA</span>
                    </p>
                    <p class="black-font makuda-light">
                        <span id="s1">PER RAGGIUNGERE I</span>
                    </p>
                    <p class="black-font makuda-bold" style="font-size: 4em">
                        <span id="s2">TUOI OBIETTIVI</span>
                    </p>
                </div>
                <div id="g1" class="band-view">
                    <p class="makuda-bold" style="font-size: 8.7em">
                        <span id="s3">PRODUZIONE</span>
                    </p>
                    <p class="black-font makuda-light">
                        <span id="s4" style="vertical-align:top">PER RACCONTARTI</span>
                        <span id="s5" class="makuda-bold"
                              style="font-size:2em;position:relative;top:-12px;">AL MEGLIO</span>
                    </p>
                </div>
                <div id="g2" class="band-view">
                    <p class="makuda-bold" style="font-size: 7em">
                        <span id="s6">INNOVAZIONE</span>
                    </p>
                    <p class="black-font makuda-light">
                        <span id="s7">PER NON</span>
                        <span id="s8" class="makuda-bold">FERMARTI</span>
                    </p>
                    <p
                            class="white-font makuda-bold"
                            style="
                        font-size: 19em;
                        margin-left: 0.15em;
                        margin-top: -0.15em;"
                    >
                        <span id="s9">MAI</span>
                    </p>
                </div>
                <div class="scrolldown-wrapper" id="rotellina">
                    <div class="scrolldown">
                        <svg height="30" width="10">
                            <circle class="scrolldown-p1" cx="5" cy="15" r="2"/>
                            <circle class="scrolldown-p2" cx="5" cy="15" r="2"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<div id="triggerElement"></div>

<div class="container has-text-centered" style="padding-bottom:50px;">
    <p class="makuda-color title cut-fade-animation" id="we-are">WE ARE</p>
    <p class="whiteText" style="line-height:1.5;">
        Strategia, produzione e innovazione sono i 3 criteri sulla quale è stata
        fondata Makuda; affida la tua azienda ad <span class="makuda-bold makuda-color">una singola realtà</span>
        capace di
        unire la consulenza manageriale alla produzione di contenuti multimediali.
    </p>
</div>

<div class="sezione-infografica">
    <div class="container fade-in-animation" style="margin-bottom: 100px" id="il-nostro-metodo">
        <p class="title">IL NOSTRO <span class="makuda-color">METODO</span></p>
    </div>
    <div class="container">
        <div class="paralleGruppo">
            <div id="1" class="fade-in-top-animation">
                <div class="parallelepipedo">
                    <p class="secondText">CONOSCIAMOCI</p>
                    <p class="numberParallelepipedo uno">1</p>
                </div>
                <div class="square">
                    <div style="padding: 10px">
                        <a class='cross'>
                            <i class="fas fa-times"></i>
                        </a>

                        <div class="textInsideSquare">
                            <p class="titleInsideSquare">CONOSCIAMOCI</p>
                            <p class="underTitleInsideSquare"></p>
                            <p class="textInsideSquareLong">
                                Per capire le necessitá, i problemi, i punti di forza e molto altro di una azienda
                                bisogna viverla. Per questo il conoscere ed essere in azienda con voi è il primo passo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="2" class="fade-in-top-animation">
                <div class="parallelepipedo">
                    <p class="secondText">DOVE SIAMO</p>
                    <p class="numberParallelepipedo">2</p>
                </div>

                <div class="square">
                    <div style="padding: 10px">
                        <a class='cross'>
                            <i class="fas fa-times"></i>
                        </a>
                        <div class="textInsideSquare">
                            <p class="titleInsideSquare">DOVE SIAMO</p>
                            <p class="underTitleInsideSquare"></p>
                            <p class="textInsideSquareLong">
                                Prima di scegliere la direzione dobbiamo sapere chi siamo e dove ci troviamo in questo
                                momento. Perfetto, qui la nasce la strategia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="3" class="fade-in-top-animation">
                <div class="parallelepipedo">
                    <p class="secondText">PRODUCIAMO</p>
                    <p class="numberParallelepipedo">3</p>
                </div>
                <div class="square">
                    <div style="padding: 10px">
                        <a class='cross'>
                            <i class="fas fa-times"></i>
                        </a>
                        <div class="textInsideSquare">
                            <p class="titleInsideSquare">PRODUCIAMO</p>
                            <p class="underTitleInsideSquare"></p>
                            <p class="textInsideSquareLong">
                                Una volta che il percorso è chiaro, ci serviranno i mezzi per affrontarlo. Qui dobbiamo
                                lasciarti senza parole. Al tuo servizio Manager, Marketers, Fotografi, Videomaker,
                                Grafici, Designer, Programmatori.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="4" class="fade-in-top-animation">
                <div class="parallelepipedo">
                    <p class="secondText">DIFFERENZA</p>
                    <p class="numberParallelepipedo">4</p>
                </div>
                <div class="square">
                    <div style="padding: 10px">
                        <a class='cross'>
                            <i class="fas fa-times"></i>
                        </a>
                        <div class="textInsideSquare">
                            <p class="titleInsideSquare">FARE LA DIFFERENZA</p>
                            <p class="underTitleInsideSquare"></p>
                            <p class="textInsideSquareLong">
                                Eʼ arrivato il momento di dire: “Check mate”. Hai scelto Makuda e insieme abbiamo fatto
                                la differenza sul mercato. Iniziamo a percepire i primi risultati della strategia scelta.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="5" class="fade-in-top-animation">
                <div class="parallelepipedo">
                    <p class="secondText">PERCORSO</p>
                    <p class="numberParallelepipedo cinque">5</p>
                </div>
                <div class="square">
                    <div style="padding: 10px">
                        <a class='cross'>
                            <i class="fas fa-times"></i>
                        </a>
                        <div class="textInsideSquare">
                            <p class="titleInsideSquare">LA STRADA É LUNGA</p>
                            <p class="underTitleInsideSquare"></p>
                            <p class="textInsideSquareLong">
                                Nessuno è infallibile. Una volta raggiunti gli obiettivi prefissati ce ne saranno di
                                nuovi da raggiungere. Calibra le tue mosse, Makuda sará sempre al tuo fianco quando ne
                                avrai bisogno. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<a href="about">
    <div class="animatedBtn">
        <svg height="50" width="320" xmlns="http://www.w3.org/2000/svg" class="scopri-chi-siamo">
            <rect class="shape" height="50" width="320"/>
        </svg>
        <div class="text makuda-bold makuda-color scopri-chi-siamo"><p>SCOPRI CHI SIAMO</p></div>
    </div>
</a>

<div class="nostri-progetti makuda-bgcolor">
    <div class="works-content">
        <p class="title fade-in-top-animation">I NOSTRI PROGETTI</p>
        <div class="fading-carousel columns is-desktop is-vcentered">
            <?php
            $myfile = fopen("media/json/carousel-home.json", "r") or die("Unable to open file!");
            $to_parse = fread($myfile, filesize("media/json/carousel-home.json"));
            fclose($myfile);
            $parsed = json_decode($to_parse, true);
            ?>

            <div class="fading-images column fade-in-right-animation">
                <?php
                $c = 0;

                foreach ($parsed as $view) {
                    $c++;

                    $classes_added = ($c == 1 ? " selected" : " ") . " index-" . $c;
                    echo "<div class='fading-image $classes_added'>
                      <img class='' src='media/img/lavori/" . $view["fragmented-image"] . "'>
                    </div>";
                }
                ?>
            </div>


            <div class="fade-in-left-animation column fading-caption-content">
                <?php
                $c = 0;
                foreach ($parsed as $view) {
                    $c++;
                    $classes_added = ($c == 1 ? " selected" : " ") . " index-" . $c;
                    ?>
                    <div class="fading-caption<?= $classes_added ?>">
                        <p class="fading-title"><?= $view["title"] ?></p>
                        <p class="fading-subtitle"><?= $view["subtitle"] ?></p>
                        <p class="fading-description" style="line-height:1.5;"><?= $view["description"] ?></p>
                        <a href="<?= "lavori/" . $view["link"] ?>">
                            <div class="animatedBtn">
                                <svg height="50" width="200px" xmlns="http://www.w3.org/2000/svg">
                                    <rect class="shape" height="50" width="200px"/>
                                </svg>
                                <p class="text makuda-color">VISUALIZZA</p>
                            </div>
                        </a>
                    </div>
                <?php } ?>
                <div class="fading-select column">
                    <?php
                    $c = 1;
                    foreach ($parsed

                    as $view) {
                    $line = '<div class="fading-line"></div>';
                    if ($c == count($parsed)) {
                        $line = '<div class="fading-line hidden"></div>';
                    }
                    ?>
                    <div data-index=<?= $c ?> class="fading-choise <?= ($c == 1) ? "selected" : "" ?> index-<?= $c ?>">
                    <div class="fading-shapes">
                        <div class="fading-circle" data-index=<?= $c ?>></div>
                        <?= $line ?>
                    </div>
                    <p style="color: white;">0<?= $c++ ?></p>
                </div>

            <?php } ?>
            </div>
        </div>
    </div>
</div>
</div>

<div class="testimonial-container fade-in-animation" style="height: 100%;">
    <section class="section containerCarousel">
        <div class="container containerCar">
            <div class="carousel" data-initial-slide="1" data-navigation-swipe="false" id="carousel1">
                <div class="item-1">
                    <div class="card card-padding">
                        <div class="card-image wrapper-testimonial">

                            <div class="makuda-testimonials-item">
                                <div class="makuda-testimonials-item__author">
                                    <div class="makuda-testimonials-item__author--image">
                                        <img alt="Zoda" src="media/img/zoda_img.jpg"/>
                                    </div>
                                    <div class="makuda-testimonials-item__author--name">
                                        <p><span>Artista Musicale</span></p>
                                        <h6>Zoda</h6>
                                    </div>
                                </div>
                                <div class="makuda-testimonials-item__content">
                                    <div class="makuda-testimonials-item__stars makuda-stars5"></div>
                                    <p>
                                        Instancabili!
                                        Non saprei come altro descrivere questi ragazzi per l'impegno che hanno messo
                                        nella realizzazione del videoclip della mia canzone 'oh madre mia' sia in pre
                                        produzione, produzione, postproduzione
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-2">
                    <div class="card card-padding">
                        <div class="card-image wrapper-testimonial">

                            <div class="makuda-testimonials-item">
                                <div class="makuda-testimonials-item__author">
                                    <div class="makuda-testimonials-item__author--image">
                                        <img alt="Gaia Accoto" src="media/img/gaia_img.jpg"/>
                                    </div>
                                    <div class="makuda-testimonials-item__author--name">
                                        <p><span>Anchor Woman</span></p>
                                        <h6>Gaia Accoto per LBA</h6>
                                    </div>
                                </div>
                                <div class="makuda-testimonials-item__content">
                                    <div class="makuda-testimonials-item__stars makuda-stars5"></div>
                                    <p>
                                        I ragazzi sono sempre super gentili e disponibili, mi ha colpito la loro
                                        dedizione nel portare a termine un lavoro ben curato e strutturato per andare in
                                        onda.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-3">
                    <div class="card card-padding">
                        <div class="card-image wrapper-testimonial">

                            <div class="makuda-testimonials-item">
                                <div class="makuda-testimonials-item__author">
                                    <div class="makuda-testimonials-item__author--image">
                                        <img alt="LucaImg" src="media/img/luca_img.jpeg"/>
                                    </div>
                                    <div class="makuda-testimonials-item__author--name">
                                        <p><span>Proprietario Buffel</span></p>
                                        <h6>Luca</h6>
                                    </div>
                                </div>
                                <div class="makuda-testimonials-item__content">
                                    <div class="makuda-testimonials-item__stars makuda-stars5"></div>
                                    <p>
                                        Se volete dare slancio al vostro Brand vi consiglio fortemente questo team.
                                        Gelateria Buffel si è fidata fin dal l'inaugurazione e i risultati si sono visti
                                        immediatamente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-4">
                    <div class="card card-padding">
                        <div class="card-image wrapper-testimonial">

                            <div class="makuda-testimonials-item">
                                <div class="makuda-testimonials-item__author">
                                    <div class="makuda-testimonials-item__author--image">
                                        <img alt="Dj Herca" src="media/img/djHerca_img.jpg"/>
                                    </div>
                                    <div class="makuda-testimonials-item__author--name">
                                        <p><span>Dj & Brand Manager</span></p>
                                        <h6>Dj Herca</h6>
                                    </div>
                                </div>
                                <div class="makuda-testimonials-item__content">
                                    <div class="makuda-testimonials-item__stars makuda-stars5"></div>
                                    <p>
                                        Il talento messo a disposizione di ogni tipo di progetto. <br>
                                        Dal mondo della notte agli aftermovie fino ai servizi videografici,
                                        La loro capacitá di adattamento é una garanzia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<section class="section" style="margin-bottom: 50px;">
    <div class="container fade-in-animation" id="logos-carousel">
        <div
                class="carousel"
                data-infinite="true"
                data-autoplay="true"
                data-navigation="false"

                id="carousel3"
        >
            <div class="card cardino">
                <div class="card-image">
                    <figure class="image is-covered">
                        <img src="/media/img/Carousel_Logo/buffel.png" class="centeredImg" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="card cardino">
                <div class="card-image">
                    <figure class="image is-covered">
                        <img
                                src="/media/img/Carousel_Logo/Carpisa.png"
                                alt="" class="centeredImg"
                        />
                    </figure>
                </div>
            </div>
            <div class="card cardino">
                <div class="card-image">
                    <figure class="image is-covered">
                        <img src="/media/img/Carousel_Logo/decube.png" class="centeredImg" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="card cardino">
                <div class="card-image">
                    <figure class="image is-covered">
                        <img src="/media/img/Carousel_Logo/dsquared.png" class="centeredImg" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="card cardino">
                <div class="card-image">
                    <figure class="image is-covered">
                        <img src="/media/img/Carousel_Logo/FDP.png" class="centeredImg" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="card cardino">
                <div class="card-image">
                    <figure class="image is-covered">
                        <img src="/media/img/Carousel_Logo/LBA.png" class="centeredImg" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="card cardino">
                <div class="card-image">
                    <figure class="image is-covered">
                        <img src="/media/img/Carousel_Logo/Prime.png" class="centeredImg" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="card cardino">
                <div class="card-image">
                    <figure class="image is-covered">
                        <img src="/media/img/Carousel_Logo/suite&atelier.png" class="centeredImg" alt=""/>
                    </figure>
                </div>
            </div>
            <div class="card cardino">
                <div class="card-image">
                    <figure class="image is-covered">
                        <img src="/media/img/Carousel_Logo/YOLOWN.png" class="centeredImg" alt=""/>
                    </figure>
                </div>
            </div>

        </div>
    </div>
</section>

<?php require "components/footer.php" ?>

<script src="js/bulma-carousel.min.js"></script>
<script>
    var carousels = bulmaCarousel.attach(".carousel");
    var carousel2 = bulmaCarousel.attach(".hero-carousel");
</script>
<script src="js/carouselManipulator.js"></script>
<script src="js/indexJS.js"></script>
<script src="js/menu.js"></script>
<script src="js/parallelepipedoJS.js"></script>
<script src="/js/CSSRulePlugin.min.js"></script>
<script src="/js/ScrollToPlugin.min.js"></script>
<script src="/js/ScrollTrigger.min.js"></script>
</body>
</html>
