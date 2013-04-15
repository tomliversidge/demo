define(function () {
    "use strict";
    return {
        resizeText: function (el) {
            el.setAttribute("style", "font-size:" + this.getWidth() + "px; top:" + this.getHeight() + "px;");
        },
        getWidth: function () {
            return (window.innerWidth || document.documentElement.clientWidth) / 3.5;
        },
        getHeight: function () {
            return (window.innerHeight || document.documentElement.clientHeight) / 6.5;
        }
    };
});
