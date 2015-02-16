(function(angular){
	
	"use strict";

	angular.module('app')

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

				return projects.then(

					// Success
					function(data){
						return data;
					},

					// Failiure
					function(reason){
						// Handle exceptions somehow
						console.log(reason);
					},

					// Notify
					function(){
						// Feedback some status to the page
					}

				);

			};

			return {

				// This should = data from success function?
				allProjects: list

			};

		});

})(angular);