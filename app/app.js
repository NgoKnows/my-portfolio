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
    var size = $(window).width();
    $('.menuitem').click(function(){
       $('.menuitem').removeClass('active');
    $(this).addClass('active');
    });
    $('html').addClass('noScroll')
    setTimeout(function () {
        $('#navbar').velocity("slideDown", { duration: 1250 })
        setTimeout(function () {
            $('#name').velocity("fadeIn", { delay: 500, duration: 1500 });
        }, 650);
        setTimeout(function () {
           $('html').removeClass('noScroll');
        }, 1250);
        setTimeout(function () {
            $('.menuitem').velocity("fadeIn", { delay: 500, duration: 1500 });
        }, 600)
    }, 300);
    var $navbar = $("#navbar");
    var $window = $(window);
    $window.resize(function () {
        size = $(window).width();
    });
    $window.scroll(function () {
        //if (size < 992) {
            $navbar.velocity("stop").velocity({
                "marginTop": ($(window).scrollTop()) + "px"
            }, 400);
       // }
    });
});
