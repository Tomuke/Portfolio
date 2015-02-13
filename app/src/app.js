(function(angular){

	"use strict";

	angular.module('app', ['ui.router'])

		.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

			// Routing setup
			$stateProvider

				.state('about', {
				  url: '/About',
				  templateUrl: 'src/modules/projects/state1.html',
				  controller: ''
				})

				.state('projects', {
				  url: '/Projects',
				  templateUrl: 'src/modules/projects/state2.html',
				  controller: ''
				})

				.state('contact', {
				  url: '/Contact',
				  templateUrl: 'src/modules/projects/state2.html',
				  controller: ''
				})

				.state('state2.list', {
				  url: '/list',
				    templateUrl: 'src/modules/projects/state2.list.html',
				    controller: ''
			    });

			// Remove # prefix
			$locationProvider.html5Mode({
			    enabled: true,
			    requireBase: false
			});
		});

})(angular);