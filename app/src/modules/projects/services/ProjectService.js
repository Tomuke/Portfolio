(function(angular){
	
	"use strict";

	angular.module('app')

		.factory('ProjectService', function($http, $q){

			var projects = null;

			var getAllProjects = function(){

				var deferred = $q.defer();

				// Request
				$http.get('api/projects.json')

					.success(function(data, status, headers, config) {
						projects = data.projects;
						deferred.resolve(data.projects);
					})

					.error(function(data, status, headers, config) {
						deferred.reject("Unable to find projects.");
					});

				return deferred.promise;

			};

			var getProjectBySlug = function(slug){

				// Get project by it's unique project name
				if(projects[slug])
				{
					return projects[slug];
				}

			};

			return {
				getAllProjects: getAllProjects,
				getProjectBySlug: getProjectBySlug

			};

		});

})(angular);
