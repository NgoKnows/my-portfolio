"use strict"

angular.module('myPortfolio', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'myPortfolio.homeView',
    'myPortfolio.aboutView',
    'myPortfolio.projectView',
    'myPortfolio.projectDescView'
])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/homeView'
            });
}]);

$(document).ready(function () {
    setTimeout(function () {
        $('#navbar').show(1200);
        setTimeout(function () {
            $('#name').show(900)
        }, 650)
        setTimeout(function () {
            $('.menuitem').show(900)
        }, 650)
    }, 500);
    $(window).scroll(function () {
        $("#navbar").stop().animate({
            "marginTop": ($(window).scrollTop()) + "px",
            "marginLeft": ($(window).scrollLeft()) + "px"
        }, "slow");
    });
});
