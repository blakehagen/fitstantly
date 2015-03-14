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

	console.log(currentMonthRange);




	
	
	this.authenticate = function() {
		var promisesArray = [];
		var deferred = $q.defer();

		OAuth.popup('fitbit', {cache: true}).done(function(fitbit) {
			// console.log(fitbit)

			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/date/' + currentDate + '.json'))
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/steps/date/2015-03-01/2015-03-07.json'))
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/minutesVeryActive/date/2015-03-01/2015-03-07.json'))
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/steps/date/' + currentMonthRange + '.json'))
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities/minutesVeryActive/date/' + currentMonthRange + '.json'))
			promisesArray.push(fitbit.get('https://api.fitbit.com/1/user/-/activities.json'))

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


	// Week Steps:
	// 		'https://api.fitbit.com/1/user/-/activities/steps/date/2015-03-01/2015-03-07.json'

	// Week Active Minutes:
	// 		'https://api.fitbit.com/1/user/-/activities//minutesVeryActive/date/2015-03-01/2015-03-07.json'

	// Month Steps:
	// 		'https://api.fitbit.com/1/user/-/activities/steps/date/2015-03-01/2015-03-31.json'

	// Month Active Minutes:
	// 		'https://api.fitbit.com/1/user/-/activities//minutesVeryActive/date/2015-03-01/2015-03-31.json'

	// Best Day All-Time Steps:
	// 		'https://api.fitbit.com/1/user/-/activities.json'

	// Best Day All-Time Active Minutes:
	//		Not available ---> maybe just have the all-time best steps in the upper right corner for reference?












});




