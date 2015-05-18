/**
 * Contrôleur de la page d'enregistrement de compte
 */

angular.module("carnetAdresses").controller("SignUpController", function($scope, $location, SignUpService, ModalService) {
	
	$scope.profil = {};

	// Fonction de sauvegarde du formulaire
	$scope.saveProfil = function () {
		SignUpService.saveProfil($scope.profil) 
		.then(
			function(result) {			
				$scope.saveOk();					
				angular.extend($scope.profil, {
					firstName: '', lastName: '',
					email: '', login: '',
					password: '', telephone: ''
				});						
			},
			function(error) {
				switch(error.status) {
				case 400 :
					$scope.saveExists();
					break;
				default :
					$scope.saveNoOk();
				}
			}
		);
	};
	
	$scope.saveOk = function () {
		ModalService.openModal(
			"Validation de l'inscription",
			"Félicitations, votre inscription a bien été prise en compte !",
			"OK"
		).result.then(
			$scope.goToSignIn,
			$scope.goToSignIn	
		);
	};	
	
	$scope.saveNoOk = function () {
		ModalService.openModal(
			"Échec de l'inscription",
			"Aïe, l'inscription n'a pas fonctionné !",
			"OK"
		);
	};	
	
	$scope.saveExists = function () {
		ModalService.openModal(
			"Échec de l'inscription",
			"L'adresse mail ou le login que vous avez choisi est déjà utilisé pour un compte !",
			"OK"
		);
	};		
		
	
	$scope.goToSignIn = function() {
		$location.path("/signin");
	};
		
});
