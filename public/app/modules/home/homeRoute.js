'use strict';

/**
 * @ngdoc function
 * @name app.route:homeRoute
 * @description
 * # homeRoute
 * Route of the Home Module 
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
