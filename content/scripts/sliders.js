var screensSlider = tns({
    container: '.screens-slider',
    items: 4,
    slideBy: '1',
    loop: true,
    arrowKeys: true,
    mouseDrag: true,
    edgePadding: 27.2,
    gutter: 30,
    width: 100,
    speed: 500,
});

var mediaSlider = tns({
    container: '.media-slider',
    items: 4,
    slideBy: '1',
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 10000,
    loop: true,
    arrowKeys: true,
    mouseDrag: true,
    edgePadding: 27.2,
    gutter: 30,
    width: 100,
    speed: 500
});
