var elementInsideUS = $("#containerDaLevare");
var elementHeroBody = $("#containerText");

$(document).ready(function () {
  /*NAPO*/
  let band_texts = ["STRATEGIA", "PRODUZIONE", "INNOVAZIONE"];
  let band_actual_index = 0;
  setInterval(function myMethod() {
    $(".home-band p").html(band_texts[++band_actual_index % 3]);
  }, 1000);
  $(".fading-circle").click(function(target){
    $(".selected").removeClass("selected");
    $(".index-"+$(this).attr("data-index")).addClass("selected");
  });
  setInterval(function myMethod() {
    let works_length = $(".fading-circle").length;
    let works_actual_index = $(".fading-choise.selected").attr("data-index");
    let new_work_index = (parseInt(works_actual_index) + 1) % (works_length + 1);
    if(new_work_index == 0)
      new_work_index = 1;
    let iormga = $(".fading-image.index-"+new_work_index);
    let iormgaParent = iormga.parent();
    iormga.remove();
    iormga.insertAfter(".selected.fading-image");
    $(".selected").removeClass("selected");
    $(".index-"+new_work_index).addClass("selected");
  }, 3000);
  //DA GESTIRE MOBILE
  $(".fading-carousel").onSwipe(function(results){
    if(results.up == true)
      alert("Up")
    if(results.right == true)
      alert("Right")
    if(results.down == true)
      alert("Down")
    if(results.left == true)
      alert("Left")
  });
  /*FINE NAPO*/
  window.scrollTo(0, 0);
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

    var scroller = ScrollTrigger.create({
      trigger: "#section-animated",
      start: "50px",
      end: "3010px",
      markers: false,
      pin: true,
      scrub: false,
      onEnter: (self) => {
        var tl = gsap.timeline();

        tl.to(
          displacementSprite.scale,
          { duration: 1, x: "+=10", y: "+=10" },
          0
        )
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
            if (isFinished === false) {
              $("#section-animated").find(".hero-body").addClass("hide");
              $("#containerText").remove();
              $("#replacement").append(elementInsideUS);
              isFinished = true;
            }
          })
          .to(
            "#replacement",
            {
              duration: 1,
              css: { scaleX: 1, scaleY: 1, autoAlpha: 1 },
              ease: "power4.out",
            },
            1.3
          )
          .to(window, { duration: 0.1, scrollTo: { y: 0 } })
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
          );
      },
    });
    $("#section-animated").one("click", function () {
      var tl = gsap.timeline();

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
          if (isFinished === false) {
            $("#section-animated").find(".hero-body").addClass("hide");
            $("#containerText").remove();
            $("#replacement").append(elementInsideUS);
            isFinished = true;
          }
        })
        .to(
          "#replacement",
          {
            duration: 1,
            css: { scaleX: 1, scaleY: 1, autoAlpha: 1 },
            ease: "power4.out",
          },
          1.3
        )
        .to(window, { duration: 0.1, scrollTo: { y: 0 } })
        .add(function () {
          scroller.kill();
        })
        .to(".paralleGruppo", {
          duration: 1,
          y: 0,
          ease: "power4.out",
        });
    });
  }

  var finished = false;
  const tl3 = gsap.timeline();

  if (!sessionStorage.getItem("doNotShow")) {
    sessionStorage.setItem("doNotShow", true);
    loader();
  } else {
    tl3.to(".pageloader", {
      duration: 0.5,
      autoAlpha: 0,
      onComplete: function () {
        $(".pageloader").hide();
      },
    });
    if ($(window).width() > 1024) {
      initPixi();
      tl3.to(".pageloader", {
        duration: 0.5,
        autoAlpha: 0,
        onComplete: function () {
          $(".pageloader").hide();
        },
      });
      divVideo.appendChild(app.view);
    } else {
      animateElements();
      $(".gradient-video").css("height", $(".cardinoVideo").height() + "px");
    }
  }

  function loader() {
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

    if ($(window).width() > 1024) {
      tl3.add(function () {
        initPixi();
        divVideo.appendChild(app.view);
      }, 3);
    } else {
      animateElements();
      $(".gradient-video").css("height", $(".cardinoVideo").height() + "px");
    }
    tl3.to(".pageloader", { duration: 1, css: { autoAlpha: 0 } });
    tl3.to(".pageloader", { duration: 1, css: { display: "none" } }, "-=0.5");
    /*
    
    
    }
    
    */
  }
});
