let myApp = angular.module('myApp', []);

myApp.controller('HomeController',['$location', function () {
    let home = this;
    home.message = 'Hello!';
console.log('loaded');


home.blogDirect = function(){
    window.location.href = "https://www.joshnothum.com";
   };

   home.soloDirect = function () {
       window.location.href = "https://glacial-sierra-30356.herokuapp.com/#/home";
   };
}]);