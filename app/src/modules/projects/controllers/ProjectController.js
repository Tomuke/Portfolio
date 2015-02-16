(function(angular){

	"use strict";

	angular.module('app')

		.controller('ProjectController', function($scope, ProjectService){

			$scope.projects = null;

			ProjectService.getAllProjects()

				.then(function(data){
					$scope.projects = data;
				});

		});

})(angular);