(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:gefeature1Service
	 * @description
	 * # gefeature1Service
	 * Service of the github explorer app feature 1
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
