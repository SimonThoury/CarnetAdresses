/**
 * 
 */

angular.module("carnetAdresses").factory("ProfileService", function($http) {
	return {
		getProfile: function (login) {
			return   $http.get("/CarnetAdresses/rest/user/" + login);
		},
		
		deleteProfile: function (login) {
			return $http['put']("/CarnetAdresses/rest/user/" + login);
		},
		
		modifyProfile: function (login, newProfile) {
			return $http['put']("/CarnetAdresses/rest/user/modifyUser/" + login, newProfile);
		}	
	};
});
