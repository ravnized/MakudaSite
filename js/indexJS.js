var elementInsideUS = $("#containerDaLevare");
var elementHeroBody = $("#containerText");
$(document).ready(function () {
  /*NAPO*/
  gsap.to($(window), { duration: 0.5, scrollTo: 0 }, 0);
  let fadingCarouselClicked = false;
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
    if (fadingCarouselClicked) fadingCarouselClicked = false;
    else {
      $(".selected").removeClass("selected");
      $(".index-" + new_work_index).addClass("selected");
    }
  }, 10000);
  //DA GESTIRE MOBILE
  /*FINE NAPO*/
  if ($(window).width() < 1024) {
    let height =
      $(".works-content .title").height() +
      +$(".works-content").height() +
      +$(
        "body > div.nostri-progetti.makuda-bgcolor > div > div > div.fading-images.column.fade-in-right-animation > div.fading-image.index-4"
      ).height() +
      +$(
        "body > div.nostri-progetti.makuda-bgcolor > div > div > div.fade-in-left-animation.column.fading-caption-content > div.fading-caption.index-4"
      ).height() +
      100;
    console.log(height);

    $(".works-content").css("height", height + "px");
    let heightImage = $(".fading-image").height();
    $(".fading-images ").css("height", heightImage + "px");
  }

  $(".fading-images.column.fade-in-right-animation").css(
    "height",
    $(".fading-image").height() + "px"
  );
  $(".card-image.wrapper-testimonial").css(
    "height",
    $(".makuda-testimonials-item").height() + "px"
  );

  window.addEventListener("resize", function (e) {
    $(".fading-images.column.fade-in-right-animation").css(
      "height",
      $(".fading-image").height() + "px"
    );
    $(".card-image.wrapper-testimonial").css(
      "height",
      $(".makuda-testimonials-item").height() + "px"
    );
  });
  window.scrollTo(0, 0);
  var heightWindow = $(window).height();
  var widthWindow = $(window).width();
  var app,
    video = document.createElement("video"),
    divVideo = document.querySelector("#divVideo");
  video.src = "/media/video/Finale_1web.mp4";
  video.muted = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("preload", "auto");
  video.autoload = true;
  video.loop = true;
  video.autoplay = true;
  video.width = widthWindow;
  video.height = heightWindow;
  console.log(video);
  video.load();
  var displacementSprite;
  var displacementFilter;
  let isFinished;

  function initPixi() {
    isFinished = false;
    app = new PIXI.Application({
      width: widthWindow,
      height: heightWindow,
    });
    var videoTexture = new PIXI.Texture.from(video);
    var videoSprite = new PIXI.Sprite.from(videoTexture);
    var container = new PIXI.Container();
    if ($(window).width() < 1024) {
      videoSprite.width = widthWindow * 2.7;
      videoSprite.height = heightWindow;
      videoSprite.position.x = -widthWindow;
    } else {
      videoSprite.width = widthWindow;
      videoSprite.height = heightWindow;
    }

    app.stage.addChild(container);
    container.addChild(videoSprite);
    displacementSprite = new PIXI.Sprite.from("media/img/clouds.jpg");
    displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementSprite
    );
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];
    displacementSprite.scale.x = 0;
    displacementSprite.scale.y = 0;
    if ($(window).width() < 1024) {
      app.renderer.view.style.transform = "scale(1.5)";
    } else {
      app.renderer.view.style.transform = "scale(1.16)";
    }
    app.renderer.view.style.transformOrigin = "center center";
    app.renderer.view.style.opacity = "60%";
    displacementSprite.position.x = app.screen.width / 2;
    displacementSprite.position.y = app.screen.height / 2;
    tl3.to("#sectionVideo", { duration: 0.5, css: { autoAlpha: 1 } });
    tl3.to("#weAre", {
      delay: 0.5,
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
    let oneTime = true;
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
            css: { y: 0, autoAlpha: 1 },
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

        .add(function () {
          function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
          }

          async function homeBandAnimation() {
            while (true) {
              let g0 = $("#g0");
              let g1 = $("#g1");
              let g2 = $("#g2");
              let s0 = $("#s0");
              let s1 = $("#s1");
              let s2 = $("#s2");
              let s3 = $("#s3");
              let s4 = $("#s4");
              let s5 = $("#s5");
              let s6 = $("#s6");
              let s7 = $("#s7");
              let s8 = $("#s8");
              let s9 = $("#s9");
              s1.css("opacity", 1);
              await sleep(500);
              s2.css("opacity", 1);
              await sleep(1000);
              s0.css("opacity", 0);
              s1.css("opacity", 0);
              s2.css("opacity", 0);
              g0.hide();
              g1.show();
              s3.css("opacity", 1);
              await sleep(500);
              s4.css("opacity", 1);
              await sleep(500);
              s5.css("opacity", 1);
              await sleep(1000);
              s3.css("opacity", 0);
              s4.css("opacity", 0);
              s5.css("opacity", 0);
              g1.hide();
              g2.show();
              s6.css("opacity", 1);
              await sleep(500);
              s7.css("opacity", 1);
              await sleep(500);
              s8.css("opacity", 1);
              await sleep(500);
              s9.css("opacity", 1);
              await sleep(1000);
              s6.css("opacity", 0);
              s7.css("opacity", 0);
              s8.css("opacity", 0);
              s9.css("opacity", 0);
              g2.hide();
              g0.show();
              s0.css("opacity", 1);
              await sleep(500);
            }
          }
          oneTime = false;
          reloadScrollBars();
          homeBandAnimation();
        }, "animationVideoGruppo");
    }

    $("#section-animated").one("click touchstart touchmove", function () {
      if (oneTime) {
        console.log(this);
        animationScroller();
        oneTime = false;
      }
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

  const tl3 = gsap.timeline();
  var finished = false;

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

        initPixi();
        divVideo.appendChild(app.view);
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

  $(window).on("scroll resize", function () {
    //Rotellina home-band
    if ($(window).scrollTop() > 200) $("#rotellina").fadeOut();
    else $("#rotellina").fadeIn();

    //Titolo e testo "WE ARE"
    if (!weAreAnimation && isScrolledIntoView($("#we-are"), true)) {
      weAreAnimation = true;
      animateFadeIn($("#we-are"), 700, AnimationDirection.top, {
        isPadding: true,
      });
      $("#rotellina").fadeOut();

      // setElementForScrollDelay($(".fading-images"));
    }

    //Titolo "IL NOSTRO METODO"
    if (
      !ilNostroMetodoAnimation &&
      isScrolledIntoView($("#il-nostro-metodo"), true)
    ) {
      ilNostroMetodoAnimation = true;
      animateFadeIn($("#il-nostro-metodo"), 700);
    }

    //Parallelogrammi 1 2 3 4 5
    if (
      paralleGruppoAnimation == 0 &&
      isScrolledIntoView($(".paralleGruppo"), false, 130)
    ) {
      paralleGruppoAnimation = 1;

      let animationTime = 600;
      animateFadeIn(
        $(".paralleGruppo #3"),
        animationTime,
        AnimationDirection.top
      );

      var paralleGruppoInterval = setInterval(function () {
        switch (paralleGruppoAnimation) {
          case 1:
            animateFadeIn(
              $(".paralleGruppo #2, .paralleGruppo #4"),
              animationTime,
              AnimationDirection.top
            );
            break;
          case 2:
            animateFadeIn(
              $(".paralleGruppo #1, .paralleGruppo #5"),
              animationTime,
              AnimationDirection.top
            );
            clearInterval(paralleGruppoInterval);
            break;
        }
        paralleGruppoAnimation++;
      }, 100);
    }

    //Pulsante SCOPRI CHI SIAMO
    if (
      !scopriChiSiamoAnimation &&
      isScrolledIntoView($(".scopri-chi-siamo"), true)
    ) {
      scopriChiSiamoAnimation = true;
      animateFadeIn($(".scopri-chi-siamo"), 700);
    }

    //Titolo, immagine e testo I NOSTRI PROGETTI
    if (
      !progettiAnimation &&
      isScrolledIntoView($(".works-content"), false, 250)
    ) {
      progettiAnimation = true;
      animateFadeIn(
        $(".works-content .title"),
        500,
        AnimationDirection.bottom,
        { bottom: "50px" }
      );
      setTimeout(function () {
        animateFadeIn(
          $(".works-content .fading-images"),
          800,
          AnimationDirection.right
        );
        animateFadeIn(
          $(".works-content .fading-caption-content"),
          800,
          AnimationDirection.left,
          { left: "75px", right: "25px" }
        );
      }, 200);
    }

    //Testimonials
    if (
      $(".testimonial-container").length != 0 &&
      !testimonialAnimation &&
      isScrolledIntoView($(".testimonial-container"), false, 90)
    ) {
      testimonialAnimation = true;
      animateFadeIn($(".testimonial-container"), 500);
    }

    //Carousel dei loghi
    if (
      carousel3Animation == 0 &&
      isScrolledIntoView($("#carousel3"), false, 0)
    ) {
      carousel3Animation++;
      animateFadeIn($("#logos-carousel"), 500);
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
