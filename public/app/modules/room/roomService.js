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
		.module('room')
		.factory('RoomService', Room);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Room.$inject = ['$http', 'socketio'];

	function Room($http, socketio) {
		socketio.on("welcome", function(msg){
			console.log(msg);
		});

		return {};
	}

})();
