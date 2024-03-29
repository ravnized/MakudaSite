
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            var ElementCounter = $(this).find('.textInsideCircle')
            var i = 0;

            if($(window).height() > 1024){
                if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                    $(this).data('animate', true);
                    $(this).find('.circle').circleProgress({
                        startAngle: -Math.PI / 2,
                        value: percent / 100,
                        size: 120,
                        thickness: 2,
                        emptyFill: '#1d1d1d',
                        fill: {
                            color: '#f6b600'
                        }
                    }).on('circle-animation-progress', function (event, progress, stepValue) {
                        var amount = progress * percent
                        var textGenerated = ElementCounter.text(amount.toFixed(0) + '%')
                    }).stop();
                }
            }else{
                if (!animate) {
                    $(this).data('animate', true);
                    $(this).find('.circle').circleProgress({
                        startAngle: -Math.PI / 2,
                        value: percent / 100,
                        size: 120,
                        thickness: 2,
                        emptyFill: '#1d1d1d',
                        fill: {
                            color: '#f6b600'
                        }
                    }).on('circle-animation-progress', function (event, progress, stepValue) {
                        var amount = progress * percent
                        var textGenerated = ElementCounter.text(amount.toFixed(0) + '%')
                    }).stop();
                }
            }


        });
    }


