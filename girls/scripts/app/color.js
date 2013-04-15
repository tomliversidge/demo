define(function () {
    "use strict";
    return {
        generateRandomColor: function () {
            return (function (h) {
                return '#000000'.substr(0, 7 - h.length) + h;
            }((~~(Math.random() * (1 << 24))).toString(16)));
        }
    };
});