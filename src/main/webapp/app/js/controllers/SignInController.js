/**
 * Contrôleur de la page de connexion
 */

angular.module("carnetAdresses").controller("SignInController", function($scope, $location) {

	$scope.goToSignUp = function() {
		$location.path("/signup");
	};

});