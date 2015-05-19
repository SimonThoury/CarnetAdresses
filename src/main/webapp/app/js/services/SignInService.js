/**
 * 
 */

angular.module("carnetAdresses").factory("SignInService", function($http) {
	return {
		signIn: function(profil) {
			var credentials = "j_username=" + profil.login + "&j_password=" + profil.password;
			return $http({
				method: "POST",
				url: "/CarnetAdresses/j_spring_security_check",
				data: credentials,
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			});
		},

		setConnected: function(user) {
			sessionStorage.setItem("connected", user || "false");
		},

		setDisconnected: function() {
			sessionStorage.setItem("connected", "false");
		},

		isConnected: function() {
			var connectedUser = sessionStorage.getItem("connected");
			if(connectedUser && connectedUser != "false") {
				return true;
			}
			return false;
		},

		getConnectedUser: function() {
			var connectedUser = sessionStorage.getItem("connected");
			if(connectedUser && connectedUser != "false") {
				return connectedUser;
			}
			return null;
		}
	};
});