var app = angular.module('fitstantly', ['ngRoute', 'chart.js']);

app.config(function($routeProvider) {

	$routeProvider
		.when('Fitstantly/', {
			templateUrl: '/js/home/homeTemplate.html',
			controller: 'HomeCtrl'
		})

		.when('/user', {
			templateUrl: '/js/userInfo/userInfoTemplate.html',
			controller: 'UserCtrl'
		})

		.when('Fitstantly/info', {
			templateUrl: '/js/home/infoTemplate.html',
			controller: 'HomeCtrl'
		})

		.when('Fitstantly/help', {
			templateUrl: '/js/home/helpTemplate.html',
			controller: 'HomeCtrl'
		})

		.otherwise({
			redirectTo: 'Fitstantly/'
		})




});



