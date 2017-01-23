(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:homeTest
	 * @description
	 * # homeTest
	 * Test of the Home Module 
	 * 
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	describe('home test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('poll');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('HomeCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
