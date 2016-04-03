var app = angular.module('fitstantly');

app.service('userService', function ($http, $q) {

  this.getData = function () {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: '/api/v1/data'
    }).then(function (response) {

      var fitbitResponse = response.data;

      // CALC AVERAGE & BEST STEPS FOR LAST 7 DAYS //
      var avgStepsWeek;
      var sumSteps      = 0;
      var best7DaySteps = 0;

      for (var i = 0; i < fitbitResponse.steps['activities-steps'].length; i++) {
        sumSteps = parseInt(fitbitResponse.steps['activities-steps'][i].value) + sumSteps;
        if (parseInt(fitbitResponse.steps['activities-steps'][i].value) > best7DaySteps) {
          best7DaySteps = fitbitResponse.steps['activities-steps'][i].value;
        }
      }

      avgStepsWeek                           = numeral(Math.round(sumSteps / 7)).format('0,0');
      fitbitResponse.steps.avgStepsLast7Days = avgStepsWeek;
      fitbitResponse.steps.best7DaySteps     = numeral(best7DaySteps).format('0,0');

      // CALC AVERAGE & BEST ACTIVE MINS FOR LAST 7 DAYS //
      var avgActiveMinsWeek;
      var sumActiveMins      = 0;
      var best7DayActiveMins = 0;

      for (i = 0; i < fitbitResponse.veryActiveMinutes['activities-minutesVeryActive'].length; i++) {
        sumActiveMins = parseInt(fitbitResponse.veryActiveMinutes['activities-minutesVeryActive'][i].value) + sumActiveMins;
        if (parseInt(fitbitResponse.veryActiveMinutes['activities-minutesVeryActive'][i].value) > best7DayActiveMins) {
          best7DayActiveMins = fitbitResponse.veryActiveMinutes['activities-minutesVeryActive'][i].value;
        }
      }

      avgActiveMinsWeek                                       = numeral(Math.round(sumActiveMins / 7)).format('0,0');
      fitbitResponse.veryActiveMinutes.avgActiveMinsLast7Days = avgActiveMinsWeek;
      fitbitResponse.veryActiveMinutes.best7DayActiveMins     = numeral(best7DayActiveMins).format('0,0');

      deferred.resolve(fitbitResponse)
    });
    return deferred.promise;
  };

});