(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:profileService
	 * @description
	 * # profileService
	 * Profile Service of the Pollspeak app
     * @author Antoine Drabble
     * @author Guillaume Serneels
	 */

	angular
		.module('profile')
		.factory('ProfileService', Profile);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Profile.$inject = ['$http'];

	function Profile($http) {

	}

})();
