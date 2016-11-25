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

angular.module('home')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			});

	}]);
