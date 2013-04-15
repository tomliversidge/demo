/*jslint browser: true*/
/*global require */

require(['color', 'resizer'], function (color, resizer) {
    "use strict";
    
    var girlsDiv,
        randomize;
    
    // get the dom element
    girlsDiv = document.getElementById("girlsText");

    // define function to randomize background color and text color
    randomize = function () {
        document.body.style.backgroundColor = color.generateRandomColor();
        girlsDiv.style.color = color.generateRandomColor();
    };
    
    // apply on page load
    resizer.resizeText(girlsDiv);
    randomize();

    // setup events
    window.onresize = function () {
        resizer.resizeText(girlsDiv);
    };

    // setup timer
    setInterval(randomize, 2000);
});