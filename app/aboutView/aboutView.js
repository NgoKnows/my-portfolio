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
            setTimeout(function () {
                $('#skills').show(1500);
                // Horizontal staggered list
                var time = 0;

                var showStaggeredList = function (selector) {
                    $(selector).find('li').velocity({
                        translateX: "-100px"
                    }, {
                        duration: 0
                    });

                    $(selector).find('li').each(function () {
                        $(this).velocity({
                            opacity: "1",
                            translateX: "0"
                        }, {
                            duration: 800,
                            delay: time,
                            easing: [60, 10]
                        });
                        time += 120;
                    });
                }
                showStaggeredList('#skills');

            }, 1000);
        });
    });
