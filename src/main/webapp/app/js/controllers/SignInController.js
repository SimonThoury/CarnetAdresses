/**
 * Contrôleur de la page de connexion
 */

angular.module("carnetAdresses").controller("SignInController", function($scope, $location, $rootScope, SignInService, ModalService) {

	$scope.profil = {};
	$scope.inError = false;	
	
	$scope.signIn = function() {
		if($scope.signinForm.$valid) {
			SignInService.signIn($scope.profil).then(
				function(response) {
					SignInService.setConnected($scope.profil.login);
										
					ModalService.openModal(
						"Connexion réussie",
						"Bienvenu(e) " + $scope.profil.login,
						"OK"
					).result.then(	
						$scope.goToHome,
						$scope.goToHome
					);
				},
				function(error) {
					$scope.inError = true;
				}
			);
		}
	};	
	
	$scope.goToSignUp = function() {
		$location.path("/signup");
	};
	
	$scope.goToHome = function() {
		$location.path("/");
	};	

});