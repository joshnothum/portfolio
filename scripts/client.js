let myApp = angular.module('myApp', []);

myApp.controller('HomeController',['$location', function () {
    let home = this;
    home.message = 'Hello!';
console.log('loaded');


home.blogDirect = function(){
    window.location.href = "http://www.joshnothum.com";
   };
}]);