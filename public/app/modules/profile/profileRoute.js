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

angular.module('profile')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('profile', {
				url: '/profile',
				templateUrl: 'app/modules/profile/profile.html',
				controller: 'ProfileCtrl',
				controllerAs: 'vm'
			});

	}]);
