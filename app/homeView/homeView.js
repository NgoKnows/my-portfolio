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
        $scope.left = null;
        $scope.right = '/about';
        $scope.slide = function (direction) {
            if (direction === 'left' && $scope.left) {
                console.log(direction);
                console.log($scope.left);
                $location.path($scope.left)
            } else if (direction === 'right' && $scope.right) {
                $location.path($scope.right);
            }
        }
        $scope.keyPress = function (event) {
            if (event.keyCode == 37) {
                $scope.slide('left');
            } else if (event.keyCode == 39) {
                $scope.slide('right');
            }

        };
        $scope.$on('$viewContentLoaded', function () {
            console.log('hi');
            setTimeout(function () {
                //$("#rightarrow").addClass('animated pulse');
                $("#homeMain").focus();
            }, 1);
            setTimeout(function () {
                $('#hi').fadeIn(1200);
                console.log("what?");
            }, 800);
            $('.button-collapse').sideNav({
                menuWidth: 200, // Default is 240
                edge: 'left', // Choose the horizontal origin
                closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
            });
        });
    });
