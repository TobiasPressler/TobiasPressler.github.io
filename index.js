document.addEventListener("DOMContentLoaded", function () {
    const instance = new Typewriter('#typewriteText', {
        strings: ['Full Stack Developer', 'Flutter App Developer', 'NodeJS Developer'],
        autoStart: true,
        loop: true,
    });


    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        anchors: ['section1', 'section2', 'section3', 'section4']
    });

    VANTA.NET({
        el: "#one",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x33a7c0,
        backgroundColor: 0x221b1b,
        points: 14.00,
        maxDistance: 24.00,
        spacing: 18.00
    })



});