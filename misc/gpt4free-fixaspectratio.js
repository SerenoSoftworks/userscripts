// ==UserScript==
// @name         Fix gpt4free aspect ratio
// @version      1.0
// @description  Fix an Aspect Ratio error
// @author       Sereno
// @match        http://networks-thu.gl.at.ply.gg:52078/*
// @match        http://192.168.1.192:8080/*
// @match        http://100.64.0.2:8080/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.2
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Select the body element
    var bodyElement = document.querySelector('body');
    // Check if the body element exists
    if (bodyElement) {
        // Remove max-width and margin properties
        bodyElement.style.maxWidth = 'none';
        bodyElement.style.margin = '0';
    }
})();
