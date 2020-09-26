
$(document).ready(function ($) {
    var finish = [false,false,false,false];
    function animateElements() {
        $('.counter-count').each(function (index) {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).attr('data-number');
            var increment = 0
            if (elementPos < topOfWindow + $(window).height()) {
                if(finish[index] === false){
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function () {
                            if ( increment < percent && finish[index] === false) {
                                increment++;
                                $(this).text(increment);
                                if (increment==percent){
                                    finish[index] = true;
                                }
                            }
                        }
                    })
                }

            }
        })
    }

    ScrollTrigger.create({
        trigger: "#containerCounter",
        start: "top bottom",
        end: 'bottom bottom',
        markers: false,
        pin: false,
        onUpdate: self => {
            console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
                animateElements()
        }
    })





    function trackLocation(e) {
        var rect = videoContainer.getBoundingClientRect(),
            position = ((e.pageX - rect.left) / videoContainer.offsetWidth) * 100;
        if (position <= 100) {
            videoClipper.style.width = position + "%";
            clippedVideo.style.width = ((100 / position) * 100) + "%";
            clippedVideo.style.zIndex = 3;
        }
    }

    var videoContainer = document.getElementById("video-compare-container"),
        videoClipper = document.getElementById("video-clipper"),
        clippedVideo = videoClipper.getElementsByTagName("video")[0];
    videoContainer.addEventListener("mousemove", trackLocation, false);
    videoContainer.addEventListener("touchstart", trackLocation, false);
    videoContainer.addEventListener("touchmove", trackLocation, false);
})