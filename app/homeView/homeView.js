"use strict"
angular.module('myPortfolio.homeView', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/homeView', {
                templateUrl: 'app/homeView/homeView.html',
                controller: 'HomeController'
            });
}])
    .controller('HomeController', function ($scope) {});

angular.element(document).ready(function () {
    setTimeout(function () {
        $('#hi').fadeIn(1200);
    }, 800);
});
