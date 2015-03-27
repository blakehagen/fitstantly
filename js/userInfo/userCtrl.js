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


	console.log("This is the chart data: ", $rootScope.chartData);
	var chartData;
	chartData = $rootScope.chartData;
	// console.log(chartData);

	$scope.labels = [];
	$scope.data = [[], []];

	for (var i = 0; i < chartData.length; i++) {
		$scope.labels.push(chartData[i].dateTime.slice(6).replace("-", "/"));
		$scope.data[0].push(parseInt(chartData[i].value));
	};

	var sum = 0;
	for (var i = 0; i < chartData.length; i++) {
		var sum = parseInt(chartData[i].value) + sum;
	}

	var avg = sum / 7;
	avg = Math.round(avg);
	avgStepsWeek = avg;
	// avgStepsWeek = numeral(avgStepsWeek).format('0,0');
	console.log('Avg steps last 7 days: ', avgStepsWeek);

	for (var i = 0; i < 7; i++) {
		$scope.data[1].push(parseInt(avgStepsWeek));
	};

	// console.log($scope.data[1]);
	// // console.log($scope.labels);
	// // console.log($scope.data);

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