var app = angular.module('fitstantly');

app.controller('UserCtrl', function($scope, homeService) {

	$scope.todaySteps = homeService.getSteps();

	$scope.todayActive = homeService.getActive();







});