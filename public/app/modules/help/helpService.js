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
		.module('help')
		.factory('HelpService', Help);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Help.$inject = ['$http'];

	function Help($http) {

	}

})();
