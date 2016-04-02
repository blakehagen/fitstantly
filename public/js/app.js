var app = angular.module('fitstantly', ['ngRoute', 'chart.js']);

app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './js/home/homeTemplate.html',
      controller: 'HomeCtrl'
    })

    .when('/user', {
      templateUrl: './js/userInfo/userInfoTemplate.html',
      controller: 'UserCtrl'
    })

    .when('/info', {
      templateUrl: './js/info/infoTemplate.html',
      controller: 'HomeCtrl'
    })

    .when('/help', {
      templateUrl: './js/help/helpTemplate.html',
      controller: 'HomeCtrl'
    })

    .otherwise({
      redirectTo: '/'
    });

});

app.run(function ($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();
  });
})




