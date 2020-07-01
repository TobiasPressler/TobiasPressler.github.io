document.addEventListener("DOMContentLoaded", function () {
    const instance = new Typewriter('#typewriteText', {
        strings: ['Full Stack Developer', 'Flutter App Developer', 'NodeJS Developer'],
        autoStart: true,
        loop: true,
    });


    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true
    });

    VANTA.NET({
        el: "#one",
        mouseControls: true,
        touchControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xf5f5f5,
        backgroundColor: 0x13186b
    })


});