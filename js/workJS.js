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
    { duration: 1, css: { y: 4.4 + "rem" }, ease: "power4.in" },
    0
  );
  tlFirst.to(
    ".mainSection",
    { duration: 1, css: { autoAlpha: 1 }, ease: "power2.in" },
    0
  );
});
$(workBlockImageSub).mousemove(function (e) {
  var timeline = gsap.timeline();
  var offset = $(this).parent().offset();
  var relativeX = e.pageX - offset.left;
  var relativeY = e.pageY - offset.top;
  var cX = $(this).width() / 2;
  var cY = $(this).height() / 2;
  var cxRelative = (cX - relativeX) / 15;
  var cyRelative = (cY - relativeY) / 15;

  if (insideAWork === false) {
    timeline.to($(this).parent(), {
      duration: 0.2,
      rotateX: cyRelative,
      rotateY: cxRelative,
    });
    /*
        timeline.to($(this).parent().parent().find('.workBlockTitle'), {
            duration: 0.2,
            rotateX: cyRelative,
            rotateY: cxRelative,
        }, '-=0.2')
        */
  }
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
    topImagePos = positionImageVideo.top,
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
    imageHeight = imageVideo.height(),
    imageWidth = imageVideo.width(),
    containerTitle = workListItem.find(".textContainer"),
    arrayListElementHeight;
  thisPrec = this;
  var totalHeight = 0,
    tl = gsap.timeline(),
    timeline = gsap.timeline(),
    cycle = 0,
    topTotalHeight = 0,
    centerImageLeft = 0,
    centerImageTop = 0,
    scrollTop = 0,
    heightContainer = containerTitle.height();
  insideAWork = true;
  timeline.to($(this).parent(), { duration: 1, rotateX: 0, rotateY: 0 });

  scrollTop = $(window).scrollTop();
  centerImageLeft = imageWidth / 2;
  centerImageTop = imageHeight / 2;
  arrayListElementHeight = $(arrayListElement[0]).height();

  while (idElement !== $(arrayListElement[cycle]).attr("id")) {
    totalHeight += $(arrayListElement[cycle]).height();
    cycle++;
  }
  topTotalHeight = totalHeight + topImagePos;

  //tl.to(textVideo, { duration: 0.5, css: { autoAlpha: 0 }, blur: 10 }, 0);
  tl.to(
    ".descriptionVideo",
    { duration: 0.5, css: { autoAlpha: 0 }, blur: 10 },
    0
  );

  for (let i = 0; i < arrayListElement.length; i++) {
    if (idElement !== $(arrayListElement[i]).attr("id")) {
      tl.to(
        arrayListElement[i],
        { duration: 0.5, css: { autoAlpha: 0 }, ease: "power2.in" },
        0
      );
      $(arrayListElement[i]).remove();
    }
  }

  workListItem.css({ top: totalHeight + "px" });
  $(".descVideo").css({ display: "block" });
  containerTitle.css({ top: arrayListElementHeight + "px" });

  workList.css({
    height: (arrayListElementHeight + heightContainer) * 2 + totalHeight + "px",
  });
  halfWindowHeight =
    $(window).height() / 2 - topTotalHeight - centerImageTop + scrollTop;
  halfWindowWidth = $(window).width() / 2 - leftImagePos - centerImageLeft;
  console.log(halfWindowHeight);

  //tl.set(containerTitle, { css: { x: halfWindowWidth - leftImagePos } });
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
  tl.to(
    containerTitle,
    {
      delay: 0.2,
      duration: 1,
      ease: "power3.in",
      onComplete: function () {
        containerTitle.removeClass("hide");
      },
    },
    "startAnimation"
  );

  tl.to(
    ".mainSection",
    { duration: 0.5, delay: 2, css: { y: 0 } },
    "startAnimation"
  );
  tl.to(
    workListItem,
    { duration: 0.5, delay: 2, css: { top: 0 } },
    "startAnimation"
  );
  tl.to(
    window,
    { duration: 0.5, delay: 2, scrollTo: { x: 0, y: 0 } },
    "startAnimation"
  );
  tl.to(this, { duration: 0.5, delay: 2, y: topImagePos }, "startAnimation");

  tl.to(
    workListItem,
    {
      duration: 0.5,
      delay: 2,
      css: { height: arrayListElementHeight + heightContainer },
    },
    "startAnimation"
  );
  tl.to(
    workList,
    {
      duration: 0.5,
      delay: 2,
      css: { height: arrayListElementHeight + heightContainer + 500 },
    },
    "startAnimation"
  );
  //tl.to(workBlockImageSub,{duration:0.5,delay:2,css:{top:-scrollTop}},'startAnimation')
  //tl.to(workListItem,{duration:0.5,css:{top:}})
  tl.to(".tVideo", { x: 0, autoAlpha: 1 }, "animationStart");
  tl.to(".subVideo", { x: 0, autoAlpha: 1 }, "animationStart");
  tl.to(
    ".descVideo",
    {
      y: 0,
      autoAlpha: 1,
      blur: 0,
    },
    "animationStart"
  );
});
