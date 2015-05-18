/**
 * Contrôleur de la page d'enregistrement de compte
 */

angular.module("carnetAdresses").controller("SignUpController", function($scope, $location) {
	
	$scope.goToSignIn = function() {
		$location.path("/signin");
	};
		
});
