var app = angular.module('fitstantly');

app.controller('HomeCtrl', function($scope, homeService, $location, $rootScope) {

	OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw');
	
	$scope.authorize = function() {
		homeService.authenticate().then(function(data){
			$location.path('/user');
				console.log(data);
			homeService.setSteps(data[0].summary.steps); // ---> current day steps

			homeService.setActive(data[0].summary.veryActiveMinutes); // ---> current day active minutes
			$rootScope.todaysData = (data[0].summary); // ---> current day data for commentary in dashboard

			homeService.setBestSteps(data[5].best.total.steps.value); // ---> best steps all-time
			$rootScope.bestStepsDate = (data[5].best.total.steps.date); // ---> date acheive personal best (steps)
			
			homeService.setMostStepsWeek(data[1]["activities-steps"]); // ---> best steps last 7 days
			
			$rootScope.chartData = data[1]["activities-steps"] // ---> to get data into chart on user view

			// console.log(data[1]["activities-steps"]);
			
			homeService.setAvgStepsWeek(data[1]["activities-steps"]); // ---> average steps/day last 7 days
			
			homeService.setMostMinutesWeek(data[2]["activities-minutesVeryActive"]); // ---> best active minutes last 7 days
			
			homeService.setAvgActiveWeek(data[2]["activities-minutesVeryActive"]); // ---> average active mins/day last 7 days

			// homeService.setMostStepsMonth(data[3]["activities-steps"]); // ---> best steps current month
			
			// homeService.setMostMinutesMonth(data[4]["activities-minutesVeryActive"]); // ---> best active minutes current month

		})
	}





	// TEST TEST TEST TEST 

	$scope.authorizeTest = function() {

		homeService.authenticateTest().then(function(data){
			$location.path('/user');
				console.log(data);
			homeService.setSteps(data[0].summary.steps); // ---> current day steps

			homeService.setActive(data[0].summary.veryActiveMinutes); // ---> current day active minutes
			$rootScope.todaysData = (data[0].summary); // ---> current day data for commentary in dashboard

			homeService.setBestSteps(data[5].best.total.steps.value); // ---> best steps all-time
			$rootScope.bestStepsDate = (data[5].best.total.steps.date); // ---> date acheive personal best (steps)
			
			homeService.setMostStepsWeek(data[1]["activities-steps"]); // ---> best steps last 7 days
			
			$rootScope.chartData = data[1]["activities-steps"] // ---> to get data into chart on user view

			console.log(data[1]["activities-steps"]);
			console.log($rootScope.chartData);
			
			homeService.setAvgStepsWeek(data[1]["activities-steps"]); // ---> average steps/day last 7 days
			
			homeService.setMostMinutesWeek(data[2]["activities-minutesVeryActive"]); // ---> best active minutes last 7 days
			
			homeService.setAvgActiveWeek(data[2]["activities-minutesVeryActive"]); // ---> average active mins/day last 7 days

			// homeService.setMostStepsMonth(data[3]["activities-steps"]); // ---> best steps current month
			
			// homeService.setMostMinutesMonth(data[4]["activities-minutesVeryActive"]); // ---> best active minutes current month

			console.log("This logged!");
		})
	}


	$scope.logout = function() {
		$location.path('#/');
		OAuth.clearCache('fitbit');
		alert("You have signed out.");
	}

	$scope.test = function() {
		alert("This ng-click worked!")
	}


		


});





