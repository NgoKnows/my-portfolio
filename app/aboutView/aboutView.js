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
        $scope.left = '/';
        $scope.right = '/projects';
        $scope.slide = function (direction) {
            if (direction === 'left' && $scope.left) {
                console.log(direction);
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
                $("#focusAbout").focus();
            }, 1);
        });
    });
