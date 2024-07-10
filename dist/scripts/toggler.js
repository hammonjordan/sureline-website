"use strict";
var hamburger = document.getElementById('hnd04');
var hamburgerComponents = document.querySelectorAll('.hhline'); // Corrected selector
var sliderNav = document.getElementById('sliderNavbar');
var mainDiv = document.getElementById('main');
if (hamburger && sliderNav && mainDiv) {
    // Event listener for hamburger click
    hamburger.addEventListener("click", function () {
        // Toggle 'active' class for each component
        hamburgerComponents.forEach(function (component) {
            component.classList.toggle('active');
        });
        // Update anyActive after toggle
        var anyActive = Array.from(hamburgerComponents).some(function (component) { return component.classList.contains('active'); });
        // Update sliderNav class
        if (anyActive) {
            sliderNav.classList.replace('sliderInActive', 'sliderActive');
        }
        else {
            sliderNav.classList.replace('sliderActive', 'sliderInActive');
        }
    });
    // Event listener for main div click
    mainDiv.addEventListener("click", function () {
        // Check if sliderNav has 'sliderActive' class
        var anyActive = Array.from(hamburgerComponents).some(function (component) { return component.classList.contains('active'); });
        if (anyActive) {
            hamburgerComponents.forEach(function (component) {
                component.classList.remove('active');
            });
            sliderNav.classList.replace('sliderActive', 'sliderInActive');
        }
    });
}
else {
    console.error("Couldn't find components.");
}
