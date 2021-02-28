<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact US</title>
    <link href="css/bulma.min.css" rel="stylesheet" />
    <link href="css/bello.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/menu.css" />
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body style="background-color:#111"><?php require('./components/libraries_after_body.php') ?>

    <?php require("components/navbar.php"); ?>

    <?php require("components/menu.php"); ?>

    <div class="container startContainer">
      <iframe src="https://snazzymaps.com/embed/281128" width="100%" height="600px" style="border:none;"></iframe>
      <div class="columns" style="margin-top: 3em">
        <div class="column firstChild">
          <img
            src="/media/img/LogoIcona_PNG_Negativo(1).png"
            height="100px"
            width="100px"
            alt=""
          />
          <h1 style="max-width: 50%" class="whiteH1">
            Seguici sui nostri social network!
          </h1>
          <br />
          <div class="orangeStick">
            <h1 class="whiteH1meno"><a>Facebook</a></h1>
            <h1 class="whiteH1meno"><a>Instagram</a></h1>
              <h1 class="whiteH1meno"><a>Vimeo</a></h1>
              <h1 class="whiteH1meno"><a>Linkedin</a></h1>
          </div>
        </div>
        <div class="column">
          <form action=" " method="post" id="form">
            <div class="field">
              <div class="control has-icons-left">
                <input
                  class="input inputMakuda"
                  name="firstName"
                  type="text"
                  placeholder="Nome"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
            <br />

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input inputMakuda"
                  name="lastName"
                  type="text"
                  placeholder="Cognome"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
            <br />

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input inputMakuda inputMakudaEmail"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <br />
            <div class="field">
              <label class="label">Messaggio</label>
              <div class="control">
                <textarea
                  name="textArea"
                  class="textarea textAreaMakuda"
                ></textarea>
              </div>
            </div>
            <br />
            <!--
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox">
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>
                -->
            <div class="field">
              <div class="control">
                <div
                  class="g-recaptcha"
                  data-sitekey="6LdPUN8ZAAAAADCiqD9YhLrwyY2U_NiuqdKw7c0C"
                ></div>
              </div>
            </div>
            <br />
            <div class="field is-grouped">
              <div class="control">
                <button class="button button-makuda" type="submit">
                  Invia
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <?php require("components/footer.php") ?>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/CSSRulePlugin.min.js"
      integrity="sha512-6MT8e40N5u36Um5SXKtwZmoKcCSg1XaKtexnXZPpQ4iJDHrBEHXKz37fnDovXezsaCd4oKCH5Y+vrcl7qpLPoA=="
      crossorigin="anonymous"
    ></script>

    <script src="js/menu.js"></script>
    <script src="js/contactJS.js"></script>
  </body>
</html>
