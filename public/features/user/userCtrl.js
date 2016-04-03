var app = angular.module('fitstantly');

app.controller('UserCtrl', function ($scope, userService) {

  $scope.getFitBitData = function () {
    userService.getData().then(function (data) {

      // ALL FITBIT DATA //
      $scope.fitbitData = data;
      console.log('FITBIT DATA: ', $scope.fitbitData);

      // DISPLAY USERNAME //
      $scope.username           = $scope.fitbitData.profile.user.fullName;
      // STEPS RECORD (ALL-TIME) //
      $scope.stepsRecordAllTime = numeral($scope.fitbitData.activities.best.total.steps.value).format('0,0');

      // DATE OF STEPS RECORD (ALL-TIME) //
      var dateTemp           = $scope.fitbitData.activities.best.total.steps.date;
      $scope.stepsRecordDate = [];
      $scope.stepsRecordDate.push(dateTemp.slice(5).replace('-', '/'));
      $scope.stepsRecordDate.push(dateTemp.slice(0, 4));
      $scope.stepsRecordDate.splice(1, 0, '/');
      $scope.stepsRecordDate = $scope.stepsRecordDate.join('');

      // STEPS TODAY //
      $scope.stepsToday       = numeral($scope.fitbitData.activitiesToday.summary.steps).format('0,0');
      // 7-DAY STEPS AVERAGE //
      $scope.steps7DayAverage = $scope.fitbitData.steps.avgStepsLast7Days;
      // 7-DAY STEPS RECORD //
      $scope.steps7DayBest    = $scope.fitbitData.steps.best7DaySteps;

      // ACTIVE MINUTES TODAY //
      $scope.activeMinsToday       = numeral($scope.fitbitData.activitiesToday.summary.veryActiveMinutes).format('0,0');
      // 7-DAY ACTIVE MINUTES AVERAGE //
      $scope.activeMins7DayAverage = $scope.fitbitData.veryActiveMinutes.avgActiveMinsLast7Days;
      // 7-DAY ACTIVE MINUTES RECORD //
      $scope.activeMins7DayBest    = $scope.fitbitData.veryActiveMinutes.best7DayActiveMins;

      // SET UP DISPLAY MESSAGES //
      if (parseFloat($scope.stepsToday) > parseFloat($scope.steps7DayAverage)) {
        $scope.stepsMsg = 'Nice! Above 7-day average!';
      } else {
        $scope.stepsMsg = 'Get moving!';
      }

      if (parseFloat($scope.activeMinsToday) > parseFloat($scope.activeMins7DayAverage)) {
        $scope.activeMinsMsg = 'Awesome! Above 7-day average!';
      } else {
        $scope.activeMinsMsg = 'Pick up the pace!';
      }

      // STEPS CHART //
      $scope.stepsArray = [];
      $scope.stepsArray = $scope.fitbitData.steps['activities-steps'];

      $scope.labels = [];
      $scope.data   = [[], []];
      $scope.series = [' Steps', ' 7-day Average'];

      for (var i = 0; i < $scope.stepsArray.length; i++) {
        $scope.labels.push($scope.stepsArray[i].dateTime.slice(5).replace('-', '/'));
        $scope.data[0].push(parseFloat($scope.stepsArray[i].value));
      }

      for (i = 0; i < 7; i++) {
        $scope.data[1].push(parseFloat($scope.steps7DayAverage.replace(',', '')));
      }

      // ACTIVE MINUTES CHART //
      $scope.activeMinsArray = [];
      $scope.activeMinsArray = $scope.fitbitData.veryActiveMinutes['activities-minutesVeryActive'];

      $scope.labelsActiveMins = [];
      $scope.dataActiveMins   = [[], []];
      $scope.seriesActiveMins = [' Very Active Minutes', ' 7-day Average'];

      for (var k = 0; k < $scope.activeMinsArray.length; k++) {
        $scope.labelsActiveMins.push($scope.activeMinsArray[k].dateTime.slice(5).replace('-', '/'));
        $scope.dataActiveMins[0].push(parseFloat($scope.activeMinsArray[k].value));
      }

      for (i = 0; i < 7; i++) {
        $scope.dataActiveMins[1].push(parseFloat($scope.activeMins7DayAverage.replace(',', '')));
      }

    });
  };

  $scope.getFitBitData();

});
