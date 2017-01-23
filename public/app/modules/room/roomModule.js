(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:roomModule
	 * @description
	 * # roomModule
	 * Room Module of the Pollspeak app
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	angular.module('room', ['socketio', 'chart.js'])
		.run(setupSocketIO);

	setupSocketIO.$inject = ['socketio', '$rootScope'];

	function setupSocketIO(socketio, $rootscope){
		console.log("Set up socket io");
		console.log(socketio);
		socketio.init();
	}
})();
