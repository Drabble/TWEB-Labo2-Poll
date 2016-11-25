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

angular.module('register')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('register', {
				url: '/register',
				templateUrl: 'app/modules/register/register.html',
				controller: 'RegisterCtrl',
				controllerAs: 'vm'
			});

	}]);
