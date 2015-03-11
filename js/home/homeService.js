var app = angular.module('fitstantly');

app.service('homeService', function($q) {

	var date = Date();
	console.log(date);



	
	this.authenticate = function() {
		
		var deferred = $q.defer();

		OAuth.popup('fitbit', {cache: true}).done(function(fitbit) {
			console.log(fitbit)

			fitbit.get('https://api.fitbit.com/1/user/-/activities/date/2015-02-25.json').done(function(data) {
				deferred.resolve(data);


				// console.log(data);
			}).fail(function(err) {
				deferred.reject();
			});

		}).fail(function(err) {
			deferred.reject();
	  		alert("Authentication failed. Please try again.")
		})
		return deferred.promise;
	}

	var currentSteps;
	this.setSteps = function(data) {
		currentSteps = data;
	}

	this.getSteps = function() {
		return currentSteps;
	}

	var currentActiveMinutes;
	this.setActive = function(data) {
		currentActiveMinutes = data;
	}

	this.getActive = function() {
		return currentActiveMinutes;
	}






});