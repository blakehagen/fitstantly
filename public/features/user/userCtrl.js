var app = angular.module('fitstantly');

app.controller('UserCtrl', function ($scope, userService, $rootScope, $location) {

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
      var dateTemp = $scope.fitbitData.activities.best.total.steps.date;
      $scope.stepsRecordDate    = [];
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
      
    });
  };

  $scope.getFitBitData();
  
  //
  // // STEPS Chart Set Up ------------------------------------------------------------------
  //
  // var chartDataSteps;
  // chartDataSteps = $rootScope.chartDataSteps;
  // // console.log("chart steps: ", chartDataSteps);
  //
  // $scope.labels = [];
  // $scope.data = [[], []];
  //
  // for (var i = 0; i < chartDataSteps.length; i++) {
  //     $scope.labels.push(chartDataSteps[i].dateTime.slice(5).replace("-", "/"));
  //     $scope.data[0].push(parseInt(chartDataSteps[i].value));
  // };
  //
  // var sum = 0;
  // for (var i = 0; i < chartDataSteps.length; i++) {
  //     var sum = parseInt(chartDataSteps[i].value) + sum;
  // }
  //
  // var avg = sum / 7;
  // avg = Math.round(avg);
  // avgStepsWeek = avg;
  // // avgStepsWeek = numeral(avgStepsWeek).format('0,0');
  // // console.log('Avg steps last 7 days: ', avgStepsWeek);
  // for (var i = 0; i < 7; i++) {
  //     $scope.data[1].push(parseInt(avgStepsWeek));
  // };
  //
  // // ACTIVE MINUTES Chart Set Up ------------------------------------------------------------------
  //
  // var chartDataActiveMins;
  // chartDataActiveMins = $rootScope.chartDataActiveMins;
  // // console.log("chart active minutes: ", chartDataActiveMins);
  //
  // $scope.labelsActiveMins = [];
  // $scope.dataActiveMins = [[], []];
  //
  // for (var i = 0; i < chartDataActiveMins.length; i++) {
  //     $scope.labelsActiveMins.push(chartDataActiveMins[i].dateTime.slice(5).replace("-", "/"));
  //     $scope.dataActiveMins[0].push(parseInt(chartDataActiveMins[i].value));
  // };
  //
  // var sumActiveMins = 0;
  // for (var i = 0; i < chartDataActiveMins.length; i++) {
  //     var sumActiveMins = parseInt(chartDataActiveMins[i].value) + sumActiveMins;
  // }
  //
  // var avgActiveMins = sumActiveMins / 7;
  // avgActiveMins = Math.round(avgActiveMins);
  // avgActiveMinsWeek = avgActiveMins;
  //
  // for (var i = 0; i < 7; i++) {
  //     $scope.dataActiveMins[1].push(parseInt(avgActiveMinsWeek));
  // };
  //
  // //This is the STEPS chart on the User View-------------------
  //
  // $scope.labels;
  // $scope.series = [" Steps", " 7-day Average"];
  // $scope.data;
  //
  // //This is the ACTIVE MINUTES chart on the User View-------------------
  //
  // $scope.labelsActiveMins;
  // $scope.seriesActiveMins = [" Very Active Minutes", " 7-day Average"];
  // $scope.dataActiveMins;
  //
 
});
