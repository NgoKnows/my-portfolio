"use strict"
angular.module('myPortfolio.homeView', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/homeView', {
                templateUrl: 'app/homeView/homeView.html',
                controller: 'HomeController'
            });
}])
    .controller('HomeController', function ($scope, $location) {

        $scope.$on('$viewContentLoaded', function () {
            $('#homemenu').addClass('active');
            setTimeout(function () {
                $(this).scrollTop(0);
            }, 10);
            setTimeout(function () {
                $('#hi').fadeIn(1200);
            }, 500);
//            $('.button-collapse').sideNav({
//                menuWidth: 300, // Default is 240
//                edge: 'left', // Choose the horizontal origin
//            });
        });
});
