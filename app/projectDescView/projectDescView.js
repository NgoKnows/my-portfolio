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
            $routeProvider.when('/projectDesc4', {
                templateUrl: 'app/projectDescView/projectDescView4.html',
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
                $location.path('/project');
            }
        }
        $scope.keyPress = function (event, left, right) {
            if (event.keyCode === 37 && left !== '') {
                $location.path(left);
            } else if (event.keyCode === 39 && right !== '') {
                $location.path(right);
            }
        }

        $scope.$on('$viewContentLoaded', function () {
            setTimeout(function () {
                $("projDescMain").focus();
            }, 20);
            setTimeout(function () {
                $(this).scrollTop(0);
            }, 5);
        });
    });
