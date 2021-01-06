<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>Homepage</title>
    <link href="css/bulma.min.css" rel="stylesheet" />
    <link href="css/index.css" rel="stylesheet" type="text/css" />
    <link href="css/bello.css" rel="stylesheet" type="text/css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/css/bulma-carousel.min.css"
      rel="stylesheet"
    />
    <link href="css/pageLoader.css" rel="stylesheet" />
    <link href="css/menu.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
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
   

    <?php require("components/loader.html"); ?>

    <?php require("components/navbar.php"); ?>

    <?php require("components/menu.php"); ?>

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
        <div class="makuda-bgcolor home-band">
      <p class="boldBig has-text-centered">STRATEGIA</p>
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


    
    <!-- <div class="container" id="containerDaLevare">
      <div class="stickHorizontal">
        <p class="boldBig halfWidth">BLACK IS NOT DARK</p>
      </div>
      <br />
      <p class="boldOrange">Mission</p>
      <p class="whiteText" style="font-weight: bold">
        “Trasmettere un modo nuovo di vedere i colori della vita quotidiana, per
        raggiungere i propri obiettivi senza timore degli ostacoli.” Makuda è in
        un processo di costante crescita che ci porta ad affrontare ogni realtà
        in maniera positiva aggiungendo nuove competenze. Crescere per noi è
        imparare a saper offrire le giuste sfumature di colore per un obiettivo
        finale concreto, che sia sempre di successo e di qualità.
      </p>
      <br /><br />
      <p class="boldOrange">VALORI</p>
      <p class="whiteText">
        <span style="font-weight: bold">Curiosità: </span>Se il nero rappresenta
        l’oscurità, l’inesplorato allora rappresenta anche tutto ciò che la
        curiosità ti porta ad esplorare. <br /><br />
        <span style="font-weight: bold">Creazione: </span>Perché il nero
        rappresenta l’attimo prima del processo di creazione, l’attimo prima che
        si accenda la lampadina. <br /><br />
        <span style="font-weight: bold">Crescita: </span>Qualsiasi sia il valore
        che si dà al nero esso rappresenta anche un punto di arrivo. Se è vero
        che il nero è un non colore, è anche vero che esso è l’insieme di tutti
        colori. E’ solo esplorando tutte le sfumature che è possibile crescere.
        <br /><br />
      </p>
      <br /><br />
    </div> -->
    <div class="sezione-infografica">
      <div class="container" style="margin-bottom: 100px">
        <p class="boldOrange">Infografica Figa</p>
      </div>

      <div class="paralleGruppo">
        <div id="1">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo uno">1</p>
          </div>
          <div class="square">
            <div style="padding: 10px">
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

        <div id="2">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo">2</p>
          </div>

          <div class="square">
            <div style="padding: 10px">
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
        <div id="3">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo">3</p>
          </div>
          <div class="square">
            <div style="padding: 10px">
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
        <div id="4">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo">4</p>
          </div>
          <div class="square">
            <div style="padding: 10px">
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
        <div id="5">
          <div class="parallelepipedo">
            <p class="secondText">Meeting</p>
            <p class="numberParallelepipedo">5</p>
          </div>
          <div class="square">
            <div style="padding: 10px">
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
            <svg height="50" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="50" width="320" />
            </svg>
          <div class="text makuda-bold makuda-color">SCOPRI CHI SIAMO</div>
        </div>
      </a>
    </div>
    <!-- POSSIBILE CAROUSEL FATTO A MANO
    <div class="container">
      <p class="boldOrange">OUR PROJECTS</p>
      <div class="projects-slider">
  
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>

        <div class="projects-slides">
          <div id="slide-1">
            1
          </div>
          <div id="slide-2">
            2
          </div>
          <div id="slide-3">
            3
          </div>
          <div id="slide-4">
            4
          </div>
          <div id="slide-5">
            5
          </div>
        </div>
      </div>
    </div> -->
    

    <div class="container">
      <p class="boldOrange">FeedBack</p>
    </div>
    <div class="testimonial-container" style="height: 100%">
      <section class="section containerCarousel">
        <div class="container containerCar">
          <div class="carousel" data-initial-slide="1" id="carousel1">
            <div class="item-1">
              <!-- Slide Content -->
              <div class="card">
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
                    <!-- .ashade-testimonials-item__author -->
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
              <!-- Slide Content -->
              <div class="card">
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
                    <!-- .ashade-testimonials-item__author -->
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
              <!-- Slide Content -->
              <div class="card">
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
                    <!-- .ashade-testimonials-item__author -->
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

            <!-- End Carousel -->
          </div>
        </div>
      </section>
    </div>

    <div class="container">
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

            <!-- Slide Content -->
          </div>
          <div class="item-2">
            <div class="containerText">
              <p class="textInsideSquareWork">AAAA</p>
              <div class="image imageMask">
                <img alt="" src="/media/img/Suites%20&%20Atelier.png" />
              </div>
            </div>
            <!-- Slide Content -->
          </div>
          <div class="item-3">
            <div class="containerText">
              <p class="textInsideSquareWork">AAAA</p>
              <div class="image imageMask">
                <img alt="" src="/media/img/Buffel%202.0.png" />
              </div>
            </div>
            <!-- Slide Content -->
          </div>
        </div>

        <div class="hero-head"></div>
        <div class="hero-body"></div>
        <div class="hero-foot"></div>
      </section>
      <br /><br /><br /><br />

      <p class="boldOrange" style="margin-bottom: -7em">Aziende</p>
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
      </div>
      <section class="section">
        <div class="container">
          <!-- Start Carousel -->
          <div
            class="carousel"
            data-autoplay="true"
            data-infinite="true"
            data-navigation="false"
            data-slidesToShow="7"
            id="carousel3"
          >
            <div class="item-1">
              <div class="image" style="width: 200px; height: auto">
                <img alt="" src="/media/img/tork-logo.png" />
              </div>
            </div>
            <div class="item-2">
              <div class="image" style="width: 200px; height: auto">
                <img alt="" src="/media/img/tork-logo.png" />
              </div>
            </div>
            <div class="item-3">
              <div class="image" style="width: 200px; height: auto">
                <img alt="" src="/media/img/tork-logo.png" />
              </div>
            </div>
            <div class="item-4">
              <div class="image" style="width: 200px; height: auto">
                <img alt="" src="/media/img/tork-logo.png" />
              </div>
            </div>
            <div class="item-5">
              <div class="image" style="width: 200px; height: auto">
                <img alt="" src="/media/img/tork-logo.png" />
              </div>
            </div>
            <div class="item-6">
              <div class="image" style="width: 200px; height: auto">
                <img alt="" src="/media/img/tork-logo.png" />
              </div>
            </div>
            <div class="item-7">
              <div class="image" style="width: 200px; height: auto">
                <img alt="" src="/media/img/tork-logo.png" />
              </div>
            </div>
          </div>
          <!-- End Carousel -->
        </div>
      </section>
    </div>
    <footer>

    
      <div class="container" style="margin-bottom: 100px">
        <p class="has-text-centered makuda-color get-in-touch">GET IN TOUCH!</p>
        <div class="columns">
          <div class="column find-us">
            <p class="has-text-centered">FIND US</p>
            <a href="contacts.php">
              <div class="animatedBtn">
                  <svg height="50" width="200" xmlns="http://www.w3.org/2000/svg">
                    <rect class="shape" height="50" width="200" />
                  </svg>
                <div class="text">milano</div>
              </div>
            </a>
          </div>
          <div class="column">
            <p class="has-text-centered">FOLLOW US</p>
            <p class="brand-icons">
              <a href="https://www.facebook.com/makudaconsulting/"><i class="fab fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/makudaofficial/?hl=it"><i class="fab fa-instagram"></i></a>
              <a href="https://vimeo.com/490741306"><i class="fab fa-vimeo"></i></a>
              <a href="https://www.linkedin.com/company/makudaconsulting/"><i class="fab fa-linkedin"></i></a>
            </p>
          </div>
          <div class="column">
            <p class="has-text-centered">CALL US</p>
            <a href="tel:+393454044802">
              <div class="animatedBtn">
                  <svg height="50" width="320" xmlns="http://www.w3.org/2000/svg">
                    <rect class="shape" height="50" width="320" />
                  </svg>
                <div class="text">+39 345 4044802</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>

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
    <script src="js/indexJS.js"></script>
    <script src="js/menu.js"></script>
    <script src="js/parallelepipedoJS.js"></script>
  </body>
</html>
