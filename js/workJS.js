$(document).ready(function ($) {
    var inner = $('.inner-inner');
    console.log(inner)


    inner.click(function (e) {
        var image = $(this).find('img')
        var rect = this.getBoundingClientRect();

        var tl = gsap.timeline();
        console.log(rect.left);
        var imageWidth = image.width()
        var imageHeight = image.height()
        var imagePosFromLeft = image.position().left;
        var imagePosFromTop = image.position().top;

        tl.add(function () {
            $('#encima').removeClass('hide');
            $('#encima').css('-webkit-animation','mask-playzero 2s steps(29)');
            setTimeout(
                function()
                {
                    //do something special
                    $('#fondo').addClass('hide')
                    tl.to('#encima',6,{css:{opacity: 0}})
                    setTimeout(function () {
                        $('#encima').addClass('hide')
                    },1800)
                }, 1800);


        })
    })
})



