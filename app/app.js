"use strict"

angular.module('myPortfolio', [
    'ngRoute',
    'ngPortfolio.homeView',
    'ngPortfolio.projectView',
    'ngPortfolio.aboutView'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homeView'});
}])
angular.element(document).ready(function(){
    $('#hi').fadeIn(1200);
});




