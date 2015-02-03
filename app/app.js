"use strict"

angular.module('myPortfolio', [
    'ngRoute',
    'ngAnimate',
    'myPortfolio.homeView',
    'myPortfolio.aboutView',
    'myPortfolio.projectView',
    'myPortfolio.projectDescView'
])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/homeView'
            });
}]);
