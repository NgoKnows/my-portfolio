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
        //name, desc, link, technology
        $scope.projectList = projectList;
        $scope.techImages = ["../../img/logos/android.svg", "../../img/logos/java.svg", "../../img/logos/python.svg", "../../img/logos/html.svg", "../../img/logos/javascript.svg", "../../img/logos/css.svg", "../../img/logos/angular.svg"]
        $scope.left = '/about';
        $scope.right = '/';
        $scope.getTech = function (index) {
            return $scope.techImages[index - 1];
        }
        $scope.slide = function (direction) {
            if (direction === 'left' && $scope.left) {
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
        $scope.$on('$viewContentLoaded', function () {
            setTimeout(function () {
                $("#projectMain").focus();
                $(this).scrollTop(0);
            }, 5);
        });
    });
