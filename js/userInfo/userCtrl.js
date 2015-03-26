var app = angular.module('fitstantly');

app.controller('UserCtrl', function($scope, homeService, $rootScope) {

	$scope.todaySteps = homeService.getSteps();
	$scope.todayActive = homeService.getActive();

	$scope.bestStepsAllTime = homeService.getBestSteps();

	$scope.bestWeekSteps = homeService.getMostStepsWeek();
	$scope.avgWeek = homeService.getAvgStepsWeek();

	$scope.bestWeekMinutes = homeService.getMostMinutesWeek();
	$scope.avgActiveWeek = homeService.getAvgActiveWeek();

	$scope.bestMonthSteps = homeService.getMostStepsMonth();
	$scope.bestMonthMinutes = homeService.getMostMinutesMonth();


	// console.log($rootScope.chartData);
	var chartData;
	chartData = $rootScope.chartData;
	// console.log(chartData);

	$scope.labels = [];
	$scope.data = [[], [null]];

	for (var i = 0; i < chartData.length; i++) {
		$scope.labels.push(chartData[i].dateTime);
		$scope.data[0].push(parseInt(chartData[i].value));
	};


	
	// console.log($scope.labels);
	// console.log($scope.data);

	$scope.labels;
  	$scope.data;

	// $scope.onClick = function (points, evt) {
	//     console.log(points, evt);
	//  };


	
	// $scope.expandWeek = function() {
	// 	if($scope.active == false) {
	// 		$scope.active = true;
	// 	}
	// 	else {
	// 		$scope.active = false;
	// 	}
	// }

	// $scope.expandMonth = function() {
	// 	if($scope.active == false) {
	// 		$scope.active = true;
	// 	}
	// 	else {
	// 		$scope.active = false;
	// 	}
	// }
});