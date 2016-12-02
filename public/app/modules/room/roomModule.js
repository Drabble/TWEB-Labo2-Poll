(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:gefeature1Module
	 * @description
	 * # gefeature1Module
	 * Module of the github explorer app feature 1, displays a 
	 * list of the most starred repos on github
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	angular.module('room', ['socketio'])
		.run(setupSocketIO);

	setupSocketIO.$inject = ['socketio', '$rootScope'];

	function setupSocketIO(socketio, $rootscope){
		console.log("Set up socket io");
		console.log(socketio);
		socketio.init();
	}
})();
