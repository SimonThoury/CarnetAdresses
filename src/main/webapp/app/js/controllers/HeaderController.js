/**
 * Contrôleur du header
 */

angular.module("carnetAdresses").controller("HeaderController", function($scope, $location) {

	$scope.goToPage = function(path) {
		$location.path(path);
	};
	
});
