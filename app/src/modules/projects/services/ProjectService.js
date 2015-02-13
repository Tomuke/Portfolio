(function(angular){
	
	"use strict";

	angular.module('app', ['ui-router'])

		.factory('ProjectService', function($http, $q){


			var getProjects = function(){

				var deferred = $q.defer();

				// Request
				$http.get('api/projects.json')

					.success(function(data, status, headers, config) {
						deferred.resolve(data);
					})

					.error(function(data, status, headers, config) {
						deferred.reject("Unable to find projects.");
					});

				return deferred.promise;

			};

			var list = function(){

				var projects = getProjects();

				projects.then(

					// Success
					function(){
						return projects;
					},

					// Failiure
					function(){
						// Handle exceptions here...
					},

					// Notify
					function(){
						// Feedback some status update to the page here...
					}

				);

			};

			return {

				allProjects: list

			};

		});

})(angular);