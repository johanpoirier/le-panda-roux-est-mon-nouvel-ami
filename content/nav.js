(function () {
    var sections, indexSection = 0, currentSection,
        main = window.document.querySelector("main");

    var changeSlide = function () {
        main.style.transform = "translateY(-" + (indexSection * window.document.body.offsetHeight) + "px)";
        window.history.pushState({ topic: sections[indexSection].id }, null, "#!" + sections[indexSection].id);
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
        var hashReg = /#\!(.*)$/,
            topicId = hashReg.exec(window.location.href);

        sections = document.querySelectorAll("section");
        key('left, esc', prevSlide);
        key('right, space, enter', nextSlide);

        if (topicId) {
            currentSection = topicId[1];
            for (var i = 0; i < sections.length; i++) {
                if (sections[i].id === currentSection) {
                    indexSection = i;
                    changeSlide();
                    break;
                }
            }
        }
    };

    startApp();
}).call(this);