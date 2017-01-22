(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:helpTest
	 * @description
	 * # helpTest
	 * Test of the Help Module 
	 * 
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	describe('help test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('githubexplorer');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('HelpCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
