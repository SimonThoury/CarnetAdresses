/**
 * Contrôleur de la page de profil
 */

angular.module("carnetAdresses").controller("ProfileController", function($scope, $location, ProfileService, SignInService, ModalService) {

	$scope.user = {};
	
	$scope.isModified = true;
	
	// Initialisation de la variable user
	ProfileService.getProfile(window.sessionStorage.getItem("connected"))
	.then(function(result){
		$scope.user = result.data;
	},
	function(error){
		console.log(error);
	});
	
	// // Modification de l'user
	$scope.modifyProfile = function () {
		ProfileService.modifyProfile($scope.user.login,$scope.user)
		.then(
			function(result) {			
				ModalService.openModal(
					"Mofification(s) effectuée(s)",
					"Votre profil a bien été modifié.",
					"OK"
				);
			}
		)
	}
	
	$scope.setModifyProfile = function () {
		$scope.isModified = false;
	}

	$scope.setProfileModified = function () {
		$scope.isModified = true;
	}
});