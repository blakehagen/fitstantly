var app = angular.module('fitstantly');

app.controller('HomeCtrl', function($scope, homeService, $location, $rootScope) {

	OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw');
	
	$scope.authorize = function() {
		homeService.authenticate().then(function(fitbitData){
			$location.path('/user');
				// console.log(data);
			homeService.setSteps(fitbitData[0].summary.steps); // ---> current day steps

			homeService.setActive(fitbitData[0].summary.veryActiveMinutes); // ---> current day active minutes
			$rootScope.todaysData = (fitbitData[0].summary); // ---> current day data for commentary in dashboard

			homeService.setBestSteps(fitbitData[5].best.total.steps.value); // ---> best steps all-time
			$rootScope.bestStepsDate = (fitbitData[5].best.total.steps.date); // ---> date acheive personal best (steps)
			
			homeService.setMostStepsWeek(fitbitData[1]["activities-steps"]); // ---> best steps last 7 days
			
			$rootScope.chartDataSteps = fitbitData[1]["activities-steps"] // ---> to get data into chart on user view

			// console.log(data[1]["activities-steps"]);
			
			homeService.setAvgStepsWeek(fitbitData[1]["activities-steps"]); // ---> average steps/day last 7 days
			
			homeService.setMostMinutesWeek(fitbitData[2]["activities-minutesVeryActive"]); // ---> best active minutes last 7 days
			
			homeService.setAvgActiveWeek(fitbitData[2]["activities-minutesVeryActive"]); // ---> average active mins/day last 7 days

			// homeService.setMostStepsMonth(data[3]["activities-steps"]); // ---> best steps current month
			
			// homeService.setMostMinutesMonth(data[4]["activities-minutesVeryActive"]); // ---> best active minutes current month

		})
	}


	$scope.logout = function() {
		$location.path('#/');
		OAuth.clearCache('fitbit');
		alert("You have signed out.");
	}

	$scope.test = function() {
		window.open('http://blakehagen.github.io');
		alert("This ng-click worked!");
	}


});





