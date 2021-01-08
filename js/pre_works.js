function video1Enter() {
  var tl = gsap.timeline();
  tl.to(
    $("#video-clipper"),
    { duration: 0.5, width: "75%" },
    "filterAnimation"
  );
  tl.to(
    $("#video1"),
    {
      duration: 1,
      css: { filter: "grayscale(0%)", "-webkit-filter": "grayscale(0%)" },
    },
    "filterAnimation"
  );

  $(".makuda-home-link--works.is-loaded .makuda-home-link ").addClass(
    "is-hover"
  );
}

function video1Leave() {
  var tl = gsap.timeline();
  $(".makuda-home-link--works.is-loaded .makuda-home-link ").removeClass(
    "is-hover"
  );
  tl.to(
    $("#video1"),
    {
      duration: 0.5,
      css: { filter: "grayscale(100%)", "-webkit-filter": "grayscale(100%)" },
    },
    "filterAnimation"
  );
  tl.to(
    $("#video-clipper"),
    { duration: 0.5, width: "50%" },
    "filterAnimation"
  );
}

function video2Enter() {
  var tl = gsap.timeline();
  tl.to(
    $("#video2"),
    {
      duration: 1,
      css: { filter: "grayscale(0%)", "-webkit-filter": "grayscale(0%)" },
    },
    "filterAnimation"
  );
  tl.to(
    $("#video-clipper"),
    { duration: 0.5, width: "25%" },
    "filterAnimation"
  );
  $(".makuda-home-link--contacts.is-loaded .makuda-home-link").addClass(
    "is-hover"
  );
}

function video2Leave() {
  var tl = gsap.timeline();
  $(".makuda-home-link--contacts.is-loaded .makuda-home-link").removeClass(
    "is-hover"
  );
  tl.to(
    $("#video2"),
    {
      duration: 1,
      css: { filter: "grayscale(100%)", "-webkit-filter": "grayscale(100%)" },
    },
    "filterAnimation"
  );
  tl.to(
    $("#video-clipper"),
    { duration: 0.5, width: "50%" },
    "filterAnimation"
  );
}

$(document).ready(function () {
  $("#video1").on("mouseenter", function () {
    video1Enter();
  });
  $(".makuda-home-link--works").on("mouseenter", function () {
    video1Enter();
  });

  $("#video1").on("mouseleave", function () {
    video1Leave();
  });
  $(".makuda-home-link--works").on("mouseleave", function () {
    video1Leave();
  });
  $("#video2").on("mouseenter", function () {
    video2Enter();
  });
  $(".makuda-home-link--contacts").on("mouseenter", function () {
    video2Enter();
  });

  $("#video2").on("mouseleave", function () {
    video2Leave();
  });

  $(".makuda-home-link--contacts").on("mouseleave", function () {
    video2Leave();
  });

  var tlStart = gsap.timeline();
  tlStart.fromTo(
    $("#video-compare-container"),
    {
      duration: 0.5,
      css: {
        opacity: 0,
      },
    },
    { duration: 0.5, css: { opacity: 1 } },
    0
  );
  tlStart.fromTo(
    $(".makuda-home-link--contacts.is-loaded span:first-child "),
    {
      duration: 1,
      x: -1000,
    },
    { duration: 1, x: -100 },
    0
  );
  tlStart.fromTo(
    $(".makuda-home-link--contacts.is-loaded span:last-child"),
    {
      duration: 1,
      x: 1000,
    },
    { duration: 1, x: 100 },
    0
  );
  tlStart.fromTo(
    $(".makuda-home-link--works.is-loaded span:first-child "),
    {
      duration: 1,
      x: 1000,
    },
    { duration: 1, x: -100 },
    0
  );
  tlStart.fromTo(
    $(".makuda-home-link--works.is-loaded span:last-child"),
    {
      duration: 1,
      x: -1000,
    },
    { duration: 1, x: 100 },
    0
  );
});
