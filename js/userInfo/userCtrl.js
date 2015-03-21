var app = angular.module('fitstantly');

app.controller('UserCtrl', function($scope, homeService) {



	$scope.todaySteps = homeService.getSteps();
	$scope.todayActive = homeService.getActive();

	$scope.bestStepsAllTime = homeService.getBestSteps();

	$scope.bestWeekSteps = homeService.getMostStepsWeek();
	$scope.avgWeek = homeService.getAvgStepsWeek();

	$scope.bestWeekMinutes = homeService.getMostMinutesWeek();
	$scope.avgActiveWeek = homeService.getAvgActiveWeek();

	$scope.bestMonthSteps = homeService.getMostStepsMonth();
	$scope.bestMonthMinutes = homeService.getMostMinutesMonth();

	$scope.expandWeek = function() {
		if($scope.active == false) {
			$scope.active = true;
		}
		else {
			$scope.active = false;
		}
	}

	$scope.expandMonth = function() {
		if($scope.active == false) {
			$scope.active = true;
		}
		else {
			$scope.active = false;
		}
	}
});