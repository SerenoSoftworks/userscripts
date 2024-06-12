// ==UserScript==
// @name         Fix gpt4free aspect ratio
// @version      1.0
// @description  Fix an Aspect Ratio error
// @author       Sereno
// @match        https://gpt4free.sereno.one/*
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
