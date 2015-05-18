/**
 * 
 */

angular.module("carnetAdresses").factory("ModalService",function($http, $location, $modal) {
	return {
		openModal : function(headerText, bodyText, footerText) {
			return $modal.open({
				animation: true,
				templateUrl: 'app/views/modal.html',
				controller: 'ModalController',
				resolve: {
					texts: function() {
						return {
							"headerText": headerText,
							"bodyText": bodyText,
							"footerText": footerText
						};
					}
				}
			});
		}
	}
})