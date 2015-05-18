/**
 * 
 */

angular.module("carnetAdresses").factory("SignUpService", function ($http) {
	return {
		saveProfil: function (profil) {
			return $http.post("/CarnetAdresses/rest/user", profil)
		}
	}
});