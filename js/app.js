var app = angular.module('fitstantly', ['ngRoute', 'chart.js']);

app.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'http://blakehagen.github.io/fitstantly/js/home/homeTemplate.html',
			controller: 'HomeCtrl'
		})

		.when('/user', {
			templateUrl: 'http://blakehagen.github.io/fitstantly/js/userInfo/userInfoTemplate.html',
			controller: 'UserCtrl'
		})

		.when('/info', {
			templateUrl: 'http://blakehagen.github.io/fitstantly/js/home/infoTemplate.html',
			controller: 'HomeCtrl'
		})

		.when('/help', {
			templateUrl: 'http://blakehagen.github.io/fitstantly/js/home/helpTemplate.html',
			controller: 'HomeCtrl'
		})

		.otherwise({
			redirectTo: '/'
		});




});

app.run(function($rootScope, $location, $anchorScroll) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();  
  });
});



