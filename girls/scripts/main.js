/*jslint browser: true*/
/*global require */

require(['color'], function (color) {
    "use strict";
    
    var girlsDiv,
        currentWindow,
        resize,
        randomize;
    
    // get the dom element
    girlsDiv = document.getElementById("girlsText");

    // simple helper object for window size
    currentWindow = {
        getWidth: function () {
            return window.innerWidth || document.documentElement.clientWidth;
        },
        getHeight: function () {
            return window.innerHeight || document.documentElement.clientHeight;
        }
    };

    // define function to resize text
    resize = function () {
        girlsDiv.setAttribute("style", "font-size:" + currentWindow.getWidth() / 3.5 + "px; top:" + currentWindow.getHeight() / 6.5 + "px;");
    };
    
    // define function to randomize background color and text color
    randomize = function () {
        document.body.style.backgroundColor = color.generateRandomColor();
        girlsDiv.style.color = color.generateRandomColor();
    };
    
    // apply on page load
    resize();
    randomize();
    
    // setup events
    window.onresize = function () {
        resize();
    };

    // setup timer
    setInterval(randomize, 2000);
});