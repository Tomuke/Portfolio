(function(angular){

	"use strict";

	angular.module('MyApp', ['ngRoute'])

		.config(['$routeProvider', function($routeProvider){

			$routeProvider

				.when('/', {
					templateUrl: 'templates/newTicket.htm',
					controller: 'ticketsController'
				})

				.when('/Projects', {
					templateUrl: 'templates/tickets.htm',
					controller: 'ticketsController'
				})

				.when('/Projects/:projectId', {
					templateUrl: 'templates/ticketDetails.htm',
					controller: 'ticketsController'
				})

				.otherwise({
					redirectTo: '/'
				});

				$locationProvider.html5Mode({
				    enabled: true,
				    requireBase: false
				});
		}]);




})(angular);