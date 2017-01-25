(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:socketioService
	 * @description
	 * # socketioService
	 * Socketio Service of the Pollspeak app
	 * Inspired from
	 * https://codepen.io/mi-lee/post/integrate-socket-with-angular
	 * http://www.piecemeal.us/docs/socket.module.html
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	var socketio = angular.module('socketio', []);

	socketio.factory('socketio', socketFactory);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	socketFactory.$inject = ['$window', '$rootScope'];

	// Custom socketio client
	function socketFactory($window, $rootScope) {
		var socket;
		var services = {
			on: on,
			emit: emit,
			init: init,
		};

		return services;

		// Initialise socketio
		function init(){
			$window.socket = io();
		}

		// Handle new events
		function on(eventName, callback) {
			$window.socket.removeAllListeners(eventName);
			$window.socket.on(eventName, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					callback.apply($window.socket, args);
				});
			});
		}

		// Emit new events
		function emit(eventName, data, callback) {
			$window.socket.emit(eventName, data, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					if (callback) {
						callback.apply($window.socket, args);
					}
				});
			});
		}
	}
})();
