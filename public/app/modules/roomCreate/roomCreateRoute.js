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

angular.module('roomCreate')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('roomCreate', {
				url: '/roomCreate',
				templateUrl: 'app/modules/roomCreate/roomCreate.html',
				controller: 'RoomCreateCtrl',
				controllerAs: 'vm'
			});

	}]);
