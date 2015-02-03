"use strict"
angular.module('myPortfolio.projectDescView', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/projectDesc1', {
                templateUrl: 'app/projectDescView/projectDescView.html',
                controller: 'ProjectDescController'
            });
            $routeProvider.when('/projectDesc2', {
                templateUrl: 'app/projectDescView/projectDescView2.html',
                controller: 'ProjectDescController'
            });
            $routeProvider.when('/projectDesc3', {
                templateUrl: 'app/projectDescView/projectDescView3.html',
                controller: 'ProjectDescController'
            });
}])
    .controller('ProjectDescController', function ($scope, $location) {
        $scope.left = '/';
        $scope.right = '/projects';
        $scope.slide = function (direction) {
            if (direction === 'left' && $scope.left) {
                $location.path($scope.left)
            } else if (direction === 'right' && $scope.right) {
                console.log(direction);
                $location.path('/project');
            }
        }
        $scope.keyPress = function (event) {
            if (event.keyCode == 37) {
                $scope.slide('left');
            } else if (event.keyCode == 39) {
                $scope.slide('right');
            }
        }
        $scope.$on('$viewContentLoaded', function () {
            setTimeout(function () {
                $("#aboutMain").focus();
            }, 5);
            setTimeout(function () {
                $(this).scrollTop(0);
            }, 5);
        });
    });
