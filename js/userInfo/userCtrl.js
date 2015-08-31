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

	var stepsDate;
	stepsDate = $rootScope.bestStepsDate;
	// console.log("best steps date: ",stepsDate);
	$scope.dateBest = [];
	$scope.dateBest.push(stepsDate.slice(5).replace("-", "/"));
	// console.log($scope.dateBest);
	$scope.dateBest.push(stepsDate.slice(0,4));
	$scope.dateBest.splice(1, 0, "/");
	$scope.dateBest = $scope.dateBest.join('');

// STEPS Chart Set Up ------------------------------------------------------------------

	var chartDataSteps;
	chartDataSteps = $rootScope.chartDataSteps;
	console.log("chart steps: ", chartDataSteps);

	$scope.labels = [];
	$scope.data = [[], []];

	for (var i = 0; i < chartDataSteps.length; i++) {
		$scope.labels.push(chartDataSteps[i].dateTime.slice(6).replace("-", "/"));
		$scope.data[0].push(parseInt(chartDataSteps[i].value));
	};

	var sum = 0;
	for (var i = 0; i < chartDataSteps.length; i++) {
		var sum = parseInt(chartDataSteps[i].value) + sum;
	}

	var avg = sum / 7;
	avg = Math.round(avg);
	avgStepsWeek = avg;
	// avgStepsWeek = numeral(avgStepsWeek).format('0,0');
	// console.log('Avg steps last 7 days: ', avgStepsWeek);
	for (var i = 0; i < 7; i++) {
		$scope.data[1].push(parseInt(avgStepsWeek));
	};


	// ACTIVE MINUTES Chart Set Up ------------------------------------------------------------------

	var chartDataActiveMins;
	chartDataActiveMins = $rootScope.chartDataActiveMins;
	console.log("chart active minutes: ", chartDataActiveMins);

	$scope.labelsActiveMins = [];
	$scope.dataActiveMins = [[], []];

	for (var i = 0; i < chartDataActiveMins.length; i++) {
		$scope.labelsActiveMins.push(chartDataActiveMins[i].dateTime.slice(6).replace("-", "/"));
		$scope.dataActiveMins[0].push(parseInt(chartDataActiveMins[i].value));
	};

	var sumActiveMins = 0;
	for (var i = 0; i < chartDataActiveMins.length; i++) {
		var sumActiveMins = parseInt(chartDataActiveMins[i].value) + sumActiveMins;
	}

	var avgActiveMins = sumActiveMins / 7;
	avgActiveMins = Math.round(avgActiveMins);
	avgActiveMinsWeek = avgActiveMins;
	
	for (var i = 0; i < 7; i++) {
		$scope.dataActiveMins[1].push(parseInt(avgActiveMinsWeek));
	};


//This is the STEPS chart on the User View-------------------
	
	$scope.labels;
	$scope.series = [" Steps", " 7-day Average"];
  	$scope.data;

  	// console.log("chart steps data: " + $scope.data);


//This is the ACTIVE MINUTES chart on the User View-------------------
	
	$scope.labelsActiveMins;
	$scope.seriesActiveMins = [" Very Active Minutes", " 7-day Average"];
  	$scope.dataActiveMins;

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