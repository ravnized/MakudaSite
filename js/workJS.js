gsap.registerPlugin(CSSRulePlugin);

var generalItem = $(".workBlockContainer"),
  imageVideo = generalItem.find(".imageVideo"),
  textVideo = generalItem.find("p"),
  workBlockImageSub = generalItem.find(".workBlockImageSub"),
  textVideoDiv = textVideo.parent(),
  arrayListElement = $(".workListItem"),
  halfWindowHeight = 0,
  halfWindowWidth = 0,
  thisPrec,
  insideAWork = false;

function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 2000);
}

(function () {
  const blurProperty = gsap.utils.checkPrefix("filter"),
    blurExp = /blur\((.+)?px\)/,
    getBlurMatch = (target) =>
      (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

  gsap.registerPlugin({
    name: "blur",
    get(target) {
      return +getBlurMatch(target)[1] || 0;
    },
    init(target, endValue) {
      let data = this,
        filter = gsap.getProperty(target, blurProperty),
        endBlur = "blur(" + endValue + "px)",
        match = getBlurMatch(target)[0],
        index;
      if (filter === "none") {
        filter = "";
      }
      if (match) {
        index = filter.indexOf(match);
        endValue =
          filter.substr(0, index) +
          endBlur +
          filter.substr(index + match.length);
      } else {
        endValue = filter + endBlur;
        filter += filter ? " blur(0px)" : "blur(0px)";
      }
      data.target = target;
      data.interp = gsap.utils.interpolate(filter, endValue);
    },
    render(progress, data) {
      data.target.style[blurProperty] = data.interp(progress);
    },
  });
})();
$(function () {
  var workListItem = $($(".workListItem").get().reverse());
  gsap.to($(window), { duration: 0.5, scrollTo: 0 }, 0);
  gsap.fromTo(
    workListItem,
    {
      opacity: 0,
    },
    {
      duration: 1,
      opacity: 1,
      delay: 0.5
    },
  );
  gsap.fromTo(
    ".workListItem:nth-child(1)",
    {
      y: 200,
    },
    {
      duration: 0.3,
      y: 0,
      delay: 0.5
    },
  );
  gsap.fromTo(
    ".workListItem:nth-child(2)",
    {
      y: 200,
    },
    {
      duration: 0.8,
      y: 0,
      delay: 0.5
    },
  );
  gsap.fromTo(
    ".workListItem:nth-child(3)",
    {
      y: 200,
    },
    {
      duration: 1.4,
      y: 0,
      delay: 0.5
    },
  );
  gsap.fromTo(
    ".progress_in",
    {
      height: 0,
    },
    {
      duration: 1.5,
      height: "80%",
      delay: 1.5
    },
  );
});
$(window).on("scroll", function () {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();

  var scrollPercent = (s / (d - c)) * 100;
  $(".progress_in_selected").css("height", scrollPercent + "%");
  //NAPO
  var body = document.body,
    html = document.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
  if(s >  height - $(window).height() - $("footer").height())
    $(".progress_wrap").css("bottom", s - (height - $(window).height() - $("footer").height()) + 100);
  else 
    $(".progress_wrap").css("bottom", "5em");
});

imageVideo.mousemove(function (e) {
  var timeline = gsap.timeline();
  var offset = $(this).offset();
  var relativeX = e.pageX - offset.left;
  var relativeY = e.pageY - offset.top;
  var cX = $(this).width() / 2;
  var cY = $(this).height() / 2;
  var cxRelative = (cX - relativeX) / 20;
  var cyRelative = (cY - relativeY) / 20;
  if (insideAWork === false) {
    timeline.to($(this).parent().parent(), {
      duration: 0.5,
      rotateX: cyRelative,
      rotateY: cxRelative,
    });

    timeline.to(
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find(".workBlockTitle"),
      {
        duration: 0.5,
        rotateX: cyRelative,
        rotateY: cxRelative,
        translateZ: 100,
      },
      "-=0.5"
    );
  }
});
imageVideo.mouseleave(function (event) {
  var timeline = gsap.timeline();

  timeline.to($(this).parent().parent(), {
    duration: 1,
    rotateX: 0,
    rotateY: 0,
  });

  timeline.to(
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".workBlockTitle"),
    {
      duration: 1,
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
    },
    "-=1"
  );
});

$(workBlockImageSub).one("click", function () {
  let positionImageVideo = imageVideo.offset(),
    leftImagePos = positionImageVideo.left,
    topImagePos = $(".workListItem").offset().top,
    workListItem = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent(),
    workList = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent(),
    idElement = workListItem.attr("id"),
    imageHeight = $(workListItem).find(".workBlockImageSub").height(),
    imageWidth = $(workListItem).find(".workBlockImageSub").width(),
    arrayListElementHeight;
  thisPrec = this;
  var totalHeight = 0,
    tl = gsap.timeline(),
    cycle = 0,
    topTotalHeight = 0,
    centerImageLeft = 0,
    centerImageTop = 0,
    scrollTop = 0;
  centerImageLeft = imageWidth / 2;
  centerImageTop = imageHeight / 2;
  arrayListElementHeight = $(arrayListElement[0]).height();
  scrollTop = $(window).scrollTop();
  while (idElement !== $(arrayListElement[cycle]).attr("id")) {
    totalHeight += $(arrayListElement[cycle]).height();
    cycle++;
  }
  topTotalHeight = totalHeight + topImagePos;
  console.log(topTotalHeight, totalHeight, topImagePos, arrayListElementHeight);
  tl.to(
    ".workBlockTitle",
    { duration: 0.5, css: { autoAlpha: 0 }, blur: 1 },
    0
  );
  tl.to("footer", { duration: 0.5, css: { autoAlpha: 0 }, blur: 1 }, 0);
  workListItem.css({ top: totalHeight + "px" });
  workList.css({
    height: arrayListElementHeight * 4 + totalHeight + "px",
  });

  for (let i = 0; i < arrayListElement.length; i++) {
    if ($(arrayListElement[i]).attr("id") !== idElement) {
      tl.to(arrayListElement[i], { duration: 1, opacity: 0 }, 0);
      $(arrayListElement[i]).remove();
    }
  }

  halfWindowHeight =
    $(window).height() / 2 - topTotalHeight - imageHeight + scrollTop;
  halfWindowWidth = $(window).width() / 2 - leftImagePos - centerImageLeft;
  console.log(halfWindowHeight);
  tl.to(
    workBlockImageSub,
    {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
    },
    "startAnimation"
  );
  tl.to(
    this,
    {
      duration: 1,
      ease: "power3.in",
      css: {
        x: halfWindowWidth,
        y: halfWindowHeight,
        transformOrigin: "center center",
        scale: 1.5,
        zIndex: 1,
      },
    },
    "startAnimation"
  );
});
