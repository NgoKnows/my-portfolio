"use strict"

angular.module('myPortfolio.homeView', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', [function() {

}]);

angular.element(document).ready(function(){
    $('#hi').fadeIn(1200);
});



