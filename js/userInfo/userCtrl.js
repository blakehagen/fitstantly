var app = angular.module('fitstantly');

app.controller('UserCtrl', function($scope, homeService) {

	$scope.test =homeService.getSteps();

	




});