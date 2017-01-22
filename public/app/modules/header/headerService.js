(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:headerService
	 * @description
	 * # headerService
	 * Header Service of the Pollspeak app
     * @author Antoine Drabble
     * @author Guillaume Serneels
	 */

	angular
		.module('header')
		.factory('HeaderService', Header);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Header.$inject = ['$http'];

	function Header($http) {

	}

})();
