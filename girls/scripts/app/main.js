/*jslint browser: true*/
/*global require, requirejs */
requirejs.config({
    //By default load any module IDs from js/app
    baseUrl: 'scripts/app',
    //except, if the module ID starts with "lib",
    //load it from the js/lib directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        lib: '../lib'
    }
});

require(['color', 'resizer'], function (color, resizer) {
    "use strict";
    var girlsDiv,
        randomizeElements;
    // get the dom element
    girlsDiv = document.getElementById("girlsText");

    // define function to randomize background color and text color
    randomizeElements = function (bgElement, fgElement) {
        bgElement.style.backgroundColor = color.generateRandomColor();
        fgElement.style.color = color.generateRandomColor();
    };
    // apply on page load
    resizer.resizeText(girlsDiv);
    randomizeElements(document.body, girlsDiv);

    // setup events
    window.onresize = function () {
        resizer.resizeText(girlsDiv);
    };

    // setup timer
    setInterval(function () {randomizeElements(document.body, girlsDiv); }, 2000);
});