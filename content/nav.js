(function () {
    var sections, indexSection = 0,
        main = window.document.querySelector("main");

    var changeSlide = function () {
        main.style.transform = "translateY(-" + (indexSection * window.document.body.offsetHeight) + "px)";
        window.history.pushState({ topic: sections[indexSection].id }, null, "#" + sections[indexSection].id);
    };

    var prevSlide = function () {
        if (indexSection > 0) {
            indexSection--;
        }
        changeSlide();
    };

    var nextSlide = function () {
        if (indexSection < sections.length - 1) {
            indexSection++;
        }
        changeSlide();
    };

    var startApp = function () {
        sections = document.querySelectorAll("section");
        key('left, esc', prevSlide);
        key('right, space, enter', nextSlide);
    };

    startApp();
}).call(this);