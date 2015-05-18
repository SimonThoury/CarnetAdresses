/**
 * Déclaration du module de l'application
 * Injection du module Angular ngRoute pour faire le routage de l'appli
 * Injection du module Angular ui.bootstrap pour faire du bootstrap Angular
 */

angular.module("carnetAdresses", ["ngRoute", "ui.bootstrap"]).config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl:"app/views/home.html"
	})
	.when("/signin", {
		templateUrl:"app/views/signin.html",
		controller:"SignInController"
	})
	.when("/signup", {
		templateUrl:"app/views/signup.html",
		controller:"SignUpController"
	})	
	.otherwise({
		redirectTo: "/"
	})
});

