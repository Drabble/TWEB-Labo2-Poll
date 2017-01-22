'use strict';

/**
 * @ngdoc function
 * @name app.route:roomCreateRoute
 * @description
 * # roomCreateRoute
 * Route of the roomCreate Module 
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
