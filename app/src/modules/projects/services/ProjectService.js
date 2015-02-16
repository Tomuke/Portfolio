(function(angular){
	
	"use strict";

	angular.module('app')

		.factory('ProjectService', function($http, $q){

			var getAllProjects = function(){

				var deferred = $q.defer();

				// Request
				$http.get('api/projects.json')

					.success(function(data, status, headers, config) {
						deferred.resolve(data.projects);
					})

					.error(function(data, status, headers, config) {
						deferred.reject("Unable to find projects.");
					});

				return deferred.promise;

			};

			return {

				getAllProjects: getAllProjects

			};

		});

})(angular);