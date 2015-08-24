var app = angular.module('fitstantly');

app.controller('UserCtrl', function($scope, homeService, $rootScope) {

	$scope.todaySteps = homeService.getSteps();
	$scope.todayActive = homeService.getActive();

	$scope.bestStepsAllTime = homeService.getBestSteps();

	$scope.bestWeekSteps = homeService.getMostStepsWeek();
	$scope.avgWeek = homeService.getAvgStepsWeek();

	$scope.bestWeekMinutes = homeService.getMostMinutesWeek();
	$scope.avgActiveWeek = homeService.getAvgActiveWeek();

	// $scope.bestMonthSteps = homeService.getMostStepsMonth();
	// $scope.bestMonthMinutes = homeService.getMostMinutesMonth();

// Date formatting ---------------------------------------------------------------

	// var stepsDate;
	// stepsDate = $rootScope.bestStepsDate;
	// $scope.dateBest = [];
	// $scope.dateBest.push(stepsDate.slice(5).replace("-", "/"));
	// $scope.dateBest.push(stepsDate.slice(0,4));
	// $scope.dateBest.splice(1, 0, "/");
	// $scope.dateBest = $scope.dateBest.join('');

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
	$scope.series = [" Steps", " 7-day Average"];
  	$scope.data;

  	console.log("chart steps data: " + $scope.data);


// Comments in Dashboard ------------------------------
	// Steps

	var today = $rootScope.todaysData;
	$scope.stepsComment = "";
	today = today.steps;
	// console.log(today);
	if (today > avgStepsWeek) {
		$scope.stepsComment = "Nice! Above 7-day average!";
	} else {
		$scope.stepsComment = "Get moving!"
	}

	// Active Minutes
	var todayActiveMins = $rootScope.todaysData;
	$scope.activeComment = "";
	todayActive = todayActiveMins.veryActiveMinutes;
	// console.log(today);
	if (todayActive > $scope.avgActiveWeek) {
		$scope.activeComment = "Awesome! Above 7-day average!";
	} else {
		$scope.activeComment = "Pick up the pace!"
	}

// -------------------------------------------------------








});