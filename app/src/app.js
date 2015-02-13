(function(angular){

	"use strict";

	angular.module('app', ['ui.router'])

		.config(function($stateProvider, $urlRouterProvider) {

			// No matches 
			$urlRouterProvider.otherwise("/Projects");

			// Routing setup
			$stateProvider

				.state('projects', {
				  url: '/Projects',
				  templateUrl: 'src/modules/projects/views/project-list.htm',
				  controller: 'ProjectController'
				});
			});

})(angular);