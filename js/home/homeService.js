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
	console.log("Hello. Today is:", currentDate);

	var currentMonthRange = [];

	if (newDateArr[1] === "01") {
		currentMonthRange.push(newDateArr[0] + "-01-01/" + newDateArr[0] + "-01-31");
	} else if (newDateArr[1] === "02") {
		currentMonthRange.push(newDateArr[0] + "-02-01/" + newDateArr[0] + "-02-28");
	} else if (newDateArr[1] === "03") {
		currentMonthRange.push(newDateArr[0] + "-03-01/" + newDateArr[0] + "-03-31");
	} else if (newDateArr[1] === "04") {
		currentMonthRange.push(newDateArr[0] + "-04-01/" + newDateArr[0] + "-04-30");
	} else if (newDateArr[1] === "05") {
		currentMonthRange.push(newDateArr[0] + "-05-01/" + newDateArr[0] + "-05-31");
	} else if (newDateArr[1] === "06") {
		currentMonthRange.push(newDateArr[0] + "-06-01/" + newDateArr[0] + "-06-30");
	} else if (newDateArr[1] === "07") {
		currentMonthRange.push(newDateArr[0] + "-07-01/" + newDateArr[0] + "-07-31");
	} else if (newDateArr[1] === "08") {
		currentMonthRange.push(newDateArr[0] + "-08-01/" + newDateArr[0] + "-08-31");
	} else if (newDateArr[1] === "09") {
		currentMonthRange.push(newDateArr[0] + "-09-01/" + newDateArr[0] + "-09-30");
	} else if (newDateArr[1] === "10") {
		currentMonthRange.push(newDateArr[0] + "-10-01/" + newDateArr[0] + "-10-31");
	} else if (newDateArr[1] === "11") {
		currentMonthRange.push(newDateArr[0] + "-11-01/" + newDateArr[0] + "-11-30");
	} else {
		currentMonthRange.push(newDateArr[0] + "-12-01/" + newDateArr[0] + "-12-31");
	}

	// console.log(currentMonthRange);

	this.authenticate = function() {
		var promisesArray = [];
		var deferred = $q.defer();

		OAuth.popup('fitbit', {cache: true}).done(function(fitbit) {
			// console.log(fitbit)

			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/date/' + currentDate + '.json')) // ---> current date steps
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/steps/date/' + currentDate + '/7d.json')) // ---> steps for last 7 days
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/minutesVeryActive/date/' + currentDate + '/7d.json')) // ---> veryActive minutes for last 7 days
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/steps/date/' + currentMonthRange + '.json')) // ---> steps for current month
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/minutesVeryActive/date/' + currentMonthRange + '.json')) // ---> veryActive minutes for current month
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities.json')) // ---> best steps all-time

			$q.all(promisesArray).then(function(res){
				deferred.resolve(res)
			}, function(err){
				console.log(err)
				deferred.reject(err)
			})

		}).fail(function(err) {
			deferred.reject();
	  		alert("Authentication failed. Please try again.");
		})
		return deferred.promise;
	}

// TEST TEST TEST TEST REDIRECT METHOD ON OAuth.io--------------------

	this.authenticateTest = function() {
		var promisesArray = [];
		var deferred = $q.defer();

		
		OAuth.redirect('fitbit', 'https://api.fitbit.com');



		OAuth.callback('fitbit', {cache: true}).done(function(fitbit) {
			console.log(fitbit);

			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/date/' + currentDate + '.json')) // ---> current date steps
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/steps/date/' + currentDate + '/7d.json')) // ---> steps for last 7 days
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/minutesVeryActive/date/' + currentDate + '/7d.json')) // ---> veryActive minutes for last 7 days
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/steps/date/' + currentMonthRange + '.json')) // ---> steps for current month
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/minutesVeryActive/date/' + currentMonthRange + '.json')) // ---> veryActive minutes for current month
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities.json')) // ---> best steps all-time

			$q.all(promisesArray).then(function(res){
				deferred.resolve(res)
			}, function(err){
				console.log(err)
				deferred.reject(err)
			})

		}).fail(function(err) {
			deferred.reject();
	  		alert("Authentication failed. Please try again.");
		})
		return deferred.promise;
	}












// STEPS ---> TODAY
	var currentSteps;
	this.setSteps = function(data) {
		currentSteps = data;
		currentSteps = numeral(currentSteps).format('0,0');
	}

	this.getSteps = function() {
		return currentSteps;
	}

// ACTIVE MINUTES ---> TODAY
	var currentActiveMinutes;
	this.setActive = function(data) {
		currentActiveMinutes = data;
		currentActiveMinutes = numeral(currentActiveMinutes).format('0,0');
	}

	this.getActive = function() {
		return currentActiveMinutes;
	}

// BEST STEPS ---> ALL-TIME
	var bestSteps;
	this.setBestSteps = function(data) {
		bestSteps = data;
		bestSteps = numeral(bestSteps).format('0,0');
	}

	this.getBestSteps = function() {
		return bestSteps;
	}

// BEST STEPS ---> LAST 7 DAYS
	var bestStepsWeek;
	this.setMostStepsWeek = function(data) {
		// console.log('service: ',data);
		var highest = 0;
		for (var i = 0; i < data.length; i++) {
			if (parseInt(data[i].value) > highest) {
				highest = parseInt(data[i].value);
			}
		};
		bestStepsWeek = highest;
		bestStepsWeek = numeral(bestStepsWeek).format('0,0');
	}

	this.getMostStepsWeek = function() {
		return bestStepsWeek;
	}

// AVERAGE STEPS/DAY ---> LAST 7 DAYS
		var avgStepsWeek;
		this.setAvgStepsWeek = function(data) {
			var sum = 0;
			for (var i = 0; i < data.length; i++) {
				var sum = parseInt(data[i].value) + sum;
			}

			var avg = sum / 7;

			avg = Math.round(avg);
			avgStepsWeek = avg;
			avgStepsWeek = numeral(avgStepsWeek).format('0,0');
		}

		this.getAvgStepsWeek = function() {
			return avgStepsWeek;
		}

// BEST ACTIVE MINUTES ---> LAST 7 DAYS
	var bestMinutesWeek;
	this.setMostMinutesWeek = function(data) {
		var highest = 0;
		for (var i = 0; i < data.length; i++) {
			if (parseInt(data[i].value) > highest) {
				highest = parseInt(data[i].value);
			}
		};
		bestMinutesWeek = highest;
	}

	this.getMostMinutesWeek = function() {
		return bestMinutesWeek;
	}

// BEST STEPS ---> CURRENT MONTH
	var bestStepsMonth;
	// this.setMostStepsMonth = function(data) {
	// 	var highest = 0;
	// 	for (var i = 0; i < data.length; i++) {
	// 		if (parseInt(data[i].value) > highest) {
	// 			highest = parseInt(data[i].value);
	// 		}
	// 	};

	// 	bestStepsMonth = highest;
	// 	bestStepsMonth = numeral(bestStepsMonth).format('0,0');
	// }

	this.getMostStepsMonth = function() {
			return bestStepsMonth;
		}

// AVERAGE ACTIVE MINS/DAY ---> LAST 7 DAYS
	var avgActiveWeek;
	this.setAvgActiveWeek = function(data) {
		var sum = 0;
		for (var i = 0; i < data.length; i++) {
			var sum = parseInt(data[i].value) + sum;
		}

		var avg = sum / 7;

		avg = Math.round(avg);
		avgActiveWeek = avg;
	}

	this.getAvgActiveWeek = function() {
		return avgActiveWeek;
	}


// BEST ACTIVE MINUTES ---> CURRENT MONTH
	var bestMinutesMonth;
	// this.setMostMinutesMonth = function(data) {
	// 	var highest = 0;
	// 	for (var i = 0; i < data.length; i++) {
	// 		if (parseInt(data[i].value) > highest) {
	// 			highest = parseInt(data[i].value);
	// 		}
	// 	};
	// 	bestMinutesMonth = highest;
	// }

	this.getMostMinutesMonth = function() {
		return bestMinutesMonth;
	}



});




