
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

    var socketio = angular.module('socketio', []);

    socketio.factory('socketio', socketFactory);
 	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	socketFactory.$inject = ['$window', '$rootScope'];

	function socketFactory($window, $rootScope) {
        var socket;
        var services = {
            on: on,
            emit: emit,
            init: init,
            join: join,
            emitTo: emitTo
        }

        return services;

        function init(){
            var ioUrl = "http://localhost:5000";
            $window.socket = io(ioUrl);
        }

        function on(eventName, callback) {
            $window.socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply($window.socket, args);
                });
            });
        }

        function join(roomName) {
            $window.socket.join(roomName);
        }

        // TODO : UTILISER LE $scope pour la réception des callback

        function emitTo(roomName, eventName, data, callback){
            $window.socket.to(roomName).emit(eventName, data, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    if (callback) {
                        callback.apply($window.socket, args);
                    }
                });
            });
        }

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
