"use strict"
angular.module('myPortfolio.projectView', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/project', {
                templateUrl: 'app/projectView/projectView.html',
                controller: 'ProjectController'
            });
}])
    .controller('ProjectController', function ($scope, $location, $anchorScroll) {
        //name, desc, link, technology
        $scope.projectList = projectList;
        $scope.techImages = ["../../img/logos/android.svg", "../../img/logos/java.svg", "../../img/logos/python.svg", "../../img/logos/html.svg", "../../img/logos/javascript.svg", "../../img/logos/css.svg", "../../img/logos/angular.svg", "../../img/logos/d3.svg", "../../img/logos/google-maps.svg"];
        $scope.projectNames = ["Everything Sports", "Zillow HackHousing", "NBA Analysis", "My Portfolio"];
        $scope.techLabels = ["Android", "Java", "Python", "HTML5", "JavaScript", "CSS3", "AngularJS", "D3.js", "Google Maps"];
        $scope.projectLinks = ["project1", "project2", "project3", "project4"];
        $scope.projectDescLinks = ["#projectDesc1", "#projectDesc2", "#projectDesc3", "#projectDesc4"];

        $scope.getTech = function (index) {
            return $scope.techImages[index - 1];
        }
        $scope.getLabel = function (index) {
            return $scope.techLabels[index - 1];
        }
        $scope.parallax = function () {
            $('.parallax').parallax();
        }
        $scope.$on('$viewContentLoaded', function () {
            setTimeout(function () {
                $("#projectMain").focus();
                $(this).scrollTop(0);
                $('a').click(function () {
                    $('html, body').animate({
                        scrollTop: $($(this).attr('class').split(' ')[0]).offset().top
                    }, 500);
                    return false;
                });
                $('.scrollspy').scrollSpy();
            }, 5);
        });
    });
