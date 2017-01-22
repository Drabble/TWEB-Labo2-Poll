(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:roomCreateService
	 * @description
	 * # roomCreateService
	 * Room Creation Service of the Pollspeak app
     * @author Antoine Drabble
     * @author Guillaume Serneels
	 */

	angular
		.module('roomCreate')
		.factory('RoomCreateService', RoomCreate);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	RoomCreate.$inject = ['$http'];

	function RoomCreate($http) {

	}

})();
