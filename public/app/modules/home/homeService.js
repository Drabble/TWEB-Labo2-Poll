(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:homeService
	 * @description
	 * # homeService
	 * Home Service of the Pollspeak app
     * @author Antoine Drabble
     * @author Guillaume Serneels
	 */

	angular
		.module('home')
		.factory('HomeService', Home);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Home.$inject = ['$http'];

	function Home($http) {

	}

})();
