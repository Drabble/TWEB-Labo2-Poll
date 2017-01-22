(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:roomService
	 * @description
	 * # room1Service
	 * Service of the room Module 
     * @author Antoine Drabble
     * @author Guillaume Serneels
	 */

	angular
		.module('room')
		.factory('RoomService', Room);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Room.$inject = ['$http'];

	function Room($http) {

	}

})();
