$(document).ready(function () {
  var tl = gsap.timeline();
  $("#video1").on("mouseenter", function () {
    tl.to($("#video-clipper"), { duration: 0.5, width: "75%" });
    $(".makuda-home-link--works.is-loaded .makuda-home-link ").addClass(
      "is-hover"
    );
  });
  $("#video1").on("mouseleave", function () {
    $(".makuda-home-link--works.is-loaded .makuda-home-link ").removeClass(
      "is-hover"
    );
  });

  $("#video2").on("mouseenter", function () {
    tl.to($("#video-clipper"), { duration: 0.5, width: "25%" });

    $(".makuda-home-link--contacts.is-loaded .makuda-home-link").addClass(
      "is-hover"
    );
  });
  $("#video2").on("mouseleave", function () {
    $(".makuda-home-link--contacts.is-loaded .makuda-home-link").removeClass(
      "is-hover"
    );
  });

  tl.fromTo(
    $(".makuda-home-link--contacts.is-loaded span:first-child "),
    {
      duration: 1,
      x: 500,
    },
    { duration: 1, x: 50 },
    0
  );
  tl.fromTo(
    $(".makuda-home-link--contacts.is-loaded span:last-child"),
    {
      duration: 1,
      x: -500,
    },
    { duration: 1, x: 0 },
    0
  );
  tl.fromTo(
    $(".makuda-home-link--works.is-loaded span:first-child "),
    {
      duration: 1,
      x: 500,
    },
    { duration: 1, x: 50 },
    0
  );
  tl.fromTo(
    $(".makuda-home-link--works.is-loaded span:last-child"),
    {
      duration: 1,
      x: -500,
    },
    { duration: 1, x: 0 },
    0
  );
});
