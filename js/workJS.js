var timeline;

$(".itm").click(function () {
    onItemClick(this);
});


// init animations // set click event

function createAni(item, play) {
    timeline = new TimelineMax({ paused: true, reversed: true });
    console.log('this', item)
    const self = item;
    const outer = document.querySelector(".inside-container").getBoundingClientRect();
    const el = self;
    const container = document.querySelector(`.inside-container`);
    const inner = $(el).find('.inner');
    const childOffsets = { top: el.offsetTop, left: el.offsetLeft };
    if (!el) { return false; }
    const itemBounds = el.getBoundingClientRect();
    const container_pos = container.getBoundingClientRect();
    const Ease = Back.easeInOut.config(1.2);

    console.log('container_pos: ', container_pos);
    console.log('itemBounds: ', itemBounds);


    // fix el on top of placeholder (should be 0 visual difference)
    timeline.to(el, 0, {
        bottom: itemBounds.bottom + 'px',
        height: itemBounds.height + 'px',
        left: itemBounds.left,
        top: getElPos(el).top,
        width: itemBounds.width + 'px',
        position: 'fixed',
        zIndex: 1,
        ease: Ease,
    });

    // inner animation
    timeline.to(inner, 0.5, {
        background: '#dc0038',
        height: '100%',
        ease: Ease,
        // padding: "3em",
    }, 0);


    // fullscreen
    timeline.to(el, 0.5, {
        height: window.innerHeight,
        width: container_pos.width,
        left: container_pos.left,
        padding: "2em",
        top: 0,
        // bottom: 0,
        ease: Ease,
        // onReverseComplete: function () {
        //     console.log('2 onReverseComplete')
        //     $('#placeholder').remove();
        // }
    }, 0);
    timeline.play();
    setTimeout(() => play(), 0);
}


function onItemClick(item) {
    $('.inner-inner')
    (!timeline || timeline.reversed()) ? createAni(item, () => timeline.play()) : timeline.reverse();
}



function getScrollY(item) {
    const x = (window.pageYOffset != null) ? window.pageYOffset : (document.documentElement.scrollTop != null) ?              document.documentElement.scrollTop : document.body.scrollTop;
    return x + item;
}

function getElPos(element) {
    const root = document.documentElement;
    const body = document.body;
    const rect = element.getBoundingClientRect();

    const scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
    const scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

    const clientTop = root.clientTop || body.clientTop || 0;
    const clientLeft = root.clientLeft || body.clientLeft || 0;



    return {
        top: 0,
        left: 0,
        height: rect.height,
        width: rect.width,
    };


}