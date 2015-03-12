var app = angular.module('fitstantly');

app.controller('HomeCtrl', function($scope, homeService, $location) {

	OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw')
	
	$scope.authorize = function() {
		homeService.authenticate().then(function(data){
			$location.path('/user');
			// console.log(data);
			homeService.setSteps(data.summary.steps);
			homeService.setActive(data.summary.veryActiveMinutes);

		})
	}



		





});