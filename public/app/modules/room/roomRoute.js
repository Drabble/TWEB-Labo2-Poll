'use strict';

/**
 * @ngdoc function
 * @name app.route:roomRoute
 * @description
 * # roomRoute
 * Route of the room Module
 * @author Antoine Drabble
 * @author Guillaume Serneels
 */

angular.module('room')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('room', {
				url: '/room/:id',
				templateUrl: 'app/modules/room/room.html',
				controller: 'RoomCtrl',
				controllerAs: 'vm'
			});

	}]);
