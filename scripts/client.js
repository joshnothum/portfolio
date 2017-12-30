var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
$locationProvider.hashPrefix('');

console.log('we are configged');

$routeProvider
    .when('/home', {
        templateUrl: '/views/templates/home.html',
        controller: 'HomeController as hc',
    })
    .when('/6ixes', {
        templateUrl: '/views/templates/6ixes.html',
        controller: 'SixController as sc'
    });

});//end of config