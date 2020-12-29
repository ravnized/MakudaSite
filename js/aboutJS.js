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
