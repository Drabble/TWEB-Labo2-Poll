(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:loginService
	 * @description
	 * # loginService
	 * Login Service of the Pollspeak app
     * @author Antoine Drabble
     * @author Guillaume Serneels
	 */

	angular
		.module('login')
		.factory('LoginService', Login);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Login.$inject = ['$http'];

	function Login($http) {

	}

})();
