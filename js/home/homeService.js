var app = angular.module('fitstantly');

app.service('homeService', function($q, $http) {

	var currentDate = '';
	var dateArr = [];
	var newDateArr = [];
	var date = Date();
	var monthNum = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	// console.log(date);
	dateArr = date.split(' ');
	// console.log(dateArr);

	newDateArr.push(dateArr[3]);

	if (dateArr[1] === "Jan") {
	  	newDateArr.push(monthNum[0]);
	} else if (dateArr[1] === "Feb") {
	  	newDateArr.push(monthNum[1]);
		} else if (dateArr[1] === "Mar") {
			newDateArr.push(monthNum[2]);
			} else if (dateArr[1] === "Apr") {
				newDateArr.push(monthNum[3]);
				} else if (dateArr[1] === "May") {
					newDateArr.push(monthNum[4])
					} else if (dateArr[1] === "Jun") {
						newDateArr.push(monthNum[5]);
						} else if (dateArr[1] === "Jul") {
							newDateArr.push(monthNum[6]);
							} else if (dateArr[1] === "Aug") {
							  	newDateArr.push(monthNum[7]);
								} else if (dateArr[1] === "Sep") {
									newDateArr.push(monthNum[8]);
									} else if (dateArr[1] === "Oct") {
										newDateArr.push(monthNum[9]);
										} else if (dateArr[1] === "Nov") {
											newDateArr.push(monthNum[10])
											} else {
												newDateArr.push(monthNum[11]);
												}

	newDateArr.push(dateArr[2]);
	// console.log(newDateArr);

	var currentDate = newDateArr[0] + "-" + newDateArr[1] + "-" + newDateArr[2];
	console.log(currentDate);

	
	
	this.authenticate = function() {
		
		var deferred = $q.defer();

		OAuth.popup('fitbit', {cache: false}).done(function(fitbit) {
			// console.log(fitbit)

			fitbit.get('https://api.fitbit.com/1/user/-/activities/date/' + currentDate + '.json').done(function(data) {
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



// url: 'https://api.fitbit.com/1/user/-/activities/steps/date/2015-02-01/2015-02-28.json'


});