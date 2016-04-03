var app = angular.module('fitstantly', ['ngRoute', 'chart.js']);

app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './features/home/homeTemplate.html',
      controller: 'HomeCtrl'
    })

    .when('/user/:id', {
      templateUrl: './features/user/userInfoTemplate.html',
      controller: 'UserCtrl'
    })

    .when('/info', {
      templateUrl: './features/info/infoTemplate.html',
      controller: 'HomeCtrl'
    })

    .when('/help', {
      templateUrl: './features/help/helpTemplate.html',
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




