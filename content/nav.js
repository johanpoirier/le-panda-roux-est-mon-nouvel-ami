(function () {
    var sections, currentSection, indexSection = 0,
        main = window.document.querySelector("main");

    var changeSlide = function () {
        main.style.transform = "translateY(-" + (indexSection * window.document.body.offsetHeight) + "px)";
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
        currentSection = sections[indexSection];
        key('left, esc', prevSlide);
        key('right, space, enter', nextSlide);
    };

    startApp();
}).call(this);