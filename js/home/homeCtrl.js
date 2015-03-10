var app = angular.module('fitstantly');

app.controller('HomeCtrl', function($scope, homeService, $location) {

	OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw')
	
	$scope.authorize = function() {
		homeService.authenticate().then(function(data){
			$location.path('/userId');
			console.log(data.summary.steps);
			homeService.setSteps(data.summary.steps);

		})
	}


		









	// OAuth.initialize('YHZC6eo2wgsgM3mAgtgrxFYe9Lw')
	
	// $scope.authorize = function() {
	// 	//OAuthService.authenticate().then(function(data){
	// 		// $location.path('/' + data.userid);
	// 	// })
	// 	OAuth.popup('fitbit', {cache: true}).done(function(fitbit) {
	// 		console.log(fitbit)

	// 		fitbit.get('https://api.fitbit.com/1/user/2B86FZ/activities/date/2015-02-25.json').done(function(data) {

	// 			console.log(data);
	// 		});

	// 	}).fail(function(err) {
	//   		alert("Authentication failed. Please try again.")
	// 	})
	// }






});