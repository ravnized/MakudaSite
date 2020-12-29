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
  var tlFirst = gsap.timeline();
  tlFirst.to(
    ".mainSection",
    { duration: 1, css: { y: 0 }, ease: "power4.in" },
    0.5
  );
  tlFirst.to(
    ".mainSection",
    { duration: 1, css: { autoAlpha: 1 }, ease: "power2.in" },
    0.5
  );
  tlFirst.to($(window), { duration: 0.5, scrollTo: 0 }, 0);
});

$(workBlockImageSub).mouseleave(function (event) {
  var timeline = gsap.timeline();
  if (insideAWork === false) {
    timeline.to($(this).parent(), { duration: 1, rotateX: 0, rotateY: 0 });
    /*
            timeline.to($(this).parent().parent().find('.workBlockTitle'), {
                duration: 1,
                rotateX: 0,
                rotateY: 0,
            }, '-=1')
            */
  }
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
    ".descriptionVideo",
    { duration: 0.5, css: { autoAlpha: 0 }, blur: 1 },
    0
  );
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

  halfWindowHeight =$(window).height() /2 - topTotalHeight - imageHeight + scrollTop;
  halfWindowWidth = $(window).width() / 2 - leftImagePos - centerImageLeft;
  console.log(halfWindowHeight);
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
