'use strict';

/**
 * @ngdoc function
 * @name app.route:helpRoute
 * @description
 * # helpRoute
 * Route of the Help Module 
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
