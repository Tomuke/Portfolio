(function(angular){

	"use strict";

	angular.module('app', ['ui.router'])

		.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

			// Routing setup
			$urlRouterProvider.when('', '/');
			$urlRouterProvider.otherwise('/404/');

			// Routing setup
			$stateProvider

				.state('about', {
				  url: '/About',
				  templateUrl: 'partials/state1.html',
				  controller: ''
				})

				.state('projects', {
				  url: '/Projects',
				  templateUrl: 'partials/state2.html',
				  controller: ''
				})

				.state('contact', {
				  url: '/Contact',
				  templateUrl: 'partials/state2.html',
				  controller: ''
				})

				.state('state2.list', {
				  url: '/list',
				    templateUrl: 'partials/state2.list.html',
				    controller: ''
			    });

			// Remove # prefix
			$locationProvider.html5Mode({
			    enabled: true,
			    requireBase: false
			});
		});

})(angular);