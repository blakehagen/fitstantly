var app = angular.module('fitstantly');

app.controller('HomeCtrl', function($scope) {

	OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw')

	
	$scope.authorize = function() {
		OAuth.popup('fitbit', {cache: true}).done(function(fitbit) {
			console.log(fitbit)
	  	//make API calls with `fitbit`
			}).fail(function(err) {
	  			alert("Authentication failed. Please try again.")
		})
	}





});