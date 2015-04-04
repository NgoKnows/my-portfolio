"use strict"
angular.module('myPortfolio.aboutView', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/about', {
                templateUrl: 'app/aboutView/aboutView.html',
                controller: 'AboutController'
            });
}])
    .controller('AboutController', function ($scope) {
        $scope.$on('$viewContentLoaded', function () {
            setTimeout(function () {
                $(this).scrollTop(0);
            }, 10);
//            $(window).resize(function () {
//                if(
//            });
            setTimeout(function () {
                Materialize.showStaggeredList('#skills');
                setTimeout(function () {
                    $('#skills').show(1500);
                }, 1000);

            }, 1500);
        });
    });
