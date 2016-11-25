'use strict';

/**
 * @ngdoc function
 * @name app.route:gefeature1Route
 * @description
 * # gefeature1Route
 * Route of the github explorer app feature 1
 * @author Antoine Drabble
 * @author Guillaume Serneels
 */

angular.module('room')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('room', {
				url: '/room',
				templateUrl: 'app/modules/room/room.html',
				controller: 'RoomCtrl',
				controllerAs: 'vm'
			});

	}]);
