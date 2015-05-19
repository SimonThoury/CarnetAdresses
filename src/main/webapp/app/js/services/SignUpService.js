/**
 * 
 */

angular.module("carnetAdresses").factory("SignUpService", function ($http) {
	return {
		signUp: function (profil) {
			return $http.post("/CarnetAdresses/rest/user", profil)
		}
	}
});