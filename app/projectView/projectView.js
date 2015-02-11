"use strict"
angular.module('myPortfolio.projectView', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/project', {
                templateUrl: 'app/projectView/projectView.html',
                controller: 'ProjectController'
            });
}])
    .controller('ProjectController', function ($scope, $location) {
        //name, desc, link, technology
        $scope.projectList = projectList;
        $scope.techImages = ["../../img/logos/android.svg", "../../img/logos/java.svg", "../../img/logos/python.svg", "../../img/logos/html.svg", "../../img/logos/javascript.svg", "../../img/logos/css.svg", "../../img/logos/angular.svg", "../../img/logos/d3.svg", "../../img/logos/google-maps.svg"];
        $scope.techLabels =
["Android", "Java", "Python", "HTML5", "JavaScript", "CSS3", "AngularJS", "D3.js", "Google Maps"];
        $scope.projectLinks = ["#projectDesc1", "#projectDesc2", "#projectDesc3", "#projectDesc4"];
        $scope.left = '/about';
        $scope.right = '/';
        $scope.getTech = function (index) {
            return $scope.techImages[index - 1];
        }
        $scope.getLabel = function (index) {
            return $scope.techLabels[index - 1];
        }
        $scope.slide = function (direction) {
            if (direction === 'left' && $scope.left) {
                $location.path($scope.left)
            } else if (direction === 'right' && $scope.right) {
                //$location.path($scope.right);
            }
        }
        $scope.keyPress = function (event) {
            if (event.keyCode == 37) {
                $scope.slide('left');
            } else if (event.keyCode == 39) {
                $scope.slide('right');
            }
        }
        $scope.showOverlay = function (index, show) {
            var img = "#img" + index;
            var button = "#button" + index;
            if (show) {
                console.log('1');
                $(button).addClass("shown");
                $(img).addClass("hover");
            } else {
                console.log('2');
                $(button).removeClass("shown");
                $(img).removeClass("hover");
            }
        }
        $scope.showLabel = function (parentIndex, index, show) {
            var label = "#label" + parentIndex + index;
            console.log(label);
            if (show) {
                $(label).addClass("shown");

            } else {
                $(label).removeClass("shown");
            }
        }
        $scope.$on('$viewContentLoaded', function () {
            console.log('linked up');
            setTimeout(function () {
                $("#projectMain").focus();
                $(this).scrollTop(0);
            }, 5);
        });
    });
