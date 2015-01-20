"use strict"

angular.module('myPortfolio', [
    'ngRoute',
    'ngAnimate',
    'myPortfolio.homeView',
    'myPortfolio.aboutView',
    'myPortfolio.projectView'
])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/homeView'
            });
}]);

//    .config(function ($routeProvider) {
//        $routeProvider
//            .when('/', {
//                templateUrl: 'app/homeView/homeView.html',
//                controller: 'HomeController'
//            })
//            .when('/about', {
//                templateUrl: 'app/aboutView/aboutView.html',
//                controller: 'PortfolioController'
//            })
//    })
