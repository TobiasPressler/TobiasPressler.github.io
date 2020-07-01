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


});