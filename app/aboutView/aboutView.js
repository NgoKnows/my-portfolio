"use strict"
angular.module('myPortfolio.aboutView', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/about', {
                templateUrl: 'app/aboutView/aboutView.html',
                controller: 'AboutController'
            });
}])
    .controller('AboutController', function ($scope, $location) {
        $scope.$on('$viewContentLoaded', function () {
            setTimeout(function () {
                $("#aboutMain").focus();
            }, 5);
            setTimeout(function () {
                $(this).scrollTop(0);
            }, 5);
            $('.parallax').parallax();
        });
    });
