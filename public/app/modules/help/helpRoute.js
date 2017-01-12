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

angular.module('help')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('help', {
				url: '/help',
				templateUrl: 'app/modules/help/help.html',
				controller: 'HelpCtrl',
				controllerAs: 'vm'
			});

	}]);
