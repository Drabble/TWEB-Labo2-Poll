(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:helpService
	 * @description
	 * # helpService
	 * Help Service of the Pollspeak app
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
