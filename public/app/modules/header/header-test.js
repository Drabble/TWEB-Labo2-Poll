(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:gefeature1Test
	 * @description
	 * # gefeature1Test
	 * Test of the github explorer app feature 1
	 * 
	 * @author Antoine Drabble
	 * @author Guillaume Serneels
	 */

	describe('header test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('poll');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('HeaderCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();