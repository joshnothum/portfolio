var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    console.log('myApp -- config');
    $routeProvider
        .when('/index', {
            templateUrl: 'index.html',
            controller: 'IndexController as ic',
        })
        
        .otherwise({
            redirectTo: 'index'
        });
});