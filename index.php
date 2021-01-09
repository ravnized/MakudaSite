<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>Homepage</title>
    <link href="css/bulma.min.css" rel="stylesheet" />
    <link href="css/index.css" rel="stylesheet" type="text/css" />
    <link href="css/bello.css" rel="stylesheet" type="text/css" />
    <link href="css/animations.css" rel="stylesheet" type="text/css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/css/bulma-carousel.min.css"
      rel="stylesheet"
    />
    <link href="css/pageLoader.css" rel="stylesheet" />
    <link href="css/menu.css" rel="stylesheet" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <script
      crossorigin="anonymous"
      integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ=="
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
    ></script>
    <script
      src="https://kit.fontawesome.com/9eeab300fc.js"
      crossorigin="anonymous"
    ></script>
    <script src="js/pixi.min.js"></script>
  </head>

  <body>


    <?php require "components/loader.html";?>

    <?php require "components/navbar.php";?>

    <?php require "components/menu.php";?>

    <div id="section-animated">
      <section class="hero is-fullheight video" id="sectionVideo">
        <div class="hero-video">
          <div id="divVideo"></div>
        </div>
        <div class="hero-body" id="hero-body">
          <div class="container" id="containerText">
            <div class="textOverlay" id="textOverlay">
              <h2 class="is-size-1" id="weAre">
                WE ARE
                <img
                  alt="Makuda"
                  class="makuda-logo"
                  src="media/img/Logo_PNG_Negativo-2-1024x94.png"
                />
              </h2>
              <h2 class="consultingText">CONSULTING</h2>
              <!-- <div class="animatedBtn">
                <span class="noselect">VISUALIZZA LAVORI</span>
              </div> -->
              <a href="work.php">
                <div class="animatedBtn">
                  <svg height="50" width="320" xmlns="http://www.w3.org/2000/svg">
                    <rect class="shape" height="50" width="320" />
                  </svg>
                  <div class="text">VISUALIZZA LAVORI</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div id="replacement">
          <div class="home-band">
            <p class="boldBig has-text-centered">STRATEGIA</p>
            <div class="scrolldown-wrapper" id="rotellina">
              <div class="scrolldown">
                <svg height="30" width="10">
                  <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
                  <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="triggerElement"></div>

    <!--
<div class="container is-fullheight">
<div class="hero is-fullheight has-background">

    <div class="hero-body">
        <div class="container container-font">
            <div data-aos="fade-down">
                <div>
                    <h2 class="has-text-light is-size-1">LE NOSTRE <span style="color: #f6b600">TESTIMONIANZE</span></h2>
                    <p class="has-text-light is-size-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit mi a purus posuere mattis. Proin tincidunt velit lobortis orci efficitur, a porta ante auctor. In magna enim, tincidunt non felis vel, rhoncus molestie erat. Suspendisse potenti. Etiam eget tellus ornare risus dignissim luctus.
                    </p>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
-->

    <div class="container has-text-centered fade-in-animation" style="padding-bottom:50px;" id="we-are">
      <p class="makuda-color title" style="font-size:75px;">WE ARE</p>
      <p class="whiteText" style="line-height:1.5;">
        Strategia, produzione e innovazione sono i 3 criteri sulla quale è stata
        fondata Makuda; affida la tua azienda ad <span class="makuda-bold makuda-color">una singola realtà</span>, capace di
        unire la consulenza manageriale alla produzione di contenuti multimediali.
      </p>
    </div>

    <div class="sezione-infografica">
      <div class="container fade-in-animation" style="margin-bottom: 100px" id="il-nostro-metodo">
        <p class="title">IL NOSTRO <span class="makuda-color">METODO</span></p>
      </div>

      <div class="paralleGruppo">
        <div id="1" class="fade-in-top-animation">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo uno">1</p>
          </div>
          <div class="square">
            <div style="padding: 10px">
              <a class='cross'>
                <i class="fas fa-times"></i>
              </a>

              <div class="textInsideSquare">
                <p class="titleInsideSquare">Mario</p>
                <p class="underTitleInsideSquare">Art Director</p>
                <p class="textInsideSquareLong">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in scelerisque urna, eget ullamcorper mauris. Nam sit
                  amet sem in sapien vehicula commodo. Etiam quis diam libero.
                  Aliquam faucibus posuere nisl. Maecenas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="2" class="fade-in-top-animation">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo">2</p>
          </div>

          <div class="square">
            <div style="padding: 10px">
              <a class='cross'>
                <i class="fas fa-times"></i>
              </a>
              <div class="textInsideSquare">
                <p class="titleInsideSquare">Mario</p>
                <p class="underTitleInsideSquare">Art Director</p>
                <p class="textInsideSquareLong">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in scelerisque urna, eget ullamcorper mauris. Nam sit
                  amet sem in sapien vehicula commodo. Etiam quis diam libero.
                  Aliquam faucibus posuere nisl. Maecenas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="3" class="fade-in-top-animation">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo">3</p>
          </div>
          <div class="square">
            <div style="padding: 10px">
              <a class='cross'>
                <i class="fas fa-times"></i>
              </a>
              <div class="textInsideSquare">
                <p class="titleInsideSquare">Mario</p>
                <p class="underTitleInsideSquare">Art Director</p>
                <p class="textInsideSquareLong">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in scelerisque urna, eget ullamcorper mauris. Nam sit
                  amet sem in sapien vehicula commodo. Etiam quis diam libero.
                  Aliquam faucibus posuere nisl. Maecenas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="4" class="fade-in-top-animation">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo">4</p>
          </div>
          <div class="square">
            <div style="padding: 10px">
              <a class='cross'>
                <i class="fas fa-times"></i>
              </a>
              <div class="textInsideSquare">
                <p class="titleInsideSquare">Mario</p>
                <p class="underTitleInsideSquare">Art Director</p>
                <p class="textInsideSquareLong">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in scelerisque urna, eget ullamcorper mauris. Nam sit
                  amet sem in sapien vehicula commodo. Etiam quis diam libero.
                  Aliquam faucibus posuere nisl. Maecenas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="5" class="fade-in-top-animation">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo">5</p>
          </div>
          <div class="square">
            <div style="padding: 10px">
              <a class='cross'>
                <i class="fas fa-times"></i>
              </a>
              <div class="textInsideSquare">
                <p class="titleInsideSquare">Mario</p>
                <p class="underTitleInsideSquare">Art Director</p>
                <p class="textInsideSquareLong">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in scelerisque urna, eget ullamcorper mauris. Nam sit
                  amet sem in sapien vehicula commodo. Etiam quis diam libero.
                  Aliquam faucibus posuere nisl. Maecenas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="about.php">
        <div class="animatedBtn">
            <svg height="50" width="320" xmlns="http://www.w3.org/2000/svg" class="scopri-chi-siamo">
              <rect class="shape" height="50" width="320" />
            </svg>
          <div class="text makuda-bold makuda-color scopri-chi-siamo">SCOPRI CHI SIAMO</div>
        </div>
      </a>
    </div>
    <div class="nostri-progetti">
      <div class="works-band"></div>
      <div class="works-content">
        <p class="title fade-in-top-animation">I NOSTRI PROGETTI</p>
        <div class="fading-carousel">
          <?php
            $myfile = fopen("media/json/home-works.json", "r") or die("Unable to open file!");
            $to_parse = fread($myfile, filesize("media/json/home-works.json"));
            fclose($myfile);
            $parsed = json_decode($to_parse, true);
          ?>
          <div class="fading-images fade-in-right-animation">
            <?php
              $c = 0;
              foreach ($parsed as $view) {
                $c++;
                $classes_added = ($c == 1 ? " selected" : " ") . " index-" . $c;
                echo "<div class='fading-image $classes_added'>
                        <img class='' src='media/img/works/$view[image]'></img>
                      </div>";
              }
            ?>
          </div>
          <div style="flex: 1;">
            <img class='opacity-0' src='media/img/works/img1.png'></img>
          </div>
          <div class="fade-in-left-animation fading-caption-content">
            <?php
              $c = 0;
              foreach ($parsed as $view) {
                $c++;
                $classes_added = ($c == 1 ? " selected" : " ") . " index-" . $c;
            ?>
            <div class="fading-caption<?=$classes_added?>">
              <p class="fading-subtitle"><?=$view["subtitle"]?></p>
              <p class="fading-title"><?=$view["title"]?></p>
              <p class="fading-description" style="line-height:1.5;"><?=$view["description"]?></p>
              <a href="<?="works/" . $view["link"]?>">
                <div class="animatedBtn">
                    <svg height="50" width="200" xmlns="http://www.w3.org/2000/svg">
                      <rect class="shape" height="50" width="200" />
                    </svg>
                  <div class="text makuda-color">Visualizza</div>
                </div>
              </a>
            </div>
            <?php }?>
            <div class="fading-select">
              <?php
                $c = 1;
                foreach ($parsed as $view) {
                    $line = '<div class="fading-line"></div>';
                    if ($c == count($parsed)) {
                        $line = '<div class="fading-line hidden"></div>';
                    }
              ?>
              <div data-index=<?=$c?> class="fading-choise <?=($c == 1) ? "selected" : ""?> index-<?=$c?>">
                <div class="fading-shapes">
                  <div class="fading-circle" data-index=<?=$c?>></div>
                  <?=$line?>
                </div>
                <p style="color: white;">0<?=$c++?></p>
              </div>
              <?php }?>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonial-container fade-in-animation" style="height: 100%;">
      <section class="section containerCarousel">
        <div class="container containerCar">
          <div class="carousel" data-initial-slide="1" id="carousel1">
            <div class="item-1">
              <div class="card card-padding">
                <div class="card-image wrapper-testimonial">
                  <div class="testimonials-gradient"></div>
                  <div class="makuda-testimonials-item">
                    <div class="makuda-testimonials-item__author">
                      <div class="makuda-testimonials-item__author--image">
                        <img
                          alt="Tony Norton"
                          src="media/img/avatar-1577909_640.png"
                        />
                      </div>
                      <div class="makuda-testimonials-item__author--name">
                        <span>Web Designer</span>
                        <h6>Tony Norton</h6>
                      </div>
                    </div>
                    <div class="makuda-testimonials-item__content">
                      <div
                        class="makuda-testimonials-item__stars makuda-stars5"
                      ></div>
                      <p>
                        I am a web developer. And, as known, good clipart is a
                        half of successful web design. Today is not so easy to
                        find realy good photos for website. And one day I have
                        ordered a clipart for my new project and works of Andrew
                        are fit just amazing for me. Thank you, Andrew, for your
                        work! 5 stars without a doubt!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-2">
              <div class="card card-padding">
                <div class="card-image wrapper-testimonial">
                  <div class="testimonials-gradient"></div>
                  <div class="makuda-testimonials-item">
                    <div class="makuda-testimonials-item__author">
                      <div class="makuda-testimonials-item__author--image">
                        <img
                          alt="Tony Norton"
                          src="media/img/avatar-1577909_640.png"
                        />
                      </div>
                      <div class="makuda-testimonials-item__author--name">
                        <span>Web Designer</span>
                        <h6>Tony Norton</h6>
                      </div>
                    </div>
                    <div class="makuda-testimonials-item__content">
                      <div
                        class="makuda-testimonials-item__stars makuda-stars5"
                      ></div>
                      <p>
                        I am a web developer. And, as known, good clipart is a
                        half of successful web design. Today is not so easy to
                        find realy good photos for website. And one day I have
                        ordered a clipart for my new project and works of Andrew
                        are fit just amazing for me. Thank you, Andrew, for your
                        work! 5 stars without a doubt!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-3">
              <div class="card card-padding">
                <div class="card-image wrapper-testimonial">
                  <div class="testimonials-gradient"></div>
                  <div class="makuda-testimonials-item">
                    <div class="makuda-testimonials-item__author">
                      <div class="makuda-testimonials-item__author--image">
                        <img
                          alt="Tony Norton"
                          src="media/img/avatar-1577909_640.png"
                        />
                      </div>
                      <div class="makuda-testimonials-item__author--name">
                        <span>Web Designer</span>
                        <h6>Tony Norton</h6>
                      </div>
                    </div>
                    <div class="makuda-testimonials-item__content">
                      <div
                        class="makuda-testimonials-item__stars makuda-stars5"
                      ></div>
                      <p>
                        I am a web developer. And, as known, good clipart is a
                        half of successful web design. Today is not so easy to
                        find realy good photos for website. And one day I have
                        ordered a clipart for my new project and works of Andrew
                        are fit just amazing for me. Thank you, Andrew, for your
                        work! 5 stars without a doubt!
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

    <!-- <div class="container">
      <p class="boldOrange">Ultimi Lavori</p>
    </div>
    <div class="container">
      <section class="hero is-fullheight has-carousel">
        <div class="hero-carousel">
          <div class="item-1">
            <div class="containerText">
              <p class="textInsideSquareWork">AAAA</p>
              <div class="image imageMask">
                <img alt="" src="/media/img/Matteo_Toia.jpg" />
              </div>
            </div>
          </div>
          <div class="item-2">
            <div class="containerText">
              <p class="textInsideSquareWork">AAAA</p>
              <div class="image imageMask">
                <img alt="" src="/media/img/Suites%20&%20Atelier.png" />
              </div>
            </div>
          </div>
          <div class="item-3">
            <div class="containerText">
              <p class="textInsideSquareWork">AAAA</p>
              <div class="image imageMask">
                <img alt="" src="/media/img/Buffel%202.0.png" />
              </div>
            </div>
          </div>
        </div>

        <div class="hero-head"></div>
        <div class="hero-body"></div>
        <div class="hero-foot"></div>
      </section>
      <br /><br /><br /><br /> -->

      <!-- <p class="boldOrange" style="margin-bottom: -7em">Aziende</p>
      <div class="columns is-vcentered">
        <div class="column" style="display: flex">
          <h1 class="giantAssTextLight">+</h1>
          <p class="counter-count giantAssTextLight">50</p>
        </div>
        <div class="column">
          <p class="whiteText">
            Nel 2020 siamo stati al fianco di aziende in ogni settore.
            Ristorazione, Alberghiero, Metallurgico, No profit, Immobiliare,
            Moda, Musica, Farmaceutico sono alcune delle realtà che abbiamo
            affrontato, rispondendo ai loro obiettivi.
          </p>
        </div>
      </div>
      <p class="boldOrange" style="margin-bottom: -7em">Lavori eseguiti</p>
      <div class="columns is-vcentered">
        <div class="column">
          <p class="whiteText">
            Al fine di raggiungere gli obiettivi delle aziende abbiamo
            realizzato più di 200 prodotti videografici e fotografici per i
            nostri clienti, consegnati e utilizzati per il raggiungimento degli
            obiettivi.
          </p>
        </div>
        <div class="column" style="display: flex">
          <h1 class="giantAssTextLight">+</h1>
          <p class="counter-count giantAssTextLight">200</p>
        </div>
      </div> -->
      <section class="section">
   <div class="container fade-in-animation" id="logos-carousel">
      <div
         class="carousel"
         data-autoplay="true"
         data-infinite="true"
         data-navigation="false"
         data-slidesToShow="7"
         id="carousel3"
         >
         <div class="card cardino" >
            <div class="card-image" >
               <figure class="image is-16by9  is-covered">
                  <img src="/media/img/tork-logo.png" alt="">
               </figure>
            </div>
         </div>
         <div class="card cardino" >
            <div class="card-image">
               <figure class="image is-16by9  is-covered">
               <img src="/media/img/tork-logo.png" alt="">
               </figure>
            </div>
         </div>
         <div class="card cardino">
            <div class="card-image">
               <figure class="image is-16by9  is-covered">
               <img src="/media/img/tork-logo.png" alt="">
               </figure>
            </div>
         </div>
         <div class="card cardino" >
            <div class="card-image">
               <figure class="image is-16by9  is-covered">
               <img src="/media/img/tork-logo.png" alt="">
               </figure>
            </div>

         </div>
         <div class="card cardino" >
            <div class="card-image">
               <figure class="image is-16by9 is-covered">
               <img src="/media/img/tork-logo.png" alt="">
               </figure>
            </div>
         </div>
         <div class="card cardino" >
            <div class="card-image">
              <figure class="image is-16by9 is-covered">
              <img src="/media/img/tork-logo.png" alt="">
               </figure>
            </div>
          </div>
        </div>
      </section>
    </div>

    <?php require "components/footer.php"?>

    <script
      crossorigin="anonymous"
      integrity="sha512-2LEOQqARBlk67mYfoWcJah3Rt1Tan5TYsWUNBPtviIk206eyqQpUSpuBK5S77UFu3Pm+zlJOdw8uP5UfO/AtPw=="
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/TextPlugin.min.js"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js"></script>
    <script src="js/circleScroll.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js"></script>
    <script>
      var carousels = bulmaCarousel.attach(".carousel");
      var carousel2 = bulmaCarousel.attach(".hero-carousel");
    </script>
    <script src="js/carouselManipulator.js"></script>
    <script
      crossorigin="anonymous"
      integrity="sha512-wK2NuxEyN/6s53M8G7c6cRUXvkeV8Uh5duYS06pAdLq4ukc72errSIyyGQGYtzWEzvVGzGSWg8l79e0VkTJYPw=="
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"
    ></script>
    <script
      crossorigin="anonymous"
      integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"
    ></script>
    <script
      crossorigin="anonymous"
      integrity="sha512-HxCVV6ztUUQxy4YKONLIA2qjMsobBr0OVaXrVWqVcuDrlY9cFxQs9u346FLzDXQlrGKYTXfA+w5DbGyq2P5C+g=="
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/PixiPlugin.min.js"
    ></script>
    <script src="js/animations.js"></script>
    <script src="js/swipe.js"></script>
    <script src="js/indexJS.js"></script>
    <script src="js/menu.js"></script>
    <script src="js/parallelepipedoJS.js"></script>
  </body>
</html>
