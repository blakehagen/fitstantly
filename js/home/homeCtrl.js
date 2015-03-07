var app = angular.module('fitstantly');

app.controller('HomeCtrl', function($scope) {

	OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw')
	
	$scope.authorize = function() {
		OAuth.popup('fitbit', {cache: true}).done(function(fitbit) {
			console.log(fitbit)

			fitbit.get('https://api.fitbit.com/1/user/2B86FZ/activities/date/2015-02-25.json').done(function(data) {
				console.log('hello')
				  //todo with data
				}).fail(function(err) {
					console.log('nope')
				  //todo with err
				});

		}).fail(function(err) {
	  			alert("Authentication failed. Please try again.")
		})
	}










});