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



