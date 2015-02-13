(function(angular){

	"use strict";

	angular.module('app', ['ui-router'])

		.controller('ProjectController', function(($scope, $routeParams, ProjectService){
			
			$scope.projects = ProjectService.allProjects();

		});

})(angular);