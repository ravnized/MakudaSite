$.fn.isOnScreen = function () {
  var viewport = {};
  viewport.top = $(window).scrollTop();
  viewport.bottom = viewport.top + $(window).height();
  var bounds = {};
  bounds.top = this.offset().top;
  bounds.bottom = bounds.top + this.outerHeight();
  return bounds.top <= viewport.bottom && bounds.bottom >= viewport.top;
};
$(window).scrollTop(1);
document.addEventListener("scroll", function (e) {
  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    if ($(this).isOnScreen()) {
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 3000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            console.log("aaa");
          },
        }
      );
    }
  });
});

$(document).ready(function() {
  var peopleAnimation = [false, false, false, false, false, false];

  resizeTeam(false);

  $(window).on("scroll resize", function() {
    resizeTeam();
  });

  $(".person-container").hover(
    function() { //MouseEnter
      $(this).find("img").css({"transform": "scale(1.1)"});
      animateFadeIn($(this).find(".person-links"), 1000, AnimationDirection.bottom);
      animateFadeIn($(this).find(".person-infos"), 1000, AnimationDirection.top);
    },
    function() { //MouseLeave
      $(this).find("img").css({"transform": "scale(1.0)"});
      animateFadeOut($(this).find(".person-links"), 1000, AnimationDirection.top, {top: 15, bottom: 0});
      animateFadeOut($(this).find(".person-infos"), 1000, AnimationDirection.bottom, {top: 0, bottom: 15});
    }
  )

  function resizeTeam(animation = true)
  {
    if (animation == false)
      $(".person-container").css({"transition": "none"});
    else
      $(".person-container").css({"transition": "all 0.8s ease"});

    const originalSize1 = {width: 800, height: 800};
    const originalSize2 = {width: 600, height: 800};

    let newWidth = $("#team-container").width() / 3.0;
    let newSize1 = {width: newWidth, height: newWidth * originalSize1.height / originalSize1.width};
    let newSize2 = {width: newWidth, height: newWidth * originalSize2.height / originalSize2.width};

    $("#team-container").css({"height": (newSize1.height + newSize2.height - 125) + "px"});

    $(".person-container:eq(0), .person-container:eq(2), .person-container:eq(4)").css({
      "width": newSize1.width + "px",
      "height": newSize1.height + "px"
    });
    $(".person-container:eq(1), .person-container:eq(3), .person-container:eq(5)").css({
      "width": newSize2.width + "px",
      "height": newSize2.height + "px"
    });

    $(".person-container:eq(1), .person-container:eq(4)").css({"left": newWidth + "px"});
    $(".person-container:eq(2), .person-container:eq(5)").css({"left": (newWidth * 2) + "px"});
    $(".person-container:eq(3), .person-container:eq(5)").css({"top": newSize1.height + "px"});
    $(".person-container:eq(4)").css({"top": newSize2.height + "px"});
    
    $(".person-container").each(function(index, element) {
      if (!peopleAnimation[index] && isScrolledIntoView($(element), false, 10))
      {
        peopleAnimation[index] = true;
        animateFadeIn($(element), 200, AnimationDirection.top);
      }
    });
  }
});
