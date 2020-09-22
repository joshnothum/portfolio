let myApp = angular.module('myApp', []);

myApp.controller('HomeController', ['$location', function () {
    let home = this;
    home.message = 'Hello!';
    console.log('loaded');


    home.blogDirect = function () {
        window.location.href = "https://www.joshnothum.dev";
    };
    home.soloDirect = function () {
        window.location.href = "https://glacial-sierra-30356.herokuapp.com/#/home";
    };

    home.groupDirect = function () {
        window.location.href = "https://github.com/AndrewResidence/andrew-residence";
    };
    home.blackDirect = function () {
        window.location.href = "https://github.com/joshnothum/black_keys_analysis";
    };
    (function() {

        'use strict';
      
        // define variables
        var items = document.querySelectorAll(".timeline li");
      
        // check if an element is in viewport
        // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
        function isElementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
      
        function callbackFunc() {
          for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
              items[i].classList.add("in-view");
            }
          }
        }
      
        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
      
      })();
}]);

