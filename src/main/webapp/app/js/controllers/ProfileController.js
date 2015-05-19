/**
 * Contrôleur de la page de profil
 */

angular.module("carnetAdresses").controller("ProfileController", function($scope, $location, ProfileService, SignInService, ModalService) {

	$scope.user = {};
	
	// Initialisation de la variable user
	ProfileService.getProfile(window.sessionStorage.getItem("connected"))
	.then(function(result){
		$scope.user = {entity: result.data};
	},
	function(error){
		console.log(error);
	});
	


});