"use strict"
//var projectnames = ["Everything Sports", "NBA Analysis and Web Crawler", "My Portfolio"]
//var gitlink = ["https://github.com/NgoKnows/Everything-Sports","https://github.com/NgoKnows/NBA-Analysis", "https://github.com/NgoKnows/my-portfolio"]
//var description = ["Hda", "djafsd", "dafjsfi"];
//var a = {a: {name: "Everything Sports", description: "A application that provides users tools to help them succeed in fantasy basketball.", img: "..}, b: {name: "Everything Sports", description: "A application that provides users tools to help them succeed in fantasy basketball."}
//}
//var technologiesUsed = []
angular.module('myPortfolio.projectView', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/project', {
                templateUrl: 'app/projectView/projectView.html',
                controller: 'ProjectController'
            });
}])
    .controller('ProjectController', function ($scope, $location) {
        $scope.left = '/about';
        $scope.right = '/';
        $scope.slide = function (direction) {
            if (direction === 'left' && $scope.left) {
                console.log(direction);
                $location.path($scope.left)
            } else if (direction === 'right' && $scope.right) {
                console.log(direction);
                $location.path($scope.right);
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
            console.log('did it work?');
            setTimeout(function () {
                $("#projectMain").focus();
            }, 10);
        });
    });
