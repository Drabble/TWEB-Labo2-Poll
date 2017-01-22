'use strict';

/**
 * @ngdoc function
 * @name app.route:registerRoute
 * @description
 * # registerRoute
 * Route of the Register Module
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
