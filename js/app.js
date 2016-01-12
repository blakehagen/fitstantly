var app = angular.module('fitstantly', ['ngRoute', 'chart.js']);

app.config(function($routeProvider) {

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
<<<<<<< HEAD
			templateUrl: '/js/home/infoTemplate.html',
=======
			templateUrl: '/js/info/infoTemplate.html',
>>>>>>> 9175f850e40b60c8573779437fbbcc1d52e44df3
			controller: 'HomeCtrl'
		})

		.when('/help', {
<<<<<<< HEAD
			templateUrl: '/js/home/helpTemplate.html',
=======
			templateUrl: '/js/help/helpTemplate.html',
>>>>>>> 9175f850e40b60c8573779437fbbcc1d52e44df3
			controller: 'HomeCtrl'
		})

		.otherwise({
			redirectTo: '/'
		});

<<<<<<< HEAD



});

=======
});

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})


>>>>>>> 9175f850e40b60c8573779437fbbcc1d52e44df3


