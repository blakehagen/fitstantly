var app = angular.module('fitstantly', ['ngRoute', 'chart.js']);

app.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'fitstantly/js/home/homeTemplate.html',
			controller: 'HomeCtrl'
		})

		.when('/user', {
			templateUrl: 'fitstantly/js/userInfo/userInfoTemplate.html',
			controller: 'UserCtrl'
		})

		.when('/info', {
			templateUrl: 'fitstantly/js/home/infoTemplate.html',
			controller: 'HomeCtrl'
		})

		.when('/help', {
			templateUrl: 'fitstantly/js/home/helpTemplate.html',
			controller: 'HomeCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})




});



