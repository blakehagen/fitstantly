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

// Chart Set Up ------------------------------------------------------------------

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
	// console.log('Avg steps last 7 days: ', avgStepsWeek);

	for (var i = 0; i < 7; i++) {
		$scope.data[1].push(parseInt(avgStepsWeek));
	};

//This is the chart on the User View-------------------
	
	$scope.labels;
	$scope.series = ["Steps", "7-Day Average"];
  	$scope.data;

//-----------------------------------------------------
	

//Chart modal -----------------------------------------

	$scope.modalShown = false;
  	$scope.toggleModal = function() {
    	$scope.modalShown = !$scope.modalShown;
  	};

 //----------------------------------------------------














});