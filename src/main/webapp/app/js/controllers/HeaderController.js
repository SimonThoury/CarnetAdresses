/**
 * Contrôleur du header
 */

angular.module("carnetAdresses").controller("HeaderController", function($scope, $location, $http, SignInService, ModalService) {

	$scope.signOut = function() {
		$http.get("/CarnetAdresses/j_spring_security_logout").then(
			function() {
				SignInService.setDisconnected();
				ModalService.openModal(
					"Déconnexion",
					"Vous avez été déconnecté(e) !",
					"OK"
				).result.then(
					goToHome,
					goToHome
				);
			}
		);
	};	
	
	$scope.currentPage = function() {
		return $location.path();
	};	
	
	$scope.isConnected = function() {
		return SignInService.isConnected();
	};	
	
	$scope.goToPage = function(path) {
		$location.path(path);
	};
	
	function goToHome() {
		$location.path("/");
	}	
	
});
