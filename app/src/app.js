(function(angular){

	"use strict";

	angular.module('app', ['ui.router'])

		.config(function($stateProvider, $urlRouterProvider) {

			// No matches 
			$urlRouterProvider.otherwise("/Projects");

			// Routing setup
			$stateProvider

				.state('about', {
					url: '/About',
					templateUrl: 'src/modules/about/views/about.htm'
				})

				.state('projects', {
					url: '/Projects',
					templateUrl: 'src/modules/projects/views/project-list.htm',
					controller: 'ProjectController'
				})

				.state('skills', {
					url: '/Skills',
					templateUrl: 'src/modules/skills/views/skills-list.htm'
				})

				.state('contact', {
					url: '/Contact',
					templateUrl: 'src/modules/contact/views/contact.htm'
				})
		});

})(angular);