(function(angular){

	"use strict";

	angular.module('app')

		.controller('ProjectController', function($scope, ProjectService){

			// Undefined here WHYY?!
			console.log(ProjectService.allProjects());

			// List of all projects
			$scope.projects = ProjectService.allProjects();

		});

})(angular);