var app = angular.module('fitstantly');

<<<<<<< HEAD
app.controller('HomeCtrl', function($scope, homeService, $location, $rootScope) {
=======
app.controller('HomeCtrl', function($scope, homeService, $location, $rootScope, $routeParams) {
>>>>>>> 9175f850e40b60c8573779437fbbcc1d52e44df3

	OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw');
	
	$scope.authorize = function() {
<<<<<<< HEAD
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

// REDIRECT TEST --------------

	// $scope.newAuthorize = function() {
	// 	homeService.redirectTest().then(function(data){
	// 		$location.path('/user');
	// 			console.log(data);
	// 		homeService.setSteps(data[0].summary.steps); // ---> current day steps

	// 		homeService.setActive(data[0].summary.veryActiveMinutes); // ---> current day active minutes
	// 		$rootScope.todaysData = (data[0].summary); // ---> current day data for commentary in dashboard

	// 		homeService.setBestSteps(data[5].best.total.steps.value); // ---> best steps all-time
	// 		$rootScope.bestStepsDate = (data[5].best.total.steps.date); // ---> date acheive personal best (steps)
			
	// 		homeService.setMostStepsWeek(data[1]["activities-steps"]); // ---> best steps last 7 days
			
	// 		$rootScope.chartData = data[1]["activities-steps"] // ---> to get data into chart on user view

	// 		// console.log(data[1]["activities-steps"]);
			
	// 		homeService.setAvgStepsWeek(data[1]["activities-steps"]); // ---> average steps/day last 7 days
			
	// 		homeService.setMostMinutesWeek(data[2]["activities-minutesVeryActive"]); // ---> best active minutes last 7 days
			
	// 		homeService.setAvgActiveWeek(data[2]["activities-minutesVeryActive"]); // ---> average active mins/day last 7 days

	// 		// homeService.setMostStepsMonth(data[3]["activities-steps"]); // ---> best steps current month
			
	// 		// homeService.setMostMinutesMonth(data[4]["activities-minutesVeryActive"]); // ---> best active minutes current month

	// 	})
	// }




// END ------------------------















=======
		homeService.authenticate().then(function(fitbitData){
			$location.path('/user');
				// console.log("fitbitData: ", fitbitData);

			homeService.setUser(fitbitData[0].user.fullName); //-------> current user ID	
			homeService.setSteps(fitbitData[1].summary.steps); // ---> current day steps

			homeService.setActive(fitbitData[1].summary.veryActiveMinutes); // ---> current day active minutes
			$rootScope.todaysData = (fitbitData[1].summary); // ---> current day data for commentary in dashboard

			homeService.setBestSteps(fitbitData[4].best.total.steps.value); // ---> best steps all-time
			$rootScope.bestStepsDate = (fitbitData[4].best.total.steps.date); // ---> date acheive personal best (steps)
			
			homeService.setMostStepsWeek(fitbitData[2]["activities-steps"]); // ---> best steps last 7 days
			
			$rootScope.chartDataSteps = fitbitData[2]["activities-steps"] // ---> to get data into chart on user view
			
			homeService.setAvgStepsWeek(fitbitData[2]["activities-steps"]); // ---> average steps/day last 7 days
			
			homeService.setMostMinutesWeek(fitbitData[3]["activities-minutesVeryActive"]); // ---> best active minutes last 7 days
			
			homeService.setAvgActiveWeek(fitbitData[3]["activities-minutesVeryActive"]); // ---> average active mins/day last 7 days

			$rootScope.chartDataActiveMins = fitbitData[3]["activities-minutesVeryActive"] // ---> to get Active MINUTES data into chart on user view
		})
	}

>>>>>>> 9175f850e40b60c8573779437fbbcc1d52e44df3
	$scope.logout = function() {
		$location.path('#/');
		OAuth.clearCache('fitbit');
		alert("You have signed out.");
	}

<<<<<<< HEAD

		


});





=======
	$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});
>>>>>>> 9175f850e40b60c8573779437fbbcc1d52e44df3
