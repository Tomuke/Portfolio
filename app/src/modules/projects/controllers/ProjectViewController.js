(function(angular){
	
	"use strict";

	angular.module('app')

		.controller('ProjectViewController', function($scope, $stateParams, ProjectService){

			$scope.project = null;

			ProjectService.getAllProjects()

				.then(function(data){
					$scope.project = ProjectService.getProjectBySlug($stateParams.slug);
				});

		});


})(angular);