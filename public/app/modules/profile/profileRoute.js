'use strict';

/**
 * @ngdoc function
 * @name app.route:profileRoute
 * @description
 * # profileRoute
 * Route of the Profile Module
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
