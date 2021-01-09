var elementInsideUS = $("#containerDaLevare");
var elementHeroBody = $("#containerText");
$(document).ready(function () {
  /*NAPO*/
  let band_texts = ["STRATEGIA", "PRODUZIONE", "INNOVAZIONE"];
  let band_actual_index = 0;
  let fadingCarouselClicked = false;
  setInterval(function myMethod() {
    $(".home-band p").html(band_texts[++band_actual_index % 3]);
  }, 1000);
  $(".fading-circle").click(function (target) {
    let new_work_index = $(this).attr("data-index");
    let iormga = $(".fading-image.index-" + new_work_index);
    iormga.remove();
    iormga.insertAfter(".selected.fading-image");
    $(".selected").removeClass("selected");
    $(".index-" + new_work_index).addClass("selected");
    fadingCarouselClicked = true;
  });
  setInterval(function myMethod() {
    let works_length = $(".fading-circle").length;
    let works_actual_index = $(".fading-choise.selected").attr("data-index");
    let new_work_index =
      (parseInt(works_actual_index) + 1) % (works_length + 1);
    if (new_work_index == 0) new_work_index = 1;
    let iormga = $(".fading-image.index-" + new_work_index);
    iormga.remove();
    iormga.insertAfter(".selected.fading-image");
    if (fadingCarouselClicked)
      fadingCarouselClicked = false;
    else {
      $(".selected").removeClass("selected");
      $(".index-" + new_work_index).addClass("selected");
    }
  }, 3000);
  //DA GESTIRE MOBILE
  $(".fading-carousel").onSwipe(function (results) {
    // if(results.up == true)
    //   alert("Up")
    // if(results.right == true)
    //   alert("Right")
    // if(results.down == true)
    //   alert("Down")
    // if(results.left == true)
    //   alert("Left")
  });
  /*FINE NAPO*/

  var app,
    video = document.createElement("video"),
    divVideo = document.querySelector("#divVideo"),
    oneTime = false;
  video.loop = true;
  video.crossOrigin = "anonymous";
  video.preload = "auto";
  video.src = "../media/video/VideoNoText.mp4";
  video.autoload = true;
  video.muted = true;
  video.playsinline = "playsinline";

  var displacementSprite;
  var displacementFilter;
  let isFinished;
  var heightWindow = $(window).height();
  var widthWindow = $(window).width();

  function initPixi() {
    isFinished = false;
    app = new PIXI.Application({
      width: widthWindow,
      height: heightWindow,
    });
    var videoTexture = new PIXI.Texture.from(video);
    var videoSprite = new PIXI.Sprite.from(videoTexture);
    var container = new PIXI.Container();
    videoSprite.width = widthWindow;
    videoSprite.height = heightWindow;
    app.stage.addChild(container);
    container.addChild(videoSprite);
    displacementSprite = new PIXI.Sprite.from("media/img/clouds.jpg");
    displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementSprite
    );
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];
    app.renderer.view.style.transform = "scale(1)";
    displacementSprite.scale.x = 0;
    displacementSprite.scale.y = 0;
    displacementSprite.position.x = app.screen.width / 2;
    displacementSprite.position.y = app.screen.height / 2;
    tl3.to("#sectionVideo", { duration: 0.5, css: { autoAlpha: 1 } });
    tl3.to("#weAre", {
      delay: 2,
      duration: 0.5,
      autoAlpha: 1,
    });
    tl3.to(".consultingText", { duration: 0.5, autoAlpha: 1 });
    tl3.to(".animatedBtn", { duration: 0.5, autoAlpha: 1 });

    app.ticker.stop();
    gsap.ticker.add(() => {
      app.ticker.update();
      $(window).resize(function () {
        heightWindow = $(window).height();
        widthWindow = $(window).width();
        // console.log(heightWindow, widthWindow);
        app.screen.width = widthWindow;
        app.screen.height = heightWindow;
        videoSprite.width = widthWindow;
        videoSprite.height = heightWindow;
        app.renderer.resize(widthWindow, heightWindow);
      });
    });
    function animationScroller() {
      var tl = gsap.timeline();
      unloadScrollBars();
      tl.to(displacementSprite.scale, { duration: 1, x: "+=10", y: "+=10" }, 0)
        .to(
          displacementFilter.scale,
          { duration: 1, x: "+=900", y: "+=900" },
          0
        )
        .to(".hero-video", { autoAlpha: 0, duration: 0.5 }, 0.5)
        .to(
          $("#section-animated").find(".hero-body"),
          { autoAlpha: 0, duration: 0.5 },
          0.5
        )
        .add(function () {
          $("#section-animated").find(".hero-body").addClass("hide");
          $("#containerText").remove();
          $("#replacement").append(elementInsideUS);
        })
        .to(window, { duration: 0.1, scrollTo: { y: 0 } })
        .to(
          "#replacement",
          {
            duration: 1,
            css: { scaleX: 1, scaleY: 1, autoAlpha: 1 },
            ease: "power4.out",
          },
          1.3
        )

        .add(function () {
          scroller.kill();
        })
        .to(
          "#sectionVideo",
          {
            duration: 1,
            css: {
              minHeight: 0,
            },
          },
          "animationVideoGruppo"
        )
        .to(
          ".paralleGruppo",
          {
            duration: 1,
            y: 0,
            ease: "power4.out",
          },
          "animationVideoGruppo"
        )
        .add(function () {
          reloadScrollBars();
        }, "animationVideoGruppo");
    }
    $("#section-animated").click(function () {
      animationScroller();
    });

    var scroller = ScrollTrigger.create({
      trigger: "#section-animated",
      start: "50px",
      end: "+=3000px",
      markers: false,
      pin: true,
      scrub: false,
      onEnter: (self) => {
        animationScroller();
      },
    });
  }

  var finished = false;
  const tl3 = gsap.timeline();

  function loader() {
    unloadScrollBars();
    var pageloader;
    pageloader = $(".pageloaderLogo").find("circle");
    for (let i = 0; i < 20; i += 2) {
      tl3.add(function () {
        $(pageloader[i]).addClass("circleScale");
        $(pageloader[i]).removeClass("circleInit");
        $(pageloader[i + 1]).addClass("circleScale");
        $(pageloader[i + 1]).removeClass("circleInit");
      }, "+=0.1");

      if (i === 20) {
        finished = true;
      }
    }
    var makuda = ["M", "A_2", "K", "U", "D", "A", "triangle"];

    for (let k = 0; k < makuda.length; k++) {
      tl3.to("#" + makuda[k], { duration: 0, autoAlpha: 1, delay: 0.1 });
    }
    tl3.to(".pageloader", {
      duration: 0.5,
      autoAlpha: 0,
      onComplete: function () {
        reloadScrollBars();
        $(".pageloader").hide();
        if ($(window).width() > 1024) {
          initPixi();
          divVideo.appendChild(app.view);
        } else {
          $(".gradient-video").css(
            "height",
            $(".cardinoVideo").height() + "px"
          );
        }
      },
    });
  }
  loader();

  // PIGNA
  var paralleGruppoAnimation = 0;
  var carousel3Animation = 0;
  var progettiAnimation = false;
  var scopriChiSiamoAnimation = false;
  var weAreAnimation = false;
  var ilNostroMetodoAnimation = false;
  var testimonialAnimation = false;

  $(window).on("scroll resize", function() {
    //Rotellina home-band
    if ($(window).scrollTop() > 200)
      $("#rotellina").fadeOut();
    else
      $("#rotellina").fadeIn();
    
    //Titolo e testo "WE ARE"
    if (!weAreAnimation && isScrolledIntoView($("#we-are"), true))
    {
      weAreAnimation = true;
      animateFadeIn($("#we-are"), 2000);
      $("#rotellina").fadeOut();
      
      // setElementForScrollDelay($(".fading-images"));
    }
    
    //Titolo "IL NOSTRO METODO"
    if (!ilNostroMetodoAnimation && isScrolledIntoView($("#il-nostro-metodo"), true))
    {
      ilNostroMetodoAnimation = true;
      animateFadeIn($("#il-nostro-metodo"), 2000);
    }

    //Parallelogrammi 1 2 3 4 5
    if (paralleGruppoAnimation == 0 && isScrolledIntoView($(".paralleGruppo"), false, 130))
    {
      paralleGruppoAnimation = 1;

      animateFadeIn($(".paralleGruppo #3"), 400, AnimationDirection.top);

      var paralleGruppoInterval = setInterval(function() {
        switch (paralleGruppoAnimation)
        {
          case 1:
            animateFadeIn($(".paralleGruppo #2, .paralleGruppo #4"), 400, AnimationDirection.top);
            break;
          case 2:
            animateFadeIn($(".paralleGruppo #1, .paralleGruppo #5"), 400, AnimationDirection.top);
            clearInterval(paralleGruppoInterval);
            break;
        }
        paralleGruppoAnimation++;
      }, 400);
    }

    //Pulsante SCOPRI CHI SIAMO
    if (!scopriChiSiamoAnimation && isScrolledIntoView($(".scopri-chi-siamo"), true))
    {
      scopriChiSiamoAnimation = true;
      animateFadeIn($(".scopri-chi-siamo"), 3000);
    }

    //Titolo, immagine e testo I NOSTRI PROGETTI
    if (!progettiAnimation && isScrolledIntoView($(".works-content"), false, 250))
    {
      progettiAnimation = true;
      animateFadeIn($(".works-content .title"), 500, AnimationDirection.bottom, {top: "25px", bottom: "50px"});
      setTimeout(function () {
        animateFadeIn($(".works-content .fading-images"), 1000, AnimationDirection.right);
        animateFadeIn(
          $(".works-content .fading-caption-content"),
          1000,
          AnimationDirection.left,
          {left: "75px", right: "25px"}
        );
      }, 200);
    }
    
    //Testimonials
    if (!testimonialAnimation && isScrolledIntoView($(".testimonial-container"), false, 90))
    {
      testimonialAnimation = true;
      animateFadeIn($(".testimonial-container"), 2000);
    }

    //Carousel dei loghi
    if (carousel3Animation == 0 && isScrolledIntoView($("#carousel3"), true))
    {
      carousel3Animation++;
      animateFadeIn($("#logos-carousel"), 1500);
      // var carousel3Item = $("#carousel3 .is-current").eq(0);
      // animateFadeIn(carousel3Item, 50);

      // var carousel3Interval = setInterval(function () {
      //   carousel3Item = carousel3Item.next();

      //   if (carousel3Item.length == 0 || parseInt(carousel3Item.data("slider-index")) >= parseInt($("#carousel3").data("slidesToShow")))
      //     carousel3Item = $("#carousel3 .slider-item").eq(0);

      //   if (carousel3Item.css("opacity") == 1)
      //     clearInterval(carousel3Interval);
      //   else
      //   {
      //     animateFadeIn(carousel3Item, 50);
      //     carousel3Animation++;
      //   }
      // }, 50);
    }
  });
  //FINE PIGNA
});
