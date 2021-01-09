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

    <div class="mainSection" style="transform: translateY(600px); opacity: 0">
      <section class="sectionFullWorks">
        <div class="workList">
          <div class="workListItem spaceWorkList" id="1">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="workBlockContainer">
                    <div class="workBlock">
                      <div class="workBlockImageSub">
                        <a href="javascript:delay('./works/Works_Toia.php')">
                          <img alt="" class="imageVideo"  src="media/img/Matteo_Toia.jpg" />
                        </a>
                      </div>
                      <div class='workBlockTitle'>

                    <span class="titleVideo">Matteo Toia</span
                    >
                    </div>
                    </div>
                  </div>
                </div>
                <div class="column ">

                </div>
              </div>
            </div>
          </div>
          <div class="workListItem spaceWorkList" id="2">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="workBlockContainer">
                    <div class="workBlock">
                      <div class="workBlockImageSub">
                        <a
                          class="imageVideo"
                          href="javascript:delay('./works/Works_Suites.php')"
                        >
                          <img
                            alt=""
                            src="media/img/Suites%20&%20Atelier.png"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column descriptionHide">
                  <div class="descriptionVideo">
                    <span class="titleDescriptionVideo">SUITES & ATELIER:</span
                    ><br />
                    <span class="subTitleOrange"></span>
                    <p>
                      Boutique Hotel in centro città di Como situato sulle rive
                      del lago <br />
                      nella storica dimora dell’artista Beppe Spadacini. <br />
                      Restaurata e inaugurata nel 2020 dalla società Lungo Lario
                      SRL.
                    </p>

                    <div class="stickDiv">
                      <p>
                        <span class="boldOrange">Focus:</span> Strategia
                        comunicazione web e digitale<br />
                      </p>
                      <p>
                        <span class="boldOrange">Website:</span>
                        <a href="https://www.suiteslakecomo.com"
                          >www.suiteslakecomo.com</a
                        >
                      </p>
                      <p>
                        <span class="boldOrange"
                          >Canali digitali principali:</span
                        >
                        Facebook, Instagram, TripAdvisor,
                        <span style="margin-left: 80px">Booking, AirBnB</span>
                      </p>
                      <p>
                        <span class="boldOrange"
                          >Inizio progetto: Giugno 2020</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="workListItem spaceWorkList" id="3">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="workBlockContainer">
                    <div class="workBlock">
                      <div class="workBlockImageSub">
                        <a
                          class="imageVideo"
                          href="javascript:delay('./works/Works_Buffel.php')"
                        >
                          <img alt="" src="media/img/Buffel%202.0.png" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column descriptionHide">
                  <div class="descriptionVideo">
                    <span class="titleDescriptionVideo">GELATERIA BUFFEL:</span
                    ><br />

                    <p>
                      Gelateria gourmet situata a Busto Arsizio, <br />
                      rinnovata e inaugurata come Caffetteria e <br />
                      Bakery nel Novembre 2020.
                    </p>

                    <div class="stickDiv">
                      <p>
                        <span class="boldOrange">Focus:</span> Strategia
                        Marketing
                      </p>
                      <p>
                        <span class="boldOrange">Website: </span
                        ><a href="https://www.buffel.it">www.buffel.it </a>
                      </p>
                      <p>
                        <span class="boldOrange"
                          >Canali digitali principali:</span
                        >
                        Facebook, Instagram, TripAdvisor,
                        <span style="margin-left: 80px"
                          >Delivery System, Tik Tok, To Good To Go</span
                        >
                      </p>
                      <p>
                        <span class="boldOrange">Novembre 2020 – In corso</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="workListItem spaceWorkList" id="4">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column">
                  <div class="workBlockContainer">
                    <div class="workBlock">
                      <div class="workBlockImageSub">
                        <video
                          class="imageVideo video-js vjs-default-skin vjs-16-9"
                          data-setup='{"controls":true}'
                          loop
                          muted
                          poster="media/img/Schermata%202020-12-21%20alle%2018.13.36.png"
                          preload="none"
                        >
                          <source
                            src="media/video/Buffel_2.0.mp4"
                            type="video/mp4"
                          />
                          <p class="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a
                              href="https://videojs.com/html5-video-support/"
                              target="_blank"
                              >supports HTML5 video</a
                            >
                          </p>
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column descriptionHide">
                  <div class="descriptionVideo">
                    <span class="titleDescriptionVideo"
                      >ALTRI CONTENUTI PRODOTTI:</span
                    ><br />

                    <div class="stickDiv">
                      <p>
                        <span class="boldOrange">Clip Musicali, Youtube</span>
                      </p>
                      <p>
                        <span class="boldOrange">B-Roll</span>
                      </p>
                      <p>
                        <span class="boldOrange">Video Corporate</span>
                      </p>
                      <p>
                        <span class="boldOrange">Video Brand/Prodotto</span>
                      </p>
                      <p>
                        <span class="boldOrange">CGI – Modellazione 3D </span>
                      </p>
                      <p>
                        <span class="boldOrange">Shooting Corporate/Brand</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="container hide textContainer">
                  <h1 class="tVideo">MATTEO TOIA</h1>
                  <br /><br />
                  <p class="subVideo">PERSONAL IMAGE GROWTH</p>
                  <br /><br />
                  <div class="columns is-6">
                    <div class="column is-two-thirds">
                      <p class="descVideo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur in scelerisque urna, eget ullamcorper mauris.
                        Nam sit amet sem in sapien vehicula commodo. Etiam quis
                        diam libero. Aliquam faucibus posuere nisl. Maecenas
                        odio dui, pulvinar ac risus et, fermentum placerat
                        purus. Donec eu libero metus. Maecenas sed sapien a leo
                        mattis fermentum sed eu sem. Nam tempor tristique magna,
                        ut fermentum felis sollicitudin quis. Nulla tempus
                        molestie ex quis finibus. Donec vestibulum sem at est
                        congue, eu gravida massa feugiat. Donec non orci elit.
                        Maecenas mollis nunc metus, id tempor sem accumsan sed.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean eu massa at mi tincidunt pharetra ut at libero.
                      </p>
                    </div>
                    <div class="column">
                      <p><span class="boldOrange">Cliente</span> Mario Rossi</p>
                      <p><span class="boldOrange">Anno</span> Mario Rossi</p>
                      <p>
                        <span class="boldOrange">Tipologia Di Prodotto</span>
                      </p>
                      <p>
                        <span class="simpleOrange">Video-SocialCompaign</span>
                      </p>
                    </div>
                  </div>
                  <br />
                  <p class="subVideo">Cliente</p>
                  <br />
                  <div class="columns is-6">
                    <div class="column">
                      <p class="descVideo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur in scelerisque urna, eget ullamcorper mauris.
                        Nam sit amet sem in sapien vehicula commodo. Etiam quis
                        diam libero. Aliquam faucibus posuere nisl. Maecenas
                      </p>
                    </div>
                    <div class="column">
                      <p class="descVideo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur in scelerisque urna, eget ullamcorper mauris.
                        Nam sit amet sem in sapien vehicula commodo. Etiam quis
                        diam libero. Aliquam faucibus posuere nisl. Maecenas
                      </p>
                    </div>
                  </div>
                  <br /><br /><br />
                  <p class="subVideo">OBIETTIVO DEL CLIENTE</p>
                  <p class="giantAssText">
                    <span class="orangeOnly">“</span>Accrescere i miei fedback
                    sulla pagina<span class="orangeOnly">”</span>
                  </p>
                  <br /><br /><br />
                  <p class="subVideo">Canali Sociali Scelti</p>
                  <p class="giantAssText">Instagram</p>
                  <br /><br /><br />
                  <p class="subVideo">Post</p>
                  <div class="columns">
                    <div class="column is-one-third">
                      <img
                        alt=""
                        height="3em"
                        src="/media/img/istockphoto-892510910-170667a.jpg"
                        width="auto"
                      />
                    </div>
                    <div class="column is-one-third">
                      <p class="orangeOnly">
                        Spiegazione tipologia dei contenuti realizzati
                      </p>
                      <p class="whiteText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla viverra justo purus, ut convallis tortor vehicula
                        sed. Nullam id ligula vitae risus blandit pretium.
                      </p>
                    </div>
                  </div>
                  <div
                    class="columns"
                    style="z-index: 100; transform: translateY(-50%)"
                  >
                    <div class="column is-one-fifth"></div>
                    <div class="column is-one-third">
                      <p class="subVideo" style="text-align: center">Stories</p>
                      <img
                        alt=""
                        height="3em"
                        src="/media/img/istockphoto-892510910-170667a.jpg"
                        width="auto"
                      />
                    </div>
                    <div class="column">
                      <p class="orangeOnly">
                        Spiegazione tipologia dei contenuti realizzati
                      </p>
                      <p class="whiteText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla viverra justo purus, ut convallis tortor vehicula
                        sed. Nullam id ligula vitae risus blandit pretium.
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
