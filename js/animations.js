const AnimationDirection = {
    top: 0,
    left: 1,
    bottom: 2,
    right: 3,
};

let liveAnimations = [];

function isScrolledIntoView (element, fullyInView, offset = 0) {
    let pageTop = $(window).scrollTop();
    let pageBottom = pageTop + $(window).height();
    let elementTop = element.offset().top;
    let elementBottom = elementTop + element.height();

    if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
    } else {
        return ((elementTop + offset <= pageBottom) && (elementBottom >= pageTop));
    }
}

function stopAllAnimations()
{
    for(let i=0; i<liveAnimations.length; i++)
        $(liveAnimations[i]).stop(true);
    liveAnimations = [];
}

async function animateWithQueue (queue)
{
    return new Promise(async function(resolve) {
        for(let i=0; i<queue.length; i++)
            await animateCustom(
                queue[i][0],
                queue[i][1],
                queue[i][2],
                queue[i][3],
                queue[i][4],
                queue[i][5]
            );
        resolve(true);
    });
}

async function animateCustom(element, time, animation, easing = "linear", queue = false, step = undefined) {
    if (easing == undefined)
        easing = "linear";
    if (queue == undefined)
        queue = false;
    
    liveAnimations.push(this);

    return new Promise(resolve => {
        element.animate(animation, {
            duration: time,
            queue: queue,
            easing: easing,
            step: step,
            done: function() {
                liveAnimations.remove(this);
                resolve(true);
            }
        });
    });
}

async function animateFadeIn(element, time, direction = null, margins = {top: 0, left: 0, bottom: 0, right: 0, isPadding: false}, easing = "easeOutCubic", queue = false)
{
    if (margins.top == undefined)
        margins.top = 0;
    if (margins.left == undefined)
        margins.left = 0;
    if (margins.right == undefined)
        margins.right = 0;
    if (margins.bottom == undefined)
        margins.bottom = 0;
    if (margins.isPadding == undefined)
        margins.isPadding = false;

    let animation;

    if (margins.isPadding == true)
    {
        if (direction == null)
            animation = {
                "opacity" : "1"
            };
        else if (direction == AnimationDirection.top)
            animation = {
                "opacity" : "1",
                "padding-top" : margins.top,
                "padding-bottom" : margins.bottom
            };
        else if (direction == AnimationDirection.left)
            animation = {
                "opacity" : "1",
                "padding-left" : margins.left,
                "padding-right" : margins.right
            };
        else if (direction == AnimationDirection.bottom)
            animation = {
                "opacity" : "1",
                "padding-top" : margins.top,
                "padding-bottom" : margins.bottom
            };
        else if (direction == AnimationDirection.right)
            animation = {
                "opacity" : "1",
                "padding-left" : margins.left,
                "padding-right" : margins.right
            };
        else
            return;
    }
    else
    {
        if (direction == null)
            animation = {
                "opacity" : "1"
            };
        else if (direction == AnimationDirection.top)
            animation = {
                "opacity" : "1",
                "margin-top" : margins.top,
                "margin-bottom" : margins.bottom
            };
        else if (direction == AnimationDirection.left)
            animation = {
                "opacity" : "1",
                "margin-left" : margins.left,
                "margin-right" : margins.right
            };
        else if (direction == AnimationDirection.bottom)
            animation = {
                "opacity" : "1",
                "margin-top" : margins.top,
                "margin-bottom" : margins.bottom
            };
        else if (direction == AnimationDirection.right)
            animation = {
                "opacity" : "1",
                "margin-left" : margins.left,
                "margin-right" : margins.right
            };
        else
            return;
    }


    return new Promise(function(resolve) {
        let options = {
            duration: time,
            easing: easing,
            queue: queue,
            done: function() {
                resolve();
            }
        };
        
        if (direction == null)
            element.animate(animation, {
                duration: time,
                queue: queue,
                done: function() {
                    resolve();
                }
            });
        else
            element.animate(animation, options);
    });
}

function animateFadeOut(element, time, direction = null, margins = {top: 0, left: 0, bottom: 0, right: 0, isPadding: false}, easing = "easeOutCubic", queue = false)
{
    if (margins.top == undefined)
        margins.top = 600;
    if (margins.left == undefined)
        margins.left = 800;
    if (margins.right == undefined)
        margins.right = 800;
    if (margins.bottom == undefined)
        margins.bottom = 600;
    if (margins.isPadding == undefined)
        margins.isPadding = false;

    if (margins.isPadding == true)
    {
        if (direction == null)
            element.animate({"opacity" : "0"}, {
                duration: time,
                queue: queue
            });
        else if (direction == AnimationDirection.top)
            element.animate({
                "opacity" : "0",
                "padding-top" : -margins.top,
                "padding-bottom" : margins.bottom
            }, {
                duration: time,
                easing: easing,
                queue: queue
            });
        else if (direction == AnimationDirection.left)
            element.animate({
                "opacity" : "0",
                "padding-left" : -margins.left,
                "padding-right" : margins.right
            }, {
                duration: time,
                easing: easing,
                queue: queue
            });
        else if (direction == AnimationDirection.bottom)
            element.animate({
                "opacity" : "0",
                "padding-top" : margins.top,
                "padding-bottom" : -margins.bottom
            }, {
                duration: time,
                easing: easing,
                queue: queue
            });
        else if (direction == AnimationDirection.right)
            element.animate({
                "opacity" : "0",
                "padding-left" : margins.left,
                "padding-right" : -margins.right
            }, {
                duration: time,
                easing: easing,
                queue: queue
            });
    }
    else
    {
        if (direction == null)
            element.animate({"opacity" : "0"}, {
                duration: time,
                queue: queue
            });
        else if (direction == AnimationDirection.top)
            element.animate({
                "opacity" : "0",
                "margin-top" : -margins.top,
                "margin-bottom" : margins.bottom
            }, {
                duration: time,
                easing: easing,
                queue: queue
            });
        else if (direction == AnimationDirection.left)
            element.animate({
                "opacity" : "0",
                "margin-left" : -margins.left,
                "margin-right" : margins.right
            }, {
                duration: time,
                easing: easing,
                queue: queue
            });
        else if (direction == AnimationDirection.bottom)
            element.animate({
                "opacity" : "0",
                "margin-top" : margins.top,
                "margin-bottom" : -margins.bottom
            }, {
                duration: time,
                easing: easing,
                queue: queue
            });
        else if (direction == AnimationDirection.right)
            element.animate({
                "opacity" : "0",
                "margin-left" : margins.left,
                "margin-right" : -margins.right
            }, {
                duration: time,
                easing: easing,
                queue: queue
            });
    }
}

function setElementForScrollDelay(element)
{
    elementsForScrollDelay.push({element: element, offset: element.offset().top});
}

const elementsForScrollDelay = [];
var pos;

$(document).ready(function() {
    $(document).on("scroll", function() {
        elementsForScrollDelay.forEach(function (e) {
            pos = e.offset - $(window).scrollTop() - $(window).height();
            e.element.css({"top": pos + "px", "transform": "translateY(" + -pos + "px)"});
        });
    });
});

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};