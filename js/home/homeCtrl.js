var app = angular.module('fitstantly');

app.controller('HomeCtrl', function($scope, homeService, $location, $rootScope, $anchorScroll, $routeParams) {

	OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw');
	
	$scope.authorize = function() {
		homeService.authenticate().then(function(fitbitData){
			$location.path('/user');
				console.log("fitbitData: ", fitbitData);

			homeService.setUser(fitbitData[0].user.fullName); //-------> current user ID	
			homeService.setSteps(fitbitData[1].summary.steps); // ---> current day steps

			homeService.setActive(fitbitData[1].summary.veryActiveMinutes); // ---> current day active minutes
			$rootScope.todaysData = (fitbitData[1].summary); // ---> current day data for commentary in dashboard

			homeService.setBestSteps(fitbitData[6].best.total.steps.value); // ---> best steps all-time
			$rootScope.bestStepsDate = (fitbitData[6].best.total.steps.date); // ---> date acheive personal best (steps)
			
			homeService.setMostStepsWeek(fitbitData[2]["activities-steps"]); // ---> best steps last 7 days
			
			$rootScope.chartDataSteps = fitbitData[2]["activities-steps"] // ---> to get data into chart on user view
			
			homeService.setAvgStepsWeek(fitbitData[2]["activities-steps"]); // ---> average steps/day last 7 days
			
			homeService.setMostMinutesWeek(fitbitData[3]["activities-minutesVeryActive"]); // ---> best active minutes last 7 days
			
			homeService.setAvgActiveWeek(fitbitData[3]["activities-minutesVeryActive"]); // ---> average active mins/day last 7 days

			$rootScope.chartDataActiveMins = fitbitData[3]["activities-minutesVeryActive"] // ---> to get Active MINUTES data into chart on user view

			// homeService.setMostStepsMonth(data[3]["activities-steps"]); // ---> best steps current month
			
			// homeService.setMostMinutesMonth(data[4]["activities-minutesVeryActive"]); // ---> best active minutes current month

		})
	}


	$scope.logout = function() {
		$location.path('#/');
		OAuth.clearCache('fitbit');
		alert("You have signed out.");
	}

	$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }

    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    	if($location.hash()) $anchorScroll();  
  	});


});






