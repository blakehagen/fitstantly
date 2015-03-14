var app = angular.module('fitstantly');

app.controller('UserCtrl', function($scope, homeService) {

	$scope.todaySteps = homeService.getSteps();
	$scope.todayActive = homeService.getActive();

	$scope.bestStepsAllTime = homeService.getBestSteps();

	$scope.bestWeekSteps = homeService.getMostStepsWeek();
	$scope.bestWeekMinutes = homeService.getMostMinutesWeek();

	$scope.bestMonthSteps = homeService.getMostStepsMonth();
	$scope.bestMonthMinutes = homeService.getMostMinutesMonth();


});