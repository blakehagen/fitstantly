var app = angular.module('fitstantly', ['ngRoute', 'chart.js']);

app.config(function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '/js/home/homeTemplate.html',
			controller: 'HomeCtrl'
		})

		.when('/user', {
			templateUrl: '/js/userInfo/userInfoTemplate.html',
			controller: 'UserCtrl'
		})

		.when('/info', {
			templateUrl: '/js/home/infoTemplate.html',
			controller: 'HomeCtrl'
		})

		.when('/help', {
			templateUrl: '/js/home/helpTemplate.html',
			controller: 'HomeCtrl'
		})

		.otherwise({
			redirectTo: '/'
		});


		$locationProvider.html5Mode(true);


});



